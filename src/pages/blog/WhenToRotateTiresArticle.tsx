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

const ARTICLE_TITLE = "When To Rotate Tires";
const ARTICLE_CATEGORY = "Maintenance";
const ARTICLE_READ_TIME = "5 min read";
const ARTICLE_URL = "https://www.carcarediary.com/blog/when-to-rotate-tires";
const ARTICLE_LEDE =
  "Tire rotation moves tires between positions on the vehicle to even out wear patterns. Most vehicles benefit from rotation every 5,000–7,500 miles, often aligned with oil changes, but the correct interval and rotation pattern depend on your drivetrain, tire type, and manufacturer recommendation.";
const CTA_TITLE = "Track tire rotations with mileage reminders in CarCare Diary";

const articleFaqs = [
  {
    question: "How Often Should You Rotate Tires?",
    answer:
      "Most manufacturers recommend tire rotation every 5,000–7,500 miles, or at every oil change if that interval falls within this range. Some vehicles and tire types have different requirements — check your owner's manual for the correct interval for your vehicle. All-wheel drive vehicles often benefit from more frequent rotation to keep wear even across all four tires.",
  },
  {
    question: "Why Is Tire Rotation Important?",
    answer:
      "Different wheel positions wear tires at different rates — front tires wear faster on front-wheel drive vehicles, rear tires wear faster on rear-wheel drive. Uneven wear shortens overall tire life and can affect handling. Regular rotation spreads wear more evenly, extending the usable life of the full set.",
  },
  {
    question: "What Is The Correct Tire Rotation Pattern?",
    answer:
      "Rotation patterns vary by drivetrain and tire type. Common patterns include: forward cross (FWD - fronts move straight back, rears cross to front), rearward cross (RWD/AWD - rears move straight forward, fronts cross to rear), and X-pattern (all tires cross). Directional tires can only move front-to-rear on the same side. Your owner's manual or tire manufacturer's guide specifies the correct pattern.",
  },
  {
    question: "Can You Feel When Tires Need Rotating?",
    answer:
      "Sometimes. Vibration at highway speeds, uneven wear visible when you look at the tires side by side, or the car pulling slightly to one side can all indicate uneven wear that rotation (and possibly balancing) would address. However, many tires need rotation before symptoms are obvious — sticking to a mileage interval is better than waiting for signs.",
  },
  {
    question: "Does Tire Rotation Need To Be Done At A Garage?",
    answer:
      "Tire rotation can be done at a garage, tire shop, or dealership. Many oil change services include rotation or offer it for a small additional fee. If you have the right tools and a safe lifting setup at home, it can also be done yourself — follow the correct pattern for your drivetrain.",
  },
  {
    question: "How Do I Track Tire Rotations?",
    answer:
      "Log each tire rotation with the date and mileage. This makes it easy to see when the next rotation is due and builds a record of the service history. Apps like CarCare Diary let you log tire rotations as a service entry and set a mileage-based reminder so you know when you're approaching the next interval.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Rotate Tires: Mileage, Wear Signs and Tracking Tips",
    description:
      "Learn when to rotate tires, why tire rotation matters, signs of uneven wear, and how to track tire service in CarCare Diary.",
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

export default function WhenToRotateTiresArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "When to Rotate Tires: Mileage, Wear Signs and Tracking Tips",
    description:
      "Learn when to rotate tires, why tire rotation matters, signs of uneven wear, and how to track tire service in CarCare Diary.",
    path: "/blog/when-to-rotate-tires",
    ogType: "article",
    jsonLd,
  });

  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="When should you rotate your tires?"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ProseSection>
        <LastUpdated />
        <ShortAnswerBox>
          Every <strong className="text-white">5,000–7,500 miles</strong> for
          most vehicles — often aligned with oil changes. All-wheel drive
          vehicles may benefit from more frequent rotation. Check your owner's
          manual for the correct interval and rotation pattern for your
          specific vehicle and tire type.
        </ShortAnswerBox>

        <ArticleH2>Why tire rotation matters</ArticleH2>
        <ArticleP>
          Tires don't wear evenly when left in the same position. The position
          a tire occupies, the vehicle's drivetrain, and weight distribution
          all affect how fast each tire wears down. Rotating tires moves them
          to positions where they experience different stresses, spreading wear
          more evenly across all four.
        </ArticleP>

        <ArticleP>
          The practical result of regular rotation is a longer usable life for
          the complete set. Uneven wear can also affect handling — a tire with
          significantly less tread than the others on the same axle can behave
          differently under braking or in wet conditions.
        </ArticleP>

        <ArticleH2>How drivetrain affects tire wear patterns</ArticleH2>
        <ArticleP>
          The type of drivetrain your vehicle has determines which tires wear
          fastest and why:
        </ArticleP>

        <div className="flex flex-col gap-4 mb-6">
          {[
            {
              label: "Front-wheel drive (FWD)",
              wear: "Front tires wear faster",
              note: "Front tires do both the steering and the driving. They handle the engine's power delivery, braking on the front axle, and all directional changes. Front tires can wear significantly faster than rear.",
            },
            {
              label: "Rear-wheel drive (RWD)",
              wear: "Rear tires wear faster",
              note: "Rear tires deliver the engine's power to the road. Under acceleration, the rear tires bear the driving load. In performance driving, rear wear can be much faster than front.",
            },
            {
              label: "All-wheel drive (AWD) / 4WD",
              wear: "Wear varies across all four",
              note: "Power is sent to multiple axles, and wear patterns can be less predictable. Even small differences in tread depth between axles can stress the drivetrain on AWD vehicles. More frequent rotation is often recommended.",
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
                  {item.wear}
                </span>
              </div>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <ArticleH2>Signs your tires may need rotation sooner</ArticleH2>
        <ArticleP>
          Sticking to a mileage interval is better than waiting for symptoms.
          That said, these signs can indicate uneven wear is developing between
          rotations:
        </ArticleP>

        <div className="flex flex-col gap-3 mb-6">
          {[
            {
              sign: "Visible difference in tread depth between tires",
              detail: "Look at your four tires side by side. If some have noticeably less tread pattern depth than others, they are wearing unevenly. Time for rotation and potentially a check of inflation and alignment.",
            },
            {
              sign: "Vibration at highway speeds",
              detail: "Uneven wear creates irregular contact with the road surface, which can cause vibration. Can also be a balancing issue — both are typically caught at a tire service.",
            },
            {
              sign: "Vehicle pulling to one side",
              detail: "Uneven wear across axles can affect straight-line tracking. If the car consistently pulls left or right without steering input, have the tires inspected.",
            },
            {
              sign: "Noise from one or more tires",
              detail: "A humming or droning sound that changes with speed can indicate cupped or uneven wear on a specific tire.",
            },
            {
              sign: "Feathering, cupping, or scalloping visible on tread",
              detail: "These irregular wear patterns usually indicate the rotation interval has been exceeded, or there is a suspension or alignment issue contributing. Inspect and rotate, then investigate the cause.",
            },
          ].map((item) => (
            <div
              key={item.sign}
              className="rounded-xl border border-panel bg-surface px-5 py-4"
            >
              <p className="text-sm font-semibold text-white mb-1">
                {item.sign}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <ArticleH2>What happens if you skip tire rotation</ArticleH2>
        <ArticleP>
          Skipping rotation doesn't cause immediate failure, but the long-term
          consequences reduce the value you get from a set of tires:
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-6">
          {[
            "The most-used tires wear out well before the others — you end up replacing tires in pairs rather than a full set",
            "Significantly shorter overall tire lifespan from the set",
            "Uneven handling characteristics as wear differences increase",
            "On AWD vehicles, large tread differences between axles can stress the drivetrain",
            "Reduced wet weather performance on the most-worn tires",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertTriangle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>Check tire pressure at every rotation</ArticleH2>
        <ArticleP>
          Tire rotation is an ideal opportunity to check and adjust tire
          pressure on all four tires. Correct inflation affects wear patterns
          directly — underinflation wears the outer edges of a tire faster,
          overinflation wears the centre.
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Check cold tire pressure — measured before driving or after short trips only",
            "Use the pressure listed in your owner's manual or door jamb sticker, not the number on the tire sidewall",
            "Check the spare tire pressure at the same time",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleH2>How to track tire rotations</ArticleH2>
        <ArticleP>
          Log each tire rotation with the date and mileage. The mileage at
          rotation is the key number — it tells you exactly when the next one
          is due without any mental arithmetic.
        </ArticleP>

        <ul className="flex flex-col gap-2 mb-5">
          {[
            "Date of rotation",
            "Mileage at time of rotation",
            "Rotation pattern used if known (useful for the next mechanic)",
            "Any notes about tread depth, pressure findings, or uneven wear observed",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <ArticleP>
          CarCare Diary lets you log tire rotations under a tyre service
          category, with date, mileage, and notes per entry. Set a
          mileage-based reminder — for example, rotate again at 5,000 miles
          from now — so the next interval is tracked automatically.
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
            to="/blog/when-to-change-engine-oil"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            when to change engine oil
          </Link>
          {" · "}
          <Link
            to="/blog/when-to-replace-brake-pads"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            when to replace brake pads
          </Link>
        </p>

        <ArticleH2>Frequently asked questions</ArticleH2>
        <TireFAQ />
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
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
        Short answer
      </p>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
      <p className="text-xs text-muted/60 mt-3 italic">
        Use this as general guidance and always check your owner's manual for
        your exact vehicle and tire type.
      </p>
    </div>
  );
}

function TireFAQ() {
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
