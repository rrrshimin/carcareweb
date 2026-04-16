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

const ARTICLE_TITLE = "Free vs Multi-Vehicle Plans";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description:
    "Learn the difference between the free and multi-vehicle options in CarCare Diary, including how many vehicles you can track and when an upgrade makes sense.",
  url: "https://www.carcarediary.com/help/free-vs-multi-vehicle-plans",
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
    q: "How many vehicles can I track for free?",
    a: "The free plan supports one vehicle. You get full access to the service log, mileage tracking, reminders, and the shareable history link for that vehicle.",
  },
  {
    q: "Do I need a paid plan to track more than one vehicle?",
    a: "Yes. The free plan is limited to one vehicle. If you want to track a second car or additional household vehicles, you need a Base or Pro plan.",
  },
  {
    q: "What is the difference between the Base and Pro plans?",
    a: "The Base plan supports up to 3 vehicles and adds vehicle spending analytics and a printable QR code for listings. The Pro plan supports unlimited vehicles and adds fleet-wide spending analytics and a multi-vehicle overview.",
  },
  {
    q: "Will each vehicle have its own maintenance history?",
    a: "Yes. Each vehicle has its own service log, mileage record, service reminders, and shareable history link. Records are kept completely separate.",
  },
  {
    q: "Are reminders available on the free plan?",
    a: "Yes. Service reminders are included on the free plan. They work the same way regardless of which plan you are on.",
  },
  {
    q: "Can I upgrade later if I start with the free plan?",
    a: "Yes. You can start on the free plan and upgrade to Base or Pro from within the CarCare Diary app whenever you need to track additional vehicles.",
  },
];

export default function PlansArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Free vs Multi-Vehicle Plans in CarCare Diary - Help",
    description:
      "Learn the difference between the free and multi-vehicle options in CarCare Diary, including how many vehicles you can track and when an upgrade makes sense.",
    path: "/help/free-vs-multi-vehicle-plans",
    jsonLd,
  });

  return (
    <HelpArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero />
      <FreePlanSection />
      <WhenMultiVehicleMakesSense />
      <WhatChanges />
      <WhichIsRightForYou />
      <PlansFAQ />
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
          Account & Plans
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          {ARTICLE_TITLE}
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted">
          CarCare Diary is free for one vehicle with full access to all core
          features. If you need to track more than one car, paid plans add
          multi-vehicle support. This page explains what each option includes
          and how to decide which is right for you.
        </p>
      </div>
    </section>
  );
}

const freeFeatures = [
  "1 vehicle",
  "Full maintenance log",
  "Mileage tracking",
  "Service reminders",
  "Shareable vehicle history link",
];

