import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Share2,
  Link2,
  Eye,
  ShieldCheck,
  Car,
  Wrench,
  Gauge,
  StickyNote,
  CheckCircle,
  ChevronDown,
  Users,
} from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "../../landing/StoreButtons";
import sharedView from "../../../assets/phone_screenshot_shared_car_browser_view.png";
import heroScreenshot from "../../../assets/hero-screenshots-mockups.png";
import type { ShareCarMaintenanceHistoryCopy } from "./types";

const whyIcons = [ShieldCheck, Eye, Share2] as const;
const shownIcons = [Car, Wrench, Gauge, StickyNote, CheckCircle, Link2] as const;
const whoIcons = [Car, Wrench, Users] as const;

export function ShareCarMaintenanceHistoryView({ copy }: { copy: ShareCarMaintenanceHistoryCopy }) {
  return (
    <>
      <Hero copy={copy} />
      <WhyItHelps copy={copy} />
      <WhatItShows copy={copy} />
      <ReadOnlyRecord copy={copy} />
      <WhoItsFor copy={copy} />
      <ShareFAQ copy={copy} />
      <PageCTA copy={copy} />
    </>
  );
}

function Hero({ copy }: { copy: ShareCarMaintenanceHistoryCopy }) {
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
          <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 460 }}>
            <img src={sharedView} alt={copy.hero.imageAlt} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItHelps({ copy }: { copy: ShareCarMaintenanceHistoryCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whyItHelps.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.whyItHelps.heading}</h2>
          {copy.whyItHelps.intro ? <p className="text-base text-muted max-w-[560px] mx-auto">{copy.whyItHelps.intro}</p> : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {copy.whyItHelps.cards.map((item, i) => {
            const Icon = whyIcons[i] ?? Share2;
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

function WhatItShows({ copy }: { copy: ShareCarMaintenanceHistoryCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 500 }}>
              <img src={heroScreenshot} alt={copy.whatItShows.screenshotAlt} className="w-full h-auto" loading="lazy" />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whatItShows.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">{copy.whatItShows.heading}</h2>
            {copy.whatItShows.intro ? (
              <p className="text-base text-muted mb-8 max-w-[520px] mx-auto lg:mx-0">{copy.whatItShows.intro}</p>
            ) : null}
            <div className="flex flex-col gap-4">
              {copy.whatItShows.items.map((item, i) => {
                const Icon = shownIcons[i] ?? CheckCircle;
                return (
                  <div key={item.label} className="flex items-start gap-4 text-left">
                    <div className="w-8 h-8 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                      <p className="text-sm leading-relaxed text-muted mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadOnlyRecord({ copy }: { copy: ShareCarMaintenanceHistoryCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[900px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-10 md:px-12 md:py-14">
          <div className="text-center mb-10">
            <div className="inline-flex w-12 h-12 rounded-xl bg-brand/12 items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">{copy.readOnly.heading}</h2>
            {copy.readOnly.intro ? <p className="text-base text-muted max-w-[520px] mx-auto">{copy.readOnly.intro}</p> : null}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {copy.readOnly.points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoItsFor({ copy }: { copy: ShareCarMaintenanceHistoryCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whoItsFor.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.whoItsFor.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {copy.whoItsFor.personas.map((item, i) => {
            const Icon = whoIcons[i] ?? Users;
            return (
              <div key={item.who} className="rounded-xl border border-panel bg-surface p-6">
                <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.who}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            );
          })}
        </div>
        <p className="text-center text-sm text-muted mt-10">
          {copy.whoItsFor.relatedPrefix}{" "}
          {copy.whoItsFor.relatedLinks.map((link, i) => (
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

function ShareFAQ({ copy }: { copy: ShareCarMaintenanceHistoryCopy }) {
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

function PageCTA({ copy }: { copy: ShareCarMaintenanceHistoryCopy }) {
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