import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import {
  ArticleLayout,
  ArticleHero,
  ProseSection,
  ArticleH2,
  ArticleP,
} from "./ArticleLayout";
import { GuideDownloadCTA } from "./GuideDownloadCTA";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "How To Prepare Your Car for a Road Trip";
const ARTICLE_CATEGORY = "Guides";
const ARTICLE_READ_TIME = "6 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/how-to-prepare-car-for-road-trip";
const ARTICLE_LEDE =
  "A pre-trip check takes less than 30 minutes and can prevent the kind of breakdown that turns a good trip into an expensive, stressful one. Most road trip vehicle problems — flat tyres, overheating, dead battery, failing wipers in heavy rain — come from components that were already marginal before the journey started. This guide covers what to check, when to do it, and what to have with you.";
const CTA_TITLE = "Log your pre-trip service check in CarCare Diary before you leave";

type CheckItem = { label: string; note: string; link?: { to: string; label: string } };

const fluidChecks: CheckItem[] = [
  { label: "Engine oil level and condition", note: "Check the dipstick. If the level is low or the oil is very dark and overdue, change it before you go — not after you return. Sustained highway driving at higher RPM is harder on oil than urban stop-start.", link: { to: "/blog/when-to-change-engine-oil", label: "oil change guide" } },
  { label: "Coolant level", note: "Check the reservoir when cold. A long highway drive at high speed generates significant heat — low coolant on a hot day is a recipe for overheating.", link: { to: "/blog/when-to-change-coolant", label: "coolant guide" } },
  { label: "Brake fluid level", note: "Check the reservoir. Level should be between MIN and MAX. Very low fluid can indicate worn pads or a leak — both worth addressing before a long drive.", link: { to: "/blog/when-to-change-brake-fluid", label: "brake fluid guide" } },
  { label: "Windshield washer fluid", note: "Fill the reservoir completely. Insect strikes, road spray, and dust on long drives can obscure vision quickly. Running out is entirely avoidable." },
  { label: "Power steering fluid (if applicable)", note: "Check the reservoir on vehicles with hydraulic power steering. Most modern vehicles have electric steering and no fluid to check.", link: { to: "/blog/when-to-change-power-steering-fluid", label: "power steering guide" } },
];

const tyreChecks: CheckItem[] = [
  { label: "Tyre pressure — all four wheels plus spare", note: "Check cold (before driving) against the specification on the doorjamb sticker. Underinflated tyres generate more heat at highway speed, which increases blowout risk and reduces fuel economy.", link: { to: "/blog/when-to-check-tire-pressure", label: "tyre pressure guide" } },
  { label: "Tread depth on all four tyres", note: "If any tyre is near or below the legal minimum tread depth, replace it before the trip. Worn tyres on a wet highway are a serious safety risk.", link: { to: "/blog/when-to-replace-tires", label: "tyre replacement guide" } },
  { label: "Visible tyre damage — cuts, bulges, or uneven wear", note: "A bulge in the tyre sidewall is a structural failure — replace immediately. Uneven wear can indicate alignment or suspension issues that are worth addressing.", link: { to: "/blog/why-are-my-tires-wearing-unevenly", label: "uneven wear causes" } },
  { label: "Spare tyre condition and pressure", note: "Check the spare — it is useless if it is flat or deteriorated. Know whether you have a full-size spare, space-saver spare, or a foam sealant kit (which only works for minor punctures)." },
];

