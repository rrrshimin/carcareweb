import { CarFront, Wrench, Share2 } from "lucide-react";
import type { LandingLocale } from "./landingStrings";
import { landingStrings } from "./landingStrings";

const stepIcons = [CarFront, Wrench, Share2] as const;

export function HowItWorks({ locale = "en" }: { locale?: LandingLocale }) {
  const { howItWorks } = landingStrings[locale];
  const steps = howItWorks.steps.map((s, i) => ({
    ...s,
    icon: stepIcons[i],
  }));
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            {howItWorks.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {howItWorks.headingLine}{" "}
            <span className="text-accent">{howItWorks.headingAccent}</span>
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto">
            {howItWorks.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-px bg-panel" />
              )}

              <div className="relative">
                <span className="text-xs font-semibold text-accent tracking-wider mb-4 block">
                  {howItWorks.stepLabel(step.number)}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-brand/12 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted max-w-[300px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
