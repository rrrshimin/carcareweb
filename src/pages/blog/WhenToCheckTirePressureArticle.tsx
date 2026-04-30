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

const ARTICLE_TITLE = "When To Check Tire Pressure";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-check-tire-pressure";
const ARTICLE_LEDE =
  "Tire pressure is one of the most frequently overlooked yet most impactful regular checks on a car. It affects safety, fuel economy, handling, and tire wear. A good habit is to check tire pressure at least once a month and before any long trip — using the recommended PSI listed on the sticker inside your driver's door or in your owner's manual, not the number on the tire sidewall.";
const CTA_TITLE = "Track tire pressure checks, rotations, and tire service in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Check Tire Pressure?",
    answer:
      "A common recommendation is at least once a month and before long trips. Tires naturally lose a small amount of pressure over time even without a puncture. Temperature changes also affect pressure — colder air causes pressure to drop, warmer air causes it to rise. Monthly checks let you catch issues before they affect handling or tyre wear significantly.",
  },
  {
    question: "What Is Cold Tire Pressure and Why Does It Matter?",
    answer:
      "Cold tire pressure means measuring PSI when the tires have not been driven on recently — typically after the car has been parked for at least 3 hours. Driving generates heat in the tires, which temporarily increases pressure. Manufacturer PSI recommendations are based on cold pressure, so measuring after driving gives a falsely high reading. Check pressure first thing in the morning or before starting a journey for the most accurate reading.",
  },
  {
    question: "What PSI Should My Tires Be Inflated To?",
    answer:
      "The recommended PSI for your vehicle is printed on a sticker on the inside of the driver's door jamb and in the owner's manual. This is the value to use — not the maximum pressure printed on the tire sidewall, which is the maximum the tire can hold, not the recommended operating pressure. Front and rear tires sometimes have different recommended pressures on the same vehicle.",
  },
  {
    question: "How Does Temperature Affect Tire Pressure?",
    answer:
      "As a general rule of physics, tire pressure changes by approximately 1 PSI for every 10°F (about 5.5°C) change in ambient temperature. This means a tire properly inflated at summer temperatures may be noticeably underinflated when temperatures drop significantly in autumn or winter. Seasonal pressure checks at the start of winter and summer are a practical habit.",
  },
  {
    question: "What Are The Risks of Underinflated Tires?",
    answer:
      "Underinflated tires flex more than intended during driving, generating excess heat, which accelerates internal tyre degradation. Underinflation also increases fuel consumption, reduces handling responsiveness and braking performance, and causes uneven tread wear — particularly on the outer edges of the tyre. In severe cases, underinflation can lead to a blowout.",
  },
  {
    question: "What Are The Risks of Overinflated Tires?",
    answer:
      "Overinflated tires have a harder, smaller contact patch with the road. This reduces traction, increases the likelihood of damage from road hazards (the tire cannot flex to absorb impacts as well), and causes uneven tread wear — typically in the centre of the tread. Tires should not routinely be inflated beyond the manufacturer's recommended pressure for your vehicle.",
  },
  {
    question: "How Do I Track Tire Pressure Checks?",
    answer:
      "Log the date of each check and any adjustments made. CarCare Diary lets you record tyre-related entries with notes — including pressure checks, rotations, and tyre changes — so you have a timeline of tyre maintenance across each vehicle.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Check Tire Pressure: Timing, PSI and Safety Tips",
    description:
      "Learn when to check tire pressure, why PSI changes with temperature, and how to track tire maintenance in CarCare Diary.",
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

export default function WhenToCheckTirePressureArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Check Tire Pressure: Timing, PSI and Safety Tips",
    description:
      "Learn when to check tire pressure, why PSI changes with temperature, and how to track tire maintenance in CarCare Diary.",
    path: "/blog/when-to-check-tire-pressure",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you check tire pressure?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Check tire pressure at least{" "}
          <strong className="text-white">once a month</strong> and before any
          long trip. Always use the{" "}
          <strong className="text-white">recommended PSI from your vehicle</strong>{" "}
          — found on the sticker inside the driver's door or in the owner's
          manual — not the number printed on the tire sidewall.
        </ShortAnswerBox>

        <ArticleH2>When to check tire pressure</ArticleH2>
        <ArticleP>
          There are several key moments when checking tire pressure is
          particularly worthwhile:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Monthly",
              note: "Tires lose a small amount of pressure naturally over time — even without any puncture or damage. A monthly check takes a few minutes and catches gradual pressure loss before it affects handling or tyre wear.",
            },
            {
              label: "Before long trips",
              note: "Check pressure before driving extended distances, especially if the car has been parked for some time. Proper inflation helps with fuel economy and reduces heat build-up during sustained highway driving.",
            },
            {
              label: "Seasonal temperature changes",
              note: "Pressure drops in cold weather and rises in warm weather. At the start of winter and summer — when temperatures shift significantly — is a practical time to check all four tires and adjust if needed.",
            },
            {
              label: "After the TPMS warning light appears",
              note: "Many vehicles have a tyre pressure monitoring system (TPMS) that illuminates a warning light when one or more tires drops significantly below the recommended pressure. Do not ignore this — check and inflate the affected tire. TPMS only alerts at a threshold drop, not before.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Cold tire pressure — why it matters for accurate readings</ArticleH2>
        <ArticleP>
          Manufacturer PSI recommendations are based on <em>cold</em> tire
          pressure — measured when the tires have not been driven on for at
          least 3 hours or have been driven less than 1 mile at low speed.
          Driving heats the air inside the tires, temporarily raising the
          pressure reading. Measuring after a drive will give a higher number
          than the actual cold pressure.
        </ArticleP>
        <ArticleP>
          Check pressure first thing in the morning, before starting a journey,
          for the most accurate reading that matches the manufacturer's
          recommendation.
        </ArticleP>

        <ArticleH2>Signs tire pressure may be low</ArticleH2>
        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "TPMS warning light",
              detail: "The tyre pressure monitoring system light illuminates when pressure drops significantly below the recommended value. Check all four tires, as the standard TPMS light does not always specify which tire is affected.",
            },
            {
              sign: "Handling feels different",
              detail: "A noticeably soft, vague, or heavy steering feel can indicate one or more underinflated tires. The car may also pull slightly to one side if pressure differs significantly between the two front tires.",
            },
            {
              sign: "Tire appears visually low",
              detail: "A significantly underinflated tire may be visually noticeable — a slightly flattened appearance at the contact patch. However, a tire can be 10–15 PSI below recommended pressure and not look visibly flat to the eye, so visual inspection alone is not reliable.",
            },
            {
              sign: "Worse fuel economy",
              detail: "Underinflated tires increase rolling resistance, which increases fuel consumption. A noticeable drop in economy without another obvious cause is worth checking.",
            },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you ignore tire pressure</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Uneven or accelerated tread wear, shortening tire life",
            "Reduced braking performance and handling responsiveness",
            "Increased fuel consumption from higher rolling resistance",
            "Greater risk of tire damage from road hazards due to excessive flex",
            "In severe underinflation, risk of blowout at speed",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track tire pressure checks</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of check",
            "Any pressure adjustments made and to which tires",
            "Notes about unusual pressure loss (repeated drops may indicate a slow puncture)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log tire-related entries — including pressure
          checks, rotations, and tire replacements — with date and notes for
          each vehicle.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/blog/when-to-rotate-tires", label: "when to rotate tires" },
            { to: "/blog/when-to-replace-car-battery", label: "when to replace a car battery" },
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
