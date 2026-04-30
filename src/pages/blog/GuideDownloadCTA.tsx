import { Link } from "react-router-dom";
import { AppStoreButton, GooglePlayButton } from "../landing/StoreButtons";

export const DEFAULT_GUIDE_CTA_SUBTITLE =
  "CarCare Diary is a free app for iPhone and Android. Log every service in seconds, track mileage, and keep a complete, shareable history of your car.";

interface GuideDownloadCTAProps {
  title: string;
  subtitle?: string;
  variant?: "inline" | "footer";
}

export function GuideDownloadCTA({
  title,
  subtitle = DEFAULT_GUIDE_CTA_SUBTITLE,
  variant = "inline",
}: GuideDownloadCTAProps) {
  const isFooter = variant === "footer";

  return (
    <section
      className={
        isFooter
          ? "pt-10 pb-20 md:pt-14 md:pb-28 px-6 sm:px-10 lg:px-16 xl:px-20"
          : "pt-2 pb-10 md:pt-4 md:pb-14 px-6 sm:px-10 lg:px-16 xl:px-20"
      }
    >
      <div className="max-w-[760px] mx-auto">
        <div
          className={`rounded-2xl border border-panel bg-surface ${
            isFooter ? "px-6 py-7 md:px-8 md:py-9" : "px-5 py-6 md:px-7 md:py-7"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">
            <div className="min-w-0 md:flex-1">
              <h2
                className={
                  isFooter
                    ? "text-xl md:text-2xl font-semibold text-white leading-snug"
                    : "text-lg md:text-xl font-semibold text-white leading-snug"
                }
              >
                {title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:shrink-0">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
        </div>

        {isFooter && (
          <div className="mt-6 text-center">
            <Link
              to="/blog"
              className="text-sm text-accent font-semibold hover:text-white transition-colors"
            >
              Back to Guides
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