function FreePlanSection() {
  return (
    <ProseSection>
      <ArticleH2>What the Free Plan Includes</ArticleH2>
      <ArticleP>
        The free plan gives you access to all the core features of CarCare
        Diary for a single vehicle. There is no time limit and no feature
        paywall for core functionality.
      </ArticleP>

      <div className="rounded-xl border border-panel bg-surface p-7 mt-4 mb-6">
        <h3 className="text-base font-semibold text-white mb-4">
          Free plan
        </h3>
        <ul className="flex flex-col gap-3">
          {freeFeatures.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-muted"
            >
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <ArticleP>
        With the free plan you can log any type of maintenance, keep your
        mileage current, see what services are coming due, and generate a
        shareable link to your vehicle's full service history. The only limit
        is the number of vehicles.
      </ArticleP>
    </ProseSection>
  );
}

const multiVehicleReasons = [
  {
    title: "You own more than one car",
    body: "If you have a daily driver and a second vehicle you use occasionally, tracking them separately keeps each car's history clean and accurate.",
  },
  {
    title: "Your household has multiple vehicles",
    body: "Families with two or more cars often want one place to track all of them - each with its own log, reminders, and mileage.",
  },
  {
    title: "You want to sell one car and keep a detailed history",
    body: "A well-documented service history is more useful when each vehicle has its own dedicated log rather than shared records.",
  },
  {
    title: "You switch between a summer and winter vehicle",
    body: "Seasonal vehicles benefit from separate tracking so each car's service intervals stay accurate to how it is actually used.",
  },
];

function WhenMultiVehicleMakesSense() {
  return (
    <ProseSection>
      <ArticleH2>When a Multi-Vehicle Plan Makes Sense</ArticleH2>
      <ArticleP>
        A multi-vehicle plan is worth considering when the free plan's
        single-vehicle limit affects how you use the app.
      </ArticleP>
      <div className="flex flex-col gap-4 mt-4">
        {multiVehicleReasons.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-xl border border-panel bg-surface"
          >
            <h3 className="text-base font-semibold text-white mb-1.5">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

const plans = [
  {
    name: "Base",
    tagline: "For households tracking up to 3 vehicles",
    features: [
      "Up to 3 vehicles",
      "Everything in Free",
      "Vehicle spending analytics",
      "Printable QR for listings",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    tagline: "For larger households or anyone tracking many vehicles",
    features: [
      "Unlimited vehicles",
      "Everything in Base",
      "Fleet-wide spending analytics",
      "Multi-vehicle overview",
    ],
    highlight: false,
  },
];

function WhatChanges() {
  return (
    <ProseSection>
      <ArticleH2>What Changes With a Multi-Vehicle Plan</ArticleH2>
      <ArticleP>
        Upgrading adds the ability to track more vehicles. Each vehicle you
        add gets its own completely separate record - its own service log,
        mileage, reminders, and shareable history link. Nothing from one
        vehicle carries over to another.
      </ArticleP>
      <ArticleP>
        Paid plans also include additional features beyond multi-vehicle
        support:
      </ArticleP>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 mb-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-xl border border-panel bg-surface p-7 flex flex-col"
          >
            <h3 className="text-base font-semibold text-white mb-1">
              {plan.name}
            </h3>
            <p className="text-sm text-muted mb-5 leading-relaxed">
              {plan.tagline}
            </p>
            <ul className="flex flex-col gap-2.5">
              {plan.features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ArticleP>
        Plan upgrades are managed from within the CarCare Diary mobile app.
        The website does not have a subscription or billing page.
      </ArticleP>
    </ProseSection>
  );
}

const decisionRows = [
  {
    scenario: "You have one car and track it regularly",
    recommendation: "Free plan is sufficient.",
  },
  {
    scenario: "You have a second car you want to track separately",
    recommendation: "Base plan adds up to 3 vehicles.",
  },
  {
    scenario: "Your household has 3 or fewer vehicles",
    recommendation: "Base plan covers up to 3 vehicles.",
  },
  {
    scenario: "You want to track 4 or more vehicles",
    recommendation: "Pro plan supports unlimited vehicles.",
  },
  {
    scenario: "You want spending analytics per vehicle",
    recommendation: "Available on Base and Pro.",
  },
  {
    scenario: "You are not sure yet",
    recommendation:
      "Start free. You can upgrade later from within the app without losing any of your existing records.",
  },
];

function WhichIsRightForYou() {
  return (
    <ProseSection>
      <ArticleH2>How to Know Which Option Is Right for You</ArticleH2>
      <ArticleP>
        The simplest way to decide is to count how many vehicles you want to
        track and whether spending analytics matter to you.
      </ArticleP>
      <div className="flex flex-col gap-3 mt-4">
        {decisionRows.map((row) => (
          <div
            key={row.scenario}
            className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 p-5 rounded-xl border border-panel bg-surface"
          >
            <span className="text-sm text-muted shrink-0 sm:w-[300px] leading-relaxed">
              {row.scenario}
            </span>
            <span className="text-sm font-semibold text-white sm:flex-1 leading-relaxed pl-0 sm:border-l sm:border-panel sm:pl-5">
              {row.recommendation}
            </span>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

function PlansFAQ() {
  return (
    <ProseSection>
      <ArticleH2>Common Questions About Plans</ArticleH2>
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
      description: "How to add your vehicle and log your first service.",
    },
    {
      to: "/help/how-to-log-your-first-service",
      label: "How to Log Your First Service",
      description: "What to enter when logging a maintenance service.",
    },
    {
      to: "/how-carcare-diary-works",
      label: "How CarCare Diary Works",
      description:
        "Full product overview including features, steps, and plans.",
    },
    {
      to: "/vehicle-maintenance-log",
      label: "Vehicle Maintenance Log",
      description: "What a vehicle maintenance log is and how to use one.",
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
          Have a Question About Plans?
        </h2>
        <p className="text-sm leading-relaxed text-muted mb-6 max-w-[420px] mx-auto">
          If you have a question about your current plan or need help with an
          upgrade, the CarCare Diary support team can help.
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
