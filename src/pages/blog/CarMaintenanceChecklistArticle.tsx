import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronDown } from "lucide-react";
import {
  ArticleLayout,
  ArticleHero,
  ProseSection,
  ArticleH2,
  ArticleP,
} from "./ArticleLayout";
import { GuideDownloadCTA } from "./GuideDownloadCTA";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "Car Maintenance Checklist";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "6 min read";
const ARTICLE_URL =
  "https://www.carcarediary.com/blog/car-maintenance-checklist";
const ARTICLE_LEDE =
  "A car maintenance checklist covers engine oil, tires, brakes, fluids, battery, filters, lights, and wipers - each on its own interval. The full checklist is below, grouped by category with how often to check each item and what to log after every service.";
const CTA_TITLE = "Stay on top of car maintenance with CarCare Diary";

const checklistFaqs = [
  {
    question: "What Should Be On A Car Maintenance Checklist?",
    answer:
      "A car maintenance checklist should cover the items that wear or degrade over time: engine oil and filter, tires (pressure and tread), brakes, coolant and other fluids, battery, air and cabin filters, lights, and wipers. The exact intervals depend on your vehicle and how you drive, but your owner's manual is the primary reference.",
  },
  {
    question: "How Often Should I Check Car Maintenance Items?",
    answer:
      "Some items - like tire pressure and wiper fluid - are worth a monthly glance. Engine oil, tire rotation, and brake condition typically follow a 3-6 month or mileage-based cycle. Less frequent items like spark plugs, coolant flushes, and timing belt replacement are usually on 2-4 year cycles. Your owner's manual gives the exact intervals for your car.",
  },
  {
    question: "Should I Keep Records Of Car Maintenance?",
    answer:
      "Yes. A maintenance record gives you a clear history of what was done and when, makes it easier to stay on schedule, and is useful when selling the vehicle. Even a basic log of service type, date, and mileage is significantly more useful than memory alone.",
  },
  {
    question: "Can I Track A Maintenance Checklist Digitally?",
    answer:
      "Yes. Apps like CarCare Diary let you log every service entry with date, mileage, specs, and notes. Over time your log becomes a complete, searchable maintenance history that you can reference or share when needed.",
  },
  {
    question: "Does Keeping A Maintenance Checklist Help Resale?",
    answer:
      "Yes. Being able to show a prospective buyer a consistent, documented maintenance history gives them confidence that the car has been properly looked after. It reduces uncertainty and makes the conversation more straightforward.",
  },
  {
    question: "Is CarCare Diary Free?",
    answer:
      "CarCare Diary is free for one vehicle with full access to the maintenance log, mileage tracking, and shareable service history. A Pro plan is available for multiple vehicles.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Car Maintenance Checklist for Keeping Your Vehicle in Good Shape",
    description:
      "A practical checklist covering oil, brakes, tires, filters, fluids, and inspections - with guidance on how often each item needs attention.",
    url: ARTICLE_URL,
    datePublished: "2026-04-16",
    dateModified: "2026-04-30",
    publisher: {
      "@type": "Organization",
      name: "CarCare Diary",
      url: "https://www.carcarediary.com",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Run a full car maintenance checklist",
    description:
      "Work through every area of your car on a regular schedule so nothing gets missed - from oil and tires to fluids, battery, filters, and wipers.",
    step: [
      {
        "@type": "HowToStep",
        name: "Check engine oil and filter",
        text: "Check oil level and condition monthly and change engine oil and filter every 8,000-16,000 km or 3-6 months, whichever comes first. Watch for oil leaks under the car.",
      },
      {
        "@type": "HowToStep",
        name: "Inspect tires",
        text: "Check tire pressure and tread depth monthly, rotate tires every 8,000-12,000 km, and inspect for sidewall damage, bulges, and uneven wear.",
      },
      {
        "@type": "HowToStep",
        name: "Review brakes",
        text: "Do a visual brake check every 6 months and a full inspection annually. Replace pads when below 3mm, check rotors for scoring, and flush brake fluid every 2 years.",
      },
      {
        "@type": "HowToStep",
        name: "Top up and change fluids",
        text: "Check coolant, transmission, power steering, and washer fluid levels monthly. Flush coolant every 2-4 years and change transmission fluid per your owner's manual.",
      },
      {
        "@type": "HowToStep",
        name: "Test battery and electrical",
        text: "Clean battery terminals, test battery health annually, and confirm all headlights, taillights, and indicators work.",
      },
      {
        "@type": "HowToStep",
        name: "Replace filters",
        text: "Replace the engine air filter every 24,000-48,000 km and the cabin air filter every 19,000-24,000 km, or when they are visibly dirty.",
      },
      {
        "@type": "HowToStep",
        name: "Check wipers and visibility",
        text: "Inspect wiper blades every 6 months and replace them when they streak. Check the windscreen for chips or cracks.",
      },
      {
        "@type": "HowToStep",
        name: "Log every service",
        text: "After each service, record the service type, date, mileage, parts used, and notes. A complete log makes the next service faster and more accurate.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: checklistFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function CarMaintenanceChecklistArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Car Maintenance Checklist for Keeping Your Vehicle in Good Shape",
    description:
      "Use this car maintenance checklist to stay on top of oil changes, brakes, tires, fluids, and service records. Keep your vehicle organized with CarCare Diary.",
    path: "/blog/car-maintenance-checklist",
    ogType: "article",
    jsonLd,
  });

  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title={ARTICLE_TITLE}
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <TheChecklist />
      <HowOftenToReview />
      <WhatToLog />
      <HowCarCareHelps />
      <ArticleFAQ />
      <GuideDownloadCTA title={CTA_TITLE} variant="footer" />
    </ArticleLayout>
  );
}

type ChecklistCategory = {
  title: string;
  interval: string;
  items: string[];
};

const checklistCategories: ChecklistCategory[] = [
  {
    title: "Engine Oil & Filter",
    interval: "Every 8,000-16,000 km / 3-6 months",
    items: [
      "Check oil level and condition (monthly)",
      "Change engine oil and filter on schedule",
      "Check for oil leaks under the car",
      "Check oil cap and dipstick seal condition",
    ],
  },
  {
    title: "Tires",
    interval: "Monthly + every 8,000-12,000 km for rotation",
    items: [
      "Check tyre pressure (including spare)",
      "Inspect tread depth - minimum 1.6mm in most countries",
      "Rotate tyres to even out wear",
      "Check for sidewall damage, bulges, or uneven wear",
      "Inspect wheel balance if vibration occurs",
    ],
  },
  {
    title: "Brakes",
    interval: "Visual check every 6 months / full inspection annually",
    items: [
      "Check brake pad thickness (less than 3mm = replace soon)",
      "Inspect brake rotors for scoring or wear",
      "Check brake fluid level and condition",
      "Listen for squealing, grinding, or pulsing when braking",
      "Flush brake fluid every 2 years",
    ],
  },
  {
    title: "Fluids",
    interval: "Level checks monthly / changes per schedule",
    items: [
      "Coolant - level and condition (flush every 2-4 years)",
      "Transmission fluid - check level and color",
      "Power steering fluid - check level",
      "Windscreen washer fluid - top up as needed",
      "Differential and transfer case fluid (4WD/AWD)",
    ],
  },
  {
    title: "Battery & Electrical",
    interval: "Battery health test annually",
    items: [
      "Check battery terminals for corrosion",
      "Test battery health (most auto shops do this for free)",
      "Check that all lights work - headlights, taillights, indicators",
      "Inspect fuses if any electrical item stops working",
    ],
  },
  {
    title: "Filters",
    interval: "Air filter: 24,000-48,000 km / Cabin filter: 19,000-24,000 km",
    items: [
      "Replace engine air filter when clogged or discolored",
      "Replace cabin air filter on schedule",
      "Check fuel filter (where serviceable)",
    ],
  },
  {
    title: "Wipers & Visibility",
    interval: "Inspect every 6 months / replace annually or when streaking",
    items: [
      "Check wiper blade condition and replacement if streaking",
      "Clean wiper blades with a damp cloth regularly",
      "Check windscreen for chips or cracks",
      "Ensure rear wiper (if fitted) is working",
    ],
  },
  {
    title: "Longer-Interval Items",
    interval: "Every 48,000-160,000 km depending on vehicle",
    items: [
      "Spark plug replacement (refer to owner's manual)",
      "Timing belt inspection and replacement (critical - check manual)",
      "Coolant system flush",
      "Transmission fluid change",
      "Serpentine belt inspection",
      "Suspension and steering check",
    ],
  },
];

function TheChecklist() {
  return (
    <section className="py-12 md:py-16 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Car Maintenance Checklist By Category
        </h2>
        <p className="text-base leading-relaxed text-muted mb-10">
          Here is the full checklist, organised by system. Every car is
          different, so treat these intervals as a starting point and your
          owner's manual as the final word for your specific vehicle.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {checklistCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-panel bg-surface p-6"
            >
              <div className="mb-4">
                <h3 className="text-base font-semibold text-white mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs font-semibold text-accent">
                  {cat.interval}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm leading-snug text-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted mt-8">
          <strong className="text-white">Important:</strong> Intervals above are
          general guidance. Always check your vehicle's owner's manual for the
          exact service schedule recommended by the manufacturer - particularly
          for items like timing belt replacement, which varies significantly
          between models.
        </p>
      </div>
    </section>
  );
}

const reviewSchedule = [
  {
    timing: "Every Month",
    items: ["Tyre pressure", "Oil level visual check", "Washer fluid", "Lights"],
    note: "Quick visual checks that take under 5 minutes",
  },
  {
    timing: "Every 3-6 Months",
    items: [
      "Oil and filter change",
      "Tyre rotation",
      "Brake fluid level",
      "Wiper blade condition",
    ],
    note: "Typically aligned with oil service intervals",
  },
  {
    timing: "Annually",
    items: [
      "Full brake inspection",
      "Battery health test",
      "Air and cabin filters",
      "Coolant level and condition",
    ],
    note: "Good to do before winter or before a long road trip",
  },
  {
    timing: "Every 2-4 Years",
    items: [
      "Coolant flush",
      "Brake fluid flush",
      "Spark plugs (standard)",
      "Serpentine belt check",
    ],
    note: "Higher-interval items that are easy to forget without a log",
  },
];

function HowOftenToReview() {
  return (
    <ProseSection>
      <ArticleH2>How Often To Review Your Checklist</ArticleH2>
      <ArticleP>
        Group items by interval so the habit stays manageable: monthly visual
        checks, a 3-6 month service cycle, annual deeper inspections, and a
        2-4 year list for the big-ticket items. Tying monthly checks to a
        routine you already have - like filling up with fuel - makes them
        easier to remember.
      </ArticleP>

      <div className="flex flex-col gap-4 mt-6 mb-4">
        {reviewSchedule.map((row) => (
          <div
            key={row.timing}
            className="rounded-xl border border-panel bg-surface p-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
              <div className="shrink-0 mb-3 sm:mb-0 sm:w-[160px]">
                <p className="text-sm font-semibold text-white">{row.timing}</p>
                <p className="text-xs text-muted/70 mt-0.5">{row.note}</p>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                {row.items.map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-sm text-muted">
                    <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <ArticleP>
        Anchor annual and pre-trip reviews to natural calendar points: before
        winter, before a long drive, or before your annual inspection. A
        seasonal trigger is easier to remember than an arbitrary mileage
        number.
      </ArticleP>
    </ProseSection>
  );
}

function WhatToLog() {
  return (
    <ProseSection>
      <ArticleH2>What To Log After Each Service</ArticleH2>
      <ArticleP>
        Log five fields for every service: service type, date, mileage, the
        specs and parts used, and any notes. That's it - entries take under a
        minute and compound into a complete history over the life of the car.
      </ArticleP>

      <ul className="flex flex-col gap-3 mb-5">
        {[
          { label: "Service type", detail: "What was done - oil change, tyre rotation, brake pad replacement, etc." },
          { label: "Date", detail: "When the service was completed" },
          { label: "Mileage", detail: "Odometer reading at the time of service" },
          { label: "Specs and parts", detail: "Oil grade, filter part number, tyre brand, fluid type, and so on" },
          { label: "Notes", detail: "Anything the mechanic flagged, observations, or reminders for next time" },
        ].map(({ label, detail }) => (
          <li key={label} className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
            <span className="text-base text-muted leading-relaxed">
              <strong className="text-white">{label}</strong> - {detail}
            </span>
          </li>
        ))}
      </ul>

      <ArticleP>
        A few years of consistent entries give you an accurate, dated timeline
        of everything done to the car - exactly what a buyer, mechanic, or
        insurer wants to see.
      </ArticleP>
      <ArticleP>
        For more on structuring a good record, see the{" "}
        <Link
          to="/vehicle-maintenance-log"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          vehicle maintenance log guide
        </Link>{" "}
        and the{" "}
        <Link
          to="/car-service-history"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          car service history guide
        </Link>
        .
      </ArticleP>
    </ProseSection>
  );
}

function HowCarCareHelps() {
  return (
    <ProseSection>
      <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
        The App
      </p>
      <ArticleH2>How CarCare Diary Helps You Stay On Top Of It</ArticleH2>
      <ArticleP>
        CarCare Diary turns this checklist into a habit. Each log entry
        captures date, mileage, service type, specs, and notes, and your car's
        full history builds automatically - organised by category, searchable,
        and shareable when you need it.
      </ArticleP>
      <p className="text-sm text-muted">
        See also:{" "}
        <Link
          to="/car-maintenance-tracker"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          Car maintenance tracker
        </Link>
        {" - "}
        <Link
          to="/car-service-history"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          Car service history
        </Link>
        {" - "}
        <Link
          to="/blog/how-to-track-car-maintenance"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          How to track car maintenance
        </Link>
      </p>
    </ProseSection>
  );
}

function ArticleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ProseSection>
      <ArticleH2>Common Questions About Car Maintenance</ArticleH2>
      <div className="flex flex-col gap-3 mt-6">
        {checklistFaqs.map((faq, index) => {
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
    </ProseSection>
  );
}
