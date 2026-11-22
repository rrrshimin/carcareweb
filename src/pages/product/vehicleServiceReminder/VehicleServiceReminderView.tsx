import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Gauge,
  CalendarDays,
  CheckCircle,
  AlertTriangle,
  Clock,
  ChevronDown,
  RefreshCw,
  LayoutDashboard,
} from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "../../landing/StoreButtons";
import logCategoriesImg from "../../../assets/log_categories_illustration_mid_size.png";
import heroScreenshot from "../../../assets/hero-screenshots-mockups.png";
import type { VehicleServiceReminderCopy } from "./types";

const problemIcons = [Clock, AlertTriangle, RefreshCw] as const;
const reminderIcons = [Gauge, CalendarDays, Bell] as const;
const statusIcons = { ok: CheckCircle, soon: Bell, late: AlertTriangle } as const;
const statusColor = { ok: "text-emerald-400", soon: "text-accent", late: "text-red-400" } as const;

export function VehicleServiceReminderView({ copy }: { copy: VehicleServiceReminderCopy }) {
  return (
    <>
      <Hero copy={copy} />
      <ProblemSection copy={copy} />
      <ReminderTypes copy={copy} />
      <DueOverdueSection copy={copy} />
      <MileageSection copy={copy} />
      <ReminderFAQ copy={copy} />
      <PageCTA copy={copy} />
    </>
  );
}

function Hero({ copy }: { copy: VehicleServiceReminderCopy }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">{copy.hero.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
            {copy.hero.titleLine}{" "}
            <span className="text-accent">{copy.hero.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">
            {copy.hero.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start mb-6">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <p className="text-sm text-muted">{copy.hero.subline}</p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 420 }}>
            <img src={logCategoriesImg} alt={copy.hero.imageAlt} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection({ copy }: { copy: VehicleServiceReminderCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.problem.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.problem.heading}</h2>
          <p className="text-base text-muted max-w-[560px] mx-auto">{copy.problem.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {copy.problem.cards.map((item, i) => {
            const Icon = problemIcons[i] ?? Clock;
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

function ReminderTypes({ copy }: { copy: VehicleServiceReminderCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.reminderTypes.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">{copy.reminderTypes.heading}</h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">{copy.reminderTypes.intro}</p>
            <div className="flex flex-col gap-6">
              {copy.reminderTypes.items.map((item, i) => {
                const Icon = reminderIcons[i] ?? Bell;
                return (
                  <div key={item.title} className="flex items-start gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">{item.body}</p>
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
                alt={copy.reminderTypes.screenshotAlt}
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

function DueOverdueSection({ copy }: { copy: VehicleServiceReminderCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.dueOverdue.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{copy.dueOverdue.heading}</h2>
          <p className="text-base text-muted max-w-[540px] mx-auto">{copy.dueOverdue.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {copy.dueOverdue.statuses.map((item) => {
            const Icon = statusIcons[item.tone];
            const color = statusColor[item.tone];
            return (
              <div key={item.label} className="rounded-xl border border-panel bg-surface p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
                <h3 className={`text-base font-semibold mb-2 ${color}`}>{item.label}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <div className="inline-flex items-start gap-3 rounded-xl border border-panel bg-surface px-6 py-5 max-w-[560px] text-left">
            <LayoutDashboard className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed text-muted">{copy.dueOverdue.callout}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MileageSection({ copy }: { copy: VehicleServiceReminderCopy }) {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[900px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-10 md:px-12 md:py-14">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            <div className="flex-1">
              <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{copy.mileage.eyebrow}</p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">{copy.mileage.heading}</h2>
              <p className="text-sm leading-relaxed text-muted mb-5">{copy.mileage.body}</p>
              <ul className="flex flex-col gap-3">
                {copy.mileage.bullets.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 md:w-[200px]">
              <img src={logCategoriesImg} alt={copy.mileage.imageAlt} className="w-full h-auto rounded-xl" loading="lazy" />
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-muted mt-8">
          {copy.mileage.relatedPrefix}{" "}
          {copy.mileage.relatedLinks.map((link, i) => (
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

function ReminderFAQ({ copy }: { copy: VehicleServiceReminderCopy }) {
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
                className={`rounded-xl border overflow-hidden bg-surface transition-colors ${
                  isOpen ? "border-accent/40" : "border-panel"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
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

function PageCTA({ copy }: { copy: VehicleServiceReminderCopy }) {
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