import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { LandingLocale } from "./landingStrings";
import { landingStrings } from "./landingStrings";

/** @deprecated Prefer `landingStrings.en.landingFaq.items` — kept for JSON-LD on the EN home page. */
export const landingFaqs = landingStrings.en.landingFaq.items;

export function LandingFAQ({ locale = "en" }: { locale?: LandingLocale }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { landingFaq } = landingStrings[locale];
  const faqs = landingFaq.items;

  return (
    <section
      id="faq"
      className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            {landingFaq.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {landingFaq.heading}
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto">
            {landingFaq.intro}
          </p>
        </div>

        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border overflow-hidden transition-colors bg-surface ${
                  isOpen ? "border-accent/40" : "border-panel"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="text-[15px] font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
