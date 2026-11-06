/**
 * After `npm run build`, verifies FR article body strings from unpublished modules
 * are absent from dist/assets/*.js (production must not ship draft content).
 *
 * Uses FR_PROD_ROUTE_FIXTURE as optional JSON array of { id, published } to
 * simulate mixed publish states without editing registry.ts.
 *
 * When FR_PROD_ROUTE_FIXTURE is unset, uses published flags parsed from registry.ts.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const distAssets = path.join(root, "dist", "assets");
const registryPath = path.join(root, "src/fr-poc/registry.ts");

const ENTRY_RE =
  /\{\s*id:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?path:\s*"(\/fr\/blog\/[^"]+)"[\s\S]*?published:\s*(true|false)[\s\S]*?content:\s*(\w+),/g;

function walkJsFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`validate-fr-prod-routing: missing ${dir} — run npm run build first`);
    process.exit(1);
  }
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) out.push(...walkJsFiles(p));
    else if (name.endsWith(".js")) out.push(p);
  }
  return out;
}

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

function extractBodySnippet(id) {
  const p = path.join(root, "src/fr-poc/content", `${id}.fr.ts`);
  const t = fs.readFileSync(p, "utf8");
  const q = /question:\s*"([^"]{40,})"/.exec(t);
  if (q) return q[1].slice(0, 80);
  const lede = /lede:\s*`([^`]{40,})`/s.exec(t);
  if (lede) return lede[1].replace(/\s+/g, " ").trim().slice(0, 80);
  throw new Error(`Could not extract snippet from ${p}`);
}

function parseRegistry(source) {
  const rows = [];
  let m;
  ENTRY_RE.lastIndex = 0;
  while ((m = ENTRY_RE.exec(source)) !== null) {
    rows.push({
      id: m[1],
      published: m[4] === "true",
    });
  }
  return rows;
}

const fixtureMap = loadFixtureMap();
const registrySource = fs.readFileSync(registryPath, "utf8");
let rows = parseRegistry(registrySource);
if (rows.length === 0) {
  console.error("validate-fr-prod-routing: no rows parsed from registry.ts");
  process.exit(1);
}

rows = rows.map((r) => {
  if (fixtureMap?.has(r.id)) {
    return { ...r, published: fixtureMap.get(r.id) };
  }
  return r;
});

const bundle = walkJsFiles(distAssets)
  .map((f) => fs.readFileSync(f, "utf8"))
  .join("\n");

let failed = 0;
function pass(msg) {
  console.log(`PASS: ${msg}`);
}
function fail(msg) {
  console.error(`FAIL: ${msg}`);
  failed++;
}

for (const row of rows) {
  let snippet;
  try {
    snippet = extractBodySnippet(row.id);
  } catch (e) {
    fail(`${row.id}: ${e.message}`);
    continue;
  }
  if (row.published) {
    if (!bundle.includes(snippet)) fail(`published ${row.id}: expected article snippet in dist bundle`);
    else pass(`published ${row.id}: snippet in bundle`);
  } else {
    if (bundle.includes(snippet)) fail(`unpublished ${row.id}: article snippet must not be in dist bundle`);
    else pass(`unpublished ${row.id}: snippet absent`);
  }
}

if (failed) process.exit(1);
console.log("\nvalidate-fr-prod-routing: all checks passed.");
