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

const ARTICLE_TITLE = "When To Change Your Oil Filter";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "4 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-change-oil-filter";
const ARTICLE_LEDE =
  "For most vehicles, the oil filter is changed at every engine oil change. The filter's purpose is to trap contaminants from the engine oil as it circulates — a saturated or bypassing filter circulates dirty oil rather than cleaning it. The correct change interval for your vehicle depends on the oil type, filter specification, and manufacturer's schedule.";
const CTA_TITLE = "Track oil and filter changes by date, mileage, oil type, and notes in CarCare Diary";

const articleFaqs = [
  {
    question: "Should the Oil Filter Be Changed Every Oil Change?",
    answer:
      "For most vehicles and oil types — particularly conventional oil with shorter service intervals — changing the filter at every oil change is standard practice. For vehicles using extended-interval synthetic oil, some manufacturers specify changing the filter at every change (even if the oil interval is 10,000–15,000 miles or more). Changing the filter every time is the most conservative and widely recommended approach. Check your vehicle's service schedule for its specific guidance.",
  },
  {
    question: "What Does an Oil Filter Do?",
    answer:
      "The oil filter removes solid contaminants — wear particles, combustion by-products, and debris — from the engine oil as it circulates. The filter media traps these particles while allowing clean oil to pass through. Over time the filter media becomes saturated. Most filters have a bypass valve that allows oil to flow even if the filter is completely blocked — but at that point, unfiltered oil circulates through the engine.",
  },
  {
    question: "Does Filter Type Affect the Service Interval?",
    answer:
      "Yes. Standard paper element filters are typically designed for shorter service intervals and should be changed at every oil change with conventional oil. Extended-life or synthetic-compatible filters are rated for longer service, making them appropriate for extended synthetic oil change intervals. Using the correct filter type for the oil specification and service interval is important. Your owner's manual specifies the filter standard required.",
  },
  {
    question: "Can I Change Just the Filter Without Changing the Oil?",
    answer:
      "Technically possible but not standard practice. If a filter change is done mid-interval (for example, a filter known to be defective), some clean oil will be lost and should be replaced to maintain the correct level. In normal service, the oil and filter are changed together because used oil and a fresh filter, or fresh oil with an old saturated filter, both compromise the service.",
  },
  {
    question: "What Are the Signs of an Oil Filter Problem?",
    answer:
      "A completely blocked filter that has caused oil to bypass will show signs of dirty or contaminated oil — dark, gritty oil on the dipstick beyond normal discoloration. An oil pressure warning light can indicate low oil pressure, which may be associated with filter bypass in severe cases but has other causes including low oil level or pump issues. Visible leaks around the filter housing indicate a failed seal or improperly installed filter. These symptoms should be investigated promptly.",
  },
  {
    question: "How Do I Track Oil Filter Changes?",
    answer:
      "Log each oil and filter change together with the date, mileage, oil type and viscosity, and filter brand or specification if you want to track it. CarCare Diary lets you record oil changes with full notes and set a mileage or date-based reminder for the next change.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Change Oil Filter: Timing, Signs and Tips",
    description:
      "Learn when to change your oil filter, why it matters, and how to track oil and filter service history in CarCare Diary.",
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

export default function WhenToChangeOilFilterArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "When to Change Oil Filter: Timing, Signs and Tips",
    description:
      "Learn when to change your oil filter, why it matters, and how to track oil and filter service history in CarCare Diary.",
    path: "/blog/when-to-change-oil-filter",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you change your oil filter?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          For most vehicles, change the oil filter{" "}
          <strong className="text-white">at every engine oil change</strong>.
          The correct interval depends on the oil type, filter specification,
          and your manufacturer's schedule. Check your owner's manual.
        </ShortAnswerBox>

        <ArticleH2>Oil filter and oil change interval</ArticleH2>
        <ArticleP>
          The oil filter interval is directly tied to the engine oil change
          interval. The two are almost always done together:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Conventional oil", note: "Typically changed every 3,000–7,500 miles depending on the vehicle and manufacturer's schedule. The oil filter is replaced at every oil change." },
            { label: "Full synthetic oil", note: "Many manufacturers using synthetic oil specify extended intervals — often 7,500–15,000 miles depending on the vehicle and driving conditions. The filter should still be replaced at each oil change, using an extended-life filter rated for the same interval." },
            { label: "Manufacturer service interval", note: "Your owner's manual specifies the correct oil type, viscosity, and service interval for your engine. This is the definitive source. Severe driving conditions (towing, short trips, dusty environments, extreme temperatures) may require shorter intervals than the normal schedule." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens inside the oil filter</ArticleH2>
        <ArticleP>
          Understanding why the filter matters explains why changing it with
          every oil change is important:
        </ArticleP>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "The filter media traps wear particles, carbon deposits, and combustion by-products as oil circulates",
            "Over time the filter media fills with trapped contaminants and flow resistance increases",
            "A bypass valve opens when pressure across the filter exceeds a threshold — allowing oil to flow but no longer filtering it",
            "Unfiltered oil circulating through fine engine tolerances accelerates wear on bearings, cam surfaces, and cylinder walls",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>Signs that may indicate an oil filter issue</ArticleH2>
        <ArticleP>
          These signs can be associated with oil system issues, though they
          have multiple causes. Investigate rather than assuming the filter
          is the cause:
        </ArticleP>
        <div className="flex flex-col gap-3 mb-6">
          {[
            { sign: "Oil pressure warning light", detail: "Low oil pressure can indicate critically low oil level, oil pump issues, or in severe cases a completely blocked filter causing bypass. This warning should be taken seriously — stop the engine and investigate." },
            { sign: "Oil that appears very dark and gritty", detail: "Some oil darkening is normal. But oil that appears very dark very quickly, or has visible grit, can indicate contamination. This is more an indicator that an oil change is overdue than that the filter alone has failed." },
            { sign: "Leak from the oil filter area", detail: "Oil leaking from around the filter indicates a failed seal, a cross-threaded filter, or an old seal left behind from the previous filter. Visible oil pooling under the engine near the filter should be addressed promptly." },
            { sign: "Engine noise (ticking or rattling)", detail: "Noise from insufficient lubrication — often a light ticking at startup — can be associated with oil quality or pressure issues. Keep oil changes current to maintain proper lubrication." },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if oil changes are overdue</ArticleH2>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "Oil degrades and loses its lubricating and cleaning properties, increasing internal engine wear",
            "Sludge build-up on engine surfaces and oil passages",
            "Saturated filter operating in bypass mode, circulating unfiltered oil",
            "Long-term engine damage from sustained lubrication degradation",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track oil and filter changes</ArticleH2>
        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of change",
            "Mileage at change",
            "Oil type, viscosity, and brand",
            "Filter brand or specification",
            "Next due date or mileage (based on the service interval)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <ArticleP>
          CarCare Diary lets you log oil and filter changes together with full
          notes — including oil type, brand, and mileage. Set a mileage or
          date reminder for the next change based on your vehicle's interval.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          {[
            { to: "/blog/when-to-change-engine-oil", label: "when to change engine oil" },
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/vehicle-service-reminder-app", label: "vehicle service reminder app" },
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
