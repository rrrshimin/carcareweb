import { Link } from "react-router-dom";
import { AppStoreButton, GooglePlayButton } from "./StoreButtons";
import type { LandingLocale } from "./landingStrings";
import { landingStrings } from "./landingStrings";
import { DE_SITE } from "../../de-poc/deSiteChrome";

export function DownloadCTA({ locale = "en" }: { locale?: LandingLocale }) {
  const download = landingStrings[locale].downloadCta;
  return (
    <section
      id="download"
      className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-2xl border border-panel overflow-hidden px-8 py-16 md:px-16 md:py-24 text-center bg-surface">
          <div className="relative z-10">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              {download.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {download.headingLine}{" "}
              <span className="text-accent">{download.headingAccent}</span>
            </h2>
            <p className="text-base text-muted max-w-[520px] mx-auto mb-10">
              {download.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <AppStoreButton
                kicker={
                  locale === "de"
                    ? DE_SITE.store.appStoreKicker
                    : locale === "fr"
                      ? "Télécharger sur"
                      : undefined
                }
                storeName={
                  locale === "de"
                    ? DE_SITE.store.appStoreName
                    : locale === "fr"
                      ? "l'App Store"
                      : undefined
                }
                ariaLabel={
                  locale === "de"
                    ? DE_SITE.store.appStoreAria
                    : locale === "fr"
                      ? "Télécharger CarCare Diary sur l'App Store"
                      : undefined
                }
              />
              <GooglePlayButton
                kicker={
                  locale === "de"
                    ? DE_SITE.store.playKicker
                    : locale === "fr"
                      ? "Disponible sur"
                      : undefined
                }
                storeName={
                  locale === "de"
                    ? DE_SITE.store.playName
                    : locale === "fr"
                      ? "Google Play"
                      : undefined
                }
                ariaLabel={
                  locale === "de"
                    ? DE_SITE.store.playAria
                    : locale === "fr"
                      ? "Télécharger CarCare Diary sur Google Play"
                      : undefined
                }
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted">
              <Link
                to={download.link1.to}
                className="text-accent font-semibold hover:text-white transition-colors"
              >
                {download.link1.label}
              </Link>
              <span className="hidden sm:inline text-panel">·</span>
              <Link
                to={download.link2.to}
                className="text-accent font-semibold hover:text-white transition-colors"
              >
                {download.link2.label}
              </Link>
              <span className="hidden sm:inline text-panel">·</span>
              <Link
                to={download.link3.to}
                className="text-accent font-semibold hover:text-white transition-colors"
              >
                {download.link3.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
