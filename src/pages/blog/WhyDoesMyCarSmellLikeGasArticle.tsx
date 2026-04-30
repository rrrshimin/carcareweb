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

const ARTICLE_TITLE = "Why Does My Car Smell Like Gas?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-does-my-car-smell-like-gas";
const ARTICLE_LEDE =
  "A fuel smell from a car should be taken seriously. While brief, faint fuel smells after filling up or starting a cold engine can sometimes be normal, a persistent or strong fuel smell — particularly inside the cabin — is a safety concern. Fuel is flammable and a significant leak can pose a fire risk. If in doubt, stop driving and seek inspection.";
const CTA_TITLE = "After inspection or repair, log the issue, mileage, parts, and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "Is a Gas Smell from a Car Dangerous?",
    answer:
      "It can be. Fuel vapour is flammable and a significant fuel leak near a heat source or ignition point can cause a fire. A strong, persistent fuel smell — particularly inside the cabin — should be treated as a safety issue. Turn off the engine, avoid sparks or open flames, do not smoke near the vehicle, and have the car inspected before driving further.",
  },
  {
    question: "Is It Normal to Smell Gas After Filling Up?",
    answer:
      "A brief, faint smell of fuel immediately after filling up — particularly if fuel was spilled on the exterior — is common and typically fades quickly. Fuel residue on the hands, filler cap area, or exterior of the car produces a temporary smell. If the smell persists or is strong after the car has been driven a short distance, the filler cap or a vapour leak is worth checking.",
  },
  {
    question: "Can a Loose Gas Cap Cause a Fuel Smell?",
    answer:
      "Yes. A loose, damaged, or missing fuel filler cap allows fuel vapour to escape from the tank, which can produce a fuel smell — particularly after filling up. Tightening or replacing a faulty cap is one of the first and simplest things to check. A loose cap can also trigger the evaporative emissions system check engine light (EVAP fault code).",
  },
  {
    question: "Why Does My Car Smell Like Gas After Driving?",
    answer:
      "A fuel smell after driving can come from several sources: a fuel injector that is leaking or not sealing properly when the engine is off (allowing fuel to drip into the engine bay), a fuel line or connection leak, an evaporative emissions system fault, or exhaust issues causing unburned fuel smell from the tailpipe. Any persistent post-drive fuel smell should be investigated.",
  },
  {
    question: "Can a Fuel Leak Be Invisible?",
    answer:
      "Yes. Small fuel leaks from injector seals, fuel line connections, or the EVAP system may not produce a visible puddle under the car. The vapour or very small drip can produce a smell before a visible leak becomes apparent. This is one reason fuel smells should not be dismissed even when no visible leak is found.",
  },
  {
    question: "How Do I Track Fuel System Repairs?",
    answer:
      "After the cause of a fuel smell is found and repaired, log the date, mileage, what was found, and what was repaired or replaced. CarCare Diary lets you add notes to any service entry to record symptoms, faults, and repairs.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Does My Car Smell Like Gas? Common Causes and Safety Tips",
    description:
      "Learn common reasons your car may smell like gas, when to stop driving, and how to track fuel-system repairs and maintenance history.",
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

export default function WhyDoesMyCarSmellLikeGasArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Does My Car Smell Like Gas? Common Causes and Safety Tips",
    description:
      "Learn common reasons your car may smell like gas, when to stop driving, and how to track fuel-system repairs and maintenance history.",
    path: "/blog/why-does-my-car-smell-like-gas",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why does my car smell like gas?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-400 mb-2">Stop driving and seek inspection if</p>
              <ul className="flex flex-col gap-1.5">
                {[
                  "The fuel smell is strong or persistent — not just briefly after filling up",
                  "You can smell fuel inside the cabin",
                  "There is a visible fuel leak or wet patch under the car",
                  "The smell appears alongside a warning light",
                ].map((item) => (
                  <li key={item} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-red-400 shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted/70 mt-3 italic">Fuel is flammable. Do not smoke near the vehicle or allow any ignition sources near a suspected fuel leak.</p>
            </div>
          </div>
        </div>

        <ShortAnswerBox>
          Common causes include a{" "}
          <strong className="text-white">loose or faulty fuel cap, fuel
          injector leak, fuel line leak, evaporative emissions fault,
          or spilled fuel</strong>. A strong smell or fuel smell inside
          the cabin is a safety concern — seek inspection promptly.
        </ShortAnswerBox>

        <ArticleH2>Common causes of a fuel smell</ArticleH2>
        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Loose, damaged, or missing fuel cap", note: "Fuel vapour escapes from an unsealed filler cap and can produce a noticeable smell, particularly after filling up. This is one of the first and simplest things to check. A loose or faulty cap can also trigger the EVAP fault code and check engine light." },
            { label: "Fuel spilled during filling", note: "Fuel spilled on the exterior of the car or on hands during filling produces a temporary smell that fades. If the smell fades within a short drive and does not return, spilled fuel is the likely cause." },
            { label: "Fuel injector leak or seal failure", note: "A leaking injector seal or a cracked injector body can drip fuel into the engine bay, particularly after the engine is turned off when hot fuel continues to be present in the rail. This can produce a persistent post-drive smell." },
            { label: "Fuel line or connection leak", note: "A crack, loose connection, or corroded section of fuel line can leak fuel — either as a visible drip or as vapour. Any visible fuel line leak is a safety issue requiring immediate attention." },
            { label: "Evaporative emissions (EVAP) system fault", note: "The EVAP system is designed to capture fuel vapour from the tank and prevent it from escaping into the atmosphere. A faulty canister, purge valve, or hose in this system can allow vapour to escape, producing a fuel smell. Typically results in an EVAP fault code on the OBD system." },
            { label: "Rich running or exhaust fuel smell", note: "An engine running too rich (more fuel than air) can produce an unburned fuel smell from the exhaust. This can be caused by a faulty oxygen sensor, MAF sensor, fuel pressure regulator, or fuel injector fault. Usually comes with a check engine light and possible black smoke from the exhaust." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What to check first</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Ensure the fuel filler cap is properly seated and tight",
            "Look for any visible wet areas under the car or near the engine bay",
            "Note when the smell is strongest — after filling up, after driving, or when the engine is warm",
            "Check for a check engine light — EVAP codes are common with vapour leaks",
            "If the smell is inside the cabin or the leak is visible, do not drive until inspected",
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
            "Any prior fuel system repairs or injector work",
            "When fuel filter was last replaced (where applicable)",
            "Whether a check engine light was recently on or is currently on",
            "Any recent work near fuel lines or the EVAP system",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track fuel system repairs</ArticleH2>
        <ArticleP>
          CarCare Diary does not scan OBD codes, but after the cause of
          a fuel smell is diagnosed and repaired, you can log the fault code,
          what was found, what was repaired or replaced, date, and mileage.
          Keeping a complete record is useful if the issue recurs.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/what-does-check-engine-light-mean", label: "what does check engine light mean" },
            { to: "/blog/when-to-change-fuel-filter", label: "when to change fuel filter" },
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
