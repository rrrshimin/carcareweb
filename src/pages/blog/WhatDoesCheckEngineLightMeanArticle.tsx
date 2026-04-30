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

const ARTICLE_TITLE = "What Does the Check Engine Light Mean?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/what-does-check-engine-light-mean";
const ARTICLE_LEDE =
  "The check engine light — also called the malfunction indicator lamp (MIL) — means the vehicle's onboard diagnostic system has detected a fault in the engine, emissions, or related systems. It does not mean the engine is about to fail, but it does mean something needs attention. Reading the fault code with an OBD scanner or visiting a mechanic is the only way to know what triggered it.";
const CTA_TITLE = "After inspection or repair, log the code, repair, mileage, and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "Can I Drive With the Check Engine Light On?",
    answer:
      "A solid check engine light with no other symptoms may allow cautious driving to a repair shop in the near term — but the issue should not be left unaddressed indefinitely. A flashing or blinking check engine light is more urgent: it often indicates an active engine misfire that can overheat and damage the catalytic converter. If the light is flashing, reduce speed, avoid hard acceleration, and have the vehicle inspected as soon as possible.",
  },
  {
    question: "What Is the Difference Between a Solid and Flashing Check Engine Light?",
    answer:
      "A solid (continuous) check engine light indicates a stored fault code that the system has detected but which may not be immediately critical. A flashing or blinking check engine light indicates an active fault — often an engine misfire — that requires prompt attention. Continued driving with an active misfire can damage the catalytic converter, which is an expensive component to replace.",
  },
  {
    question: "How Do I Find Out What the Check Engine Light Code Is?",
    answer:
      "The fault code stored by the vehicle's OBD-II system can be read by: an OBD-II scanner (an affordable tool available at auto parts stores, or available for loan at many locations); a mechanic or dealer workshop using a diagnostic tool; or a basic code reader available at many auto parts stores as a free service. The code does not diagnose the root cause on its own — it identifies the system or sensor that reported the fault, which then requires further investigation.",
  },
  {
    question: "Will the Check Engine Light Go Out on Its Own?",
    answer:
      "If the fault condition clears — for example, a temporarily loose fuel cap is tightened and the system detects the issue is resolved — the light may go out after several drive cycles. However, if an underlying issue remains, the light will remain on or return. Clearing the code without fixing the underlying problem does not help and may delay proper diagnosis.",
  },
  {
    question: "Is the Check Engine Light the Same as the Service Due Light?",
    answer:
      "No. The check engine light (usually an engine outline or 'Check Engine' text) indicates a system fault detected by the OBD diagnostics. A service due or maintenance reminder light (often a wrench icon, 'Service Due', or 'Maintenance Required') simply indicates the scheduled service interval is approaching based on mileage or time. These are separate warnings with different meanings.",
  },
  {
    question: "How Do I Track Check Engine Light Repairs?",
    answer:
      "After a fault code is read and the issue is diagnosed and repaired, log the fault code, what was found, what was repaired or replaced, the date, and mileage. CarCare Diary lets you add detailed notes to any service entry — including fault codes and repair descriptions — so the full history is available for future reference.",
  },
];

