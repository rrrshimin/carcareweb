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

const ARTICLE_TITLE = "Why Is My Fuel Economy Getting Worse?";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-is-my-fuel-economy-getting-worse";
const ARTICLE_LEDE =
  "Fuel economy that gets noticeably worse over time usually has a fixable cause. In many cases it comes down to deferred maintenance — low tyre pressure, a dirty air filter, worn spark plugs, or dragging brakes can each reduce efficiency. Weather, driving habits, and load also play a role. If the drop is sudden or severe, a fault in the engine or emissions system is worth investigating.";
const CTA_TITLE = "Track maintenance by mileage and date so you can see what changed before fuel economy dropped";

const maintenanceFactors = [
  {
    label: "Tyre pressure",
    impact: "Underinflated tyres create more rolling resistance, requiring more fuel to maintain speed. A significant drop in pressure across all four tyres is one of the most common and easily fixed causes of reduced efficiency.",
    link: { to: "/blog/when-to-check-tire-pressure", label: "tyre pressure guide" },
  },
  {
    label: "Engine air filter",
    impact: "A dirty or clogged air filter restricts airflow into the engine, causing it to run richer (more fuel, less air). On older vehicles with carburettors, a blocked air filter has a more direct effect. On modern fuel-injected vehicles the effect is less pronounced but still present, particularly on very dirty filters.",
    link: { to: "/blog/when-to-replace-engine-air-filter", label: "air filter guide" },
  },
  {
    label: "Spark plugs",
    impact: "Worn or fouled spark plugs cause incomplete combustion — the fuel-air mixture does not burn as efficiently. Symptoms include reduced power, rough idle, harder starting, and increased fuel consumption.",
    link: { to: "/blog/when-to-replace-spark-plugs", label: "spark plugs guide" },
  },
  {
    label: "Engine oil",
    impact: "Degraded or incorrect-viscosity engine oil increases internal friction, making the engine work harder. Using the manufacturer-specified oil type and changing it on schedule helps keep friction at the designed level.",
    link: { to: "/blog/when-to-change-engine-oil", label: "engine oil guide" },
  },
  {
    label: "Fuel filter",
    impact: "A clogged fuel filter reduces fuel flow to the engine, causing it to work harder to maintain output. Symptoms can include hesitation, poor performance, and increased fuel consumption.",
    link: { to: "/blog/when-to-change-fuel-filter", label: "fuel filter guide" },
  },
  {
    label: "Wheel alignment and brake drag",
    impact: "Misaligned wheels cause tyres to run at an angle rather than rolling straight, increasing rolling resistance. A sticking brake caliper creates constant drag on one wheel. Both force the engine to work harder to maintain speed.",
    link: { to: "/blog/when-to-get-wheel-alignment", label: "alignment guide" },
  },
];

const otherFactors = [
  { label: "Cold weather", note: "Engines are less efficient when cold. Heating the cabin uses energy. Cold air is denser. Short trips where the engine never fully warms up are particularly inefficient." },
  { label: "Air conditioning", note: "Running A/C puts an additional load on the engine, increasing fuel use — typically more noticeable at low speeds and in city driving." },
  { label: "Roof racks and load", note: "Roof racks increase aerodynamic drag significantly, even when empty. Extra vehicle weight also increases fuel use, particularly in stop-start driving." },
  { label: "Driving habits", note: "Hard acceleration, high cruising speed, frequent braking, and short trips all reduce efficiency. Gentle, consistent driving makes a measurable difference." },
  { label: "Fuel quality or type", note: "Some vehicles are sensitive to fuel quality. Using a lower octane than specified, or a different fuel blend, can affect combustion efficiency." },
  { label: "Engine or emissions fault (check engine light)", note: "An oxygen sensor fault, MAF sensor fault, or other engine management issue can cause the engine to run inefficiently. A check engine light alongside a fuel economy drop is worth investigating with an OBD scan." },
];

