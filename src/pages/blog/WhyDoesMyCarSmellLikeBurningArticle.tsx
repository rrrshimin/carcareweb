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

const ARTICLE_TITLE = "Why Does My Car Smell Like Burning?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-does-my-car-smell-like-burning";
const ARTICLE_LEDE =
  "A burning smell from a car can range from harmless (a piece of plastic caught on the exhaust) to urgent (electrical fault, oil on hot components, or overheated brakes). The nature of the smell — oil, rubber, plastic, or something metallic or acrid — and when it appears helps narrow down the likely area. Strong burning smells, visible smoke, or warning lights should not be ignored.";
const CTA_TITLE = "Log smells, symptoms, inspections, repairs, mileage, and notes in CarCare Diary";

const smellTypes = [
  {
    type: "Burning oil smell",
    causes: [
      "Oil leak dripping onto hot exhaust components or the engine block",
      "Valve cover gasket seeping oil onto the exhaust manifold",
      "Oil pan gasket leak allowing oil to drip onto hot parts below",
    ],
    note: "A burning oil smell is often strongest immediately after parking or at low speed. It may be accompanied by faint smoke from the engine bay. Check for oil leaks and the oil level.",
    link: { to: "/blog/why-is-my-car-leaking-oil", label: "oil leak guide" },
  },
  {
    type: "Burning rubber smell",
    causes: [
      "Slipping or worn serpentine belt or drive belt",
      "Rubber hose or insulation resting against a hot component",
      "Tyre skidding during aggressive braking or acceleration",
      "Worn or sticking brake pads pressing against rotors while driving",
    ],
    note: "A burning rubber smell that appears under the bonnet points to belt or hose issues. Brakes that emit a sustained rubber or metallic smell while driving (not after heavy braking) should be checked promptly.",
    link: { to: "/blog/when-to-replace-serpentine-belt", label: "serpentine belt guide" },
  },
  {
    type: "Burning plastic or electrical smell",
    causes: [
      "Plastic bag, debris, or wrapping material caught on the exhaust system",
      "Short circuit or overloaded electrical wiring",
      "Blown fuse or overheated electrical component",
      "Wiring insulation melting from heat or fault",
    ],
    note: "A burning plastic or acrid electrical smell that is persistent warrants prompt investigation. Electrical faults can pose a fire risk. If the smell is strong or the fuse box area is warm or discoloured, seek inspection.",
    link: null,
  },
  {
    type: "Hot brakes / clutch smell",
    causes: [
      "Sustained heavy braking descending a long hill (normal, fades when brakes cool)",
      "Sticking brake caliper or parking brake left partially engaged",
      "Worn brake pads worn to the metal backing plate",
      "Clutch slipping excessively (manual transmission)",
    ],
    note: "Brakes that smell hot after a single heavy stop or a long downhill run usually just need time to cool. A persistent brake smell during normal driving, or a smell accompanied by pulling to one side, reduced braking, or a grinding noise, needs inspection.",
    link: { to: "/blog/when-to-replace-brake-pads", label: "brake pads guide" },
  },
];