const mechanicalChecks: CheckItem[] = [
  { label: "Brakes — feel and recent service", note: "If the brake pedal feels spongy, the vehicle pulls under braking, or brakes squeak or grind, have them inspected before departure. Sustained driving in hilly terrain puts significant load on brakes.", link: { to: "/blog/when-to-replace-brake-pads", label: "brake pads guide" } },
  { label: "Battery age and condition", note: "A battery that is 4–5 years old or has been unreliable recently is a risk. A flat battery in an unfamiliar location is one of the most common and most avoidable road trip problems.", link: { to: "/blog/when-to-replace-car-battery", label: "battery guide" } },
  { label: "Belts — serpentine belt", note: "A failed serpentine belt disables the alternator, power steering (on hydraulic systems), and water pump simultaneously. Check for cracking, fraying, or glazing before a long drive.", link: { to: "/blog/when-to-replace-serpentine-belt", label: "serpentine belt guide" } },
  { label: "Air filter", note: "A clogged air filter reduces engine performance and fuel economy. If it has not been changed in a long time and the trip involves sustained highway driving, a fresh filter is inexpensive insurance.", link: { to: "/blog/when-to-replace-engine-air-filter", label: "air filter guide" } },
  { label: "Windshield wipers", note: "Test both wipers before you leave. Wipers that streak or skip in light rain are a serious visibility hazard in heavy rain on a motorway.", link: { to: "/blog/when-to-replace-windshield-wipers", label: "wipers guide" } },
];

const lightingChecks: CheckItem[] = [
  { label: "Headlights — both low and high beam", note: "Walk around the car with the lights on. A single burnt-out bulb can be a safety issue and attract police attention in some jurisdictions." },
  { label: "Tail lights, brake lights, and indicators", note: "Have someone walk around while you operate each function. Brake light faults in particular are a rear-end collision risk." },
  { label: "Fog lights if fitted", note: "Check they function if you are likely to encounter fog or heavy rain." },
];

const packingChecks: CheckItem[] = [
  { label: "Jumper cables or a jump starter pack", note: "A battery jump starter pack is compact and means you are not dependent on another driver being present." },
  { label: "Basic toolkit and tyre inflation options", note: "A tyre inflator and sealant can handle minor punctures. Know how to use your spare or sealant kit before you need to." },
  { label: "Tow rope or strap", note: "Lightweight and takes up minimal space." },
  { label: "Torch / flashlight", note: "For roadside inspection at night." },
  { label: "Phone charger / power bank", note: "Navigation depends on a charged phone. A power bank is worthwhile backup." },
  { label: "Emergency contact numbers", note: "Roadside assistance, your insurance, and the vehicle recovery number if applicable." },
];

