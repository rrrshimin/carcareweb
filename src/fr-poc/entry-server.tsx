import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppContent } from "../App";
import { buildBreadcrumbHeadScript, buildPageHeadHtml } from "../lib/pageSeoHead";
import {
  getFrPreviewRegistryEntries,
  getPublishedRegistryEntries,
  getRegistryEntryByPath,
} from "./registry";
import { FR_BLOG_HUB_PATH, FR_BLOG_HUB_SEO, buildFrBlogHubJsonLd } from "./frSiteChrome";
import { FR_PRODUCT_PREVIEW_ROUTED_PATHS, FR_PRODUCT_BREADCRUMB_TITLE, getFrProductPreviewSeo } from "./frProductPreviewMeta";
import { getFrProductPreviewJsonLd } from "./frProductPreviewJsonLd";

export function renderLocalizedGuideAppHtml(path: string): string {
  const entry = getRegistryEntryByPath(path);
  if (!entry) {
    throw new Error(`No localized guide registered for path: ${path}`);
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
    throw new Error(`No localized guide registered for path: ${path}`);
  }
  const page = buildPageHeadHtml(entry.content.seo);
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
  return buildPageHeadHtml({
    ...FR_BLOG_HUB_SEO,
    ogType: "website",
    jsonLd: buildFrBlogHubJsonLd(getFrPreviewRegistryEntries()),
  });
}

export function renderFrProductPreviewAppHtml(path: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <AppContent />
      </StaticRouter>
    </StrictMode>,
  );
}

export function buildFrProductPreviewHeadHtml(path: string): string {
  const base = getFrProductPreviewSeo(path);
  if (!base) {
    throw new Error(`No FR product preview SEO for path: ${path}`);
  }
  const jsonLdFromPath = getFrProductPreviewJsonLd(path);

  const page = buildPageHeadHtml({
    ...base,
    jsonLd: jsonLdFromPath,
  });
  const breadcrumbTitle = FR_PRODUCT_BREADCRUMB_TITLE[path as keyof typeof FR_PRODUCT_BREADCRUMB_TITLE] ?? base.title;
  const breadcrumb = buildBreadcrumbHeadScript(breadcrumbTitle, path, { locale: "fr" });
  return `${page}\n    ${breadcrumb}`;
}

/** Paths to pre-render for local preview (includes unpublished drafts). */
export function getFrPreviewSsgPaths(): string[] {
  const blog = getFrPreviewRegistryEntries().map((entry) => entry.path);
  const product = [...FR_PRODUCT_PREVIEW_ROUTED_PATHS];
  return [...blog, FR_BLOG_HUB_PATH, ...product];
}

/** Paths for future production SSG (published only). */
export function getPublishedSsgPaths(): string[] {
  return getPublishedRegistryEntries().map((entry) => entry.path);
}

export function getFrProductPreviewSsgPaths(): readonly string[] {
  return FR_PRODUCT_PREVIEW_ROUTED_PATHS;
}

export {
  FR_PRODUCT_PREVIEW_PATHS,
  FR_PRODUCT_PREVIEW_ROUTED_PATHS,
  getFrProductPreviewSeo,
} from "./frProductPreviewMeta";

export {
  getFrPreviewRegistryEntries,
  getPublishedRegistryEntries,
  getRegistryEntryByPath,
  pathToStaticRelativeDir,
} from "./registry";
