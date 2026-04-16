import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Bell,
  History,
  Share2,
  UserCircle,
  MessageCircle,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { usePageSeo } from "../lib/usePageSeo";

const SITE_URL = "https://www.carcarediary.com";

const HELP_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CarCare Diary Help Center",
    description:
      "Guides and answers for using CarCare Diary — getting started, logging services, mileage tracking, reminders, sharing your vehicle history, and plans.",
    url: `${SITE_URL}/help`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Help Center", item: `${SITE_URL}/help` },
    ],
  },
];

const topics = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description:
      "Add your vehicle, log your first service, keep mileage current, and review what's coming due.",
    link: "/help/getting-started-with-carcare-diary",
    linkLabel: "Read guide",
  },
  {
    icon: Bell,
    title: "Mileage & Reminders",
    description:
      "Why mileage matters, how to keep it current, and how it drives due dates and service reminders.",
    link: "/help/updating-mileage-and-keeping-records-accurate",
    linkLabel: "Read guide",
  },
  {
    icon: History,
    title: "Logging Services",
    description:
      "How to add a service entry, what each field means, and how logs build your vehicle's maintenance history.",
    link: "/help/how-to-log-your-first-service",
    linkLabel: "Read guide",
  },
  {
    icon: Share2,
    title: "Sharing Your Vehicle",
    description:
      "How to generate a public link to your vehicle's service history and what the viewer sees.",
    link: "/help/how-to-share-your-vehicle-history",
    linkLabel: "Read guide",
  },
  {
    icon: UserCircle,
    title: "Account & Plans",
    description:
      "What's included in Free, Base, and Pro - and how to manage multiple vehicles under one account.",
    link: "/help/free-vs-multi-vehicle-plans",
    linkLabel: "Read guide",
  },
  {
    icon: MessageCircle,
    title: "Contact Support",
    description:
      "Can't find what you're looking for? Send a message to the CarCare Diary support team.",
    link: "/support",
    linkLabel: "Get in touch",
  },
];

export default function HelpPage() {
  const jsonLd = useMemo(() => HELP_JSON_LD, []);

  usePageSeo({
    title: "Help Center - CarCare Diary",
    description:
      "Guides and answers for using CarCare Diary — getting started, logging services, mileage tracking, reminders, sharing vehicle history, and plan options.",
    path: "/help",
    jsonLd,
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-base text-white font-sans">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(180deg, #0C111F 0%, #0E1325 40%, #0C111F 100%)",
        }}
      />
      <div className="relative z-10">
        <LandingHeader />
        <main>
          <HelpHero />
          <FeaturedArticle />
          <TopicsGrid />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

function HelpHero() {
  return (
    <section className="pt-36 pb-12 md:pt-44 md:pb-16 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[640px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
          CarCare Diary
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          Help Center
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted">
          Find answers to common questions about using CarCare Diary, from
          adding your vehicle to tracking maintenance, understanding reminders,
          and sharing your service history.
        </p>
      </div>
    </section>
  );
}

function FeaturedArticle() {
  return (
    <section className="pb-10 md:pb-14 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-5">
          Start Here
        </p>
        <Link
          to="/help/getting-started-with-carcare-diary"
          className="group block max-w-[680px] rounded-2xl border border-accent/30 bg-surface p-8 hover:border-accent/60 transition-colors"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-accent bg-brand/10 border border-accent/20 px-2.5 py-0.5 rounded-full inline-block mb-3">
                Getting Started
              </span>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                Getting Started With CarCare Diary
              </h2>
              <p className="text-sm leading-relaxed text-muted mb-5">
                A step-by-step guide for new users. Learn how to add your
                vehicle, log your first service, keep mileage accurate, and
                start building a useful maintenance record.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Read guide
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function TopicsGrid() {
  return (
    <section className="pb-24 md:pb-32 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-5">
          Help Topics
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1060px]">
          {topics.map((topic) =>
            topic.link ? (
              <Link
                key={topic.title}
                to={topic.link}
                className="group rounded-xl border border-panel bg-surface p-7 hover:border-accent/40 transition-colors flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center mb-4">
                  <topic.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted mb-5 flex-1">
                  {topic.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  {topic.linkLabel}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ) : (
              <div
                key={topic.title}
                className="rounded-xl border border-panel/50 border-dashed bg-surface/40 p-7 flex flex-col opacity-60"
              >
                <div className="w-10 h-10 rounded-lg bg-brand/8 flex items-center justify-center mb-4">
                  <topic.icon className="w-5 h-5 text-muted" />
                </div>
                <h3 className="text-base font-semibold text-muted mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted/70 mb-4 flex-1">
                  {topic.description}
                </p>
                <span className="text-xs text-muted/50 font-medium">
                  Coming soon
                </span>
              </div>
            )
          )}
        </div>

        <div className="mt-12 pt-10 border-t border-panel max-w-[1060px]">
          <p className="text-sm text-muted">
            Looking for general product information?{" "}
            <Link
              to="/how-carcare-diary-works"
              className="text-accent hover:text-white transition-colors font-semibold"
            >
              See how CarCare Diary works
            </Link>
            {" or "}
            <Link
              to="/blog"
              className="text-accent hover:text-white transition-colors font-semibold"
            >
              browse the maintenance guides
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
