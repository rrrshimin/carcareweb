/**
 * Report internal /blog/ links in FR content modules vs registry FR routes.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EN_TO_FR_BLOG_PATH } from "./data/fr-en-blog-paths.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "src", "fr-poc", "content");

const EN_TO_FR = EN_TO_FR_BLOG_PATH;

const NO_FR = new Set([]);

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".fr.ts"));
const shouldMap = [];
const okEnOnly = [];
const okFr = [];

for (const file of files) {
  const src = fs.readFileSync(path.join(contentDir, file), "utf8");
  const re = /href:\s*"(\/blog\/[^"]+)"/g;
  let m;
  while ((m = re.exec(src))) {
    const href = m[1];
    if (m.input.slice(m.index - 30, m.index).includes("hreflang")) continue;
    if (EN_TO_FR[href]) {
      shouldMap.push({ file, href, fr: EN_TO_FR[href] });
    } else if (NO_FR.has(href)) {
      okEnOnly.push({ file, href, note: "no FR translation (road trip)" });
    } else {
      okEnOnly.push({ file, href, note: "no FR registry entry — keep EN" });
    }
  }
  const frLinks = [...src.matchAll(/href:\s*"(\/fr\/blog\/[^"]+)"/g)].map((x) => x[1]);
  for (const h of frLinks) okFr.push({ file, href: h });
}

console.log("=== FR internal link audit ===\n");
console.log(`Content modules: ${files.length}`);
console.log(`FR blog links: ${okFr.length}`);
console.log(`EN /blog/ body links needing FR map: ${shouldMap.length}`);
if (shouldMap.length) {
  console.log("\nShould map to FR (fix content):");
  for (const row of shouldMap) console.log(`  ${row.file}: ${row.href} -> ${row.fr}`);
}
console.log(`\nEN-only body links (expected when no FR): ${okEnOnly.length}`);
const byHref = new Map();
for (const row of okEnOnly) {
  if (!byHref.has(row.href)) byHref.set(row.href, row.note);
}
for (const [href, note] of [...byHref.entries()].sort()) {
  console.log(`  ${href} — ${note}`);
}
if (shouldMap.length) process.exit(1);
console.log("\nPASS: no EN blog links in body where FR route exists.");
