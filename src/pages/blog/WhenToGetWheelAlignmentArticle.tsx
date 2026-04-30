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

const ARTICLE_TITLE = "When To Get a Wheel Alignment";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-get-wheel-alignment";
const ARTICLE_LEDE =
  "Wheel alignment is typically checked when symptoms suggest it is off, after suspension or steering work, after hitting a significant pothole or kerb, or when new tires are fitted. Some drivers also check alignment annually as a precaution. Misalignment gradually damages tires and affects handling — catching it early reduces tire replacement costs and keeps the car driving as intended.";
const CTA_TITLE = "Track alignments, tire rotations, tire pressure checks, and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Get a Wheel Alignment?",
    answer:
      "There is no universal scheduled interval like an oil change. Most drivers check alignment when symptoms appear — pulling, uneven tire wear, or an off-centre steering wheel. Some manufacturers and mechanics recommend checking alignment annually or when new tires are installed. After any significant suspension, steering, or wheel work, an alignment check is generally recommended as a matter of course.",
  },
  {
    question: "What Is Wheel Alignment?",
    answer:
      "Wheel alignment refers to the angles at which the tires contact the road relative to each other and the vehicle. The main parameters are camber (the inward or outward tilt of the tire when viewed from the front), toe (whether the fronts of the tires point inward or outward when viewed from above), and caster (the angle of the steering axis when viewed from the side). All three affect tire wear, handling, and straight-line tracking. Adjustments are made to specific values specified for the vehicle.",
  },
  {
    question: "Can Wheel Alignment Affect Tire Wear?",
    answer:
      "Yes, significantly. Even small misalignment causes tires to scrub rather than roll cleanly, producing uneven wear patterns. Excessive toe misalignment causes feathering wear across the tread. Excessive camber causes wear on the inner or outer edge of the tire. A set of tires can wear out considerably faster than expected if alignment is not corrected, making the cost of regular alignment checks worthwhile compared to early tire replacement.",
  },
  {
    question: "Is Wheel Alignment the Same as Wheel Balancing?",
    answer:
      "No. Wheel alignment refers to the angles at which the tires contact the road. Wheel balancing addresses the distribution of weight around the wheel and tire assembly — imbalance causes vibration, typically felt through the steering wheel at certain speeds. Both affect ride quality and tire wear, but they are separate procedures. Balancing is typically done when tires are fitted or rotated.",
  },
  {
    question: "Do I Need an Alignment After Hitting a Pothole or Kerb?",
    answer:
      "A significant impact — a deep pothole at speed, or a hard kerb strike — can knock suspension components out of their alignment settings. Not every pothole requires an alignment check, but if the car starts pulling to one side, the steering wheel sits at an angle, or tires begin wearing unevenly after an impact, an alignment check is warranted.",
  },
  {
    question: "How Do I Track Wheel Alignment Service?",
    answer:
      "Log the date and mileage of each alignment check and any notes — such as what prompted it, what was adjusted, or whether it was done alongside tire fitting or suspension work. CarCare Diary lets you record any vehicle service with date, mileage, and notes.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Get a Wheel Alignment: Signs and Timing",
    description:
      "Learn when to get a wheel alignment, signs your alignment may be off, and how to track tire and alignment service history.",
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

export default function WhenToGetWheelAlignmentArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Get a Wheel Alignment: Signs and Timing",
    description:
      "Learn when to get a wheel alignment, signs your alignment may be off, and how to track tire and alignment service history.",
    path: "/blog/when-to-get-wheel-alignment",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you get a wheel alignment?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Check alignment when <strong className="text-white">symptoms appear</strong> (pulling,
          uneven tire wear, off-centre steering), after hitting a significant
          pothole or kerb, after suspension or steering work, and when fitting
          new tires. Some drivers also check{" "}
          <strong className="text-white">annually</strong> as a precaution.
        </ShortAnswerBox>

        <ArticleH2>When to get a wheel alignment check</ArticleH2>
        <ArticleP>
          Unlike oil changes, alignment does not have a universal mileage
          interval. The main triggers are:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "When symptoms appear", note: "The most important trigger. Any of the warning signs below — pulling, off-centre steering, uneven tire wear — indicate an alignment check is needed regardless of mileage." },
            { label: "After hitting a significant pothole or kerb", note: "A hard impact can move suspension components out of alignment. Not every small bump warrants a check, but a significant impact — especially if any symptoms appear afterward — does." },
            { label: "After suspension, steering, or wheel work", note: "Replacing suspension components (struts, control arms, tie rods), steering rack, or wheel bearings can affect alignment settings. An alignment check is typically recommended as part of this work." },
            { label: "When fitting new tires", note: "Fitting new tires is a sensible time to also check alignment, as any existing misalignment will immediately begin affecting the life of the new tires." },
            { label: "Annual check (optional precaution)", note: "Some mechanics recommend an annual alignment check on vehicles without specific symptoms, as gradual changes from road use accumulate over time and may not produce obvious symptoms until wear is already occurring." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs wheel alignment may be off</ArticleH2>
        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "Car pulls to one side on a straight road", detail: "One of the clearest alignment symptoms. On a straight, flat, empty road the car should track straight with minimal steering input. A noticeable pull to the left or right suggests misalignment or uneven tyre pressure. Check tyre pressure first." },
            { sign: "Steering wheel is off-centre when driving straight", detail: "If the steering wheel sits noticeably to the left or right of centre when the car is tracking straight, the alignment is likely out of specification." },
            { sign: "Uneven or unusual tyre tread wear", detail: "Misalignment causes tires to scrub at an angle rather than rolling cleanly. This produces characteristic wear patterns — feathering across the tread from toe misalignment, or inner/outer edge wear from camber issues." },
            { sign: "Handling feels imprecise or wandering", detail: "A car that requires constant minor steering correction to hold a straight line, or feels unstable in corners, may have alignment issues alongside or instead of other suspension problems." },
            { sign: "Vibration or shimmy", detail: "Alignment issues can contribute to vibration, though this is more commonly caused by wheel imbalance. If vibration persists after balancing, alignment and suspension components are worth checking." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you ignore misalignment</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Accelerated and uneven tire wear — tires may need replacement far sooner than they should",
            "Reduced fuel economy from increased rolling resistance",
            "Steering that requires constant correction, increasing driver fatigue",
            "Potential wear on suspension components from sustained operation out of spec",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track alignment service</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of alignment check",
            "Mileage at alignment",
            "Whether any adjustment was made or alignment was already within spec",
            "What prompted the check (symptoms, post-suspension work, new tires)",
            "Any notes about tire wear patterns observed",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log alignment checks alongside tire rotations,
          pressure checks, and other tire maintenance. Keeping all tire-related
          entries together makes it easier to see the full picture of your
          tire service history.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/blog/when-to-rotate-tires", label: "when to rotate tires" },
            { to: "/blog/when-to-check-tire-pressure", label: "when to check tire pressure" },
            { to: "/blog/when-to-replace-brake-pads", label: "when to replace brake pads" },
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
