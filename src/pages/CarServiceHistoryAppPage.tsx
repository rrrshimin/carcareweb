import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  CalendarDays,
  Gauge,
  StickyNote,
  CheckCircle,
  X,
  ChevronDown,
  History,
  FileText,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";
import addingLog from "../assets/phone_screenshot_adding_log.png";
import logsCategories from "../assets/logs_and_categories_list_ui_illustration_large.png";
import sharedView from "../assets/phone_screenshot_shared_car_browser_view.png";

const pageFaqs = [
  {
    question: "What Is A Car Service History App?",
    answer:
      "A car service history app lets you log every maintenance entry for your vehicle - oil changes, brake work, tire rotations, fluid changes, and more - with the date, mileage, parts used, and notes. CarCare Diary is a free car service history app for iPhone and Android that organizes all your records in one place and lets you share the full history with a single link.",
  },
  {
    question: "What Should I Track In My Car Service History?",
    answer:
      "A complete service history should include the service type, date performed, mileage at the time, specifications (e.g. oil grade, filter part number), and any relevant notes. CarCare Diary lets you record all of these for every entry, organized by maintenance category.",
  },
  {
    question: "Does A Service History Help When Selling A Car?",
    answer:
      "Yes. A documented service history gives buyers confidence that the vehicle has been properly maintained. CarCare Diary generates a public shareable link to your car's complete record so buyers can review every logged service before making a decision - without you needing to print or compile anything.",
  },
  {
    question: "Can I Share My Car's Service History Digitally?",
    answer:
      "Yes. CarCare Diary generates a read-only public link to your vehicle's full service record. Anyone with the link can view the complete history - useful when selling, sharing with a mechanic, or keeping family members informed about a shared vehicle.",
  },
  {
    question: "Is A Digital Service History As Good As A Paper One?",
    answer:
      "A digital service history in an app is more reliable than paper - it can't be lost, faded, or left in a previous car. It's always searchable, shareable, and linked to actual odometer readings rather than approximate dates.",
  },
  {
    question: "Is CarCare Diary Free?",
    answer:
      "CarCare Diary is free for one vehicle with full access to the service log, mileage tracking, reminders, and shareable history. Paid plans are available for tracking multiple vehicles.",
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
      "Car service history app. Log every maintenance entry with date, mileage, specs and notes. Keep a complete, organized, shareable vehicle service record.",
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

export default function CarServiceHistoryAppPage() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Car Service History App for Maintenance Records | CarCare Diary",
    description:
      "Keep a clean car service history with maintenance logs, mileage, reminders and shareable records in the CarCare Diary mobile app.",
    path: "/car-service-history-app",
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
          <WhyItMatters />
          <WhatYouCanTrack />
          <ShareableHistory />
          <BetterThanScattered />
          <ServiceHistoryFAQ />
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
            Car service history app for{" "}
            <span className="text-accent">clean maintenance records</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">
            CarCare Diary is a free mobile app for iPhone and Android. Log every
            service with date, mileage, specs, and notes - and build a complete,
            searchable car service history you can share with a single link.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start mb-6">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <p className="text-sm text-muted">Free for iPhone &amp; Android</p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end gap-6 items-end">
          <img
            src={addingLog}
            alt="CarCare Diary add service log screen showing date, mileage and notes entry"
            className="w-[180px] md:w-[210px] h-auto"
          />
          <img
            src={logsCategories}
            alt="CarCare Diary maintenance log categories showing organized service history"
            className="w-[200px] md:w-[230px] h-auto mb-8"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

const whyPoints = [
  {
    icon: History,
    title: "Proves the car has been looked after",
    body: "A complete service history shows buyers, mechanics, and insurers that the vehicle has been regularly maintained - not just driven until something breaks.",
  },
  {
    icon: FileText,
    title: "Removes uncertainty at resale",
    body: "Buyers ask 'has it been serviced?' A shareable, timestamped log answers that question without negotiation. Every entry has a date and an odometer reading.",
  },
  {
    icon: Gauge,
    title: "Keeps service intervals accurate",
    body: "Linking services to real mileage - not just dates - means reminder calculations stay accurate as your driving habits change across seasons or years.",
  },
  {
    icon: StickyNote,
    title: "Captures details you will forget",
    body: "The oil grade used last time, the filter part number, the note about a noise the mechanic mentioned - these small details matter and tend to get lost unless they are recorded immediately.",
  },
];

function WhyItMatters() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Why it matters
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Why a complete car service history matters
          </h2>
          <p className="text-base text-muted max-w-[540px] mx-auto">
            A service history is not just for mechanics. It is the most useful
            document you own when buying, selling, or maintaining a vehicle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {whyPoints.map((item) => (
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

const trackItems = [
  {
    icon: Wrench,
    label: "Service type",
    detail: "Oil change, brake pads, filter, fluid, tyre rotation, battery, inspection, or any custom entry.",
  },
  {
    icon: CalendarDays,
    label: "Date of service",
    detail: "Exact date for every entry - so the history is accurate whether you service monthly or yearly.",
  },
  {
    icon: Gauge,
    label: "Mileage at time of service",
    detail: "Odometer reading linked to each entry, used to calculate when the next service interval is due.",
  },
  {
    icon: FileText,
    label: "Specifications and parts",
    detail: "Oil grade, filter part number, brake pad brand, or any spec you want to remember for next time.",
  },
  {
    icon: StickyNote,
    label: "Notes and observations",
    detail: "Mechanic feedback, unusual sounds noticed, upcoming items flagged - captured per entry.",
  },
  {
    icon: History,
    label: "Full timeline per vehicle",
    detail: "All entries organized by category and sorted by date. Scroll back through the car's full history at any time.",
  },
];

function WhatYouCanTrack() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            What you can log
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What CarCare Diary records per service entry
          </h2>
          <p className="text-base text-muted max-w-[520px] mx-auto">
            Every maintenance log entry captures the details that make a service
            history genuinely useful - not just the date, but the mileage,
            specs, and context.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          {trackItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-panel bg-surface p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand/12 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {item.label}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShareableHistory() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              Shareable history
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Share your full service history with one link
            </h2>
            <p className="text-base text-muted mb-8 max-w-[520px] mx-auto lg:mx-0">
              CarCare Diary generates a read-only public link to your vehicle's
              complete maintenance record. Anyone with the link can view the
              history - no app required on their end.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-muted mb-8 max-w-[480px] mx-auto lg:mx-0">
              {[
                "Share with a buyer before they commit to a purchase",
                "Send to your mechanic before a service appointment",
                "Keep family members updated on a shared vehicle",
                "Generate the link from the app in seconds",
                "Revoke or update the link at any time",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">
              More on sharing:{" "}
              <Link
                to="/share-car-maintenance-history"
                className="text-accent font-semibold hover:text-white transition-colors"
              >
                share car maintenance history
              </Link>
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 480 }}>
              <img
                src={sharedView}
                alt="CarCare Diary shared vehicle service history browser view showing maintenance records"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const withoutApp = [
  "Paper receipts lost or faded within months",
  "No record of which oil grade was used last time",
  "Scrambling to recall service dates when selling",
  "Buyer has to take your word for it",
  "Notes on your phone with no mileage context",
  "No way to prove the car has been maintained",
];

const withApp = [
  "Every service logged with date, mileage, and notes",
  "Specs saved per entry - oil grade, part numbers",
  "Full timeline ready to share in seconds",
  "Buyer receives a link with the verified history",
  "Organized by category, filterable and searchable",
  "Documented proof of maintenance that increases resale value",
];

function BetterThanScattered() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Why use an app
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Better than receipts and scattered notes
          </h2>
          <p className="text-base text-muted max-w-[520px] mx-auto">
            Most car owners keep receipts in a folder or a glove box. A
            dedicated service history app changes what that record can actually
            do for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          <div className="rounded-xl border border-panel bg-surface p-8">
            <h3 className="text-sm font-semibold text-muted mb-5 uppercase tracking-wide">
              Without a service history app
            </h3>
            <ul className="flex flex-col gap-3">
              {withoutApp.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-accent/30 bg-brand/5 p-8">
            <h3 className="text-sm font-semibold text-accent mb-5 uppercase tracking-wide">
              With CarCare Diary
            </h3>
            <ul className="flex flex-col gap-3">
              {withApp.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-muted mt-10">
          Related:{" "}
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
        </p>
      </div>
    </section>
  );
}

function ServiceHistoryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[860px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Common questions about car service history apps
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
          Start building your car service history today
        </h2>
        <p className="text-base text-muted mb-10">
          CarCare Diary is free for iPhone and Android. Log your first service
          in under a minute and start a history you can rely on.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>
    </section>
  );
}
