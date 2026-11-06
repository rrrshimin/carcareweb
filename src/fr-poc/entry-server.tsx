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

/** Paths to pre-render for local preview (includes unpublished drafts). */
export function getFrPreviewSsgPaths(): string[] {
  return getFrPreviewRegistryEntries().map((entry) => entry.path);
}

/** Paths for future production SSG (published only). */
export function getPublishedSsgPaths(): string[] {
  return getPublishedRegistryEntries().map((entry) => entry.path);
}

export {
  getFrPreviewRegistryEntries,
  getRegistryEntryByPath,
  pathToStaticRelativeDir,
} from "./registry";
