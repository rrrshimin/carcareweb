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

const ARTICLE_TITLE = "When To Replace Headlights";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-headlights";
const ARTICLE_LEDE =
  "Headlights are a direct safety item — they need to work reliably and provide adequate brightness for safe night driving. Unlike most maintenance items, headlights don't follow a mileage schedule. Replace them when they burn out, become noticeably dim, flicker, change colour, or no longer give confidence at night. Waiting until a bulb fails completely means one night of driving blind on one side.";
const CTA_TITLE = "Log headlight bulb replacements and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Long Do Headlight Bulbs Last?",
    answer:
      "Lifespan varies considerably by bulb type. Halogen bulbs are the most common type and are often rated for hundreds to over a thousand hours of use, but real-world life depends on vibration, heat, and how often they are used. HID/xenon bulbs can last considerably longer. LED headlights — either factory-fitted or aftermarket — can last significantly longer still, and in many vehicles are expected to last the life of the car. When a halogen or HID bulb fails, it has simply reached the end of its natural life.",
  },
  {
    question: "Should I Replace Both Headlight Bulbs at the Same Time?",
    answer:
      "For halogen and HID headlights, many mechanics and vehicle manufacturers recommend replacing both bulbs at the same time even if only one has failed. Both bulbs were installed at the same time and have the same hours of use — the other is likely to fail soon after the first. Replacing both ensures even brightness across both headlights. This recommendation is less applicable to LED headlights, which are not typically sold or replaced in the same way.",
  },
  {
    question: "What Are the Main Headlight Bulb Types?",
    answer:
      "The three main types in common use are: halogen (the most common, uses a tungsten filament in a halogen gas-filled bulb — warm white light, relatively affordable to replace), HID/xenon (high-intensity discharge bulbs that produce a brighter, whiter or slightly blue-white light — common in mid-range and luxury vehicles from the 2000s–2010s), and LED (increasingly standard in newer vehicles, very long lifespan, bright white light). Some modern vehicles use laser headlights, but these are rare and specialist. Check your owner's manual for the correct bulb type for your vehicle.",
  },
  {
    question: "Can I Replace Headlight Bulbs Myself?",
    answer:
      "On many vehicles with halogen bulbs, replacing a headlight bulb is a DIY job — access is typically from behind the headlight housing in the engine bay, and no tools may be needed. However, on many modern vehicles, the headlight assembly is tightly packaged and may require removing bumper covers, wheel arch liners, or other components for access. HID and LED systems can involve high-voltage components — exercise caution or have these done by a mechanic. Always check your owner's manual or a vehicle-specific guide before attempting a bulb change.",
  },
  {
    question: "What Is Headlight Oxidation and Does It Affect Brightness?",
    answer:
      "Many vehicles with polycarbonate headlight lenses experience oxidation over time — the lens surface yellows, hazes, or becomes cloudy from UV exposure. This significantly reduces light output even when the bulbs are new. Headlight restoration kits can polish the lens back to clarity, or the lens can be professionally restored or replaced. If your headlights seem dim despite having recently replaced bulbs, oxidised lenses may be a factor.",
  },
  {
    question: "How Do I Track Headlight Replacements?",
    answer:
      "Log the date and bulb type when replacing headlights. Noting the brand and part number can be useful for ensuring consistent paired replacement. CarCare Diary lets you record any vehicle service with date, notes, and the type of work done.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace Headlights: Signs, Bulb Types and Safety Tips",
    description:
      "Learn when to replace headlights, signs bulbs are getting weak, and how to track light replacements in CarCare Diary.",
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

export default function WhenToReplaceHeadlightsArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Replace Headlights: Signs, Bulb Types and Safety Tips",
    description:
      "Learn when to replace headlights, signs bulbs are getting weak, and how to track light replacements in CarCare Diary.",
    path: "/blog/when-to-replace-headlights",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you replace headlights?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Replace headlight bulbs when they{" "}
          <strong className="text-white">burn out, become noticeably dim,
          flicker, or change colour</strong>. There is no mileage schedule —
          replace on condition. For halogen and HID bulbs, replacing both sides
          at the same time is commonly recommended.
        </ShortAnswerBox>

        <ArticleH2>Headlight bulb types</ArticleH2>
        <ArticleP>
          The type of headlight in your vehicle affects how often replacement
          is needed and how it is done:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Halogen", note: "The most common type in vehicles up to the mid-2010s. Uses a tungsten filament in a gas-filled bulb. Produces warm white light. Affordable to replace. Subject to natural burnout — lifespan is finite and both bulbs are often replaced together when one fails." },
            { label: "HID / Xenon", note: "High-intensity discharge bulbs common in mid-range and luxury vehicles from roughly the 2000s–2010s. Brighter, whiter output than halogen. Longer lifespan than halogen but can still degrade and dim over time. Involve high-voltage components — replacement often done by a mechanic." },
            { label: "LED", note: "Increasingly standard in newer vehicles. Very long operational lifespan — factory-fitted LED headlights are often expected to last the life of the car. When an LED headlight fails, it may be the driver module or assembly rather than a simple replaceable bulb." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs headlights need replacing</ArticleH2>
        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "One headlight has burned out", detail: "The most obvious sign. Replace promptly — driving with one headlight significantly reduces visibility and is illegal in most jurisdictions. Replace both bulbs at the same time if they are halogen or HID." },
            { sign: "Noticeably dimmer output", detail: "Halogen and HID bulbs gradually dim as they age, often so slowly that the change goes unnoticed until side-by-side comparison. If one headlight appears significantly dimmer than the other, the dimmer one is likely nearing the end of its life." },
            { sign: "Flickering", detail: "Intermittent flickering when the car hits a bump or when the light is first switched on can indicate a failing bulb filament or a loose connection. Any flickering should be investigated." },
            { sign: "Colour change or uneven beam", detail: "Aging HID bulbs in particular can shift colour — often becoming more yellow or pink rather than their original white output. An uneven or asymmetric beam pattern can indicate a bulb has partially failed or is installed incorrectly." },
            { sign: "Dashboard warning message", detail: "Many modern vehicles display a warning when a headlight or other exterior bulb fails. Do not ignore this — the warning identifies which light needs attention." },
            { sign: "Cloudy or yellowed lens", detail: "Oxidised, cloudy, or yellowed headlight lenses reduce output even when the bulb is new. This is a lens condition rather than a bulb issue — lenses can be polished or restored." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Why headlight maintenance matters for safety</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Reduced night visibility significantly increases stopping distance and reaction time",
            "One failed headlight makes the car appear to be a motorcycle to oncoming traffic",
            "Dim headlights reduce the ability to see pedestrians, cyclists, and road hazards at speed",
            "Failed headlights are illegal in most jurisdictions and may result in a fine or failed roadworthiness inspection",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track headlight replacements</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of replacement",
            "Bulb type and brand (useful for paired replacement)",
            "Which side — left, right, or both",
            "Any notes about condition that prompted replacement",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log light replacements with date and notes.
          Knowing when the current bulbs were installed makes it easy to act
          proactively when the other side is likely due.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/blog/when-to-replace-windshield-wipers", label: "when to replace windshield wipers" },
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
