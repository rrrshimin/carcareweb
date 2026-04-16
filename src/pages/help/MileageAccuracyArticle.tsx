import { useMemo } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, AlertCircle, Info } from "lucide-react";
import { HelpArticleLayout } from "./HelpArticleLayout";
import {
  ProseSection,
  ArticleH2,
  ArticleP,
} from "../blog/ArticleLayout";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "Updating Mileage and Keeping Records Accurate";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description:
    "Learn how to update mileage in CarCare Diary and keep maintenance records, reminders, and service history accurate over time.",
  url: "https://www.carcarediary.com/help/updating-mileage-and-keeping-records-accurate",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  publisher: {
    "@type": "Organization",
    name: "CarCare Diary",
    url: "https://www.carcarediary.com",
  },
};

const pageFaqs = [
  {
    q: "How do I update mileage in CarCare Diary?",
    a: "Open the vehicle in the app and update the odometer field with your current reading. The app will recalculate the due status for all mileage-based services immediately.",
  },
  {
    q: "Why does mileage affect reminders?",
    a: "CarCare Diary calculates when each mileage-based service is due by adding the service interval to the odometer reading at the time the service was last done. It then compares that figure to your current odometer. If the current odometer is not kept up to date, the due calculations will be off.",
  },
  {
    q: "How often should I update my mileage?",
    a: "There is no strict rule, but updating it whenever you have the car serviced or when you notice a significant change keeps calculations accurate. CarCare Diary will remind you to update mileage if a long time passes without an update.",
  },
  {
    q: "What if I entered the wrong mileage?",
    a: "You can update your current odometer in the app. Note that the app will not accept a value lower than your current stored odometer, so if you entered a figure that is too high, contact support for help.",
  },
  {
    q: "Do I need to enter mileage for every service log?",
    a: "For mileage-based services, the odometer reading at the time of service is important - it is the starting point for calculating when that service is next due. For time-based services, the date matters more, but recording the mileage is still good practice for a complete history.",
  },
  {
    q: "Does accurate mileage make the service history more useful?",
    a: "Yes. A service history with consistent mileage entries is easier to read and more credible when sharing with a buyer or a mechanic. It shows that services were done at the right intervals and that the record has been maintained carefully.",
  },
];

export default function MileageAccuracyArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title:
      "Updating Mileage and Keeping Records Accurate in CarCare Diary - Help",
    description:
      "Learn how to update mileage in CarCare Diary and keep maintenance records, reminders, and service history accurate over time.",
    path: "/help/updating-mileage-and-keeping-records-accurate",
    jsonLd,
  });

  return (
    <HelpArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero />
      <WhyMileageMatters />
      <TwoTypesOfMileage />
      <HowToUpdateMileage />
      <HowMileageAffectsTracking />
      <AccuracyTips />
      <CommonMistakes />
      <MileageFAQ />
      <RelatedPages />
      <SupportCTA />
    </HelpArticleLayout>
  );
}

function ArticleHero() {
  return (
    <section className="pt-10 pb-12 md:pt-12 md:pb-16 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[720px] mx-auto">
        <span className="text-xs font-semibold text-accent bg-brand/10 border border-accent/20 px-3 py-1 rounded-full inline-block mb-5">
          Mileage & Records
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          {ARTICLE_TITLE}
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted">
          Mileage is the main input CarCare Diary uses to calculate when
          services are due. Keeping your odometer current means the app shows
          accurate due dates and reminders. This guide explains how it works
          and how to keep your records useful over time.
        </p>
      </div>
    </section>
  );
}

function WhyMileageMatters() {
  return (
    <ProseSection>
      <ArticleH2>Why Mileage Matters</ArticleH2>
      <ArticleP>
        CarCare Diary tracks two kinds of maintenance intervals: mileage-based
        and time-based. Oil changes, tire rotations, and many other services
        are tracked by distance. For these, the app needs to know how far your
        vehicle has travelled since the last service.
      </ArticleP>
      <ArticleP>
        The calculation is straightforward: the app adds the service interval
        to the odometer reading recorded when the service was last done. It
        then subtracts your current odometer to see how much distance is left
        before the service is due again. If your current mileage is not kept
        roughly up to date, that remaining figure will be wrong.
      </ArticleP>
      <div className="flex items-start gap-3 rounded-xl border border-panel bg-surface px-5 py-4 mt-2">
        <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed text-muted">
          CarCare Diary will send you a reminder if your mileage has not been
          updated for an extended period. This helps keep calculations accurate
          without requiring you to update daily.
        </p>
      </div>
    </ProseSection>
  );
}

