/**
 * SSR entry for production FR static HTML only (published guides + hub when applicable).
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

export function getPublishedSsgPaths(): string[] {
  return getPublishedRegistryEntries().map((entry) => entry.path);
}
