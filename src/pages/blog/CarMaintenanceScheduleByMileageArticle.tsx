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

const ARTICLE_TITLE = "Car Maintenance Schedule by Mileage";
const ARTICLE_CATEGORY = "Reference";
const ARTICLE_READ_TIME = "6 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/car-maintenance-schedule-by-mileage";
const ARTICLE_LEDE =
  "Staying on top of car maintenance is easier when you know which tasks fall into which mileage range. This reference covers the most common services — from every 5,000–7,500 km oil changes to 100,000+ km items like timing belts and spark plugs. Exact intervals vary by vehicle, engine, fluid type, and manufacturer. Use this as a starting point; your owner's manual is the definitive source for your car.";
const CTA_TITLE = "CarCare Diary helps you log maintenance by date and mileage, see what is due next, and keep a clean service history for every vehicle";

const mileageSchedule = [
  {
    range: "Every 5,000–7,500 miles",
    items: [
      { service: "Engine oil and filter", note: "Interval depends on oil type (conventional vs synthetic), engine design, and driving conditions. Check your manual." },
      { service: "Tire rotation", note: "Many manufacturers recommend rotating tires every oil change or every 5,000–7,500 miles to even tread wear. Check your manual for the recommended pattern." },
      { service: "Tyre pressure, fluid levels, lights", note: "Quick visual and physical checks. Tyre pressure especially important for safety, fuel economy, and tyre wear." },
    ],
  },
  {
    range: "Every 12,000–15,000 miles",
    items: [
      { service: "Engine air filter inspection", note: "Many vehicles commonly discuss replacement around 15,000–30,000 miles. Dusty driving conditions require more frequent inspection. Replace when dirty or per your manual." },
      { service: "Cabin air filter inspection", note: "Often discussed at similar intervals to engine air filter. Affects HVAC airflow and interior air quality. Replace when dirty or per your manual." },
      { service: "Visual brake inspection", note: "A general check of pad thickness, rotor condition, and fluid level. Useful to catch issues early regardless of mileage." },
    ],
  },
  {
    range: "Every 25,000–50,000 miles",
    items: [
      { service: "Brake pad inspection/replacement", note: "Brake pad life depends heavily on driving style, vehicle weight, and brake type. Inspect regularly — pads may last more or less than this range. Replace based on measured pad thickness, not just mileage." },
      { service: "Tyre replacement evaluation", note: "Tyre life depends on tread depth, compound, and use. Use a tread depth gauge to assess. Most tyres have wear indicators moulded into the tread." },
    ],
  },
  {
    range: "Every 30,000–60,000 miles",
    items: [
      { service: "Brake fluid", note: "Many manufacturers recommend replacement every 2 years or around this mileage range. Brake fluid absorbs moisture over time, lowering boiling point. Check your manual." },
      { service: "Coolant / antifreeze", note: "Interval varies widely by coolant type. Long-life coolants may have different schedules than conventional. Check your manual for type and interval." },
      { service: "Transmission fluid", note: "Depends on transmission type (automatic, manual, CVT, dual-clutch) and driving conditions. Severe use requires shorter intervals. Check your manual." },
      { service: "Power steering fluid (if hydraulic)", note: "Some manufacturers include power steering fluid in a service schedule; others do not. Check your owner's manual." },
    ],
  },
  {
    range: "Every 60,000–100,000 miles",
    items: [
      { service: "Spark plugs", note: "Depends on plug type. Copper plugs often around 30,000 miles. Platinum around 60,000 miles. Iridium/double-platinum commonly 100,000 miles or more. Use the type and interval specified by the manufacturer." },
      { service: "Timing belt (if applicable)", note: "Only for vehicles with timing belts — many modern vehicles use timing chains. Also has an age limit (often 5–7 years). Check your manual. This is a critical service item." },
      { service: "Engine coolant hoses and belts inspection", note: "Visual inspection for cracking, swelling, or deterioration. Replace if degraded regardless of mileage." },
    ],
  },
];