const articleFaqs = [
  {
    question: "How Far in Advance Should I Check the Car Before a Road Trip?",
    answer:
      "A week to two weeks before departure is ideal — it gives you time to address anything found without rushing. Checking the day before is better than not checking at all, but does not leave time to book a service or wait for parts. The most time-sensitive items (oil, coolant, brakes, tyres) are the ones most likely to need attention.",
  },
  {
    question: "Should I Get a Service Before a Long Road Trip?",
    answer:
      "If an oil change or other service is due within the next few thousand kilometres, doing it before the trip rather than after is sensible. Highway driving at sustained speed is harder on some components than urban driving — better to have fresh oil and filters heading out rather than returning on degraded ones. A quick pre-trip check does not always mean a full service, but it should include the main fluids, brakes, and tyres.",
  },
  {
    question: "What If the Car Breaks Down During the Trip?",
    answer:
      "Pull safely off the road and away from traffic. Turn on hazard lights. If the engine is overheating, turn it off and do not open the bonnet until it has cooled completely. Call roadside assistance. Do not attempt to diagnose or repair anything that affects safety on the roadside. Having your service history accessible in CarCare Diary means a mechanic unfamiliar with your vehicle can quickly see what has recently been done.",
  },
  {
    question: "How Do I Check Tyre Pressure Correctly?",
    answer:
      "Check tyre pressure when the tyres are cold — before you have driven more than a couple of kilometres that day. The pressure specification is on the driver's doorjamb sticker or in the owner's manual. Do not use the maximum pressure moulded into the tyre sidewall — that is the maximum the tyre can hold, not the specification for your vehicle. Check all four tyres and the spare.",
  },
  {
    question: "Does a Road Trip Affect Oil Change Intervals?",
    answer:
      "Long highway driving puts less stress on engine oil than urban stop-start driving in some respects — the engine runs at steady temperature and RPM. However, if the oil is already approaching its change interval, completing a long trip on old oil is not ideal. If an oil change is due within the next few thousand kilometres, doing it before the trip is a sensible precaution.",
  },
  {
    question: "How Do I Log a Pre-Trip Service Check in CarCare Diary?",
    answer:
      "Create a service entry with the date and current mileage, noting it as a pre-trip inspection. Add individual notes for each item checked — oil level, tyre pressures, brake condition, battery age. This creates a snapshot of the vehicle's condition at departure and is useful context if any problem develops during or after the trip.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How To Prepare Your Car for a Road Trip",
    description:
      "A complete pre-road trip car checklist covering fluids, tyres, brakes, battery, lights, and what to pack — plus how to log your check in CarCare Diary.",
    url: ARTICLE_URL,
    datePublished: "2026-08-06",
    dateModified: "2026-08-06",
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

export default function HowToPrepareCarForRoadTripArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "How To Prepare Your Car for a Road Trip",
    description:
      "A complete pre-road trip car checklist covering fluids, tyres, brakes, battery, lights, and what to pack — plus how to log your check in CarCare Diary.",
    path: "/blog/how-to-prepare-car-for-road-trip",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="How to prepare your car for a road trip"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Check{" "}
          <strong className="text-white">oil, coolant, brake fluid,
          tyres (including spare), brakes, battery, serpentine belt,
          wipers, and all lights</strong> before a long drive. Address
          anything due or marginal before departure rather than after
          your return. The whole check takes under 30 minutes.
        </ShortAnswerBox>

        <ArticleH2>How far in advance to check</ArticleH2>
        <ArticleP>
          Check the car one to two weeks before departure so you have
          time to book a service or source parts if something needs
          attention. The day before is better than nothing, but items
          like tyres, brakes, or a battery that tests as weak need
          lead time to address properly.
        </ArticleP>

        <SectionChecklist heading="Fluids" items={fluidChecks} />
        <SectionChecklist heading="Tyres" items={tyreChecks} />
        <SectionChecklist heading="Mechanical" items={mechanicalChecks} />
        <SectionChecklist heading="Lights" items={lightingChecks} />
        <SectionChecklist heading="What to have in the car" items={packingChecks} />

        <ArticleH2>Before you leave: log the check</ArticleH2>
        <ArticleP>
          Creating a service entry in CarCare Diary with the date,
          mileage, and notes from your pre-trip inspection means you
          have a record of the vehicle's condition at departure. If
          anything goes wrong during the trip, you or a mechanic can
          see exactly what was checked and when. It also keeps your
          service intervals accurate.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/car-maintenance-checklist", label: "car maintenance checklist" },
            { to: "/blog/what-car-fluids-should-i-check", label: "car fluids guide" },
            { to: "/blog/when-to-check-tire-pressure", label: "tyre pressure" },
            { to: "/blog/when-to-replace-car-battery", label: "car battery" },
            { to: "/blog/when-to-replace-windshield-wipers", label: "windshield wipers" },
            { to: "/blog/car-maintenance-schedule-by-mileage", label: "maintenance schedule" },
            { to: "/vehicle-service-reminder-app", label: "service reminders" },
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

function SectionChecklist({
  heading,
  items,
}: {
  heading: string;
  items: CheckItem[];
}) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-accent pl-3">{heading}</h3>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-0.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
              {item.link && (
                <Link to={item.link.to} className="text-xs text-accent font-semibold hover:text-white transition-colors mt-1 inline-block">
                  → {item.link.label}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LastUpdated() {
  return (
    <div className="flex items-center gap-2 mb-6 text-xs text-muted">
      <span className="inline-block px-2.5 py-1 rounded-full border border-panel bg-surface font-medium">
        Last updated: August 2026
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
