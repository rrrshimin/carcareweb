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

const ARTICLE_TITLE = "When To Replace Shocks and Struts";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-shocks-and-struts";
const ARTICLE_LEDE =
  "Shock absorbers and struts rarely fail suddenly — they wear gradually over tens of thousands of kilometres, and the symptoms often go unnoticed until handling, ride quality, and tyre wear have all noticeably declined. Unlike an oil change with a firm mileage interval, shock and strut replacement is mostly condition-based. Knowing the signs and tracking the mileage helps you decide when it is time.";
const CTA_TITLE = "Track shock absorber and strut service, suspension work, mileage, and notes in CarCare Diary";

const warningSigns = [
  {
    label: "Nose-diving under braking",
    detail: "When you brake firmly, the front of the vehicle dips sharply forward. Worn front shock absorbers or struts cannot dampen the weight transfer under braking effectively, increasing stopping distances and reducing control.",
  },
  {
    label: "Body roll and sway in corners",
    detail: "Excessive lean when cornering or changing lanes at highway speed suggests the shocks or struts are no longer adequately controlling body movement. Handling feels vague and unstable.",
  },
  {
    label: "Bouncing after bumps",
    detail: "Drive over a speed bump or pothole and count the bounces. A vehicle with healthy shocks settles within one to two oscillations. Continued bouncing or wallowing suggests the damper is no longer controlling spring rebound.",
  },
  {
    label: "Cupped or scalloped tyre wear",
    detail: "Worn shock absorbers allow the tyre to bounce off the road surface rather than maintaining firm contact. This produces an uneven wear pattern with dips and raised areas across the tread — called cupping or scalloping. Tyre wear that appears in patches or waves is a strong indicator of shock absorber wear.",
  },
  {
    label: "Vibration through the steering wheel",
    detail: "At highway speed, worn shock absorbers or struts can produce a steering wheel vibration as the tyre skips across the road surface rather than rolling smoothly. This is distinct from wheel balance vibration but may be confused with it.",
  },
  {
    label: "Visible oil leak on the shock body",
    detail: "Shock absorbers are hydraulic units. A visible film of oil or wet residue running down the shock body indicates a failed seal. A leaking shock is not functioning correctly and should be replaced.",
  },
  {
    label: "Clunking or knocking over bumps",
    detail: "A metallic clunk from the suspension when hitting a bump can indicate a worn strut mount bearing, worn bump stop, or a shock that has completely lost its damping ability. This should be inspected — it can also come from other worn suspension components.",
  },
];

