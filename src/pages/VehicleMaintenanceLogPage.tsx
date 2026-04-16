import { useMemo, useState } from "react";
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
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";
import differentLogTypes from "../assets/different_log_types_illustration_mid_size.png";
import spendingAnalytics from "../assets/car_spending_analytics_UI_illustration_large.png";

export const maintenanceLogFaqs = [
  {
    question: "What Is A Vehicle Maintenance Log?",
    answer:
      "A vehicle maintenance log is an ongoing record of every service, repair, and upkeep task carried out on your car. Each entry typically includes the type of service, the date it was done, the mileage at the time, any parts or fluids used, and relevant notes. Over time the log builds into a complete maintenance history for the vehicle.",
  },
  {
    question: "What Should I Include In A Car Service Log?",
    answer:
      "At minimum, each entry should include the service type, date, and mileage. Adding specs such as oil grade, filter type, or part numbers makes the record significantly more useful. Notes about observations, upcoming needs, or who performed the work are also worth capturing while the detail is fresh.",
  },
  {
    question: "Can I Keep A Digital Vehicle Maintenance Log?",
    answer:
      "Yes. CarCare Diary lets you log every service on your phone with full detail - service type, date, mileage, specs, and notes. The log is always organized, always with you, and never gets lost the way paper records do.",
  },
  {
    question: "Does A Maintenance Log Help With Resale Value?",
    answer:
      "Yes. A well-kept log shows potential buyers that the car has been consistently maintained. It removes uncertainty and gives buyers confidence. CarCare Diary lets you share your full maintenance history through a single link, making that conversation straightforward.",
  },
  {
    question: "Can I Track Mileage In A Car Maintenance Log?",
    answer:
      "Yes. Mileage is recorded on every log entry in CarCare Diary. You can also update your car's current odometer reading in the app. This keeps your maintenance schedule accurate and shows the exact mileage at every service.",
  },
  {
    question: "Is CarCare Diary Free?",
    answer:
      "CarCare Diary is free for one vehicle with full access to the maintenance log, mileage tracking, and shareable service history. A Pro plan is available for tracking multiple vehicles.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CarCare Diary",
    url: "https://www.carcarediary.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    description:
      "Keep a vehicle maintenance log with service records, mileage, notes, and reminders in one app. Organize your car maintenance history with CarCare Diary.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: maintenanceLogFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function VehicleMaintenanceLogPage() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Vehicle Maintenance Log App for Service Records and Mileage",
    description:
      "Keep a vehicle maintenance log with service records, mileage, notes, and reminders in one app. Organize your car maintenance history with CarCare Diary.",
    path: "/vehicle-maintenance-log",
    jsonLd,
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-base text-white font-sans">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(180deg, #0C111F 0%, #0E1325 40%, #0C111F 100%)",
        }}
      />
      <div className="relative z-10">
        <LandingHeader />
        <main>
          <LogHero />
          <WhatIsALog />
          <WhatToLog />
          <WhyLoggingHelps />
          <HowCarCareHelps />
          <ExampleEntries />
          <LogFAQ />
          <LogCTA />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

function LogHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[800px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
          CarCare Diary
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
          Vehicle Maintenance Log{" "}
          <span className="text-accent">
            Keep A Running Record Of Every Service Your Car Receives
          </span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[600px] mx-auto">
          A vehicle maintenance log is an ongoing record of every service your
          car receives - oil changes, brake work, filter replacements, tire
          rotations - with dates, mileage, and notes for each entry. CarCare
          Diary keeps this log on your phone, organized by category and
          shareable when needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">Free for iPhone & Android</p>
      </div>
    </section>
  );
}

function WhatIsALog() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[760px] mx-auto text-center">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
          The Basics
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          What Is A Vehicle Maintenance Log?
        </h2>
        <p className="text-base leading-relaxed text-muted mb-5">
          A vehicle maintenance log is an ongoing record of every service and
          repair your car receives over its life. Unlike a one-off service
          receipt, a log builds over time - creating a clear timeline of what
          was done, when, and at what mileage.
        </p>
        <p className="text-base leading-relaxed text-muted mb-5">
          A good log covers routine upkeep like oil changes and tire rotations,
          but also captures less frequent work like brake replacements, timing
          belt service, and inspections. Over the years this record becomes one
          of the most useful documents you have for your vehicle.
        </p>
        <p className="text-base leading-relaxed text-muted">
          Most car owners start with good intentions - keeping receipts,
          remembering rough dates - but without a dedicated system the picture
          becomes incomplete quickly. A digital maintenance log solves that by
          making entries fast and keeping everything in one place.
        </p>
        <p className="text-sm text-muted mt-6">
          For guidance on what to record in each entry, see{" "}
          <Link
            to="/blog/what-to-include-in-a-car-service-history"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            what to include in a car service history
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

