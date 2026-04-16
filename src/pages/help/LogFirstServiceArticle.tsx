import { useMemo } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Info } from "lucide-react";
import { HelpArticleLayout } from "./HelpArticleLayout";
import {
  ProseSection,
  ArticleH2,
  ArticleP,
} from "../blog/ArticleLayout";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "How to Log Your First Service";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description:
    "Learn how to log your first maintenance service in CarCare Diary, what details to enter, and how service logs help build accurate vehicle history.",
  url: "https://www.carcarediary.com/help/how-to-log-your-first-service",
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
    q: "How do I log my first service in CarCare Diary?",
    a: "Open your vehicle in the app, select a maintenance category, choose the specific service type, then enter the date, your odometer reading, and any relevant specs or notes. Save the entry and it is added to your service history.",
  },
  {
    q: "What information should I enter when logging a service?",
    a: "The date the service was done and the odometer reading at the time are the most important fields. The service type is selected from a list. You can also add a specification (such as the oil grade used) and free-text notes.",
  },
  {
    q: "Is the mileage field required for every service?",
    a: "Mileage is required for services that are tracked by distance - such as oil changes and tire rotations. For time-based services, the date is what matters most. Either way, entering your odometer helps keep all your records consistent.",
  },
  {
    q: "Can I add notes and specifications to a log entry?",
    a: "Yes. Each log entry has an optional specification field - the label adapts to the service type, so for an oil change it might say 'Engine oil' with a placeholder like '5W-30'. There is also a free-text notes field for anything else you want to record.",
  },
  {
    q: "Does logging a service affect reminders?",
    a: "Yes. As soon as you save a log entry, the app recalculates when that service is next due. For mileage-based services, it adds the service interval to the odometer you logged. For time-based services, it adds the interval to the service date.",
  },
  {
    q: "Is logging available on the free plan?",
    a: "Yes. Logging maintenance is available on the free plan with no restrictions.",
  },
];

export default function LogFirstServiceArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "How to Log Your First Service in CarCare Diary - Help",
    description:
      "Learn how to log your first maintenance service in CarCare Diary, what details to enter, and how service logs help build accurate vehicle history.",
    path: "/help/how-to-log-your-first-service",
    jsonLd,
  });

  return (
    <HelpArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero />
      <WhatLoggingDoes />
      <WhatToHaveReady />
      <HowToLog />
      <FieldGuide />
      <UsefulTips />
      <LogFAQ />
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
          Service Logs
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          {ARTICLE_TITLE}
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted">
          Logging a service in CarCare Diary records what was done, when it
          happened, and at what mileage. This guide walks through what each
          field means, what is worth filling in, and what happens to reminders
          after you save.
        </p>
      </div>
    </section>
  );
}

function WhatLoggingDoes() {
  return (
    <ProseSection>
      <ArticleH2>What Logging a Service Does</ArticleH2>
      <ArticleP>
        Every time you log a service, CarCare Diary creates a new maintenance
        record for your vehicle. That record is tied to a specific service type
        - such as an oil change or brake pad replacement - and stores the date,
        mileage, and any details you enter.
      </ArticleP>
      <ArticleP>
        Over time, these entries build your vehicle's complete service history,
        organized by category. Each log also updates the reminder calculation
        for that service type, so the app knows when it is due again.
      </ArticleP>
      <div className="flex items-start gap-3 rounded-xl border border-panel bg-surface px-5 py-4 mt-2">
        <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed text-muted">
          Service types are organized into categories such as Engine, Brakes,
          Wheels, and Fluids. You pick from a predefined list rather than
          typing a free-form name.
        </p>
      </div>
    </ProseSection>
  );
}

const readyItems = [
  {
    label: "The service date",
    detail:
      "The date the work was actually done. This is required for all service types.",
  },
  {
    label: "Your odometer reading",
    detail:
      "The mileage on your vehicle at the time of service. Required for distance-tracked services and useful for all entries.",
  },
  {
    label: "The service type",
    detail:
      "The specific maintenance item - for example, engine oil, brake pads, or air filter. You select it from a list in the app.",
  },
  {
    label: "Specs or parts used (optional)",
    detail:
      "The product, grade, or part used - for example, the oil grade for an oil change or the plug type for spark plugs. The app shows the relevant label and an example placeholder for each service type.",
  },
  {
    label: "Notes (optional)",
    detail:
      "Anything else worth recording - shop name, observations, what prompted the service, or reminders for next time.",
  },
];

