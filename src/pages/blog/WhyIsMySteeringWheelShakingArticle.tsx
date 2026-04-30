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

const ARTICLE_TITLE = "Why Is My Steering Wheel Shaking?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-is-my-steering-wheel-shaking";
const ARTICLE_LEDE =
  "Steering wheel vibration is one of those symptoms that tends to get worse over time and often signals something that needs attention. When the shaking occurs — at highway speed, only during braking, after hitting a pothole, or constantly — helps point toward the likely cause. Some causes are minor, others are safety-relevant.";
const CTA_TITLE = "Track tire rotations, alignments, brake work, inspections, mileage, and notes in CarCare Diary";

const causesByScenario = [
  {
    heading: "Shaking at highway speed (70–120 km/h)",
    causes: [
      { label: "Wheel imbalance", detail: "Unbalanced wheels are the most common cause of high-speed steering vibration. As speed increases, even a small weight difference on a wheel creates an oscillating force that travels through the suspension to the steering wheel. Wheel balancing corrects this." },
      { label: "Damaged or out-of-round tyre", detail: "A tyre with a flat spot (from sitting in one position for a long time), a bulge, or internal structural damage can cause rhythmic vibration at speed. The tyre should be inspected and replaced if damaged." },
      { label: "Worn or loose wheel bearing", detail: "A worn wheel bearing can produce vibration, often accompanied by a humming or growling noise that increases with vehicle speed. Wheel bearings are safety-related — a failed bearing can cause wheel detachment." },
    ],
  },
  {
    heading: "Shaking when braking",
    causes: [
      { label: "Warped or uneven brake rotors", detail: "When a brake rotor has thickness variation or warping, applying the brakes causes the pad to ride over the uneven surface, producing a pulsing or shaking sensation through the brake pedal and sometimes the steering wheel. This is particularly noticeable under moderate to heavy braking." },
      { label: "Sticking brake caliper", detail: "A partially seized caliper creates uneven braking force between the two sides, which can cause the vehicle to pull and the steering wheel to shudder during braking." },
    ],
  },
  {
    heading: "Shaking after hitting a pothole or kerb",
    causes: [
      { label: "Wheel knocked out of alignment", detail: "A significant impact can knock one or more wheels out of alignment. Misalignment causes the tyres to run at an angle, which can produce vibration, pulling, and uneven tyre wear." },
      { label: "Bent wheel or damaged tyre", detail: "A pothole or kerb strike can bend an alloy wheel or cause internal tyre damage even when the tyre appears undamaged on the outside. Both can cause vibration and should be inspected." },
      { label: "Damaged CV joint or driveshaft", detail: "A sharp impact can damage a CV joint or driveshaft. CV joint vibration often presents as a shudder during acceleration or at low speed turns." },
    ],
  },
  {
    heading: "Shaking with uneven tyre wear",
    causes: [
      { label: "Tyres worn unevenly causing imbalance", detail: "Cupped, scalloped, or significantly uneven tyre wear creates an uneven rolling surface that generates vibration. Worn shock absorbers or suspension components often cause this pattern." },
      { label: "Worn shock absorbers or struts", detail: "Shock absorbers that are no longer dampening correctly allow the wheel to bounce on the road rather than staying in contact. This contributes to cupped tyre wear and steering vibration." },
    ],
  },
];

