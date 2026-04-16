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

const ARTICLE_TITLE = "How to Share Your Vehicle History";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description:
    "Learn how to share your vehicle maintenance history in CarCare Diary, what a shared link shows, and how to stop sharing if needed.",
  url: "https://www.carcarediary.com/help/how-to-share-your-vehicle-history",
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
    q: "How do I share my car's maintenance history?",
    a: "Open the vehicle in the CarCare Diary app, find the sharing option in the vehicle settings, and enable sharing. The app gives you a unique link that you can copy and send to anyone.",
  },
  {
    q: "What can people see in a shared vehicle history?",
    a: "They can see the vehicle name and year, current odometer, fuel type and transmission (if you filled those in), and the full maintenance log organized by category. Each entry shows the service date, mileage at the time, specs or parts used, and any notes you added.",
  },
  {
    q: "Can I stop sharing later?",
    a: "Yes. You can turn off sharing for a vehicle from within the app. Once disabled, the link will no longer show the vehicle's history.",
  },
  {
    q: "Is sharing useful when selling my car?",
    a: "Yes. A buyer can review the full logged maintenance history before visiting or making an offer. It shows the service types, dates, mileage records, and notes - giving a clear picture of how the car has been maintained.",
  },
  {
    q: "Does the viewer need an account to see my vehicle?",
    a: "No. Anyone with the link can view the shared page. No account or login is required.",
  },
  {
    q: "Do I need to log maintenance before sharing?",
    a: "Sharing works even with an empty log, but there is nothing to show until you have logged at least one service. The more complete your log is before you share, the more useful the shared page will be.",
  },
  {
    q: "Is sharing available on the free plan?",
    a: "Yes. Sharing vehicle history is available on the free plan.",
  },
];

export default function ShareVehicleHistoryArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "How to Share Your Vehicle History - CarCare Diary Help",
    description:
      "Learn how to share your vehicle maintenance history in CarCare Diary, what a shared link shows, and how to stop sharing if needed.",
    path: "/help/how-to-share-your-vehicle-history",
    jsonLd,
  });

  return (
    <HelpArticleLayout title={ARTICLE_TITLE}>
      <ArticleHero />
      <WhatSharingDoes />
      <WhatThePageShows />
      <HowToShare />
      <WhenSharingIsUseful />
      <HowToStopSharing />
      <BeforeYouShare />
      <SharingFAQ />
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
          Sharing
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          {ARTICLE_TITLE}
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted">
          CarCare Diary lets you create a public link to your vehicle's
          maintenance record. Anyone with the link can view the history - no
          account required. This guide explains what gets shared, how to enable
          it, and how to turn it off.
        </p>
      </div>
    </section>
  );
}

function WhatSharingDoes() {
  return (
    <ProseSection>
      <ArticleH2>What Sharing Your Vehicle History Does</ArticleH2>
      <ArticleP>
        When you enable sharing for a vehicle in CarCare Diary, the app
        generates a unique link for that vehicle. Anyone who opens that link
        sees a read-only view of the vehicle's maintenance record.
      </ArticleP>
      <ArticleP>
        The shared page is public - there is no password, no login, and no
        account needed to view it. The viewer can only see the vehicle history;
        they cannot edit anything or access your account.
      </ArticleP>
      <div className="flex items-start gap-3 rounded-xl border border-panel bg-surface px-5 py-4 mt-2">
        <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed text-muted">
          Shared vehicle pages are not indexed by search engines. They are only
          accessible to people who have the direct link.
        </p>
      </div>
    </ProseSection>
  );
}

const shownItems = [
  {
    label: "Vehicle name and year",
    detail: "The make, model, and year you entered when adding the vehicle.",
  },
  {
    label: "Vehicle image",
    detail: "Shown if you added a photo to the vehicle profile.",
  },
  {
    label: "Owner name",
    detail:
      'Shown as "Maintained by [name]" if you have a name set on your account.',
  },
  {
    label: "Fuel type and transmission",
    detail: "Shown if you filled in these details on the vehicle profile.",
  },
  {
    label: "Current odometer",
    detail: "Your most recent odometer reading, with the unit you use (km or miles).",
  },
  {
    label: "Full maintenance log",
    detail:
      "All logged services, organized by category. Each service type shows its history entries.",
  },
  {
    label: "Per-entry details",
    detail:
      "For each log entry: service date, mileage at the time of service, specs or parts used, and any notes you added.",
  },
];

const notShownItems = [
  "Service reminders or upcoming due dates",
  "Cost or spending data",
  "Other vehicles on your account",
  "Account or billing information",
];

