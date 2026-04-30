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

const ARTICLE_TITLE = "When To Replace a Serpentine Belt";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-serpentine-belt";
const ARTICLE_LEDE =
  "The serpentine belt drives most or all of the engine's accessory systems — often including the alternator, air conditioning compressor, power steering pump, and sometimes the water pump. On vehicles where it drives the water pump, a belt failure can lead to rapid engine overheating. Visual inspection of the belt's condition is often more reliable than mileage alone when deciding if replacement is due.";
const CTA_TITLE = "Track serpentine belt replacement date, mileage, and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Long Does a Serpentine Belt Last?",
    answer:
      "Many modern serpentine belts are made from EPDM (ethylene propylene diene monomer) rubber, which resists cracking better than older neoprene belts. EPDM belts can wear significantly without the obvious cracking that older belts showed, making visual inspection more challenging. Some manufacturers specify replacement intervals, while others recommend inspection-based replacement. Check your owner's manual for your vehicle's schedule.",
  },
  {
    question: "What Does the Serpentine Belt Drive?",
    answer:
      "The serpentine belt drives the accessories powered by the engine. Depending on the vehicle, this typically includes the alternator (charges the battery and powers electrical systems), the air conditioning compressor, the power steering pump on hydraulic-steering vehicles, and sometimes the water pump. If the belt breaks, the accessories it drives stop functioning — and if it drives the water pump, the engine can overheat very quickly.",
  },
  {
    question: "What Are the Signs a Serpentine Belt Needs Replacing?",
    answer:
      "Common signs include a squealing, chirping, or squeaking noise from the engine bay — often more noticeable on cold starts or when accessories like AC are engaged. Visible wear signs include small cracks across the ribs, glazing (a shiny, hardened appearance on the rib surface), fraying at the belt edges, missing rib sections, or a belt that looks worn smooth. Any of these visible signs warrant replacement even if the belt has not failed.",
  },
  {
    question: "Can a Serpentine Belt Break Without Warning?",
    answer:
      "Yes. EPDM belts in particular can wear significantly before showing obvious visual symptoms, and can break without much advance warning. This is why periodic inspection — not just reacting to noise — is important. Some garages inspect the belt as part of routine oil change or service visits, which is a reasonable approach.",
  },
  {
    question: "Should I Replace the Belt Tensioner at the Same Time?",
    answer:
      "Many mechanics recommend inspecting and often replacing the belt tensioner and any idler pulleys at the same time as the serpentine belt. The tensioner maintains correct belt tension, and a failing tensioner can cause a new belt to wear prematurely or slip. Replacing them together avoids paying labour costs twice if a tensioner fails shortly after the belt.",
  },
  {
    question: "How Do I Track Serpentine Belt Replacement?",
    answer:
      "Log the date, mileage, belt type or brand, and any notes about what was replaced alongside — such as tensioner or idler pulleys. CarCare Diary lets you record this with full notes and set a mileage or date reminder for the next inspection interval.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace a Serpentine Belt: Signs, Mileage and Tips",
    description:
      "Learn when to replace a serpentine belt, warning signs of belt wear, and how to track belt replacement history in CarCare Diary.",
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

export default function WhenToReplaceSerpentineBeltArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Replace a Serpentine Belt: Signs, Mileage and Tips",
    description:
      "Learn when to replace a serpentine belt, warning signs of belt wear, and how to track belt replacement history in CarCare Diary.",
    path: "/blog/when-to-replace-serpentine-belt",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you replace a serpentine belt?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Many serpentine belts last several years, but inspection of belt
          condition is often more reliable than mileage alone. Replace when
          you see <strong className="text-white">cracks, glazing, fraying,
          or missing ribs</strong>, or when a manufacturer mileage interval
          is specified. Check your owner's manual.
        </ShortAnswerBox>

        <ArticleH2>What the serpentine belt drives</ArticleH2>
        <ArticleP>
          Knowing what the serpentine belt drives helps explain why its failure
          can have immediate consequences:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Alternator", note: "Charges the battery and supplies power to the vehicle's electrical systems while the engine is running. If the belt fails, the alternator stops and the battery begins discharging." },
            { label: "Air conditioning compressor", note: "Powers the AC system. A slipping or failed belt often causes AC to stop working before more serious symptoms appear." },
            { label: "Power steering pump (hydraulic systems)", note: "On vehicles with hydraulic power steering, the belt drives the pump. Belt failure causes steering to become very heavy immediately." },
            { label: "Water pump (on some vehicles)", note: "Not all vehicles route the water pump through the serpentine belt — some use a dedicated timing belt or chain. On vehicles where the serpentine belt drives the water pump, belt failure causes rapid engine overheating." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs a serpentine belt may need replacing</ArticleH2>
        <ArticleP>
          Both audible and visible signs indicate belt wear. Modern EPDM belts
          resist cracking but can wear smooth or glaze without obvious visual
          cracks — periodic inspection matters more than waiting for obvious
          symptoms:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "Squealing, chirping, or squeaking noise", detail: "A high-pitched squeal from the engine bay — especially on cold starts or when the AC is engaged — often indicates belt slipping due to wear, glazing, or a failing tensioner. The noise may come and go." },
            { sign: "Visible cracks across the belt ribs", detail: "Small cracks running across the ribbed surface of the belt indicate that the rubber has begun to degrade. Any cracking warrants replacement regardless of mileage." },
            { sign: "Glazing (shiny, hardened ribs)", detail: "A belt with a shiny, hard-looking rib surface has become glazed — the rubber has hardened and lost grip. Glazed belts slip under load and generate noise. EPDM belts can develop glazing without obvious cracking." },
            { sign: "Fraying at belt edges or missing rib sections", detail: "Fraying indicates the belt has been mis-tracked or a pulley is misaligned. Missing sections of the ribbed side mean the belt can no longer grip the pulleys properly." },
            { sign: "Battery or alternator warning light", detail: "If the belt is slipping on the alternator pulley, the alternator may not generate sufficient charge, causing the battery to drain and a warning light to appear." },
            { sign: "Engine overheating (if belt drives water pump)", detail: "On vehicles where the serpentine belt drives the water pump, a failed or badly slipping belt can cause coolant circulation to stop, leading to rapid engine overheating." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you ignore serpentine belt wear</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Complete belt failure leaves the vehicle undriveable — no charging, no power steering, no AC",
            "On vehicles where the belt drives the water pump: engine overheating and potential engine damage within minutes of belt failure",
            "A failed belt may fall into the engine bay and contact other components",
            "Being stranded without warning — belt failure can happen suddenly",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track serpentine belt replacement</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of replacement",
            "Mileage at replacement",
            "Belt brand or specification if noted",
            "Whether tensioner and idler pulleys were replaced at the same time",
            "Any notes about condition of old belt (glazing, cracking, etc.)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log serpentine belt replacement with date,
          mileage, and notes. Set a reminder based on the manufacturer interval
          or a periodic inspection schedule.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/blog/when-to-replace-timing-belt", label: "when to replace timing belt" },
            { to: "/blog/when-to-replace-car-battery", label: "when to replace a car battery" },
            { to: "/blog/when-to-change-coolant", label: "when to change coolant" },
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
