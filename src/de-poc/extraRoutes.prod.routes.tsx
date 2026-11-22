import { Route } from "react-router-dom";
import DeLandingPage from "./pages/DeLandingPage";
import DeCarMaintenanceTrackerPage from "./pages/DeCarMaintenanceTrackerPage";
import DeCarServiceHistoryPage from "./pages/DeCarServiceHistoryPage";
import DeVehicleMaintenanceLogPage from "./pages/DeVehicleMaintenanceLogPage";
import DeCarServiceHistoryAppPage from "./pages/DeCarServiceHistoryAppPage";
import DeVehicleServiceReminderPage from "./pages/DeVehicleServiceReminderPage";
import DeShareCarMaintenanceHistoryPage from "./pages/DeShareCarMaintenanceHistoryPage";
import DeHowCarCareDiaryWorksPage from "./pages/DeHowCarCareDiaryWorksPage";
import DeFleetManagementAppPage from "./pages/DeFleetManagementAppPage";
import DeFleetMaintenanceAppPage from "./pages/DeFleetMaintenanceAppPage";
import DeSmallBusinessFleetManagementAppPage from "./pages/DeSmallBusinessFleetManagementAppPage";
import DeCarRentalFleetMaintenanceAppPage from "./pages/DeCarRentalFleetMaintenanceAppPage";
import DeVehicleMaintenanceAppForDealersPage from "./pages/DeVehicleMaintenanceAppForDealersPage";
import { DE_HOME_PATH } from "./deSiteChrome";

/** Production DE routes — static imports for SSR prerender (no lazy). */
export const dePocRouteElement = (
  <>
    <Route path={DE_HOME_PATH} element={<DeLandingPage />} />
    <Route path="/de/autowartung-app" element={<DeCarMaintenanceTrackerPage />} />
    <Route path="/de/wartungshistorie-auto" element={<DeCarServiceHistoryPage />} />
    <Route path="/de/digitales-serviceheft-app" element={<DeCarServiceHistoryAppPage />} />
    <Route path="/de/wartungsprotokoll-auto" element={<DeVehicleMaintenanceLogPage />} />
    <Route path="/de/wartungserinnerung-auto" element={<DeVehicleServiceReminderPage />} />
    <Route path="/de/wartungshistorie-teilen" element={<DeShareCarMaintenanceHistoryPage />} />
    <Route path="/de/so-funktioniert-carcare-diary" element={<DeHowCarCareDiaryWorksPage />} />
    <Route path="/de/fuhrparkmanagement-app" element={<DeFleetManagementAppPage />} />
    <Route path="/de/fuhrpark-wartung-app" element={<DeFleetMaintenanceAppPage />} />
    <Route
      path="/de/fuhrparkverwaltung-kleine-unternehmen"
      element={<DeSmallBusinessFleetManagementAppPage />}
    />
    <Route path="/de/mietwagen-wartung" element={<DeCarRentalFleetMaintenanceAppPage />} />
    <Route
      path="/de/wartungsdokumentation-autohandel"
      element={<DeVehicleMaintenanceAppForDealersPage />}
    />
  </>
);