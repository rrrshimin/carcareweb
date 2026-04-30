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

const ARTICLE_TITLE = "When To Change Brake Fluid";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-change-brake-fluid";
const ARTICLE_LEDE =
  "Brake fluid is changed by time rather than mileage in most manufacturer schedules because it absorbs moisture from the air over time regardless of how much you drive. As moisture content rises, the fluid's boiling point drops — reducing braking performance under hard use. Most schedules point to every two years, but your owner's manual has the correct interval for your vehicle.";
const CTA_TITLE = "Track brake fluid changes by date in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Change Brake Fluid?",
    answer:
      "Many manufacturers recommend changing brake fluid every two years, regardless of mileage. Some specify longer or shorter intervals, and the correct schedule depends on your vehicle and the brake fluid type (DOT 3, DOT 4, DOT 5.1, or DOT 5). Check your owner's manual — this is safety-critical fluid and the manufacturer's recommendation takes priority.",
  },
  {
    question: "Why Does Brake Fluid Need To Be Changed?",
    answer:
      "Most brake fluids (DOT 3, DOT 4, DOT 5.1) are hygroscopic — they absorb moisture from the air over time. As moisture content increases, the fluid's boiling point drops. Under heavy braking, overheated fluid can vaporise and cause 'brake fade', where the pedal goes soft and braking performance reduces significantly. Fresh fluid maintains a higher boiling point and more consistent pedal feel.",
  },
  {
    question: "What Are The Signs Brake Fluid Needs Changing?",
    answer:
      "A soft or spongy brake pedal (especially after hard braking), a brake warning light illuminated, fluid that appears very dark or brown when checked, or a noticeable change in pedal firmness compared to when the vehicle was newer can all indicate the fluid is degraded. If the pedal goes to the floor or braking feels unsafe, have the system inspected immediately.",
  },
  {
    question: "Can You Check Brake Fluid Yourself?",
    answer:
      "You can check the fluid level and colour through the brake fluid reservoir (usually a small translucent container in the engine bay). Fresh fluid is clear to slightly yellow. Fluid that is dark brown or black has absorbed significant moisture and contamination. Checking the moisture content accurately requires a test kit or a mechanic's equipment — a visual check gives a rough indication but not a precise measurement.",
  },
  {
    question: "Is It Safe To Drive With Old Brake Fluid?",
    answer:
      "Degraded brake fluid poses a safety risk. Under normal light driving conditions, the impact may be minimal. However, under extended or repeated heavy braking — mountain descents, emergency stops, towing — fluid with a low boiling point can vaporise, causing brake fade. This is a safety-critical system and the service should not be deferred significantly.",
  },
  {
    question: "How Do I Track Brake Fluid Changes?",
    answer:
      "Log the brake fluid change with the date and any notes about the fluid grade used. Because this service is primarily time-based rather than mileage-based, a date reminder two years from the last change is the most useful way to track it. CarCare Diary lets you log brake fluid services and set a date-based reminder for the next interval.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Change Brake Fluid: Time, Signs and Safety Tips",
    description:
      "Learn when to change brake fluid, why it matters, warning signs to watch for, and how to track brake fluid service in CarCare Diary.",
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

export default function WhenToChangeBrakeFluidArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "When to Change Brake Fluid: Time, Signs and Safety Tips",
    description:
      "Learn when to change brake fluid, why it matters, warning signs to watch for, and how to track brake fluid service in CarCare Diary.",
    path: "/blog/when-to-change-brake-fluid",
    ogType: "article",
    jsonLd,
  });

  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you change brake fluid?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Every <strong className="text-white">2 years</strong> for most
          vehicles, regardless of mileage — because brake fluid absorbs
          moisture over time even when the car is not being driven. Some
          manufacturers specify different intervals. Check your owner's manual
          for your vehicle's exact schedule.
        </ShortAnswerBox>

        <ArticleH2>Why brake fluid is changed by time, not mileage</ArticleH2>
        <ArticleP>
          Most brake fluids (DOT 3, DOT 4, DOT 5.1) are hygroscopic — they
          draw in moisture from the surrounding air through micro-permeation in
          rubber hoses and seals. This happens whether you drive daily or leave
          the car parked for months. The more moisture the fluid contains, the
          lower its boiling point becomes.
        </ArticleP>
        <ArticleP>
          Under normal, light braking this rarely causes noticeable problems.
          Under hard or sustained braking — descending a steep hill, towing, or
          repeated emergency stops — fluid with a low boiling point can
          vaporise. Vapour compresses, fluid does not, and the result is a soft
          pedal that drops toward the floor. This is brake fade caused by fluid
          vapourisation, and it is a safety hazard.
        </ArticleP>

        <ArticleH2>Typical brake fluid change intervals</ArticleH2>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Most manufacturer schedules",
              interval: "Every 2 years",
              note: "Regardless of mileage. The 2-year interval is common across many European and Japanese manufacturers. Some American manufacturers have historically not specified an interval — check yours.",
            },
            {
              label: "Performance or high-temperature use",
              interval: "Annually or more often",
              note: "Track days, mountain driving, frequent towing, or heavy fleet use causes more thermal stress. Some performance drivers flush brake fluid before heavy use events.",
            },
            {
              label: "Long-life or DOT 5 silicone fluid",
              interval: "Longer — check specifications",
              note: "DOT 5 silicone fluid is not hygroscopic and does not absorb moisture. It has different characteristics from glycol-based fluids and is not interchangeable. Check your vehicle type and manufacturer guidance.",
            },
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

        <ArticleH2>Signs brake fluid may need changing sooner</ArticleH2>

        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "Soft or spongy brake pedal",
              detail: "Especially noticeable after sustained hard braking — a pedal that feels less firm than it once did can indicate vapour in the system from fluid with a high moisture content.",
            },
            {
              sign: "Brake pedal travel has increased",
              detail: "If you need to press the pedal further than you used to before braking engages, this warrants inspection. Could be fluid, pad wear, or a system issue.",
            },
            {
              sign: "ABS or brake warning light illuminated",
              detail: "Can indicate low fluid level or a system fault. If accompanied by a change in pedal feel, get the braking system inspected promptly.",
            },
            {
              sign: "Fluid appears dark brown or black",
              detail: "Fresh brake fluid is clear to pale yellow. Very dark fluid has accumulated significant contamination. A visual check is not precise, but heavily discoloured fluid is a reasonable indicator that the flush is overdue.",
            },
            {
              sign: "Noticeable reduction in braking confidence",
              detail: "Any change in how the brakes feel compared to when the vehicle was new — less bite, longer stops, a feeling of resistance through the pedal — is worth investigating.",
            },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you ignore brake fluid changes</ArticleH2>
        <ArticleP>
          The consequences are primarily safety-related rather than
          mechanical damage. Brake components last a long time — the fluid
          is the vulnerability:
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Brake fade under heavy use — pedal goes soft during extended or repeated braking",
            "Reduced braking confidence in emergency stopping scenarios",
            "Corrosion of internal brake components (calipers, master cylinder) accelerated by moisture in the fluid",
            "ABS system anomalies caused by degraded fluid in the hydraulic unit",
            "In severe cases, near-complete brake failure under extreme thermal load",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          Brake fluid replacement is a relatively low-cost service. Because
          the risk is primarily safety rather than comfort, it should not be
          treated as optional.
        </ArticleP>

        <ArticleH2>How to track brake fluid changes</ArticleH2>
        <ArticleP>
          Because the interval is time-based, the date of the last change is
          the key piece of information to record. Log it with any notes about
          fluid grade:
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of the brake fluid flush",
            "Fluid type used (DOT 3, DOT 4, DOT 5.1, etc.)",
            "Any notes about pedal feel or observations at the time",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          CarCare Diary lets you log the brake fluid change under a brakes
          service category and set a date-based reminder for 2 years later. You
          don't need to remember the date — the app tracks it for you.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          <Link to="/car-maintenance-tracker" className="text-accent font-semibold hover:text-white transition-colors">car maintenance tracker</Link>
          {" · "}
          <Link to="/vehicle-service-reminder-app" className="text-accent font-semibold hover:text-white transition-colors">vehicle service reminder app</Link>
          {" · "}
          <Link to="/blog/when-to-replace-brake-pads" className="text-accent font-semibold hover:text-white transition-colors">when to replace brake pads</Link>
          {" · "}
          <Link to="/blog/when-to-change-coolant" className="text-accent font-semibold hover:text-white transition-colors">when to change coolant</Link>
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
          <div key={faq.question} className={`rounded-xl border overflow-hidden bg-surface transition-colors ${isOpen ? "border-accent/40" : "border-panel"}`}>
            <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
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
