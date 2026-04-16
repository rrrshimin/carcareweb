import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Bell,
  Gauge,
  History,
  Share2,
  CheckCircle,
  X,
  Car,
  UserCheck,
  Home,
} from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";
import screenshotCarPage from "../assets/phone_screenshot_car_page.png";
import addingLog from "../assets/phone_screenshot_adding_log.png";

export const pageFaqs = [
  {
    question: "What Is A Car Maintenance Tracker App?",
    answer:
      "A car maintenance tracker app lets you log every service your vehicle receives, track mileage, get reminders when maintenance is coming due, and keep a complete service history in one place. CarCare Diary is a free car maintenance tracker for iPhone and Android.",
  },
  {
    question: "What Maintenance Can I Track With CarCare Diary?",
    answer:
      "You can track any type of vehicle maintenance - oil changes, brake pads, filters, spark plugs, tire rotations, fluid changes, battery replacements, inspections, and more. Each entry records the date, mileage, specifications, and notes.",
  },
  {
    question: "How Do Car Service Reminders Work?",
    answer:
      "CarCare Diary calculates when each service is coming due based on your logged history, current odometer reading, and recommended service intervals. You get a clear due status for each maintenance type and a reminder when it's time to act.",
  },
  {
    question: "Can I Track My Car's Mileage In The App?",
    answer:
      "Yes. You update your odometer in the app and CarCare Diary uses that reading to calculate when upcoming services are due. Your mileage is linked to each service entry, keeping your maintenance schedule accurate over time.",
  },
  {
    question: "Can I Share My Car's Maintenance History?",
    answer:
      "Yes. You can generate a public link to your vehicle's complete service record. This is useful when selling your car - potential buyers can see every logged service before making a decision, which builds confidence and supports your asking price.",
  },
  {
    question: "Is CarCare Diary Free To Use?",
    answer:
      "CarCare Diary is free for one vehicle with full access to the service log, mileage tracking, reminders, and shareable history. A Pro plan is available for tracking multiple vehicles.",
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
      "Car maintenance tracker app. Log services, track mileage, get service reminders, and share your vehicle maintenance history.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function CarMaintenanceTrackerPage() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title:
      "Car Maintenance Tracker App for Service Logs, Mileage, and Reminders",
    description:
      "Track car maintenance, mileage, service history, and reminders in one app. Keep your vehicle records organized and shareable with CarCare Diary.",
    path: "/car-maintenance-tracker",
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
          <TrackerHero />
          <WhatItHelps />
          <AppVsNotes />
          <WhoItsFor />
          <TrackerFAQ />
          <TrackerCTA />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

function TrackerHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[800px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
          CarCare Diary
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
          Car Maintenance Tracker{" "}
          <span className="text-accent">
            Keep Every Service, Mileage, and Reminder Organized
          </span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[600px] mx-auto">
          A car maintenance tracker is an app that logs every service your
          vehicle receives - oil changes, brake work, tire rotations - with
          dates, mileage, and notes. CarCare Diary does this for free on iPhone
          and Android, with reminders and a shareable service history included.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">
          Free for iPhone & Android
        </p>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: Wrench,
    title: "Log Every Service",
    description:
      "Record oil changes, brake work, filter replacements, fluid top-ups, inspections, and any other maintenance your car needs. Each entry captures date, mileage, and notes.",
  },
  {
    icon: Bell,
    title: "Get Service Reminders",
    description:
      "Know when maintenance is coming due based on your service log, current mileage, and recommended intervals. No more guessing when your last oil change was.",
  },
  {
    icon: Gauge,
    title: "Track Your Mileage",
    description:
      "Keep your odometer current so service reminders and due dates stay accurate over time. Your mileage history ties directly to your maintenance schedule.",
  },
  {
    icon: History,
    title: "Build A Complete Service History",
    description:
      "Every logged service adds to a growing, organized maintenance record. Filter by category, review past work, and see your car's full history at any time.",
  },
  {
    icon: Share2,
    title: "Share Records When Selling",
    description:
      "Generate a public link to your car's full service history. Buyers can review every logged service before purchase, which builds trust and supports your asking price.",
  },
];

function WhatItHelps() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              What It Does
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              What A Car Maintenance Tracker Helps You Do
            </h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">
              A car maintenance tracker replaces forgotten receipts, scattered
              notes, and missed service dates with one organized, always-current
              record.
            </p>
            <div className="flex flex-col gap-6">
              {benefits.map((item) => (
                <div key={item.title} className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted mt-8">
              For practical guidance on building a maintenance tracking habit,
              see{" "}
              <Link
                to="/blog/how-to-track-car-maintenance"
                className="text-accent font-semibold hover:text-white transition-colors"
              >
                how to track car maintenance
              </Link>
              .
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center gap-6">
            <img
              src={screenshotCarPage}
              alt="CarCare Diary vehicle dashboard showing maintenance status, mileage, and service categories"
              className="w-[200px] md:w-[230px] h-auto"
              loading="lazy"
            />
            <img
              src={addingLog}
              alt="CarCare Diary add log screen showing service entry with mileage and notes"
              className="w-[200px] md:w-[230px] h-auto mt-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const oldWay = [
  "Paper receipts that get lost or fade",
  "Trying to remember when you last changed your oil",
  "No reminders until something breaks",
  "Nothing to show a buyer when selling",
  "No idea what maintenance is coming up next",
  "Notes scattered across your phone, email, and glove box",
];

const newWay = [
  "Every service logged in one place",
  "Instant answer on when each service was last done",
  "Reminders based on your actual mileage and log",
  "A shareable link with your car's full service history",
  "Clear view of what's due soon",
  "One app, always up to date, always accessible",
];

function AppVsNotes() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Why Use An App
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Notes And Receipts Only Go So Far
          </h2>
          <p className="text-base text-muted max-w-[520px] mx-auto">
            Most car owners rely on memory or a stack of receipts. A dedicated
            car maintenance app changes how you stay on top of vehicle upkeep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          <div className="rounded-xl border border-panel bg-surface p-8">
            <h3 className="text-base font-semibold text-muted mb-5 uppercase tracking-wide text-sm">
              Without A Tracker
            </h3>
            <ul className="flex flex-col gap-3">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-accent/30 bg-surface p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-5 px-3 py-1.5 rounded-lg bg-brand text-white inline-block">
              With CarCare Diary
            </h3>
            <ul className="flex flex-col gap-3">
              {newWay.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const personas = [
  {
    icon: Car,
    title: "Daily Drivers",
    description:
      "You drive regularly and want to stay on top of oil changes, filters, and service schedules without relying on memory or paper receipts.",
  },
  {
    icon: Home,
    title: "Households With Multiple Cars",
    description:
      "Keep maintenance records for every vehicle in your household in one place. Each car gets its own profile, log, and service reminders.",
  },
  {
    icon: UserCheck,
    title: "Anyone Preparing To Sell",
    description:
      "A documented service history makes your car easier to sell and supports a fair asking price. Share the full record with buyers through a single link.",
  },
];

function WhoItsFor() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Who It's For
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Built For Everyday Car Owners
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto">
            CarCare Diary is for anyone who wants to stay organized and informed
            about their vehicle's maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-panel bg-surface p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/12 flex items-center justify-center mx-auto mb-5">
                <p.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-10">
          Managing a small business fleet?{" "}
          <Link
            to="/business"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            See CarCare Diary for Business
          </Link>
        </p>
      </div>
    </section>
  );
}

function TrackerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Common Questions About Car Maintenance Trackers
          </h2>
          <p className="text-base text-muted max-w-[440px] mx-auto">
            Questions about car maintenance tracking apps and how CarCare Diary works.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {pageFaqs.map((faq, index) => {
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
      </div>
    </section>
  );
}

function TrackerCTA() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-16 md:px-16 md:py-20 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Get The App
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Start Tracking Your Car's Maintenance
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto mb-10">
            Free car maintenance tracker for iPhone and Android. Log services,
            track mileage, get reminders, and share your vehicle's service
            history.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted">
            <Link
              to="/car-service-history"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              Car service history
            </Link>
            <span className="hidden sm:inline text-panel">·</span>
            <Link
              to="/vehicle-maintenance-log"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              Vehicle maintenance log
            </Link>
            <span className="hidden sm:inline text-panel">·</span>
            <Link
              to="/blog/car-maintenance-checklist"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              Maintenance checklist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