const articleFaqs = [
  {
    question: "Is a mileage-based car maintenance schedule accurate for every vehicle?",
    answer:
      "No. Mileage schedules are a useful general framework, but every vehicle manufacturer publishes their own maintenance schedule specific to that engine, transmission, and drivetrain. Driving conditions — towing, urban stop-go, highway, extreme heat or cold — also affect how quickly fluids and parts wear. Always use your owner's manual as the primary source and mileage guides as supporting reference only.",
  },
  {
    question: "Should I follow mileage intervals or time intervals?",
    answer:
      "Both. Most maintenance items have a mileage-or-time threshold, whichever comes first. For example, engine oil might be specified as every 7,500 miles or 12 months — if you drive very few miles, the calendar interval applies. Timing belts are particularly important to track by age because rubber degrades over time even on low-mileage vehicles.",
  },
  {
    question: "Does severe driving require a different maintenance schedule?",
    answer:
      "Yes. Manufacturers typically define 'severe use' conditions: towing, hauling heavy loads, off-road driving, very short trips (under 5 miles), extensive stop-go urban driving, extreme temperatures, or dusty/dirty environments. Under severe conditions, most service intervals should be shortened, sometimes significantly. Your owner's manual usually includes a severe use schedule alongside the normal schedule.",
  },
  {
    question: "How do I know when brake pads need replacing?",
    answer:
      "Brake pads should be inspected regularly and replaced based on measured pad thickness, not just mileage. Most pads have a wear indicator — a small tab that contacts the rotor and causes a high-pitched squeal when pads are low. Some vehicles have an electronic wear sensor that illuminates a warning light. A mechanic can measure pad thickness during any inspection.",
  },
  {
    question: "What is the best way to track a car maintenance schedule?",
    answer:
      "Log each service with the date and mileage as soon as it is completed. Set reminders for the next due date or mileage based on the interval. Keeping records of what was done, when, and by whom is also valuable when selling the vehicle — a complete service history is evidence that maintenance has been performed.",
  },
  {
    question: "Is it okay to delay a service if the car seems fine?",
    answer:
      "Some services can cause noticeable symptoms if overdue — oil changes, for example. Others — like timing belt replacement — can fail without warning and cause major damage. Relying on how the car feels is not a reliable indicator for all service items. Following the schedule prevents issues rather than reacting to them after damage has begun.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Car Maintenance Schedule by Mileage: What to Check and When",
    description:
      "A simple car maintenance schedule by mileage, including oil, tires, filters, fluids, brakes, spark plugs and timing belt tracking.",
    url: ARTICLE_URL,
    datePublished: "2026-04-30",
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

export default function CarMaintenanceScheduleByMileageArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Car Maintenance Schedule by Mileage: What to Check and When",
    description: "A simple car maintenance schedule by mileage, including oil, tires, filters, fluids, brakes, spark plugs and timing belt tracking.",
    path: "/blog/car-maintenance-schedule-by-mileage",
    ogType: "article",
    jsonLd,
  });
  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero category={ARTICLE_CATEGORY} readTime={ARTICLE_READ_TIME} title="Car maintenance schedule by mileage" lede={ARTICLE_LEDE} />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Common maintenance intervals by mileage range — oil changes often
          every{" "}
          <strong className="text-white">5,000–7,500 miles</strong>, filters
          every <strong className="text-white">15,000–30,000 miles</strong>,
          fluids every{" "}
          <strong className="text-white">30,000–60,000 miles</strong>, spark
          plugs and timing belt every{" "}
          <strong className="text-white">60,000–100,000 miles</strong>{" "}
          depending on the vehicle. Your owner's manual specifies the correct
          intervals for your engine.
        </ShortAnswerBox>

        <ArticleH2>How to use this mileage schedule</ArticleH2>
        <ArticleP>
          This table groups commonly discussed maintenance items by approximate
          mileage range. The ranges shown are not universal rules — your
          vehicle's exact schedule is in the owner's manual.
        </ArticleP>
        <ul className="flex flex-col gap-2 mb-6">
          {[
            "All intervals are general guidance. Many vehicles require different service points.",
            "Mileage-or-time rules apply — whichever comes first triggers the service.",
            "Severe driving conditions typically require shorter intervals.",
            "Timing belt is a critical item — check whether your vehicle has a belt or chain.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </ProseSection>

      {/* Wide table section — allows up to 1200px */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-10">
        <ArticleH2>Maintenance schedule table</ArticleH2>
        <div className="overflow-x-auto rounded-xl border border-panel">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-panel">
                <th className="text-left px-5 py-3.5 font-semibold text-white text-sm whitespace-nowrap">Mileage range</th>
                <th className="text-left px-5 py-3.5 font-semibold text-white text-sm whitespace-nowrap">Service item</th>
                <th className="text-left px-5 py-3.5 font-semibold text-white text-sm">Notes</th>
              </tr>
            </thead>
            <tbody>
              {mileageSchedule.map((group, gi) =>
                group.items.map((item, ii) => (
                  <tr key={`${gi}-${ii}`} className="border-b border-panel last:border-0 hover:bg-surface/50 transition-colors">
                    {ii === 0 && (
                      <td
                        rowSpan={group.items.length}
                        className="px-5 py-3.5 font-semibold text-accent whitespace-nowrap align-top border-r border-panel"
                      >
                        {group.range}
                      </td>
                    )}
                    <td className="px-5 py-3.5 text-white font-medium whitespace-nowrap align-top">{item.service}</td>
                    <td className="px-5 py-3.5 text-muted leading-relaxed">{item.note}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ProseSection>
        <ArticleH2>Why mileage is not the only factor</ArticleH2>
        <ArticleP>
          Mileage is a useful proxy for wear, but it does not tell the whole
          story. Several other factors matter just as much:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { label: "Age / time", detail: "Rubber components (timing belt, hoses, seals), coolant, and brake fluid degrade over time regardless of mileage. A lightly driven vehicle still needs these items serviced on a calendar basis." },
            { label: "Driving conditions", detail: "Towing, mountain driving, extreme heat or cold, very short trips, and stop-go urban driving all increase wear relative to highway miles. Most manufacturers include a 'severe use' schedule for these conditions." },
            { label: "Fluid type", detail: "Conventional and synthetic oils have different service intervals. Long-life coolant has different requirements than standard. CVT fluid specifications differ from standard automatic transmission fluid. The fluid type used determines the correct interval." },
            { label: "Vehicle and engine design", detail: "An older vehicle with a copper-plug engine has very different maintenance requirements from a modern engine with iridium plugs and sealed transmission. There is no universal schedule." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1.5">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>Track your actual maintenance history</ArticleH2>
        <ArticleP>
          A mileage schedule tells you when to look at a service item —
          a maintenance log tells you when you actually did it. Both are useful:
          the schedule provides the target, the log confirms whether you have
          met it.
        </ArticleP>
        <ArticleP>
          CarCare Diary lets you log every service with date, mileage, and
          notes, and set mileage or date reminders for what is coming up next.
          You can track multiple vehicles and see the service history for each.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related guides:{" "}
          {[
            { to: "/blog/when-to-change-engine-oil", label: "engine oil" },
            { to: "/blog/when-to-rotate-tires", label: "tire rotation" },
            { to: "/blog/when-to-replace-brake-pads", label: "brake pads" },
            { to: "/blog/when-to-change-brake-fluid", label: "brake fluid" },
            { to: "/blog/when-to-change-coolant", label: "coolant" },
            { to: "/blog/when-to-replace-engine-air-filter", label: "engine air filter" },
            { to: "/blog/when-to-replace-cabin-air-filter", label: "cabin air filter" },
            { to: "/blog/when-to-replace-spark-plugs", label: "spark plugs" },
            { to: "/blog/when-to-change-transmission-fluid", label: "transmission fluid" },
            { to: "/blog/when-to-replace-timing-belt", label: "timing belt" },
          ].map((link, i) => (
            <span key={link.to}>
              {i > 0 && " · "}
              <Link to={link.to} className="text-accent font-semibold hover:text-white transition-colors">{link.label}</Link>
            </span>
          ))}
        </p>
        <p className="text-sm text-muted mb-8">
          Also:{" "}
          {[
            { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
            { to: "/vehicle-service-reminder-app", label: "vehicle service reminder app" },
            { to: "/car-service-history-app", label: "car service history app" },
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
      <span className="inline-block px-2.5 py-1 rounded-full border border-panel bg-surface font-medium">Last updated: August 2026</span>
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
