/**
 * SSR entry for production FR static HTML only (published guides + hub + product pages).
 * Does not import registry.ts (full 47); uses registry.prod + generated published list.
 */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppContent } from "../App";
import { buildBreadcrumbHeadScript, buildPageHeadHtml } from "../lib/pageSeoHead";
import { mergeFrAlternatesForSsg } from "./frPublishing";
import { getPublishedRegistryEntries, getRegistryEntryByPath } from "./registry.prod";
import { FR_BLOG_HUB_PATH, FR_BLOG_HUB_SEO, buildFrBlogHubJsonLd } from "./frSiteChrome";
import {
  FR_PRODUCT_BREADCRUMB_TITLE,
  FR_PRODUCT_PREVIEW_ROUTED_PATHS,
  getFrProductPreviewSeo,
} from "./frProductPreviewMeta";
import { getFrProductPreviewJsonLd } from "./frProductPreviewJsonLd";

export function pathToStaticRelativeDir(entryPath: string): string {
  return entryPath.replace(/^\//, "");
}

export function renderLocalizedGuideAppHtml(path: string): string {
  const entry = getRegistryEntryByPath(path);
  if (!entry) {
    throw new Error(`No published localized guide for path: ${path}`);
  }
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <AppContent />
      </StaticRouter>
    </StrictMode>,
  );
}

export function buildLocalizedGuideHeadHtml(path: string): string {
  const entry = getRegistryEntryByPath(path);
  if (!entry) {
    throw new Error(`No published localized guide for path: ${path}`);
  }
  const page = buildPageHeadHtml(mergeFrAlternatesForSsg(entry.content.seo));
  const breadcrumb = buildBreadcrumbHeadScript(entry.content.breadcrumbTitle, entry.path, {
    locale: "fr",
  });
  return `${page}\n    ${breadcrumb}`;
}

export function renderFrBlogHubAppHtml(): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={FR_BLOG_HUB_PATH}>
        <AppContent />
      </StaticRouter>
    </StrictMode>,
  );
}

export function buildFrBlogHubHeadHtml(): string {
  const published = getPublishedRegistryEntries();
  return buildPageHeadHtml(
    mergeFrAlternatesForSsg({
      ...FR_BLOG_HUB_SEO,
      ogType: "website",
      jsonLd: buildFrBlogHubJsonLd(published),
    }),
  );
}

export function renderFrProductAppHtml(path: string): string {
  if (!(FR_PRODUCT_PREVIEW_ROUTED_PATHS as readonly string[]).includes(path)) {
    throw new Error(`No FR product route for path: ${path}`);
  }
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <AppContent />
      </StaticRouter>
    </StrictMode>,
  );
}

export function buildFrProductHeadHtml(path: string): string {
  const base = getFrProductPreviewSeo(path);
  if (!base) {
    throw new Error(`No FR product SEO for path: ${path}`);
  }
  const jsonLd = getFrProductPreviewJsonLd(path);
  const page = buildPageHeadHtml(mergeFrAlternatesForSsg({ ...base, jsonLd }));
  const breadcrumbTitle =
    FR_PRODUCT_BREADCRUMB_TITLE[path as keyof typeof FR_PRODUCT_BREADCRUMB_TITLE] ?? base.title;
  const breadcrumb = buildBreadcrumbHeadScript(breadcrumbTitle, path, { locale: "fr" });
  return `${page}\n    ${breadcrumb}`;
}

export function getPublishedSsgPaths(): string[] {
  return getPublishedRegistryEntries().map((entry) => entry.path);
}

export function getFrProductSsgPaths(): readonly string[] {
  return FR_PRODUCT_PREVIEW_ROUTED_PATHS;
}