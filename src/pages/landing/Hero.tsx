import { AppStoreButton, GooglePlayButton } from "./StoreButtons";
import heroScreenshot from "../../assets/hero-screenshots-mockups.png";
import type { LandingLocale } from "./landingStrings";
import { landingStrings } from "./landingStrings";

export function Hero({ locale = "en" }: { locale?: LandingLocale }) {
  const s = landingStrings[locale].hero;
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            {s.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
            {s.titleLine}{" "}
            <span className="text-accent">{s.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">
            {s.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start mb-6">
            <AppStoreButton
              kicker={locale === "fr" ? "Télécharger sur" : undefined}
              storeName={locale === "fr" ? "l'App Store" : undefined}
              ariaLabel={locale === "fr" ? "Télécharger CarCare Diary sur l'App Store" : undefined}
            />
            <GooglePlayButton
              kicker={locale === "fr" ? "Disponible sur" : undefined}
              storeName={locale === "fr" ? "Google Play" : undefined}
              ariaLabel={locale === "fr" ? "Télécharger CarCare Diary sur Google Play" : undefined}
            />
          </div>

          <p className="text-sm text-muted">
            {s.subline}
          </p>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ maxWidth: 594 }}
            >
              <img
                src={heroScreenshot}
                alt={s.heroImageAlt}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
