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

const ARTICLE_TITLE = "When To Service Car AC";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-service-car-ac";
const ARTICLE_LEDE =
  "Car AC service is typically needed when cooling performance has noticeably dropped, smells appear, airflow is weak, or noises start from the system. Some owners also have the system inspected before the hot season as a precaution. Before assuming the AC system needs a regas or major work, checking the cabin air filter first is worth doing — a blocked filter significantly reduces airflow at a much lower cost.";
const CTA_TITLE = "Track AC checks, cabin filter changes, and service notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should a Car AC Be Serviced?",
    answer:
      "There is no universal scheduled interval like an oil change. Most manufacturers recommend periodic inspection of the AC system, and some include AC checks as part of major service intervals. Many owners service the AC reactively — when performance drops — rather than on a schedule. Having the system inspected before summer in hot climates is a practical precaution, particularly if performance was marginal the previous season.",
  },
  {
    question: "Does Car AC Refrigerant Need Topping Up Regularly?",
    answer:
      "A correctly functioning AC system is a closed loop — it should not consume refrigerant. If cooling performance is poor and a recharge improves it, refrigerant has been lost from a leak. Simply recharging without addressing the leak is a temporary fix; the refrigerant will escape again. Refrigerant handling requires specialist equipment and must be done by a trained technician in most countries due to environmental regulations.",
  },
  {
    question: "What Is the Cabin Air Filter and Does It Affect AC?",
    answer:
      "The cabin air filter filters the air drawn into the vehicle's interior — affecting both heating and air conditioning airflow. A heavily blocked cabin air filter significantly reduces airflow through the vents, which reduces cooling effectiveness. Replacing a blocked cabin filter is one of the first and cheapest things to try before investigating the AC system itself. Cabin filters are typically replaced every 12,000–15,000 miles or annually, but dusty environments require more frequent replacement.",
  },
  {
    question: "Why Does My Car AC Smell Musty?",
    answer:
      "A musty or mouldy smell when the AC is first turned on is very common. It is usually caused by moisture accumulating on the evaporator coil — the cold component inside the dashboard — and the growth of mould or bacteria on that surface. Running the fan with AC off for a few minutes at the end of a journey lets the evaporator dry out. Some cleaning products are available to treat the evaporator. If the smell persists after filter replacement and evaporator cleaning attempts, professional inspection is recommended.",
  },
  {
    question: "Can I Recharge Car AC Myself?",
    answer:
      "DIY AC recharge cans are available in some markets and can temporarily restore cooling if the system is low on refrigerant. However, they typically do not identify or address the underlying leak, do not measure actual refrigerant charge accurately, and may not be compatible with all systems. Professional AC service uses recovery equipment to reclaim old refrigerant, measure the system, identify leaks, and recharge to the correct specification. For a properly done repair, professional service is recommended.",
  },
  {
    question: "How Do I Track AC Service?",
    answer:
      "Log the date and any notes about what was done — cabin filter change, inspection, recharge, or component replacement. Noting what symptoms were present before service and whether they were resolved is useful for future reference. CarCare Diary lets you record any vehicle maintenance with date, notes, and mileage.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Service Car AC: Signs, Timing and Maintenance Tips",
    description:
      "Learn when to service your car AC, signs the system needs attention, and how to track AC maintenance in CarCare Diary.",
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

export default function WhenToServiceCarAcArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Service Car AC: Signs, Timing and Maintenance Tips",
    description:
      "Learn when to service your car AC, signs the system needs attention, and how to track AC maintenance in CarCare Diary.",
    path: "/blog/when-to-service-car-ac",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you service your car AC?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Service the AC when{" "}
          <strong className="text-white">cooling becomes weak, smells appear,
          airflow drops, or noises start</strong>. Before assuming the AC
          system needs work, check and replace the{" "}
          <strong className="text-white">cabin air filter</strong> — a blocked
          filter is a very common and cheap cause of poor airflow.
        </ShortAnswerBox>

        <ArticleH2>Check the cabin air filter first</ArticleH2>
        <ArticleP>
          Before diagnosing the AC system itself, the cabin air filter is worth
          checking. It filters the air drawn into the passenger compartment and
          directly affects airflow through the vents:
        </ArticleP>

        <div className="rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 mb-6">
          <p className="text-sm leading-relaxed text-muted">
            A heavily blocked cabin air filter can reduce vent airflow
            significantly, making the AC feel weak even when the refrigerant
            charge and system are fine. Cabin filters are typically replaced
            every 12,000–15,000 miles or annually. In dusty environments,
            more frequent replacement is needed.{" "}
            <Link to="/blog/when-to-replace-cabin-air-filter" className="text-accent font-semibold hover:text-white transition-colors">
              See cabin air filter guide →
            </Link>
          </p>
        </div>

        <ArticleH2>Signs car AC may need service</ArticleH2>
        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "Warm or insufficiently cold air from vents", detail: "The clearest sign. If the AC is running but air from the vents is not cold enough — particularly on hot days — the system may be low on refrigerant (indicating a leak), have a failing compressor, or another component issue. Check the cabin filter first." },
            { sign: "Musty or mouldy smell from vents", detail: "A musty smell when AC is first turned on is usually caused by mould or bacteria on the evaporator coil. Running the blower without AC at journey's end helps the evaporator dry out. A new cabin filter may also help. Persistent smell warrants professional inspection." },
            { sign: "Weak airflow despite high fan settings", detail: "Weak airflow at high fan speeds — before ruling out a failed blower motor — is often a blocked cabin air filter. Replace the filter before investigating further." },
            { sign: "Unusual noises when AC is engaged", detail: "A clicking, rattling, or squealing sound that starts when AC is switched on can indicate a compressor issue, a failing magnetic clutch, or debris near the compressor. Have this inspected professionally." },
            { sign: "Water dripping inside the car", detail: "Some condensation drainage is normal — a small amount of water under the car from the AC drain is typical. Water dripping inside the cabin usually indicates a blocked evaporator drain pipe, which can be cleared." },
            { sign: "AC compressor not engaging", detail: "If the compressor clutch does not engage when AC is switched on, possible causes include critically low refrigerant (a safety cutoff), electrical fault, or a failed compressor. Professional diagnosis is needed." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 px-5 py-4 mb-6">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">Refrigerant note</p>
          <p className="text-sm leading-relaxed text-muted">
            AC refrigerant handling requires specialist equipment and must be
            performed by a trained technician in most countries due to
            environmental regulations. A well-functioning system should not
            need regular refrigerant top-ups — low refrigerant indicates a
            leak that should be found and repaired.
          </p>
        </div>

        <ArticleH2>What happens if you ignore AC problems</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Progressive refrigerant loss from an unaddressed leak can eventually damage the compressor",
            "AC compressor replacement is one of the more expensive AC repairs",
            "Mould growth on the evaporator can affect air quality inside the vehicle",
            "A blocked evaporator drain left unaddressed can cause water damage to interior components",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track AC service</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of service or inspection",
            "What was done — cabin filter, recharge, component replacement",
            "Any symptoms before service and whether they were resolved",
            "Mileage at service",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log AC checks and cabin filter changes with
          date, mileage, and notes — keeping all interior comfort maintenance
          in one place alongside your other service history.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/blog/when-to-replace-cabin-air-filter", label: "when to replace cabin air filter" },
            { to: "/blog/when-to-replace-engine-air-filter", label: "when to replace engine air filter" },
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
