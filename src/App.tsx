import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const BusinessPage = lazy(() => import("./pages/BusinessPage"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const VehiclePage = lazy(() => import("./pages/VehiclePage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const DeleteAccountPage = lazy(() => import("./pages/DeleteAccountPage"));

function App() {
  return (
    <BrowserRouter>
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
          path="/business"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <BusinessPage />
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
