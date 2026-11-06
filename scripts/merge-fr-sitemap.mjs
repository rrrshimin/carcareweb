/**
 * After `vite build`, merges published FR URLs into dist/sitemap.xml and adds
 * reciprocal xhtml:link hreflang (en, fr, x-default) on EN+FR URL entries for
 * published pairs. Reuses EN_TO_FR map + registry publish state (incl. FR_PROD_ROUTE_FIXTURE).
 *
 * x-default → EN URL (matches usePageSeo / mergeFrAlternatesForSsg).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EN_TO_FR_BLOG_PATH } from "./data/fr-en-blog-paths.mjs";

const SITE = "https://www.carcarediary.com";
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const registryPath = path.join(root, "src/fr-poc/registry.ts");
const distSitemap = path.join(root, "dist", "sitemap.xml");
const publicSitemap = path.join(root, "public", "sitemap.xml");

const FR_TO_EN = Object.fromEntries(
  Object.entries(EN_TO_FR_BLOG_PATH).map(([en, fr]) => [fr, en]),
);

const ENTRY_RE =
  /\{\s*id:\s*"([^"]+)"[\s\S]*?path:\s*"(\/fr\/blog\/[^"]+)"[\s\S]*?published:\s*(true|false)/g;

function loadFixtureMap() {
  const raw = process.env.FR_PROD_ROUTE_FIXTURE;
  if (!raw?.trim()) return null;
  return new Map(JSON.parse(raw).map((x) => [x.id, x.published === true]));
}

/** @returns {{ frPath: string, enPath: string }[]} */
function getPublishedEnFrPairs() {
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
      console.warn(`merge-fr-sitemap: no EN path for ${frPath} (id ${id}), skipping pair`);
      continue;
    }
    pairs.push({ frPath, enPath });
  }
  return pairs.sort((a, b) => a.frPath.localeCompare(b.frPath));
}

function alternatesForPair(enPath, frPath) {
  const enUrl = `${SITE}${enPath}`;
  const frUrl = `${SITE}${frPath}`;
  return [
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />`,
  ].join("\n");
}

function alternatesForHub() {
  const enUrl = `${SITE}/blog`;
  const frUrl = `${SITE}/fr/blog`;
  return [
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />`,
  ].join("\n");
}

function ensureUrlsetXhtmlNs(xml) {
  if (xml.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"')) return xml;
  return xml.replace(
    /<urlset\s+xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"\s*>/,
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  );
}

/**
 * Insert xhtml:link alternates immediately after <loc>...</loc> if not already present for this pair.
 */
function injectAlternatesAfterLoc(xml, fullLoc, alternateBlock) {
  const locTag = `<loc>${fullLoc}</loc>`;
  let idx = xml.indexOf(locTag);
  if (idx === -1) return { xml, changed: false };
  const urlEnd = xml.indexOf("</url>", idx);
  if (urlEnd === -1) return { xml, changed: false };
  const block = xml.slice(idx, urlEnd);
  const frHref = alternateBlock.match(/hreflang="fr"\s+href="([^"]+)"/);
  if (frHref && block.includes(frHref[1])) return { xml, changed: false };
  const insertAt = idx + locTag.length;
  const next = `${xml.slice(0, insertAt)}\n${alternateBlock}\n${xml.slice(insertAt)}`;
  return { xml: next, changed: true };
}

function frUrlEntry(frPath, lastmod, alternateBlock) {
  const loc = `${SITE}${frPath}`;
  return `  <url>
    <loc>${loc}</loc>
${alternateBlock}
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
}

let xml = fs.readFileSync(publicSitemap, "utf8");
const pairs = getPublishedEnFrPairs();
const lastmod = new Date().toISOString().slice(0, 10);

if (pairs.length === 0) {
  fs.mkdirSync(path.dirname(distSitemap), { recursive: true });
  fs.writeFileSync(distSitemap, xml, "utf8");
  console.log("merge-fr-sitemap: no published FR guides — dist/sitemap.xml = public copy");
  process.exit(0);
}

xml = ensureUrlsetXhtmlNs(xml);
const hubAlt = alternatesForHub();

function allLocs(s) {
  return new Set([...s.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
}

let r = injectAlternatesAfterLoc(xml, `${SITE}/blog`, hubAlt);
xml = r.xml;

for (const { enPath, frPath } of pairs) {
  const pairAlt = alternatesForPair(enPath, frPath);
  r = injectAlternatesAfterLoc(xml, `${SITE}${enPath}`, pairAlt);
  xml = r.xml;
}

let locs = allLocs(xml);

for (const { enPath, frPath } of pairs) {
  const frFull = `${SITE}${frPath}`;
  if (!locs.has(frFull)) {
    const pairAlt = alternatesForPair(enPath, frPath);
    xml = xml.replace("</urlset>", `${frUrlEntry(frPath, lastmod, pairAlt)}\n</urlset>`);
    locs = allLocs(xml);
  }
}

const frHubFull = `${SITE}/fr/blog`;
if (!locs.has(frHubFull)) {
  xml = xml.replace("</urlset>", `${frUrlEntry("/fr/blog", lastmod, hubAlt)}\n</urlset>`);
  locs = allLocs(xml);
}
r = injectAlternatesAfterLoc(xml, frHubFull, hubAlt);
xml = r.xml;

fs.mkdirSync(path.dirname(distSitemap), { recursive: true });
fs.writeFileSync(distSitemap, xml, "utf8");
console.log(`merge-fr-sitemap: ${pairs.length} published pair(s) — wrote dist/sitemap.xml with xhtml:link alternates`);
