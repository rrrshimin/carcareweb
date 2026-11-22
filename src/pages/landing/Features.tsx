import { Link } from "react-router-dom";
import type { LandingLocale } from "./landingStrings";
import { landingStrings } from "./landingStrings";

export function Features({ locale = "en" }: { locale?: LandingLocale }) {
  const features = landingStrings[locale].features;
  return (
    <section
      id="features"
      className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            {features.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {features.headingLine}{" "}
            <span className="text-accent">{features.headingAccent}</span>
          </h2>
          <p className="text-base text-muted max-w-[560px] mx-auto">
            {features.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.items.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-panel bg-surface p-8 transition-colors duration-300 hover:border-accent/30"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/12 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-12">
          {features.footerPrefix}{" "}
          <Link
            to={
              locale === "de"
                ? "/de/autowartung-app"
                : locale === "fr"
                  ? "/fr/suivi-entretien-voiture"
                  : "/car-maintenance-tracker"
            }
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            {features.linkTracker}
          </Link>
          {" · "}
          <Link
            to={locale === "fr" ? "/fr/blog" : "/blog"}
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            {features.linkGuides}
          </Link>
        </p>
      </div>
    </section>
  );
}
