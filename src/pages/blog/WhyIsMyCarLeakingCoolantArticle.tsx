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

const ARTICLE_TITLE = "Why Is My Car Leaking Coolant?";
const ARTICLE_CATEGORY = "Troubleshooting";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/why-is-my-car-leaking-coolant";
const ARTICLE_LEDE =
  "A coolant leak — whether a puddle under the car, a dropping coolant level, or a sweet smell — needs attention before it leads to overheating. Coolant leaks can come from a number of places in the cooling system, and some are simpler to fix than others. The most important thing is to not ignore a low coolant level or a temperature warning.";
const CTA_TITLE = "Track coolant changes, leak symptoms, overheating notes, repairs, mileage, and fluid type in CarCare Diary";

const leakSources = [
  {
    label: "Radiator",
    detail: "The radiator can develop leaks at the core (cracks or corrosion), at the plastic end tanks (common on older vehicles), or at the fittings. Radiator leaks may show as a slow drip at the front of the vehicle or as a drop in coolant level without an obvious source. Antifreeze may also be visible as a dried residue around cracks.",
  },
  {
    label: "Coolant hoses",
    detail: "Upper and lower radiator hoses, and smaller coolant hoses throughout the system, can crack, swell, or develop leaks at their connection clamps over time. Hose leaks often show as wetness or a dried residue around the hose ends or at the clamp location. Squeezing a cold hose and feeling for softness, sponginess, or brittleness can indicate a hose that is close to failure.",
  },
  {
    label: "Water pump",
    detail: "The water pump circulates coolant through the engine and cooling system. Water pumps have a shaft seal and often a weep hole designed to drip when the seal is beginning to fail. A small coolant drip from the weep hole or shaft area, often at the front of the engine, indicates the water pump seal is degrading. Water pump failure can also cause overheating if it stops circulating coolant.",
  },
  {
    label: "Thermostat housing",
    detail: "The thermostat housing connects the coolant passages in the engine to the coolant lines. The housing gasket or the housing itself can leak, particularly on plastic housings as they age. Leaks typically appear at the junction between the housing and the engine block.",
  },
  {
    label: "Coolant reservoir / overflow tank",
    detail: "The coolant overflow reservoir is a plastic tank that can crack or develop a leak at its connections. A cracked reservoir may show as a slow coolant loss without a visible puddle, as the leak may only occur when the system is pressurised.",
  },
  {
    label: "Radiator cap",
    detail: "A weak or failing radiator cap does not hold the system's designed pressure. This can cause coolant to boil and vent at a lower temperature than normal, leading to coolant loss through the overflow. A cap that is no longer sealing correctly is an inexpensive fix.",
  },
  {
    label: "Heater core",
    detail: "The heater core is a small radiator inside the cabin that provides heating. A heater core leak can appear as a sweet smell inside the cabin, a film or fogging on the inside of the windscreen, or wet carpet on the passenger side floor. Heater core repairs can be involved, as the core is typically buried behind the dashboard.",
  },
  {
    label: "Head gasket (internal leak)",
    detail: "A failing head gasket can leak coolant internally into the combustion chamber rather than producing an external puddle. Signs include white smoke from the exhaust with a sweet smell, milky or frothy oil, a dropping coolant level without visible external leak, and overheating. This is a serious and typically expensive repair.",
  },
];

