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

const ARTICLE_TITLE = "Best Car Maintenance Apps in 2026";
const ARTICLE_CATEGORY = "Comparison";
const ARTICLE_READ_TIME = "8 min read";
const ARTICLE_URL =
  "https://www.carcarediary.com/blog/best-car-maintenance-apps";
const ARTICLE_LEDE =
  "The best car maintenance app depends on what you actually need: clean service history and mileage-based reminders, fuel economy tracking, expense management, or a lightweight fleet tool. This page compares ten widely-used apps on the maintenance features that matter most - service logs, reminders, multi-vehicle support, and shareable history.";
const CTA_TITLE = "Try the maintenance-first approach with CarCare Diary";

type TableValue = "Yes" | "Limited" | "No" | "Unclear";

type AppRow = {
  app: string;
  isCCD: boolean;
  freeVersion: TableValue;
  platforms: TableValue;
  maintLog: TableValue;
  historyTimeline: TableValue;
  mileageTracking: TableValue;
  dateReminders: TableValue;
  mileageReminders: TableValue;
  dueOverdue: TableValue;
  multiVehicle: TableValue;
  shareHistory: TableValue;
  bestFor: string;
};

const tableData: AppRow[] = [
  {
    app: "CarCare Diary",
    isCCD: true,
    freeVersion: "Yes",
    platforms: "Yes",
    maintLog: "Yes",
    historyTimeline: "Yes",
    mileageTracking: "Yes",
    dateReminders: "Yes",
    mileageReminders: "Yes",
    dueOverdue: "Yes",
    multiVehicle: "Yes",
    shareHistory: "Yes",
    bestFor: "Clean maintenance records and resale-ready history",
  },
  {
    app: "CARFAX Car Care",
    isCCD: false,
    freeVersion: "Yes",
    platforms: "Yes",
    maintLog: "Yes",
    historyTimeline: "Yes",
    mileageTracking: "Yes",
    dateReminders: "Yes",
    mileageReminders: "Yes",
    dueOverdue: "Yes",
    multiVehicle: "Yes",
    shareHistory: "No",
    bestFor: "Users who want CARFAX vehicle history alongside service logs",
  },
  {
    app: "AUTOsist",
    isCCD: false,
    freeVersion: "Limited",
    platforms: "Yes",
    maintLog: "Yes",
    historyTimeline: "Yes",
    mileageTracking: "Yes",
    dateReminders: "Yes",
    mileageReminders: "Yes",
    dueOverdue: "Yes",
    multiVehicle: "Yes",
    shareHistory: "Limited",
    bestFor: "Small business and fleet service record management",
  },
  {
    app: "Drivvo",
    isCCD: false,
    freeVersion: "Limited",
    platforms: "Yes",
    maintLog: "Yes",
    historyTimeline: "Limited",
    mileageTracking: "Yes",
    dateReminders: "Yes",
    mileageReminders: "Yes",
    dueOverdue: "Limited",
    multiVehicle: "Yes",
    shareHistory: "No",
    bestFor: "Fuel tracking and expense management with maintenance added",
  },
  {
    app: "Simply Auto",
    isCCD: false,
    freeVersion: "Limited",
    platforms: "Yes",
    maintLog: "Yes",
    historyTimeline: "Yes",
    mileageTracking: "Yes",
    dateReminders: "Yes",
    mileageReminders: "Yes",
    dueOverdue: "Yes",
    multiVehicle: "Yes",
    shareHistory: "No",
    bestFor: "Full vehicle ownership management including expenses and mileage",
  },
  {
    app: "My Car",
    isCCD: false,
    freeVersion: "Unclear",
    platforms: "Unclear",
    maintLog: "Yes",
    historyTimeline: "Limited",
    mileageTracking: "Yes",
    dateReminders: "Yes",
    mileageReminders: "Unclear",
    dueOverdue: "Limited",
    multiVehicle: "Yes",
    shareHistory: "No",
    bestFor: "Multi-vehicle diary with basic reminders",
  },
  {
    app: "CarDiary",
    isCCD: false,
    freeVersion: "Yes",
    platforms: "Limited",
    maintLog: "Yes",
    historyTimeline: "Limited",
    mileageTracking: "Yes",
    dateReminders: "Yes",
    mileageReminders: "Unclear",
    dueOverdue: "Limited",
    multiVehicle: "Yes",
    shareHistory: "No",
    bestFor: "Simple car diary and expense log",
  },
  {
    app: "Fuelly",
    isCCD: false,
    freeVersion: "Yes",
    platforms: "Yes",
    maintLog: "Limited",
    historyTimeline: "No",
    mileageTracking: "Yes",
    dateReminders: "No",
    mileageReminders: "No",
    dueOverdue: "No",
    multiVehicle: "Yes",
    shareHistory: "No",
    bestFor: "Fuel economy benchmarking and fill-up tracking",
  },
  {
    app: "Road Trip MPG",
    isCCD: false,
    freeVersion: "Limited",
    platforms: "Limited",
    maintLog: "No",
    historyTimeline: "No",
    mileageTracking: "Yes",
    dateReminders: "No",
    mileageReminders: "No",
    dueOverdue: "No",
    multiVehicle: "Yes",
    shareHistory: "No",
    bestFor: "Road trip fuel economy and trip planning",
  },
  {
    app: "Car Maintenance Reminders",
    isCCD: false,
    freeVersion: "Yes",
    platforms: "Limited",
    maintLog: "Limited",
    historyTimeline: "No",
    mileageTracking: "Limited",
    dateReminders: "Yes",
    mileageReminders: "Yes",
    dueOverdue: "Yes",
    multiVehicle: "Yes",
    shareHistory: "No",
    bestFor: "Basic reminder alerts with minimal service history logging",
  },
];

