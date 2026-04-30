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

const ARTICLE_TITLE = "Why Is My Car Pulling to One Side?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-is-my-car-pulling-to-one-side";
const ARTICLE_LEDE =
  "A car that drifts or pulls to one side while driving requires constant steering correction and is worth investigating. Whether it happens while cruising, only when braking, or after a recent event like a pothole or tyre change all help narrow the likely cause. Pulling during braking is more safety-critical and should be addressed promptly.";
const CTA_TITLE = "Track alignments, tire pressure checks, tire service, brake work, and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "Is Pulling to One Side a Safety Issue?",
    answer:
      "It depends on the cause and severity. Mild pulling from uneven tyre pressure or minor alignment drift is inconvenient rather than immediately dangerous, but should still be addressed. Pulling during braking — particularly if it is sudden, pronounced, or getting worse — is more safety-relevant as it indicates an imbalance in the braking system. Any severe or sudden pulling should be inspected promptly.",
  },
  {
    question: "Can Tyre Pressure Cause a Car to Pull?",
    answer:
      "Yes. Significantly different tyre pressure between the left and right tyres on the same axle creates unequal rolling resistance, which causes the vehicle to drift toward the side with the lower pressure. This is one of the simplest things to check first — it is free to check and easy to correct.",
  },
  {
    question: "What Is Wheel Alignment and How Does It Affect Pulling?",
    answer:
      "Wheel alignment refers to the angles of the wheels relative to each other and the road surface. When alignment is out of specification — particularly the 'toe' setting — the wheels are pointing slightly inward or outward rather than straight ahead. This causes the vehicle to drift to one side and accelerates tyre wear. Alignment can be knocked out by potholes, kerb impacts, or simply through wear over time.",
  },
  {
    question: "Can a Sticking Brake Caliper Cause Pulling?",
    answer:
      "Yes. A partially seized brake caliper holds the brake pad against the rotor even when you are not pressing the brake pedal, creating drag on one side. This can cause the car to pull toward the affected side. The affected wheel may also feel warm to the touch after driving, and brake pad wear will be uneven between the two sides. A sticking caliper is both a braking system issue and a safety concern.",
  },
  {
    question: "Why Does My Car Pull Only When Braking?",
    answer:
      "Pulling only during braking points to an imbalance in the braking system rather than alignment. Common causes include a seized caliper, a brake hose that is internally blocked and not releasing pressure evenly, uneven brake pad wear, or a warped rotor on one side. Any pulling during braking should be inspected — braking imbalance can cause loss of control during emergency stops.",
  },
  {
    question: "Does Road Camber Cause Pulling?",
    answer:
      "Yes. Most roads are slightly crowned (higher in the centre, sloping to the edges for drainage), and a vehicle will naturally drift slightly toward the road edge on a cambered road. This is normal and distinct from a vehicle that pulls consistently regardless of the road surface. If you are unsure, try driving on a flat, level surface — if the pull persists, it is not just road camber.",
  },
  {
    question: "How Do I Track Alignment and Tyre Service?",
    answer:
      "Log each alignment check with date, mileage, and any adjustments made. Record tyre rotations and pressure checks similarly. Knowing when alignment was last done and whether it was corrected is useful context when investigating a pulling issue. CarCare Diary lets you record all of this per vehicle.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Is My Car Pulling to One Side? Common Causes and Safety Tips",
    description:
      "Learn why a car may pull left or right, what to check first, and how to track tire, alignment and brake service history.",
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

export default function WhyIsMyCarPullingToOneSideArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Is My Car Pulling to One Side? Common Causes and Safety Tips",
    description:
      "Learn why a car may pull left or right, what to check first, and how to track tire, alignment and brake service history.",
    path: "/blog/why-is-my-car-pulling-to-one-side",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why is my car pulling to one side?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          Common causes include{" "}
          <strong className="text-white">uneven tyre pressure,
          wheel alignment out of spec, uneven tyre wear, a sticking
          brake caliper, or a damaged tyre or suspension component</strong>.
          Check tyre pressure first — it is the quickest and simplest
          thing to eliminate. Pulling during braking specifically is
          more safety-critical and should be inspected promptly.
        </ShortAnswerBox>

        <ArticleH2>Pulling while cruising</ArticleH2>
        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Uneven tyre pressure", detail: "The most common and easiest-to-fix cause. A significant pressure difference between the left and right tyres on the same axle creates unequal rolling resistance, causing the car to drift toward the side with less pressure. Check all four tyres first." },
            { label: "Wheel alignment out of specification", detail: "Misalignment — particularly incorrect toe (wheels pointing in or out) or camber (wheel tilt) — causes the vehicle to track at an angle. The car drifts toward the side where the wheel angle is furthest out. Alignment can be knocked out by potholes, kerb impacts, or wear over time." },
            { label: "Uneven tyre wear", detail: "Significantly different wear patterns between left and right tyres change their rolling characteristics and can cause pulling. Rotating tyres regularly reduces uneven wear. If the wear pattern is severe, the tyres may need replacement." },
            { label: "Road camber", detail: "A normally cambered road slopes slightly to each side for drainage. Most vehicles will drift slightly toward the road edge on a cambered surface. This is normal. If the pull persists on a flat, level surface, road camber is not the cause." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Pulling when braking</ArticleH2>
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-muted">
              Pulling during braking indicates an imbalance in the
              braking system. This is more safety-critical than
              alignment-related pulling and should be inspected.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Sticking brake caliper", detail: "A partially seized caliper can hold the pad against the rotor on one side, creating drag while driving and causing the vehicle to pull hard toward that side under braking. The affected wheel may feel warm after a drive." },
            { label: "Uneven brake pad wear", detail: "Significant differences in pad thickness between left and right brakes create unequal braking force. The vehicle pulls toward the side with more braking force." },
            { label: "Collapsed or damaged brake hose", detail: "A brake hose that is internally deteriorated can trap hydraulic pressure and not fully release the caliper. This results in one caliper continuing to apply pressure after the pedal is released." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What to check first</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Check tyre pressure on all four tyres — compare left vs right on each axle",
            "Visually inspect tyres for obvious damage, bulges, or significantly uneven wear",
            "Note whether pulling occurs at all times or only during braking",
            "Note whether the steering wheel is centred when driving straight",
            "Check whether the vehicle has recently had a tyre change or impact event",
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
            "Last wheel alignment — when was it done and was any correction made",
            "Last tyre rotation and whether wear was noted as uneven",
            "Brake service history — pad condition and caliper condition",
            "Any recent impacts, tyre changes, or suspension work",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track alignment and tyre service</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log alignment checks, tyre rotations,
          pressure records, and brake work with date and mileage per
          vehicle. Keeping this history means you can quickly answer a
          mechanic's questions about what has recently been done.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-check-tire-pressure", label: "tyre pressure" },
            { to: "/blog/when-to-get-wheel-alignment", label: "wheel alignment" },
            { to: "/blog/why-are-my-tires-wearing-unevenly", label: "uneven tyre wear" },
            { to: "/blog/when-to-replace-brake-pads", label: "brake pads" },
            { to: "/blog/when-to-replace-brake-rotors", label: "brake rotors" },
            { to: "/blog/why-is-my-steering-wheel-shaking", label: "steering wheel shaking" },
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
        This guide explains common causes, not a diagnosis. Pulling
        during braking is particularly safety-relevant — if the pull
        is severe or sudden, stop driving when safe and seek
        inspection before continuing.
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
