/**
 * Vercel static: use SPA shell as custom 404 body for paths that miss both
 * prerendered files and SPA rewrite (e.g. unknown /fr/blog/*).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "dist", "index.html");
const out404 = path.join(root, "dist", "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("emit-404-html: dist/index.html missing — run vite build first");
  process.exit(1);
}
fs.copyFileSync(indexPath, out404);
console.log("emit-404-html: wrote dist/404.html (SPA shell for Vercel 404 responses)");
