/**
 * Publishing helpers: preview maps all EN→FR links; production resolves by published set
 * from frPublishing.generated.ts (rebuilt on each generate-fr-registry-prod run).
 */
import type { PageSeoHeadOptions } from "../lib/pageSeoHead";
import {
  EN_TO_FR_BLOG_PATH,
  mergeFrAlternatesForSsg as mergeFrAlternatesProd,
  resolveFrGuideInternalHrefProd,
} from "./frPublishing.generated";

const frPoc = Boolean(import.meta.env.VITE_FR_POC);

export function mergeFrAlternatesForSsg(seo: PageSeoHeadOptions): PageSeoHeadOptions {
  if (frPoc) return seo;
  return mergeFrAlternatesProd(seo);
}

export function resolveFrGuideInternalHref(href: string): string {
  if (frPoc) {
    if (href.startsWith("/blog/")) {
      const fr = EN_TO_FR_BLOG_PATH[href];
      return fr ?? href;
    }
    return href;
  }
  return resolveFrGuideInternalHrefProd(href);
}

export {
  blogHubAlternates,
  enBlogAlternatesWhenFrPublished,
  EN_TO_FR_BLOG_PATH,
} from "./frPublishing.generated";
