/**
 * SSR entry for production DE static HTML (13 product pages).
 */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppContent } from "../App";
import { buildBreadcrumbHeadScript, buildPageHeadHtml } from "../lib/pageSeoHead";
import { mergeDeAlternatesForSsg } from "./dePublishing";
import {
  DE_PRODUCT_BREADCRUMB_TITLE,
  DE_PRODUCT_PREVIEW_ROUTED_PATHS,
  getDeProductPreviewSeo,
} from "./deProductPreviewMeta";
import { getDeProductPreviewJsonLd } from "./deProductPreviewJsonLd";

export function pathToStaticRelativeDir(entryPath: string): string {
  return entryPath.replace(/^\//, "");
}

export function renderDeProductAppHtml(path: string): string {
  if (!(DE_PRODUCT_PREVIEW_ROUTED_PATHS as readonly string[]).includes(path)) {
    throw new Error(`No DE product route for path: ${path}`);
  }
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <AppContent />
      </StaticRouter>
    </StrictMode>,
  );
}

export function buildDeProductHeadHtml(path: string): string {
  const base = getDeProductPreviewSeo(path);
  if (!base) {
    throw new Error(`No DE product SEO for path: ${path}`);
  }
  const jsonLd = getDeProductPreviewJsonLd(path);
  const page = buildPageHeadHtml(mergeDeAlternatesForSsg({ ...base, jsonLd }));
  const breadcrumbTitle =
    DE_PRODUCT_BREADCRUMB_TITLE[path as keyof typeof DE_PRODUCT_BREADCRUMB_TITLE] ?? base.title;
  const breadcrumb = buildBreadcrumbHeadScript(breadcrumbTitle, path, { locale: "de" });
  return `${page}\n    ${breadcrumb}`;
}

export function getDeProductSsgPaths(): readonly string[] {
  return DE_PRODUCT_PREVIEW_ROUTED_PATHS;
}