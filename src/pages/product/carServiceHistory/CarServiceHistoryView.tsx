import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Receipt,
  TrendingDown,
  HelpCircle,
  ListChecks,
  FolderOpen,
  Share2,
  CalendarDays,
  Gauge,
  StickyNote,
  ChevronDown,
} from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "../../landing/StoreButtons";
import sharedBrowserView from "../../../assets/phone_screenshot_shared_car_browser_view.png";
import logsCategories from "../../../assets/logs_and_categories_list_ui_illustration_large.png";
import type { CarServiceHistoryCopy } from "./types";

const problemIcons = [Receipt, HelpCircle, AlertTriangle, TrendingDown] as const;
const outcomeIcons = [ListChecks, CalendarDays, StickyNote, FolderOpen, Share2] as const;

export function CarServiceHistoryView({ copy }: { copy: CarServiceHistoryCopy }) {
  return (
    <>
      <ServiceHero copy={copy} />
      <WhyItMatters copy={copy} />
      <WhatBelongs copy={copy} />
      <HowItHelps copy={copy} />
      <ResaleSection copy={copy} />
      <ServiceFAQ copy={copy} />
      <ServiceCTA copy={copy} />
    </>
  );
}

function ServiceHero({ copy }: { copy: CarServiceHistoryCopy }) {
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

function WhyItMatters({ copy }: { copy: CarServiceHistoryCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whyItMatters.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.whyItMatters.heading}</h2>
          <p className="text-base text-muted max-w-[540px] mx-auto">{copy.whyItMatters.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {copy.whyItMatters.problems.map((item, i) => {
            const Icon = problemIcons[i];
            return (
              <div
                key={item.title}
                className="rounded-xl border border-panel bg-surface p-7 flex items-start gap-5"
              >
                <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatBelongs({ copy }: { copy: CarServiceHistoryCopy }) {
  const w = copy.whatBelongs;
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{w.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{w.heading}</h2>
          <p className="text-base text-muted max-w-[580px] mx-auto">{w.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1000px] mx-auto mb-12">
          {w.serviceTypes.map((item) => (
            <div key={item.name} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.name}</p>
              <p className="text-xs leading-relaxed text-muted">{item.details}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted max-w-[560px] mx-auto">
          {w.detailLinePrefix}{" "}
          <span className="text-white">{w.detailLineHighlight1}</span>,{" "}
          <span className="text-white">{w.detailLineHighlight2}</span>,{" "}
          <span className="text-white">{w.detailLineHighlight3}</span>
          {w.detailLineHighlight4 ? (
            <>
              {", et "}
              <span className="text-white">{w.detailLineHighlight4}</span>
            </>
          ) : null}
          {w.detailLineSuffix}
        </p>

        <p className="text-center text-sm text-muted mt-6">
          {w.guidePrefix ? (
            <>
              {w.guidePrefix}{" "}
            </>
          ) : null}
          <Link to={w.guidePath} className="text-accent font-semibold hover:text-white transition-colors">
            {w.guideLinkLabel}
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function HowItHelps({ copy }: { copy: CarServiceHistoryCopy }) {
  const h = copy.howItHelps;
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{h.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">{h.heading}</h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">{h.intro}</p>
            <div className="flex flex-col gap-6">
              {h.outcomes.map((item, i) => {
                const Icon = outcomeIcons[i];
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

            <p className="text-sm text-muted mt-10">
              {h.trackerPrefix}{" "}
              <Link to={h.trackerPath} className="text-accent font-semibold hover:text-white transition-colors">
                {h.trackerLinkLabel}
              </Link>
            </p>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={logsCategories}
              alt={copy.images.categoriesAlt}
              className="w-full max-w-[320px] md:max-w-[380px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResaleSection({ copy }: { copy: CarServiceHistoryCopy }) {
  const r = copy.resale;
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{r.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">{r.heading}</h2>
            <p className="text-base text-muted mb-6 max-w-[520px] mx-auto lg:mx-0">{r.body1}</p>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">{r.body2}</p>
            <div className="flex flex-col gap-3 text-sm text-muted max-w-[400px] mx-auto lg:mx-0">
              {r.bullets.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <Gauge className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={sharedBrowserView}
              alt={copy.images.sharedAlt}
              className="w-full max-w-[280px] md:max-w-[320px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceFAQ({ copy }: { copy: CarServiceHistoryCopy }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const f = copy.faq;
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{f.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{f.heading}</h2>
          <p className="text-base text-muted max-w-[440px] mx-auto">{f.intro}</p>
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

function ServiceCTA({ copy }: { copy: CarServiceHistoryCopy }) {
  const c = copy.cta;
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-16 md:px-16 md:py-20 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{c.heading}</h2>
          <p className="text-base text-muted max-w-[480px] mx-auto mb-10">{c.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted">
            <Link to={c.link1Path} className="text-accent font-semibold hover:text-white transition-colors">
              {c.link1Label}
            </Link>
            <span className="hidden sm:inline text-panel">·</span>
            <Link to={c.link2Path} className="text-accent font-semibold hover:text-white transition-colors">
              {c.link2Label}
            </Link>
            <span className="hidden sm:inline text-panel">·</span>
            <Link to={c.link3Path} className="text-accent font-semibold hover:text-white transition-colors">
              {c.link3Label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
