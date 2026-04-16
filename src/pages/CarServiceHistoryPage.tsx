import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Receipt,
  TrendingDown,
  HelpCircle,
  ListChecks,
  FolderOpen,
  Share2,
  CalendarDays,
  Gauge,
  StickyNote,
  ChevronDown,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";
import sharedBrowserView from "../assets/phone_screenshot_shared_car_browser_view.png";
import logsCategories from "../assets/logs_and_categories_list_ui_illustration_large.png";

export const serviceHistoryFaqs = [
  {
    question: "What Is A Car Service History?",
    answer:
      "A car service history is a record of all maintenance and repair work carried out on a vehicle. It typically includes the type of service, the date it was performed, the mileage at the time, any parts or fluids used, and relevant notes. A complete service history shows how consistently a vehicle has been maintained.",
  },
  {
    question: "What Should A Car Service Record Include?",
    answer:
      "A thorough service record should include the service type, date, mileage, parts or specifications used, and any notes from the work. Common entries include oil changes, brake replacements, filter changes, fluid top-ups, tire rotations, battery replacements, and inspections.",
  },
  {
    question: "Can I Keep A Digital Car Service History?",
    answer:
      "Yes. CarCare Diary lets you log every service digitally with full details - date, mileage, specs, and notes. Your vehicle's complete maintenance record is always on your phone, organized by category, and never lost.",
  },
  {
    question: "Can I Share My Car's Service History?",
    answer:
      "Yes. CarCare Diary lets you generate a public link to your vehicle's full service record. Anyone with the link can view the complete history - useful when selling your car or sharing records with a mechanic.",
  },
  {
    question: "Does A Service History Help When Selling A Car?",
    answer:
      "Yes. A documented service history gives buyers confidence that the vehicle has been properly cared for. It makes conversations easier, reduces uncertainty, and can support a stronger asking price. With CarCare Diary, you can share the full record instantly through a single link.",
  },
  {
    question: "Is CarCare Diary Free To Use?",
    answer:
      "CarCare Diary is free for one vehicle with full access to the service log, mileage tracking, and shareable history. A Pro plan is available if you need to track multiple vehicles.",
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
      "Keep your car service history organized and shareable. Log every maintenance entry with date, mileage, and notes. Free for iPhone and Android.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceHistoryFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function CarServiceHistoryPage() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Car Service History App to Keep Vehicle Records Organized",
    description:
      "Keep your car service history, mileage, and maintenance records organized in one app. Track services, store details, and share your vehicle history with CarCare Diary.",
    path: "/car-service-history",
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
          <ServiceHero />
          <WhyItMatters />
          <WhatBelongs />
          <HowItHelps />
          <ResaleSection />
          <ServiceFAQ />
          <ServiceCTA />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

function ServiceHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[800px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
          CarCare Diary
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
          Car Service History{" "}
          <span className="text-accent">
            Keep Every Maintenance Record Organized and Shareable
          </span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[600px] mx-auto">
          A car service history is a complete record of every maintenance job
          your vehicle has received - oil changes, brake work, tire rotations,
          and inspections - with dates, mileage, and notes for each. CarCare
          Diary keeps that record organized on your phone and shareable when
          needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">Free for iPhone & Android</p>
      </div>
    </section>
  );
}

const problems = [
  {
    icon: Receipt,
    title: "Lost Receipts And Missing Records",
    description:
      "Paper receipts fade, get lost in the glove box, or simply never make it home. Without a clear record, it's hard to know what was last done and when.",
  },
  {
    icon: HelpCircle,
    title: "No Clear Service Timeline",
    description:
      "Trying to remember whether the brakes were changed a year ago or two years ago, or whether the cabin filter was ever replaced, is a guessing game without proper records.",
  },
  {
    icon: AlertTriangle,
    title: "Missed Or Overdue Maintenance",
    description:
      "Without a service history to reference, it's easy to let scheduled maintenance slide past without noticing - until a warning light or a breakdown forces the issue.",
  },
  {
    icon: TrendingDown,
    title: "Harder Resale Conversations",
    description:
      "Buyers naturally ask about service history. Without documentation, you're relying on memory, which makes negotiations harder and reduces buyer confidence.",
  },
];

function WhyItMatters() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Why It Matters
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Why Keeping Your Car Service History Matters
          </h2>
          <p className="text-base text-muted max-w-[540px] mx-auto">
            Most car owners have good intentions about keeping records. The
            problem is usually the system - or the lack of one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {problems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-panel bg-surface p-7 flex items-start gap-5"
            >
              <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const serviceTypes = [
  {
    name: "Oil Change",
    details: "Date, mileage, oil grade, filter part number",
  },
  {
    name: "Brake Service",
    details: "Pads, rotors, calipers, date, mileage",
  },
  {
    name: "Air & Cabin Filters",
    details: "Filter type, date, mileage at replacement",
  },
  {
    name: "Fluid Changes",
    details: "Coolant, brake fluid, transmission fluid, power steering",
  },
  {
    name: "Spark Plugs",
    details: "Plug type, gap spec, date, mileage",
  },
  {
    name: "Tire Rotation & Replacement",
    details: "Tyre brand, size, pressure, rotation date",
  },
  {
    name: "Battery",
    details: "Battery spec, date, mileage, warranty notes",
  },
  {
    name: "Inspections",
    details: "Annual check, roadworthiness, pass/fail notes",
  },
  {
    name: "Timing Belt / Chain",
    details: "Date, mileage, tensioner, idler notes",
  },
  {
    name: "Suspension & Steering",
    details: "Shocks, springs, links, alignment",
  },
  {
    name: "Transmission Service",
    details: "Fluid type, date, mileage, filter",
  },
  {
    name: "Other Repairs",
    details: "Any other work done with full notes and receipts context",
  },
];

function WhatBelongs() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            What To Record
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What Should Be In A Car Service History
          </h2>
          <p className="text-base text-muted max-w-[580px] mx-auto">
            A complete vehicle service record goes beyond just oil changes.
            Here's everything worth logging for a thorough maintenance history.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1000px] mx-auto mb-12">
          {serviceTypes.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-panel bg-surface px-5 py-4"
            >
              <p className="text-sm font-semibold text-white mb-1">
                {item.name}
              </p>
              <p className="text-xs leading-relaxed text-muted">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted max-w-[560px] mx-auto">
          For each entry, it's worth recording at minimum:{" "}
          <span className="text-white">date</span>,{" "}
          <span className="text-white">mileage</span>,{" "}
          <span className="text-white">what was done</span>, and any{" "}
          <span className="text-white">specifications or notes</span>. The more
          detail you capture, the more useful the record becomes over time.
        </p>

        <p className="text-center text-sm text-muted mt-6">
          For a detailed breakdown of what to record in each entry, see{" "}
          <Link
            to="/blog/what-to-include-in-a-car-service-history"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            what to include in a car service history
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

const outcomes = [
  {
    icon: ListChecks,
    title: "One Timeline For Every Service",
    description:
      "Every logged entry goes into a single, organized history for your vehicle. No separate apps, no notebooks, no receipts to keep track of.",
  },
  {
    icon: CalendarDays,
    title: "Date And Mileage On Every Entry",
    description:
      "Each service record captures exactly when it was done and at what mileage. Over time, this builds a precise, searchable maintenance timeline.",
  },
  {
    icon: StickyNote,
    title: "Specs And Notes Per Service",
    description:
      "Record oil grades, part numbers, technician notes, and anything else relevant. The detail you put in is the detail you get back when you need it.",
  },
  {
    icon: FolderOpen,
    title: "Organized By Category",
    description:
      "Services are grouped by category - Engine, Brakes, Fluids, Electrical, and more - so finding a specific record takes seconds.",
  },
  {
    icon: Share2,
    title: "Share The Full Record With One Link",
    description:
      "Generate a public link to your car's complete service history. Buyers, mechanics, or anyone else can view the full record without needing an account.",
  },
];

function HowItHelps() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              How CarCare Diary Organizes Your Service Records
            </h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">
              CarCare Diary replaces scattered notes and receipts with a
              structured, always-current vehicle service history.
            </p>
            <div className="flex flex-col gap-6">
              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 text-left"
                >
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

            <p className="text-sm text-muted mt-10">
              Want reminders and mileage tracking too?{" "}
              <Link
                to="/car-maintenance-tracker"
                className="text-accent font-semibold hover:text-white transition-colors"
              >
                See the full car maintenance tracker
              </Link>
            </p>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={logsCategories}
              alt="CarCare Diary service log showing organized maintenance categories and history entries"
              className="w-full max-w-[320px] md:max-w-[380px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResaleSection() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              Resale And Transparency
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Share Your Car's Full Service History
            </h2>
            <p className="text-base text-muted mb-6 max-w-[520px] mx-auto lg:mx-0">
              When it's time to sell, a documented service history is one of the
              most useful things you can show a buyer. It removes uncertainty,
              reduces back-and-forth, and gives buyers a clear picture of how
              the car has been maintained.
            </p>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">
              CarCare Diary generates a shareable public link to your vehicle's
              complete maintenance record. Buyers can view every logged service
              from any device - no app or account required.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted max-w-[400px] mx-auto lg:mx-0">
              {[
                "Shows every service with date, mileage, and details",
                "Accessible from any browser with no login",
                "Shareable in messages, listings, or email",
                "Helps support your asking price with evidence",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <Gauge className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={sharedBrowserView}
              alt="CarCare Diary shareable vehicle service history page viewed in a mobile browser"
              className="w-full max-w-[280px] md:max-w-[320px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Common Questions About Car Service History
          </h2>
          <p className="text-base text-muted max-w-[440px] mx-auto">
            Questions about keeping, organizing, and sharing vehicle service
            records.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {serviceHistoryFaqs.map((faq, index) => {
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

function ServiceCTA() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-16 md:px-16 md:py-20 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Get The App
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Start Building Your Car's Service History
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto mb-10">
            CarCare Diary is a free app for iPhone and Android. Log every
            service, keep your records organized, and share your vehicle's full
            maintenance history when you need to.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted">
            <Link
              to="/car-maintenance-tracker"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              Car maintenance tracker
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
              to="/blog/how-to-keep-car-service-records-organized"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              How to organize records
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
