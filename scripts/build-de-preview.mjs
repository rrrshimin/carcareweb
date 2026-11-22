import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const previewDir = path.join(projectRoot, "dist-de-preview");
const ssrOutDir = path.join(projectRoot, "dist-ssr-de-poc");

const pocEnv = { ...process.env, DE_POC: "1" };

function stripDefaultSeo(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta name="description"[^>]*>\s*/gi, "")
    .replace(/<link rel="canonical"[^>]*>\s*/gi, "")
    .replace(/<meta property="og:[^"]+"[^>]*>\s*/gi, "")
    .replace(/<meta name="twitter:[^"]+"[^>]*>\s*/gi, "")
    .replace(/<meta name="robots"[^>]*>\s*/gi, "");
}

const PREVIEW_NOINDEX = `<meta name="robots" content="noindex, follow" data-seo="de-preview-noindex" />`;

function buildPreviewPageHtml(shellHtml, { appHtml, headSeo, lang }) {
  let html = stripDefaultSeo(shellHtml);
  html = html.replace("<html lang=\"en\">", `<html lang="${lang}" data-ssg="de-preview">`);
  html = html.replace(
    /<meta name="viewport"[^>]*>/,
    (match) => `${match}\n    ${headSeo}\n    ${PREVIEW_NOINDEX}`,
  );
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root" data-ssg="de-preview">${appHtml}</div>`,
  );
  return html;
}

function pathToStaticRelativeDir(entryPath) {
  return entryPath.replace(/^\//, "");
}

execSync("npx tsc -b", { cwd: projectRoot, stdio: "inherit", env: pocEnv });
execSync("npx vite build --outDir dist-de-preview", { cwd: projectRoot, stdio: "inherit", env: pocEnv });
execSync("npx vite build --ssr src/de-poc/entry-server.tsx --outDir dist-ssr-de-poc", {
  cwd: projectRoot,
  stdio: "inherit",
  env: pocEnv,
});

const {
  renderDeProductPreviewAppHtml,
  buildDeProductPreviewHeadHtml,
  getDePreviewSsgPaths,
} = await import(pathToFileURL(path.join(ssrOutDir, "entry-server.js")).href);

const shellHtml = fs.readFileSync(path.join(previewDir, "index.html"), "utf8");
const written = [];

for (const previewPath of getDePreviewSsgPaths()) {
  const appHtml = renderDeProductPreviewAppHtml(previewPath);
  const headSeo = buildDeProductPreviewHeadHtml(previewPath);
  const html = buildPreviewPageHtml(shellHtml, { appHtml, headSeo, lang: "de" });

  const outDir = path.join(previewDir, ...pathToStaticRelativeDir(previewPath).split("/"));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  written.push(previewPath);
}

console.log(`de-preview-ssg: wrote ${written.length} static page(s) under ${previewDir}:`);
for (const p of written) {
  console.log(`  ${p}`);
}