const articleFaqs = [
  {
    question: "How Much Can Tyre Pressure Affect Fuel Economy?",
    answer:
      "Research and real-world testing suggest that every 10 PSI under the recommended pressure can reduce fuel economy by roughly 0.5–3%, depending on the vehicle and conditions. While the effect per PSI is modest, running significantly underinflated tyres — say, 10–20 PSI below spec — adds up over time. Checking and correcting tyre pressure is free, takes a few minutes, and is one of the first things to check when fuel economy drops.",
  },
  {
    question: "Can a Dirty Air Filter Cause Poor Fuel Economy?",
    answer:
      "On modern fuel-injected vehicles, the engine management system compensates for reduced airflow to some degree, so the effect is less dramatic than on older carburetted engines. However, a severely clogged air filter on any vehicle will affect combustion efficiency. Air filters are inexpensive and straightforward to replace — it is worth checking if it has not been changed in a long time.",
  },
  {
    question: "Can Worn Spark Plugs Reduce Fuel Economy?",
    answer:
      "Yes. Worn spark plugs can misfire or produce an incomplete spark, resulting in incomplete combustion. The unburned fuel exits the engine rather than being converted to power, directly wasting fuel. If spark plugs are overdue for replacement based on the manufacturer's service schedule, replacing them is a logical step when investigating fuel economy decline.",
  },
  {
    question: "Is It Normal for Fuel Economy to Vary With the Season?",
    answer:
      "Yes. Cold weather significantly affects fuel economy. Engines take longer to warm up and run inefficiently until at operating temperature. Cold air is denser. Tyres are often slightly underinflated in cold weather. Winter-blend fuels used in some markets have slightly lower energy content. A fuel economy drop in winter compared to summer is normal and expected.",
  },
  {
    question: "Should I Be Concerned if Fuel Economy Drops Suddenly?",
    answer:
      "A gradual decline over many months is often maintenance-related. A sudden, noticeable drop — particularly if accompanied by a check engine light, rough running, or other symptoms — suggests a specific fault such as a faulty sensor, injector issue, or emissions system problem. An OBD scan to check for fault codes is a logical starting point.",
  },
  {
    question: "How Do I Track Fuel Economy Over Time?",
    answer:
      "Logging refuel dates, odometer readings, and fuel quantities allows you to calculate fuel economy per fill. Tracking this alongside service history in CarCare Diary lets you correlate changes in fuel economy with maintenance events — useful for identifying when a problem started.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Is My Fuel Economy Getting Worse? Common Causes and Maintenance Tips",
    description:
      "Learn common reasons fuel economy drops, what maintenance can affect MPG, and how to track service history in CarCare Diary.",
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

export default function WhyIsMyFuelEconomyGettingWorseArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Is My Fuel Economy Getting Worse? Common Causes and Maintenance Tips",
    description:
      "Learn common reasons fuel economy drops, what maintenance can affect MPG, and how to track service history in CarCare Diary.",
    path: "/blog/why-is-my-fuel-economy-getting-worse",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why is my fuel economy getting worse?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Common maintenance-related causes:{" "}
          <strong className="text-white">low tyre pressure, dirty
          air filter, worn spark plugs, old oil, clogged fuel filter,
          dragging brakes, or wheel alignment</strong>. Non-maintenance
          factors include cold weather, A/C use, heavy load, and driving
          habits. A sudden drop with a check engine light suggests a
          specific fault worth scanning.
        </ShortAnswerBox>

        <ArticleH2>Maintenance factors that affect fuel economy</ArticleH2>
        <p className="text-sm text-muted mb-4">
          Use this as general guidance. The exact impact varies by
          vehicle, driving conditions, and how severe each issue is.
          Always check your owner's manual for service intervals.
        </p>
        <div className="flex flex-col gap-4 mb-6">
          {maintenanceFactors.map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted mb-2">{item.impact}</p>
              <Link to={item.link.to} className="text-xs text-accent font-semibold hover:text-white transition-colors">
                → {item.link.label}
              </Link>
            </div>
          ))}
        </div>

        <ArticleH2>Other factors that affect fuel economy</ArticleH2>
        <div className="flex flex-col gap-3 mb-6">
          {otherFactors.map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What to check first</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Check tyre pressure on all four wheels against the doorjamb specification",
            "Check when engine oil was last changed and whether the correct grade was used",
            "Check when the air filter and spark plugs were last replaced",
            "Note if there is a check engine light — scan for fault codes",
            "Consider whether driving patterns or conditions have changed recently",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>What maintenance history can help</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Oil change history — degraded or incorrect oil increases friction",
            "Air filter and spark plug replacement dates — due items are a likely contributor",
            "Tyre rotation and alignment history — misalignment causes drag",
            "Whether brakes were recently serviced or a caliper noted as sticking",
            "Any recent check engine light history",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track fuel economy and maintenance</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log every service with date and mileage,
          so you can see at a glance what has been done recently and what
          is overdue. Tracking service history against mileage helps
          identify when a change happened and what maintenance preceded it.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-check-tire-pressure", label: "tyre pressure" },
            { to: "/blog/when-to-replace-engine-air-filter", label: "air filter" },
            { to: "/blog/when-to-replace-spark-plugs", label: "spark plugs" },
            { to: "/blog/when-to-change-engine-oil", label: "engine oil" },
            { to: "/blog/when-to-change-fuel-filter", label: "fuel filter" },
            { to: "/blog/when-to-get-wheel-alignment", label: "wheel alignment" },
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