type AppCard = {
  name: string;
  externalUrl?: string;
  bestFor: string;
  pricing: string;
  platforms: string;
  strengths: string[];
  drawback: string;
};

const appCards: AppCard[] = [
  {
    name: "CarCare Diary",
    bestFor: "Clean maintenance records, mileage-based reminders, and resale-ready service history",
    pricing: "Free for one vehicle. Multi-vehicle plans available (Base: up to 3 vehicles, Pro: unlimited).",
    platforms: "iOS and Android",
    strengths: [
      "Full service log with date, mileage, parts, and notes per entry",
      "Both date-based and mileage-based maintenance reminders",
      "Due and overdue overview across all service types",
      "Public shareable link to any vehicle's complete service history",
      "Multi-vehicle support on paid plans",
      "Clean timeline history organized by service category",
    ],
    drawback: "Free tier is limited to one vehicle. No fuel economy or expense tracking built in.",
  },
  {
    name: "CARFAX Car Care",
    externalUrl: "https://www.carfax.com/carcare",
    bestFor: "Owners who want their CARFAX vehicle history data alongside their own logged services",
    pricing: "Free app. CARFAX vehicle history reports are a separate paid product.",
    platforms: "iOS and Android",
    strengths: [
      "Ties into existing CARFAX vehicle history records",
      "Date and mileage reminders for common services",
      "Due date overview per vehicle",
      "Multi-vehicle support",
    ],
    drawback: "Shareable service history requires a separate paid CARFAX report, not an in-app shareable link.",
  },
  {
    name: "AUTOsist",
    externalUrl: "https://autosist.com",
    bestFor: "Small businesses and fleets that need structured service logs and expense tracking",
    pricing: "Limited free tier (restricted vehicle/entry count). Paid plans for full access.",
    platforms: "iOS and Android",
    strengths: [
      "Detailed service log with custom fields",
      "Both date and mileage-based reminders",
      "Expense and fuel tracking included",
      "Multi-vehicle and basic fleet management",
    ],
    drawback: "Free plan is significantly limited. Shareable history is export-only - no public link.",
  },
  {
    name: "Drivvo",
    externalUrl: "https://www.drivvo.com",
    bestFor: "Drivers who primarily want fuel cost and expense tracking with maintenance notes added",
    pricing: "Limited free version. Paid plan unlocks full features and multiple vehicles.",
    platforms: "iOS and Android",
    strengths: [
      "Strong fuel and expense tracking",
      "Service log and date/mileage reminders",
      "Charts for spending and fuel economy",
    ],
    drawback: "Maintenance-first service history timeline is less developed - the app prioritizes fuel and expense data.",
  },
  {
    name: "Simply Auto",
    externalUrl: "https://simplyauto.app",
    bestFor: "Full vehicle management including business mileage, expenses, and maintenance",
    pricing: "Limited free plan. Premium unlocks full features and additional vehicles.",
    platforms: "iOS and Android",
    strengths: [
      "Service log with date and mileage reminders",
      "Business mileage and expense logging",
      "Full service history timeline",
      "Multi-vehicle support",
    ],
    drawback: "No public shareable service history link - useful feature for resale scenarios is absent.",
  },
  {
    name: "My Car",
    bestFor: "Multi-vehicle households that want a basic car diary with reminders",
    pricing: "Availability of a free tier varies by version - check the App Store or Google Play listing.",
    platforms: "Availability on both platforms is unclear - check stores for current listings.",
    strengths: [
      "Multi-vehicle profiles",
      "Service entries and date-based reminders",
      "Basic mileage tracking",
    ],
    drawback: "Mileage-based reminder calculation and service history depth depend on the specific version.",
  },
  {
    name: "CarDiary",
    bestFor: "Simple daily car diary with expense logging",
    pricing: "Free basic version available. Check App Store for current paid options.",
    platforms: "Primarily iOS. Android availability may be limited.",
    strengths: [
      "Basic service and expense log",
      "Date-based reminders",
      "Multi-vehicle support",
    ],
    drawback: "Service history depth and mileage-based reminders are limited compared to maintenance-first apps.",
  },
  {
    name: "Fuelly",
    externalUrl: "https://www.fuelly.com",
    bestFor: "Fuel economy enthusiasts who want to track and compare MPG across vehicles",
    pricing: "Free for core features. Optional premium available.",
    platforms: "iOS and Android",
    strengths: [
      "Best-in-class fuel fill-up tracking and MPG calculation",
      "Community benchmarking to compare your economy vs. others",
      "Multi-vehicle support",
    ],
    drawback: "Not a maintenance app - there are no maintenance reminders, no structured service history, and no due/overdue overview. Use Fuelly for fuel; use a separate app for maintenance.",
  },
  {
    name: "Road Trip MPG",
    bestFor: "Road trip fuel economy tracking and trip planning",
    pricing: "Limited free version. Check App Store for current pricing.",
    platforms: "Primarily iOS.",
    strengths: [
      "Trip-by-trip fuel economy tracking",
      "Multi-vehicle logging",
      "Useful for long-distance drivers",
    ],
    drawback: "No maintenance log, no reminders, no service history. A fuel tracking tool only.",
  },
  {
    name: "Car Maintenance Reminders",
    bestFor: "Drivers who only want reminder alerts and can manage service records elsewhere",
    pricing: "Free basic version. Check App Store for current listings.",
    platforms: "Primarily iOS. Android availability may be limited.",
    strengths: [
      "Date-based and mileage-based reminder alerts",
      "Due and overdue overview per vehicle",
      "Multi-vehicle support",
    ],
    drawback: "Minimal service history logging - more of an alarm system than a maintenance record app.",
  },
];

