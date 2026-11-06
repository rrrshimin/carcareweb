/**
 * Post-vite: prerender published FR pages into dist/ for production.
 * Requires dist/index.html from `vite build` and matching registry.prod.generated.ts.
 * Skips all FR static files when zero published guides.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const ssrOutDir = path.join(projectRoot, "dist-ssr-fr-prod");

function stripDefaultSeo(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta name="description"[^>]*>\s*/gi, "")
    .replace(/<link rel="canonical"[^>]*>\s*/gi, "")
    .replace(/<meta property="og:[^"]+"[^>]*>\s*/gi, "")
    .replace(/<meta name="twitter:[^"]+"[^>]*>\s*/gi, "");
}

function buildProdFrPageHtml(shellHtml, { appHtml, headSeo, lang }) {
  let html = stripDefaultSeo(shellHtml);
  html = html.replace("<html lang=\"en\">", `<html lang="${lang}" data-ssg="fr-prod">`);
  html = html.replace(
    /<meta name="viewport"[^>]*>/,
    (match) => `${match}\n    ${headSeo}`,
  );
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root" data-ssg="fr-prod">${appHtml}</div>`,
  );
  return html;
}

execSync("node scripts/generate-fr-registry-prod.mjs", {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env,
});

const prodSsgEnv = { ...process.env, FR_POC: undefined };
delete prodSsgEnv.FR_POC;

execSync("npx vite build --ssr src/fr-poc/entry-server-prod-ssg.tsx --outDir dist-ssr-fr-prod", {
  cwd: projectRoot,
  stdio: "inherit",
  env: prodSsgEnv,
});

const {
  renderLocalizedGuideAppHtml,
  buildLocalizedGuideHeadHtml,
  renderFrBlogHubAppHtml,
  buildFrBlogHubHeadHtml,
  getPublishedSsgPaths,
  pathToStaticRelativeDir,
} = await import(pathToFileURL(path.join(ssrOutDir, "entry-server-prod-ssg.js")).href);

const shellPath = path.join(distDir, "index.html");
if (!fs.existsSync(shellPath)) {
  console.error("build-fr-prod-ssg: dist/index.html missing — run vite build first");
  process.exit(1);
}

const frRoot = path.join(distDir, "fr");
if (fs.existsSync(frRoot)) {
  fs.rmSync(frRoot, { recursive: true });
}

const shellHtml = fs.readFileSync(shellPath, "utf8");
const articlePaths = getPublishedSsgPaths();
const written = [];

if (articlePaths.length === 0) {
  console.log("fr-prod-ssg: 0 published FR guides — removed any prior dist/fr/");
  process.exit(0);
}

for (const articlePath of articlePaths) {
  const appHtml = renderLocalizedGuideAppHtml(articlePath);
  const headSeo = buildLocalizedGuideHeadHtml(articlePath);
  const lang = "fr";
  const html = buildProdFrPageHtml(shellHtml, { appHtml, headSeo, lang });
  const outDir = path.join(distDir, ...pathToStaticRelativeDir(articlePath).split("/"));
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, "index.html");
  fs.writeFileSync(outFile, html, "utf8");
  written.push(outFile);
}

const hubPath = "/fr/blog";
const hubAppHtml = renderFrBlogHubAppHtml();
const hubHeadSeo = buildFrBlogHubHeadHtml();
const hubHtml = buildProdFrPageHtml(shellHtml, {
  appHtml: hubAppHtml,
  headSeo: hubHeadSeo,
  lang: "fr",
});
const hubOutDir = path.join(distDir, ...pathToStaticRelativeDir(hubPath).split("/"));
fs.mkdirSync(hubOutDir, { recursive: true });
const hubOutFile = path.join(hubOutDir, "index.html");
fs.writeFileSync(hubOutFile, hubHtml, "utf8");
written.push(hubOutFile);

console.log(`fr-prod-ssg: wrote ${written.length} static page(s) under ${distDir}:`);
for (const file of written) {
  console.log(`  ${file}`);
}
