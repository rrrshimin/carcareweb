import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, AlertCircle, CheckCircle2 } from "lucide-react";
import {
  ArticleLayout,
  ArticleHero,
  ProseSection,
  ArticleH2,
  ArticleP,
} from "./ArticleLayout";
import { GuideDownloadCTA } from "./GuideDownloadCTA";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "What To Include In A Car Service History";
const ARTICLE_CATEGORY = "Guides";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL =
  "https://www.carcarediary.com/blog/what-to-include-in-a-car-service-history";
const ARTICLE_LEDE =
  "Every car service record should include service type, date, mileage, parts replaced, fluids used, notes from the mechanic, who carried out the work, and any follow-up flagged. Below is each field in detail, with examples, plus the ones that most often get left out.";
const CTA_TITLE = "Keep a complete car service history with CarCare Diary";

const serviceHistoryFaqs = [
  {
    question: "What Should Be In A Car Service History?",
    answer:
      "A complete car service history should include the service type, date, mileage at the time of service, any parts or fluids used with their specifications, and notes about findings or follow-up needs. The more detail each entry contains, the more useful the record becomes over time.",
  },
  {
    question: "Do I Need To Record Mileage In Every Service Entry?",
    answer:
      "Yes. Mileage is one of the most important fields in a service record. It lets you calculate when interval-based services are next due and shows exactly how much has been driven between services. A date without mileage gives you a timeline but not a maintenance schedule.",
  },
  {
    question: "Should I Keep Notes About Parts And Fluids Used?",
    answer:
      "Yes, and it's worth being specific. Recording the oil grade, filter part number, or tyre brand takes a moment but saves real time later - when the same work is due again, you have the exact spec rather than starting from scratch or relying on the garage's memory.",
  },
  {
    question: "Can I Keep A Digital Car Service History?",
    answer:
      "Yes. CarCare Diary lets you log every service entry on your phone with full detail - service type, date, mileage, parts, fluids, and notes. The history builds automatically as you log and is always with you, organized by category, and shareable when needed.",
  },
  {
    question: "Can A Service History Help When Selling A Car?",
    answer:
      "Yes. A well-documented service history is one of the most useful things you can show a potential buyer. It demonstrates that the car has been consistently maintained, removes uncertainty about what has and hasn't been done, and makes the conversation more straightforward. CarCare Diary lets you share the full history through a single link.",
  },
  {
    question: "Is CarCare Diary Free?",
    answer:
      "CarCare Diary is free for one vehicle with full access to the service log, mileage tracking, and shareable history. A Pro plan is available for tracking multiple vehicles.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What To Include In a Car Service History",
    description:
      "Learn what to include in a car service history, from mileage and service dates to parts, fluids, and notes. Keep your vehicle records organized with CarCare Diary.",
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
    "@type": "FAQPage",
    mainEntity: serviceHistoryFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function WhatToIncludeInCarServiceHistoryArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "What To Include In a Car Service History",
    description:
      "Learn what to include in a car service history, from mileage and service dates to parts, fluids, and notes. Keep your vehicle records organized with CarCare Diary.",
    path: "/blog/what-to-include-in-a-car-service-history",
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
      <WhyItMatters />
      <EssentialFields />
      <ExampleEntries />
      <WhatPeopleForget />
      <HowCarCareHelps />
      <ArticleFAQ />
      <GuideDownloadCTA title={CTA_TITLE} variant="footer" />
    </ArticleLayout>
  );
}

function WhyItMatters() {
  return (
    <ProseSection>
      <ArticleH2>Why A Complete Service History Matters</ArticleH2>
      <ArticleP>
        A complete service history is a precise record of what was done to the
        car, when, and at what mileage - the exact information a mechanic, a
        buyer, or your future self will ask for. The difference between a
        sparse and complete history shows up the moment it's needed: a service
        that might be overdue, an oil grade spec a mechanic is asking about,
        or a buyer who wants to see how the car has been looked after.
      </ArticleP>
      <ArticleP>
        Most people log something. Fewer log enough. The rest of this guide
        covers exactly what belongs in every entry and what tends to get left
        out.
      </ArticleP>
    </ProseSection>
  );
}

