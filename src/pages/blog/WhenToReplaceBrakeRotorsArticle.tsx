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

const ARTICLE_TITLE = "When To Replace Brake Rotors";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-brake-rotors";
const ARTICLE_LEDE =
  "Brake rotors are replaced based on wear, measured thickness, condition, and symptoms — not a fixed mileage interval. They are typically inspected during brake pad service. Brakes are a safety-critical system: any unusual braking symptoms — vibration, grinding, pulling, or noticeably longer stopping — should be inspected by a qualified mechanic without delay.";
const CTA_TITLE = "Track brake rotor replacement date, mileage, parts, and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Long Do Brake Rotors Last?",
    answer:
      "Rotor lifespan depends heavily on driving style, rotor quality, pad type, vehicle weight, and how often the brakes are used hard. Aggressive braking, frequent towing, mountainous driving, and track use all shorten rotor life significantly compared to moderate highway and city driving. Many rotors outlast one or more sets of brake pads, but there is no universal mileage figure that applies to all vehicles and conditions.",
  },
  {
    question: "Should I Replace Rotors and Pads at the Same Time?",
    answer:
      "Not always required, but often recommended. If rotors are below minimum thickness, scored, cracked, or show significant wear, they should be replaced along with new pads. Installing new pads on worn or damaged rotors accelerates pad wear and may not restore safe braking performance. A mechanic should measure rotor thickness and assess condition to determine whether replacement is needed.",
  },
  {
    question: "Can Brake Rotors Be Resurfaced Instead of Replaced?",
    answer:
      "Rotors that are above minimum thickness and are not cracked, heavily grooved, or warped can sometimes be resurfaced (also called machining or skimming) to remove surface irregularities. Resurfacing removes a thin layer of material, restoring a flat surface. If the rotor is already near its minimum thickness, resurfacing would bring it below the safe limit and replacement is required instead. The decision depends on measured thickness — your mechanic can advise.",
  },
  {
    question: "What Causes Brake Rotors to Warp?",
    answer:
      "Rotor warping — more accurately described as uneven thickness or surface deposits — is typically caused by sustained heavy braking that generates extreme heat, followed by rapid cooling, or by binding caliper pistons that keep the pad in contact with the rotor when it should release. This causes uneven thermal stress and material transfer from pad to rotor. The result is a pulsing or vibrating brake pedal, often felt through the pedal and sometimes the steering wheel.",
  },
  {
    question: "Do Front and Rear Rotors Wear at the Same Rate?",
    answer:
      "Generally, no. Front brakes typically do a larger share of braking work due to weight transfer under deceleration. Front rotors and pads usually wear faster than rear. On many vehicles, the rear brakes are also smaller than the fronts. It is common for front brake components to need replacement more often than rear components, though this depends on the vehicle and its brake bias.",
  },
  {
    question: "How Do I Track Brake Rotor Replacement?",
    answer:
      "Log the date, mileage, which axle was replaced (front, rear, or both), parts used, and any notes about what prompted replacement. CarCare Diary lets you record brake service with full notes and set a reminder to inspect brakes again at a future mileage or date.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace Brake Rotors: Signs, Wear and Safety Tips",
    description:
      "Learn when to replace brake rotors, signs of worn or warped rotors, and how to track brake service history in CarCare Diary.",
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

export default function WhenToReplaceBrakeRotorsArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Replace Brake Rotors: Signs, Wear and Safety Tips",
    description:
      "Learn when to replace brake rotors, signs of worn or warped rotors, and how to track brake service history in CarCare Diary.",
    path: "/blog/when-to-replace-brake-rotors",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you replace brake rotors?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Replace brake rotors when they are{" "}
          <strong className="text-white">below minimum thickness</strong>,
          show significant scoring, cracking, or damage, or when braking
          symptoms such as{" "}
          <strong className="text-white">vibration, grinding, or pulling</strong>{" "}
          are present. Rotors should be measured and assessed by a mechanic
          during brake service.
        </ShortAnswerBox>

        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed text-muted">
              <strong className="text-red-400">Safety note:</strong> Brakes
              are safety-critical. Any symptoms affecting braking performance
              — grinding, vibration, pulling, or longer stopping distances —
              should be inspected by a qualified mechanic promptly. Do not
              delay brake-related symptoms.
            </p>
          </div>
        </div>

        <ArticleH2>When brake rotors need replacing</ArticleH2>
        <ArticleP>
          Unlike oil changes, rotor replacement is condition- and
          measurement-based rather than mileage-based:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Below minimum thickness", note: "Every rotor has a minimum thickness specification stamped into the rotor or listed in service documentation. A rotor below this spec must be replaced — it no longer has sufficient material to safely dissipate braking heat. A mechanic measures this with a micrometer." },
            { label: "During brake pad replacement", note: "When brake pads are replaced, the rotors should be inspected and measured at the same time. Whether the rotors can be reused, resurfaced, or need replacement is determined at this point." },
            { label: "When braking symptoms are present", note: "Vibration, pulsing, grinding, pulling, or longer stopping distance all warrant immediate inspection — not just tracking. These are safety-relevant symptoms." },
            { label: "Visible damage", note: "Deep grooves from metal-on-metal contact (worn pads), visible cracks, heavy rust pitting affecting the friction surface, or a blue discoloration from extreme heat are all grounds for replacement." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs brake rotors may need attention</ArticleH2>
        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "Vibration or pulsing through the brake pedal", detail: "Felt as a rhythmic pulsing or shudder through the pedal when braking, particularly at higher speeds. Indicates uneven rotor surface or thickness variation — often called 'warped' rotors. Can also cause steering wheel shake under braking." },
            { sign: "Grinding or metal-on-metal noise when braking", detail: "Grinding typically means brake pads have worn through and metal is contacting the rotor directly. This damages the rotor surface rapidly and must be addressed immediately." },
            { sign: "Longer stopping distances", detail: "If the car takes noticeably more distance to stop than usual, the braking system needs professional inspection — this is a direct safety issue." },
            { sign: "Car pulls to one side during braking", detail: "Uneven braking force from one side — caused by a sticking caliper, uneven pad wear, or rotor condition differences — causes the car to pull to one side when braking." },
            { sign: "Visible scoring or deep grooves on rotor surface", detail: "Grooves cut into the rotor face from a worn pad's metal backing indicate the rotor surface is damaged. Light surface rust that clears after a few brake applications is normal; deep grooves are not." },
            { sign: "Squealing or high-pitched noise", detail: "Some squealing can come from brake pads (wear indicators or pad material), but persistent or intermittent squealing during braking can also indicate rotor surface issues or glazing." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you ignore worn rotors</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Continued pad-to-rotor metal contact causes rapid damage to both components",
            "Reduced braking performance increases stopping distance and crash risk",
            "Severely worn rotors may crack under thermal stress, causing sudden brake failure",
            "Delayed replacement typically leads to higher repair costs — caliper damage is possible from metal-on-metal contact",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track brake rotor replacement</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of service",
            "Mileage at service",
            "Which axle — front, rear, or both",
            "Parts used (brand, specification if noted)",
            "Whether pads were also replaced",
            "Any notes about symptoms that prompted inspection",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log brake service with full notes and set
          a mileage or date reminder to re-inspect brakes at the next service
          interval.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/blog/when-to-replace-brake-pads", label: "when to replace brake pads" },
            { to: "/blog/when-to-change-brake-fluid", label: "when to change brake fluid" },
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
