import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  CalendarDays,
  Gauge,
  StickyNote,
  CheckCircle,
  X,
  ChevronDown,
  History,
  FileText,
} from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "../../landing/StoreButtons";
import addingLog from "../../../assets/phone_screenshot_adding_log.png";
import logsCategories from "../../../assets/logs_and_categories_list_ui_illustration_large.png";
import sharedView from "../../../assets/phone_screenshot_shared_car_browser_view.png";
import type { CarServiceHistoryAppCopy } from "./types";

const whyIcons = [History, FileText, Gauge, StickyNote] as const;
const trackIcons = [Wrench, CalendarDays, Gauge, FileText, StickyNote, History] as const;

export function CarServiceHistoryAppView({ copy }: { copy: CarServiceHistoryAppCopy }) {
  return (
    <>
      <Hero copy={copy} />
      <WhyItMatters copy={copy} />
      <WhatYouCanTrack copy={copy} />
      <ShareableHistory copy={copy} />
      <BetterThanScattered copy={copy} />
      <ServiceHistoryFAQ copy={copy} />
      <PageCTA copy={copy} />
    </>
  );
}

function Hero({ copy }: { copy: CarServiceHistoryAppCopy }) {
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
        <div className="flex-1 flex justify-center lg:justify-end gap-6 items-end">
          <img src={addingLog} alt={copy.hero.addingLogAlt} className="w-[180px] md:w-[210px] h-auto" />
          <img src={logsCategories} alt={copy.hero.categoriesAlt} className="w-[200px] md:w-[230px] h-auto mb-8" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function WhyItMatters({ copy }: { copy: CarServiceHistoryAppCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whyItMatters.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.whyItMatters.heading}</h2>
          {copy.whyItMatters.intro ? <p className="text-base text-muted max-w-[540px] mx-auto">{copy.whyItMatters.intro}</p> : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {copy.whyItMatters.points.map((item, i) => {
            const Icon = whyIcons[i] ?? History;
            return (
              <div key={item.title} className="rounded-xl border border-panel bg-surface p-6">
                <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
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

function WhatYouCanTrack({ copy }: { copy: CarServiceHistoryAppCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whatYouCanTrack.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.whatYouCanTrack.heading}</h2>
          {copy.whatYouCanTrack.intro ? <p className="text-base text-muted max-w-[520px] mx-auto">{copy.whatYouCanTrack.intro}</p> : null}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          {copy.whatYouCanTrack.items.map((item, i) => {
            const Icon = trackIcons[i] ?? Wrench;
            return (
              <div key={item.label} className="rounded-xl border border-panel bg-surface p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand/12 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ShareableHistory({ copy }: { copy: CarServiceHistoryAppCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.shareableHistory.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">{copy.shareableHistory.heading}</h2>
            <p className="text-base text-muted mb-8 max-w-[520px] mx-auto lg:mx-0">{copy.shareableHistory.intro}</p>
            <ul className="flex flex-col gap-3 text-sm text-muted mb-8 max-w-[480px] mx-auto lg:mx-0">
              {copy.shareableHistory.bullets.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">
              {copy.shareableHistory.moreOnSharingLabel}{" "}
              <Link to={copy.shareableHistory.shareLink.to} className="text-accent font-semibold hover:text-white transition-colors">
                {copy.shareableHistory.shareLink.label}
              </Link>
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 480 }}>
              <img src={sharedView} alt={copy.shareableHistory.imageAlt} className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BetterThanScattered({ copy }: { copy: CarServiceHistoryAppCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.betterThanScattered.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.betterThanScattered.heading}</h2>
          {copy.betterThanScattered.intro ? <p className="text-base text-muted max-w-[520px] mx-auto">{copy.betterThanScattered.intro}</p> : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          <div className="rounded-xl border border-panel bg-surface p-8">
            <h3 className="text-sm font-semibold text-muted mb-5 uppercase tracking-wide">{copy.betterThanScattered.withoutHeading}</h3>
            <ul className="flex flex-col gap-3">
              {copy.betterThanScattered.withoutItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-accent/30 bg-brand/5 p-8">
            <h3 className="text-sm font-semibold text-accent mb-5 uppercase tracking-wide">{copy.betterThanScattered.withHeading}</h3>
            <ul className="flex flex-col gap-3">
              {copy.betterThanScattered.withItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-muted mt-10">
          {copy.betterThanScattered.relatedPrefix}{" "}
          {copy.betterThanScattered.relatedLinks.map((link, i) => (
            <span key={link.to}>
              {i > 0 ? " · " : null}
              <Link to={link.to} className="text-accent font-semibold hover:text-white transition-colors">
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function ServiceHistoryFAQ({ copy }: { copy: CarServiceHistoryAppCopy }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[860px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">{copy.faqHeading}</h2>
        <div className="flex flex-col gap-3">
          {copy.pageFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border overflow-hidden bg-surface transition-colors ${isOpen ? "border-accent/40" : "border-panel"}`}
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

function PageCTA({ copy }: { copy: CarServiceHistoryAppCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[640px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-5">{copy.cta.heading}</h2>
        <p className="text-base text-muted mb-10">{copy.cta.body}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>
    </section>
  );
}
