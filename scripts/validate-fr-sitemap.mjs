/**
 * Validates dist/sitemap.xml: published FR URLs, no draft FR URLs,
 * and reciprocal xhtml:link hreflang (en, fr, x-default) on EN+FR article URLs and hubs.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EN_TO_FR_BLOG_PATH } from "./data/fr-en-blog-paths.mjs";

const SITE = "https://www.carcarediary.com";
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemapPath = path.join(root, "dist", "sitemap.xml");
const registryPath = path.join(root, "src/fr-poc/registry.ts");

const FR_TO_EN = Object.fromEntries(
  Object.entries(EN_TO_FR_BLOG_PATH).map(([en, fr]) => [fr, en]),
);

const ENTRY_RE =
  /\{\s*id:\s*"([^"]+)"[\s\S]*?path:\s*"(\/fr\/blog\/[^"]+)"[\s\S]*?published:\s*(true|false)/g;

function loadFixtureMap() {
  const raw = process.env.FR_PROD_ROUTE_FIXTURE;
  if (!raw?.trim()) return null;
  try {
    return new Map(JSON.parse(raw).map((x) => [x.id, x.published === true]));
  } catch {
    console.error("FR_PROD_ROUTE_FIXTURE must be valid JSON array");
    process.exit(1);
  }
}

function publishedPairs() {
  const fixture = loadFixtureMap();
  const source = fs.readFileSync(registryPath, "utf8");
  const pairs = [];
  let m;
  while ((m = ENTRY_RE.exec(source)) !== null) {
    const id = m[1];
    const frPath = m[2];
    let pub = m[3] === "true";
    if (fixture?.has(id)) pub = fixture.get(id);
    if (!pub) continue;
    const enPath = FR_TO_EN[frPath];
    if (!enPath) {
      console.error(`validate-fr-sitemap: missing EN path for ${frPath}`);
      process.exit(1);
    }
    pairs.push({ enPath, frPath, enUrl: `${SITE}${enPath}`, frUrl: `${SITE}${frPath}` });
  }
  return pairs;
}

function parseUrlBlocks(xml) {
  const blocks = [];
  const re = /<url>\s*([\s\S]*?)\s*<\/url>/g;
  let m;
  while ((m = re.exec(xml)) !== null) blocks.push(m[1]);
  return blocks;
}

function locFromBlock(block) {
  const m = /<loc>([^<]+)<\/loc>/.exec(block);
  return m ? m[1] : null;
}

function hreflangMap(block) {
  const map = new Map();
  const re =
    /<xhtml:link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"[^>]*\/?>/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    map.set(m[1], m[2]);
  }
  return map;
}

function expectedAlternates(enUrl, frUrl) {
  return new Map([
    ["en", enUrl],
    ["fr", frUrl],
    ["x-default", enUrl],
  ]);
}

function alternatesMatch(block, enUrl, frUrl) {
  const got = hreflangMap(block);
  const exp = expectedAlternates(enUrl, frUrl);
  if (got.size !== exp.size) return false;
  for (const [k, v] of exp) {
    if (got.get(k) !== v) return false;
  }
  return true;
}

if (!fs.existsSync(sitemapPath)) {
  console.error("validate-fr-sitemap: dist/sitemap.xml missing — run npm run build");
  process.exit(1);
}

const xml = fs.readFileSync(sitemapPath, "utf8");
if (publishedPairs().length > 0 && !xml.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"')) {
  console.error("validate-fr-sitemap: missing xmlns:xhtml on urlset (required when FR published)");
  process.exit(1);
}

const blocks = parseUrlBlocks(xml);
const blockByLoc = new Map();
for (const b of blocks) {
  const loc = locFromBlock(b);
  if (loc) blockByLoc.set(loc, b);
}

const pairs = publishedPairs();
let failed = 0;
function pass(m) {
  console.log(`PASS: ${m}`);
}
function fail(m) {
  console.error(`FAIL: ${m}`);
  failed++;
}

const expectedFrLocs = new Set(
  pairs.length > 0
    ? [`${SITE}/fr/blog`, ...pairs.map((p) => p.frUrl)]
    : [],
);

for (const { enUrl, frUrl } of pairs) {
  const enBlock = blockByLoc.get(enUrl);
  const frBlock = blockByLoc.get(frUrl);
  if (!enBlock) fail(`missing <url> for EN ${enUrl}`);
  else pass(`has url block ${enUrl}`);
  if (!frBlock) fail(`missing <url> for FR ${frUrl}`);
  else pass(`has url block ${frUrl}`);
  if (enBlock && !alternatesMatch(enBlock, enUrl, frUrl)) fail(`hreflang mismatch on EN ${enUrl}`);
  else if (enBlock) pass(`hreflang triple on EN ${enUrl}`);
  if (frBlock && !alternatesMatch(frBlock, enUrl, frUrl)) fail(`hreflang mismatch on FR ${frUrl}`);
  else if (frBlock) pass(`hreflang triple on FR ${frUrl}`);
}

if (pairs.length > 0) {
  const hubEn = `${SITE}/blog`;
  const hubFr = `${SITE}/fr/blog`;
  const hubAlt = expectedAlternates(hubEn, hubFr);
  const bEn = blockByLoc.get(hubEn);
  const bFr = blockByLoc.get(hubFr);
  if (!bEn) fail(`missing hub EN ${hubEn}`);
  else {
    const g = hreflangMap(bEn);
    let ok = g.size === 3 && g.get("en") === hubEn && g.get("fr") === hubFr && g.get("x-default") === hubEn;
    if (!ok) fail(`hub hreflang on ${hubEn}`);
    else pass(`hub hreflang on ${hubEn}`);
  }
  if (!bFr) fail(`missing hub FR ${hubFr}`);
  else {
    const g = hreflangMap(bFr);
    let ok = g.size === 3 && g.get("en") === hubEn && g.get("fr") === hubFr && g.get("x-default") === hubEn;
    if (!ok) fail(`hub hreflang on ${hubFr}`);
    else pass(`hub hreflang on ${hubFr}`);
  }
}

for (const loc of [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1])) {
  if (loc.includes("/fr/blog") && !expectedFrLocs.has(loc)) {
    fail(`unexpected FR URL in sitemap: ${loc}`);
  }
}

if (failed) process.exit(1);
console.log("\nvalidate-fr-sitemap: all checks passed.");
