import { Link } from "react-router-dom";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { usePageSeo } from "../lib/usePageSeo";

function NotFoundPage() {
  usePageSeo({
    title: "Page Not Found - CarCare Diary",
    description: "The page you're looking for doesn't exist or the link may have changed.",
    path: "/404",
    noindex: true,
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-base text-white font-sans">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, #0C111F 0%, #0E1325 40%, #0C111F 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <LandingHeader />
        <main className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="text-center max-w-sm mx-auto">
            <p className="text-7xl font-extrabold text-white/10 mb-4 tracking-tight">
              404
            </p>
            <h1 className="text-2xl font-semibold text-white mb-3">
              Page not found
            </h1>
            <p className="text-sm leading-relaxed text-muted mb-8">
              The page you're looking for doesn't exist or the link may have
              changed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-brand hover:bg-brand/90 text-sm font-medium text-white transition-colors text-center"
              >
                Back to home
              </Link>
              <Link
                to="/help"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-panel hover:border-accent/40 text-sm font-medium text-muted hover:text-white transition-colors text-center"
              >
                Help Center
              </Link>
            </div>
          </div>
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

export default NotFoundPage;
