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

const ARTICLE_TITLE = "When To Change Transmission Fluid";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-change-transmission-fluid";
const ARTICLE_LEDE =
  "Transmission fluid service intervals vary considerably depending on whether you have an automatic, manual, CVT, or dual-clutch transmission — and whether you drive under normal or severe conditions. Some manufacturers specify long intervals; others recommend more frequent service. Your owner's manual is the correct starting point, and any transmission symptoms should be checked by a qualified mechanic.";
const CTA_TITLE = "Log transmission fluid changes by date, mileage, and fluid type in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Change Transmission Fluid?",
    answer:
      "It varies significantly by transmission type and vehicle. Manual transmissions are often serviced every 30,000–60,000 miles. Automatic transmissions vary widely — some manufacturers specify 30,000–60,000 miles under normal conditions, while some list much longer or even 'lifetime' intervals. CVT and dual-clutch transmissions have their own specific requirements. Check your owner's manual and do not rely on a generic figure.",
  },
  {
    question: "What Is 'Lifetime' Transmission Fluid?",
    answer:
      "Some manufacturers market certain transmission fluids as 'lifetime' — implying no scheduled change is needed. Many independent mechanics and transmission specialists dispute this, arguing that 'lifetime' means the life of the manufacturer's warranty period, not the life of the vehicle. Severe driving conditions accelerate fluid degradation regardless of what the label says. Whether to service outside the manufacturer's schedule is a decision for the owner and their mechanic.",
  },
  {
    question: "What Are The Signs Transmission Fluid Needs Changing?",
    answer:
      "Signs can include: delayed engagement when shifting from park to drive or reverse, rough or harsh gear changes, slipping out of gear briefly, unusual whining or humming sounds, a burning smell from the transmission area, or transmission fluid appearing very dark or smelling burnt when checked. These symptoms can indicate other transmission issues and should be evaluated by a qualified mechanic.",
  },
  {
    question: "Can You Check Transmission Fluid Yourself?",
    answer:
      "On many older automatic transmission vehicles, there is a transmission dipstick similar to the oil dipstick — you can check level and colour. On many modern vehicles, the transmission is sealed with no dipstick; checking requires a mechanic with a lift. Manual transmission fluid is checked via a fill plug on the gearbox. Consult your owner's manual for your vehicle's specific checking procedure.",
  },
  {
    question: "Does Driving Style Affect Transmission Fluid Life?",
    answer:
      "Yes. Towing, hauling, driving in mountainous terrain, stop-and-go urban driving, performance driving, and extreme heat all generate more heat in the transmission. Heat breaks down fluid more quickly. Severe driving conditions typically require shorter service intervals than the normal-use schedule.",
  },
  {
    question: "How Do I Track Transmission Fluid Changes?",
    answer:
      "Log each transmission service with the date, mileage, fluid type, and any notes. The fluid specification matters — different transmissions require specific fluid formulations, and using the wrong type can damage the transmission. CarCare Diary lets you record this information and set a mileage or date-based reminder for the next service interval.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Change Transmission Fluid: Mileage, Signs and Tips",
    description:
      "Learn when to change transmission fluid, signs it may be due, and how to track transmission service history in CarCare Diary.",
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

export default function WhenToChangeTransmissionFluidArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Change Transmission Fluid: Mileage, Signs and Tips",
    description: "Learn when to change transmission fluid, signs it may be due, and how to track transmission service history in CarCare Diary.",
    path: "/blog/when-to-change-transmission-fluid",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero category={ARTICLE_CATEGORY} readTime={ARTICLE_READ_TIME} title="When should you change transmission fluid?" lede={ARTICLE_LEDE} />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Intervals vary widely by transmission type. Manual transmissions are
          commonly serviced every{" "}
          <strong className="text-white">30,000–60,000 miles</strong>.
          Automatics vary significantly — some manufacturers specify similar
          ranges, others list much longer intervals. CVT and dual-clutch
          transmissions have their own requirements. Always follow your
          owner's manual.
        </ShortAnswerBox>

        <ArticleH2>Intervals by transmission type</ArticleH2>
        <ArticleP>
          Transmission type significantly affects the service requirement.
          There is no single universal interval:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Manual transmission", interval: "Often 30,000–60,000 miles", note: "Manual gearboxes use gear oil rather than ATF. The interval depends on the manufacturer and the type of gear oil used. Severe use (track driving, towing) may require more frequent changes." },
            { label: "Automatic transmission (ATF)", interval: "Varies widely — check your manual", note: "Some manufacturers specify every 30,000–60,000 miles under normal conditions. Others list 'lifetime' or very long intervals. Severe driving (towing, urban stop-go) typically requires shorter intervals than normal use." },
            { label: "CVT (continuously variable transmission)", interval: "Often 30,000–60,000 miles", note: "CVT fluid is a specific formulation not interchangeable with standard ATF. Intervals and fluid specifications vary by manufacturer. Using the wrong fluid type can damage the CVT." },
            { label: "Dual-clutch transmission (DCT/DSG)", interval: "Check manufacturer schedule", note: "Dual-clutch transmissions have specific requirements from the manufacturer. Some use wet clutch packs requiring periodic service; others use dry clutches. Consult the owner's manual." },
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

        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 px-5 py-4 mb-6">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">Important note</p>
          <p className="text-sm leading-relaxed text-muted">
            Transmission symptoms — shifting issues, slipping, unusual noises —
            can indicate problems beyond fluid condition and should be checked
            by a qualified mechanic. Continuing to drive with transmission
            problems can cause costly damage.
          </p>
        </div>

        <ArticleH2>Signs transmission fluid may need attention</ArticleH2>
        <ArticleP>
          These signs can point to degraded fluid, low fluid level, or a
          developing mechanical issue. Any of these warrant investigation — do
          not delay if symptoms appear:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "Delayed engagement from park to drive or reverse", detail: "A pause of one or more seconds before the transmission engages after selecting drive can indicate fluid breakdown, low level, or a pressure issue." },
            { sign: "Rough, jerky, or harsh gear changes", detail: "Smooth shifting depends on clean fluid maintaining correct hydraulic pressure and clutch pack lubrication. Degraded fluid can cause rough changes, particularly under load." },
            { sign: "Slipping out of gear or momentary power loss", detail: "If the transmission briefly disengages while driving or seems to hunt for a gear, this is a serious symptom that warrants prompt inspection." },
            { sign: "Whining, humming, or grinding sounds", detail: "Unusual sounds from the transmission area, particularly under load or during gear changes, can indicate fluid issues or internal wear." },
            { sign: "Burning smell from transmission area", detail: "Overheated or heavily degraded fluid has a distinctive burnt smell. This can indicate the fluid has broken down significantly or the transmission is overheating." },
            { sign: "Fluid appears very dark or smells burnt", detail: "Fresh automatic transmission fluid is often red or pinkish and transparent. Fluid that is very dark brown, opaque, or has a burnt smell has degraded significantly." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you delay transmission fluid changes</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Degraded fluid loses its lubricating and heat-transfer properties, increasing internal wear",
            "Clutch packs and bands wear faster without adequate lubrication",
            "Varnish and deposit build-up on valve body and clutch components",
            "Transmission overheating under heavy use",
            "Mechanical failure requiring rebuild or replacement — one of the most expensive repairs on a vehicle",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track transmission fluid changes</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of service",
            "Mileage at service",
            "Fluid type and specification used (important — must match manufacturer requirements)",
            "Transmission type serviced if relevant",
            "Any notes about fluid condition or mechanic observations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log transmission service with date, mileage,
          fluid notes, and a reminder for the next interval. The fluid
          specification is worth noting in the entry — it avoids using the
          wrong type at the next service.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/car-service-history-app", label: "car service history app" },
            { to: "/blog/when-to-change-engine-oil", label: "when to change engine oil" },
            { to: "/blog/when-to-change-brake-fluid", label: "when to change brake fluid" },
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
      <span className="inline-block px-2.5 py-1 rounded-full border border-panel bg-surface font-medium">Last updated: April 2026</span>
    </div>
  );
}

function ShortAnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-accent/30 bg-brand/5 px-5 py-5 mb-8">
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Short answer</p>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
      <p className="text-xs text-muted/60 mt-3 italic">Use this as general guidance and always check your owner's manual for your exact vehicle.</p>
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
            {isOpen && <div className="px-5 pb-5"><p className="text-sm leading-relaxed text-muted">{faq.answer}</p></div>}
          </div>
        );
      })}
    </div>
  );
}
