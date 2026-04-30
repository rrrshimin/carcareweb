import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { MobileAppBanner } from "./components/MobileAppBanner";

const CarMaintenanceTrackerPage = lazy(() => import("./pages/CarMaintenanceTrackerPage"));
const CarServiceHistoryPage = lazy(() => import("./pages/CarServiceHistoryPage"));
const VehicleMaintenanceLogPage = lazy(() => import("./pages/VehicleMaintenanceLogPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const CarMaintenanceChecklistArticle = lazy(() => import("./pages/blog/CarMaintenanceChecklistArticle"));
const HowToTrackCarMaintenanceArticle = lazy(() => import("./pages/blog/HowToTrackCarMaintenanceArticle"));
const WhatToIncludeInCarServiceHistoryArticle = lazy(() => import("./pages/blog/WhatToIncludeInCarServiceHistoryArticle"));
const HowToKeepCarServiceRecordsOrganizedArticle = lazy(() => import("./pages/blog/HowToKeepCarServiceRecordsOrganizedArticle"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const VehiclePage = lazy(() => import("./pages/VehiclePage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const HowCarCareDiaryWorksPage = lazy(() => import("./pages/HowCarCareDiaryWorksPage"));
const HelpPage = lazy(() => import("./pages/HelpPage"));
const GettingStartedArticle = lazy(() => import("./pages/help/GettingStartedArticle"));
const ShareVehicleHistoryArticle = lazy(() => import("./pages/help/ShareVehicleHistoryArticle"));
const LogFirstServiceArticle = lazy(() => import("./pages/help/LogFirstServiceArticle"));
const PlansArticle = lazy(() => import("./pages/help/PlansArticle"));
const MileageAccuracyArticle = lazy(() => import("./pages/help/MileageAccuracyArticle"));
const DeleteAccountPage = lazy(() => import("./pages/DeleteAccountPage"));
const FleetManagementAppPage = lazy(() => import("./pages/FleetManagementAppPage"));
const FleetMaintenanceAppPage = lazy(() => import("./pages/FleetMaintenanceAppPage"));
const BestCarMaintenanceAppsArticle = lazy(() => import("./pages/blog/BestCarMaintenanceAppsArticle"));
const CarServiceHistoryAppPage = lazy(() => import("./pages/CarServiceHistoryAppPage"));
const VehicleServiceReminderAppPage = lazy(() => import("./pages/VehicleServiceReminderAppPage"));
const ShareCarMaintenanceHistoryPage = lazy(() => import("./pages/ShareCarMaintenanceHistoryPage"));
const WhenToChangeEngineOilArticle = lazy(() => import("./pages/blog/WhenToChangeEngineOilArticle"));
const WhenToReplaceBrakePadsArticle = lazy(() => import("./pages/blog/WhenToReplaceBrakePadsArticle"));
const WhenToRotateTiresArticle = lazy(() => import("./pages/blog/WhenToRotateTiresArticle"));
const WhenToChangeBrakeFluidArticle = lazy(() => import("./pages/blog/WhenToChangeBrakeFluidArticle"));
const WhenToChangeCoolantArticle = lazy(() => import("./pages/blog/WhenToChangeCoolantArticle"));
const WhenToReplaceEngineAirFilterArticle = lazy(() => import("./pages/blog/WhenToReplaceEngineAirFilterArticle"));
const WhenToReplaceCabinAirFilterArticle = lazy(() => import("./pages/blog/WhenToReplaceCabinAirFilterArticle"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MobileAppBanner />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/privacy"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />
        <Route
          path="/terms"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <TermsPage />
            </Suspense>
          }
        />
        <Route
          path="/support"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <SupportPage />
            </Suspense>
          }
        />
        <Route
          path="/car-maintenance-tracker"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <CarMaintenanceTrackerPage />
            </Suspense>
          }
        />
        <Route
          path="/car-service-history"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <CarServiceHistoryPage />
            </Suspense>
          }
        />
        <Route
          path="/vehicle-maintenance-log"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <VehicleMaintenanceLogPage />
            </Suspense>
          }
        />
        <Route
          path="/car-service-history-app"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <CarServiceHistoryAppPage />
            </Suspense>
          }
        />
        <Route
          path="/vehicle-service-reminder-app"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <VehicleServiceReminderAppPage />
            </Suspense>
          }
        />
        <Route
          path="/share-car-maintenance-history"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <ShareCarMaintenanceHistoryPage />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/blog/car-maintenance-checklist"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <CarMaintenanceChecklistArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/how-to-track-car-maintenance"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <HowToTrackCarMaintenanceArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/what-to-include-in-a-car-service-history"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <WhatToIncludeInCarServiceHistoryArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/how-to-keep-car-service-records-organized"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <HowToKeepCarServiceRecordsOrganizedArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/best-car-maintenance-apps"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <BestCarMaintenanceAppsArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/when-to-change-engine-oil"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <WhenToChangeEngineOilArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/when-to-replace-brake-pads"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <WhenToReplaceBrakePadsArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/when-to-rotate-tires"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <WhenToRotateTiresArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/when-to-change-brake-fluid"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <WhenToChangeBrakeFluidArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/when-to-change-coolant"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <WhenToChangeCoolantArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/when-to-replace-engine-air-filter"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <WhenToReplaceEngineAirFilterArticle />
            </Suspense>
          }
        />
        <Route
          path="/blog/when-to-replace-cabin-air-filter"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <WhenToReplaceCabinAirFilterArticle />
            </Suspense>
          }
        />
        <Route
          path="/help"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <HelpPage />
            </Suspense>
          }
        />
        <Route
          path="/help/getting-started-with-carcare-diary"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <GettingStartedArticle />
            </Suspense>
          }
        />
        <Route
          path="/help/updating-mileage-and-keeping-records-accurate"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <MileageAccuracyArticle />
            </Suspense>
          }
        />
        <Route
          path="/help/free-vs-multi-vehicle-plans"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <PlansArticle />
            </Suspense>
          }
        />
        <Route
          path="/help/how-to-log-your-first-service"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <LogFirstServiceArticle />
            </Suspense>
          }
        />
        <Route
          path="/help/how-to-share-your-vehicle-history"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <ShareVehicleHistoryArticle />
            </Suspense>
          }
        />
        <Route
          path="/how-carcare-diary-works"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <HowCarCareDiaryWorksPage />
            </Suspense>
          }
        />
        <Route
          path="/fleet-management-app"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <FleetManagementAppPage />
            </Suspense>
          }
        />
        <Route
          path="/fleet-maintenance-app"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <FleetMaintenanceAppPage />
            </Suspense>
          }
        />
        <Route
          path="/delete-account"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <DeleteAccountPage />
            </Suspense>
          }
        />
        <Route
          path="/:slug"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <VehiclePage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function ChunkLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
    </div>
  );
}

export default App;
