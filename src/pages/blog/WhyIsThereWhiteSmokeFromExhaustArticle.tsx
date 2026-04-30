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

const ARTICLE_TITLE = "Why Is There White Smoke From My Exhaust?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-is-there-white-smoke-from-exhaust";
const ARTICLE_LEDE =
  "A thin white vapour from the exhaust on a cold morning is usually normal condensation burning off as the engine warms up. Thick white smoke — particularly if it persists after the engine is warm, has a sweet smell, or comes alongside overheating or coolant loss — points to a more serious problem that warrants prompt inspection.";
const CTA_TITLE = "Track coolant changes, overheating symptoms, smoke notes, repairs, and mileage in CarCare Diary";

const articleFaqs = [
  {
    question: "Is White Smoke From the Exhaust Always Serious?",
    answer:
      "Not always. A brief, thin white vapour on a cold start is normal in cool weather — it is condensation evaporating from the exhaust system as it heats up. It should clear within a minute or two of the engine warming up. Thick white smoke that persists after warm-up, appears alongside coolant loss, overheating, or a sweet smell, or is present on an engine that is already warm, is a cause for concern and should be inspected.",
  },
  {
    question: "What Causes Persistent Thick White Smoke?",
    answer:
      "Persistent thick white smoke typically indicates coolant is entering the combustion chamber and being burned with the fuel. Common causes include a blown head gasket, cracked cylinder head, or less commonly a cracked engine block. These allow coolant to leak internally into a combustion chamber. The coolant burns and exits as thick white smoke from the exhaust.",
  },
  {
    question: "What Is a Head Gasket and Why Does It Fail?",
    answer:
      "The head gasket seals the junction between the cylinder head and the engine block, keeping combustion gases, oil, and coolant from mixing. Head gaskets can fail due to overheating (the most common cause), age and mileage, or manufacturing issues. A failed head gasket can allow coolant into the cylinders (white smoke), oil into the coolant (milky, frothy oil), or combustion gases into the coolant (bubbling in the overflow tank).",
  },
  {
    question: "What Is the Sweet Smell With White Smoke?",
    answer:
      "Coolant (antifreeze) has a distinctively sweet smell when burned. If the white smoke from the exhaust has a sweet or syrupy odour, it strongly suggests coolant is entering the combustion process — a sign of an internal coolant leak such as a failed head gasket or cracked cylinder head.",
  },
  {
    question: "Can I Keep Driving With White Smoke From the Exhaust?",
    answer:
      "If the smoke is thin and only appears briefly on a cold start in cool weather, normal driving is generally fine — just monitor it. If the smoke is thick, persists when warm, accompanies overheating, or the coolant level is dropping without an obvious external leak, stop driving and seek inspection. Continued driving with a failing head gasket or head crack can cause severe and irreparable engine damage.",
  },
  {
    question: "How Do I Track Cooling System History?",
    answer:
      "Log each coolant change, top-up, overheating event, or cooling system repair with date and mileage. Note the coolant type used and any prior overheating incidents. This context is directly relevant if a head gasket issue is suspected — a mechanic will want to know if the engine has ever overheated.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Is There White Smoke From Exhaust? Common Causes and Warning Signs",
    description:
      "Learn common reasons for white smoke from the exhaust, when it may be normal, when it may be serious, and how to track repairs.",
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

export default function WhyIsThereWhiteSmokeFromExhaustArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Is There White Smoke From Exhaust? Common Causes and Warning Signs",
    description:
      "Learn common reasons for white smoke from the exhaust, when it may be normal, when it may be serious, and how to track repairs.",
    path: "/blog/why-is-there-white-smoke-from-exhaust",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why is there white smoke from my exhaust?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <DisclaimerBox />
        <ShortAnswerBox>
          <strong className="text-white">Brief thin vapour on a cold start</strong> is
          usually normal condensation. <strong className="text-white">Thick white smoke
          that persists when the engine is warm</strong>, has a sweet smell,
          accompanies overheating, or comes with coolant loss, suggests
          an internal coolant leak — a serious issue requiring prompt
          inspection.
        </ShortAnswerBox>

        <ArticleH2>Normal vs. concerning white smoke</ArticleH2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border border-green-400/20 bg-green-400/5 px-5 py-4">
            <p className="text-sm font-semibold text-green-400 mb-2">Usually normal</p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Thin, light vapour on cold start",
                "Clears within a minute or two of warm-up",
                "No sweet smell",
                "Coolant level is stable",
                "No overheating",
              ].map((item) => (
                <li key={item} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-green-400 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4">
            <p className="text-sm font-semibold text-red-400 mb-2">Warrants inspection</p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Thick, heavy smoke persisting when warm",
                "Sweet or syrupy smell from exhaust",
                "Coolant level dropping without visible leak",
                "Engine overheating or temperature warning",
                "Milky or frothy substance on oil dipstick or filler cap",
              ].map((item) => (
                <li key={item} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red-400 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ArticleH2>Common causes of persistent white smoke</ArticleH2>
        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Head gasket failure",
              detail: "The head gasket seals between the cylinder head and engine block. When it fails, coolant can leak internally into the combustion chamber and burn with the fuel, producing thick white smoke with a sweet smell. Overheating is the most common trigger for head gasket failure. This is a serious repair that should not be deferred.",
            },
            {
              label: "Cracked cylinder head",
              detail: "A crack in the cylinder head can allow coolant into the combustion chamber. The symptoms are similar to head gasket failure — white smoke, sweet smell, coolant loss, and possible overheating. Determining whether the head gasket or the head itself is cracked requires inspection by a mechanic.",
            },
            {
              label: "Coolant loss without visible external leak",
              detail: "If the coolant level is dropping but there is no obvious external leak (puddle under the car, visible wet areas), the coolant may be leaking internally into the combustion chamber. White smoke from the exhaust is a key indicator of this.",
            },
            {
              label: "Diesel engines: normal on cold starts",
              detail: "White or grey-white smoke on a cold start is more common and generally more acceptable on diesel engines, particularly older ones. It can also be caused by glow plug issues affecting cold-start combustion. Persistent white or blue-white smoke on a diesel when warm is still worth investigating.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>When to stop driving</ArticleH2>
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <ul className="flex flex-col gap-1.5">
              {[
                "Temperature warning light is on or the temperature gauge is in the red",
                "White smoke is heavy and continuous from a warm engine",
                "Coolant level has dropped significantly",
                "Milky or frothy oil is visible on the dipstick (suggests coolant in oil)",
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
            "Check coolant level in the reservoir when the engine is cold",
            "Check the oil dipstick — milky or frothy oil suggests coolant contamination",
            "Check the underside of the oil filler cap for a white or creamy residue",
            "Note whether the smoke clears after warm-up or persists",
            "Note whether there is a sweet smell",
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
            "Whether the engine has ever overheated — overheating is the main cause of head gasket failure",
            "When coolant was last changed and what type was used",
            "Whether coolant has been topped up frequently without explanation",
            "Any prior cooling system repairs (water pump, thermostat, radiator)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track cooling system history</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log each coolant change, top-up, overheating
          event, and cooling system repair with date, mileage, and notes.
          Prior overheating history is the most critical piece of information
          for a mechanic investigating possible head gasket issues.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-change-coolant", label: "when to change coolant" },
            { to: "/blog/why-is-my-car-overheating", label: "car overheating" },
            { to: "/blog/what-car-fluids-should-i-check", label: "car fluids to check" },
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
        This guide explains common causes, not a diagnosis. Thick white
        smoke, overheating, or coolant loss can indicate serious engine
        problems. Stop driving when safe and seek inspection if these
        symptoms are present.
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