const articleFaqs = [
  {
    question: "Is a Burning Smell After Hard Braking Normal?",
    answer:
      "A brief burning smell after sustained heavy braking — such as descending a long steep hill — is common and caused by heat build-up in the brake pads and rotors. The smell should fade as the brakes cool. If the burning smell occurs during normal everyday braking, or if it is accompanied by a pulling sensation, noise, or reduced braking performance, the brakes should be inspected.",
  },
  {
    question: "Can a Sticking Brake Caliper Cause a Burning Smell?",
    answer:
      "Yes. A seized or sticking brake caliper can hold the brake pad against the rotor even when you are not braking, generating constant friction heat. The wheel may feel warm to the touch after driving. This is a braking system fault that needs prompt attention — it can accelerate brake wear and affect braking effectiveness.",
  },
  {
    question: "Can an Oil Leak Cause a Fire?",
    answer:
      "In theory, if oil drips onto a surface hot enough to ignite it — such as the exhaust manifold — it can cause a fire. In practice, this is uncommon with small seepage leaks, but a significant oil leak near hot exhaust components is a genuine risk. Oil leaks should be repaired promptly, not just monitored.",
  },
  {
    question: "What Does a Burning Belt Smell Like?",
    answer:
      "A slipping or burning drive belt or serpentine belt produces a sharp, acrid smell similar to burnt rubber — often described as like a burning rubber band. It tends to be most noticeable under the bonnet or just after turning off the engine. The serpentine belt should be inspected if this smell is present, along with checking for glazing, cracking, or fraying on the belt surface.",
  },
  {
    question: "Is a Burning Smell from a New Car Normal?",
    answer:
      "New vehicles or newly serviced vehicles can produce burning smells initially from oil, grease, or protective coatings on engine components burning off during the first few heat cycles. This typically fades after a few drives. If the smell persists beyond a few days or gets stronger, it is worth checking for an oil leak or improperly routed cables or hoses near hot surfaces.",
  },
  {
    question: "How Do I Track Burning Smell Incidents and Repairs?",
    answer:
      "Log the date, mileage, what the smell was like, when it appeared, and what was found and repaired. CarCare Diary lets you add notes to any service entry, so you can keep a record of symptoms and follow-up repairs per vehicle.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Does My Car Smell Like Burning? Common Causes and What to Do",
    description:
      "Learn common causes of burning smells in a car, when to stop driving, and how to track maintenance and repairs.",
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

export default function WhyDoesMyCarSmellLikeBurningArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Does My Car Smell Like Burning? Common Causes and What to Do",
    description:
      "Learn common causes of burning smells in a car, when to stop driving, and how to track maintenance and repairs.",
    path: "/blog/why-does-my-car-smell-like-burning",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why does my car smell like burning?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          Common causes include{" "}
          <strong className="text-white">oil on hot engine components,
          a slipping belt, worn brake pads or sticking caliper, clutch
          wear, electrical faults, or debris near the exhaust</strong>.
          The type and timing of the smell helps narrow the area.
          Strong smells, smoke, or warning lights need prompt attention.
        </ShortAnswerBox>

        <ArticleH2>Common burning smells and their likely causes</ArticleH2>
        <div className="flex flex-col gap-5 mb-6">
          {smellTypes.map((s) => (
            <div key={s.type} className="rounded-xl border border-panel bg-surface px-5 py-5">
              <p className="text-base font-semibold text-white mb-3">{s.type}</p>
              <ul className="flex flex-col gap-1.5 mb-3">
                {s.causes.map((c) => (
                  <li key={c} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-accent shrink-0 mt-0.5">•</span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted/80 italic">{s.note}</p>
              {s.link && (
                <p className="text-sm mt-2">
                  <Link to={s.link.to} className="text-accent font-semibold hover:text-white transition-colors">
                    → {s.link.label}
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>

        <ArticleH2>When to stop driving</ArticleH2>
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <ul className="flex flex-col gap-1.5">
              {[
                "Visible smoke from the engine bay, brakes, or wheels",
                "Strong electrical or acrid burning smell that persists",
                "Any warning light on alongside a burning smell",
                "Brakes feel soft, pull to one side, or smell strongly during normal driving",
                "Temperature warning — engine overheating can cause burning smells",
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
            "Look under the bonnet for visible oil on exhaust or engine surfaces",
            "Check the serpentine belt for glazing, cracking, or fraying",
            "Check whether the smell appears after braking or during normal driving",
            "Look for any debris (plastic, leaves) visible near the exhaust system",
            "Check whether any warning lights are on",
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
            "Known oil leaks and whether they have been repaired",
            "Last serpentine/drive belt inspection or replacement",
            "Last brake service — pad thickness, caliper condition",
            "Any prior electrical issues or fuse replacements",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track burning smell incidents</ArticleH2>
        <ArticleP>
          Logging the smell, when it appeared, and any follow-up
          inspection gives a mechanic useful context. CarCare Diary
          lets you record symptoms, notes, and repairs per service
          entry — keeping a clear history for every vehicle.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/why-is-my-car-leaking-oil", label: "oil leak causes" },
            { to: "/blog/why-are-my-brakes-squeaking", label: "brakes squeaking" },
            { to: "/blog/when-to-replace-brake-pads", label: "brake pads" },
            { to: "/blog/when-to-replace-brake-rotors", label: "brake rotors" },
            { to: "/blog/when-to-replace-serpentine-belt", label: "serpentine belt" },
            { to: "/blog/why-is-my-car-overheating", label: "car overheating" },
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
        This guide explains common causes, not a diagnosis. Strong
        burning smells, visible smoke, or warning lights should be
        treated as urgent — stop driving when safe and have the vehicle
        inspected.
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
