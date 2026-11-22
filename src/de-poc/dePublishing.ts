import type { PageSeoHeadOptions } from "../lib/pageSeoHead";
import { dePocProductHreflangAlternates } from "./deSiteChrome";
import { mergeDeAlternatesForSsgProd } from "./dePublishing.generated";

const dePoc = Boolean(import.meta.env.VITE_DE_POC);

/** DE preview build: en/fr/de alternates (includes noindex via page options). */
export function mergeDePreviewAlternates(seo: PageSeoHeadOptions): PageSeoHeadOptions {
  const fromPath = dePocProductHreflangAlternates(seo.path);
  if (!fromPath?.length) return seo;
  return { ...seo, alternates: fromPath };
}

/** Production SSG + client: reciprocal en/fr/de on published DE product pages. */
export function mergeDeAlternatesForSsg(seo: PageSeoHeadOptions): PageSeoHeadOptions {
  if (dePoc) return mergeDePreviewAlternates(seo);
  return mergeDeAlternatesForSsgProd(seo);
}