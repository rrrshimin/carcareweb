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

const ARTICLE_TITLE = "When To Replace Windshield Wipers";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-windshield-wipers";
const ARTICLE_LEDE =
  "Wiper blades are one of the simpler maintenance items on a car, but they are directly tied to visibility and safety. Many drivers replace wiper blades every 6–12 months, but sun exposure, ice, dirt, and blade quality can cause them to wear out sooner. The clearest indicator is how well they perform — not just the calendar.";
const CTA_TITLE = "Log wiper blade replacements and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Replace Wiper Blades?",
    answer:
      "A common guideline is every 6–12 months, but this varies significantly by climate. In regions with intense sun, heat, or frequent ice scraping, blades may degrade faster. In milder climates, good-quality blades may last longer. Performance — not just elapsed time — is the most reliable indicator. If the blades are streaking, skipping, or leaving missed areas, they need replacing regardless of age.",
  },
  {
    question: "What Are The Signs Wiper Blades Need Replacing?",
    answer:
      "Common signs include streaking or smearing water instead of clearing it cleanly, skipping or juddering across the windshield, squeaking or chattering sounds during operation, visible splitting or cracking of the rubber edge, and areas of the windshield that the blade misses entirely. Any of these affect visibility in wet conditions and should be addressed promptly.",
  },
  {
    question: "Do I Need to Replace Front and Rear Wiper Blades at the Same Time?",
    answer:
      "Not necessarily, but the rear wiper should be included in your inspection at the same time. Rear wipers on hatchbacks, SUVs, and wagons experience similar degradation to front wipers and are often overlooked. They typically use a shorter, simpler blade than the front wipers and are usually replaced with a standard or specific rear wiper blade for the vehicle.",
  },
  {
    question: "Does Wiper Blade Type Affect Longevity?",
    answer:
      "Yes. Traditional framed wipers are the most common and generally the least expensive. Beam or bracketless wipers use a pre-curved blade without a metal frame, which can provide more even pressure across the blade and may last longer in some conditions. Hybrid wipers combine a frame with an aerodynamic cover. Higher quality blades within any type generally outperform budget options.",
  },
  {
    question: "Can I Replace Wiper Blades Myself?",
    answer:
      "Yes. Wiper blades are one of the most accessible DIY maintenance items. Most blades clip onto a hook-style arm and can be replaced in a few minutes without tools. The correct blade length for your vehicle — which can differ between driver and passenger sides, and may differ again for the rear — is specified in the owner's manual or on a chart in the auto parts store.",
  },
  {
    question: "How Do I Track Wiper Blade Replacements?",
    answer:
      "Log the date of replacement and the blade type or brand if you want to track which products you've been happy with. CarCare Diary lets you record wiper replacements with notes so you can see when the last set was installed and plan the next change accordingly.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace Windshield Wipers: Signs and Timing",
    description:
      "Learn when to replace windshield wipers, signs your wiper blades are worn, and how to track replacements in CarCare Diary.",
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

export default function WhenToReplaceWindshieldWipersArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Replace Windshield Wipers: Signs and Timing",
    description:
      "Learn when to replace windshield wipers, signs your wiper blades are worn, and how to track replacements in CarCare Diary.",
    path: "/blog/when-to-replace-windshield-wipers",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you replace windshield wipers?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Many drivers replace wiper blades every{" "}
          <strong className="text-white">6–12 months</strong>, but the best
          indicator is performance — if blades are streaking, skipping, or
          leaving missed areas, replace them regardless of age.
        </ShortAnswerBox>

        <ArticleH2>Typical wiper blade replacement interval</ArticleH2>
        <ArticleP>
          Wiper blades degrade from UV exposure, temperature cycling, ozone,
          and physical contact with the windshield. The rate of degradation
          depends on where you live and how often you use them:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Hot, sunny climates",
              note: "UV radiation and heat accelerate rubber degradation. Blades parked in direct sun can harden and crack more quickly than in temperate climates. More frequent inspection and replacement may be needed.",
            },
            {
              label: "Cold climates with ice and snow",
              note: "Ice scraping, freezing to the windshield, and operating in extreme cold can damage blade edges. Using winter-specific wiper blades in these conditions can extend the life of the standard blades kept for warmer months.",
            },
            {
              label: "Mild climates with moderate use",
              note: "Blades in temperate climates with moderate rainfall may approach or exceed 12 months before showing significant performance degradation, particularly with higher quality blades.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs wiper blades need replacing</ArticleH2>
        <ArticleP>
          Wiper performance is easy to evaluate — simply observe what they do
          the next time it rains:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "Streaking or smearing",
              detail: "The blade pushes water aside but leaves streaks or a film rather than clearing the windshield cleanly. Usually caused by a hardened or contaminated blade edge.",
            },
            {
              sign: "Skipping or chattering",
              detail: "The blade hops or judders across the glass rather than moving smoothly. Can be caused by a warped blade, worn arm spring tension, or debris on the blade.",
            },
            {
              sign: "Squeaking or screeching",
              detail: "Noise during operation can indicate a dry or hardened blade edge, a dirty windshield, or the blade making inconsistent contact with the glass.",
            },
            {
              sign: "Visible rubber damage",
              detail: "Inspect the blade edge for cracking, splitting, tearing, or sections of rubber that have separated from the backing. Any visible damage to the rubber affects cleaning performance.",
            },
            {
              sign: "Missed areas",
              detail: "If the blade consistently fails to contact a section of the windshield, the blade is no longer making even contact across its full length.",
            },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Why wiper blades matter for safety</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Reduced forward visibility in rain increases stopping distance and reaction time",
            "Streaks and smears at night or in oncoming headlights significantly worsen glare",
            "A sudden heavy rainstorm with worn blades leaves little time to address the problem",
            "Replacing blades is one of the least expensive maintenance items on a car relative to its safety impact",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track wiper blade replacements</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of replacement",
            "Front and/or rear blade — note which were replaced",
            "Blade type or brand (useful if you want to repeat or avoid a product)",
            "Any notes about season or reason for replacement",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log wiper replacements with date and notes.
          A quick log entry each time you change the blades gives you an easy
          reference for when the next change is likely due.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/blog/when-to-replace-car-battery", label: "when to replace a car battery" },
            { to: "/blog/when-to-check-tire-pressure", label: "when to check tire pressure" },
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