const comparisonFaqs = [
  {
    question: "What Is The Best Car Maintenance App?",
    answer:
      "The best car maintenance app depends on what you need. For a clean, organized service history with mileage-based reminders and shareable records, CarCare Diary is a strong choice. For fuel economy tracking, Fuelly is well-regarded. For small business and fleet use, AUTOsist offers more structured tools. For drivers who want fuel and expense tracking alongside maintenance, Drivvo or Simply Auto work well.",
  },
  {
    question: "What Is The Best Free Car Maintenance App?",
    answer:
      "CarCare Diary and CARFAX Car Care both offer free versions with meaningful functionality. CarCare Diary's free plan covers one vehicle with full access to service logs, mileage tracking, reminders, and shareable history. CARFAX Car Care is also free with multi-vehicle support, though shareable service records are not included. Fuelly is free and excellent for fuel tracking but is not a maintenance app.",
  },
  {
    question: "Which Car Maintenance Apps Support Mileage-Based Reminders?",
    answer:
      "Apps that explicitly support mileage-based reminders (not just calendar alerts) include CarCare Diary, AUTOsist, Drivvo, Simply Auto, and Car Maintenance Reminders. CARFAX Car Care also supports mileage-based reminders. Some apps - including My Car and CarDiary - may have this feature, but it was unclear based on available information.",
  },
  {
    question: "Can I Share My Car Service History When Selling A Car?",
    answer:
      "CarCare Diary generates a public link to your vehicle's complete maintenance record. Anyone with the link can view the full service history without needing an account. Most other apps on this list do not offer a shareable public service history link - AUTOsist allows export only, which is less convenient for resale scenarios.",
  },
  {
    question: "What Is The Best App For Tracking Multiple Vehicles?",
    answer:
      "Most apps on this list support multiple vehicles, but they vary on pricing for that feature. CarCare Diary, AUTOsist, Simply Auto, and CARFAX Car Care all support multi-vehicle tracking with varying free tier limits. Fuelly also supports multiple vehicles but is focused on fuel economy, not maintenance. CarCare Diary's free tier covers one vehicle; paid plans unlock additional vehicles.",
  },
  {
    question: "Are These Apps Free?",
    answer:
      "Most apps offer a free tier with some restrictions. CarCare Diary is free for one vehicle with full features. CARFAX Car Care and Fuelly are free with no significant feature restrictions for core functions. AUTOsist, Drivvo, Simply Auto, and Road Trip MPG offer limited free plans with paid upgrades needed for full access or multiple vehicles.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Car Maintenance Apps in 2026: Features, Prices and Free Versions",
    description:
      "Compare the best car maintenance apps for service history, mileage tracking, reminders, multi-vehicle support and shareable records.",
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
    mainEntity: comparisonFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function BestCarMaintenanceAppsArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Best Car Maintenance Apps in 2026: Features, Prices and Free Versions",
    description:
      "Compare the best car maintenance apps for service history, mileage tracking, reminders, multi-vehicle support and shareable records.",
    path: "/blog/best-car-maintenance-apps",
    ogType: "article",
    jsonLd,
  });

  return (
    <ArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero
        category={ARTICLE_CATEGORY}
        readTime={ARTICLE_READ_TIME}
        title="Best Car Maintenance Apps for Service History, Mileage and Reminders"
        lede={ARTICLE_LEDE}
      />
      <GuideDownloadCTA title={CTA_TITLE} />
      <ArticleIntroSection />
      <ComparisonTable />
      <HowWeCompared />
      <AppCardsSection />
      <CarCareDiarySection />
      <ComparisonFAQ />
      <GuideDownloadCTA title={CTA_TITLE} variant="footer" />
    </ArticleLayout>
  );
}

