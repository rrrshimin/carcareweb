import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ChevronDown, CheckCircle2, AlertTriangle } from "lucide-react";
import {
  ArticleLayout,
  ArticleHero,
  ProseSection,
  ArticleH2,
  ArticleP,
} from "./ArticleLayout";
import { GuideDownloadCTA } from "./GuideDownloadCTA";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "When To Replace Cabin Air Filter";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-cabin-air-filter";
const ARTICLE_LEDE =
  "The cabin air filter cleans the air that enters your vehicle through the heating, ventilation, and air conditioning system. Most vehicles benefit from replacement about once a year or every 12,000–15,000 miles, but high pollen areas, dusty roads, urban pollution, or driving near wildfires can require earlier replacement.";
const CTA_TITLE = "Track cabin air filter changes by date and mileage in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Replace The Cabin Air Filter?",
    answer:
      "Once a year or every 12,000–15,000 miles is a common starting point for most vehicles under normal conditions. Driving in areas with high pollen, heavy dust, smoke, or urban pollution means replacement is often needed sooner. Check your owner's manual for the manufacturer's recommended interval.",
  },
  {
    question: "What Are The Signs A Cabin Air Filter Needs Replacing?",
    answer:
      "Reduced airflow from the vents (especially noticeable on the highest fan setting), a musty or dusty smell when the HVAC runs, more dust settling inside the cabin than usual, or windows that take longer to defog or defrost than before are all signs. Note that these symptoms can also have other causes — the cabin filter is usually easy to inspect so it is a good first check.",
  },
  {
    question: "Where Is The Cabin Air Filter Located?",
    answer:
      "The cabin air filter is usually located behind the glove box, under the dashboard, or near the base of the windscreen on the engine side (the cowl area). Location varies significantly by vehicle. Your owner's manual or a quick search for your specific make and model will show where it is and how to access it.",
  },
  {
    question: "Can A Dirty Cabin Air Filter Affect Air Conditioning?",
    answer:
      "A heavily clogged cabin air filter restricts airflow through the HVAC system, which reduces how effectively the air conditioning and heating can cool or warm the cabin. The system has to work harder to push air through a blocked filter. Replacing a clogged filter can noticeably improve airflow and climate control effectiveness.",
  },
  {
    question: "Is The Cabin Air Filter The Same As The Engine Air Filter?",
    answer:
      "No. They are separate filters serving different purposes. The engine air filter protects the engine intake from contaminants. The cabin air filter cleans air entering the passenger cabin through the HVAC system. They are in different locations and have different replacement schedules.",
  },
  {
    question: "How Do I Track Cabin Air Filter Replacements?",
    answer:
      "Log each replacement with the date and mileage. Because this filter is often changed annually or aligned with an oil change interval, recording the date is particularly useful. CarCare Diary lets you log cabin filter replacements with notes and set date-based or mileage-based reminders for the next interval.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace Cabin Air Filter: Signs and Replacement Interval",
    description:
      "Learn when to replace your cabin air filter, signs it may be clogged, and how to track cabin filter changes in CarCare Diary.",
    url: ARTICLE_URL,
    datePublished: "2026-04-30",
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
    mainEntity: articleFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function WhenToReplaceCabinAirFilterArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "When to Replace Cabin Air Filter: Signs and Replacement Interval",
    description:
      "Learn when to replace your cabin air filter, signs it may be clogged, and how to track cabin filter changes in CarCare Diary.",
    path: "/blog/when-to-replace-cabin-air-filter",
    ogType: "article",
    jsonLd,
  });

  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you replace your cabin air filter?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          About <strong className="text-white">once a year</strong> or every{" "}
          <strong className="text-white">12,000–15,000 miles</strong> for most
          vehicles under normal conditions. High pollen, dust, smoke, or heavy
          urban pollution require earlier replacement. Check your owner's
          manual for your vehicle's specific interval.
        </ShortAnswerBox>

        <ArticleH2>What the cabin air filter does</ArticleH2>
        <ArticleP>
          The cabin air filter sits in the vehicle's HVAC (heating, ventilation,
          and air conditioning) duct work. All air entering the passenger cabin
          through the vents — whether for heating, cooling, or ventilation —
          passes through this filter before reaching occupants.
        </ArticleP>
        <ArticleP>
          The filter captures pollen, dust, mould spores, bacteria, exhaust
          particulate, and other airborne contaminants. Unlike the engine air
          filter, which protects mechanical components, the cabin filter is
          primarily about the air quality inside the vehicle for occupants.
        </ArticleP>

        <ArticleH2>Typical replacement intervals</ArticleH2>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Normal driving conditions",
              interval: "Annually or 12,000–15,000 miles",
              note: "Primarily paved roads in areas without significant pollen, dust, or pollution. This is the baseline recommendation for most manufacturer schedules.",
            },
            {
              label: "High pollen areas (spring/summer)",
              interval: "May need replacement more frequently",
              note: "Driving through heavy pollen seasons in rural or wooded areas can load the filter significantly faster. Consider inspecting after pollen season.",
            },
            {
              label: "Dusty roads, construction zones, smoke",
              interval: "Earlier — inspect regularly",
              note: "Dirt roads, active construction areas, or driving near wildfires or controlled burns deposit large amounts of particulate quickly. Inspect more frequently.",
            },
            {
              label: "Dense urban traffic",
              interval: "May need earlier replacement",
              note: "Heavy stop-and-go traffic with high exhaust particulate levels in the air can clog filters faster than lower-traffic environments.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <span className="text-sm font-semibold text-white">{item.label}</span>
                <span className="text-sm text-accent font-medium">{item.interval}</span>
              </div>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs a cabin air filter may need replacing</ArticleH2>
        <ArticleP>
          Most of these signs point to a restricted HVAC system. The cabin
          filter is one possible cause — it is worth inspecting before assuming
          a more expensive problem:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "Reduced airflow from vents",
              detail: "A clogged filter restricts how much air the HVAC fan can push through the system. If airflow feels weaker than it used to — especially on the highest fan speed — the filter is a first thing to check.",
            },
            {
              sign: "Musty or dusty smell when the HVAC runs",
              detail: "A heavily loaded filter can harbour mould spores and bacterial growth, producing an unpleasant smell when the fan operates. A new filter often resolves this, sometimes alongside a duct cleaning.",
            },
            {
              sign: "More dust settling on interior surfaces",
              detail: "A cabin filter past its service life may allow finer particles to bypass it. If you notice significantly more dust on the dashboard and surfaces than usual, the filter is worth checking.",
            },
            {
              sign: "Windows take longer to defog or defrost",
              detail: "The defrost function depends on airflow from the HVAC system. Restricted airflow through a clogged filter can slow how quickly the windscreen clears in cold or humid conditions.",
            },
            {
              sign: "Allergy or respiratory irritation inside the vehicle",
              detail: "A cabin filter well past its service life provides less filtration of pollen and particulate. This can be noticeable for allergy sufferers during high-pollen periods.",
            },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you skip cabin filter replacement</ArticleH2>

        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Progressively reduced HVAC airflow as the filter becomes more clogged",
            "Reduced cabin air quality for occupants",
            "HVAC blower motor works harder against increased resistance — can reduce its lifespan",
            "Mould or bacterial build-up in the filter and ductwork in humid conditions",
            "Less effective defrost in cold weather due to restricted airflow",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          Cabin filters are inexpensive and on most vehicles accessible in a
          few minutes. Keeping the interval is low-effort maintenance with a
          direct effect on cabin comfort and air quality.
        </ArticleP>

        <ArticleH2>How to track cabin air filter replacements</ArticleH2>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of replacement",
            "Mileage at replacement",
            "Filter brand or type (some are basic particulate, others are activated carbon)",
            "Any notes about the condition of the old filter",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          CarCare Diary lets you log cabin filter replacements with date,
          mileage, and notes. Set a date-based or mileage-based reminder for
          the next replacement — useful if you want to align it with annual
          service or a seasonal pollen cycle.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          <Link to="/car-maintenance-tracker" className="text-accent font-semibold hover:text-white transition-colors">car maintenance tracker</Link>
          {" · "}
          <Link to="/vehicle-service-reminder-app" className="text-accent font-semibold hover:text-white transition-colors">vehicle service reminder app</Link>
          {" · "}
          <Link to="/blog/when-to-replace-engine-air-filter" className="text-accent font-semibold hover:text-white transition-colors">when to replace engine air filter</Link>
          {" · "}
          <Link to="/blog/when-to-change-engine-oil" className="text-accent font-semibold hover:text-white transition-colors">when to change engine oil</Link>
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
          <div key={faq.question} className={`rounded-xl border overflow-hidden bg-surface transition-colors ${isOpen ? "border-accent/40" : "border-panel"}`}>
            <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
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
