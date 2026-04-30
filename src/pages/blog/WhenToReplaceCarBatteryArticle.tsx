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

const ARTICLE_TITLE = "When To Replace a Car Battery";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-car-battery";
const ARTICLE_LEDE =
  "Many car batteries last around 3–5 years, but real-world lifespan varies significantly depending on climate, driving habits, electrical load, and battery quality. Heat is particularly hard on batteries. Knowing the age of your current battery and watching for early warning signs gives you time to replace it on your terms rather than reacting to a failed start.";
const CTA_TITLE = "Track battery replacement date, brand, and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Long Does a Car Battery Last?",
    answer:
      "Many car batteries last roughly 3–5 years under typical conditions, but this varies considerably. Hot climates accelerate battery degradation by increasing the rate of internal chemical reactions and fluid evaporation. Cold climates reduce a battery's available power, making a marginal battery much more likely to fail during a cold start. High electrical loads and frequent short trips that don't allow the battery to fully recharge also shorten lifespan.",
  },
  {
    question: "What Are The Warning Signs of a Failing Car Battery?",
    answer:
      "Common signs include slow or sluggish engine cranking when starting, dim headlights or interior lights especially when idling, a clicking sound when turning the key with no start, the battery warning light illuminating on the dashboard, visible corrosion on the battery terminals, and needing jump starts more than once. These symptoms can also have other causes — alternator, starter, and wiring issues can produce similar symptoms — so the battery should be tested, not just assumed to be the cause.",
  },
  {
    question: "How Can I Test a Car Battery?",
    answer:
      "Many auto parts stores offer free battery testing with a load tester or conductance tester. Mechanics can also test the battery and the charging system at the same time. A simple multimeter check of resting voltage gives a basic indication — a healthy fully charged battery is typically around 12.6 volts, while a significantly depleted battery may read 12.0 volts or lower — but a proper load test is more reliable than resting voltage alone.",
  },
  {
    question: "Should I Replace the Battery Before Winter or Summer?",
    answer:
      "Testing the battery before a season with high demand is a reasonable precaution, particularly if the battery is over 3 years old. Cold weather significantly reduces available cranking power, so a battery that is marginal in autumn may fail to start the car on a cold winter morning. Hot weather is actually harder on the battery itself over time, so a battery stressed by a hot summer may be weakened going into winter.",
  },
  {
    question: "Why Does Corrosion Appear on Battery Terminals?",
    answer:
      "White or blue-white powdery build-up on battery terminals is a normal by-product of the chemical processes inside the battery. Light corrosion can be cleaned off and does not necessarily mean the battery needs replacement. Heavy or persistent corrosion, or corrosion that returns quickly after cleaning, can indicate a battery that is overcharging or venting excessively — worth having the charging system checked.",
  },
  {
    question: "How Do I Track Battery Replacement?",
    answer:
      "Log the date of replacement and the battery brand or specification. Some batteries have a manufacture date code on the label. Recording when the battery was replaced helps you track its age and plan ahead for the next replacement. CarCare Diary lets you log battery service with date, notes, and any relevant details about the replacement.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace a Car Battery: Age, Signs and Tips",
    description:
      "Learn when to replace a car battery, warning signs of a weak battery, and how to track battery replacement history in CarCare Diary.",
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

export default function WhenToReplaceCarBatteryArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Replace a Car Battery: Age, Signs and Tips",
    description:
      "Learn when to replace a car battery, warning signs of a weak battery, and how to track battery replacement history in CarCare Diary.",
    path: "/blog/when-to-replace-car-battery",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you replace a car battery?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Many car batteries last around{" "}
          <strong className="text-white">3–5 years</strong>, but heat, cold,
          frequent short trips, and high electrical loads can shorten battery
          life. If your battery is over 3 years old and showing symptoms,
          having it tested is a good first step.
        </ShortAnswerBox>

        <ArticleH2>How long does a car battery typically last</ArticleH2>
        <ArticleP>
          Battery lifespan is influenced by several factors beyond just age:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Climate",
              note: "Heat is the primary cause of battery degradation — it accelerates internal chemical reactions and causes fluid evaporation inside the battery. Cold weather doesn't degrade the battery as quickly, but it dramatically reduces available cranking power, making a weakened battery much more likely to fail during a cold start.",
            },
            {
              label: "Driving habits",
              note: "Frequent short trips don't allow the alternator enough time to fully recharge the battery. If the battery regularly runs partially depleted and is not fully recharged, it ages faster. Long highway trips are generally better for battery health.",
            },
            {
              label: "Electrical load",
              note: "Vehicles with many accessories drawing power — heated seats, aftermarket audio, multiple USB devices — place additional load on the battery and charging system. Parking with accessories left on can also drain the battery.",
            },
            {
              label: "Battery quality and design",
              note: "Premium and AGM (absorbent glass mat) batteries are generally more resilient than standard lead-acid batteries, particularly in temperature extremes. The battery specified for your vehicle's electrical demands is the appropriate choice.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs a car battery may need replacing</ArticleH2>
        <ArticleP>
          These signs can point to a failing battery, but some can also be
          caused by a faulty alternator, starter, or wiring. Testing the
          battery and charging system together gives the most reliable answer:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "Slow or sluggish engine cranking",
              detail: "The engine turns over more slowly than usual before starting, or takes several attempts. This is one of the most common indicators of a battery with reduced capacity.",
            },
            {
              sign: "Dim headlights or interior lights",
              detail: "Lights that appear dimmer than normal, especially when idling with the engine off, can indicate the battery is not holding a full charge.",
            },
            {
              sign: "Clicking sound when turning the key",
              detail: "A rapid clicking with no engine start typically means the battery does not have enough charge to engage the starter motor. A single loud click can indicate a starter issue.",
            },
            {
              sign: "Battery warning light on dashboard",
              detail: "The battery light can indicate a charging system problem — the alternator may not be charging the battery properly — as well as a failing battery itself. Investigate promptly.",
            },
            {
              sign: "Corrosion on battery terminals",
              detail: "Powdery white or blue-white deposits on the battery terminals are normal in small amounts and can be cleaned. Heavy or rapidly returning corrosion may indicate the battery is overcharging or venting.",
            },
            {
              sign: "Needing jump starts more than once",
              detail: "Requiring a jump start once after an accidental discharge is common. Needing jump starts repeatedly without an obvious drain suggests the battery can no longer hold sufficient charge.",
            },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you delay battery replacement</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Unexpected failure — the car will not start, potentially at an inconvenient location",
            "Repeated deep discharges from a failing battery can stress the alternator over time",
            "Risk of being stranded without warning, since battery failure is often sudden",
            "Towing or jump start costs if the car fails away from home",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track battery replacement</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of replacement",
            "Battery brand and specification (group size, CCA rating if noted)",
            "Mileage at replacement",
            "Any notes about symptoms before replacement or testing results",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log battery replacement with date, notes, and
          mileage. Knowing when the current battery was installed helps you
          track its age and plan ahead when it approaches 3–5 years.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/vehicle-service-reminder-app", label: "vehicle service reminder app" },
            { to: "/blog/car-maintenance-schedule-by-mileage", label: "maintenance schedule by mileage" },
            { to: "/blog/when-to-replace-windshield-wipers", label: "when to replace windshield wipers" },
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
