import { Link } from "react-router-dom";
import type { LandingLocale } from "./landingStrings";
import { landingStrings } from "./landingStrings";

export function BusinessSection({ locale = "en" }: { locale?: LandingLocale }) {
  const { businessSection } = landingStrings[locale];
  return (
    <section className="py-20 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[860px] mx-auto rounded-xl border border-panel bg-surface p-8 md:p-12 text-center">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
          {businessSection.eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {businessSection.heading}
        </h2>
        <p className="text-base text-muted max-w-[520px] mx-auto mb-8">
          {businessSection.body}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
          {businessSection.points.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2.5 text-sm text-muted"
            >
              <item.icon className="w-4 h-4 text-accent shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <Link
          to={businessSection.ctaTo}
          className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-white transition-colors"
        >
          {businessSection.ctaLabel}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