const commonCauses = [
  { cause: "Loose, damaged, or missing fuel cap", detail: "One of the most common and simplest causes. A loose fuel cap allows fuel vapour to escape the tank, triggering the evaporative emissions system. Tightening the cap and driving for a few cycles may clear the light." },
  { cause: "Oxygen (O2) sensor fault", detail: "Oxygen sensors monitor the exhaust stream to help the engine management system optimise fuel delivery. A faulty O2 sensor can cause poor fuel economy and emissions issues and is a common fault code." },
  { cause: "Engine misfire (one or more cylinders)", detail: "A misfire means one or more cylinders are not firing correctly. Causes include a faulty spark plug, ignition coil, fuel injector, or compression issue. Misfires can trigger a flashing check engine light and damage the catalytic converter." },
  { cause: "Catalytic converter efficiency fault", detail: "The catalytic converter reduces harmful exhaust emissions. A fault code suggesting low converter efficiency may indicate the converter has degraded, or it may result from upstream issues — such as a faulty O2 sensor or persistent misfires that damaged the converter." },
  { cause: "Mass airflow (MAF) sensor fault", detail: "The MAF sensor measures the volume of air entering the engine, which the ECU uses to calculate the correct fuel delivery. A dirty or failing MAF sensor can cause running issues and trigger a fault code." },
  { cause: "Evaporative emission system (EVAP) fault", detail: "The EVAP system captures fuel vapour from the fuel tank. Leaks in the system — including a loose fuel cap — trigger EVAP fault codes. Many EVAP codes do not cause noticeable running symptoms but still require investigation." },
  { cause: "Spark plug or ignition coil fault", detail: "Worn spark plugs or failing ignition coils cause misfires. Misfire codes point to specific cylinders and help narrow down which component needs attention." },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Does the Check Engine Light Mean? Common Causes and Next Steps",
    description:
      "Learn what the check engine light can mean, when it is urgent, and how to track repairs and maintenance history.",
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

export default function WhatDoesCheckEngineLightMeanArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "What Does the Check Engine Light Mean? Common Causes and Next Steps",
    description:
      "Learn what the check engine light can mean, when it is urgent, and how to track repairs and maintenance history.",
    path: "/blog/what-does-check-engine-light-mean",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="What does the check engine light mean?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          A <strong className="text-white">solid check engine light</strong> means
          a fault has been stored — usually non-urgent but should be read and
          addressed. A <strong className="text-white">flashing check engine
          light</strong> is more urgent — often an active misfire — reduce speed
          and seek inspection soon. Read the fault code with an OBD scanner
          or at a mechanic to find out what triggered it.
        </ShortAnswerBox>

        <ArticleH2>Solid vs flashing check engine light</ArticleH2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            { label: "Solid check engine light", colour: "text-amber-400", borderColour: "border-amber-400/30 bg-amber-400/5", detail: "A stored fault code. The system detected a problem, which may not be currently active. Can usually be driven cautiously to a workshop. Should be read and investigated — do not ignore indefinitely." },
            { label: "Flashing check engine light", colour: "text-red-400", borderColour: "border-red-400/30 bg-red-400/5", detail: "An active fault — often a misfire. Reduce speed and avoid hard acceleration. Have the vehicle inspected promptly to avoid catalytic converter damage from unburned fuel reaching the exhaust." },
          ].map((item) => (
            <div key={item.label} className={`rounded-xl border px-5 py-4 ${item.borderColour}`}>
              <p className={`text-sm font-semibold mb-2 ${item.colour}`}>{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What to do first</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Check the fuel cap — ensure it is tight (a common and simple cause)",
            "Note any other symptoms: rough running, loss of power, unusual smells",
            "Note whether the light is solid or flashing",
            "Read the fault code with an OBD-II scanner or at a mechanic or auto parts store",
            "Do not clear the code without understanding and addressing the cause",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>Common check engine light causes</ArticleH2>
        <ArticleP>
          These are common fault areas — not an exhaustive list, and a fault
          code points to a system or sensor rather than guaranteeing a specific
          component has failed. Proper diagnosis requires investigation beyond
          reading the code:
        </ArticleP>
        <div className="flex flex-col gap-4 mb-6">
          {commonCauses.map((item) => (
            <div key={item.cause} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.cause}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-panel bg-surface px-5 py-4 mb-6">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Note on OBD scanning</p>
          <p className="text-sm leading-relaxed text-muted">
            CarCare Diary does not scan OBD codes — it is a service log.
            To read fault codes, use a standalone OBD-II scanner, a
            compatible app with an OBD adapter, or visit a mechanic or
            auto parts store. After the code is read and the issue is
            diagnosed and repaired, log the details in CarCare Diary.
          </p>
        </div>

        <ArticleH2>What maintenance history can help</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Spark plug and ignition service history — misfires are a common check engine trigger",
            "Engine air filter and fuel filter history — can affect engine management",
            "Oil change history — severe oil degradation can affect sensors",
            "Any prior check engine light codes and repairs",
            "Recent work near sensors or emissions components",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track check engine light repairs</ArticleH2>
        <ArticleP>
          After a fault is diagnosed and repaired, log the fault code, what
          was found, what was replaced or adjusted, date, and mileage.
          CarCare Diary lets you add detailed notes to any entry — keeping
          a clear record of faults, codes, and repairs over the vehicle's
          lifetime.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-replace-spark-plugs", label: "when to replace spark plugs" },
            { to: "/blog/when-to-change-engine-oil", label: "when to change engine oil" },
            { to: "/blog/when-to-replace-engine-air-filter", label: "when to replace engine air filter" },
            { to: "/car-service-history-app", label: "car service history app" },
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
        This guide explains common causes, not a diagnosis. A fault code
        identifies a system or sensor — not necessarily the failed component.
        If the light is flashing, or other symptoms affect drivability or
        safety, seek inspection promptly.
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
