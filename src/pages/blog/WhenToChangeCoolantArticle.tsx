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

const ARTICLE_TITLE = "When To Change Coolant";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-change-coolant";
const ARTICLE_LEDE =
  "Coolant (antifreeze) protects your engine from overheating, freezing, and internal corrosion. Intervals vary considerably by vehicle and coolant type — older schedules used shorter intervals, while many modern long-life coolants last much longer. Your owner's manual is the only reliable source for your vehicle's specific schedule.";
const CTA_TITLE = "Log coolant changes and service notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Change Coolant?",
    answer:
      "It depends on your vehicle and the type of coolant. Older vehicles using conventional green coolant often followed a schedule of every 2 years or 30,000 miles. Many modern vehicles use extended-life or OAT (Organic Acid Technology) coolant rated for 5 years or 100,000+ miles. Some manufacturers specify inspections rather than blanket replacements. Check your owner's manual for the correct schedule.",
  },
  {
    question: "What Does Coolant Actually Do?",
    answer:
      "Coolant circulates through the engine and radiator to transfer heat away from engine components, preventing overheating. It also contains antifreeze to protect the system in cold temperatures, and corrosion inhibitors to prevent rust and scale build-up inside the cooling system. Over time the corrosion inhibitors deplete, reducing protection even if the fluid still appears clean.",
  },
  {
    question: "What Are The Signs Coolant Needs Changing?",
    answer:
      "Signs include: the engine temperature gauge reading higher than normal, coolant level dropping below the minimum marker, the coolant in the reservoir appearing rusty, brown, or containing visible debris, a sweet smell from the engine bay (can indicate a leak), or the cabin heater not producing its usual warmth. Any of these should be investigated.",
  },
  {
    question: "Can You Top Up Coolant Yourself?",
    answer:
      "You can add coolant to the coolant reservoir (the translucent overflow container, not the radiator cap directly). Never open the radiator cap or coolant reservoir cap on a hot engine — the system is pressurised and the coolant is extremely hot. Let the engine cool completely before checking levels. Use the coolant type specified in your owner's manual — mixing incompatible types can cause problems.",
  },
  {
    question: "Does Coolant Type Matter?",
    answer:
      "Yes. Different coolant formulations — conventional, OAT, HOAT, and others — use different inhibitor packages and are not all compatible. Using the wrong type can reduce corrosion protection or cause reactions that accelerate component wear. Check your owner's manual or the coolant reservoir cap for the specification and use only compatible coolant.",
  },
  {
    question: "How Do I Track Coolant Changes?",
    answer:
      "Log the coolant flush with the date, mileage, and type of coolant used. Because the interval can be both time-based and mileage-based depending on the vehicle, recording both is useful. CarCare Diary lets you log coolant service entries with notes and set reminders for the next interval.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Change Coolant: Mileage, Time and Warning Signs",
    description:
      "Learn when to change coolant, signs coolant service may be due, and how to track coolant changes by date and mileage.",
    url: ARTICLE_URL,
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    publisher: {
      "@type": "Organization",
      name: "CarCare Diary",
      url: "https://www.carcarediary.com",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
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

export default function WhenToChangeCoolantArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "When to Change Coolant: Mileage, Time and Warning Signs",
    description:
      "Learn when to change coolant, signs coolant service may be due, and how to track coolant changes by date and mileage.",
    path: "/blog/when-to-change-coolant",
    ogType: "article",
    jsonLd,
  });

  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you change coolant?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Intervals vary widely. Older vehicles using conventional coolant often
          follow a schedule around{" "}
          <strong className="text-white">2 years or 30,000 miles</strong>.
          Many modern vehicles with extended-life coolant specify{" "}
          <strong className="text-white">5 years or 100,000+ miles</strong>.
          Check your owner's manual — coolant type and vehicle age both affect
          the correct interval.
        </ShortAnswerBox>

        <ArticleH2>What coolant does and why it needs replacing</ArticleH2>
        <ArticleP>
          Coolant circulates through the engine and radiator, absorbing and
          dissipating heat to prevent overheating. It also contains antifreeze
          to protect the system in winter, and corrosion inhibitors to prevent
          rust, scale, and electrolytic corrosion inside the metal cooling
          system components.
        </ArticleP>
        <ArticleP>
          The corrosion inhibitors in coolant deplete over time and mileage.
          Once they are depleted, the coolant is no longer protecting internal
          components from corrosion — even if the liquid itself still appears
          clean and coloured. This is why coolant needs replacing on a schedule
          even when the cooling system appears to be working normally.
        </ArticleP>

        <ArticleH2>Typical coolant change intervals</ArticleH2>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Conventional (inorganic additive) coolant",
              interval: "Every 2 years or ~30,000 miles",
              note: "Found in many older vehicles. Short inhibitor life means more frequent replacement. Often green or yellow in colour, though colour is not a reliable indicator of type.",
            },
            {
              label: "OAT (Organic Acid Technology) coolant",
              interval: "Every 5 years or ~100,000 miles",
              note: "Used in many modern vehicles. Long inhibitor life from organic acid chemistry. Often orange, red, or pink. Incompatible with conventional coolant — do not mix.",
            },
            {
              label: "HOAT (Hybrid OAT) coolant",
              interval: "Typically 5 years / varies",
              note: "A blend of conventional and OAT technologies. Used by several manufacturers. Interval and compatibility depend on specific formulation — check manufacturer guidance.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <span className="text-sm font-semibold text-white">{item.label}</span>
                <span className="text-sm text-accent font-medium">{item.interval}</span>
              </div>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleP>
          Coolant colour is not a reliable way to identify type — manufacturers
          use different colours for the same formulation, and adding the wrong
          type can cause the colour to change. Always use the specification in
          your owner's manual.
        </ArticleP>

        <ArticleH2>Signs coolant may need attention sooner</ArticleH2>

        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "Engine temperature gauge reading higher than normal",
              detail: "A rise in normal operating temperature can indicate the cooling system is losing effectiveness. Check the coolant level first, then inspect for leaks or a failed thermostat.",
            },
            {
              sign: "Coolant level dropping below minimum",
              detail: "A cooling system that is sealed should not lose fluid. A dropping level usually indicates a leak — internal (head gasket) or external (hose, radiator, or reservoir). Topping up without finding the cause will not fix the problem.",
            },
            {
              sign: "Coolant appears rusty, brown, or contains debris",
              detail: "Coolant that has lost its inhibitor protection starts to accumulate rust and scale. Brown or muddy coolant indicates corrosion is occurring inside the system and the fluid should be flushed.",
            },
            {
              sign: "Sweet smell from the engine bay",
              detail: "Coolant has a characteristic sweet smell. If you detect this outside the vehicle or inside the cabin, it often indicates a leak. Do not ignore it — coolant leaks can lead to overheating.",
            },
            {
              sign: "Heater producing less warmth than usual",
              detail: "The cabin heater uses the engine's coolant heat. A significant drop in heater output can indicate low coolant level, air in the system, or a failing thermostat — all of which require investigation.",
            },
            {
              sign: "White smoke or steam from the exhaust",
              detail: "Occasional condensation from a cold exhaust is normal. Persistent white smoke can indicate coolant entering the combustion chamber (often a head gasket issue). This requires prompt mechanical inspection.",
            },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 mb-6">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1.5">Safety note</p>
          <p className="text-sm leading-relaxed text-muted">
            Never open the radiator cap or coolant reservoir cap on a warm or hot engine. The cooling system operates under pressure and the coolant reaches temperatures well above 100°C. Always allow the engine to cool completely before checking or adding coolant.
          </p>
        </div>

        <ArticleH2>What happens if you ignore coolant changes</ArticleH2>

        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Corrosion of internal cooling system components — radiator, water pump, heater core, cylinder head",
            "Scale and deposit build-up reducing cooling efficiency over time",
            "Overheating leading to head gasket failure or engine damage in severe cases",
            "Water pump seal degradation from acidic, depleted coolant",
            "Heater core blockage from debris accumulation in old fluid",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track coolant changes</ArticleH2>
        <ArticleP>
          Log the coolant flush with the date, mileage, and the coolant type
          used. For modern extended-life coolants, the date is the key
          reference point; older shorter-interval schedules benefit from
          tracking mileage too.
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of coolant flush",
            "Mileage at time of service",
            "Coolant type used (OAT, HOAT, conventional)",
            "Any notes about the condition of the old coolant",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          CarCare Diary lets you log coolant service under a fluids or cooling
          system category, record the date and mileage, and set a reminder for
          the next service interval.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          <Link to="/car-maintenance-tracker" className="text-accent font-semibold hover:text-white transition-colors">car maintenance tracker</Link>
          {" · "}
          <Link to="/vehicle-service-reminder-app" className="text-accent font-semibold hover:text-white transition-colors">vehicle service reminder app</Link>
          {" · "}
          <Link to="/blog/when-to-change-engine-oil" className="text-accent font-semibold hover:text-white transition-colors">when to change engine oil</Link>
          {" · "}
          <Link to="/blog/when-to-change-brake-fluid" className="text-accent font-semibold hover:text-white transition-colors">when to change brake fluid</Link>
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
          <div key={faq.question} className={`rounded-xl border overflow-hidden bg-surface transition-colors ${isOpen ? "border-accent/40" : "border-panel"}`}>
            <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
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
