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

const ARTICLE_TITLE = "Why Are My Tires Wearing Unevenly?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-are-my-tires-wearing-unevenly";
const ARTICLE_LEDE =
  "Uneven tire wear is one of those problems that tends to get worse the longer it goes unaddressed. A tire wearing faster on one edge, developing a scalloped surface, or showing significantly more wear on one side than another is telling you something about alignment, pressure, suspension, or rotation history. Catching it early saves tires — and sometimes identifies a safety concern.";
const CTA_TITLE = "Track tire rotations, pressure checks, alignments, tire replacements, and notes in CarCare Diary";

const wearPatterns = [
  {
    label: "Centre tread wear (both sides fine, middle worn)",
    cause: "Overinflation",
    detail: "When a tire is overinflated, the tyre bulges in the middle and contacts the road on the centre strip rather than across the full tread width. The centre wears faster than the edges.",
  },
  {
    label: "Edge wear (both edges worn, centre fine)",
    cause: "Underinflation",
    detail: "An underinflated tire sags and contacts the road on both outer edges more than the centre. This produces wear on both shoulders while the centre tread looks relatively fresh.",
  },
  {
    label: "Inside edge wear (inner shoulder worn, outer fine)",
    cause: "Negative camber or alignment fault",
    detail: "The inside edge wearing more than the outside points to negative camber — the top of the wheel is tilting inward. This can be a designed-in alignment characteristic (sporty vehicles) or the result of worn control arm bushings, ball joints, or an alignment that is out of spec.",
  },
  {
    label: "Outside edge wear (outer shoulder worn, inner fine)",
    cause: "Positive camber or cornering wear",
    detail: "Worn outer edges without inner edge wear can indicate positive camber, aggressive cornering habits, or worn suspension components. Less common than inside edge wear.",
  },
  {
    label: "One-sided wear (full sidewall worn on one side)",
    cause: "Alignment fault — camber or toe out of spec",
    detail: "When one complete side of the tread is consistently more worn than the other, wheel alignment — specifically camber or toe — is likely outside specification. A wheel alignment check is the starting point.",
  },
  {
    label: "Cupping / scalloping (dips and raised patches across tread)",
    cause: "Worn shock absorbers / struts, wheel imbalance",
    detail: "A scalloped or cupped pattern where the tread alternates between high and low spots is a strong sign of worn shock absorbers or struts that are no longer keeping the tire in firm contact with the road. Wheel imbalance can also contribute. This wear pattern may produce vibration or noise.",
  },
  {
    label: "Feathering (tread smooth one side, sharp the other)",
    cause: "Toe misalignment",
    detail: "Feathered tread — smooth on one side of each block, sharp on the other — indicates excessive toe-in or toe-out. This means the tyres are effectively dragging sideways slightly as the vehicle moves forward, wearing the edges of the tread blocks asymmetrically.",
  },
];