const essentialFields = [
  {
    label: "Service Type",
    detail:
      "What was done - and be specific. 'Oil change' is a start. 'Oil change - 0W-30 full synthetic, Bosch filter' is a useful record. The more specific the entry, the less you have to reconstruct later.",
  },
  {
    label: "Date",
    detail:
      "The exact date the service was carried out. Approximate months or years degrade quickly in usefulness - exact dates let you calculate intervals precisely and build a readable timeline.",
  },
  {
    label: "Mileage / Odometer Reading",
    detail:
      "The odometer reading at the time of service. This is essential for interval-based scheduling. Without mileage, you have a history but not a maintenance schedule.",
  },
  {
    label: "Parts Replaced",
    detail:
      "The part name and, where relevant, the part number or brand. Filter references, brake pad model, battery spec, tyre brand and size. This detail removes guesswork when the same job needs doing again.",
  },
  {
    label: "Fluids Used",
    detail:
      "Oil grade, coolant type, brake fluid spec, transmission fluid type. Fluid compatibility matters - recording exactly what went in protects against an incorrect top-up later.",
  },
  {
    label: "Notes And Observations",
    detail:
      "Anything the mechanic flagged, anything you noticed yourself, or a reminder for next time. Brake pads at 40%, slight play in a CV joint, tyres due for rotation in 5,000 km - notes preserve context that structured fields cannot.",
  },
  {
    label: "Who Carried Out The Work",
    detail:
      "The garage name, or 'DIY' if you did it yourself. This is useful for warranty reference, for tracking patterns, and for showing provenance when selling.",
  },
  {
    label: "Any Follow-Up Flagged",
    detail:
      "If the mechanic recommended something for next time - a worn belt, an advisory on the brakes, a fluid that needs changing soon - record it in the entry so it doesn't get forgotten.",
  },
];

