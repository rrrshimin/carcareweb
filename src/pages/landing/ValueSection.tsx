import type { LandingLocale } from "./landingStrings";
import { landingStrings } from "./landingStrings";

export function ValueSection({ locale = "en" }: { locale?: LandingLocale }) {
  const { valueSection } = landingStrings[locale];
  return (
    <section className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            {valueSection.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {valueSection.headingLine}{" "}
            <span className="text-accent">{valueSection.headingAccent}</span>
          </h2>
          <p className="text-base text-muted max-w-[540px] mx-auto">
            {valueSection.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueSection.values.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-panel bg-surface p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/12 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