const articleFaqs = [
  {
    question: "Can Incorrect Tire Pressure Cause Uneven Wear?",
    answer:
      "Yes. Overinflation causes the centre of the tread to wear faster. Underinflation causes both edges to wear faster. Neither is good for tire longevity or handling. Checking and maintaining the correct pressure — listed on the doorjamb sticker, not the maximum pressure moulded into the tyre sidewall — is one of the simplest ways to prevent uneven wear.",
  },
  {
    question: "How Often Should Tires Be Rotated to Prevent Uneven Wear?",
    answer:
      "Most manufacturers recommend rotating tires every 8,000–12,000 km or at every second oil change, but the specific recommendation varies by vehicle. Front and rear tires wear differently due to the weight distribution and the forces involved in steering and braking. Regular rotation evens this out across all four tires.",
  },
  {
    question: "Does Wheel Alignment Affect Tire Wear?",
    answer:
      "Yes, significantly. Misaligned wheels — particularly incorrect camber or toe — cause tires to run at an angle or lean rather than rolling straight. This produces accelerated, uneven wear. Alignment should be checked after any significant impact (pothole, kerb strike), suspension work, or when uneven wear is noticed.",
  },
  {
    question: "Can Worn Shock Absorbers Cause Uneven Tire Wear?",
    answer:
      "Yes. Worn shock absorbers or struts allow the tire to bounce and skip on the road surface rather than maintaining firm, consistent contact. This produces the cupped or scalloped wear pattern. If your tires show cupping and the vehicle has high mileage, having the shocks/struts inspected is worthwhile.",
  },
  {
    question: "Is It Safe to Keep Driving on Unevenly Worn Tires?",
    answer:
      "It depends on the severity. Mild uneven wear with plenty of tread remaining can be monitored while the underlying cause is addressed. Severely worn areas that are approaching the wear indicators, or tyres with structural damage, should be replaced. Uneven wear can also affect handling, braking, and wet-weather traction — all safety-relevant factors.",
  },
  {
    question: "How Do I Track Tire Maintenance?",
    answer:
      "Log each tire rotation, pressure check, alignment, and tire replacement with date and mileage. Noting the wear pattern at each inspection gives you useful context if an issue develops. CarCare Diary lets you add notes to any service entry so you have a full history per vehicle.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Are My Tires Wearing Unevenly? Common Causes and Fixes",
    description:
      "Learn common causes of uneven tire wear, what to check first, and how to track tire rotations, pressure checks and alignments.",
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

export default function WhyAreMyTiresWearingUnevenlyArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Are My Tires Wearing Unevenly? Common Causes and Fixes",
    description:
      "Learn common causes of uneven tire wear, what to check first, and how to track tire rotations, pressure checks and alignments.",
    path: "/blog/why-are-my-tires-wearing-unevenly",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why are my tires wearing unevenly?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          Common causes include{" "}
          <strong className="text-white">incorrect tire pressure,
          wheel alignment out of spec, missed tire rotations, worn
          suspension components (shocks/struts, bushings), or wheel
          imbalance</strong>. The wear pattern itself helps point to
          the likely cause.
        </ShortAnswerBox>

        <ArticleH2>Tire wear patterns and what they suggest</ArticleH2>
        <p className="text-sm text-muted mb-4">
          These are common associations, not a definitive diagnosis.
          Multiple causes can produce similar patterns. A tyre
          professional or mechanic can give a more accurate assessment.
        </p>
        <div className="flex flex-col gap-4 mb-6">
          {wearPatterns.map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <div className="flex flex-wrap items-start gap-2 mb-1.5">
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium whitespace-nowrap">
                  Often: {item.cause}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>When to stop driving</ArticleH2>
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <ul className="flex flex-col gap-1.5">
              {[
                "Tread is worn down to the wear indicator bars — the tire needs replacement",
                "The tyre has structural damage, bulges, or exposed cords",
                "The vehicle pulls strongly to one side or handling is significantly affected",
                "Vibration has become severe, particularly at highway speeds",
              ].map((item) => (
                <li key={item} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red-400 shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ArticleH2>What to check first</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Tyre pressure — check cold and compare to the spec on the doorjamb sticker",
            "Last tire rotation — if overdue, schedule one and inspect wear at that time",
            "Whether the vehicle pulls to one side while driving straight",
            "Whether there is vibration, particularly at certain speeds",
            "Visually inspect all four tires for the specific wear pattern described above",
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
            "When tires were last rotated and at what mileage",
            "Last wheel alignment date and whether any fault was noted",
            "Any recent suspension work or known impacts (potholes, kerb strikes)",
            "History of tire pressure checks and whether pressure was persistently low",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track tire maintenance</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log each tire rotation, pressure
          check, alignment, and tire replacement with date, mileage,
          and notes. Tracking when rotations were done makes it easy
          to see if wear developed between service intervals.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-check-tire-pressure", label: "tire pressure" },
            { to: "/blog/when-to-rotate-tires", label: "tire rotations" },
            { to: "/blog/when-to-get-wheel-alignment", label: "wheel alignment" },
            { to: "/blog/when-to-replace-tires", label: "when to replace tires" },
            { to: "/blog/car-maintenance-schedule-by-mileage", label: "maintenance by mileage" },
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
        This guide explains common causes, not a diagnosis. If the issue
        affects safety, steering, or tires are severely worn, have the
        vehicle inspected by a qualified tyre professional or mechanic.
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
