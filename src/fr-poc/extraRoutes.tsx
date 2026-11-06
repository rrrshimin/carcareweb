import { Route } from "react-router-dom";
import { LocalizedGuideArticle } from "../pages/blog/LocalizedGuideArticle";
import FrBlogPage from "./FrBlogPage";
import { FR_BLOG_HUB_PATH } from "./frSiteChrome";
import { getFrPreviewRegistryEntries } from "./registry";

/** FR preview build only (Vite alias when FR_POC=1). */
export const frPocRouteElement = (
  <>
    <Route path={FR_BLOG_HUB_PATH} element={<FrBlogPage />} />
    {getFrPreviewRegistryEntries().map((entry) => (
      <Route
        key={entry.path}
        path={entry.path}
        element={<LocalizedGuideArticle content={entry.content} />}
      />
    ))}
  </>
);
