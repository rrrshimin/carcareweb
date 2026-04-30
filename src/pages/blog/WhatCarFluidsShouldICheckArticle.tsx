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

const ARTICLE_TITLE = "What Car Fluids Should You Check?";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/what-car-fluids-should-i-check";
const ARTICLE_LEDE =
  "Keeping an eye on your vehicle's fluids is one of the simplest and most effective forms of preventive maintenance. Each fluid in your car serves a specific purpose, and running low — or running on degraded fluid — can cause damage that is far more expensive than a fluid top-up or change. This guide covers the essential fluids to check, what each one does, and how often to look.";
const CTA_TITLE = "Use CarCare Diary to log fluid changes, dates, mileage, fluid type, and notes";

const fluidRows = [
  {
    name: "Engine oil",
    role: "Lubricates engine components, reduces friction and heat",
    how: "Dipstick check when engine cold. Level should be between MIN and MAX marks.",
    safety: "Low or dirty oil can cause catastrophic engine damage quickly.",
    link: { to: "/blog/when-to-change-engine-oil", label: "Engine oil guide" },
  },
  {
    name: "Coolant / antifreeze",
    role: "Regulates engine temperature, prevents freezing and boiling",
    how: "Check the coolant reservoir level when the engine is cold. Never open the radiator cap on a warm or hot engine.",
    safety: "Low coolant leads to overheating and potential head gasket or engine damage.",
    link: { to: "/blog/when-to-change-coolant", label: "Coolant guide" },
  },
  {
    name: "Brake fluid",
    role: "Hydraulic fluid that transfers braking force",
    how: "Check the brake fluid reservoir level. Level should be between MIN and MAX.",
    safety: "Brake fluid is safety-critical. Low level may indicate a leak or worn brake pads. Consult a mechanic promptly.",
    link: { to: "/blog/when-to-change-brake-fluid", label: "Brake fluid guide" },
  },
  {
    name: "Transmission fluid",
    role: "Lubricates gearbox components, enables smooth gear changes",
    how: "Some vehicles have a transmission dipstick; others are sealed. Consult your owner's manual for the correct procedure.",
    safety: "Low or degraded transmission fluid causes premature wear and can lead to costly gearbox repairs.",
    link: { to: "/blog/when-to-change-transmission-fluid", label: "Transmission fluid guide" },
  },
  {
    name: "Power steering fluid",
    role: "Provides hydraulic assist for steering (hydraulic systems only)",
    how: "Check the power steering fluid reservoir when the engine is cold. Many modern vehicles have electric power steering and no fluid.",
    safety: "Low fluid causes heavy, unresponsive steering. A loss of steering assist while driving is a safety concern.",
    link: { to: "/blog/when-to-change-power-steering-fluid", label: "Power steering fluid guide" },
  },
  {
    name: "Windshield washer fluid",
    role: "Cleans the windshield for visibility",
    how: "Check and top up the windshield washer reservoir. Use a purpose-made washer fluid.",
    safety: "Not safety-critical for the mechanical system, but clear visibility is essential for safe driving.",
    link: null,
  },
  {
    name: "Differential / transfer case fluid",
    role: "Lubricates differential and transfer case gears (4WD/AWD vehicles)",
    how: "Typically checked by removing a plug — consult your owner's manual. Service is often performed at a shop.",
    safety: "Neglected differential fluid causes premature wear and eventual gear failure.",
    link: null,
  },
];

