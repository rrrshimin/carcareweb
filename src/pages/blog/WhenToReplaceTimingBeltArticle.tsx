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

const ARTICLE_TITLE = "When To Replace a Timing Belt";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-timing-belt";
const ARTICLE_LEDE =
  "Timing belt replacement is one of the most critical maintenance items on vehicles that have one. Manufacturers specify replacement by both mileage and age, because rubber degrades over time regardless of how little a car is driven. The exact interval must come from your owner's manual — not a general guideline. On interference engines, a snapped timing belt can cause irreparable engine damage and a repair bill that often exceeds the value of the car.";
const CTA_TITLE = "Track timing belt replacement mileage and date in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Replace a Timing Belt?",
    answer:
      "Many manufacturers specify replacement somewhere in the range of 60,000–100,000 miles, but also impose an age limit — often 5–7 years — because rubber degrades over time regardless of mileage. A low-mileage vehicle that is several years old may still need a timing belt replacement based on age. Your owner's manual provides the correct mileage and age interval for your engine.",
  },
  {
    question: "What Is The Difference Between a Timing Belt and a Timing Chain?",
    answer:
      "A timing belt is made of reinforced rubber and requires scheduled replacement at manufacturer-specified intervals. A timing chain is made of metal links similar to a bicycle chain and is generally designed to last the life of the engine with proper lubrication — it typically does not have a scheduled replacement interval. Your owner's manual or a quick search by engine code will confirm which your vehicle has.",
  },
  {
    question: "What Is An Interference Engine?",
    answer:
      "In an interference engine, the pistons and valves use the same space in the cylinder at different times, controlled precisely by the timing belt. If the timing belt breaks, the pistons and valves collide, causing bent valves, damaged pistons, and potentially a destroyed cylinder head or block. A non-interference (also called 'free-running') engine has enough clearance that the engine simply stops if the belt breaks — expensive to repair, but the internal damage from collision is avoided.",
  },
  {
    question: "Does The Timing Belt Give Warning Before It Fails?",
    answer:
      "Often, no. A timing belt can fail without any warning. Some vehicles develop a ticking noise from the engine as the belt ages, or the engine may be harder to start, but belt failure frequently happens with no advance indication. This is a key reason why following the manufacturer's service interval — rather than waiting for symptoms — is especially important for timing belts.",
  },
  {
    question: "Should I Replace The Timing Belt Kit At The Same Time?",
    answer:
      "Yes, almost all mechanics recommend replacing the timing belt together with the water pump, tensioner, and idler pulleys at the same time. These components have similar service lives and access to them requires the same labour as the belt itself. Replacing them together avoids paying the same labour cost twice if a pulley fails shortly after the belt is changed.",
  },
  {
    question: "How Do I Track Timing Belt Replacement?",
    answer:
      "Log the date, mileage, and any notes — including whether the water pump and tensioner were replaced at the same time. Because age matters as well as mileage, recording the date is just as important as the mileage reading. CarCare Diary lets you set reminders by mileage or date so you can track both thresholds.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace Timing Belt: Mileage, Age and Warning Signs",
    description:
      "Learn when to replace a timing belt, why timing belt service matters, and how to track replacement mileage and date.",
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

export default function WhenToReplaceTimingBeltArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Replace Timing Belt: Mileage, Age and Warning Signs",
    description: "Learn when to replace a timing belt, why timing belt service matters, and how to track replacement mileage and date.",
    path: "/blog/when-to-replace-timing-belt",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero category={ARTICLE_CATEGORY} readTime={ARTICLE_READ_TIME} title="When should you replace a timing belt?" lede={ARTICLE_LEDE} />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Many manufacturers specify replacement around{" "}
          <strong className="text-white">60,000–100,000 miles</strong>, but
          also by <strong className="text-white">age (often 5–7 years)</strong>{" "}
          because rubber degrades over time regardless of mileage. Check your
          owner's manual — this is one item where following the exact schedule
          matters.
        </ShortAnswerBox>

        <ArticleH2>Timing belt vs timing chain</ArticleH2>
        <ArticleP>
          Before checking your interval, confirm whether your vehicle has a
          timing belt or timing chain:
        </ArticleP>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            { type: "Timing belt", detail: "Made of reinforced rubber. Has a scheduled replacement interval by both mileage and age. Quieter than a chain. Requires periodic replacement to avoid failure.", urgent: false },
            { type: "Timing chain", detail: "Made of metal links. Designed to last the life of the engine with proper oil maintenance. Generally does not have a scheduled replacement interval. Louder than a belt.", urgent: false },
          ].map((item) => (
            <div key={item.type} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-2">{item.type}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Typical timing belt replacement intervals</ArticleH2>
        <ArticleP>
          Intervals vary by manufacturer and engine. Both mileage and age
          thresholds apply — whichever is reached first triggers the need for
          replacement:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Mileage interval", note: "Often specified in the range of 60,000–100,000 miles depending on the engine. Some older engines specify less. Some newer engines specify more. Your owner's manual is the only accurate source for your vehicle." },
            { label: "Age interval", note: "Many manufacturers specify replacement every 5–7 years regardless of mileage. A vehicle driven only 10,000 miles per year can still need a timing belt replacement based on age alone. Rubber hardens and becomes brittle as it ages." },
            { label: "Timing belt kit recommendation", note: "Most mechanics recommend replacing the tensioner, idler pulleys, and water pump at the same time as the belt. These components have similar service lives and require the same labour to access. Replacing them together is much more cost-effective." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1.5">Important: interference engines</p>
              <p className="text-sm leading-relaxed text-muted">
                If your engine is an interference engine and the timing belt
                breaks, the pistons and valves will collide. This typically
                causes bent valves, damaged pistons, and potential cylinder head
                or block damage — often resulting in a repair or replacement
                cost of several thousand dollars. On interference engines,
                timing belt replacement must not be deferred.
              </p>
            </div>
          </div>
        </div>

        <ArticleH2>Signs a timing belt may be due</ArticleH2>
        <ArticleP>
          Timing belts often give little or no warning before failure. The most
          reliable indicator is simply the mileage and age schedule. However,
          some signs that may indicate timing belt wear or a related issue:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "Ticking noise from the engine", detail: "An aging or poorly tensioned timing belt can produce a rhythmic ticking or slapping sound. However, ticking can also come from low oil, a worn valve train, or other sources — this alone is not confirmation of a belt issue." },
            { sign: "Difficulty starting the engine", detail: "If the timing belt has slipped on the camshaft sprocket, valve timing can be off, causing hard starts or a very rough idle after starting." },
            { sign: "Engine misfires", detail: "Incorrect valve timing caused by belt wear or slippage can cause misfires. This can also be caused by many other ignition or fuel delivery issues." },
            { sign: "Oil leak near timing cover", detail: "A leak from the crankshaft or camshaft seals near the timing cover can contaminate the timing belt, significantly shortening its life. If such a leak is found, the seals and belt should be addressed together." },
            { sign: "Overdue by mileage or age alone", detail: "This is the most reliable sign. If the vehicle has exceeded the manufacturer's mileage or age interval, replacement is due regardless of whether symptoms are present." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you miss timing belt replacement</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Belt may break without warning at any time",
            "On interference engines: bent valves, damaged pistons, and potentially destroyed cylinder head — major engine damage",
            "On non-interference engines: engine stops immediately and will not restart until the belt is replaced",
            "Towing and emergency repair costs in addition to belt replacement",
            "Risk of accident if the engine stops at speed",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track timing belt replacement</ArticleH2>
        <ArticleP>
          Because both mileage and age matter for timing belt replacement,
          recording both is important:
        </ArticleP>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of replacement (to track the age interval)",
            "Mileage at replacement (to track the mileage interval)",
            "Whether timing belt kit components (tensioner, idler pulleys, water pump) were replaced at the same time",
            "Any notes about engine seals or other work done during the same service",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log timing belt replacement with full notes
          and set both mileage-based and date-based reminders for the next
          service window.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/car-service-history-app", label: "car service history app" },
            { to: "/blog/when-to-replace-spark-plugs", label: "when to replace spark plugs" },
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
