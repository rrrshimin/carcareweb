/**
 * Post-vite: prerender published DE product pages into dist/de/.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const ssrOutDir = path.join(projectRoot, "dist-ssr-de-prod");

function stripDefaultSeo(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta name="description"[^>]*>\s*/gi, "")
    .replace(/<link rel="canonical"[^>]*>\s*/gi, "")
    .replace(/<meta property="og:[^"]+"[^>]*>\s*/gi, "")
    .replace(/<meta name="twitter:[^"]+"[^>]*>\s*/gi, "")
    .replace(/<meta name="robots"[^>]*>\s*/gi, "");
}

function buildProdDePageHtml(shellHtml, { appHtml, headSeo, lang }) {
  let html = stripDefaultSeo(shellHtml);
  html = html.replace("<html lang=\"en\">", `<html lang="${lang}" data-ssg="de-prod">`);
  html = html.replace(/<meta name="viewport"[^>]*>/, (match) => `${match}\n    ${headSeo}`);
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root" data-ssg="de-prod">${appHtml}</div>`,
  );
  return html;
}

const prodSsgEnv = { ...process.env, DE_POC: undefined, FR_POC: undefined };
delete prodSsgEnv.DE_POC;
delete prodSsgEnv.FR_POC;

execSync("npx vite build --ssr src/de-poc/entry-server-prod-ssg.tsx --outDir dist-ssr-de-prod", {
  cwd: projectRoot,
  stdio: "inherit",
  env: prodSsgEnv,
});

const {
  renderDeProductAppHtml,
  buildDeProductHeadHtml,
  getDeProductSsgPaths,
  pathToStaticRelativeDir,
} = await import(pathToFileURL(path.join(ssrOutDir, "entry-server-prod-ssg.js")).href);

const shellPath = path.join(distDir, "index.html");
if (!fs.existsSync(shellPath)) {
  console.error("build-de-prod-ssg: dist/index.html missing — run vite build first");
  process.exit(1);
}

const shellHtml = fs.readFileSync(shellPath, "utf8");
const productPaths = getDeProductSsgPaths();
const written = [];

for (const productPath of productPaths) {
  const appHtml = renderDeProductAppHtml(productPath);
  const headSeo = buildDeProductHeadHtml(productPath);
  const html = buildProdDePageHtml(shellHtml, { appHtml, headSeo, lang: "de" });
  const outDir = path.join(distDir, ...pathToStaticRelativeDir(productPath).split("/"));
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, "index.html");
  fs.writeFileSync(outFile, html, "utf8");
  written.push(outFile);
}

console.log(`de-prod-ssg: wrote ${written.length} static page(s) under ${distDir}:`);
for (const file of written) {
  console.log(`  ${file}`);
}