import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Wrench,
  Gauge,
  Bell,
  History,
  Share2,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "../../landing/StoreButtons";
import type { HowCarCareDiaryWorksCopy } from "./types";

type Props = { copy: HowCarCareDiaryWorksCopy };

export function HowCarCareDiaryWorksView({ copy }: Props) {
  return (
    <>
          <Hero copy={copy} />
          <WhatItIsSection copy={copy} />
          <StepsSection copy={copy} />
          <TrackSection copy={copy} />
          <RemindersSection copy={copy} />
          <SharingSection copy={copy} />
          <PlansSection copy={copy} />
          <FaqSection copy={copy} />
          <CtaSection copy={copy} />
    </>
  );
}

function Hero({ copy }: { copy: HowCarCareDiaryWorksCopy }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[800px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
          CarCare Diary
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
          {copy.hero.titleLine}{" "}
          <span className="text-accent">{copy.hero.titleAccent}</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[600px] mx-auto">{copy.hero.body}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">{copy.hero.subline}</p>
      </div>
    </section>
  );
}

function WhatItIsSection({ copy }: { copy: HowCarCareDiaryWorksCopy }) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[720px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 text-center">
          What It Is
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          What CarCare Diary Is
        </h2>
        <div className="rounded-2xl border border-panel bg-surface px-8 py-10 flex flex-col gap-4 text-muted leading-relaxed">
          {copy.whatItIs.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

const stepIcons = [Car, Wrench, Gauge, Bell, History, Share2] as const;

function StepsSection({ copy }: { copy: HowCarCareDiaryWorksCopy }) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.steps.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.steps.heading}</h2>
          <p className="text-base text-muted max-w-[480px] mx-auto">{copy.steps.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1060px] mx-auto">
          {copy.steps.items.map((item, i) => {
            const Icon = stepIcons[i] ?? Car;
            return (
              <div key={item.number} className="rounded-xl border border-panel bg-surface p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-brand/12 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">Step {item.number}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrackSection({ copy }: { copy: HowCarCareDiaryWorksCopy }) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.track.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.track.heading}</h2>
          <p className="text-base text-muted max-w-[520px] mx-auto">{copy.track.intro}</p>
        </div>

        <div className="rounded-2xl border border-panel bg-surface px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {copy.track.items.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-8 border-t border-panel pt-6">
            <Link to={copy.track.guideLink.to} className="text-accent hover:text-white transition-colors">
              {copy.track.guideLink.label}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function RemindersSection({ copy }: { copy: HowCarCareDiaryWorksCopy }) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.reminders.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.reminders.heading}</h2>
        </div>
        <div className="rounded-2xl border border-panel bg-surface px-8 py-10 flex flex-col gap-4 text-muted leading-relaxed">
          {copy.reminders.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="text-sm">
            <Link to={copy.reminders.guideLink.to} className="text-accent hover:text-white transition-colors">
              {copy.reminders.guideLink.label}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function SharingSection({ copy }: { copy: HowCarCareDiaryWorksCopy }) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.sharing.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.sharing.heading}</h2>
        </div>
        <div className="rounded-2xl border border-panel bg-surface px-8 py-10 flex flex-col gap-4 text-muted leading-relaxed">
          {copy.sharing.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="text-sm">
            {copy.sharing.links.map((link, i) => (
              <span key={link.to}>
                {i > 0 ? " · " : null}
                <Link to={link.to} className="text-accent hover:text-white transition-colors">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function PlansSection({ copy }: { copy: HowCarCareDiaryWorksCopy }) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1060px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.plans.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.plans.heading}</h2>
          <p className="text-base text-muted max-w-[480px] mx-auto">{copy.plans.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.plans.items.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-xl border bg-surface p-8 flex flex-col ${
                index === 1 ? "border-accent/40" : "border-panel"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {plan.tagline}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {plan.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-muted"
                  >
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ copy }: { copy: HowCarCareDiaryWorksCopy }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
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

function CtaSection({ copy }: { copy: HowCarCareDiaryWorksCopy }) {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-16 md:px-16 md:py-20 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">{copy.cta.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.cta.heading}</h2>
          <p className="text-base text-muted max-w-[480px] mx-auto mb-10">{copy.cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted flex-wrap">
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
