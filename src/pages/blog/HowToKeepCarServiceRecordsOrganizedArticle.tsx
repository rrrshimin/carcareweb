import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, AlertCircle } from "lucide-react";
import {
  ArticleLayout,
  ArticleMeta,
  ProseSection,
  ArticleH2,
  ArticleP,
} from "./ArticleLayout";
import { AppStoreButton, GooglePlayButton } from "../landing/StoreButtons";
import { usePageSeo } from "../../lib/usePageSeo";

const ARTICLE_CATEGORY = "Guides";
const ARTICLE_READ_TIME = "5 min read";

const recordsFaqs = [
  {
    question: "What Should I Keep In My Car Service Records?",
    answer:
      "For each service, record the service type, date, mileage, parts or fluids used with their specifications, and any notes about findings or follow-up work. The combination of date and mileage is especially important - it lets you calculate when services are next due and builds a useful timeline over time.",
  },
  {
    question: "Should I Record Mileage With Every Service Entry?",
    answer:
      "Yes. Mileage is one of the most useful pieces of information in a service record. It tells you exactly how much has been driven since the last service and is essential for calculating when interval-based maintenance is next due. A date alone gives you a timeline; mileage makes it a schedule.",
  },
  {
    question: "Do Receipts Alone Count As Service Records?",
    answer:
      "Receipts are useful evidence but they're not a complete record system. They often lack mileage, don't include verbal observations from the mechanic, go missing over time, and don't give you a searchable or shareable history. They're best treated as supporting documents alongside a proper log.",
  },
  {
    question: "Can I Organize Service Records Digitally?",
    answer:
      "Yes, and for most people a dedicated app is the most reliable approach. CarCare Diary lets you log every service entry with full detail on your phone - it's always with you, entries are organized by category, and the history is searchable and shareable without any paperwork to manage.",
  },
  {
    question: "Do Organized Records Help When Selling A Car?",
    answer:
      "Yes. A well-organized service record reassures a buyer that the car has been consistently maintained. It removes uncertainty, makes the conversation more straightforward, and can support a stronger asking price. CarCare Diary lets you share the full history through a single link.",
  },
  {
    question: "Is CarCare Diary Free?",
    answer:
      "CarCare Diary is free for one vehicle with full access to the service log, mileage tracking, and shareable history. A Pro plan is available for tracking multiple vehicles.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How To Keep Car Service Records Organized",
    description:
      "Learn how to keep car service records organized with mileage, service dates, notes, parts, and maintenance history in one place with CarCare Diary.",
    url: "https://www.carcarediary.com/blog/how-to-keep-car-service-records-organized",
    datePublished: "2026-04-16",
    dateModified: "2026-04-16",
    publisher: {
      "@type": "Organization",
      name: "CarCare Diary",
      url: "https://www.carcarediary.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: recordsFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function HowToKeepCarServiceRecordsOrganizedArticle() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "How To Keep Car Service Records Organized",
    description:
      "Learn how to keep car service records organized with mileage, service dates, notes, parts, and maintenance history in one place with CarCare Diary.",
    path: "/blog/how-to-keep-car-service-records-organized",
    ogType: "article",
    jsonLd,
  });

  return (
    <ArticleLayout
      category={ARTICLE_CATEGORY}
      title="How To Keep Car Service Records Organized"
    >
      <ArticleHero />
      <WhyOrganizedRecordsMatter />
      <WhatRecordsToKeep />
      <ASimpleSystem />
      <CommonMistakes />
      <HowCarCareHelps />
      <ArticleFAQ />
      <ArticleCTA />
    </ArticleLayout>
  );
}

function ArticleHero() {
  return (
    <section className="pt-10 pb-12 md:pb-16 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[760px] mx-auto">
        <ArticleMeta category={ARTICLE_CATEGORY} readTime={ARTICLE_READ_TIME} />
        <h1 className="text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-semibold mb-5">
          How To Keep Car Service Records Organized
        </h1>
        <p className="text-lg leading-relaxed text-muted mb-8 max-w-[560px] mx-auto">
          The most effective way to keep car service records organized is to use
          one place for all records, log mileage with every entry, and record
          details at the time of service. This guide explains each practice and
          how to maintain it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>
    </section>
  );
}

