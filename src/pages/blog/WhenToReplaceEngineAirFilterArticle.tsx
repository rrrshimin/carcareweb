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

const ARTICLE_TITLE = "When To Replace Engine Air Filter";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-engine-air-filter";
const ARTICLE_LEDE =
  "The engine air filter prevents dust, dirt, and debris from entering the engine's intake system. Most manufacturer schedules point to replacement around every 12,000–15,000 miles under normal driving conditions, but driving on dusty roads, in heavy traffic, or in areas with high pollution can require replacement sooner. A visual inspection is the most reliable indicator.";
const CTA_TITLE = "Track air filter replacements by mileage and date in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Replace The Engine Air Filter?",
    answer:
      "Many manufacturers recommend replacing the engine air filter every 12,000–15,000 miles under normal conditions. Dusty roads, unpaved surfaces, heavy urban traffic, and areas with significant airborne particulate can require earlier replacement. A visual inspection at each oil change is a practical way to assess filter condition.",
  },
  {
    question: "How Do You Know If The Engine Air Filter Needs Replacing?",
    answer:
      "Remove the filter and inspect it visually. A new filter is white or off-white. A filter that is light grey overall can often be reused. A heavily clogged filter appears dark grey or brown with visible debris embedded in the folds. If light cannot pass through when held up, it is due for replacement. Note that symptoms like reduced acceleration can have many causes — the filter is one thing to check, but not always the cause.",
  },
  {
    question: "What Symptoms Can A Dirty Engine Air Filter Cause?",
    answer:
      "A severely clogged air filter can restrict airflow to the engine, potentially contributing to reduced throttle response, rough idle, slightly reduced fuel economy, and in some cases a faint smell from the intake. However, these symptoms can also be caused by other issues — spark plugs, injectors, sensors, or fuel system problems. A dirty filter is worth checking first, but should not be assumed to be the only cause.",
  },
  {
    question: "Can You Clean An Engine Air Filter Instead Of Replacing It?",
    answer:
      "Some reusable performance air filters (such as oiled cotton gauze filters) are designed to be cleaned and re-oiled. Standard paper/pleated element filters are typically not reusable — they should be replaced rather than cleaned. Compressed air can dislodge loose surface dust but does not restore the filter's ability to trap fine particles.",
  },
  {
    question: "Is An Engine Air Filter Easy To Replace?",
    answer:
      "On most vehicles, the engine air filter is accessible in a plastic housing connected to the intake duct. It is usually secured by clips or screws with no specialist tools required. The replacement filter must match the correct specification for your vehicle. Check your owner's manual or the part number on the existing filter before purchasing.",
  },
  {
    question: "How Do I Track Engine Air Filter Replacements?",
    answer:
      "Log each replacement with the date and mileage. Because the interval is mileage-based, recording the odometer at replacement gives you the reference point for when the next one is due. CarCare Diary lets you log air filter replacements with notes and set a mileage-based reminder for the next interval.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace Engine Air Filter: Mileage and Warning Signs",
    description:
      "Learn when to replace your engine air filter, signs it may be dirty, and how to track filter changes in CarCare Diary.",
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

export default function WhenToReplaceEngineAirFilterArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "When to Replace Engine Air Filter: Mileage and Warning Signs",
    description:
      "Learn when to replace your engine air filter, signs it may be dirty, and how to track filter changes in CarCare Diary.",
    path: "/blog/when-to-replace-engine-air-filter",
    ogType: "article",
    jsonLd,
  });

  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you replace your engine air filter?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Every <strong className="text-white">12,000–15,000 miles</strong>{" "}
          under normal driving conditions for most vehicles. Dusty roads,
          dirt tracks, or heavy urban traffic require earlier replacement.
          Inspect the filter at each oil change — visual condition is more
          reliable than mileage alone.
        </ShortAnswerBox>

        <ArticleH2>What the engine air filter does</ArticleH2>
        <ArticleP>
          The engine air filter sits in the intake system between the air inlet
          and the engine. Its job is to trap airborne particles — dust, sand,
          pollen, insects, and debris — before they enter the engine. Engines
          need large volumes of clean air to run efficiently; contaminated air
          carries abrasive particles that cause wear on internal components
          including cylinders, pistons, and sensors.
        </ArticleP>
        <ArticleP>
          As the filter accumulates particles, airflow through it is gradually
          restricted. A mildly dirty filter has limited impact on most
          vehicles — modern engine management systems compensate for airflow
          changes. A severely clogged filter significantly restricts the air
          supply and will have a noticeable effect on performance.
        </ArticleP>

        <ArticleH2>Typical replacement intervals</ArticleH2>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Normal driving conditions",
              interval: "12,000–15,000 miles",
              note: "Primarily motorway, suburban, or mixed driving on paved roads with typical air quality. This is the baseline interval for most manufacturer recommendations.",
            },
            {
              label: "Dusty or unpaved roads",
              interval: "Sooner — inspect regularly",
              note: "Dirt tracks, gravel roads, construction zones, and dry dusty environments clog filters much faster. Inspect at every oil change if this applies to your regular driving.",
            },
            {
              label: "Dense urban traffic / heavy pollution",
              interval: "May need earlier replacement",
              note: "Stop-and-go traffic in polluted urban areas can clog filters faster than motorway driving in the same mileage.",
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

        <ArticleH2>How to visually inspect the engine air filter</ArticleH2>
        <ArticleP>
          Remove the filter from its housing and examine it in good light.
          Hold it up toward a light source:
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "White or off-white — filter is new or lightly used. No action needed.",
            "Light grey overall with some debris visible — filter is used but still functional. May be fine to leave, or can be replaced if nearing mileage interval.",
            "Dark grey, brown, or no light passing through the folds — replace the filter.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>Signs a dirty engine air filter may be contributing to issues</ArticleH2>
        <ArticleP>
          A heavily clogged filter can contribute to engine performance issues,
          but these symptoms can also be caused by unrelated problems. Check the
          filter — but treat it as one item to investigate, not necessarily the
          cause:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "Reduced throttle response or sluggish acceleration",
              detail: "A severely restricted air supply can limit how quickly the engine responds to throttle inputs. Other causes include spark plug wear, fuel system issues, or sensor faults.",
            },
            {
              sign: "Rough idle",
              detail: "An engine idling unevenly or hunting can indicate restricted airflow, but also has many other potential causes. Check the filter as an easy first step.",
            },
            {
              sign: "Slight reduction in fuel economy",
              detail: "A clogged filter can contribute to slightly higher fuel consumption in some conditions. The effect varies by engine management system and how severely blocked the filter is.",
            },
            {
              sign: "Check engine light (in some cases)",
              detail: "A severely clogged filter that affects the air/fuel mixture can trigger sensors and illuminate a check engine light. This will have a specific fault code — have it read before assuming the filter is the cause.",
            },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you skip air filter replacement</ArticleH2>

        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Progressively restricted airflow as the filter loads with debris",
            "Potential for fine particles to bypass an overloaded filter and enter the engine",
            "Reduced engine performance and potentially increased fuel consumption",
            "Extra load on the intake system components",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          Air filters are among the cheapest service items on a vehicle.
          Replacement at the scheduled interval is a straightforward task that
          protects more expensive components downstream.
        </ArticleP>

        <ArticleH2>How to track engine air filter replacements</ArticleH2>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of replacement",
            "Mileage at replacement",
            "Filter brand or part number if useful for next time",
            "Any notes about filter condition at inspection",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          CarCare Diary lets you log air filter replacements under a filters
          category with date, mileage, and notes. Set a mileage-based reminder
          for your next replacement interval.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          <Link to="/car-maintenance-tracker" className="text-accent font-semibold hover:text-white transition-colors">car maintenance tracker</Link>
          {" · "}
          <Link to="/vehicle-service-reminder-app" className="text-accent font-semibold hover:text-white transition-colors">vehicle service reminder app</Link>
          {" · "}
          <Link to="/blog/when-to-change-engine-oil" className="text-accent font-semibold hover:text-white transition-colors">when to change engine oil</Link>
          {" · "}
          <Link to="/blog/when-to-replace-cabin-air-filter" className="text-accent font-semibold hover:text-white transition-colors">when to replace cabin air filter</Link>
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