function ArticleIntroSection() {
  return (
    <ProseSection>
      <div className="flex items-center gap-2 mb-6 text-xs text-muted">
        <span className="inline-block px-2.5 py-1 rounded-full border border-panel bg-surface font-medium">
          Last updated: August 2026
        </span>
      </div>

      <ArticleH2>Which app is right for you?</ArticleH2>
      <ArticleP>
        Car maintenance apps serve different primary purposes. Before comparing
        features, it helps to know which category fits your need:
      </ArticleP>

      <div className="flex flex-col gap-3 mb-5">
        {[
          {
            label: "Maintenance-first",
            desc: "Service logs, mileage-based reminders, and service history timeline. Best if keeping accurate records and knowing what's due are the main goal. CarCare Diary, AUTOsist, and Simply Auto fit here.",
          },
          {
            label: "Fuel and expense tracking",
            desc: "Primarily tracking fill-up costs, fuel economy, and vehicle expenses. Fuelly, Drivvo, and Road Trip MPG are built around this use case.",
          },
          {
            label: "Reminder-only",
            desc: "Alert-based apps that notify you when a service interval passes. Car Maintenance Reminders is the clearest example - useful as an alarm system, not a record system.",
          },
          {
            label: "Vehicle history integration",
            desc: "Apps that pull in third-party vehicle history data (CARFAX). Useful when buying or selling a vehicle with existing service records.",
          },
        ].map(({ label, desc }) => (
          <div key={label} className="rounded-xl border border-panel bg-surface px-5 py-4">
            <p className="text-sm font-semibold text-white mb-1">{label}</p>
            <p className="text-sm leading-relaxed text-muted">{desc}</p>
          </div>
        ))}
      </div>

      <ArticleP>
        The comparison table below focuses on maintenance-specific features -
        service logs, mileage tracking, reminders, and service history. Features
        like OBD diagnostics, GPS tracking, fuel cards, and dispatch tools are
        outside this comparison because they serve a different product category.
      </ArticleP>

      <ArticleP>
        Internal links for more detail:{" "}
        <Link
          to="/car-maintenance-tracker"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          car maintenance tracker
        </Link>
        {" · "}
        <Link
          to="/car-service-history"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          car service history
        </Link>
        {" · "}
        <Link
          to="/fleet-management-app"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          fleet management app
        </Link>
      </ArticleP>
    </ProseSection>
  );
}

