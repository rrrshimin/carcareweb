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

const ARTICLE_TITLE = "Why Is My Car Leaking Oil?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-is-my-car-leaking-oil";
const ARTICLE_LEDE =
  "An oil leak should be investigated rather than ignored. Running an engine with low oil can cause severe and expensive damage quickly. Common sources include the drain plug gasket, oil filter, valve cover gasket, oil pan gasket, or engine seals. The first step is to check the oil level and determine whether driving is safe before looking for the source.";
const CTA_TITLE = "Track oil changes, leak notes, mileage, and repair history in CarCare Diary";

const articleFaqs = [
  {
    question: "Is It Safe to Drive With an Oil Leak?",
    answer:
      "It depends on the severity. A very slow seep that is not causing any drop in oil level may be monitored and addressed at the next service. However, any leak that is causing the oil level to drop, producing smoke from the engine bay, or triggering the oil pressure warning light is not safe to drive with. Running an engine on insufficient oil can cause catastrophic and unrepairable damage in a short time.",
  },
  {
    question: "What Does an Oil Warning Light Mean?",
    answer:
      "The oil pressure warning light (usually a red oil can icon) means oil pressure in the engine has dropped below the safe threshold. This can be caused by a serious oil leak, critically low oil level, oil pump failure, or a blocked oil passage. This warning should be treated as serious — pull over and turn off the engine as soon as safely possible. Do not continue driving and hope it clears. Check the oil level and seek assistance if it is critically low.",
  },
  {
    question: "Not All Spots Under the Car Are Engine Oil — What Else Could It Be?",
    answer:
      "Several fluids can leave spots under a car. Engine oil is typically brown to black and oily. Transmission fluid can be red or brown and oily. Coolant (antifreeze) is often green, orange, or pink and has a sweet smell. Brake fluid is thin and clear to light amber, usually found near wheels. Power steering fluid is similar to transmission fluid in appearance. Water (often from AC condensation) is clear and only present in hot weather — this is normal. Identifying the colour, smell, and location of the spot helps narrow down the source.",
  },
  {
    question: "Can a Loose Oil Filter Cause a Leak?",
    answer:
      "Yes. An oil filter that was not tightened correctly during an oil change, or one whose seal was not seated properly, can develop a leak at the filter connection point. This may appear as oil around or below the filter housing, or dripping from the filter itself. If an oil change was recent and a leak has appeared, the filter and drain plug should be checked first.",
  },
  {
    question: "How Do I Find Where an Oil Leak Is Coming From?",
    answer:
      "A mechanic can use dye injected into the oil and a UV light to trace the source accurately. A visual inspection of common leak points — drain plug, filter, valve cover, oil pan gasket, and cam or crank seals — can often identify obvious sources. High-mileage engine leaks can sometimes have multiple minor sources, making UV dye tracing particularly useful.",
  },
  {
    question: "How Do I Track Oil Changes and Leak History?",
    answer:
      "Log each oil change with date and mileage, and note any observed leaks — including where the oil was found, whether the level dropped, and any repairs done. CarCare Diary lets you add these notes to service entries, keeping a clear record that helps a mechanic understand the history.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Is My Car Leaking Oil? Common Causes and What to Check",
    description:
      "Learn common reasons a car leaks oil, when it may be urgent, what to check safely, and how to track oil service and repairs.",
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

export default function WhyIsMyCarLeakingOilArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Is My Car Leaking Oil? Common Causes and What to Check",
    description:
      "Learn common reasons a car leaks oil, when it may be urgent, what to check safely, and how to track oil service and repairs.",
    path: "/blog/why-is-my-car-leaking-oil",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why is my car leaking oil?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          Common causes include a{" "}
          <strong className="text-white">worn drain plug gasket, oil
          filter seal, valve cover gasket, oil pan gasket, or engine seal</strong>.
          Check the oil level first. If the oil warning light is on or the
          level is critically low, do not drive further until the situation
          is assessed.
        </ShortAnswerBox>

        <ArticleH2>Check the oil level and warning light first</ArticleH2>
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-400 mb-2">Stop driving and seek help if</p>
              <ul className="flex flex-col gap-1.5">
                {[
                  "The oil pressure warning light is on (red oil can icon)",
                  "The oil level on the dipstick is at or below the minimum mark",
                  "Smoke or steam is coming from the engine bay",
                  "There is a visible heavy drip or puddle forming rapidly under the car",
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

        <ArticleH2>Not all spots under the car are engine oil</ArticleH2>
        <div className="overflow-x-auto rounded-xl border border-panel mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-panel">
                <th className="text-left px-5 py-3.5 font-semibold text-white whitespace-nowrap">Fluid</th>
                <th className="text-left px-5 py-3.5 font-semibold text-white whitespace-nowrap">Typical colour</th>
                <th className="text-left px-5 py-3.5 font-semibold text-white whitespace-nowrap">Smell</th>
                <th className="text-left px-5 py-3.5 font-semibold text-white">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { fluid: "Engine oil", colour: "Brown to black", smell: "Oily, burning smell when hot", notes: "Typically found centre or towards the front of the car under the engine" },
                { fluid: "Coolant / antifreeze", colour: "Green, orange, or pink", smell: "Sweet smell", notes: "Serious if leaking — check level when cold" },
                { fluid: "Transmission fluid", colour: "Red or brown, oily", smell: "Oily", notes: "Typically under the transmission/gearbox area" },
                { fluid: "Brake fluid", colour: "Clear to light amber", smell: "Faintly chemical", notes: "Near wheels or under brake master cylinder — safety-critical" },
                { fluid: "Power steering fluid", colour: "Red, amber, or clear", smell: "Oily", notes: "Near front of car, typically near steering rack" },
                { fluid: "AC condensation (water)", colour: "Clear water", smell: "None", notes: "Normal in warm weather — AC systems drain condensation" },
              ].map((row) => (
                <tr key={row.fluid} className="border-b border-panel last:border-0 hover:bg-surface/50 transition-colors">
                  <td className="px-5 py-3.5 text-white font-medium whitespace-nowrap">{row.fluid}</td>
                  <td className="px-5 py-3.5 text-muted whitespace-nowrap">{row.colour}</td>
                  <td className="px-5 py-3.5 text-muted whitespace-nowrap">{row.smell}</td>
                  <td className="px-5 py-3.5 text-muted">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ArticleH2>Common engine oil leak sources</ArticleH2>
        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Drain plug or drain plug gasket", note: "The drain plug in the oil pan is removed at every oil change. A worn or cross-threaded drain plug, or a damaged/missing gasket or crush washer, can cause a drip at the drain plug location. Usually noticeable shortly after an oil change." },
            { label: "Oil filter seal", note: "A poorly seated or loose oil filter can drip from the filter housing area. If a recent oil change took place and a leak appeared, the filter is one of the first things to check." },
            { label: "Valve cover gasket", note: "The valve cover sits on top of the engine and is sealed by a rubber gasket that can harden and crack over time. Valve cover leaks often result in oil pooling on top of the engine or dripping down the sides, and may cause a burning smell as oil contacts hot engine components." },
            { label: "Oil pan gasket", note: "The oil pan at the bottom of the engine holds the engine oil. The gasket sealing the pan can degrade over time, causing a slow leak at the bottom of the engine. Typically more of an ongoing slow seep than a sudden large leak." },
            { label: "Rear main seal", note: "The rear main seal seals the crankshaft where it exits the engine block. A rear main seal leak can produce a significant drip at the back of the engine, often visible on the top of the transmission or gearbox bellhousing." },
            { label: "Cam or crankshaft seals", note: "Other engine seals around rotating components can degrade over time, producing leaks at those locations. Often detected during a timing belt or serpentine belt service." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What maintenance history can help</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "When oil was last changed — a recent change makes the drain plug and filter suspect",
            "Whether the drain plug gasket or filter was noted as needing attention previously",
            "How quickly oil level is dropping — helps assess severity",
            "Any prior leak repairs and what was done",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track oil service and leaks</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log every oil change with date and mileage,
          and add notes about any observed leaks, how quickly the level dropped,
          and any repairs performed. This history is useful context for any
          mechanic investigating the cause.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-change-engine-oil", label: "when to change engine oil" },
            { to: "/blog/when-to-change-oil-filter", label: "when to change oil filter" },
            { to: "/blog/what-car-fluids-should-i-check", label: "what car fluids to check" },
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
        This guide explains common causes, not a diagnosis. If an oil
        warning light is on, the oil level is critically low, or smoke
        is coming from the engine, stop driving when safe and seek
        inspection immediately.
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
