import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import {
  ArticleLayout,
  ArticleHero,
  ProseSection,
  ArticleH2,
  ArticleP,
} from "./ArticleLayout";
import { GuideDownloadCTA } from "./GuideDownloadCTA";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "Why Won't My Car Start?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-wont-my-car-start";
const ARTICLE_LEDE =
  "A car that won't start can have many different causes. The most useful clue is what happens when you try to start it — no sounds at all, a single click or rapid clicking, the engine cranking but not firing, or starting then immediately stalling each point to different areas. Starting with the symptom helps narrow down where to look first.";
const CTA_TITLE = "Track battery replacements, starting issues, repairs, mileage, and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "Is a Clicking Sound When Starting Always the Battery?",
    answer:
      "A rapid clicking when you turn the key is a very common sign of a discharged or weak battery — the starter motor is not receiving enough current to engage. A single loud click can indicate a starter motor fault or a seized engine. However, a clicking sound with a battery that tests as fully charged may indicate a bad battery connection, a failing starter, or a bad ground connection rather than the battery itself.",
  },
  {
    question: "Can a Bad Alternator Prevent a Car From Starting?",
    answer:
      "Indirectly, yes. The alternator charges the battery while the engine runs. A failing alternator may not recharge the battery adequately, causing the battery to drain over time. Eventually, the battery becomes too depleted to start the car. If the battery repeatedly discharges after being jump started or charged, the alternator should be tested.",
  },
  {
    question: "Can Bad Spark Plugs Prevent the Engine From Starting?",
    answer:
      "Yes. If spark plugs are worn or fouled, they may not produce a reliable spark — the engine cranks but does not fire. This is more likely to cause difficulty starting (especially cold starts) or a very rough idle after starting than a complete no-start, but severely degraded plugs can prevent starting entirely.",
  },
  {
    question: "What Does It Mean if the Car Starts Then Immediately Stalls?",
    answer:
      "A car that starts and immediately stalls can indicate a throttle body issue, idle air control valve fault, fuel pressure problem, vacuum leak affecting idle, or an immobilizer or transponder issue that causes the engine management to cut fuel. If the car runs briefly and stalls repeatedly, it is worth checking for fault codes with an OBD scanner.",
  },
  {
    question: "Can the Immobilizer or Key Prevent Starting?",
    answer:
      "Yes. Most modern vehicles have an immobilizer system that reads a transponder chip in the key. If the key chip fails, the battery in a key fob is flat, or the transponder reader has a fault, the immobilizer may prevent the engine from starting. An indication is that the engine may crank normally but not fire, and an immobilizer warning light may appear on the dashboard.",
  },
  {
    question: "How Do I Track Starting-Problem Repairs?",
    answer:
      "Log starting problems with date, mileage, a description of symptoms, and what was diagnosed and repaired. Also log battery replacements with date — knowing the battery's age is valuable context for future starting issues. CarCare Diary lets you record all of this with notes for each vehicle.",
  },
];