function TableCell({ value }: { value: TableValue }) {
  if (value === "Yes") {
    return (
      <td className="px-3 py-2.5 text-center">
        <span className="text-[13px] font-semibold text-emerald-400">Yes</span>
      </td>
    );
  }
  if (value === "Limited") {
    return (
      <td className="px-3 py-2.5 text-center">
        <span className="text-[13px] font-semibold text-accent">Limited</span>
      </td>
    );
  }
  if (value === "No") {
    return (
      <td className="px-3 py-2.5 text-center">
        <span className="text-[13px] text-muted/60">No</span>
      </td>
    );
  }
  return (
    <td className="px-3 py-2.5 text-center">
      <span className="text-[13px] italic text-muted/50">Unclear</span>
    </td>
  );
}

function ComparisonTable() {
  const headers = [
    "App",
    "Free version",
    "iOS + Android",
    "Maintenance log",
    "Service history",
    "Mileage tracking",
    "Date reminders",
    "Mileage reminders",
    "Due/overdue view",
    "Multi-vehicle",
    "Shareable history",
    "Best for",
  ];

  return (
    <section className="pt-2 pb-12 md:pb-16 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Comparison table
        </h2>
        <p className="text-base text-muted mb-6">
          Focused on maintenance-first features. Columns for OBD diagnostics,
          GPS, fuel cards, and dispatch tools are intentionally excluded.
        </p>

        <div className="overflow-x-auto rounded-xl border border-panel">
          <table className="min-w-[1000px] w-full text-sm bg-surface">
            <thead>
              <tr className="border-b border-panel">
                {headers.map((h) => (
                  <th
                    key={h}
                    className="px-3 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wide whitespace-nowrap first:pl-5 last:pr-5"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr
                  key={row.app}
                  className={`border-b border-panel/50 last:border-0 ${
                    row.isCCD
                      ? "bg-brand/5"
                      : i % 2 === 0
                      ? ""
                      : "bg-white/[0.015]"
                  }`}
                >
                  <td className="pl-5 pr-3 py-3 whitespace-nowrap">
                    <span
                      className={`text-sm font-semibold ${
                        row.isCCD ? "text-accent" : "text-white"
                      }`}
                    >
                      {row.isCCD ? "★ " : ""}
                      {row.app}
                    </span>
                  </td>
                  <TableCell value={row.freeVersion} />
                  <TableCell value={row.platforms} />
                  <TableCell value={row.maintLog} />
                  <TableCell value={row.historyTimeline} />
                  <TableCell value={row.mileageTracking} />
                  <TableCell value={row.dateReminders} />
                  <TableCell value={row.mileageReminders} />
                  <TableCell value={row.dueOverdue} />
                  <TableCell value={row.multiVehicle} />
                  <TableCell value={row.shareHistory} />
                  <td className="px-3 pr-5 py-3 text-xs text-muted leading-snug max-w-[200px]">
                    {row.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted/60 mt-3">
          ★ = this site's app · Feature data based on publicly available app
          information as of April 2026. "Unclear" means the feature could not
          be confirmed from available sources.
        </p>
      </div>
    </section>
  );
}

function HowWeCompared() {
  return (
    <ProseSection>
      <ArticleH2>How we compared these apps</ArticleH2>
      <ArticleP>
        This comparison is focused on maintenance-specific features. The
        evaluation criteria are:
      </ArticleP>

      <ul className="flex flex-col gap-3 mb-6">
        {[
          { label: "Free version", detail: "Whether a genuinely usable free tier exists, not just a trial." },
          { label: "iOS + Android", detail: "Whether both major platforms are supported with maintained apps." },
          { label: "Maintenance log", detail: "Whether the app lets you log individual service entries with date, mileage, and notes - not just reminders." },
          { label: "Service history timeline", detail: "Whether completed services build into a browsable, organized history per vehicle." },
          { label: "Mileage tracking", detail: "Whether the app tracks odometer readings per vehicle, not just calculates from fill-ups." },
          { label: "Date-based reminders", detail: "Whether reminders trigger based on calendar time intervals." },
          { label: "Mileage-based reminders", detail: "Whether reminders trigger based on distance driven - the most accurate method for interval-based services." },
          { label: "Due / overdue overview", detail: "Whether the app shows a clear dashboard of what maintenance is current, coming due, or overdue." },
          { label: "Multi-vehicle", detail: "Whether more than one vehicle can be tracked in the same account." },
          { label: "Shareable service history", detail: "Whether the app generates a public link to a vehicle's service record - useful for resale or sharing with a mechanic. Export-only is marked 'Limited'." },
        ].map(({ label, detail }) => (
          <li key={label} className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
            <span className="text-base text-muted leading-relaxed">
              <strong className="text-white">{label}</strong> — {detail}
            </span>
          </li>
        ))}
      </ul>

      <ArticleP>
        Features not included in this comparison: OBD/diagnostic port readers,
        VIN lookup, GPS tracking, fuel cards, driver behaviour scoring,
        inspection/compliance tools, mechanic marketplace, repair estimates,
        insurance tools, and enterprise fleet dispatching. Apps that specialise
        in those areas are different products from what this page covers.
      </ArticleP>
    </ProseSection>
  );
}

function AppCardsSection() {
  return (
    <section className="py-12 md:py-16 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          App breakdown
        </h2>
        <p className="text-base text-muted mb-10">
          A closer look at each app's strengths, pricing, and what it does best
          - and worst.
        </p>

        <div className="flex flex-col gap-6">
          {appCards.map((card) => (
            <AppCard key={card.name} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCard({ card }: { card: AppCard }) {
  const nameEl = card.externalUrl ? (
    <a
      href={card.externalUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-xl font-semibold text-white hover:text-accent transition-colors"
    >
      {card.name}
    </a>
  ) : (
    <h3 className="text-xl font-semibold text-white">{card.name}</h3>
  );

  return (
    <div className="rounded-xl border border-panel bg-surface px-6 py-6">
      <div className="mb-4">{nameEl}</div>

      <div className="flex flex-col gap-3 text-sm">
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="font-semibold text-white shrink-0 sm:w-[140px]">Best for</span>
          <span className="text-muted leading-relaxed">{card.bestFor}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="font-semibold text-white shrink-0 sm:w-[140px]">Pricing</span>
          <span className="text-muted leading-relaxed">{card.pricing}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="font-semibold text-white shrink-0 sm:w-[140px]">Platforms</span>
          <span className="text-muted leading-relaxed">{card.platforms}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="font-semibold text-white shrink-0 sm:w-[140px]">Strengths</span>
          <ul className="text-muted leading-relaxed flex flex-col gap-1">
            {card.strengths.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="font-semibold text-white shrink-0 sm:w-[140px]">Drawback</span>
          <span className="text-muted leading-relaxed">{card.drawback}</span>
        </div>
      </div>
    </div>
  );
}

function CarCareDiarySection() {
  return (
    <ProseSection>
      <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
        Our pick for maintenance records
      </p>
      <ArticleH2>Why CarCare Diary works well for clean maintenance records</ArticleH2>
      <ArticleP>
        Most car maintenance apps grew from either fuel tracking or reminder
        tools. CarCare Diary was built around a different starting point:
        building a complete, accurate service history for each vehicle as you
        drive it.
      </ArticleP>

      <div className="flex flex-col gap-4 my-6">
        {[
          {
            title: "Maintenance log built for real entries",
            body: "Each log entry captures service type, date, mileage, parts or fluids used, and free-form notes. The record builds automatically and is organized by maintenance category - oil, brakes, filters, tyres, and more.",
          },
          {
            title: "Both date and mileage reminders",
            body: "Most services follow mileage intervals, not calendar ones. CarCare Diary supports both: set a reminder for 10,000 km from the last oil change, a date-based annual inspection, or both simultaneously. Reminders are calculated from your actual logged service history and current odometer.",
          },
          {
            title: "Due and overdue overview",
            body: "The app shows each maintenance type's current status at a glance - due soon, overdue, or up to date. Useful for planning an upcoming service appointment without reviewing every log entry manually.",
          },
          {
            title: "Shareable service history link",
            body: "CarCare Diary generates a public link to your vehicle's full maintenance record. Anyone with the link can view the complete history without an account - built specifically for sharing with buyers when selling or with a mechanic before a service visit.",
          },
          {
            title: "Multi-vehicle support",
            body: "The free plan covers one vehicle. Paid plans unlock multiple vehicles, with each vehicle keeping its own independent log, mileage history, and reminder schedule.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-panel bg-surface px-5 py-4"
          >
            <p className="text-sm font-semibold text-white mb-1.5">{item.title}</p>
            <p className="text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>

      <ArticleP>
        <strong className="text-white">What CarCare Diary does not do:</strong>{" "}
        fuel economy tracking, OBD diagnostics, GPS tracking, expense
        categorization, or enterprise fleet operations. If those are your primary
        needs, one of the other apps in this list will serve you better.
      </ArticleP>

      <p className="text-sm text-muted mt-4">
        More detail:{" "}
        <Link
          to="/car-maintenance-tracker"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          car maintenance tracker
        </Link>
        {" · "}
        <Link
          to="/car-service-history"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          car service history
        </Link>
        {" · "}
        <Link
          to="/vehicle-maintenance-log"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          vehicle maintenance log
        </Link>
        {" · "}
        <Link
          to="/fleet-management-app"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          fleet management app
        </Link>
      </p>
    </ProseSection>
  );
}

function ComparisonFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ProseSection>
      <ArticleH2>Common questions about car maintenance apps</ArticleH2>
      <div className="flex flex-col gap-3 mt-6">
        {comparisonFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`rounded-xl border overflow-hidden transition-colors bg-surface ${
                isOpen ? "border-accent/40" : "border-panel"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
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
    </ProseSection>
  );
}
