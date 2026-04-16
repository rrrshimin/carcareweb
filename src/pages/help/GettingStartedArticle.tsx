import { useMemo } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { HelpArticleLayout } from "./HelpArticleLayout";
import {
  ProseSection,
  ArticleH2,
  ArticleP,
} from "../blog/ArticleLayout";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_TITLE = "Getting Started With CarCare Diary";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description:
    "Learn how to get started with CarCare Diary, from adding your vehicle and mileage to logging maintenance and keeping service history organized.",
  url: "https://www.carcarediary.com/help/getting-started-with-carcare-diary",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  publisher: {
    "@type": "Organization",
    name: "CarCare Diary",
    url: "https://www.carcarediary.com",
  },
};

const steps = [
  {
    number: "1",
    title: "Download the app",
    body: "CarCare Diary is available for iPhone and Android. Download it from the App Store or Google Play and create a free account.",
  },
  {
    number: "2",
    title: "Add your vehicle",
    body: "Enter your vehicle's make, model, year, and license plate. Each vehicle gets its own service log and reminders.",
  },
  {
    number: "3",
    title: "Enter your current mileage",
    body: "Set your current odometer reading. CarCare Diary uses this to calculate when upcoming services will be due based on mileage intervals.",
  },
  {
    number: "4",
    title: "Log your first service",
    body: "Add a recent maintenance entry - an oil change is a good starting point. Record the service type, date, mileage at the time, and any relevant notes.",
  },
  {
    number: "5",
    title: "Update your mileage regularly",
    body: "When your odometer changes significantly, update it in the app. This keeps due-date calculations accurate over time.",
  },
  {
    number: "6",
    title: "Check what's due and review your history",
    body: "The app shows which services are coming up based on your log and mileage. You can also browse your full service history by category at any time.",
  },
];

const logFields = [
  {
    label: "Service type",
    detail: "What was done - oil change, brake pads, tire rotation, etc.",
  },
  {
    label: "Date",
    detail: "The date the service was completed.",
  },
  {
    label: "Mileage",
    detail: "Your odometer reading at the time of service.",
  },
  {
    label: "Parts and specifications",
    detail:
      "The oil grade, filter part number, fluid type, or any other relevant spec.",
  },
  {
    label: "Notes",
    detail: "Anything else worth keeping - shop name, next service reminder, observations.",
  },
];

const tips = [
  "Log services soon after they happen, not weeks later - details fade quickly.",
  "Keep your mileage updated whenever you have the car serviced.",
  "Include part numbers or fluid specifications when they matter for the next service.",
  "Short notes are better than no notes - a single sentence is enough.",
  "Log small items too, like wiper blades, bulb replacements, and fluid top-ups.",
];

export default function GettingStartedArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Getting Started With CarCare Diary - Help Center",
    description:
      "Learn how to get started with CarCare Diary, from adding your vehicle and mileage to logging maintenance and keeping service history organized.",
    path: "/help/getting-started-with-carcare-diary",
    jsonLd,
  });

  return (
    <HelpArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero />
      <WhatItHelpsYouDo />
      <HowToGetStarted />
      <WhatToLog />
      <UsefulTips />
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
          Getting Started
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          {ARTICLE_TITLE}
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted">
          This guide covers the basics for new users: adding your vehicle,
          logging your first service, keeping mileage accurate, and building a
          maintenance record that stays useful over time.
        </p>
      </div>
    </section>
  );
}

function WhatItHelpsYouDo() {
  return (
    <ProseSection>
      <ArticleH2>What CarCare Diary Helps You Do</ArticleH2>
      <ArticleP>
        CarCare Diary is a car maintenance tracker. It gives you one place to
        record every service your vehicle receives, keep your mileage current,
        and see what maintenance is coming due next.
      </ArticleP>
      <ArticleP>
        The main things you can do in the app:
      </ArticleP>
      <ul className="flex flex-col gap-2 mb-6">
        {[
          "Log maintenance services with date, mileage, and notes",
          "Track your odometer so due-date calculations stay accurate",
          "View your complete service history, organized by category",
          "See which services are coming due based on your log and mileage",
          "Generate a shareable link to your vehicle's service record",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-base text-muted leading-relaxed">
            <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <ArticleP>
        Everything in this guide applies to a single vehicle on the free plan.
        The Base plan supports up to 3 vehicles, and the Pro plan supports unlimited vehicles.
      </ArticleP>
    </ProseSection>
  );
}

function HowToGetStarted() {
  return (
    <ProseSection>
      <ArticleH2>How to Get Started</ArticleH2>
      <ArticleP>
        Follow these steps to set up your vehicle and start building a useful
        maintenance record.
      </ArticleP>
      <div className="flex flex-col gap-6 mt-6">
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

function WhatToLog() {
  return (
    <ProseSection>
      <ArticleH2>What to Log in Each Service Entry</ArticleH2>
      <ArticleP>
        Each log entry in CarCare Diary can include the following fields. You do
        not need to fill in every field - date, mileage, and service type are
        the most important.
      </ArticleP>
      <div className="flex flex-col gap-3 mt-4 mb-4">
        {logFields.map((field) => (
          <div
            key={field.label}
            className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 p-5 rounded-xl border border-panel bg-surface"
          >
            <span className="text-sm font-semibold text-white shrink-0 sm:w-[180px]">
              {field.label}
            </span>
            <span className="text-sm leading-relaxed text-muted">
              {field.detail}
            </span>
          </div>
        ))}
      </div>
      <ArticleP>
        For a full explanation of what to include and why, see{" "}
        <Link
          to="/blog/what-to-include-in-a-car-service-history"
          className="text-accent hover:text-white transition-colors"
        >
          what to include in a car service history
        </Link>
        .
      </ArticleP>
    </ProseSection>
  );
}

function UsefulTips() {
  return (
    <ProseSection>
      <ArticleH2>Tips for Keeping Records Useful</ArticleH2>
      <ArticleP>
        A maintenance log is only as useful as the data you put in it. These
        habits make a real difference over time.
      </ArticleP>
      <ul className="flex flex-col gap-3 mt-4">
        {tips.map((tip) => (
          <li
            key={tip}
            className="flex items-start gap-3 text-base text-muted leading-relaxed"
          >
            <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-1" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </ProseSection>
  );
}

function RelatedPages() {
  const links = [
    {
      to: "/how-carcare-diary-works",
      label: "How CarCare Diary works",
      description: "Full product overview with all features explained.",
    },
    {
      to: "/car-maintenance-tracker",
      label: "Car maintenance tracker",
      description: "About the core maintenance tracking feature.",
    },
    {
      to: "/car-service-history",
      label: "Car service history",
      description: "How your service log builds into a full history.",
    },
    {
      to: "/vehicle-maintenance-log",
      label: "Vehicle maintenance log",
      description: "What a vehicle maintenance log is and how to use one.",
    },
    {
      to: "/blog",
      label: "Maintenance guides",
      description: "Practical guides on oil changes, checklists, records, and more.",
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
            <span className="text-sm font-semibold text-accent shrink-0 sm:w-[220px] group-hover:text-white transition-colors">
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
          If you have a question that this guide doesn't cover, the CarCare
          Diary support team is happy to help.
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
