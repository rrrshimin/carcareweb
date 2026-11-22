import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  CalendarDays,
  Gauge,
  Wrench,
  DollarSign,
  StickyNote,
  TrendingUp,
  Clock,
  ShieldCheck,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "../../landing/StoreButtons";
import differentLogTypes from "../../../assets/different_log_types_illustration_mid_size.png";
import spendingAnalytics from "../../../assets/car_spending_analytics_UI_illustration_large.png";
import type { VehicleMaintenanceLogCopy } from "./types";

type ResolveHref = (path: string) => string;

const logFieldIcons = [Wrench, CalendarDays, Gauge, ClipboardList, DollarSign, StickyNote] as const;
const outcomeIcons = [BookOpen, TrendingUp, Clock, ShieldCheck] as const;

export function VehicleMaintenanceLogView({
  copy,
  resolveInternalHref = (p) => p,
}: {
  copy: VehicleMaintenanceLogCopy;
  resolveInternalHref?: ResolveHref;
}) {
  return (
    <>
      <LogHero copy={copy} />
      <WhatIsALog copy={copy} resolveInternalHref={resolveInternalHref} />
      <WhatToLog copy={copy} />
      <WhyLoggingHelps copy={copy} />
      <HowCarCareHelps copy={copy} resolveInternalHref={resolveInternalHref} />
      <ExampleEntries copy={copy} />
      <LogFAQ copy={copy} />
      <LogCTA copy={copy} resolveInternalHref={resolveInternalHref} />
    </>
  );
}

function LogHero({ copy }: { copy: VehicleMaintenanceLogCopy }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[800px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">{copy.hero.eyebrow}</p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
          {copy.hero.titleLine}{" "}
          <span className="text-accent">{copy.hero.titleAccent}</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[600px] mx-auto">{copy.hero.body}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">{copy.hero.subline}</p>
      </div>
    </section>
  );
}

function WhatIsALog({ copy, resolveInternalHref }: { copy: VehicleMaintenanceLogCopy; resolveInternalHref: ResolveHref }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[760px] mx-auto text-center">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whatIsALog.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">{copy.whatIsALog.heading}</h2>
        {copy.whatIsALog.paragraphs.map((p) => (
          <p key={p.slice(0, 48)} className="text-base leading-relaxed text-muted mb-5 last:mb-0">
            {p}
          </p>
        ))}
        <p className="text-sm text-muted mt-6">
          <Link
            to={resolveInternalHref(copy.whatIsALog.guideLink.to)}
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            {copy.whatIsALog.guideLink.label}
          </Link>
        </p>
      </div>
    </section>
  );
}

function WhatToLog({ copy }: { copy: VehicleMaintenanceLogCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whatToLog.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">{copy.whatToLog.heading}</h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">{copy.whatToLog.intro}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {copy.whatToLog.fields.map((field, i) => {
                const Icon = logFieldIcons[i];
                return (
                  <div key={field.title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">{field.title}</h3>
                      <p className="text-xs leading-relaxed text-muted">{field.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={differentLogTypes}
              alt={copy.whatToLog.illustrationAlt}
              className="w-full max-w-[340px] md:max-w-[400px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyLoggingHelps({ copy }: { copy: VehicleMaintenanceLogCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whyLoggingHelps.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">{copy.whyLoggingHelps.heading}</h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">{copy.whyLoggingHelps.intro}</p>
            <div className="flex flex-col gap-7">
              {copy.whyLoggingHelps.outcomes.map((item, i) => {
                const Icon = outcomeIcons[i];
                return (
                  <div key={item.title} className="flex items-start gap-4">
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

          <div className="flex-1 flex justify-center">
            <img
              src={spendingAnalytics}
              alt={copy.whyLoggingHelps.analyticsImageAlt}
              className="w-full max-w-[340px] md:max-w-[420px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowCarCareHelps({
  copy,
  resolveInternalHref,
}: {
  copy: VehicleMaintenanceLogCopy;
  resolveInternalHref: ResolveHref;
}) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.howCarCareHelps.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.howCarCareHelps.heading}</h2>
          <p className="text-base text-muted max-w-[560px] mx-auto">{copy.howCarCareHelps.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {copy.howCarCareHelps.cards.map((item) => (
            <div key={item.title} className="rounded-xl border border-panel bg-surface p-6">
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 text-sm text-muted flex-wrap">
          {copy.howCarCareHelps.relatedLinks.map((link, idx) => (
            <span key={link.to} className="flex items-center gap-4">
              {idx > 0 && <span className="hidden sm:inline text-panel">·</span>}
              <Link to={resolveInternalHref(link.to)} className="text-accent font-semibold hover:text-white transition-colors">
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleEntries({ copy }: { copy: VehicleMaintenanceLogCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.exampleEntries.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.exampleEntries.heading}</h2>
          <p className="text-base text-muted max-w-[520px] mx-auto">{copy.exampleEntries.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
          {copy.exampleEntries.entries.map((entry) => (
            <div key={entry.type + entry.date} className="rounded-xl border border-panel bg-surface px-5 py-5">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-sm font-semibold text-white leading-snug">{entry.type}</h3>
                <span className="text-xs text-accent font-semibold shrink-0">{entry.mileage}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-2">{entry.detail}</p>
              <p className="text-xs text-muted leading-relaxed italic mb-3">&quot;{entry.note}&quot;</p>
              <p className="text-xs text-muted/60">{entry.date}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-10 max-w-[480px] mx-auto">{copy.exampleEntries.closing}</p>
      </div>
    </section>
  );
}

function LogFAQ({ copy }: { copy: VehicleMaintenanceLogCopy }) {
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
          {copy.faq.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border overflow-hidden transition-colors bg-surface ${
                  isOpen ? "border-accent/40" : "border-panel"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="text-[15px] font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
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

function LogCTA({ copy, resolveInternalHref }: { copy: VehicleMaintenanceLogCopy; resolveInternalHref: ResolveHref }) {
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted flex-wrap">
            {copy.cta.links.map((link, idx) => (
              <span key={link.to} className="flex items-center gap-3">
                {idx > 0 && <span className="hidden sm:inline text-panel">·</span>}
                <Link to={resolveInternalHref(link.to)} className="text-accent font-semibold hover:text-white transition-colors">
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