const articleFaqs = [
  {
    question: "What Colour Is Coolant and How Do I Identify a Coolant Leak?",
    answer:
      "Coolant comes in several colours depending on the formulation — green, orange, pink, blue, yellow, and purple are all common. Most have a distinctively sweet smell. A puddle of brightly coloured liquid under the front of the car (near the radiator or engine) with a sweet smell is likely coolant. Clear water from AC condensation is normal in warm weather — it has no colour and no smell. Do not confuse the two.",
  },
  {
    question: "Can I Drive With a Coolant Leak?",
    answer:
      "A very slow seep that is not causing the level to drop measurably may be monitored in the short term, but a leak that is causing the coolant level to drop should be addressed before it causes overheating. Running an engine with insufficient coolant can cause overheating, head gasket failure, and severe and irreversible engine damage in a short time. If the temperature warning light comes on or the gauge moves into the red, stop driving as soon as it is safe to do so.",
  },
  {
    question: "Can I Top Up Coolant Myself?",
    answer:
      "The coolant reservoir can be topped up when the engine is cold. Never open the radiator cap on a warm or hot engine — the system is pressurised and the cap can release hot coolant and steam suddenly, causing burns. Use the correct coolant type for your vehicle — mixing different types can cause problems. Check your owner's manual for the specification.",
  },
  {
    question: "What Is the Sweet Smell Associated With Coolant?",
    answer:
      "Ethylene glycol, the main component of most antifreeze/coolant, has a distinctive sweet, slightly syrupy smell when it escapes from the cooling system. Coolant that has been burned in the combustion chamber (from an internal leak such as a head gasket) exits the exhaust as white smoke with this sweet smell. A sweet smell from the engine bay or exhaust is a reliable indicator of a coolant leak.",
  },
  {
    question: "How Do I Know if the Coolant Level Is Low?",
    answer:
      "Check the coolant overflow reservoir — it is a translucent plastic tank, usually near the radiator, with MIN and MAX markings on the side. The level should be visible between these marks when cold. Do not open the radiator cap when the engine is warm. If the reservoir is consistently running low and you are topping it up frequently, there is a leak somewhere in the system that needs investigation.",
  },
  {
    question: "How Do I Track Coolant Service and Leak History?",
    answer:
      "Log each coolant change with date, mileage, and the coolant type used. Note any top-up events and how frequently the level has been dropping. Record any overheating incidents and repairs. CarCare Diary lets you add notes to service entries so you have a complete history of cooling system maintenance per vehicle.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Is My Car Leaking Coolant? Common Causes and What to Do",
    description:
      "Learn common causes of coolant leaks, warning signs to watch for, and how to track cooling system maintenance and repairs.",
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

export default function WhyIsMyCarLeakingCoolantArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Why Is My Car Leaking Coolant? Common Causes and What to Do",
    description:
      "Learn common causes of coolant leaks, warning signs to watch for, and how to track cooling system maintenance and repairs.",
    path: "/blog/why-is-my-car-leaking-coolant",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Why is my car leaking coolant?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-400 mb-1.5">Safety rule — never open a hot coolant system</p>
              <p className="text-sm text-muted">
                The cooling system is pressurised. Opening the radiator cap or
                any coolant hose connection on a warm or hot engine can release
                scalding coolant and steam suddenly, causing serious burns.
                Always wait until the engine has fully cooled before checking
                or adding coolant.
              </p>
            </div>
          </div>
        </div>
        <DisclaimerBox />

        <ShortAnswerBox>
          Common leak sources include the{" "}
          <strong className="text-white">radiator, coolant hoses,
          water pump, thermostat housing, coolant reservoir, radiator
          cap, or heater core</strong>. A head gasket failure can
          cause an internal leak with no visible external puddle.
          Coolant is typically a sweet-smelling coloured liquid
          (green, orange, pink, blue, or yellow depending on type).
        </ShortAnswerBox>

        <ArticleH2>Common coolant leak sources</ArticleH2>
        <div className="flex flex-col gap-4 mb-6">
          {leakSources.map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Warning signs not to ignore</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Temperature gauge climbing toward the red or temperature warning light on",
            "Coolant level dropping repeatedly — even without a visible puddle",
            "Sweet smell from the engine bay or from the exhaust",
            "White smoke from the exhaust — possible internal coolant leak",
            "Milky or frothy oil on the dipstick — suggests coolant mixing with oil",
            "Steam from under the bonnet",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>What to check first</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Check the coolant reservoir level when the engine is cold",
            "Look under the car for a puddle — note the colour and smell",
            "Look around hose connections and the radiator for dried residue or wetness",
            "Check the temperature gauge — has it been running hotter than usual",
            "Check the oil dipstick for any milky or frothy appearance",
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
            "When coolant was last changed — old coolant becomes acidic and can damage hoses and the radiator",
            "Any prior overheating events — overheating stresses head gaskets and hoses",
            "History of top-ups — frequent additions without a visible repair indicate an unresolved leak",
            "Water pump or thermostat housing replacement history",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track cooling system service</ArticleH2>
        <ArticleP>
          CarCare Diary lets you log each coolant change with date, mileage,
          and coolant type, plus notes about any leaks found, top-ups, and
          repairs. Recording overheating events is especially important — a
          mechanic investigating a head gasket or head crack will want to
          know if the engine has overheated previously.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-change-coolant", label: "when to change coolant" },
            { to: "/blog/why-is-my-car-overheating", label: "car overheating" },
            { to: "/blog/why-is-there-white-smoke-from-exhaust", label: "white exhaust smoke" },
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
        This guide explains common causes, not a diagnosis. A coolant
        leak that causes overheating or a temperature warning should
        be treated as urgent — stop driving when safe and seek
        inspection before driving further.
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