const articleFaqs = [
  {
    question: "How Often Should I Check My Car's Fluids?",
    answer:
      "Engine oil should be checked every few weeks or before a long trip — it is the most important fluid to monitor regularly. Other fluids (coolant, brake fluid, transmission fluid, power steering fluid) can typically be checked monthly or at every service visit. Windshield washer fluid should be checked when it runs low.",
  },
  {
    question: "Can I Top Up Fluids Myself?",
    answer:
      "Engine oil and windshield washer fluid are the most straightforward to top up — use the correct oil specification for your vehicle and a purpose-made washer fluid. Coolant can be topped up with pre-mixed or diluted coolant (not water alone, and not on a warm engine). Brake fluid, transmission fluid, and differential fluid should be approached with more caution: the correct specification matters and in some cases the system requires professional servicing.",
  },
  {
    question: "What Does It Mean if I Need to Top Up the Same Fluid Repeatedly?",
    answer:
      "A fluid level that repeatedly drops indicates either a leak or consumption (some engine oil consumption is normal on high-mileage engines, but excessive consumption is not). Repeatedly topping up brake fluid without any brake work being done may indicate a leak in the brake system — which is safety-critical. Any recurring fluid loss should be investigated rather than just topped up.",
  },
  {
    question: "Can I Open the Coolant Reservoir When the Engine Is Warm?",
    answer:
      "No. The coolant system is pressurised. Opening the cap on a warm or hot engine can release hot coolant and steam suddenly, causing burns. Always wait until the engine has cooled completely before checking or adding coolant.",
  },
  {
    question: "What Colour Is Brake Fluid?",
    answer:
      "New brake fluid is typically clear to light amber. Heavily degraded or old brake fluid is darker brown. Brake fluid that has absorbed significant moisture (which it does naturally over time) has a lower boiling point, which can reduce braking performance under heavy use — this is one reason brake fluid is changed on a service schedule.",
  },
  {
    question: "How Do I Track Fluid Service History?",
    answer:
      "Log each fluid change or top-up with the date, mileage, fluid type, and any relevant notes. CarCare Diary lets you record all of this per vehicle. Keeping fluid history means you always know when something was last changed — useful at the next service or if a leak or problem develops.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Car Fluids Should You Check? Essential Maintenance Guide",
    description:
      "Learn which car fluids to check, what each fluid does, and how to track fluid service history and reminders in CarCare Diary.",
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

export default function WhatCarFluidsShouldICheckArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "What Car Fluids Should You Check? Essential Maintenance Guide",
    description:
      "Learn which car fluids to check, what each fluid does, and how to track fluid service history and reminders in CarCare Diary.",
    path: "/blog/what-car-fluids-should-i-check",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="What car fluids should you check?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection wide>
        <LastUpdated />
        <ShortAnswerBox>
          The essential fluids to check are{" "}
          <strong className="text-white">engine oil, coolant, brake fluid,
          transmission fluid, and power steering fluid</strong> (if applicable).
          Windshield washer fluid and differential/transfer case fluid are
          also worth knowing. Fluid specifications and check procedures vary
          by vehicle — always consult your owner's manual.
        </ShortAnswerBox>

        <ArticleH2>Essential car fluids checklist</ArticleH2>
        <p className="text-sm text-muted mb-4">
          Use this as general guidance. Specifications, service intervals, and
          check procedures vary by manufacturer, model, and transmission type.
          Always check your owner's manual for your vehicle.
        </p>
        <div className="overflow-x-auto rounded-xl border border-panel mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-panel">
                <th className="text-left px-5 py-3.5 font-semibold text-white whitespace-nowrap">Fluid</th>
                <th className="text-left px-5 py-3.5 font-semibold text-white">What it does</th>
                <th className="text-left px-5 py-3.5 font-semibold text-white">How to check</th>
                <th className="text-left px-5 py-3.5 font-semibold text-white">Safety note</th>
                <th className="text-left px-5 py-3.5 font-semibold text-white whitespace-nowrap">More info</th>
              </tr>
            </thead>
            <tbody>
              {fluidRows.map((row) => (
                <tr key={row.name} className="border-b border-panel last:border-0 hover:bg-surface/50 transition-colors align-top">
                  <td className="px-5 py-3.5 text-white font-semibold whitespace-nowrap">{row.name}</td>
                  <td className="px-5 py-3.5 text-muted">{row.role}</td>
                  <td className="px-5 py-3.5 text-muted">{row.how}</td>
                  <td className="px-5 py-3.5 text-muted">{row.safety}</td>
                  <td className="px-5 py-3.5 text-muted whitespace-nowrap">
                    {row.link ? (
                      <Link to={row.link.to} className="text-accent font-semibold hover:text-white transition-colors">{row.link.label}</Link>
                    ) : (
                      <span className="text-muted/50">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProseSection>
      <ProseSection>
        <ArticleH2>How often should you check fluids?</ArticleH2>
        <div className="flex flex-col gap-3 mb-6">
          {[
            { label: "Engine oil", freq: "Every few weeks or before a long trip", note: "The most important fluid to check regularly. Low oil can cause severe engine damage quickly." },
            { label: "Coolant", freq: "Monthly or at every service", note: "Check the overflow reservoir level only — not the radiator cap. Always check when cold." },
            { label: "Brake fluid", freq: "At every service", note: "Low brake fluid level can indicate worn pads or a leak — both need attention. Changed on a schedule regardless of level." },
            { label: "Transmission fluid", freq: "Per manufacturer schedule or when symptoms arise", note: "Some transmissions are sealed. Consult your owner's manual for the correct procedure and interval." },
            { label: "Power steering fluid", freq: "Monthly if applicable", note: "Many modern vehicles have electric steering and no fluid. For hydraulic systems, check the reservoir." },
            { label: "Windshield washer fluid", freq: "When low", note: "Top up as needed. Use purpose-made washer fluid, not plain water in winter climates." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium border border-accent/20 whitespace-nowrap">{item.freq}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs a fluid needs attention</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Engine oil is black, gritty, or well below the minimum mark",
            "Coolant is rusty, discoloured, or you need to top it up frequently",
            "Brake fluid is dark brown or the level has dropped significantly",
            "Transmission fluid is very dark, burnt-smelling, or the level is low",
            "Power steering is heavy or the pump whines when turning",
            "Any fluid shows visible contamination (e.g., milky oil from coolant mixing)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>Why fluid history matters</ArticleH2>
        <ArticleP>
          Knowing when each fluid was last changed or topped up helps at every
          service visit. A mechanic can quickly see whether brake fluid is due
          for a change, when the last oil change was, or whether a recurring
          low coolant level needs investigation. It is also useful when buying
          or selling a vehicle — a clean, documented service history is a
          trust signal.
        </ArticleP>

        <ArticleH2>How to track fluid maintenance</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log each fluid service with date, mileage,
          fluid type, and notes. You can track multiple fluids independently
          for each vehicle, and add reminders so you do not forget when
          something is due.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-change-engine-oil", label: "engine oil" },
            { to: "/blog/when-to-change-coolant", label: "coolant" },
            { to: "/blog/when-to-change-brake-fluid", label: "brake fluid" },
            { to: "/blog/when-to-change-transmission-fluid", label: "transmission fluid" },
            { to: "/blog/when-to-change-power-steering-fluid", label: "power steering fluid" },
            { to: "/blog/car-maintenance-schedule-by-mileage", label: "maintenance schedule" },
            { to: "/vehicle-service-reminder-app", label: "service reminders" },
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
