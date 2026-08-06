import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ChevronDown, CheckCircle2, AlertTriangle } from "lucide-react";
import {
  ArticleLayout,
  ArticleHero,
  ProseSection,
  ArticleH2,
  ArticleP,
} from "./ArticleLayout";
import { GuideDownloadCTA } from "./GuideDownloadCTA";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "When To Change Engine Oil";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-change-engine-oil";
const ARTICLE_LEDE =
  "Oil change intervals have extended significantly on modern vehicles. Most current manufacturer recommendations for full synthetic oil range from 10,000–16,000 km (6,000–10,000 miles), while conventional oil typically requires more frequent changes. Both a mileage limit and a time limit apply — whichever comes first. Your owner's manual is the only definitive source for your specific vehicle.";
const CTA_TITLE = "Track oil changes by date and mileage in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Change Engine Oil?",
    answer:
      "It depends on your vehicle, engine, and oil type. Many modern vehicles using full synthetic oil fall in a range of 7,500–10,000 miles or 12 months. Older vehicles or those using conventional oil may need changes every 3,000–5,000 miles. Always check the manufacturer's recommendation in your owner's manual - it is the correct answer for your specific vehicle.",
  },
  {
    question: "Can You Go Too Long Without An Oil Change?",
    answer:
      "Yes. Oil breaks down over time and mileage, losing its ability to lubricate and protect engine components. Extended delays can lead to sludge build-up, increased wear, and eventually engine damage. Oil changes are one of the cheapest maintenance tasks relative to the damage skipping them can cause.",
  },
  {
    question: "Does Synthetic Oil Last Longer Than Conventional?",
    answer:
      "Generally yes. Full synthetic oil is engineered to resist breakdown at higher temperatures and over longer distances. Many manufacturers recommend longer intervals with full synthetic. However, the interval still depends on your specific engine and conditions - check your manual rather than assuming the longest possible interval.",
  },
  {
    question: "Does Driving Style Affect How Often You Need An Oil Change?",
    answer:
      "Yes. Short trips under 5 miles, stop-and-go traffic, towing, extreme heat or cold, and dusty driving conditions all count as 'severe' and can require more frequent oil changes. Vehicles driven primarily on motorways in mild conditions typically reach the full recommended interval more consistently.",
  },
  {
    question: "How Do You Track When An Oil Change Is Due?",
    answer:
      "Log each oil change with the date and mileage, then set a mileage-based or time-based reminder. Apps like CarCare Diary let you record each oil change entry and set a reminder for when the next one is due based on your interval - so you always know without having to calculate manually.",
  },
  {
    question: "Is The Oil Life Monitor On My Dashboard Reliable?",
    answer:
      "Most modern oil life monitors use algorithms based on driving conditions to estimate remaining oil life - they do not test the oil itself. They are a useful guide, but they work best in combination with your manufacturer's maximum interval recommendation. Resetting the monitor at every oil change is important for the calculation to remain accurate.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Change Engine Oil: Mileage, Time and Warning Signs",
    description:
      "Learn when to change engine oil, how mileage and oil type affect intervals, warning signs to watch for, and how to track oil changes in CarCare Diary.",
    url: ARTICLE_URL,
    datePublished: "2026-04-30",
    dateModified: "2026-08-06",
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

export default function WhenToChangeEngineOilArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "When to Change Engine Oil: Mileage, Time and Warning Signs",
    description:
      "Learn when to change engine oil, how mileage and oil type affect intervals, warning signs to watch for, and how to track oil changes in CarCare Diary.",
    path: "/blog/when-to-change-engine-oil",
    ogType: "article",
    jsonLd,
  });

  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you change your engine oil?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          For most modern vehicles with full synthetic oil: every{" "}
          <strong className="text-white">7,500–10,000 miles</strong> or{" "}
          <strong className="text-white">12 months</strong>, whichever comes
          first. Conventional oil typically requires changes every 3,000–5,000
          miles. Check your owner's manual — your manufacturer's schedule is
          the correct answer for your vehicle.
        </ShortAnswerBox>

        <ArticleH2>Typical oil change intervals</ArticleH2>
        <ArticleP>
          There is no single universal answer because oil change intervals
          depend on oil type, engine design, and how the vehicle is driven.
          Broad ranges by oil type give a useful starting point:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Conventional oil",
              interval: "Typically 3,000–5,000 miles or 3–6 months",
              note: "Less heat-resistant than synthetic. More frequent changes needed.",
            },
            {
              label: "Synthetic blend",
              interval: "Typically 5,000–7,500 miles or 6 months",
              note: "A middle ground — better stability than conventional, shorter interval than full synthetic.",
            },
            {
              label: "Full synthetic oil",
              interval: "Typically 7,500–10,000 miles or 12 months",
              note: "Most modern vehicles. Some manufacturers allow up to 15,000 miles — check your manual.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-panel bg-surface px-5 py-4"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <span className="text-sm font-semibold text-white">
                  {item.label}
                </span>
                <span className="text-sm text-accent font-medium">
                  {item.interval}
                </span>
              </div>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <ArticleP>
          If your vehicle has an oil life monitor on the dashboard, it uses
          driving data to estimate remaining oil life — useful, but it works
          best alongside your manufacturer's maximum interval rather than
          replacing it.
        </ArticleP>

        <ArticleH2>Severe driving conditions and shorter intervals</ArticleH2>
        <ArticleP>
          Many manufacturers define two service schedules: normal and severe.
          Severe conditions require more frequent oil changes. Check if any of
          these apply to how you regularly drive:
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Frequent short trips under 5 miles where the engine never fully warms up",
            "Stop-and-go city driving for most of your mileage",
            "Towing or hauling heavy loads regularly",
            "Driving in extreme heat or cold consistently",
            "Operating in dusty, sandy, or off-road conditions",
            "Extended idle time — delivery, rideshare, or fleet use",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          If several of these apply, follow the severe driving schedule in your
          manual — typically 50–75% of the standard interval.
        </ArticleP>

        <ArticleH2>Signs your oil may need changing sooner</ArticleH2>
        <ArticleP>
          Between scheduled changes, certain signs can indicate the oil is
          degrading faster than expected or a problem has developed:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "Oil appears very dark or black on the dipstick",
              detail: "Fresh oil is amber. Darkening is normal with use, but thick, gritty, or black-as-ink oil has broken down.",
            },
            {
              sign: "Low oil level between changes",
              detail: "Some oil consumption is normal in older engines. Significant drops between changes can indicate leaks or burning — worth investigating before the next oil change.",
            },
            {
              sign: "Oil warning light illuminated",
              detail: "This indicates low oil pressure, not just low level. Stop driving soon and check the level immediately.",
            },
            {
              sign: "Engine running louder than usual",
              detail: "Insufficient lubrication causes more friction. A ticking or knocking sound that wasn't there before can be an early signal.",
            },
            {
              sign: "Burning smell from the engine bay",
              detail: "Can indicate oil leaking onto hot components. Check for visible leaks before the next scheduled change.",
            },
          ].map((item) => (
            <div key={item.sign} className="rounded-xl border border-panel bg-surface px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{item.sign}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you delay an oil change</ArticleH2>
        <ArticleP>
          Oil breaks down through heat cycling, oxidation, and contamination.
          Old oil loses viscosity, reduces its ability to coat engine surfaces,
          and begins depositing sludge. The consequences compound over time:
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Increased friction between moving engine components",
            "Sludge deposits that restrict oil flow to critical areas",
            "Accelerated wear on bearings, camshafts, and cylinder walls",
            "Reduced fuel efficiency from increased internal resistance",
            "Overheating if oil can no longer transfer heat effectively",
            "Engine damage that becomes expensive to repair",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          Oil changes are one of the lowest-cost services relative to the
          damage skipping them causes. Staying on schedule is straightforward
          once you have a system for tracking the interval.
        </ArticleP>

        <ArticleH2>How to track oil changes</ArticleH2>
        <ArticleP>
          The most reliable approach: log each oil change the day it's done,
          record the odometer reading, note the oil grade used, and set a
          reminder for the next interval. Three things to capture per entry:
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of the oil change",
            "Mileage at time of service",
            "Oil type and grade (e.g. 5W-30 full synthetic)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          CarCare Diary lets you log each oil change with date, mileage, and
          notes, then set a mileage-based or date-based reminder for the next
          one. Your oil change history builds as you log each entry — useful
          if you sell the car or need to show service records to a mechanic.
        </ArticleP>

        <p className="text-sm text-muted mb-8">
          Related:{" "}
          <Link
            to="/car-maintenance-tracker"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            car maintenance tracker
          </Link>
          {" · "}
          <Link
            to="/vehicle-service-reminder-app"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            vehicle service reminder app
          </Link>
          {" · "}
          <Link
            to="/blog/when-to-replace-brake-pads"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            when to replace brake pads
          </Link>
          {" · "}
          <Link
            to="/blog/when-to-rotate-tires"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            when to rotate tires
          </Link>
        </p>

        <ArticleH2>Frequently asked questions</ArticleH2>
        <OilFAQ />
      </ProseSection>
      <GuideDownloadCTA title={CTA_TITLE} variant="footer" />
    </ArticleLayout>
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
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
        Short answer
      </p>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
      <p className="text-xs text-muted/60 mt-3 italic">
        Use this as general guidance and always check your owner's manual for
        your exact vehicle.
      </p>
    </div>
  );
}

function OilFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3 mt-4">
      {articleFaqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`rounded-xl border overflow-hidden bg-surface transition-colors ${
              isOpen ? "border-accent/40" : "border-panel"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
            >
              <span className="text-[15px] font-semibold text-white pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5">
                <p className="text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
