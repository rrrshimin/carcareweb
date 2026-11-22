import { Link } from "react-router-dom";
import {
  Wrench,
  Bell,
  Gauge,
  History,
  Share2,
  CheckCircle,
  X,
  Car,
  UserCheck,
  Home,
} from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AppStoreButton, GooglePlayButton } from "../../landing/StoreButtons";
import screenshotCarPage from "../../../assets/phone_screenshot_car_page.png";
import addingLog from "../../../assets/phone_screenshot_adding_log.png";
import type { CarMaintenanceTrackerCopy } from "./types";

const benefitIcons = [Wrench, Bell, Gauge, History, Share2] as const;

export function CarMaintenanceTrackerView({ copy }: { copy: CarMaintenanceTrackerCopy }) {
  return (
    <>
      <TrackerHero copy={copy} />
      <WhatItHelps copy={copy} />
      <AppVsNotes copy={copy} />
      <WhoItsFor copy={copy} />
      <TrackerFAQ copy={copy} />
      <TrackerCTA copy={copy} />
    </>
  );
}

function TrackerHero({ copy }: { copy: CarMaintenanceTrackerCopy }) {
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

function WhatItHelps({ copy }: { copy: CarMaintenanceTrackerCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whatItHelps.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">{copy.whatItHelps.heading}</h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">{copy.whatItHelps.intro}</p>
            <div className="flex flex-col gap-6">
              {copy.whatItHelps.benefits.map((item, i) => {
                const Icon = benefitIcons[i];
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

            <p className="text-sm text-muted mt-8">
              {copy.whatItHelps.guidePrefix}{" "}
              <Link to={copy.whatItHelps.guidePath} className="text-accent font-semibold hover:text-white transition-colors">
                {copy.whatItHelps.guideLinkLabel}
              </Link>
              .
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center gap-6">
            <img
              src={screenshotCarPage}
              alt={copy.images.carPageAlt}
              className="w-[200px] md:w-[230px] h-auto"
              loading="lazy"
            />
            <img
              src={addingLog}
              alt={copy.images.addingLogAlt}
              className="w-[200px] md:w-[230px] h-auto mt-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AppVsNotes({ copy }: { copy: CarMaintenanceTrackerCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.appVsNotes.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.appVsNotes.heading}</h2>
          <p className="text-base text-muted max-w-[520px] mx-auto">{copy.appVsNotes.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          <div className="rounded-xl border border-panel bg-surface p-8">
            <h3 className="text-base font-semibold text-muted mb-5 uppercase tracking-wide text-sm">
              {copy.appVsNotes.withoutHeading}
            </h3>
            <ul className="flex flex-col gap-3">
              {copy.appVsNotes.oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-accent/30 bg-surface p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-5 px-3 py-1.5 rounded-lg bg-brand text-white inline-block">
              {copy.appVsNotes.withHeading}
            </h3>
            <ul className="flex flex-col gap-3">
              {copy.appVsNotes.newWay.map((item) => (
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

const personaIcons = [Car, Home, UserCheck] as const;

function WhoItsFor({ copy }: { copy: CarMaintenanceTrackerCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.whoItsFor.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.whoItsFor.heading}</h2>
          <p className="text-base text-muted max-w-[480px] mx-auto">{copy.whoItsFor.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {copy.whoItsFor.personas.map((p, i) => {
            const Icon = personaIcons[i];
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

        <p className="text-center text-sm text-muted mt-10">
          {copy.whoItsFor.multiVehiclePrefix}{" "}
          <Link to={copy.whoItsFor.fleetManagementPath} className="text-accent font-semibold hover:text-white transition-colors">
            {copy.whoItsFor.fleetManagementLabel}
          </Link>
          {" · "}
          <Link to={copy.whoItsFor.fleetMaintenancePath} className="text-accent font-semibold hover:text-white transition-colors">
            {copy.whoItsFor.fleetMaintenanceLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}

function TrackerFAQ({ copy }: { copy: CarMaintenanceTrackerCopy }) {
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

function TrackerCTA({ copy }: { copy: CarMaintenanceTrackerCopy }) {
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
            <Link to={copy.cta.link1Path} className="text-accent font-semibold hover:text-white transition-colors">
              {copy.cta.link1Label}
            </Link>
            <span className="hidden sm:inline text-panel">·</span>
            <Link to={copy.cta.link2Path} className="text-accent font-semibold hover:text-white transition-colors">
              {copy.cta.link2Label}
            </Link>
            <span className="hidden sm:inline text-panel">·</span>
            <Link to={copy.cta.link3Path} className="text-accent font-semibold hover:text-white transition-colors">
              {copy.cta.link3Label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
