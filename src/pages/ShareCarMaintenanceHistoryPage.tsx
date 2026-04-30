import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Share2,
  Link2,
  Eye,
  ShieldCheck,
  Car,
  Wrench,
  Gauge,
  StickyNote,
  CheckCircle,
  ChevronDown,
  Users,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";
import sharedView from "../assets/phone_screenshot_shared_car_browser_view.png";
import heroScreenshot from "../assets/hero-screenshots-mockups.png";

const pageFaqs = [
  {
    question: "How Do I Share My Car Maintenance History?",
    answer:
      "In CarCare Diary, open your vehicle's profile and tap the share button. The app generates a public read-only link to your vehicle's full maintenance record. You can send this link to anyone - they can view the history in their browser without downloading the app.",
  },
  {
    question: "What Does The Shared Maintenance History Show?",
    answer:
      "The shared history shows your vehicle's profile (make, model, year), all logged service entries with dates and mileage, notes and specifications per entry, and the maintenance categories covered. It is a read-only view of exactly what is logged in your app.",
  },
  {
    question: "Can Anyone View My Shared Service History?",
    answer:
      "Yes - anyone with the link can view the history. The page is public and read-only. You remain in control of what is logged in the app, and you can revoke or update the link at any time from your vehicle settings.",
  },
  {
    question: "Does Sharing My Service History Help When Selling A Car?",
    answer:
      "Yes. Buyers often ask for proof of maintenance. With CarCare Diary, you can send a single link that shows the complete, timestamped service record. There is nothing to print or compile - the record is already there as you logged it.",
  },
  {
    question: "Can I Share The History With My Mechanic?",
    answer:
      "Yes. Sending the link to a mechanic before a service appointment gives them the full service history in advance - they can see what was done last time, what parts were used, and what notes were recorded. This can reduce the time spent diagnosing or explaining at the appointment.",
  },
  {
    question: "Is CarCare Diary Free?",
    answer:
      "CarCare Diary is free for one vehicle, including the shareable history feature. Paid plans are available for tracking multiple vehicles.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CarCare Diary",
    url: "https://www.carcarediary.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    description:
      "Share your car maintenance history with a public read-only link. Generated from your service log in the CarCare Diary mobile app.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function ShareCarMaintenanceHistoryPage() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Share Car Maintenance History with a Public Link | CarCare Diary",
    description:
      "Share a clean car maintenance history with buyers, family members or mechanics using CarCare Diary's mobile app and public service history link.",
    path: "/share-car-maintenance-history",
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
          <Hero />
          <WhyItHelps />
          <WhatItShows />
          <ReadOnlyRecord />
          <WhoItsFor />
          <ShareFAQ />
          <PageCTA />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            CarCare Diary
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
            Share car maintenance history{" "}
            <span className="text-accent">with a simple public link</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">
            CarCare Diary generates a read-only public link to your vehicle's
            complete maintenance record. Send it to a buyer, a mechanic, or a
            family member - they can view the full history in their browser
            without installing anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start mb-6">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <p className="text-sm text-muted">Free for iPhone &amp; Android</p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 460 }}>
            <img
              src={sharedView}
              alt="CarCare Diary shared vehicle service history page showing maintenance records in a browser"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItHelps() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Why it matters
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Why sharing your service history helps when selling
          </h2>
          <p className="text-base text-muted max-w-[560px] mx-auto">
            Buyers make decisions faster and with more confidence when they can
            verify a car's maintenance history themselves. A shareable link
            does that in seconds.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {[
            {
              icon: ShieldCheck,
              title: "Builds trust before the viewing",
              body: "Send the history link with your listing or in your first message. Buyers arrive already confident in the car's maintenance record.",
            },
            {
              icon: Eye,
              title: "Removes 'take my word for it'",
              body: "A timestamped log with real dates and mileage is more credible than a verbal summary. Every entry was recorded at the time of service.",
            },
            {
              icon: Share2,
              title: "Nothing to print or compile",
              body: "The record is already built. Tap share in the app, copy the link, and send it. No folders to gather, no photos to take.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-panel bg-surface p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const shownItems = [
  {
    icon: Car,
    label: "Vehicle profile",
    detail: "Make, model, year, and any notes you have added about the vehicle.",
  },
  {
    icon: Wrench,
    label: "All service entries",
    detail: "Every logged maintenance event - oil changes, brakes, filters, tyres, fluids, and any custom entry types.",
  },
  {
    icon: Gauge,
    label: "Mileage at each service",
    detail: "Odometer reading linked to each log entry, showing exactly when each service was performed relative to the car's usage.",
  },
  {
    icon: StickyNote,
    label: "Specs and notes",
    detail: "Oil grade, part numbers, mechanic observations, and any other notes recorded per entry.",
  },
  {
    icon: CheckCircle,
    label: "Maintenance categories",
    detail: "History organized by service type - easy to see which categories have been covered and how recently.",
  },
  {
    icon: Link2,
    label: "A single shareable URL",
    detail: "The shared page lives at a permanent public URL. No app needed to view it. Works on any browser.",
  },
];

function WhatItShows() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 500 }}>
              <img
                src={heroScreenshot}
                alt="CarCare Diary service log view showing maintenance history organized by category"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              What's included
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              What the shared history page shows
            </h2>
            <p className="text-base text-muted mb-8 max-w-[520px] mx-auto lg:mx-0">
              The shared link shows a read-only view of your vehicle's complete
              log - everything you have recorded in the app, presented cleanly
              for anyone viewing it.
            </p>
            <div className="flex flex-col gap-4">
              {shownItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 text-left">
                  <div className="w-8 h-8 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">
                      {item.label}
                    </span>
                    <p className="text-sm leading-relaxed text-muted mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadOnlyRecord() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[900px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-10 md:px-12 md:py-14">
          <div className="text-center mb-10">
            <div className="inline-flex w-12 h-12 rounded-xl bg-brand/12 items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Read-only - you stay in control
            </h2>
            <p className="text-base text-muted max-w-[520px] mx-auto">
              The shared link is strictly read-only. The viewer cannot edit,
              delete, or add anything to your maintenance record.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Viewer sees history only - no editing capability",
              "No account required to view the shared page",
              "You control what is logged in the app",
              "Revoke or regenerate the link at any time",
              "The link reflects your log as it currently stands",
              "Works in any browser on desktop or mobile",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Who uses it
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Useful for buyers, family members, and mechanics
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {[
            {
              icon: Car,
              who: "Private car sellers",
              body: "Share the full service history with every enquiry. Buyers see the record before they arrive, reducing time spent on viewings for vehicles that aren't right for them.",
            },
            {
              icon: Wrench,
              who: "Mechanics and garages",
              body: "Send the link before bringing the car in. The mechanic can review what has been done, what parts were used, and what notes were recorded - before the vehicle arrives.",
            },
            {
              icon: Users,
              who: "Families with shared vehicles",
              body: "Keep everyone in the household informed about a shared car's maintenance status without needing to grant app access. The shared link is always up to date.",
            },
          ].map((item) => (
            <div
              key={item.who}
              className="rounded-xl border border-panel bg-surface p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {item.who}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted mt-10">
          Related:{" "}
          <Link
            to="/car-service-history-app"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            car service history app
          </Link>
          {" · "}
          <Link
            to="/blog/best-car-maintenance-apps"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            best car maintenance apps
          </Link>
        </p>
      </div>
    </section>
  );
}

function ShareFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[860px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Questions about sharing your maintenance history
        </h2>
        <div className="flex flex-col gap-3">
          {pageFaqs.map((faq, i) => {
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
      </div>
    </section>
  );
}

function PageCTA() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[640px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-5">
          Build a service history worth sharing
        </h2>
        <p className="text-base text-muted mb-10">
          CarCare Diary is free for iPhone and Android. Start logging your
          services today and have a shareable history ready when you need it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>
    </section>
  );
}
