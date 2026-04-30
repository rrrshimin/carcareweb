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

const ARTICLE_TITLE = "Why Does My Car Battery Keep Dying?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-does-my-car-battery-keep-dying";
const ARTICLE_LEDE =
  "A battery that dies once might just be an old battery. A battery that keeps dying after being charged or jumped points to something else — a charging system fault, a parasitic drain, or a pattern of short trips that never gives the battery a chance to fully recharge. Working through the common causes systematically saves time and avoids repeatedly replacing a battery that is not actually the problem.";
const CTA_TITLE = "Track battery replacements, jump starts, charging system repairs, mileage, and notes in CarCare Diary";

const causes = [
  {
    label: "Old or failing battery",
    detail: "Most car batteries last 3–5 years. An aging battery gradually loses its capacity to hold a charge. A battery that tests as 'charged' by voltage alone but cannot deliver the cranking current required to start the engine is effectively at end of life. A proper battery load test (not just a voltage check) reveals whether the battery can still perform under load.",
  },
  {
    label: "Loose, corroded, or damaged battery terminals",
    detail: "Poor connections at the battery terminals reduce the current flow in both directions — to the starter motor and from the alternator back to the battery. Heavy corrosion on terminals is common and can prevent adequate charging even when the alternator and battery are both healthy. Clean terminals with a terminal brush and check that both cables are firmly clamped.",
  },
  {
    label: "Failing alternator",
    detail: "The alternator charges the battery while the engine runs. A failing alternator may not produce sufficient charge, causing the battery to slowly drain between drives. Signs of alternator issues include a battery warning light, dimming headlights when idling, or electrical accessories behaving oddly. A battery that goes flat repeatedly after being charged is a classic sign that the alternator is not recharging it adequately.",
  },
  {
    label: "Parasitic electrical drain",
    detail: "A parasitic draw is an electrical component that continues to consume power after the ignition is off and the vehicle is asleep. A small amount of parasitic draw is normal (clocks, memory functions, alarm systems). An abnormal drain — from a failed relay, a module that is not sleeping correctly, a faulty accessory, or an improperly wired aftermarket device — can drain even a healthy battery overnight. Diagnosing parasitic draw requires a multimeter and systematic elimination of circuits.",
  },
  {
    label: "Short-trip driving",
    detail: "Every cold engine start draws significant current from the battery. Under normal driving conditions, the alternator replenishes this charge over the following drive. If most trips are very short (under 10–15 minutes), the alternator may not have enough time to fully recharge the battery before the next cold start. Over time, the battery's state of charge slowly drops. Occasional longer drives or a battery charger/conditioner can help.",
  },
  {
    label: "Extreme temperatures",
    detail: "Cold weather significantly reduces battery capacity — a battery that performs adequately in summer may not have enough capacity to start the engine in winter. Heat accelerates battery degradation over time. If a battery is marginal in warm conditions, it may fail entirely when temperatures drop.",
  },
  {
    label: "Light or accessory left on",
    detail: "An interior light, boot light, glovebox light, or accessory left switched on can drain a battery overnight. Some vehicles have automatic cutoffs; others do not. Aftermarket accessories that draw current when the ignition is off are a common culprit.",
  },
];

