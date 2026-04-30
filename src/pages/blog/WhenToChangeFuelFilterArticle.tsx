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

const ARTICLE_TITLE = "When To Change a Fuel Filter";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-change-fuel-filter";
const ARTICLE_LEDE =
  "Fuel filter service varies considerably between vehicles. Some have an externally accessible, serviceable filter with a scheduled replacement interval. Others use an in-tank filter integrated with the fuel pump assembly that is not typically replaced on a schedule. The symptoms of a clogged fuel filter overlap significantly with other fuel delivery and ignition problems, so diagnosis matters as much as the service interval.";
const CTA_TITLE = "Track fuel filter changes by date, mileage, and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Change a Fuel Filter?",
    answer:
      "It depends on your vehicle. Some manufacturers with externally mounted filters specify replacement every 20,000–30,000 miles. Others with in-tank filters may not specify a routine change interval at all, treating the filter as a lifetime component unless the pump assembly is replaced. Check your owner's manual for your vehicle's specific guidance.",
  },
  {
    question: "Does My Car Have an Accessible Fuel Filter?",
    answer:
      "Many older and some current vehicles have an inline fuel filter mounted along the fuel line, often under the hood, under the car, or near the firewall. This is typically accessible and replaceable. Many modern vehicles integrate the filter with the fuel pump module inside the fuel tank — these are not usually replaced as a standalone service item. Your owner's manual or a service guide for your vehicle will confirm which type you have.",
  },
  {
    question: "What Are the Symptoms of a Clogged Fuel Filter?",
    answer:
      "Symptoms can include difficulty starting the engine (particularly cold starts), hesitation or stumbling when accelerating, engine misfires or rough running, a noticeable loss of power especially when demanding full throttle, and engine stalling — particularly at low speed or when the tank is low. These symptoms can also be caused by a failing fuel pump, dirty fuel injectors, ignition issues, or sensor problems, so the fuel filter should be investigated as part of a broader diagnostic rather than assumed to be the sole cause.",
  },
  {
    question: "Are Fuel Filters Different for Petrol and Diesel Vehicles?",
    answer:
      "Yes. Diesel fuel contains more particulate contamination than petrol, and diesel engines are more sensitive to fuel contamination — particularly the high-pressure injection components. Diesel vehicles typically have a primary fuel filter (often with a water separator that requires periodic draining) and sometimes a secondary filter. Diesel fuel filter service intervals tend to be more defined and should be followed carefully. Some diesel filters also have a water-in-fuel warning light when the separator bowl needs draining.",
  },
  {
    question: "Can I Replace a Fuel Filter Myself?",
    answer:
      "An externally mounted inline fuel filter can be a DIY job on many vehicles, but fuel system work requires proper safety precautions — depressurising the fuel system before disconnecting lines, working in a ventilated area away from ignition sources, and having appropriate fittings and tools. If you are not confident with fuel system work, having a mechanic do this job is the safer option.",
  },
  {
    question: "How Do I Track Fuel Filter Changes?",
    answer:
      "Log the date, mileage, and any notes about why the filter was changed — whether routine or symptom-driven. CarCare Diary lets you record fuel filter service with full notes and set a mileage-based reminder for the next scheduled replacement.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Change a Fuel Filter: Signs and Replacement Timing",
    description:
      "Learn when to change a fuel filter, symptoms of a clogged filter, and how to track fuel filter service in CarCare Diary.",
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

export default function WhenToChangeFuelFilterArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Change a Fuel Filter: Signs and Replacement Timing",
    description:
      "Learn when to change a fuel filter, symptoms of a clogged filter, and how to track fuel filter service in CarCare Diary.",
    path: "/blog/when-to-change-fuel-filter",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you change a fuel filter?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Check whether your vehicle has a serviceable inline fuel filter or
          an in-tank filter. For serviceable filters, some manufacturers specify
          replacement every{" "}
          <strong className="text-white">20,000–30,000 miles</strong>, but
          intervals vary. Many modern vehicles have no scheduled replacement
          interval. Check your owner's manual.
        </ShortAnswerBox>

        <ArticleH2>Fuel filter types and service requirements</ArticleH2>
        <ArticleP>
          The service requirement depends on which type of fuel filter your
          vehicle has:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "External inline filter (serviceable)", note: "Mounted along the fuel line — often under the hood, under the car, or near the firewall. Can be replaced as a standalone item. Many manufacturers specify a replacement interval. Common in older vehicles and some current models." },
            { label: "In-tank filter (integrated with fuel pump)", note: "Integrated inside the fuel tank as part of the fuel pump module assembly. Not typically replaced as a standalone service item — only replaced if the pump assembly is changed. Common in many modern vehicles." },
            { label: "Diesel primary filter with water separator", note: "Diesel vehicles typically have a primary filter with a water separator bowl that requires periodic draining and a scheduled filter replacement. Diesel filter intervals are often more specifically defined than petrol filters. A warning light may indicate the separator bowl is full." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs a fuel filter may be restricted or clogged</ArticleH2>
        <ArticleP>
          These symptoms overlap with many other fuel delivery and ignition
          issues. They point to the fuel system as an area to investigate
          — not necessarily the filter alone:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "Difficulty starting", detail: "A restricted fuel filter reduces pressure at the injectors, which can make cold starts slow or require multiple attempts. Also associated with failing fuel pump, bad injectors, or ignition issues." },
            { sign: "Hesitation or stumbling when accelerating", detail: "Under acceleration demand, a restricted filter may not allow enough fuel flow to meet the engine's needs — causing a flat spot, hesitation, or jerking. Other fuel delivery and ignition causes produce identical symptoms." },
            { sign: "Loss of power under load", detail: "At higher RPM or when demanding full throttle, a restricted filter's capacity may not keep up with fuel demand. The engine may feel like it is running out of fuel briefly." },
            { sign: "Engine misfires or rough idle", detail: "Insufficient fuel pressure can cause lean misfires or an uneven idle. Misfire codes read with a scanner can help narrow down whether fuel delivery is the likely cause." },
            { sign: "Stalling at low speed or when near empty", detail: "A severely restricted filter can cause stalling, particularly at low speed where fuel demand is low but filter restriction is limiting pressure. Running near empty can also expose a partially blocked filter more readily." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you delay fuel filter replacement</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Progressive restriction can strain the fuel pump, causing premature pump wear or failure",
            "A failing fuel pump is a significantly more expensive repair than a filter",
            "Lean running from low fuel pressure can affect engine performance and potentially cause misfires over time",
            "On diesel vehicles, water accumulation in an unserviced separator bowl can reach injector components and cause damage",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track fuel filter changes</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of replacement",
            "Mileage at replacement",
            "Filter type (inline or diesel primary) and any brand or part notes",
            "Any symptoms that prompted the change or were resolved",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log fuel filter service with date, mileage,
          and notes. Set a mileage-based reminder if your vehicle has a
          manufacturer-specified replacement interval.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/car-service-history-app", label: "car service history app" },
            { to: "/blog/when-to-change-engine-oil", label: "when to change engine oil" },
            { to: "/blog/when-to-replace-engine-air-filter", label: "when to replace engine air filter" },
            { to: "/blog/car-maintenance-schedule-by-mileage", label: "maintenance schedule by mileage" },
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

function ShortAnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-accent/30 bg-brand/5 px-5 py-5 mb-8">
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Short answer</p>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
      <p className="text-xs text-muted/60 mt-3 italic">
        Use this as general guidance and always check your owner's manual for your exact vehicle.
      </p>
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