const symptoms = [
  {
    heading: "No lights, no sound at all",
    causes: [
      { cause: "Completely flat battery", detail: "No power to any systems. Battery may have self-discharged or been drained by a faulty component. Try jump starting — if the car starts, have the battery and charging system tested." },
      { cause: "Blown main fuse or fusible link", detail: "A blown main fuse can cut power to the entire vehicle. Less common but can occur after an electrical fault." },
      { cause: "Disconnected battery or bad terminal connection", detail: "A loose, corroded, or disconnected battery cable can prevent power from reaching any systems. Check battery terminal connections first." },
    ],
  },
  {
    heading: "Rapid clicking, no start",
    causes: [
      { cause: "Discharged or weak battery", detail: "The most common cause of rapid clicking. The starter motor receives some power but not enough to engage. Rapid clicking is the motor's solenoid chattering. Jump starting or battery charging is the first step." },
      { cause: "Corroded battery terminals", detail: "Heavy corrosion on battery terminals can increase electrical resistance enough to prevent the starter from receiving adequate current, even if the battery has charge. Clean the terminals and try again." },
    ],
  },
  {
    heading: "Single loud click, no crank",
    causes: [
      { cause: "Starter motor fault", detail: "A single loud click when the ignition is engaged suggests the starter solenoid is activating but the motor itself is not turning. The starter may be faulty or seized." },
      { cause: "Seized engine", detail: "Rare, but if the engine has seized (typically from severe oil starvation or overheating damage), it will not turn. The click is the starter trying to engage against a locked engine." },
    ],
  },
  {
    heading: "Engine cranks but does not start",
    causes: [
      { cause: "Fuel delivery issue", detail: "No fuel reaching the engine — could be an empty tank, failed fuel pump, or a severely clogged fuel filter (where applicable). Listen for a brief fuel pump hum when the ignition is first turned on (before cranking)." },
      { cause: "No spark — worn spark plugs or failed ignition coil", detail: "If the fuel system is functioning but the engine will not fire, ignition is the next area to check. Fault codes can help identify which cylinder or component is involved." },
      { cause: "Security / immobilizer issue", detail: "The immobilizer prevents the engine from running even if it cranks. Check for a security warning light on the dashboard. Ensuring the correct key is being used, or trying a spare key, is a useful first step." },
      { cause: "Flooded engine (petrol vehicles)", detail: "If the engine has been cranked repeatedly without starting, excess fuel can foul the spark plugs. Allow time for the fuel to evaporate, hold the accelerator fully down while cranking, or have the plugs inspected." },
    ],
  },
  {
    heading: "Starts then immediately stalls",
    causes: [
      { cause: "Throttle body or idle air control issue", detail: "An engine that cannot maintain idle will stall immediately. This can be caused by a dirty throttle body, failed idle air control valve, or vacuum leak." },
      { cause: "Immobilizer cutting fuel after brief start", detail: "Some immobilizer systems allow a brief start before cutting fuel if the key is not authorised. The engine runs for a second or two then shuts off." },
      { cause: "Fuel pressure dropping after start", detail: "A failing fuel pump or leaking fuel pressure regulator can cause the engine to start on residual fuel pressure but stall as pressure drops." },
    ],
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Won't My Car Start? Common Causes and What to Check",
    description:
      "Learn common reasons a car won't start, from battery and starter issues to fuel and ignition problems, plus how to track repairs.",
    url: ARTICLE_URL,
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
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

export default function WhyWontMyCarStartArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Won't My Car Start? Common Causes and What to Check",
    description:
      "Learn common reasons a car won't start, from battery and starter issues to fuel and ignition problems, plus how to track repairs.",
    path: "/blog/why-wont-my-car-start",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why won't my car start?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          <strong className="text-white">What happens when you try?</strong>{" "}
          No sound/no lights → flat battery or connection.
          Rapid clicking → weak battery or corroded terminals.
          Single click → starter fault.
          Cranks but won't fire → fuel, spark, or immobilizer.
          Starts then stalls → idle, fuel pressure, or security.
        </ShortAnswerBox>

        <ArticleH2>Common causes by symptom</ArticleH2>
        {symptoms.map((s) => (
          <div key={s.heading} className="mb-6">
            <h3 className="text-base font-semibold text-white mb-3 border-l-2 border-accent pl-3">{s.heading}</h3>
            <div className="flex flex-col gap-3">
              {s.causes.map((item) => (
                <div key={item.cause} className="rounded-xl border border-panel bg-surface px-5 py-4">
                  <p className="text-sm font-semibold text-white mb-1">{item.cause}</p>
                  <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <ArticleH2>What maintenance history can help</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "When the battery was last replaced — a battery over 3–5 years old is a common starting culprit",
            "Spark plug service history — worn plugs are a common crank-no-start cause",
            "Any prior starting problems and what was found",
            "Recent electrical work or battery disconnection",
            "Oil service history — severe oil neglect can contribute to engine issues",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track battery and starting repairs</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log battery replacements with date and notes,
          spark plug service, and any starting-problem incidents. Knowing when
          the battery was last replaced is one of the most useful pieces of
          information when diagnosing starting issues.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-replace-car-battery", label: "when to replace a car battery" },
            { to: "/blog/when-to-replace-spark-plugs", label: "when to replace spark plugs" },
            { to: "/blog/when-to-change-fuel-filter", label: "when to change fuel filter" },
            { to: "/blog/what-does-check-engine-light-mean", label: "check engine light" },
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
        Last updated: April 2026
      </span>
    </div>
  );
}

function DisclaimerBox() {
  return (
    <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 px-5 py-4 mb-6">
      <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">Important</p>
      <p className="text-sm leading-relaxed text-muted">
        This guide explains common causes, not a diagnosis. Many
        no-start situations require hands-on inspection with the right tools.
        If symptoms affect safety or the cause is unclear, have the vehicle
        inspected by a qualified mechanic.
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
