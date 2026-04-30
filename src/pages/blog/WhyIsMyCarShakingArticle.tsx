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

const ARTICLE_TITLE = "Why Is My Car Shaking?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-is-my-car-shaking";
const ARTICLE_LEDE =
  "Car vibration or shaking can come from many different systems depending on when and how the shake occurs. The timing matters: vibration at high speed points to different causes than shaking when braking, at idle, or when accelerating. Identifying when the shake happens is the most useful first step before investigating further.";
const CTA_TITLE = "Track symptoms, tire service, brake work, and repairs in CarCare Diary";

const articleFaqs = [
  {
    question: "Why Does My Car Shake at High Speed But Not at Low Speed?",
    answer:
      "Vibration that appears only at certain higher speeds — often with a specific speed range where it is worst — is frequently caused by wheel imbalance. An out-of-balance wheel generates a vibration that increases with speed. Wheel balance is quick and inexpensive to check. Other higher-speed vibration causes include tyre uniformity issues (a manufacturing defect causing uneven stiffness around the tyre), worn wheel bearings, or driveshaft issues.",
  },
  {
    question: "Why Does My Car Shake When I Brake?",
    answer:
      "Vibration that appears specifically when the brakes are applied — often felt as a pulsing through the brake pedal or steering wheel — is typically associated with brake rotor surface issues. Uneven rotor thickness or surface deposits (often called warping) causes the pads to grip unevenly as the rotor rotates, creating a pulsing sensation. This warrants a brake inspection.",
  },
  {
    question: "Why Does My Car Shake at Idle?",
    answer:
      "Vibration or shaking when the car is stationary with the engine running is usually an engine-related issue. An engine misfire — caused by a faulty spark plug, ignition coil, or fuel injector — causes one cylinder to not contribute to combustion, producing an uneven, rough idle. Other causes include a vacuum leak, dirty throttle body, or a failing engine mount allowing the engine's natural vibration to transmit into the car body.",
  },
  {
    question: "Why Does My Car Shake When Accelerating?",
    answer:
      "Vibration under acceleration can be caused by engine misfires (which worsen under load), CV joint issues (particularly a clicking or vibration felt when accelerating in a turn), driveshaft problems, worn motor mounts, or in front-wheel-drive vehicles, issues with the inner or outer CV axle joints. Tyre and wheel issues can also become more noticeable under load.",
  },
  {
    question: "Can Tyres Cause a Car to Shake?",
    answer:
      "Yes. Tyres are one of the most common causes of vibration. Out-of-balance wheels, uneven tyre wear, flat spots from extended parking, tyre age and degradation, or a tyre with internal structural damage can all cause shaking at various speeds. Wheel balancing and a visual inspection of tyre condition are a good first step when investigating vibration.",
  },
  {
    question: "How Do I Track Vibration-Related Repairs?",
    answer:
      "Log any symptoms with date, mileage, and a description — noting when the vibration occurs (speed, braking, idle, acceleration) helps a mechanic narrow down the cause quickly. When the cause is found and repaired, log what was done and the parts used. CarCare Diary lets you add notes to any service entry.",
  },
];

