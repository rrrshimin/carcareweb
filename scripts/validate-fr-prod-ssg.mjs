/**
 * Validates dist/fr/ static HTML after production build + build-fr-prod-ssg.
 * Respects FR_PROD_ROUTE_FIXTURE the same way as generate-fr-registry-prod.mjs
 * (re-run `npm run build` with the same env before this script).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const registryPath = path.join(root, "src/fr-poc/registry.ts");

const ENTRY_RE =
  /\{\s*id:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?path:\s*"(\/fr\/blog\/[^"]+)"[\s\S]*?published:\s*(true|false)/g;

function loadFixtureMap() {
  const raw = process.env.FR_PROD_ROUTE_FIXTURE;
  if (!raw?.trim()) return null;
  try {
    const arr = JSON.parse(raw);
    return new Map(arr.map((x) => [x.id, x.published === true]));
  } catch {
    console.error("FR_PROD_ROUTE_FIXTURE must be valid JSON array");
    process.exit(1);
  }
}

function walkIndexHtmlFilesUnderFrBlog() {
  const base = path.join(distDir, "fr", "blog");
  if (!fs.existsSync(base)) return [];
  const out = [];
  function walk(current) {
    for (const name of fs.readdirSync(current, { withFileTypes: true })) {
      const p = path.join(current, name.name);
      if (name.isDirectory()) walk(p);
      else if (name.name === "index.html") out.push(p);
    }
  }
  walk(base);
  return out;
}

function htmlPathToUrl(fullPath) {
  const rel = path.relative(distDir, fullPath).replace(/\\/g, "/");
  return "/" + rel.replace(/\/index\.html$/, "");
}

let failed = 0;
function pass(msg) {
  console.log(`PASS: ${msg}`);
}
function fail(msg) {
  console.error(`FAIL: ${msg}`);
  failed++;
}

const fixture = loadFixtureMap();
const source = fs.readFileSync(registryPath, "utf8");
const rows = [];
let m;
while ((m = ENTRY_RE.exec(source)) !== null) {
  const id = m[1];
  const pathStr = m[3];
  let published = m[4] === "true";
  if (fixture?.has(id)) published = fixture.get(id);
  rows.push({ id, path: pathStr, published });
}

const expectedPaths = new Set(rows.filter((r) => r.published).map((r) => r.path));
const hasHub = expectedPaths.size > 0;

const files = walkIndexHtmlFilesUnderFrBlog();

if (expectedPaths.size === 0) {
  if (files.length > 0) {
    fail(`expected 0 FR static pages, found ${files.length}: ${files.join(", ")}`);
  } else {
    pass("zero published: no dist/fr/blog/*.html");
  }
  if (failed) process.exit(1);
  console.log("\nvalidate-fr-prod-ssg: all checks passed.");
  process.exit(0);
}

const pathsOnDisk = new Set(files.map(htmlPathToUrl));
const hubUrl = "/fr/blog";
if (!pathsOnDisk.has(hubUrl)) fail(`missing hub ${hubUrl}/index.html`);
else pass("hub index.html present");

for (const p of expectedPaths) {
  if (!pathsOnDisk.has(p)) fail(`missing ${p}/index.html`);
  else pass(`article static ${p}`);
}

for (const row of rows) {
  if (!row.published && pathsOnDisk.has(row.path)) {
    fail(`unpublished ${row.id} must not have static HTML at ${row.path}`);
  }
}

const previewNoindexMarker = 'data-seo="fr-preview-noindex"';

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const url = htmlPathToUrl(file);
  if (!html.includes(`data-ssg="fr-prod"`)) fail(`${url}: missing data-ssg=fr-prod`);
  else pass(`${url}: data-ssg=fr-prod`);

  if (!html.includes(`lang="fr"`)) fail(`${url}: html lang not fr`);
  else pass(`${url}: lang=fr`);

  if (html.includes(previewNoindexMarker)) fail(`${url}: must not contain preview noindex marker`);
  else pass(`${url}: no preview noindex`);

  if (/<meta\s+name="robots"[^>]*noindex/i.test(html)) {
    fail(`${url}: must not use robots noindex (production FR is indexable)`);
  } else pass(`${url}: indexable (no noindex)`);
}

if (failed) process.exit(1);
console.log("\nvalidate-fr-prod-ssg: all checks passed.");
