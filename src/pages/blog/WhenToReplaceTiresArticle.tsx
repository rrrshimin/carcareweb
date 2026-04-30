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

const ARTICLE_TITLE = "When To Replace Tires";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-replace-tires";
const ARTICLE_LEDE =
  "Tires should be replaced when tread depth is too low, damage is visible, age has become a concern, or traction and handling have noticeably deteriorated. There is no single mileage figure — tire life varies significantly by tire type, driving style, alignment, inflation, road conditions, and climate. Tires are a direct safety item: worn or damaged tires affect braking, handling, and aquaplaning resistance.";
const CTA_TITLE = "Track tire replacements, rotations, pressure checks, and alignment notes in CarCare Diary";

const articleFaqs = [
  {
    question: "How Do I Know When Tires Need Replacing?",
    answer:
      "The clearest indicators are tread depth and visible condition. Tires have tread wear indicators — small raised bars moulded into the grooves at the legal minimum tread depth. When the tread surface is flush with these indicators, the tire must be replaced. A tread depth gauge gives a precise reading at any point during the tire's life. Beyond tread depth, look for bulges, cracks in the sidewall, visible damage, or vibration that does not resolve after balancing.",
  },
  {
    question: "How Long Do Tires Last?",
    answer:
      "Tire lifespan varies considerably. Many tires are rated for 40,000–70,000 miles under normal conditions, but actual life depends on driving style, load, inflation, alignment, rotation frequency, road surface, and climate. Hard cornering, heavy braking, and sustained high-speed driving all accelerate wear. Regardless of tread depth, most tire manufacturers and safety organisations recommend inspecting tires annually from around 5 years old and replacing them by 10 years from the manufacture date.",
  },
  {
    question: "What Is the Minimum Safe Tread Depth?",
    answer:
      "Legal minimum tread depth in most countries is 1.6mm (about 2/32 inch). However, wet-weather braking performance deteriorates significantly before reaching this minimum. Many safety recommendations suggest replacing tires at 3mm (about 4/32 inch) for improved wet-weather safety margins. The tread wear indicators moulded into the tire sit at the legal minimum — they indicate the tire must be replaced, not that it is still comfortably safe in wet conditions.",
  },
  {
    question: "What Is the Tire Age Limit?",
    answer:
      "Rubber degrades over time from heat, UV exposure, and oxidation — even on lightly used vehicles. Most manufacturers and safety experts recommend inspecting tires from 5 years of age and replacing them by 10 years regardless of tread depth. The manufacture date (DOT code) is moulded into the tire sidewall in a four-digit format: the first two digits are the week and the last two are the year (e.g. '2423' means the 24th week of 2023).",
  },
  {
    question: "Should All Four Tires Be Replaced at Once?",
    answer:
      "Replacing all four at once ensures consistent grip, handling, and braking balance across all wheels. If budget requires replacing fewer, most guidelines recommend replacing tires in pairs on the same axle. Some manufacturers, particularly for AWD and 4WD vehicles, recommend replacing all four at once to avoid stress on the drivetrain from mismatched rolling circumferences. Check your vehicle's guidelines.",
  },
  {
    question: "How Do I Track Tire Replacements?",
    answer:
      "Log the date and mileage of installation, tire brand, model, size, and the manufacture date from the DOT code if you want to track age. Also log rotation dates and any pressure checks. CarCare Diary lets you record tire service with full notes for each vehicle.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Replace Tires: Tread Depth, Age and Warning Signs",
    description:
      "Learn when to replace tires, how tread depth and tire age matter, warning signs to watch for, and how to track tire service.",
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

export default function WhenToReplaceTiresArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Replace Tires: Tread Depth, Age and Warning Signs",
    description:
      "Learn when to replace tires, how tread depth and tire age matter, warning signs to watch for, and how to track tire service.",
    path: "/blog/when-to-replace-tires",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you replace tires?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Replace tires when <strong className="text-white">tread depth reaches the wear indicators</strong> (legal minimum, typically 1.6mm), when visible damage is present, or when tires are{" "}
          <strong className="text-white">10 years old</strong> regardless of tread depth. Many safety experts recommend replacing at{" "}
          <strong className="text-white">3mm</strong> for better wet-weather safety margins.
        </ShortAnswerBox>

        <ArticleH2>When to replace tires</ArticleH2>
        <ArticleP>
          Tire replacement is based on condition, not a fixed mileage schedule.
          The main triggers are:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Tread depth at or near the wear indicators", note: "Built-in tread wear indicators are moulded into the tyre grooves at the legal minimum (1.6mm). When the tread surface is level with these bars, the tyre must be replaced. For improved wet-weather braking, many recommend replacing at 3mm rather than waiting for the legal minimum." },
            { label: "Visible damage — bulges, cracks, or cuts", note: "A bulge in the sidewall indicates internal structural damage and the tyre should be replaced immediately — a bulge can fail suddenly. Sidewall cracks from age or ozone degradation indicate the rubber is deteriorating. Deep cuts or penetrations from road debris also require assessment." },
            { label: "Age — typically 10 years from manufacture date", note: "Most manufacturers and safety organisations recommend replacing tyres after 10 years from the DOT manufacture date, regardless of tread depth. Annual inspection from 5 years old is recommended. The manufacture date is in the sidewall DOT code." },
            { label: "Uneven wear requiring investigation", note: "Uneven tread wear — inner edge, outer edge, centre, or feathering — indicates an alignment, inflation, or suspension issue. The underlying cause should be fixed before or when fitting replacement tyres." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs tires may need replacing sooner</ArticleH2>
        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "Tread wear indicators visible or flush with tread", detail: "The most definitive indicator. If the tread surface is level with the wear bars moulded into the grooves, the tyre is at the legal minimum and must be replaced." },
            { sign: "Bulge or blister on the sidewall", detail: "A bulge means the internal tyre structure has failed. Replace immediately — this is a safety issue. Do not continue driving on a tyre with a visible bulge." },
            { sign: "Cracking or crazing in the sidewall or tread", detail: "Surface cracking indicates rubber degradation from age, ozone, or UV. Minor surface crazing may be cosmetic; deep or extensive cracking warrants replacement or professional assessment." },
            { sign: "Persistent vibration at speed", detail: "Vibration that does not resolve after wheel balancing can indicate a tyre with structural damage, flat spotting from extended parking, or uneven internal wear." },
            { sign: "Loss of grip or traction in wet conditions", detail: "Wet-weather braking and cornering performance deteriorate as tread depth decreases. If the car feels slippery in rain compared to when the tyres were newer, tread depth is likely the cause." },
            { sign: "Puncture or sidewall damage from road hazard", detail: "A nail in the tread may be repairable by a tyre specialist, depending on the location and size of the puncture. Sidewall punctures are not repairable and require replacement." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you delay tire replacement</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Reduced wet-weather grip increases braking distance and risk of aquaplaning",
            "Increased risk of blowout — particularly at speed or in hot conditions",
            "Reduced handling and cornering stability",
            "Legal and insurance implications of driving on tyres below minimum tread depth",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track tire replacements</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of installation",
            "Mileage at installation",
            "Tire brand, model, and size",
            "DOT manufacture date (from the sidewall) if you want to track age",
            "Rotation and pressure check dates",
            "Alignment and balancing service",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log tire replacements, rotations, pressure
          checks, and alignment notes in one place — so your full tyre
          service history is easy to review for any vehicle.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/blog/when-to-rotate-tires", label: "when to rotate tires" },
            { to: "/blog/when-to-check-tire-pressure", label: "when to check tire pressure" },
            { to: "/blog/when-to-get-wheel-alignment", label: "when to get wheel alignment" },
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