const logFields = [
  {
    icon: Wrench,
    title: "Service Type",
    description:
      "What was actually done - oil change, brake pad replacement, air filter, coolant flush. Be specific enough to be useful later.",
  },
  {
    icon: CalendarDays,
    title: "Date",
    description:
      "When the service was performed. Even an approximate date is better than none. Exact dates let you spot intervals and patterns over time.",
  },
  {
    icon: Gauge,
    title: "Mileage",
    description:
      "The odometer reading at the time of service. This is how you know when something is due again, and how you build a precise maintenance timeline.",
  },
  {
    icon: ClipboardList,
    title: "Specs And Parts",
    description:
      "Oil grade, filter part number, fluid type, tyre brand - whatever was used. These details matter when the same work needs to be done again.",
  },
  {
    icon: DollarSign,
    title: "Cost",
    description:
      "Recording what you spent lets you see your total maintenance outlay over time and makes budgeting for future service easier.",
  },
  {
    icon: StickyNote,
    title: "Notes And Observations",
    description:
      "Anything the mechanic flagged, something you noticed, or a reminder for next time. Notes capture context that specs alone cannot.",
  },
];

function WhatToLog() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              What To Record
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              What To Log For Every Service
            </h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">
              A maintenance log is only as useful as what goes into it. These
              are the six things worth capturing for each entry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {logFields.map((field) => (
                <div key={field.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                    <field.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {field.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted">
                      {field.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={differentLogTypes}
              alt="CarCare Diary showing different log types including oil change, brakes, filters, and tyre entries"
              className="w-full max-w-[340px] md:max-w-[400px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const outcomes = [
  {
    icon: BookOpen,
    title: "Remember Exactly What Was Done",
    description:
      "A log answers the question you always forget to remember: when was the last oil change? What oil grade was used? What was the mileage at the last brake service?",
  },
  {
    icon: TrendingUp,
    title: "See Patterns Over Time",
    description:
      "Once you have a year or two of entries, patterns emerge. You can see how often certain services recur, where the costs cluster, and how your car behaves across mileage ranges.",
  },
  {
    icon: Clock,
    title: "Stay On Schedule Without Guessing",
    description:
      "With exact mileage recorded at each service, you know precisely when the next one is due. No guessing, no relying on stickers on the windscreen, no missed intervals.",
  },
  {
    icon: ShieldCheck,
    title: "Keep Records That Hold Up",
    description:
      "A log you've built consistently over years is more credible than memory alone - whether that's for warranty discussions, mechanic conversations, or showing a buyer what's been maintained.",
  },
];

function WhyLoggingHelps() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              Why It Matters
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Why Keeping A Maintenance Log Pays Off
            </h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">
              The value of a maintenance log grows with time. A few entries are
              useful. A few years of entries are genuinely valuable.
            </p>
            <div className="flex flex-col gap-7">
              {outcomes.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={spendingAnalytics}
              alt="CarCare Diary spending analytics showing car maintenance costs over time"
              className="w-full max-w-[340px] md:max-w-[420px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowCarCareHelps() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            The App
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How CarCare Diary Keeps Your Log Organized
          </h2>
          <p className="text-base text-muted max-w-[560px] mx-auto">
            CarCare Diary is built around the maintenance log. Every feature
            supports the core habit of recording and reviewing your car's
            service history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {[
            {
              title: "Quick Entry Logging",
              body: "Add a new log entry in under a minute. Select the service type, enter the date and mileage, add specs and notes. The entry goes straight into your vehicle's timeline.",
            },
            {
              title: "Organized By Category",
              body: "Entries are grouped by service category - Engine, Brakes, Fluids, Electrical, Tyres, and more - so scanning your log for a specific type of work takes seconds.",
            },
            {
              title: "Mileage Tracking Built In",
              body: "Mileage is captured on every entry. Update your odometer in the app to keep your log current and your upcoming service intervals accurate.",
            },
            {
              title: "Specs And Notes Per Entry",
              body: "Every log entry supports detailed specs and free-form notes. Oil grade, part numbers, technician observations - all stored alongside the service record.",
            },
            {
              title: "Your Full History In One Place",
              body: "Every entry you log builds into a complete, scrollable maintenance timeline for your vehicle. No need to dig through paperwork or try to remember dates.",
            },
            {
              title: "Share When You Need To",
              body: "When you want to show a mechanic or a buyer what's been done, generate a shareable link to your vehicle's full log. No app or login required to view it.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-panel bg-surface p-6"
            >
              <h3 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 text-sm text-muted">
          <span>Related:</span>
          <Link
            to="/car-maintenance-tracker"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            Car Maintenance Tracker - reminders and scheduling
          </Link>
          <span className="hidden sm:inline text-panel">·</span>
          <Link
            to="/car-service-history"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            Car Service History - sharing and resale
          </Link>
        </div>
      </div>
    </section>
  );
}

const exampleEntries = [
  {
    type: "Oil Change",
    detail: "0W-30 full synthetic - 5L · Bosch filter #3323",
    note: "Next due at 88,000 km or in 12 months",
    date: "11 Feb 2025",
    mileage: "80,800 km",
  },
  {
    type: "Front Brake Pads",
    detail: "Brembo P50037 - both sides",
    note: "Rear pads at ~60%, revisit at next service",
    date: "28 Oct 2024",
    mileage: "78,300 km",
  },
  {
    type: "Air Filter Replacement",
    detail: "Mann C2594 filter",
    note: "Cabin filter also replaced at same visit",
    date: "14 Jun 2024",
    mileage: "72,600 km",
  },
  {
    type: "Tyre Rotation",
    detail: "Front to rear cross-rotation",
    note: "Tread even across all four. Fronts at ~5mm",
    date: "14 Jun 2024",
    mileage: "72,600 km",
  },
  {
    type: "Coolant Flush",
    detail: "OAT coolant - 50/50 mix - 6L",
    note: "System pressure tested, no leaks found",
    date: "3 Mar 2024",
    mileage: "70,500 km",
  },
  {
    type: "Annual Inspection",
    detail: "Full inspection - advisory issued on wiper blades",
    note: "Wipers replaced same day",
    date: "18 Jan 2024",
    mileage: "68,500 km",
  },
];

function ExampleEntries() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            In Practice
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What A Well-Kept Maintenance Log Looks Like
          </h2>
          <p className="text-base text-muted max-w-[520px] mx-auto">
            These are the kinds of entries that make a log genuinely useful -
            specific enough to reference later, and consistent enough to build a
            clear picture over time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
          {exampleEntries.map((entry) => (
            <div
              key={entry.type + entry.date}
              className="rounded-xl border border-panel bg-surface px-5 py-5"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {entry.type}
                </h3>
                <span className="text-xs text-accent font-semibold shrink-0">
                  {entry.mileage}
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-2">
                {entry.detail}
              </p>
              <p className="text-xs text-muted leading-relaxed italic mb-3">
                "{entry.note}"
              </p>
              <p className="text-xs text-muted/60">{entry.date}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-10 max-w-[480px] mx-auto">
          Each entry above takes under a minute to log in CarCare Diary. Over
          time, entries like these become a complete and reliable record of your
          car's maintenance history.
        </p>
      </div>
    </section>
  );
}

function LogFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Common Questions About Vehicle Maintenance Logs
          </h2>
          <p className="text-base text-muted max-w-[440px] mx-auto">
            Questions about keeping a car service log, what to record, and how
            CarCare Diary helps.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {maintenanceLogFaqs.map((faq, index) => {
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

function LogCTA() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-16 md:px-16 md:py-20 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Get The App
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Start Your Vehicle Maintenance Log Today
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto mb-10">
            CarCare Diary is a free app for iPhone and Android. Log every
            service, track your mileage, and build a complete car maintenance
            diary you can rely on.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted">
            <Link
              to="/car-maintenance-tracker"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              Car maintenance tracker
            </Link>
            <span className="hidden sm:inline text-panel">·</span>
            <Link
              to="/car-service-history"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              Car service history
            </Link>
            <span className="hidden sm:inline text-panel">·</span>
            <Link
              to="/blog/how-to-track-car-maintenance"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              How to track maintenance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