const mileageTypes = [
  {
    label: "Current odometer",
    description:
      "Your vehicle's current mileage, updated periodically in the app. This is used to calculate how far you are from each service becoming due. Keeping it reasonably current is what makes due dates accurate.",
    when: "Update whenever you check in on the app, have the car serviced, or notice the reading has changed significantly.",
  },
  {
    label: "Service log mileage",
    description:
      "The odometer reading at the time a specific service was done, recorded when you add a log entry. This is the starting point for calculating when that service is due next.",
    when: "Enter the reading from the day the service was actually performed, not today's reading.",
  },
];

function TwoTypesOfMileage() {
  return (
    <ProseSection>
      <ArticleH2>Two Places Mileage Appears</ArticleH2>
      <ArticleP>
        Mileage is used in two different ways in CarCare Diary, and it helps
        to understand both.
      </ArticleP>
      <div className="flex flex-col gap-5 mt-4">
        {mileageTypes.map((item, i) => (
          <div
            key={item.label}
            className="p-6 rounded-xl border border-panel bg-surface"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-brand/12 flex items-center justify-center shrink-0 text-xs font-bold text-accent">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold text-white">
                {item.label}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted mb-3">
              {item.description}
            </p>
            <div className="flex items-start gap-2 border-t border-panel pt-3">
              <span className="text-xs font-semibold text-accent shrink-0 mt-0.5">
                When:
              </span>
              <span className="text-xs leading-relaxed text-muted">
                {item.when}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

const updateSteps = [
  {
    number: "1",
    title: "Open your vehicle",
    body: "Select the vehicle you want to update in the CarCare Diary app.",
  },
  {
    number: "2",
    title: "Find the mileage update option",
    body: "Look for the odometer or mileage field in the vehicle settings or main vehicle screen.",
  },
  {
    number: "3",
    title: "Enter your current odometer reading",
    body: "Type in the current reading from your vehicle's odometer. Use the same unit your vehicle is set to in the app - kilometres or miles.",
  },
  {
    number: "4",
    title: "Save",
    body: "Save the update. The app immediately recalculates the due status for all mileage-based services on that vehicle.",
  },
];

function HowToUpdateMileage() {
  return (
    <ProseSection>
      <ArticleH2>How to Update Your Mileage</ArticleH2>
      <ArticleP>
        Updating your current odometer is done from within the CarCare Diary
        app.
      </ArticleP>
      <div className="flex flex-col gap-4 mt-4 mb-4">
        {updateSteps.map((step) => (
          <div
            key={step.number}
            className="flex items-start gap-5 p-6 rounded-xl border border-panel bg-surface"
          >
            <div className="w-9 h-9 rounded-full bg-brand/12 flex items-center justify-center shrink-0 text-sm font-bold text-accent">
              {step.number}
            </div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1.5">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-start gap-3 rounded-xl border border-panel bg-surface px-5 py-4">
        <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed text-muted">
          The app will not accept a value lower than your currently stored
          odometer. If you enter a figure that is too high by mistake, contact
          support for help correcting it.
        </p>
      </div>
    </ProseSection>
  );
}

const dueStates = [
  {
    state: "Not due",
    description:
      "More than 1,000 km/mi remaining before the service interval is reached. No action needed yet.",
  },
  {
    state: "Due soon",
    description:
      "Within 1,000 km/mi of the service interval. A warning is shown so you can plan ahead.",
  },
  {
    state: "Overdue",
    description:
      "The service interval has been exceeded. The item shows as overdue.",
  },
  {
    state: "No logs yet",
    description:
      "No service has been logged for this item yet. Due status cannot be calculated until a first log is added.",
  },
];

function HowMileageAffectsTracking() {
  return (
    <ProseSection>
      <ArticleH2>How Mileage Affects Due Status and Reminders</ArticleH2>
      <ArticleP>
        Every mileage-based service in CarCare Diary has a due state that
        updates each time you change your odometer. The states are:
      </ArticleP>
      <div className="flex flex-col gap-3 mt-4 mb-6">
        {dueStates.map((item) => (
          <div
            key={item.state}
            className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 p-5 rounded-xl border border-panel bg-surface"
          >
            <span className="text-sm font-semibold text-white shrink-0 sm:w-[120px]">
              {item.state}
            </span>
            <span className="text-sm leading-relaxed text-muted">
              {item.description}
            </span>
          </div>
        ))}
      </div>
      <ArticleP>
        Time-based services use the service date rather than mileage for their
        calculations, but recording the odometer in each log entry is still
        good practice for a complete history.
      </ArticleP>
    </ProseSection>
  );
}

const accuracyTips = [
  "Update your odometer whenever you have the car serviced - you will already have the reading to hand.",
  "Enter the odometer reading from the day the service was done, not today's reading, when adding a log entry.",
  "Keep your unit setting consistent. If your vehicle is set to kilometres, enter all values in kilometres.",
  "Log services as soon as they happen so dates and mileage are accurate while they are fresh.",
  "If you track more than one vehicle, each has its own odometer - update them separately.",
  "Review your records occasionally to catch any entries that look out of sequence.",
];

function AccuracyTips() {
  return (
    <ProseSection>
      <ArticleH2>Tips for Keeping Records Accurate</ArticleH2>
      <ul className="flex flex-col gap-3 mt-4">
        {accuracyTips.map((tip) => (
          <li
            key={tip}
            className="flex items-start gap-3 text-sm text-muted leading-relaxed"
          >
            <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </ProseSection>
  );
}

const mistakes = [
  {
    mistake: "Never updating the current odometer",
    effect:
      "The app has no way to know how far the vehicle has travelled. All mileage-based due dates will be stale and unreliable.",
  },
  {
    mistake: "Entering today's odometer in a log entry instead of the service-day reading",
    effect:
      "The due calculation starts from the wrong mileage figure, making the next service appear later than it actually is.",
  },
  {
    mistake: "Entering a mileage much higher than the actual reading",
    effect:
      "The validation rule prevents values lower than the current stored reading, so an inflated entry may be difficult to correct without contacting support.",
  },
  {
    mistake: "Skipping mileage on log entries for mileage-based services",
    effect:
      "Without an odometer value, the app cannot calculate when that service is next due.",
  },
  {
    mistake: "Mixing units",
    effect:
      "If your vehicle is set to kilometres but you enter miles, all due calculations will be off by a large factor.",
  },
];

function CommonMistakes() {
  return (
    <ProseSection>
      <ArticleH2>Common Mistakes to Avoid</ArticleH2>
      <div className="flex flex-col gap-4 mt-4">
        {mistakes.map((item) => (
          <div
            key={item.mistake}
            className="p-6 rounded-xl border border-panel bg-surface"
          >
            <div className="flex items-start gap-3 mb-2">
              <AlertCircle className="w-4 h-4 text-muted/60 shrink-0 mt-0.5" />
              <h3 className="text-sm font-semibold text-white leading-snug">
                {item.mistake}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted pl-7">
              {item.effect}
            </p>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

function MileageFAQ() {
  return (
    <ProseSection>
      <ArticleH2>Common Questions About Mileage</ArticleH2>
      <div className="flex flex-col gap-4 mt-4">
        {pageFaqs.map((faq) => (
          <div
            key={faq.q}
            className="p-6 rounded-xl border border-panel bg-surface"
          >
            <h3 className="text-[15px] font-semibold text-white mb-2">
              {faq.q}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

function RelatedPages() {
  const links = [
    {
      to: "/help/how-to-log-your-first-service",
      label: "How to Log Your First Service",
      description:
        "What to enter when adding a service entry, including the mileage field.",
    },
    {
      to: "/help/getting-started-with-carcare-diary",
      label: "Getting Started With CarCare Diary",
      description: "How to add your vehicle and begin building a service record.",
    },
    {
      to: "/how-carcare-diary-works",
      label: "How CarCare Diary Works",
      description:
        "Full product overview including mileage tracking, reminders, and sharing.",
    },
    {
      to: "/vehicle-maintenance-log",
      label: "Vehicle Maintenance Log",
      description: "About the vehicle maintenance log feature.",
    },
    {
      to: "/blog/how-to-track-car-maintenance",
      label: "How to Track Car Maintenance",
      description: "A practical guide to building a consistent maintenance tracking habit.",
    },
  ];

  return (
    <ProseSection>
      <ArticleH2>Related Pages</ArticleH2>
      <div className="flex flex-col gap-3 mt-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-5 rounded-xl border border-panel bg-surface hover:border-accent/40 transition-colors"
          >
            <span className="text-sm font-semibold text-accent shrink-0 sm:w-[260px] group-hover:text-white transition-colors">
              {link.label}
            </span>
            <span className="text-sm text-muted">{link.description}</span>
          </Link>
        ))}
      </div>
    </ProseSection>
  );
}

function SupportCTA() {
  return (
    <ProseSection>
      <div className="rounded-2xl border border-panel bg-surface p-8 text-center">
        <h2 className="text-xl font-semibold text-white mb-2">
          Need More Help?
        </h2>
        <p className="text-sm leading-relaxed text-muted mb-6 max-w-[400px] mx-auto">
          If something is not working as expected or you have a question not
          covered here, the CarCare Diary support team is happy to help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <Link
            to="/support"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            Contact support
          </Link>
          <span className="hidden sm:inline text-muted/40">·</span>
          <a
            href="mailto:hello@carcarediary.com"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            hello@carcarediary.com
          </a>
          <span className="hidden sm:inline text-muted/40">·</span>
          <Link
            to="/help"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            Back to Help Center
          </Link>
        </div>
      </div>
    </ProseSection>
  );
}
