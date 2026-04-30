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

const ARTICLE_TITLE = "Why Are My Brakes Squeaking?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-are-my-brakes-squeaking";
const ARTICLE_LEDE =
  "Brake noise ranges from harmless to urgent. An occasional light squeak after wet weather or the first few stops in the morning is often normal. Persistent squealing, grinding, vibration through the pedal, or any change in braking performance is not normal and should be inspected. Brakes are safety-critical — when in doubt, have them checked.";
const CTA_TITLE = "Track brake pad, rotor, and brake fluid service in CarCare Diary";

const articleFaqs = [
  {
    question: "Is Brake Squeak Always Serious?",
    answer:
      "Not always. Occasional light squeaking after wet weather, overnight condensation, or the first few brake applications in the morning is common and usually clears quickly. Surface rust on rotors that has not been cleared by driving can also cause a brief squeak. However, persistent squealing during every brake application, or any grinding noise, is not normal and warrants prompt inspection.",
  },
  {
    question: "What Is the Brake Pad Wear Indicator?",
    answer:
      "Most brake pads include a small metal wear indicator — a tab that contacts the rotor when the pad material wears to a certain minimum thickness. This contact produces a high-pitched squealing sound designed to alert the driver that the pads need replacing. The sound is usually constant during braking rather than intermittent. If you hear this squeal consistently, the pads should be inspected promptly.",
  },
  {
    question: "Can Glazed Brake Pads Cause Squeaking?",
    answer:
      "Yes. Glazing occurs when brake pads or rotors develop a hardened, smooth surface from overheating — often from extended light braking down a hill, or from pads that were bedded in improperly. Glazed surfaces can squeak and also reduce braking efficiency. A mechanic can assess whether pads need replacement or rotors need resurfacing.",
  },
  {
    question: "How Long Can I Drive With Squeaking Brakes?",
    answer:
      "It depends on the cause. If the noise is the wear indicator squeal, the pads are approaching their minimum thickness — get them checked within the next few days. If there is grinding, reduced braking ability, or the pedal feels different, stop driving and have the brakes inspected immediately. Do not guess on brake issues — err on the side of having them inspected sooner.",
  },
  {
    question: "Can New Brake Pads Squeak?",
    answer:
      "Yes. New brake pads can squeak during the bedding-in period as the pad material conforms to the rotor surface. This usually settles within a few hundred miles of normal driving. Some high-performance pad compounds are more prone to noise than standard pads. If noise is significant or persistent beyond the break-in period, the installation or pad choice may need reviewing.",
  },
  {
    question: "How Do I Track Brake Service History?",
    answer:
      "Log each brake service — pad replacement, rotor replacement, fluid change — with date, mileage, which axle, parts used, and any observations about brake condition at the time of service. CarCare Diary lets you record brake service with full notes and set a reminder for the next inspection.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Are My Brakes Squeaking? Common Causes and Safety Tips",
    description:
      "Learn common causes of squeaking brakes, when brake noise is serious, and how to track brake service history.",
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

export default function WhyAreMyBrakesSqueakingArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Are My Brakes Squeaking? Common Causes and Safety Tips",
    description:
      "Learn common causes of squeaking brakes, when brake noise is serious, and how to track brake service history.",
    path: "/blog/why-are-my-brakes-squeaking",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why are my brakes squeaking?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          Common causes include{" "}
          <strong className="text-white">worn pad wear indicators, brake
          dust, surface moisture, glazed pads or rotors, or loose hardware</strong>.
          A brief squeak after rain is often normal. Persistent squealing,
          grinding, or any change in braking performance should be inspected
          promptly.
        </ShortAnswerBox>

        <ArticleH2>When brake noise needs urgent attention</ArticleH2>
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-400 mb-2">Get the brakes inspected without delay if you notice</p>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Grinding or metal-on-metal sound when braking",
                  "Noticeably longer stopping distance",
                  "Car pulls to one side when braking",
                  "Brake pedal feels soft, spongy, or sinks to the floor",
                  "Vibration or pulsing through the pedal",
                  "Brake warning light on the dashboard",
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

        <ArticleH2>Common causes of brake squeaking</ArticleH2>
        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Brake pad wear indicator", note: "Most pads have a metal wear indicator that contacts the rotor when the pad wears to minimum thickness, producing a persistent high-pitched squeal. This is a deliberate warning — if you hear a consistent squeal during braking, have the pads inspected soon." },
            { label: "Surface moisture and overnight rust", note: "Light surface rust develops on iron rotors when the car sits overnight or in wet weather. The first few brake applications typically clear this rust and the squeak. This is normal and not a cause for concern if it clears quickly." },
            { label: "Brake dust or debris", note: "Small debris or accumulated brake dust trapped between the pad and rotor can cause squeaking. This may clear on its own or may require cleaning during a brake inspection." },
            { label: "Glazed brake pads or rotors", note: "Overheating from sustained light braking can cause pad material or rotor surface to glaze — hardening and smoothing the friction surface. Glazed surfaces squeak and may reduce stopping performance. A mechanic can assess whether pads or rotors need replacing." },
            { label: "Worn brake pads approaching metal", note: "As pads wear beyond the indicator, the metal backing plate may begin to contact the rotor directly — producing a grinding sound rather than a squeak. Grinding is more urgent than squealing." },
            { label: "Loose or dry hardware", note: "Brake pad retaining clips, shims, or caliper hardware can loosen or corrode over time, causing rattling or squeaking noises that are not directly related to pad wear. Typically addressed during a brake service." },
            { label: "New brake pads bedding in", note: "New pads may squeak during the first few hundred miles as they bed in to the rotor surface. This usually settles with normal driving." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What maintenance history can help explain brake noise</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "When brake pads were last replaced and mileage at that service",
            "When rotors were last replaced or inspected",
            "Brake fluid change history",
            "Any prior brake-related notes — noise, vibration, or pulling",
            "How many miles since the last brake service",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track brake service history</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log brake pad replacements, rotor
          replacements, brake fluid changes, and any notes about noise or
          symptoms — with date, mileage, and parts used. A complete brake
          history makes it easier to plan ahead and brief a mechanic accurately.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-replace-brake-pads", label: "when to replace brake pads" },
            { to: "/blog/when-to-replace-brake-rotors", label: "when to replace brake rotors" },
            { to: "/blog/when-to-change-brake-fluid", label: "when to change brake fluid" },
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
        This guide explains common causes, not a diagnosis. If brake noise
        is accompanied by reduced braking performance, grinding, pulling,
        or a warning light, stop driving when safe and have the vehicle
        inspected by a qualified mechanic.
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