function WhatThePageShows() {
  return (
    <ProseSection>
      <ArticleH2>What a Shared Link Shows</ArticleH2>
      <ArticleP>
        The shared page shows the vehicle summary and its full maintenance log.
        Here is a complete breakdown of what is visible:
      </ArticleP>

      <div className="flex flex-col gap-3 mt-4 mb-8">
        {shownItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 p-5 rounded-xl border border-panel bg-surface"
          >
            <div className="flex items-center gap-2 shrink-0 sm:w-[200px]">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
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

      <ArticleH2>What Is Not Shown</ArticleH2>
      <ArticleP>
        The following are not visible on a shared vehicle page:
      </ArticleP>
      <ul className="flex flex-col gap-2 mt-3">
        {notShownItems.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-sm text-muted leading-relaxed"
          >
            <span className="w-4 h-4 rounded-full border border-muted/40 shrink-0 flex items-center justify-center">
              <span className="w-1.5 h-0.5 bg-muted/60 rounded-full" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </ProseSection>
  );
}

const shareSteps = [
  {
    number: "1",
    title: "Open the vehicle in the app",
    body: "Go to the vehicle you want to share in CarCare Diary.",
  },
  {
    number: "2",
    title: "Find the sharing option",
    body: "Look for the share or sharing settings in the vehicle menu or settings. The exact location depends on your app version.",
  },
  {
    number: "3",
    title: "Enable sharing",
    body: "Turn on sharing for the vehicle. The app generates a unique link for that vehicle.",
  },
  {
    number: "4",
    title: "Copy and share the link",
    body: "Copy the link and send it to whoever you want to share the vehicle history with - by message, email, or however is most convenient.",
  },
];

function HowToShare() {
  return (
    <ProseSection>
      <ArticleH2>How to Create a Share Link</ArticleH2>
      <ArticleP>
        Sharing is managed from within the CarCare Diary mobile app. Follow
        these steps:
      </ArticleP>
      <div className="flex flex-col gap-4 mt-4">
        {shareSteps.map((step) => (
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

const useCases = [
  {
    title: "Selling your car",
    body: "Share the link with potential buyers so they can review the full service history before visiting. It shows every logged service with dates, mileage, and notes.",
  },
  {
    title: "Showing a mechanic your history",
    body: "Send the link to a mechanic before an appointment so they can see what has already been done and plan accordingly.",
  },
  {
    title: "Keeping a documented record",
    body: "The shared link gives you a permanent, readable version of your service record that you can bookmark or send to yourself.",
  },
  {
    title: "Building trust with buyers",
    body: "A complete, well-documented service history is easier to verify than a stack of paper receipts. It makes conversations about the car's condition more straightforward.",
  },
];

function WhenSharingIsUseful() {
  return (
    <ProseSection>
      <ArticleH2>When Sharing Is Useful</ArticleH2>
      <div className="flex flex-col gap-4 mt-4">
        {useCases.map((item) => (
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

function HowToStopSharing() {
  return (
    <ProseSection>
      <ArticleH2>How to Stop Sharing</ArticleH2>
      <ArticleP>
        You can turn off sharing for a vehicle at any time from within the
        CarCare Diary app. Find the sharing setting for the vehicle and disable
        it.
      </ArticleP>
      <ArticleP>
        Once disabled, the link will no longer show the vehicle's history. Anyone
        who tries to open the old link will not be able to view the record.
      </ArticleP>
      <ArticleP>
        Your maintenance log is not affected. Turning off sharing only controls
        whether the public link is active - your records stay in the app
        unchanged.
      </ArticleP>
    </ProseSection>
  );
}

const checklistItems = [
  "Log any recent services you have not added yet.",
  "Update your odometer to the current reading.",
  "Check that service dates are correct.",
  "Add useful notes to any entries that might need context.",
  "Fill in specs or parts used where relevant (for example, the oil grade for an oil change).",
  "Make sure the vehicle name and year are correct in the vehicle profile.",
];

function BeforeYouShare() {
  return (
    <ProseSection>
      <ArticleH2>Things to Check Before You Share</ArticleH2>
      <ArticleP>
        The shared page shows exactly what is in your log. Taking a few minutes
        to review your records before sharing makes the history more useful to
        whoever sees it.
      </ArticleP>
      <ul className="flex flex-col gap-3 mt-4">
        {checklistItems.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-muted leading-relaxed"
          >
            <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ProseSection>
  );
}

function SharingFAQ() {
  return (
    <ProseSection>
      <ArticleH2>Common Questions About Sharing</ArticleH2>
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
      description: "How to add your vehicle, log services, and set up mileage.",
    },
    {
      to: "/how-carcare-diary-works",
      label: "How CarCare Diary Works",
      description: "Full product overview including sharing, reminders, and plans.",
    },
    {
      to: "/car-service-history",
      label: "Car Service History",
      description: "About the service history feature and what it includes.",
    },
    {
      to: "/blog/what-to-include-in-a-car-service-history",
      label: "What to Include in a Car Service History",
      description: "A guide to logging useful records before you share.",
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
          If something isn't working as expected or you have a question not
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
