import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const productLinks = [
  { to: "/car-maintenance-tracker", label: "Car Maintenance Tracker" },
  { to: "/car-service-history", label: "Car Service History" },
  { to: "/car-service-history-app", label: "Car Service History App" },
  { to: "/vehicle-service-reminder-app", label: "Service Reminder App" },
  { to: "/share-car-maintenance-history", label: "Share Maintenance History" },
  { to: "/vehicle-maintenance-log", label: "Vehicle Maintenance Log" },
  { to: "/fleet-management-app", label: "Fleet Management App" },
  { to: "/fleet-maintenance-app", label: "Fleet Maintenance App" },
  { to: "/small-business-fleet-management-app", label: "Small Business Fleet App" },
  { to: "/car-rental-fleet-maintenance-app", label: "Car Rental Fleet App" },
  { to: "/vehicle-maintenance-app-for-dealers", label: "Dealers & Resellers" },
  { to: "/how-carcare-diary-works", label: "How It Works" },
];

const guideLinks = [
  { to: "/blog", label: "All Guides" },
  { to: "/blog/car-maintenance-checklist", label: "Maintenance Checklist" },
  { to: "/blog/how-to-track-car-maintenance", label: "How To Track Maintenance" },
  { to: "/blog/what-to-include-in-a-car-service-history", label: "Service History Guide" },
  { to: "/blog/how-to-keep-car-service-records-organized", label: "Organize Service Records" },
];

const helpLinks = [
  { to: "/help", label: "Help Center" },
  { to: "/help/getting-started-with-carcare-diary", label: "Getting Started" },
  { to: "/help/how-to-log-your-first-service", label: "Log Your First Service" },
  { to: "/help/how-to-share-your-vehicle-history", label: "Share Your History" },
  { to: "/support", label: "Contact Support" },
];

const legalLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
];

export function LandingFooter() {
  return (
    <footer className="border-t border-panel px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-muted max-w-[280px]">
              Car maintenance tracker for service logs, mileage, reminders, and
              shareable vehicle records.
            </p>
          </div>

          <div className="flex gap-12 sm:gap-16 flex-wrap">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Product
              </h4>
              <nav className="flex flex-col gap-3">
                {productLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Guides
              </h4>
              <nav className="flex flex-col gap-3">
                {guideLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Help</h4>
              <nav className="flex flex-col gap-3">
                {helpLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <nav className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-panel flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} CarCare Diary. All rights
            reserved.
          </p>
          <a
            href="mailto:hello@carcarediary.com"
            className="text-xs text-muted hover:text-white transition-colors"
          >
            hello@carcarediary.com
          </a>
        </div>
      </div>
    </footer>
  );
}