function WhyOrganizedRecordsMatter() {
  return (
    <ProseSection>
      <ArticleH2>Why Organized Service Records Matter</ArticleH2>
      <ArticleP>
        Service records tend to start organized and become less so over time.
        The first receipt goes in the glovebox. The next one goes in a drawer.
        A third gets photographed and left in a camera roll. After a few years,
        the full picture of what's been done to the car exists across several
        places - none of them complete.
      </ArticleP>
      <ArticleP>
        Disorganized records cause real problems at specific moments: when a
        mechanic asks about the last coolant change and you genuinely don't know,
        when a service reminder appears and you can't tell whether the work was
        already done, or when selling the car and a buyer asks to see the
        maintenance history. In each case, incomplete records mean uncertainty -
        for you and for the person asking.
      </ArticleP>
      <ArticleP>
        Organizing service records isn't about perfectionism. It's about having
        one reliable place where the history lives, so you can actually use it
        when it matters.
      </ArticleP>
    </ProseSection>
  );
}

const recordTypes = [
  {
    label: "Service entries",
    detail:
      "A log of every maintenance task carried out - oil changes, brake work, filter replacements, fluid services, inspections. Each entry should include the service type, date, and mileage at minimum.",
  },
  {
    label: "Parts and fluid specifications",
    detail:
      "The oil grade, filter reference, tyre brand and size, fluid type. These details matter when the same work needs doing again and save time at the next service.",
  },
  {
    label: "Notes and observations",
    detail:
      "Anything a mechanic flagged, anything you noticed, or a follow-up task mentioned during service. Notes capture context that a structured entry cannot.",
  },
  {
    label: "Receipts",
    detail:
      "Useful as supporting documents, but not a substitute for a proper log. Keep them as evidence alongside your entries, not as the primary record.",
  },
  {
    label: "Inspection findings",
    detail:
      "Results from annual or roadworthiness inspections, including any advisories. These form an important part of the car's documented history.",
  },
  {
    label: "Upcoming reminders",
    detail:
      "Work that was flagged for a future service - a belt that needs watching, a brake pad that's thinning, a fluid due for replacement in the next few months.",
  },
];

function WhatRecordsToKeep() {
  return (
    <ProseSection>
      <ArticleH2>What Records Are Worth Keeping</ArticleH2>
      <ArticleP>
        A complete set of service records is more than just invoices. These are
        the categories worth maintaining.
      </ArticleP>

      <div className="flex flex-col gap-3 mt-6">
        {recordTypes.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-panel bg-surface px-5 py-4"
          >
            <p className="text-sm font-semibold text-white mb-1.5">
              {item.label}
            </p>
            <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
          </div>
        ))}
      </div>

      <ArticleP>
        <span className="block mt-6">
          For a deeper look at what to include in each log entry, see the guide
          on{" "}
          <Link
            to="/blog/what-to-include-in-a-car-service-history"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            what to include in a car service history
          </Link>
          .
        </span>
      </ArticleP>
    </ProseSection>
  );
}

const steps = [
  {
    number: "01",
    title: "Pick One Place And Use It Consistently",
    body: "The single most important organizational decision is consolidation. Whether it's a dedicated app, a notebook in the glovebox, or a folder on your phone - pick one place and commit to it. Records spread across receipts, photos, apps, and memory are not organized, even if each individual piece is tidy.",
  },
  {
    number: "02",
    title: "Log Mileage With Every Entry",
    body: "Each service entry should include the odometer reading at the time. Without mileage, you have a history but not a schedule. With mileage, you can calculate intervals, spot gaps, and understand at a glance what has been driven since each service.",
  },
  {
    number: "03",
    title: "Record Details While They're Fresh",
    body: "The best time to log a service is at the time of service - or within a day. Details like oil grade, part references, or what the mechanic mentioned fade quickly. A brief note immediately after the service takes less than two minutes and preserves information that would otherwise be gone.",
  },
  {
    number: "04",
    title: "Keep Follow-Up Notes Separate From Completed Work",
    body: "When a mechanic recommends something for next time - a belt that needs watching, a brake pad at 30% - note it clearly as a future task rather than mixing it into the current entry. Keeping upcoming work distinct from completed work makes the record easier to act on.",
  },
  {
    number: "05",
    title: "Review Your Records Before Each Service",
    body: "Before taking the car in, spend a moment reviewing the last few entries. Check when the oil was last changed, whether there were any open advisories, and what the mileage was at the last service. Going into a service informed avoids missed work and helps you ask the right questions.",
  },
];

