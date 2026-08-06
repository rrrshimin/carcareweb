import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ChevronDown } from "lucide-react";
import {
  ArticleLayout,
  ArticleHero,
  ProseSection,
  ArticleH2,
  ArticleP,
} from "./ArticleLayout";
import { GuideDownloadCTA } from "./GuideDownloadCTA";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "How To Track Car Maintenance";
const ARTICLE_CATEGORY = "Guides";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL =
  "https://www.carcarediary.com/blog/how-to-track-car-maintenance";
const ARTICLE_LEDE =
  "To track car maintenance: log every service with type, date, and mileage the moment it's done, keep all entries in one place, and review what's coming due before each appointment. Done consistently, those three habits produce a reliable maintenance record over the life of the car.";
const CTA_TITLE = "Track car maintenance with the CarCare Diary app";

const trackingFaqs = [
  {
    question: "What Is The Best Way To Track Car Maintenance?",
    answer:
      "The best system is one you'll actually use consistently. For most people, a dedicated app works better than paper logs or spreadsheets because it's always with you, easy to update, and keeps everything organized automatically. The most important habit is logging service details - type, date, mileage, and specs - at the time of service rather than trying to remember later.",
  },
  {
    question: "Should I Track Mileage With My Service Records?",
    answer:
      "Yes. Mileage is one of the most useful data points in a maintenance record. It lets you calculate when interval-based services are next due, see exactly how much has been driven between services, and build a timeline that makes sense at a glance. Always log the odometer reading alongside the service type and date.",
  },
  {
    question: "Can I Track Car Maintenance Digitally?",
    answer:
      "Yes. Apps like CarCare Diary let you log every service on your phone with full detail - service type, date, mileage, parts, and notes. The record builds automatically as you log entries and is always with you, searchable, and shareable.",
  },
  {
    question: "What Should I Include In A Maintenance Log Entry?",
    answer:
      "At minimum: service type, date, and mileage. Adding the specs - oil grade, filter part number, tyre brand, fluid type - makes the record significantly more useful. A brief note about anything the mechanic flagged, or a reminder for next time, rounds out a solid entry.",
  },
  {
    question: "How Do I Track Maintenance For Multiple Cars?",
    answer:
      "Keep a separate log for each vehicle. Most maintenance apps, including CarCare Diary, let you add multiple vehicles so each car has its own service history and mileage record. This is especially useful in households with more than one car.",
  },
  {
    question: "Is CarCare Diary Free?",
    answer:
      "CarCare Diary is free for one vehicle with full access to the maintenance log, mileage tracking, and shareable service history. A Pro plan is available for tracking multiple vehicles.",
  },
];

const steps = [
  {
    number: "01",
    title: "Keep Your Mileage Current",
    body: "Update your vehicle's odometer reading in your log regularly - not just at service time. A current mileage reading lets you see at a glance how close you are to the next service interval and makes each log entry more accurate.",
  },
  {
    number: "02",
    title: "Log At The Time Of Service",
    body: "Record a service the moment it's done, while the receipt is in hand and the details are fresh. Logging retroactively from memory leads to gaps and inaccuracies - even a quick entry with the basics beats waiting until you have time to write it up properly.",
  },
  {
    number: "03",
    title: "Keep Everything In One Place",
    body: "Choose one place where all service entries live - and use it for every service. Scattered records across paper, email, and apps work the same as no records.",
  },
  {
    number: "04",
    title: "Review Upcoming Service Regularly",
    body: "Every few months, look at your last few entries and check what's likely coming up. Oil interval nearly due? Tyre rotation overdue? A short review every quarter keeps you ahead of the schedule rather than reacting to it.",
  },
  {
    number: "05",
    title: "Keep The Record With The Car",
    body: "Your maintenance history should be accessible at a mechanic, when filling out a service form, or when showing a buyer around the car. A phone-based log is always with you; a physical folder in the glovebox works too, as long as it travels with the vehicle.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How To Track Car Maintenance and Keep Better Service Records",
    description:
      "Learn how to track car maintenance with service logs, mileage, notes, and reminders. Keep your vehicle records organized with CarCare Diary.",
    url: ARTICLE_URL,
    datePublished: "2026-04-16",
    dateModified: "2026-08-06",
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
    name: "How to track car maintenance",
    description:
      "A five-step system for tracking car maintenance: keep mileage current, log at the time of service, centralise records, review upcoming work, and keep the log with the car.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trackingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function HowToTrackCarMaintenanceArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "How To Track Car Maintenance and Keep Better Service Records",
    description:
      "Learn how to track car maintenance with service logs, mileage, notes, and reminders. Keep your vehicle records organized with CarCare Diary.",
    path: "/blog/how-to-track-car-maintenance",
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
      <WhyTrackingMatters />
      <WhatToTrack />
      <ASimpleSystem />
      <CommonMistakes />
      <HowCarCareHelps />
      <ArticleFAQ />
      <GuideDownloadCTA title={CTA_TITLE} variant="footer" />
    </ArticleLayout>
  );
}

