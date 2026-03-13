import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const VehiclePage = lazy(() => import("./pages/VehiclePage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/:slug"
          element={
            <Suspense fallback={<ChunkLoading />}>
              <VehiclePage />
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
