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

const ARTICLE_TITLE = "When To Replace Brake Pads";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-brake-pads";
const ARTICLE_LEDE =
  "Brake pad lifespan varies more than almost any other service interval — driving style, road conditions, vehicle weight, and pad material all affect how long pads last. Inspection is more reliable than mileage alone, but knowing the typical range and the warning signs helps you catch the need for replacement before it becomes a safety issue.";
const CTA_TITLE = "Log brake pad replacements and service notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Long Do Brake Pads Last?",
    answer:
      "Brake pad life varies widely. Many sources cite a broad range of 25,000–50,000 miles, but pads can wear faster or slower depending on driving style, road conditions, pad material, and vehicle weight. Aggressive braking, heavy vehicles, and mountainous terrain wear pads much faster than highway driving in a light car. Inspection at regular intervals is more reliable than relying on mileage alone.",
  },
  {
    question: "What Are The Signs Brake Pads Need Replacing?",
    answer:
      "Key warning signs include a high-pitched squealing when you apply the brakes (often caused by a wear indicator built into the pad), grinding or metal-on-metal scraping (pad material is gone), a pulsing or vibrating pedal, a longer stopping distance than usual, or a brake warning light on the dashboard. Any of these should be inspected promptly.",
  },
  {
    question: "Do Front Brake Pads Wear Faster Than Rear?",
    answer:
      "Yes, in most vehicles. Front brakes handle more of the braking force during deceleration due to weight transfer, so front pads typically wear faster. Many drivers replace front pads more frequently than rear pads for this reason.",
  },
  {
    question: "Can I Inspect Brake Pads Myself?",
    answer:
      "You can often see the pad thickness through the wheel spokes without removing the wheel. Look for the pad pressed against the rotor — most pads have grooves or slots, and if these have worn down, the pad is getting thin. For an accurate measurement, a mechanic will use a caliper. Most manufacturers recommend replacement when pad material reaches around 2–3mm.",
  },
  {
    question: "Should I Replace Both Sides At The Same Time?",
    answer:
      "Yes. Brake pads should be replaced in axle pairs (both front or both rear together). Replacing only one side creates an imbalance in braking force, which can cause the vehicle to pull to one side when braking.",
  },
  {
    question: "How Do I Track When Brake Pads Were Last Replaced?",
    answer:
      "Log each brake service with the date, mileage, and notes — including which axle was done (front, rear, or both) and the pad brand if relevant. Apps like CarCare Diary let you record this with a brake pad log entry and add a date or mileage-based reminder for when the next inspection is due.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace Brake Pads: Signs, Mileage and Safety Tips",
    description:
      "Learn when brake pads usually need replacement, warning signs like squealing or grinding, and how to track brake service history.",
    url: ARTICLE_URL,
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    publisher: {
      "@type": "Organization",
      name: "CarCare Diary",
      url: "https://www.carcarediary.com",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
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

export default function WhenToReplaceBrakePadsArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "When to Replace Brake Pads: Signs, Mileage and Safety Tips",
    description:
      "Learn when brake pads usually need replacement, warning signs like squealing or grinding, and how to track brake service history.",
    path: "/blog/when-to-replace-brake-pads",
    ogType: "article",
    jsonLd,
  });

  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you replace brake pads?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Brake pads typically last somewhere in the range of{" "}
          <strong className="text-white">25,000–50,000 miles</strong>, but this
          varies enormously by driving style and conditions. Front pads usually
          wear faster than rear. Inspect them at every tire rotation or at least
          once a year — don't rely on mileage alone.
        </ShortAnswerBox>

        <ArticleH2>Typical brake pad lifespan</ArticleH2>
        <ArticleP>
          Brake pad life is one of the least predictable maintenance intervals
          on a vehicle because the variables are so significant. The same pads
          on the same car will last very differently depending on how and where
          the vehicle is driven:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Highway driving, light braking",
              estimate: "Toward the upper end of the range",
              note: "Gradual, light braking on motorways puts less stress on pads. Drivers who rarely brake hard can expect longer pad life.",
            },
            {
              label: "City driving, frequent stops",
              estimate: "Toward the lower end of the range",
              note: "Constant stop-and-go traffic means more frequent, harder braking. Pads wear significantly faster in heavy urban use.",
            },
            {
              label: "Mountain or hilly terrain",
              estimate: "Can be much shorter than average",
              note: "Engine braking helps, but steep descents demand heavy sustained brake use. Drivers in hilly areas should inspect more frequently.",
            },
            {
              label: "Towing or carrying heavy loads",
              estimate: "Shorter than average",
              note: "More vehicle mass means more energy to scrub off when braking. Towing regularly accelerates pad and rotor wear.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-panel bg-surface px-5 py-4"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <span className="text-sm font-semibold text-white">
                  {item.label}
                </span>
                <span className="text-sm text-accent font-medium">
                  {item.estimate}
                </span>
              </div>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <ArticleP>
          Because driving conditions vary so much, manufacturers often recommend
          brake inspection at each tire rotation or at every other oil change
          rather than specifying a hard mileage figure.
        </ArticleP>

        <ArticleH2>Warning signs brake pads need replacing</ArticleH2>
        <ArticleP>
          Five main signs indicate brake pad wear — some are designed into the
          pads themselves, others are symptoms of damage already occurring:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "Squealing or squeaking when braking",
              detail: "Most pads include a metal wear indicator that produces a high-pitched squeal when the pad material wears thin. This is designed as a warning — don't ignore it.",
            },
            {
              sign: "Grinding or metal-on-metal scraping",
              detail: "If squealing has gone past the warning stage, the pad material may be gone entirely and the metal backing is now contacting the rotor. This causes rapid rotor damage and should be addressed immediately.",
            },
            {
              sign: "Vibration or pulsing through the brake pedal",
              detail: "Can indicate uneven pad wear or a warped rotor from overheating. The pads may still have material left but the braking system needs inspection.",
            },
            {
              sign: "Longer stopping distances",
              detail: "If the vehicle takes noticeably longer to stop than it used to, worn pads are a likely cause. This is a safety concern — get an inspection soon.",
            },
            {
              sign: "Brake warning light illuminated",
              detail: "Some vehicles have wear sensors that trigger a dashboard warning. Check your owner's manual to understand what the light indicates for your specific vehicle.",
            },
          ].map((item) => (
            <div
              key={item.sign}
              className="rounded-xl border border-panel bg-surface px-5 py-4"
            >
              <p className="text-sm font-semibold text-white mb-1">
                {item.sign}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you ignore worn brake pads</ArticleH2>
        <ArticleP>
          Brake service is safety-critical. Delaying replacement after warning
          signs appear has consequences that go beyond comfort:
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Rotor damage — metal-on-metal contact scores and warps the rotor surface, turning a pad replacement into a pad + rotor replacement",
            "Caliper damage — sustained metal contact can damage the caliper, adding significant cost",
            "Reduced braking performance — longer stopping distances in an emergency",
            "Brake fade under heavy use — degraded pads lose effectiveness when hot",
            "Uneven braking — if one side is more worn than the other, the vehicle can pull when braking",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          Brake pads are significantly cheaper than rotors and calipers. Acting
          on the first squealing warning keeps the job contained to pad
          replacement.
        </ArticleP>

        <ArticleH2>Front brakes vs rear brakes</ArticleH2>
        <ArticleP>
          In most vehicles, front brakes handle more of the braking force during
          deceleration. When you brake hard, weight transfers forward, increasing
          load on the front wheels. As a result:
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Front brake pads typically wear 30–50% faster than rear pads",
            "Front pad replacements are therefore more frequent",
            "Rear pads can last significantly longer in some vehicles",
            "Always replace pads as an axle pair (both left and right together)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track brake pad replacements</ArticleH2>
        <ArticleP>
          Keep a log entry for every brake service, noting which axle was
          replaced and the mileage at the time. This gives you a useful baseline
          for when to schedule the next inspection, and is valuable information
          for any mechanic who works on the car in future.
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date and mileage of each brake pad replacement",
            "Which axle was replaced (front, rear, or both)",
            "Pad brand or type if known",
            "Any notes about rotor condition at the time",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          CarCare Diary lets you log brake pad replacements under a dedicated
          brake category, with date, mileage, and notes per entry. Set a
          mileage-based reminder for your next inspection — so you don't need
          to track it manually.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          <Link
            to="/car-maintenance-tracker"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            car maintenance tracker
          </Link>
          {" · "}
          <Link
            to="/car-service-history-app"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            car service history app
          </Link>
          {" · "}
          <Link
            to="/blog/when-to-change-engine-oil"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            when to change engine oil
          </Link>
          {" · "}
          <Link
            to="/blog/when-to-rotate-tires"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            when to rotate tires
          </Link>
        </p>

        <ArticleH2>Frequently asked questions</ArticleH2>
        <BrakeFAQ />
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
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
        Short answer
      </p>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
      <p className="text-xs text-muted/60 mt-3 italic">
        Use this as general guidance and always check your owner's manual and
        inspect brakes regularly for your exact vehicle.
      </p>
    </div>
  );
}

function BrakeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3 mt-4">
      {articleFaqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`rounded-xl border overflow-hidden bg-surface transition-colors ${
              isOpen ? "border-accent/40" : "border-panel"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
            >
              <span className="text-[15px] font-semibold text-white pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5">
                <p className="text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