function LastUpdated() {
  return (
    <div className="flex items-center gap-2 mb-6 text-xs text-muted">
      <span className="inline-block px-2.5 py-1 rounded-full border border-panel bg-surface font-medium">
        Last updated: August 2026
      </span>
    </div>
  );
}

function WhyTrackingMatters() {
  return (
    <ProseSection>
      <LastUpdated />
      <ArticleH2>Why Tracking Car Maintenance Matters</ArticleH2>
      <ArticleP>
        A proper maintenance record tells you exactly what was done, when, and
        at what mileage. That precision matters when a mechanic asks about the
        last fluid change, when you're working out whether a service is
        overdue, or when a buyer wants to understand how the car has been
        looked after.
      </ArticleP>
      <ArticleP>
        Tracking also makes patterns visible: which parts of your car need
        regular attention, how your driving habits affect service frequency,
        and roughly what ownership is costing per year. None of that is
        accessible from memory alone.
      </ArticleP>
    </ProseSection>
  );
}

const fieldsToTrack = [
  {
    label: "Service type",
    detail:
      "Be specific. 'Oil change' is useful. 'Oil change - 0W-30 full synthetic, Bosch filter' is better. The spec detail pays off when the same work needs doing again.",
  },
  {
    label: "Date",
    detail:
      "Log the exact date, not just the month or year. Exact dates let you calculate intervals accurately and make the timeline readable at a glance.",
  },
  {
    label: "Mileage",
    detail:
      "The odometer reading at the time of service. This is how interval-based maintenance gets scheduled properly - without mileage, you're guessing.",
  },
  {
    label: "Parts and fluids used",
    detail:
      "Oil grade, filter part number, tyre brand and size, fluid spec. These details matter when replacing the same part again or checking compatibility.",
  },
  {
    label: "Notes and observations",
    detail:
      "Anything the mechanic flagged, something you noticed yourself, or a reminder for next time. Free-form notes capture context that a structured field cannot.",
  },
  {
    label: "Cost",
    detail:
      "Optional but useful. Recording what you spent builds a picture of total maintenance cost over time and helps with budgeting future service.",
  },
];

function WhatToTrack() {
  return (
    <ProseSection>
      <ArticleH2>What To Include In Every Service Record</ArticleH2>
      <ArticleP>
        Capture six fields for every service entry: service type, date,
        mileage, parts and fluids used, notes, and (optionally) cost. Each one
        earns its place in the log - here's why.
      </ArticleP>

      <div className="flex flex-col gap-5 mt-6">
        {fieldsToTrack.map((field) => (
          <div
            key={field.label}
            className="rounded-xl border border-panel bg-surface px-5 py-4"
          >
            <p className="text-sm font-semibold text-white mb-1.5">
              {field.label}
            </p>
            <p className="text-sm leading-relaxed text-muted">{field.detail}</p>
          </div>
        ))}
      </div>

      <ArticleP>
        <span className="block mt-6">
          Start with service type, date, and mileage, then add detail as the
          habit becomes natural. A partial record is already more useful than
          no record.
        </span>
      </ArticleP>
    </ProseSection>
  );
}

