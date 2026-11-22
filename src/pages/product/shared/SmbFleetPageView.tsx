import { useState, type ComponentType } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ChevronDown, FileText, X, type LucideIcon } from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "../../landing/StoreButtons";
import heroScreenshot from "../../../assets/hero-screenshots-mockups.png";
import type { SmbFleetPageCopy } from "./smbFleetPageTypes";

type Props = {
  copy: SmbFleetPageCopy;
  featureIcons: readonly LucideIcon[];
};

export function SmbFleetPageView({ copy, featureIcons }: Props) {
  return (
    <>
      <Hero copy={copy} />
      <Problem copy={copy} />
      <Features copy={copy} featureIcons={featureIcons} />
      <UseCases copy={copy} />
      <Lightweight copy={copy} />
      <FAQ copy={copy} />
      <FinalCTA copy={copy} />
    </>
  );
}

function Hero({ copy }: { copy: SmbFleetPageCopy }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">{copy.hero.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
            {copy.hero.titleLine} <span className="text-accent">{copy.hero.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">{copy.hero.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start mb-6">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <p className="text-sm text-muted">{copy.hero.subline}</p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 594 }}>
            <img src={heroScreenshot} alt={copy.hero.imageAlt} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem({ copy }: { copy: SmbFleetPageCopy }) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-panel">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">{copy.problem.heading}</h2>
        <p className="text-base md:text-lg leading-relaxed text-muted max-w-[680px] mx-auto">{copy.problem.body}</p>
      </div>
    </section>
  );
}

function Features({
  copy,
  featureIcons,
}: {
  copy: SmbFleetPageCopy;
  featureIcons: readonly LucideIcon[];
}) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">{copy.features.heading}</h2>
        <p className="text-muted text-center mb-12 max-w-[560px] mx-auto">{copy.features.intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {copy.features.items.map((f, i) => {
            const Icon = (featureIcons[i] ?? featureIcons[0]) as ComponentType<{ className?: string }>;
            return (
              <div key={f.title} className="rounded-2xl border border-panel bg-surface p-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UseCases({ copy }: { copy: SmbFleetPageCopy }) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-panel">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">{copy.useCases.heading}</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {copy.useCases.items.map((uc) => (
            <div key={uc.title} className="rounded-2xl border border-panel bg-surface p-6">
              <h3 className="text-base font-semibold mb-2">{uc.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{uc.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lightweight({ copy }: { copy: SmbFleetPageCopy }) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">{copy.lightweight.heading}</h2>
        <p className="text-muted text-center mb-12 max-w-[600px] mx-auto">{copy.lightweight.intro}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-red-400/15 bg-red-400/5 p-6">
            <p className="text-sm font-semibold text-red-400 mb-4 uppercase tracking-wider">{copy.lightweight.withoutLabel}</p>
            <ul className="flex flex-col gap-3">
              {copy.lightweight.without.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">{copy.lightweight.withLabel}</p>
            <ul className="flex flex-col gap-3">
              {copy.lightweight.with.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {copy.lightweight.calloutLinks.length > 0 ? (
          <div className="mt-8 rounded-2xl border border-panel bg-surface p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <FileText className="w-5 h-5 text-accent shrink-0" />
            <p className="text-sm text-muted">
              {copy.lightweight.calloutPrefix}{" "}
              {copy.lightweight.calloutLinks.map((link, i) => (
                <span key={link.to}>
                  {i > 0 ? " ou " : ""}
                  <Link to={link.to} className="text-accent font-semibold hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function FAQ({ copy }: { copy: SmbFleetPageCopy }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-panel">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">{copy.faqHeading}</h2>
        <div className="flex flex-col gap-3">
          {copy.pageFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border overflow-hidden bg-surface transition-colors ${isOpen ? "border-accent/40" : "border-panel"}`}
              >
                <button type="button" onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
                  <span className="text-[15px] font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
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

function FinalCTA({ copy }: { copy: SmbFleetPageCopy }) {
  return (
    <section className="py-20 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-panel">
      <div className="max-w-[640px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.cta.heading}</h2>
        <p className="text-muted mb-10 text-base md:text-lg">{copy.cta.body}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">
          {copy.cta.alsoSeePrefix}{" "}
          {copy.cta.links.map((link, i) => (
            <span key={link.to}>
              {i > 0 ? " · " : ""}
              <Link to={link.to} className="text-accent hover:text-white transition-colors font-semibold">
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}