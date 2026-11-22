/**
 * DE product preview validation (13 routes, noindex, German HTML). Requires dist-de-preview from build:de-preview.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const previewDir = path.join(root, "dist-de-preview");

const DE_PATHS = [
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

let failed = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error(`FAIL: ${msg}`);
    failed++;
  } else {
    console.log(`PASS: ${msg}`);
  }
}

assert(DE_PATHS.length === 13, "manifest expects 13 DE product URLs");

for (const p of DE_PATHS) {
  const file =
    p === "/de"
      ? path.join(previewDir, "de", "index.html")
      : path.join(previewDir, ...p.slice(1).split("/"), "index.html");
  assert(fs.existsSync(file), `static HTML exists for ${p}`);
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  assert(html.includes('lang="de"'), `${p}: lang=de`);
  assert(html.includes('data-ssg="de-preview"'), `${p}: data-ssg=de-preview`);
  assert(/noindex/i.test(html), `${p}: noindex present`);
  assert(html.includes(`https://www.carcarediary.com${p}`), `${p}: canonical`);
  assert(!html.includes("/de/blog/"), `${p}: no unpublished DE blog links in HTML`);
}

if (failed) {
  console.error(`\nvalidate-de-poc: ${failed} failure(s).`);
  process.exit(1);
}
console.log("\nvalidate-de-poc: all checks passed.");