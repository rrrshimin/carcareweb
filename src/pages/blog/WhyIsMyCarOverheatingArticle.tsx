import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, CheckCircle2, AlertTriangle } from "lucide-react";
import {
  ArticleLayout,
  ArticleHero,
  ProseSection,
  ArticleH2,
  ArticleP,
} from "./ArticleLayout";
import { GuideDownloadCTA } from "./GuideDownloadCTA";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "Why Is My Car Overheating?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-is-my-car-overheating";
const ARTICLE_LEDE =
  "An overheating engine requires immediate action. If the temperature warning light comes on or the gauge enters the red zone, stop driving as soon as it is safe to do so — do not try to drive to a garage. Continuing to drive an overheating engine risks head gasket failure or worse. Common causes include a coolant leak, low coolant, a failing water pump or thermostat, a blocked radiator, or a faulty cooling fan.";
const CTA_TITLE = "Track coolant changes, overheating incidents, repairs, and mileage in CarCare Diary";

const articleFaqs = [
  {
    question: "What Should I Do If My Car Starts Overheating While Driving?",
    answer:
      "Turn off the AC immediately (it adds engine load). If the temperature continues to rise, turn on the heater — it draws heat from the engine and can reduce temperature slightly. If the warning light stays on or steam appears, pull over as soon as it is safe to do so, turn off the engine, and do not open the bonnet or coolant cap immediately. Allow the engine to cool for at least 30 minutes before investigating. Call a breakdown service if you are unsure.",
  },
  {
    question: "Can I Drive With an Overheating Engine?",
    answer:
      "No. Driving with an overheating engine risks severe and expensive engine damage. If a temperature warning light illuminates or you see steam, stop as soon as it is safely possible. Even brief periods of severe overheating can cause head gasket failure, warped cylinder heads, seized pistons, or cracked engine components. Overheating repairs are far more costly than the cooling system service that may have prevented it.",
  },
  {
    question: "Why Should I Not Open the Coolant Cap When the Engine Is Hot?",
    answer:
      "The cooling system is pressurised when the engine is at operating temperature. Opening the coolant cap on a hot engine releases pressurised coolant, which can cause very hot coolant and steam to spray out forcefully — causing serious burns. Always wait until the engine has fully cooled before opening the coolant reservoir cap.",
  },
  {
    question: "Can Low Oil Cause Overheating?",
    answer:
      "Yes, though the cooling system is the primary control for engine temperature. Oil also performs a cooling function — it transfers heat away from moving components. Very low oil level or severely degraded oil can contribute to higher engine temperatures. Always check oil level alongside coolant when investigating an overheating issue.",
  },
  {
    question: "How Does a Thermostat Cause Overheating?",
    answer:
      "The thermostat regulates coolant flow between the engine and the radiator. When a thermostat fails in the closed position, it prevents coolant from reaching the radiator to be cooled — the engine temperature rises quickly. A stuck-open thermostat causes the engine to run cooler than normal rather than overheating. A failed-closed thermostat is a common and relatively inexpensive cause of overheating.",
  },
  {
    question: "How Do I Track Cooling System Maintenance?",
    answer:
      "Log coolant changes with date and mileage, and note any overheating events or cooling system repairs — including what was found and fixed. A clear service history makes it easier to identify patterns and explain the vehicle's history to a mechanic. CarCare Diary lets you record all of this with notes and dates.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Is My Car Overheating? Common Causes and What to Do",
    description:
      "Learn common reasons a car overheats, when to stop driving, what to check safely, and how to track cooling system maintenance.",
    url: ARTICLE_URL,
    datePublished: "2026-04-30",
    dateModified: "2026-08-06",
    publisher: { "@type": "Organization", name: "CarCare Diary", url: "https://www.carcarediary.com" },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-speakable]"] },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: articleFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function WhyIsMyCarOverheatingArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Is My Car Overheating? Common Causes and What to Do",
    description:
      "Learn common reasons a car overheats, when to stop driving, what to check safely, and how to track cooling system maintenance.",
    path: "/blog/why-is-my-car-overheating",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why is my car overheating?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          Common causes include a{" "}
          <strong className="text-white">coolant leak, low coolant, failed
          thermostat, failing water pump, blocked radiator, or faulty cooling
          fan</strong>. If the temperature warning light comes on or you see
          steam, pull over safely and do not open the coolant cap on a hot engine.
        </ShortAnswerBox>

        <ArticleH2>When to stop driving immediately</ArticleH2>
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-400 mb-2">Stop driving if you see any of these</p>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Temperature gauge in the red or a temperature warning light",
                  "Steam or smoke coming from under the bonnet",
                  "A strong sweet smell (coolant burning off)",
                  "Any abnormal instrument warnings alongside rising temperature",
                ].map((item) => (
                  <li key={item} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-red-400 shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted/70 mt-3 italic">Do not open the coolant cap when the engine is hot. Allow the engine to cool fully before investigating.</p>
            </div>
          </div>
        </div>

        <ArticleH2>Common causes of engine overheating</ArticleH2>
        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Low coolant level or coolant leak", note: "Coolant carries heat from the engine to the radiator. Low coolant from a leak — whether internal (head gasket) or external (hose, radiator, water pump seal) — reduces the system's ability to control temperature. Check the coolant reservoir level when the engine is cold." },
            { label: "Failed thermostat", note: "The thermostat controls coolant flow between the engine and radiator. A thermostat stuck in the closed position prevents coolant from reaching the radiator, causing rapid temperature rise. A relatively common and affordable repair." },
            { label: "Failing water pump", note: "The water pump circulates coolant through the engine and cooling system. A worn impeller, bearing failure, or seal leak can reduce coolant flow significantly, causing overheating. Often accompanied by a coolant leak or noise from the pump area." },
            { label: "Blocked or damaged radiator", note: "The radiator dissipates heat from the coolant. Blockage from debris (insects, leaves), scale build-up inside, or physical damage can reduce cooling capacity. Bent fins also reduce airflow." },
            { label: "Cooling fan fault", note: "Electric cooling fans or fan clutch failures (on belt-driven fans) reduce airflow through the radiator — particularly at low speeds or when stationary. The issue may be more noticeable in traffic than at highway speeds." },
            { label: "Blocked coolant hoses", note: "Hoses that have collapsed internally, kinked, or deteriorated can restrict coolant flow. Hoses may look normal externally while being partially blocked inside." },
            { label: "Blown head gasket", note: "A head gasket failure can allow combustion gases to enter the cooling system, causing rapid pressure build-up and overheating. Symptoms can include white smoke from the exhaust, coolant loss without visible leaks, or oil contamination. Requires prompt professional diagnosis." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What to check safely after the engine cools</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Wait for the engine to cool fully — at least 30 minutes after stopping",
            "Check the coolant reservoir level (do not open the cap if still warm)",
            "Look for visible coolant leaks under the car or around the engine bay",
            "Check engine oil level — low oil can contribute to higher temperatures",
            "Look for steam residue or wet patches near hoses, radiator, and pump area",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          If you cannot identify an obvious cause — or if you find a significant
          leak, oil contamination in coolant, or white exhaust smoke — have
          the vehicle inspected by a mechanic before driving further.
        </ArticleP>

        <ArticleH2>How maintenance history can help</ArticleH2>
        <ArticleP>
          A complete maintenance history helps a mechanic understand the
          vehicle's condition and narrow down the cause of overheating:
        </ArticleP>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "When coolant was last changed — old coolant has lower protection and can carry deposits",
            "Whether cooling system components have been previously replaced",
            "Any prior overheating events and what was found",
            "Oil change history — can indicate whether engine has been maintained",
            "Any recent repairs near the cooling system area",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track cooling system service and incidents</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log coolant changes, overheating incidents,
          and cooling system repairs with date, mileage, and notes — so you
          and any mechanic can see the complete history.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-change-coolant", label: "when to change coolant" },
            { to: "/blog/when-to-change-engine-oil", label: "when to change engine oil" },
            { to: "/blog/car-maintenance-schedule-by-mileage", label: "maintenance schedule by mileage" },
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
          ].map((link, i) => (
            <span key={link.to}>
              {i > 0 && " · "}
              <Link to={link.to} className="text-accent font-semibold hover:text-white transition-colors">{link.label}</Link>
            </span>
          ))}
        </p>

        <ArticleH2>Frequently asked questions</ArticleH2>
        <ArticleFAQ faqs={articleFaqs} />
      </ProseSection>
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

function DisclaimerBox() {
  return (
    <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 px-5 py-4 mb-6">
      <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">Important</p>
      <p className="text-sm leading-relaxed text-muted">
        This guide explains common causes, not a diagnosis. If the issue
        affects engine temperature, braking, steering, or drivability, stop
        driving when safe and have the vehicle inspected by a qualified mechanic.
      </p>
    </div>
  );
}

function ShortAnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-accent/30 bg-brand/5 px-5 py-5 mb-8">
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Short answer</p>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}

function ArticleFAQ({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3 mt-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`rounded-xl border overflow-hidden bg-surface transition-colors ${isOpen ? "border-accent/40" : "border-panel"}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
            >
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
  );
}
