import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const SSG_PREVIEW_FLAG = "fr-preview";
const SSG_FR_PROD_FLAG = "fr-prod";
const rootEl = document.getElementById("root")!;
const ssgMode = document.documentElement.getAttribute("data-ssg");
const shouldHydrateFrSsg =
  rootEl.hasChildNodes() &&
  ((ssgMode === SSG_PREVIEW_FLAG && !!import.meta.env.VITE_FR_POC) || ssgMode === SSG_FR_PROD_FLAG);

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (shouldHydrateFrSsg) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