function EssentialFields() {
  return (
    <ProseSection>
      <ArticleH2>What To Include In Every Service Record</ArticleH2>
      <ArticleP>
        Capture these eight fields for a complete entry. Not every one applies
        to every service - a tyre pressure check doesn't warrant a parts list -
        but for any significant service they're the baseline.
      </ArticleP>

      <div className="flex flex-col gap-4 mt-6">
        {essentialFields.map((field) => (
          <div
            key={field.label}
            className="rounded-xl border border-panel bg-surface px-5 py-4 flex items-start gap-4"
          >
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                {field.label}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {field.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

const exampleEntries = [
  {
    type: "Oil Change",
    fields: [
      "Service: Engine oil and filter change",
      "Date: 14 Mar 2025",
      "Mileage: 62,400 km",
      "Oil: 0W-30 full synthetic - 5L",
      "Filter: Bosch 3323",
      "Note: Next due at 70,000 km or 12 months",
    ],
  },
  {
    type: "Front Brake Pads",
    fields: [
      "Service: Front brake pad replacement",
      "Date: 8 Nov 2024",
      "Mileage: 59,800 km",
      "Parts: Brembo P50037 - both sides",
      "Note: Rear pads at approx 40% - monitor at next service",
    ],
  },
  {
    type: "Air Filter",
    fields: [
      "Service: Air filter replacement",
      "Date: 22 Jul 2024",
      "Mileage: 57,100 km",
      "Filter: Mann C2594",
      "Note: Cabin filter also replaced at same visit",
    ],
  },
  {
    type: "Annual Inspection",
    fields: [
      "Service: Annual roadworthiness inspection",
      "Date: 15 Jan 2025",
      "Mileage: 61,500 km",
      "Result: Pass",
      "Advisory: Wiper blades worn - replaced same day",
      "Note: Tyres even, no advisories on suspension",
    ],
  },
  {
    type: "Coolant Flush",
    fields: [
      "Service: Cooling system flush and refill",
      "Date: 3 Apr 2024",
      "Mileage: 55,200 km",
      "Fluid: OAT coolant - 50/50 mix - 6L",
      "Note: Pressure tested, no leaks found",
    ],
  },
  {
    type: "Tyre Rotation",
    fields: [
      "Service: Tyre rotation - front to rear cross pattern",
      "Date: 22 Jul 2024",
      "Mileage: 57,100 km",
      "Note: Tread even. Fronts at 5mm, rears at 6mm",
      "Note: Pressures set to 32 psi all round",
    ],
  },
];

function ExampleEntries() {
  return (
    <ProseSection>
      <ArticleH2>What Good Service Entries Look Like</ArticleH2>
      <ArticleP>
        These six examples show what a well-recorded entry looks like for the
        most common service types - realistic, not exhaustive.
      </ArticleP>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {exampleEntries.map((entry) => (
          <div
            key={entry.type}
            className="rounded-xl border border-panel bg-surface px-5 py-5"
          >
            <p className="text-sm font-semibold text-white mb-3">
              {entry.type}
            </p>
            <ul className="flex flex-col gap-1.5">
              {entry.fields.map((f) => (
                <li key={f} className="text-xs leading-relaxed text-muted">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

const forgottenDetails = [
  {
    title: "The Exact Mileage",
    body: "Many people log the service but not the odometer reading. Without mileage, you lose the ability to calculate when the next interval is due. Even an approximate reading is better than none.",
  },
  {
    title: "Oil And Fluid Specifications",
    body: "Writing 'oil change' without the grade or brand means the next mechanic - or your future self - has to look it up from scratch. Fluid compatibility matters, and the spec takes ten seconds to add to the entry.",
  },
  {
    title: "The Part Brand Or Reference",
    body: "A brake pad replacement logged without a part number or brand leaves a gap. When the same job comes up again, knowing what was used last time is useful context - especially for parts with compatibility considerations.",
  },
  {
    title: "Observations And Advisories",
    body: "Mechanics frequently mention things during a service - a worn belt, a slightly low tyre, an advisory for next time. These verbal observations vanish unless you write them down. An entry without notes only tells half the story.",
  },
  {
    title: "Who Did The Work",
    body: "Whether it was a main dealer, an independent garage, or a DIY job, recording who carried out the work is useful for traceability - particularly if a follow-up is needed or a warranty question arises.",
  },
];

function WhatPeopleForget() {
  return (
    <ProseSection>
      <ArticleH2>Details That Often Get Left Out</ArticleH2>
      <ArticleP>
        Five things disappear from most service records because they feel minor
        at the time. They're the ones worth the extra ten seconds to capture.
      </ArticleP>

      <div className="flex flex-col gap-4 mt-6">
        {forgottenDetails.map((item) => (
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
      <ArticleH2>How CarCare Diary Keeps Service History Organized</ArticleH2>
      <ArticleP>
        CarCare Diary supports all the fields covered above - service type,
        date, mileage, parts, fluids, notes - in one log per vehicle. Entries
        are grouped by category and build into a complete, scrollable service
        history.
      </ArticleP>
      <ArticleP>
        When it's time to share the history with a mechanic or a buyer, you
        can generate a public link to the full record. Anyone with the link
        can view it from any device without an account.
      </ArticleP>
      <p className="text-sm text-muted">
        Related guides:{" "}
        <Link
          to="/blog/how-to-track-car-maintenance"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          How to track car maintenance
        </Link>
        {" - "}
        <Link
          to="/blog/how-to-keep-car-service-records-organized"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          How to keep records organized
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
          to="/vehicle-maintenance-log"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          Vehicle maintenance log
        </Link>
      </p>
    </ProseSection>
  );
}

function ArticleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ProseSection>
      <ArticleH2>Common Questions About Car Service Records</ArticleH2>
      <div className="flex flex-col gap-3 mt-6">
        {serviceHistoryFaqs.map((faq, index) => {
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
