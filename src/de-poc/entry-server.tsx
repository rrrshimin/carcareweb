import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppContent } from "../App";
import { buildBreadcrumbHeadScript, buildPageHeadHtml } from "../lib/pageSeoHead";
import {
  DE_PRODUCT_BREADCRUMB_TITLE,
  DE_PRODUCT_PREVIEW_ROUTED_PATHS,
  getDeProductPreviewSeo,
} from "./deProductPreviewMeta";
import { getDeProductPreviewJsonLd } from "./deProductPreviewJsonLd";

export function renderDeProductPreviewAppHtml(path: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <AppContent />
      </StaticRouter>
    </StrictMode>,
  );
}

export function buildDeProductPreviewHeadHtml(path: string): string {
  const base = getDeProductPreviewSeo(path);
  if (!base) {
    throw new Error(`No DE product preview SEO for path: ${path}`);
  }
  const jsonLdFromPath = getDeProductPreviewJsonLd(path);

  const page = buildPageHeadHtml({
    ...base,
    jsonLd: jsonLdFromPath,
  });
  const breadcrumbTitle =
    DE_PRODUCT_BREADCRUMB_TITLE[path as keyof typeof DE_PRODUCT_BREADCRUMB_TITLE] ?? base.title;
  const breadcrumb = buildBreadcrumbHeadScript(breadcrumbTitle, path, { locale: "de" });
  return `${page}\n    ${breadcrumb}`;
}

/** Paths to pre-render for local DE product preview (no blog). */
export function getDePreviewSsgPaths(): readonly string[] {
  return DE_PRODUCT_PREVIEW_ROUTED_PATHS;
}

export function getDeProductPreviewSsgPaths(): readonly string[] {
  return DE_PRODUCT_PREVIEW_ROUTED_PATHS;
}

export {
  DE_PRODUCT_PREVIEW_ROUTED_PATHS,
  getDeProductPreviewSeo,
} from "./deProductPreviewMeta";