const articleFaqs = [
  {
    question: "How Do I Know if It's the Battery or the Alternator?",
    answer:
      "One practical test: if the car starts fine after a jump or charge but the battery goes flat again within a short time of driving, the alternator is likely not recharging the battery. If the car starts fine after a charge and the battery stays charged over multiple drives, the battery may have been deeply discharged by a one-off event (such as a light left on), but the charging system is working. A mechanic can test both the battery and alternator properly with appropriate load-testing equipment.",
  },
  {
    question: "What Is a Parasitic Battery Drain?",
    answer:
      "A parasitic drain is electrical current flowing from the battery when the vehicle is off and should be in sleep mode. Some current draw is normal (typically under 50 milliamps for clocks, alarms, and memory functions). Anything significantly above this suggests a module, relay, or accessory is not sleeping correctly. Finding the source involves measuring current drain with a multimeter and removing fuses one at a time to isolate the circuit.",
  },
  {
    question: "Can Short Trips Kill a Car Battery?",
    answer:
      "Yes, over time. Starting an engine on a cold battery draws a large amount of current. The alternator needs a sustained period of driving to replenish this charge fully. If the vast majority of trips are under 10 minutes, the battery may gradually discharge over weeks or months. Using a battery conditioner or trickle charger on a vehicle that is mostly used for short trips can prevent this.",
  },
  {
    question: "How Long Should a Car Battery Last?",
    answer:
      "Most car batteries last between 3 and 5 years under typical conditions. Climate, driving habits, accessory load, and battery quality all affect lifespan. Batteries in hot climates tend to degrade faster. A battery that has been repeatedly deep-discharged (completely drained) has a reduced lifespan. Knowing when your battery was last replaced helps you anticipate when it may need attention.",
  },
  {
    question: "Will a Battery Light Always Come on if the Alternator Is Failing?",
    answer:
      "Not always. A failing alternator that is producing some charge but not enough may not trigger the battery warning light, which typically activates when voltage drops below a threshold. Subtle alternator issues can cause a slowly discharging battery without a warning light appearing until the situation is quite advanced. If the battery is discharging repeatedly and no other cause is found, having the alternator tested is worthwhile.",
  },
  {
    question: "How Do I Track Battery and Charging System History?",
    answer:
      "Log battery replacements with the date and mileage, and note the battery brand and specification. Record any jump-start events, charging system tests, and alternator work. Knowing the battery's age is one of the most useful data points when diagnosing repeated discharge. CarCare Diary lets you record all of this with notes per vehicle.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Does My Car Battery Keep Dying? Common Causes and Fixes",
    description:
      "Learn common reasons a car battery keeps dying, what to check first, and how to track battery and charging system repairs.",
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

export default function WhyDoesMyCarBatteryKeepDyingArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Does My Car Battery Keep Dying? Common Causes and Fixes",
    description:
      "Learn common reasons a car battery keeps dying, what to check first, and how to track battery and charging system repairs.",
    path: "/blog/why-does-my-car-battery-keep-dying",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why does my car battery keep dying?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          Common causes include{" "}
          <strong className="text-white">an old or weak battery,
          corroded terminals, a failing alternator, a parasitic
          electrical drain, short-trip driving, or extreme
          temperatures</strong>. If the battery discharges again
          after a jump or charge, the alternator or a parasitic
          drain is worth investigating next.
        </ShortAnswerBox>

        <ArticleH2>Common causes of a repeatedly failing battery</ArticleH2>
        <div className="flex flex-col gap-4 mb-6">
          {causes.map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What to check first</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Check the battery age — if it is over 3–4 years old, it is a likely suspect",
            "Inspect terminal connections for corrosion or looseness",
            "Check whether any lights or accessories were left on",
            "Note whether the battery only dies after sitting unused for a period",
            "Note whether it dies repeatedly even after full charging and normal driving",
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
            "When the battery was last replaced and the brand/specification used",
            "Any prior jump-start events and how frequently they occurred",
            "Whether any charging system work has been done previously",
            "Any recent electrical work or aftermarket accessories installed",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track battery and charging repairs</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log battery replacements with date, mileage,
          and notes (brand, specification, whether the alternator was tested),
          plus any jump-start events and subsequent repairs. Knowing the
          battery's age is one of the most useful pieces of information when
          diagnosing a repeated discharge problem.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-replace-car-battery", label: "when to replace a battery" },
            { to: "/blog/why-wont-my-car-start", label: "car won't start" },
            { to: "/blog/car-maintenance-schedule-by-mileage", label: "maintenance schedule" },
            { to: "/car-maintenance-tracker", label: "maintenance tracker" },
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
        This guide explains common causes, not a diagnosis. Battery
        and charging system faults benefit from proper load testing
        and electrical diagnosis by a mechanic with the right tools.
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
