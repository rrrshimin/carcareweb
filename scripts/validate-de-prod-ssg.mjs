/**
 * Validates dist/de/ static HTML after production build + build-de-prod-ssg.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DE_PRODUCT_SSG_PATHS = [
  "/de",
  "/de/autowartung-app",
  "/de/wartungshistorie-auto",
  "/de/digitales-serviceheft-app",
  "/de/wartungsprotokoll-auto",
  "/de/wartungserinnerung-auto",
  "/de/wartungshistorie-teilen",
  "/de/so-funktioniert-carcare-diary",
  "/de/fuhrparkmanagement-app",
  "/de/fuhrpark-wartung-app",
  "/de/fuhrparkverwaltung-kleine-unternehmen",
  "/de/mietwagen-wartung",
  "/de/wartungsdokumentation-autohandel",
];

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");

function walkDeStaticIndexFiles() {
  const deRoot = path.join(distDir, "de");
  if (!fs.existsSync(deRoot)) return [];
  const out = [];
  function walk(current) {
    for (const name of fs.readdirSync(current, { withFileTypes: true })) {
      const p = path.join(current, name.name);
      if (name.isDirectory()) walk(p);
      else if (name.name === "index.html") out.push(p);
    }
  }
  walk(deRoot);
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

const files = walkDeStaticIndexFiles();
const pathsOnDisk = new Set(files.map(htmlPathToUrl));

for (const p of DE_PRODUCT_SSG_PATHS) {
  if (!pathsOnDisk.has(p)) fail(`missing product ${p}/index.html`);
  else pass(`product static ${p}`);
}

if (files.length !== DE_PRODUCT_SSG_PATHS.length) {
  fail(`expected ${DE_PRODUCT_SSG_PATHS.length} DE HTML files, found ${files.length}`);
}

const previewNoindexMarker = 'data-seo="de-preview-noindex"';

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const url = htmlPathToUrl(file);
  if (!html.includes(`data-ssg="de-prod"`)) fail(`${url}: missing data-ssg=de-prod`);
  else pass(`${url}: data-ssg=de-prod`);

  if (!html.includes(`lang="de"`)) fail(`${url}: html lang not de`);
  else pass(`${url}: lang=de`);

  if (html.includes(previewNoindexMarker)) fail(`${url}: must not contain preview noindex marker`);
  else pass(`${url}: no preview noindex`);

  if (/<meta\s+name="robots"[^>]*noindex/i.test(html)) {
    fail(`${url}: must not use robots noindex (production DE is indexable)`);
  } else pass(`${url}: indexable (no noindex)`);

  if (!html.includes('hreflang="de"')) fail(`${url}: missing hreflang de`);
  else pass(`${url}: hreflang de present`);
}

if (failed) process.exit(1);
console.log("\nvalidate-de-prod-ssg: all checks passed.");