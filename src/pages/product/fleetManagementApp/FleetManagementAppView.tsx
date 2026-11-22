import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Bell,
  Gauge,
  Car,
  History,
  Share2,
  CheckCircle,
  X,
  Building2,
  Package,
  ChevronDown,
  Layers,
  Briefcase,
} from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "../../landing/StoreButtons";
import heroScreenshot from "../../../assets/hero-screenshots-mockups.png";
import type { FleetManagementAppCopy } from "./types";

type Props = { copy: FleetManagementAppCopy };

export function FleetManagementAppView({ copy }: Props) {
  return (
    <>
          <Hero copy={copy} />
          <FeaturesSection copy={copy} />
          <CompareSection copy={copy} />
          <WhoSection copy={copy} />
          <LightweightSection copy={copy} />
          <FaqSection copy={copy} />
          <CtaSection copy={copy} />
    </>
  );
}

const featureIcons = [Car, Wrench, Gauge, Bell, History, Share2] as const;
const personaIcons = [Building2, Package, Layers, Briefcase] as const;

function Hero({ copy }: { copy: FleetManagementAppCopy }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">{copy.hero.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
            {copy.hero.titleLine}{" "}
            <span className="text-accent">{copy.hero.titleAccent}</span>
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

function FeaturesSection({ copy }: { copy: FleetManagementAppCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.features.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">{copy.features.heading}</h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">{copy.features.intro}</p>
            <div className="flex flex-col gap-6">
              {copy.features.items.map((item, i) => {
                const Icon = featureIcons[i] ?? Car;
                return (
                  <div key={item.title} className="flex items-start gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 520 }}>
              <img
                src={heroScreenshot}
                alt={copy.features.secondaryImageAlt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareSection({ copy }: { copy: FleetManagementAppCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.compare.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.compare.heading}</h2>
          <p className="text-base text-muted max-w-[520px] mx-auto">{copy.compare.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          <div className="rounded-xl border border-panel bg-surface p-8">
            <h3 className="text-sm font-semibold text-muted mb-5 uppercase tracking-wide">{copy.compare.withoutLabel}</h3>
            <ul className="flex flex-col gap-3">
              {copy.compare.without.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-accent/30 bg-surface p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-5 px-3 py-1.5 rounded-lg bg-brand text-white inline-block">
              {copy.compare.withLabel}
            </h3>
            <ul className="flex flex-col gap-3">
              {copy.compare.with.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoSection({ copy }: { copy: FleetManagementAppCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.who.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.who.heading}</h2>
          <p className="text-base text-muted max-w-[500px] mx-auto">{copy.who.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {copy.who.personas.map((p, i) => {
            const Icon = personaIcons[i] ?? Building2;
            return (
              <div key={p.title} className="rounded-xl border border-panel bg-surface p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand/12 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LightweightSection({ copy }: { copy: FleetManagementAppCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="flex-1">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.lightweight.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">{copy.lightweight.heading}</h2>
            <p className="text-base text-muted mb-8 max-w-[520px]">{copy.lightweight.body1}</p>
            <p className="text-base text-muted max-w-[520px]">{copy.lightweight.body2}</p>

            <div className="mt-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <AppStoreButton />
                <GooglePlayButton />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <div className="rounded-xl border border-panel bg-surface p-7">
              <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">{copy.lightweight.enterpriseLabel}</h3>
              <ul className="flex flex-col gap-3">
                {copy.lightweight.enterprise.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <X className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-accent/30 bg-surface p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 px-3 py-1.5 rounded-lg bg-brand text-white inline-block">
                {copy.lightweight.ccdLabel}
              </h3>
              <ul className="flex flex-col gap-3 mt-1">
                {copy.lightweight.ccd.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 text-sm text-muted">
          <span>{copy.lightweight.relatedPrefix}</span>
          {copy.lightweight.links.map((link, i) => (
            <span key={link.to} className="contents">
              {i > 0 ? <span className="hidden sm:inline text-panel">·</span> : null}
              <Link to={link.to} className="text-accent font-semibold hover:text-white transition-colors">
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ copy }: { copy: FleetManagementAppCopy }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.faq.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.faq.heading}</h2>
          <p className="text-base text-muted max-w-[440px] mx-auto">{copy.faq.intro}</p>
        </div>

        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {copy.pageFaqs.map((faq, index) => {
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

function CtaSection({ copy }: { copy: FleetManagementAppCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-16 md:px-16 md:py-20 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">{copy.cta.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.cta.heading}</h2>
          <p className="text-base text-muted max-w-[480px] mx-auto mb-10">{copy.cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted">
            {copy.cta.links.map((link, i) => (
              <span key={link.to} className="contents">
                {i > 0 ? <span className="hidden sm:inline text-panel">·</span> : null}
                <Link to={link.to} className="text-accent font-semibold hover:text-white transition-colors">
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
