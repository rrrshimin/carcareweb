import { Route } from "react-router-dom";
import { LocalizedGuideArticle } from "../pages/blog/LocalizedGuideArticle";
import FrBlogPage from "./FrBlogPage";
import { FR_BLOG_HUB_PATH } from "./frSiteChrome";
import { getPublishedRegistryEntries } from "./registry.prod";

const published = getPublishedRegistryEntries();

/**
 * Production FR routes — static imports only (no lazy/Suspense) so SSR `renderToString`
 * can prerender full article HTML for Stage 2 SSG.
 */
export const frPocRouteElement = (
  <>
    <Route path={FR_BLOG_HUB_PATH} element={<FrBlogPage />} />
    {published.map((entry) => (
      <Route key={entry.path} path={entry.path} element={<LocalizedGuideArticle content={entry.content} />} />
    ))}
  </>
);