const articleFaqs = [
  {
    question: "How Long Do Shock Absorbers and Struts Last?",
    answer:
      "There is no fixed replacement interval, but most manufacturers and mechanics suggest inspecting shock absorbers and struts around 80,000–100,000 km (50,000–60,000 miles) and considering replacement if wear is found. Vehicles driven frequently on rough roads, gravel, or over speed bumps may need replacement sooner. The condition-based signs listed above are more reliable indicators than mileage alone.",
  },
  {
    question: "What Is the Difference Between a Shock Absorber and a Strut?",
    answer:
      "A shock absorber is a standalone damping unit that works alongside a separate spring. A strut is a structural suspension component that integrates the spring and damper into a single assembly — it also forms part of the steering geometry. Struts are more complex to replace than shock absorbers. Many vehicles use struts at the front and shock absorbers at the rear, though this varies by make and model.",
  },
  {
    question: "Should Shocks and Struts Be Replaced in Pairs?",
    answer:
      "Yes. Shocks and struts should always be replaced in pairs on the same axle — both fronts together, or both rears together. Replacing only one side creates an imbalance in damping between the two wheels on that axle, which affects handling and stability. If one shock or strut has failed or is significantly worn, the one on the opposite side has been working under the same conditions and is likely in similar condition.",
  },
  {
    question: "Can Worn Shocks Affect Braking Distance?",
    answer:
      "Yes. Shock absorbers help keep the tyres in contact with the road surface. When worn shocks allow the tyre to skip or bounce rather than maintaining contact, effective braking is reduced. Studies and testing have shown that significantly worn shock absorbers can increase braking distances, particularly on uneven surfaces. This makes shock absorber condition a safety factor, not just a comfort one.",
  },
  {
    question: "Can I Inspect Shock Absorbers Myself?",
    answer:
      "A basic bounce test — press down firmly on each corner of the vehicle and release, counting how many times it bounces — gives a rough indication of damping. One to two bounces before settling is normal. More suggests worn shocks. You can also visually check for oil leaks on the shock body. However, a full assessment of the condition and any associated suspension components (mounts, bushings, bump stops) is better done by a mechanic with the vehicle on a lift.",
  },
  {
    question: "Does Replacing Shocks or Struts Require a Wheel Alignment?",
    answer:
      "Replacing struts often requires a wheel alignment afterwards, because the strut is part of the steering and suspension geometry. Disturbing the strut can change the alignment settings. Replacing standalone shock absorbers on the rear of a vehicle does not always require alignment, but it is worth checking. Ask the mechanic whether alignment should be checked after the job.",
  },
  {
    question: "How Do I Track Shock Absorber and Suspension Service?",
    answer:
      "Log each suspension inspection or shock/strut replacement with date and mileage, noting which corners were replaced and what condition the old components were in. Tracking this alongside tyre wear notes helps identify patterns. CarCare Diary lets you add detailed notes to any service entry per vehicle.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When To Replace Shocks and Struts",
    description:
      "How long shocks and struts last, warning signs they are worn, when to replace them, and how to track suspension service history.",
    url: ARTICLE_URL,
    datePublished: "2026-08-06",
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

export default function WhenToReplaceShocksAndStrutsArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When To Replace Shocks and Struts",
    description:
      "How long shocks and struts last, warning signs they are worn, when to replace them, and how to track suspension service history.",
    path: "/blog/when-to-replace-shocks-and-struts",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you replace shocks and struts?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          There is no fixed mileage interval — replacement is mostly
          condition-based. Inspect around{" "}
          <strong className="text-white">80,000–100,000 km</strong>{" "}
          (50,000–60,000 miles) or sooner if you notice bouncing after bumps,
          nose-diving under braking, body sway in corners, cupped tyre wear,
          or a visible oil leak on the shock body. Always replace in pairs
          on the same axle.
        </ShortAnswerBox>

        <ArticleH2>What shocks and struts do</ArticleH2>
        <ArticleP>
          Springs absorb road impacts by compressing and rebounding.
          Shock absorbers and struts dampen that spring movement —
          they convert the energy into heat so the wheel returns to the
          road surface smoothly rather than bouncing repeatedly. When
          shock absorbers wear out, the spring has nothing to control
          it. The result is a vehicle that bounces, sways, dives under
          braking, and allows the tyre to skip off the road surface
          rather than maintaining consistent contact.
        </ArticleP>
        <ArticleP>
          A strut is a structural component that integrates the spring
          and damper and forms part of the steering geometry. A shock
          absorber is a standalone damping unit working alongside a
          separate spring. Replacing struts typically requires a
          wheel alignment afterwards; standalone shock absorbers
          on a rear axle may not.
        </ArticleP>

        <ArticleH2>Warning signs shocks or struts may need replacing</ArticleH2>
        <div className="flex flex-col gap-4 mb-6">
          {warningSigns.map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
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
                "Handling is severely affected — strong body sway, instability at speed, or unpredictable steering",
                "A clunking or knocking noise from the suspension worsens rapidly",
                "A wheel is visibly damaged or suspension is structurally compromised after an impact",
              ].map((item) => (
                <li key={item} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red-400 shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ArticleH2>General replacement guidance</ArticleH2>
        <div className="overflow-x-auto rounded-xl border border-panel mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-panel">
                <th className="text-left px-5 py-3.5 font-semibold text-white">Situation</th>
                <th className="text-left px-5 py-3.5 font-semibold text-white">Guidance</th>
              </tr>
            </thead>
            <tbody>
              {[
                { situation: "High mileage vehicle (100,000+ km)", guidance: "Inspect shocks and struts at next service if not already done" },
                { situation: "Cupped or scalloped tyre wear noticed", guidance: "Inspect shock absorbers — this is the most common wear-related symptom" },
                { situation: "Visible oil leak on shock body", guidance: "Replace — the damper has failed and is not functioning correctly" },
                { situation: "Vehicle bounces more than 1–2 times after a bump", guidance: "Bounce test suggests worn damping — inspect or replace" },
                { situation: "Struts replaced (any reason)", guidance: "Check wheel alignment immediately after — struts affect geometry" },
                { situation: "Replacing one side", guidance: "Always replace both sides on the same axle for balanced handling" },
              ].map((row) => (
                <tr key={row.situation} className="border-b border-panel last:border-0 hover:bg-surface/50 transition-colors">
                  <td className="px-5 py-3.5 text-white font-medium">{row.situation}</td>
                  <td className="px-5 py-3.5 text-muted">{row.guidance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ArticleH2>What maintenance history helps</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Mileage at which shocks or struts were last replaced or inspected",
            "Any tyre wear notes from previous rotations (cupping is a key indicator)",
            "Any prior suspension work — control arm bushings, ball joints, wheel bearings",
            "History of impacts — potholes, kerb strikes, off-road use",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track suspension service</ArticleH2>
        <ArticleP>
          Log shock absorber and strut replacements with date, mileage, which
          corners were done, and any related work (alignment, strut mounts,
          bump stops). Noting tyre wear observations at each rotation helps
          identify suspension wear early. CarCare Diary lets you add these
          details as notes to any service entry.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/why-is-my-car-shaking", label: "car shaking" },
            { to: "/blog/why-is-my-steering-wheel-shaking", label: "steering wheel shaking" },
            { to: "/blog/why-are-my-tires-wearing-unevenly", label: "uneven tyre wear" },
            { to: "/blog/when-to-get-wheel-alignment", label: "wheel alignment" },
            { to: "/blog/when-to-rotate-tires", label: "tyre rotations" },
            { to: "/blog/car-maintenance-schedule-by-mileage", label: "maintenance by mileage" },
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
        Last updated: August 2026
      </span>
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
