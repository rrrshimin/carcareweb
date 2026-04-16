import { Link } from "react-router-dom";
import { AppStoreButton, GooglePlayButton } from "./StoreButtons";

export function DownloadCTA() {
  return (
    <section
      id="download"
      className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-2xl border border-panel overflow-hidden px-8 py-16 md:px-16 md:py-24 text-center bg-surface">
          <div className="relative z-10">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Get The App
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Start Tracking Your Car's Maintenance{" "}
              <span className="text-accent">Today</span>
            </h2>
            <p className="text-base text-muted max-w-[520px] mx-auto mb-10">
              CarCare Diary is a free car maintenance tracker for iPhone and
              Android. Log services, track mileage, get reminders, and share
              your vehicle's complete service history.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted">
              <Link
                to="/car-maintenance-tracker"
                className="text-accent font-semibold hover:text-white transition-colors"
              >
                Car maintenance tracker
              </Link>
              <span className="hidden sm:inline text-panel">·</span>
              <Link
                to="/car-service-history"
                className="text-accent font-semibold hover:text-white transition-colors"
              >
                Car service history
              </Link>
              <span className="hidden sm:inline text-panel">·</span>
              <Link
                to="/vehicle-maintenance-log"
                className="text-accent font-semibold hover:text-white transition-colors"
              >
                Vehicle maintenance log
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
