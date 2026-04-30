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

const ARTICLE_TITLE = "When To Change Power Steering Fluid";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-change-power-steering-fluid";
const ARTICLE_LEDE =
  "Power steering fluid service intervals vary widely between vehicles. Some manufacturers include a specific change interval; others only recommend inspection or service when symptoms or fluid condition suggest it. Before checking generic guidance, first confirm whether your vehicle uses hydraulic power steering — many newer vehicles use electric power steering and have no power steering fluid at all.";
const CTA_TITLE = "Track power steering fluid checks and changes in CarCare Diary";

const articleFaqs = [
  {
    question: "Does My Car Have Power Steering Fluid?",
    answer:
      "Only vehicles with hydraulic power steering systems use power steering fluid. Many newer vehicles use electric power steering (EPS), which is motor-assisted and does not require any fluid. To confirm: look under the hood for a power steering fluid reservoir (usually a small, labelled reservoir near the engine), or check your owner's manual. If there is no reservoir and your manual does not mention power steering fluid, your vehicle likely has electric steering.",
  },
  {
    question: "How Often Should You Change Power Steering Fluid?",
    answer:
      "There is no universal answer. Many manufacturers do not include a specific power steering fluid change interval and instead recommend inspection or fluid top-up as needed. Some independent mechanics recommend changing the fluid every 30,000–50,000 miles as a precautionary measure. If your owner's manual does not specify an interval, checking fluid condition periodically and having it changed if it appears dark or contaminated is a reasonable approach.",
  },
  {
    question: "What Are The Signs Power Steering Fluid Needs Changing?",
    answer:
      "Signs that power steering fluid may need attention include a whining or groaning noise when turning the steering wheel, noticeably heavier steering than usual, fluid that appears very dark or has a burnt smell when checked, foaming in the fluid reservoir, or visible fluid leaks near the steering rack or pump. Any of these symptoms warrant investigation rather than just a fluid change, as they can indicate a pump or seal issue.",
  },
  {
    question: "Can Power Steering Fluid Just Be Topped Up Instead of Changed?",
    answer:
      "Topping up is appropriate when the level is low due to minor seepage. However, if the fluid is significantly dark, contaminated, or has deteriorated, a complete fluid change or flush is more appropriate than simply adding new fluid on top of degraded fluid. If the level repeatedly drops and requires frequent top-ups, a leak should be investigated.",
  },
  {
    question: "What Happens If Power Steering Fluid Gets Very Low?",
    answer:
      "Low fluid level can cause the power steering pump to run without adequate lubrication, causing increased wear and potentially damaging the pump. The steering may also feel heavier or less responsive. If the reservoir is significantly low, investigate the cause — a gradual leak is the most likely reason — rather than just topping it up repeatedly.",
  },
  {
    question: "How Do I Track Power Steering Fluid Service?",
    answer:
      "Log the date and any notes about fluid condition at the time of change or inspection. If a specific fluid type is required for your vehicle, noting that is useful for future reference. CarCare Diary lets you record fluid service entries with date, mileage, and notes for any maintenance item.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Change Power Steering Fluid: Signs and Tips",
    description:
      "Learn when to change power steering fluid, warning signs it may be due, and how to track steering system maintenance.",
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

export default function WhenToChangePowerSteeringFluidArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Change Power Steering Fluid: Signs and Tips",
    description:
      "Learn when to change power steering fluid, warning signs it may be due, and how to track steering system maintenance.",
    path: "/blog/when-to-change-power-steering-fluid",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you change power steering fluid?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          First confirm your vehicle has hydraulic power steering — many newer
          vehicles use electric steering with{" "}
          <strong className="text-white">no fluid at all</strong>. If yours
          does use fluid, many manufacturers don't specify a fixed interval;
          service when fluid appears degraded or symptoms suggest it. Check
          your owner's manual.
        </ShortAnswerBox>

        <ArticleH2>Hydraulic vs electric power steering</ArticleH2>
        <ArticleP>
          Before looking up service intervals, it is worth confirming which
          type of power steering your vehicle has:
        </ArticleP>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              type: "Hydraulic power steering (HPS)",
              detail: "Uses a belt-driven pump and pressurised fluid to assist steering. Has a fluid reservoir under the hood. Requires periodic fluid checks and occasional fluid service. Becoming less common in newer vehicles.",
            },
            {
              type: "Electric power steering (EPS)",
              detail: "Uses an electric motor to provide steering assistance. No fluid reservoir, no hydraulic system, no power steering fluid required. Very common in vehicles manufactured from approximately the 2010s onwards.",
            },
          ].map((item) => (
            <div key={item.type} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-2">{item.type}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Typical power steering fluid service intervals</ArticleH2>
        <ArticleP>
          For vehicles with hydraulic power steering, service intervals are
          less standardised than oil or coolant:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "No scheduled interval (most common)",
              note: "Many manufacturers do not specify a power steering fluid change interval and only recommend checking the level and condition periodically. The fluid does not degrade as quickly as engine oil. Some manufacturers state 'inspect and top up as needed' rather than a change schedule.",
            },
            {
              label: "Condition-based service",
              note: "If fluid appears very dark, has a burnt smell, or shows contamination when checked, a fluid change or flush is worth considering — regardless of mileage. Degraded fluid can accelerate pump and seal wear.",
            },
            {
              label: "Mechanic recommendation: ~30,000–50,000 miles",
              note: "Some mechanics recommend proactive fluid changes in this range, particularly on older vehicles or those with high mileage. This is not a universal manufacturer schedule — it is a general precautionary recommendation.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs power steering fluid may need attention</ArticleH2>
        <ArticleP>
          These signs can indicate fluid issues, but can also point to pump,
          seal, or rack problems. Symptoms warrant investigation by a mechanic
          rather than just a fluid change:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "Whining or groaning when turning",
              detail: "A high-pitched whine or groan from the engine bay when the steering wheel is turned — particularly at full lock — can indicate low fluid level, a failing pump, or air in the system.",
            },
            {
              sign: "Noticeably heavy or stiff steering",
              detail: "Power steering that feels significantly heavier than normal can indicate low fluid level, a pump issue, or fluid that is too degraded to provide adequate pressure.",
            },
            {
              sign: "Dark or burnt-smelling fluid",
              detail: "Power steering fluid is typically clear, amber, or light red. If it appears dark brown or has a burnt smell when you remove and check the reservoir, the fluid has degraded significantly.",
            },
            {
              sign: "Foaming or bubbling in the reservoir",
              detail: "Foam or bubbles in the fluid reservoir indicate air contamination in the system — often caused by a low fluid level allowing the pump to draw air. This requires investigation beyond a simple fluid change.",
            },
            {
              sign: "Fluid leaks",
              detail: "Oily spots under the front of the car, or visible wet areas around the steering rack, pump, hoses, or reservoir, indicate a seal or hose leak. The fluid level drop should be investigated and the source repaired.",
            },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if power steering fluid is neglected</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Degraded fluid accelerates wear on the power steering pump and rack seals",
            "Persistent low fluid from a leak can run the pump dry, causing pump failure",
            "Power steering pump replacement is a significant repair cost",
            "Heavy or unresponsive steering can affect vehicle control in emergencies",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track power steering fluid service</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of fluid check or change",
            "Fluid condition observed (colour, smell, level)",
            "Fluid type used (some vehicles require a specific specification)",
            "Any notes about symptoms or work done alongside",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log power steering service with date, mileage,
          and notes. Logging periodic checks — even when no change is needed —
          creates a useful maintenance record over time.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/car-service-history-app", label: "car service history app" },
            { to: "/blog/when-to-change-brake-fluid", label: "when to change brake fluid" },
            { to: "/blog/when-to-change-coolant", label: "when to change coolant" },
            { to: "/blog/when-to-change-transmission-fluid", label: "when to change transmission fluid" },
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