const situations = [
  {
    heading: "Shaking at high speed",
    causes: [
      { cause: "Wheel imbalance", detail: "An out-of-balance wheel creates vibration that typically increases with speed. Often noticeable in a specific speed range. Wheel balancing is quick and inexpensive to check." },
      { cause: "Tyre uniformity issue", detail: "Some tyres have slight variations in stiffness around the tyre (uniformity defects) that create vibration, particularly at speed. May not be obvious visually." },
      { cause: "Worn wheel bearing", detail: "A worn wheel bearing can produce vibration or humming that changes with speed. May also change when weight shifts — such as when changing lanes." },
      { cause: "Driveshaft imbalance or wear", detail: "A driveshaft that is damaged, bent, or has worn universal joints can cause vibration at specific speeds." },
    ],
  },
  {
    heading: "Shaking when braking",
    causes: [
      { cause: "Brake rotor surface variation", detail: "Uneven rotor thickness or surface deposits (often described as warped rotors) causes the brake pads to grip unevenly as the rotor turns — felt as pulsing through the pedal or steering wheel." },
      { cause: "Stuck brake caliper", detail: "A caliper that does not fully release can cause uneven braking and vibration — may also produce heat or a burning smell from one wheel." },
    ],
  },
  {
    heading: "Shaking at idle",
    causes: [
      { cause: "Engine misfire", detail: "A spark plug, ignition coil, or fuel injector issue causing one cylinder to not fire results in an uneven, rough idle — the engine rocks or vibrates noticeably at standstill." },
      { cause: "Worn or broken engine mount", detail: "Engine mounts isolate the engine's natural vibration from the body. A worn or broken mount allows the vibration to transmit into the car, causing shaking felt particularly at idle." },
      { cause: "Vacuum leak", detail: "An air leak in the intake system causes an uneven fuel-air mixture that can produce a rough idle and vibration." },
    ],
  },
  {
    heading: "Shaking when accelerating",
    causes: [
      { cause: "CV joint or axle issue", detail: "On front-wheel-drive vehicles, worn CV joints are a common cause of vibration under acceleration — particularly when accelerating through a turn. Often accompanied by clicking." },
      { cause: "Engine misfire under load", detail: "A misfire that is intermittent at idle may become more pronounced under the load of acceleration." },
      { cause: "Tyre or wheel issue under load", detail: "An out-of-balance or structurally compromised tyre may feel worse under the additional load of acceleration." },
    ],
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Is My Car Shaking? Common Causes by Speed and Situation",
    description:
      "Learn why a car may shake while driving, braking, idling or accelerating, and how maintenance history can help narrow the cause.",
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

export default function WhyIsMyCarShakingArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Is My Car Shaking? Common Causes by Speed and Situation",
    description:
      "Learn why a car may shake while driving, braking, idling or accelerating, and how maintenance history can help narrow the cause.",
    path: "/blog/why-is-my-car-shaking",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why is my car shaking?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          The most useful first question is:{" "}
          <strong className="text-white">when does the shaking happen?</strong>{" "}
          High-speed shaking points to wheel balance or tyres.
          Shaking when braking points to brake rotors. Shaking at idle points
          to engine or mounts. Shaking under acceleration points to CV joints,
          misfires, or tyres.
        </ShortAnswerBox>

        <ArticleH2>When to stop driving</ArticleH2>
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-400 mb-2">Stop driving and seek inspection if</p>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Shaking is sudden or severe — particularly if it appears while driving normally",
                  "Vibration is accompanied by a warning light",
                  "Braking is affected — longer distances, pulling, or pedal pulsing",
                  "Steering feels unstable or difficult to control",
                  "A grinding, clicking, or thumping sound accompanies the vibration",
                ].map((item) => (
                  <li key={item} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-red-400 shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ArticleH2>Common causes by situation</ArticleH2>
        {situations.map((s) => (
          <div key={s.heading} className="mb-6">
            <h3 className="text-base font-semibold text-white mb-3">{s.heading}</h3>
            <div className="flex flex-col gap-3">
              {s.causes.map((item) => (
                <div key={item.cause} className="rounded-xl border border-panel bg-surface px-5 py-4">
                  <p className="text-sm font-semibold text-white mb-1">{item.cause}</p>
                  <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <ArticleH2>What maintenance history can help explain shaking</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "When tyres were last balanced and rotated",
            "Tyre age and mileage — older or high-mileage tyres are more likely to develop issues",
            "Brake rotor and pad service history",
            "Spark plug and ignition service history",
            "Any prior suspension or steering component work",
            "CV joint or axle repair history",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track symptoms and repairs</ArticleH2>
        <ArticleP>
          When you notice a new vibration, log it with date, mileage, and a
          description — noting when it occurs (speed, braking, idle, turning)
          gives a mechanic useful context. When the cause is found and repaired,
          log the work and parts. CarCare Diary lets you keep all of this
          in one place for each vehicle.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-replace-tires", label: "when to replace tires" },
            { to: "/blog/when-to-get-wheel-alignment", label: "when to get wheel alignment" },
            { to: "/blog/when-to-replace-brake-rotors", label: "when to replace brake rotors" },
            { to: "/blog/when-to-replace-spark-plugs", label: "when to replace spark plugs" },
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
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
        This guide explains common causes, not a diagnosis. If shaking
        affects braking, steering, or drivability, or appears suddenly,
        stop driving when safe and have the vehicle inspected.
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
