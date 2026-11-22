import { Route } from "react-router-dom";
import { LocalizedGuideArticle } from "../pages/blog/LocalizedGuideArticle";
import FrBlogPage from "./FrBlogPage";
import FrLandingPage from "./pages/FrLandingPage";
import FrCarMaintenanceTrackerPage from "./pages/FrCarMaintenanceTrackerPage";
import FrCarServiceHistoryPage from "./pages/FrCarServiceHistoryPage";
import FrVehicleMaintenanceLogPage from "./pages/FrVehicleMaintenanceLogPage";
import FrCarServiceHistoryAppPage from "./pages/FrCarServiceHistoryAppPage";
import FrVehicleServiceReminderPage from "./pages/FrVehicleServiceReminderPage";
import FrShareCarMaintenanceHistoryPage from "./pages/FrShareCarMaintenanceHistoryPage";
import FrHowCarCareDiaryWorksPage from "./pages/FrHowCarCareDiaryWorksPage";
import FrFleetManagementAppPage from "./pages/FrFleetManagementAppPage";
import FrFleetMaintenanceAppPage from "./pages/FrFleetMaintenanceAppPage";
import FrSmallBusinessFleetManagementAppPage from "./pages/FrSmallBusinessFleetManagementAppPage";
import FrCarRentalFleetMaintenanceAppPage from "./pages/FrCarRentalFleetMaintenanceAppPage";
import FrVehicleMaintenanceAppForDealersPage from "./pages/FrVehicleMaintenanceAppForDealersPage";
import { FR_BLOG_HUB_PATH, FR_HOME_PATH } from "./frSiteChrome";
import { getPublishedRegistryEntries } from "./registry.prod";

const published = getPublishedRegistryEntries();

/**
 * Production FR routes — static imports only (no lazy/Suspense) so SSR `renderToString`
 * can prerender full HTML for Stage 2 SSG.
 */
export const frPocRouteElement = (
  <>
    <Route path={FR_HOME_PATH} element={<FrLandingPage />} />
    <Route path="/fr/suivi-entretien-voiture" element={<FrCarMaintenanceTrackerPage />} />
    <Route path="/fr/historique-entretien-voiture" element={<FrCarServiceHistoryPage />} />
    <Route path="/fr/application-carnet-entretien-voiture" element={<FrCarServiceHistoryAppPage />} />
    <Route path="/fr/carnet-entretien-voiture" element={<FrVehicleMaintenanceLogPage />} />
    <Route path="/fr/rappel-entretien-voiture" element={<FrVehicleServiceReminderPage />} />
    <Route path="/fr/partager-historique-entretien-voiture" element={<FrShareCarMaintenanceHistoryPage />} />
    <Route path="/fr/comment-fonctionne-carcare-diary" element={<FrHowCarCareDiaryWorksPage />} />
    <Route path="/fr/gestion-entretien-flotte" element={<FrFleetManagementAppPage />} />
    <Route path="/fr/application-entretien-flotte" element={<FrFleetMaintenanceAppPage />} />
    <Route path="/fr/suivi-entretien-vehicules-entreprise" element={<FrSmallBusinessFleetManagementAppPage />} />
    <Route path="/fr/entretien-flotte-location-voitures" element={<FrCarRentalFleetMaintenanceAppPage />} />
    <Route path="/fr/carnet-entretien-voitures-professionnels" element={<FrVehicleMaintenanceAppForDealersPage />} />
    <Route path={FR_BLOG_HUB_PATH} element={<FrBlogPage />} />
    {published.map((entry) => (
      <Route key={entry.path} path={entry.path} element={<LocalizedGuideArticle content={entry.content} />} />
    ))}
  </>
);