function ASimpleSystem() {
  return (
    <ProseSection>
      <ArticleH2>A Simple System That Actually Stays Organized</ArticleH2>
      <ArticleP>
        Most organizational problems with service records come down to a few
        habits - or the absence of them. These five practices keep a record tidy
        without requiring much effort.
      </ArticleP>

      <div className="flex flex-col gap-4 mt-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-xl border border-panel bg-surface px-5 py-5 flex gap-5"
          >
            <span className="text-2xl font-semibold text-accent/40 leading-none shrink-0 pt-0.5">
              {step.number}
            </span>
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

const mistakes = [
  {
    title: "Treating Receipts As The Record",
    body: "Receipts are supporting documents, not a record system. They often lack mileage, don't include verbal observations from the mechanic, and go missing over time. A receipt tells you money changed hands - a log entry tells you what was done and why it matters.",
  },
  {
    title: "Storing Records In Too Many Places",
    body: "A photo here, a note there, a folder somewhere else, a receipt in the glovebox. Distributed records feel organized until you need to actually find something. One place means one search.",
  },
  {
    title: "Skipping Mileage",
    body: "It's the most commonly missed field and the most consequential one. Without mileage at each entry, interval-based services lose their precision and the record becomes a rough history rather than a usable maintenance reference.",
  },
  {
    title: "Logging Service Type Without Specs",
    body: "Knowing the oil was changed is useful. Knowing it was changed with 0W-30 full synthetic at 58,400 km is significantly more useful. Specs take moments to add and pay off every future service.",
  },
  {
    title: "Ignoring Follow-Up Recommendations",
    body: "Mechanics frequently mention things that don't need attention right now but will soon. If those recommendations aren't written down, they disappear - and the next service often has to rediscover what the previous one already found.",
  },
];

function CommonMistakes() {
  return (
    <ProseSection>
      <ArticleH2>Habits That Quietly Undermine A Record System</ArticleH2>
      <ArticleP>
        Most disorganized service records didn't start that way. These are the
        patterns that let good intentions drift into incomplete histories.
      </ArticleP>

      <div className="flex flex-col gap-4 mt-6">
        {mistakes.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </ProseSection>
  );
}

function HowCarCareHelps() {
  return (
    <ProseSection>
      <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
        The App
      </p>
      <ArticleH2>How CarCare Diary Keeps Everything In One Place</ArticleH2>
      <ArticleP>
        CarCare Diary is a free maintenance log app for iPhone and Android.
        Every entry supports service type, date, mileage, parts, fluids, and
        notes in one place - on your phone, always with you. Entries are
        organized by category and build into a complete, scrollable service
        history for your vehicle.
      </ArticleP>
      <ArticleP>
        There's no paperwork to manage and nothing to misplace. When you want to
        review your history before a service, check what was done last year, or
        share the full record with a buyer, it's all in one place and accessible
        in seconds.
      </ArticleP>

      <div className="flex flex-col sm:flex-row gap-3 mt-6 mb-5">
        <AppStoreButton />
        <GooglePlayButton />
      </div>

      <p className="text-sm text-muted">
        Related guides:{" "}
        <Link
          to="/blog/how-to-track-car-maintenance"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          How to track car maintenance
        </Link>
        {" - "}
        <Link
          to="/blog/what-to-include-in-a-car-service-history"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          What to include in a service history
        </Link>
        {" - "}
        <Link
          to="/car-service-history"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          Car service history
        </Link>
        {" - "}
        <Link
          to="/vehicle-maintenance-log"
          className="text-accent font-semibold hover:text-white transition-colors"
        >
          Vehicle maintenance log
        </Link>
      </p>
    </ProseSection>
  );
}

function ArticleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ProseSection>
      <ArticleH2>Common Questions About Organizing Service Records</ArticleH2>
      <div className="flex flex-col gap-3 mt-6">
        {recordsFaqs.map((faq, index) => {
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

function ArticleCTA() {
  return (
    <section className="py-12 md:py-16 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[760px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-12 md:px-12 md:py-14 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Get The App
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Keep All Your Service Records In One Place
          </h2>
          <p className="text-base text-muted max-w-[420px] mx-auto mb-8">
            Free for iPhone and Android. Log every service, track mileage, and
            build a complete, organized service history you can rely on and
            share.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <Link
            to="/blog"
            className="text-sm text-accent font-semibold hover:text-white transition-colors"
          >
            Back to Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