function WhatToHaveReady() {
  return (
    <ProseSection>
      <ArticleH2>What to Have Ready Before Logging</ArticleH2>
      <ArticleP>
        You do not need everything to log a service, but having the following
        information makes the entry more useful.
      </ArticleP>
      <div className="flex flex-col gap-3 mt-4">
        {readyItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 p-5 rounded-xl border border-panel bg-surface"
          >
            <div className="flex items-start gap-2 shrink-0 sm:w-[200px]">
              <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-white">
                {item.label}
              </span>
            </div>
            <span className="text-sm leading-relaxed text-muted sm:flex-1 pl-6 sm:pl-0">
              {item.detail}
            </span>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

const steps = [
  {
    number: "1",
    title: "Open your vehicle",
    body: "Open the vehicle you want to log a service for in the CarCare Diary app.",
  },
  {
    number: "2",
    title: "Select a maintenance category",
    body: "Choose the category the service belongs to - Engine, Brakes, Wheels, Fluids, Electrical, or another group. Categories help organize your history.",
  },
  {
    number: "3",
    title: "Select the service type",
    body: "Pick the specific maintenance item from the list. For example, within Engine you might select Engine Oil or Air Filter.",
  },
  {
    number: "4",
    title: "Enter the service date",
    body: "Set the date the service was performed. This is required and affects time-based reminder calculations.",
  },
  {
    number: "5",
    title: "Enter your odometer reading",
    body: "Enter the mileage on your vehicle at the time of service. This is used to calculate when mileage-based services are due again.",
  },
  {
    number: "6",
    title: "Add specs if relevant",
    body: "Fill in the specification field if it applies - for example, the oil grade used, the filter type, or the part number. The field label adapts to the service type.",
  },
  {
    number: "7",
    title: "Add notes if useful",
    body: "Use the notes field for anything else worth keeping - shop name, why the service was done early, or a detail you may want to check later.",
  },
  {
    number: "8",
    title: "Save the entry",
    body: "Save the log. The entry is added to your service history and the reminder for that service type is recalculated immediately.",
  },
];

function HowToLog() {
  return (
    <ProseSection>
      <ArticleH2>How to Log Your First Service</ArticleH2>
      <ArticleP>
        Follow these steps in the CarCare Diary app.
      </ArticleP>
      <div className="flex flex-col gap-4 mt-4">
        {steps.map((step) => (
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
    </ProseSection>
  );
}

const fields = [
  {
    label: "Service date",
    required: true,
    detail:
      "When the maintenance took place. Used for time-based due calculations and for reading your history chronologically.",
  },
  {
    label: "Odometer",
    required: true,
    detail:
      "Your vehicle's mileage at the time of service. Used to calculate when mileage-based services are due next. Enter in the unit your vehicle is set to (km or miles).",
  },
  {
    label: "Specification",
    required: false,
    detail:
      "The product or part used. The label changes per service type - oil grade for engine oil, plug type for spark plugs, filter size for filters. Useful for knowing what to buy next time.",
  },
  {
    label: "Notes",
    required: false,
    detail:
      "Free-text field for anything else. Good for recording the shop name, a reason the service was done early, or anything you might want to look back on.",
  },
];

function FieldGuide() {
  return (
    <ProseSection>
      <ArticleH2>What Each Field Is For</ArticleH2>
      <ArticleP>
        Here is a breakdown of each field in the log entry form.
      </ArticleP>
      <div className="flex flex-col gap-3 mt-4">
        {fields.map((field) => (
          <div
            key={field.label}
            className="p-5 rounded-xl border border-panel bg-surface"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-semibold text-white">
                {field.label}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  field.required
                    ? "bg-brand/10 border border-accent/20 text-accent"
                    : "bg-surface border border-panel text-muted"
                }`}
              >
                {field.required ? "Required" : "Optional"}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">{field.detail}</p>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

const tips = [
  "Log services soon after they happen. Details like the exact oil grade or shop name are easy to forget after a few days.",
  "Use the odometer reading from the day of service, not today's reading. This keeps your history accurate.",
  "Fill in the specification field when you can. Knowing what product was used last time makes it easier to buy the right one next time.",
  "Short notes beat no notes. A single line like 'shop did full inspection, no issues found' is more useful than an empty field.",
  "Log older services if you remember them. Even an approximate date and mileage is better than no record.",
  "Keep your vehicle's current mileage updated in the app. Reminder calculations depend on it being close to accurate.",
];

function UsefulTips() {
  return (
    <ProseSection>
      <ArticleH2>Tips for a Cleaner Service History</ArticleH2>
      <ArticleP>
        These habits make your log more useful over time, especially when
        reviewing history or sharing records with a buyer or mechanic.
      </ArticleP>
      <ul className="flex flex-col gap-3 mt-4">
        {tips.map((tip) => (
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

function LogFAQ() {
  return (
    <ProseSection>
      <ArticleH2>Common Questions About Logging Services</ArticleH2>
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
      to: "/help/getting-started-with-carcare-diary",
      label: "Getting Started With CarCare Diary",
      description: "How to add your vehicle and set up your account.",
    },
    {
      to: "/help/how-to-share-your-vehicle-history",
      label: "How to Share Your Vehicle History",
      description: "How to create a public link once your log is complete.",
    },
    {
      to: "/vehicle-maintenance-log",
      label: "Vehicle Maintenance Log",
      description: "What a vehicle maintenance log is and why it matters.",
    },
    {
      to: "/how-carcare-diary-works",
      label: "How CarCare Diary Works",
      description: "Full product overview including logs, reminders, and sharing.",
    },
    {
      to: "/blog/what-to-include-in-a-car-service-history",
      label: "What to Include in a Car Service History",
      description: "A guide to the details worth saving in every entry.",
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