function ASimpleSystem() {
  return (
    <ProseSection>
      <ArticleH2>A Simple System For Tracking Car Maintenance</ArticleH2>
      <ArticleP>
        Five habits, done consistently, produce a reliable record. No complex
        system required.
      </ArticleP>

      <div className="flex flex-col gap-4 mt-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-xl border border-panel bg-surface px-5 py-5 flex gap-5"
          >
            <span className="text-2xl font-semibold text-accent/40 leading-none shrink-0 pt-0.5">
              {step.number}
            </span>
            <div>
              <h3 className="text-base font-semibold text-white mb-1.5">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

const mistakes = [
  {
    title: "Not Recording Mileage",
    body: "Date-only records tell you when something was done but not how much has been driven since. Without mileage, interval-based calculations - oil changes, tyre rotation, brake inspections - lose their precision.",
  },
  {
    title: "Relying Only On Receipts",
    body: "Dealer and garage receipts are useful, but they're not a maintenance system. They go missing, fade, and don't include work you do yourself or have done informally. They also don't give you a searchable, dated timeline.",
  },
  {
    title: "Skipping The Specs",
    body: "Logging 'oil change' without recording the oil grade or filter used means you have to start from scratch when the same job comes up again. Specs take thirty seconds to write down and save time every future service.",
  },
  {
    title: "Letting The Record Fall Behind",
    body: "A log that's six months out of date is far less useful than one kept current. The longer the gap, the harder it is to reconstruct accurately. Logging at the time of service, or within a day or two, avoids the backfill problem entirely.",
  },
  {
    title: "Starting Over With Each New Car",
    body: "Maintenance history is part of the vehicle's value. When you sell, a well-kept record is a tangible asset. When you buy, starting the log from day one means you'll have a complete history ready when it matters.",
  },
];

function CommonMistakes() {
  return (
    <ProseSection>
      <ArticleH2>Common Mistakes That Undermine A Maintenance Record</ArticleH2>
      <ArticleP>
        Most tracking problems aren't about effort - they're small habits that
        quietly degrade the record over time. These are the ones to avoid.
      </ArticleP>

      <div className="flex flex-col gap-4 mt-6">
        {mistakes.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

function HowCarCareHelps() {
  return (
    <ProseSection>
      <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
        The App
      </p>
      <ArticleH2>How CarCare Diary Supports The Process</ArticleH2>
      <ArticleP>
        CarCare Diary is a free maintenance log app for iPhone and Android,
        built around the habits above. It handles the organisational side so
        the focus stays on the car, not the record-keeping system.
      </ArticleP>

      <div className="flex flex-col gap-4 my-6">
        {[
          {
            title: "Log Every Service",
            body: "Add entries with service type, date, mileage, specs, and notes in under a minute. Entries are organized by category and build into a complete vehicle history over time.",
          },
          {
            title: "Keep Mileage Current",
            body: "Update your odometer reading in the app whenever you drive. Mileage is captured on every log entry, keeping your service intervals accurate.",
          },
          {
            title: "Review Your History",
            body: "Your full maintenance timeline is always visible - scrollable, searchable, and organized by category. Seeing what was done and when takes seconds.",
          },
          {
            title: "Share When Needed",
            body: "Generate a public link to your vehicle's complete service record. Useful for sharing with a mechanic or showing a buyer a documented history.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-panel bg-surface px-5 py-4"
          >
            <p className="text-sm font-semibold text-white mb-1.5">
              {item.title}
            </p>
            <p className="text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted">
        Related:{" "}
        <Link
          to="/blog/car-maintenance-checklist"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          Car maintenance checklist
        </Link>
        {" - "}
        <Link
          to="/vehicle-maintenance-log"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          Vehicle maintenance log
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
          to="/car-maintenance-tracker"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          Car maintenance tracker app
        </Link>
      </p>
    </ProseSection>
  );
}

function ArticleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ProseSection>
      <ArticleH2>Common Questions About Tracking Car Maintenance</ArticleH2>
      <div className="flex flex-col gap-3 mt-6">
        {trackingFaqs.map((faq, index) => {
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
