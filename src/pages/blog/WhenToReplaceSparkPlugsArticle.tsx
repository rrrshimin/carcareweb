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

const ARTICLE_TITLE = "When To Replace Spark Plugs";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-spark-plugs";
const ARTICLE_LEDE =
  "Spark plug replacement intervals depend almost entirely on plug type. Copper plugs typically require changing around every 30,000–50,000 km; many modern iridium and platinum plugs are rated for 100,000 km or more. Running worn plugs causes misfires, rough idle, harder cold starts, and reduced fuel efficiency. Check your owner's manual for the correct interval and plug specification — not a generic figure.";
const CTA_TITLE = "Track spark plug replacements, part type, and mileage in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Replace Spark Plugs?",
    answer:
      "It depends on the plug type. Conventional copper spark plugs may need replacement more frequently — some schedules suggest every 30,000 miles. Platinum plugs commonly target around 60,000 miles. Iridium and double-platinum plugs are often specified for 100,000 miles or more in many modern vehicles. Your owner's manual specifies the plug type and interval for your engine — this is the correct answer for your vehicle.",
  },
  {
    question: "What Are The Signs Spark Plugs Need Replacing?",
    answer:
      "Common signs include difficulty starting the engine, rough idle or engine vibration, hesitation or stumbling during acceleration, reduced power, noticeably worse fuel economy, and a check engine light (often a misfire code). However, these symptoms can have many causes — spark plugs are a reasonable first thing to inspect, but should not be assumed to be the cause without investigation.",
  },
  {
    question: "Can Worn Spark Plugs Cause A Misfire?",
    answer:
      "Yes. Worn electrodes, deposits on the plug, or incorrect gap can cause a plug to fire inconsistently or not fire at all — resulting in a misfire on that cylinder. Modern engine management systems detect misfires and can log specific cylinder fault codes, which helps identify whether the plug or something else (ignition coil, injector, compression) is the cause.",
  },
  {
    question: "Can Worn Spark Plugs Damage A Catalytic Converter?",
    answer:
      "Yes. Persistent misfires caused by worn spark plugs send unburned fuel into the exhaust system. This can cause the catalytic converter to overheat and sustain damage, turning what would have been a simple spark plug replacement into a much more expensive repair. Addressing misfires promptly protects downstream components.",
  },
  {
    question: "Do All Cylinders Need New Plugs At The Same Time?",
    answer:
      "Yes. Spark plugs should be replaced as a complete set. All plugs in the engine have been used for the same number of miles and have experienced the same wear, even if symptoms have only appeared on one cylinder. Replacing all plugs at once ensures consistent ignition across the engine.",
  },
  {
    question: "How Do I Track Spark Plug Replacements?",
    answer:
      "Log each replacement with the date, mileage, plug type, and any notes. Recording the plug brand and part number is useful because plug specifications (type, heat range, gap) are engine-specific. CarCare Diary lets you log this with full notes and set a mileage-based reminder for the next interval.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace Spark Plugs: Mileage, Signs and Tips",
    description:
      "Learn when to replace spark plugs, warning signs of worn spark plugs, and how to track spark plug service in CarCare Diary.",
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

export default function WhenToReplaceSparkPlugsArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Replace Spark Plugs: Mileage, Signs and Tips",
    description: "Learn when to replace spark plugs, warning signs of worn spark plugs, and how to track spark plug service in CarCare Diary.",
    path: "/blog/when-to-replace-spark-plugs",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero category={ARTICLE_CATEGORY} readTime={ARTICLE_READ_TIME} title="When should you replace spark plugs?" lede={ARTICLE_LEDE} />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Copper plugs: often around{" "}
          <strong className="text-white">30,000 miles</strong>. Platinum plugs:
          commonly <strong className="text-white">60,000 miles</strong>. Iridium
          or double-platinum plugs: many vehicles specify{" "}
          <strong className="text-white">100,000 miles or more</strong>. Check
          your owner's manual for the plug type and interval specified for your
          engine.
        </ShortAnswerBox>

        <ArticleH2>Typical spark plug intervals by plug type</ArticleH2>
        <ArticleP>
          Spark plug longevity depends primarily on the electrode material.
          Higher-grade materials resist erosion longer, extending the service
          interval:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Copper / nickel alloy", interval: "~30,000 miles", note: "Found in older vehicles or as original equipment in some applications. Lower melting point means faster electrode wear. More frequent replacement required." },
            { label: "Platinum (single)", interval: "~60,000 miles", note: "Harder electrode material resists erosion better than copper. Common in vehicles from the 1990s–2000s era and in some current applications." },
            { label: "Double platinum / iridium", interval: "~100,000 miles", note: "Both electrodes use high-melting-point alloys. Common in many modern engines as original equipment. Some manufacturers specify longer intervals — check yours." },
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

        <ArticleP>
          Using the correct plug type specified for your engine matters — heat
          range, gap, and thread dimensions must match the manufacturer's
          specification. Installing the wrong plug can cause performance issues
          or engine damage.
        </ArticleP>

        <ArticleH2>Signs spark plugs may need replacing sooner</ArticleH2>
        <ArticleP>
          These symptoms are associated with ignition issues and can indicate
          worn spark plugs — but can also be caused by ignition coils,
          injectors, compression loss, or sensor faults. Check the plugs as a
          first step, but investigate further if replacing them does not
          resolve the issue:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "Difficulty starting the engine", detail: "A weak spark from a worn plug can make cold starts slow or require multiple attempts. Can also be caused by a failing battery, starter, or ignition coil." },
            { sign: "Rough idle or engine vibration", detail: "A plug misfiring intermittently causes the engine to run unevenly at idle. The car may shake or sound rough when stationary." },
            { sign: "Hesitation or stumbling during acceleration", detail: "Under load, a cylinder that is not firing consistently causes flat spots or stumbling when you press the accelerator. Other causes include fuel delivery and sensor issues." },
            { sign: "Reduced fuel economy", detail: "Incomplete combustion from a misfiring cylinder wastes fuel. A noticeable drop in economy over time — without other explanation — is worth checking." },
            { sign: "Check engine light (misfire codes)", detail: "Modern engine management systems log misfire events as fault codes (P0300 for random misfire, P0301–P0312 for specific cylinders). A code reader identifies which cylinder and helps narrow down the cause." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you delay spark plug replacement</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Progressive engine roughness and misfires",
            "Catalytic converter overheating from unburned fuel reaching the exhaust",
            "Reduced fuel efficiency and increased emissions",
            "Potential damage to ignition coils subjected to increased load from a degraded plug",
            "In severe cases, damage to cylinder walls or valves from sustained misfiring",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track spark plug replacements</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {["Date and mileage of replacement", "Plug type and brand installed (important for next replacement)", "Number of cylinders serviced", "Any notes about condition of old plugs or symptoms observed"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log spark plug replacements with date, mileage,
          part type, and notes. Set a mileage-based reminder for the next
          interval based on the plug type installed.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/vehicle-service-reminder-app", label: "vehicle service reminder app" },
            { to: "/blog/when-to-change-engine-oil", label: "when to change engine oil" },
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
      <span className="inline-block px-2.5 py-1 rounded-full border border-panel bg-surface font-medium">Last updated: August 2026</span>
    </div>
  );
}

function ShortAnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-accent/30 bg-brand/5 px-5 py-5 mb-8">
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Short answer</p>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
      <p className="text-xs text-muted/60 mt-3 italic">Use this as general guidance and always check your owner's manual for your exact vehicle.</p>
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
            {isOpen && <div className="px-5 pb-5"><p className="text-sm leading-relaxed text-muted">{faq.answer}</p></div>}
          </div>
        );
      })}
    </div>
  );
}