const articleFaqs = [
  {
    question: "Is Steering Wheel Vibration Dangerous?",
    answer:
      "It depends on the cause and severity. Mild vibration at a specific speed from wheel imbalance is an annoyance rather than an immediate danger, but it should still be corrected. Vibration during braking (brake rotor fault), vibration from a loose or damaged wheel bearing, or vibration after a wheel damage event should be treated as safety-relevant and inspected promptly. A worn wheel bearing in particular can fail catastrophically.",
  },
  {
    question: "Can Low Tyre Pressure Cause Steering Wheel Vibration?",
    answer:
      "Low tyre pressure does not typically cause the type of rhythmic vibration associated with wheel imbalance or rotor issues. However, significantly underinflated tyres affect handling, increase tyre wear unevenly, and can contribute to a general instability that affects steering feel. Checking and correcting tyre pressure is always a sensible first step.",
  },
  {
    question: "Can Wheel Balancing Fix Steering Wheel Vibration?",
    answer:
      "If the vibration occurs primarily at highway speed and is not present during braking, wheel balancing is often the correct fix. Balancing adds small weights to the wheel to compensate for uneven weight distribution. It is a standard, inexpensive service. If vibration persists after balancing, the tyres themselves may need inspection for damage or uneven wear, and alignment and suspension should be checked.",
  },
  {
    question: "What Is the Difference Between Wheel Balancing and Alignment?",
    answer:
      "Wheel balancing corrects uneven weight distribution on a wheel and tyre assembly, which causes vibration at speed. Wheel alignment adjusts the angle of the wheels relative to each other and the road, which affects straight-line tracking, tyre wear, and handling. Both are different services that address different problems — and a vehicle can need both.",
  },
  {
    question: "Can Worn Brake Rotors Cause Steering Wheel Vibration?",
    answer:
      "Yes. Brake rotors with thickness variation or surface warping cause the brake pads to grab and release unevenly as they rotate, producing a pulsing or shaking sensation. This is most noticeable in the brake pedal but often travels up to the steering wheel during braking. Rotor resurfacing or replacement, along with brake pad inspection, is the usual remedy.",
  },
  {
    question: "How Do I Track Tyre and Brake Service History?",
    answer:
      "Log tyre rotations, balancing sessions, alignment checks, brake pad and rotor changes with date and mileage. Knowing when these were last done is useful context when investigating vibration issues. CarCare Diary lets you record all of this per vehicle.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Is My Steering Wheel Shaking? Common Causes and What to Check",
    description:
      "Learn common causes of steering wheel shaking, when it may be unsafe, and how to track tire, brake and alignment service history.",
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

export default function WhyIsMySteeringWheelShakingArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Is My Steering Wheel Shaking? Common Causes and What to Check",
    description:
      "Learn common causes of steering wheel shaking, when it may be unsafe, and how to track tire, brake and alignment service history.",
    path: "/blog/why-is-my-steering-wheel-shaking",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why is my steering wheel shaking?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          <strong className="text-white">Shaking at highway speed</strong> → tyre imbalance, damaged tyre, or worn wheel bearing.{" "}
          <strong className="text-white">Shaking when braking</strong> → warped brake rotors or sticking caliper.{" "}
          <strong className="text-white">After a pothole or kerb hit</strong> → alignment, bent wheel, or tyre damage.
          When it happens is the most important clue.
        </ShortAnswerBox>

        <ArticleH2>Common causes by situation</ArticleH2>
        {causesByScenario.map((s) => (
          <div key={s.heading} className="mb-6">
            <h3 className="text-base font-semibold text-white mb-3 border-l-2 border-accent pl-3">{s.heading}</h3>
            <div className="flex flex-col gap-3">
              {s.causes.map((item) => (
                <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
                  <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
                  <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <ArticleH2>When to stop driving</ArticleH2>
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <ul className="flex flex-col gap-1.5">
              {[
                "The vibration is sudden and severe, particularly after an impact",
                "Braking is noticeably affected — longer stopping distances or pulling",
                "A grinding or humming noise accompanies the vibration",
                "The wheel appears bent or the tyre is visibly damaged",
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
            "Tyre pressure — check all four against the doorjamb sticker specification",
            "Visually inspect tyres for bulges, flat spots, or uneven wear patterns",
            "Note exactly when the shaking occurs — cruising, braking, turning, or accelerating",
            "Check whether the vehicle is also pulling to one side",
            "Check whether the shaking is only in the steering wheel or also in the seat/floor",
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
            "When tyres were last balanced and rotated",
            "Last wheel alignment date and whether any fault was noted",
            "Brake rotor and pad service history",
            "Any prior impact events (pothole, kerb, low-speed collision)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track tyre and brake service history</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log tyre rotations, balancing, alignments,
          and brake work with date and mileage. Keeping a record means you
          always know when something was last done and can share full context
          with a mechanic.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/why-is-my-car-shaking", label: "car shaking causes" },
            { to: "/blog/when-to-check-tire-pressure", label: "tyre pressure" },
            { to: "/blog/when-to-rotate-tires", label: "tyre rotations" },
            { to: "/blog/when-to-get-wheel-alignment", label: "wheel alignment" },
            { to: "/blog/when-to-replace-brake-rotors", label: "brake rotors" },
            { to: "/blog/why-are-my-tires-wearing-unevenly", label: "uneven tyre wear" },
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
        This guide explains common causes, not a diagnosis. Steering
        vibration affecting braking, handling, or that appeared after
        an impact should be treated as safety-relevant — stop driving
        when safe and seek inspection.
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
