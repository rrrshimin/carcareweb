import { useMemo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Wrench,
  Gauge,
  Bell,
  History,
  Share2,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";

const pageFaqs = [
  {
    question: "What is CarCare Diary?",
    answer:
      "CarCare Diary is a free car maintenance tracker for iPhone and Android. It lets you log every service your vehicle receives, track mileage, get reminders when maintenance is due, and keep a shareable service history in one place.",
  },
  {
    question: "How does CarCare Diary work?",
    answer:
      "You add your vehicle, then log each service as it happens - oil changes, brake work, tire rotations, and anything else. CarCare Diary records the date, mileage, and notes for each entry. It uses your service log and current odometer to show you what maintenance is coming due next.",
  },
  {
    question: "What can I track with CarCare Diary?",
    answer:
      "You can track oil and filter changes, brakes, air and cabin filters, spark plugs, fluid changes, tire rotations and replacements, battery replacements, inspections, and any other service. Each entry records the service type, date, mileage, parts or specs, and notes.",
  },
  {
    question: "How do reminders work?",
    answer:
      "When you log a service, CarCare Diary records the date and mileage. You set a service interval - for example, every 5,000 miles or every 6 months. The app tracks your current odometer and calculates when that service is coming due again based on your actual log.",
  },
  {
    question: "Can I share my car's service history?",
    answer:
      "Yes. You can generate a public link to your vehicle's complete service record. Anyone with the link can view the full maintenance log with dates and mileage. No account is needed to view it. This is useful when selling your car.",
  },
  {
    question: "Is CarCare Diary free?",
    answer:
      "CarCare Diary is free for one vehicle, with full access to the service log, mileage tracking, reminders, and the shareable history link. Paid plans are available for tracking more vehicles and unlocking additional features.",
  },
  {
    question: "Does CarCare Diary work for more than one vehicle?",
    answer:
      "Yes. The Base plan supports up to 3 vehicles, and the Pro plan supports unlimited vehicles. Each vehicle gets its own service log, mileage tracking, reminders, and shareable history.",
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
      "Free car maintenance tracker app. Log services, track mileage, get reminders when maintenance is due, and keep a shareable service history for your vehicle.",
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

export default function HowCarCareDiaryWorksPage() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "How CarCare Diary Works - Car Maintenance Tracker App",
    description:
      "CarCare Diary is a free car maintenance app for iPhone and Android. Log services, track mileage, get reminders when maintenance is due, and share your vehicle's complete service history.",
    path: "/how-carcare-diary-works",
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
          <HowWorksHero />
          <WhatItIs />
          <HowItWorks />
          <WhatYouCanTrack />
          <HowRemindersWork />
          <SharingAndHistory />
          <PlansSection />
          <WorksFAQ />
          <WorksCTA />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

function HowWorksHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[800px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
          CarCare Diary
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
          How CarCare Diary{" "}
          <span className="text-accent">Works</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[600px] mx-auto">
          CarCare Diary is a free car maintenance app for iPhone and Android. It
          helps you log every service, keep mileage current, get reminders when
          maintenance is due, and build a shareable service history for your
          vehicle.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">Free for iPhone & Android</p>
      </div>
    </section>
  );
}

function WhatItIs() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[720px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 text-center">
          What It Is
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          What CarCare Diary Is
        </h2>
        <div className="rounded-2xl border border-panel bg-surface px-8 py-10 flex flex-col gap-4 text-muted leading-relaxed">
          <p>
            CarCare Diary is a car maintenance tracker and service log app.
            Available free on iPhone and Android, it gives you one organized
            place to record every service your vehicle receives.
          </p>
          <p>
            Each time you have work done - an oil change, new brakes, a tire
            rotation - you log it in the app with the service type, date,
            mileage, and any notes. Over time, those entries build into a
            complete, searchable service history.
          </p>
          <p>
            The app uses your logs and current odometer to tell you when
            upcoming services are due. You can also generate a shareable link to
            your vehicle's full service record, which is useful when selling
            your car.
          </p>
          <p>
            CarCare Diary is free for one vehicle. Paid plans are available for
            tracking more vehicles and unlocking additional features.
          </p>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: Car,
    step: "1",
    title: "Add Your Vehicle",
    description:
      "Create a vehicle profile with make, model, year, and plate. Each vehicle gets its own log, reminders, and shareable history.",
  },
  {
    icon: Wrench,
    step: "2",
    title: "Log a Service",
    description:
      "After each maintenance job, add an entry with the service type, date, mileage, parts used, and notes. Takes about 30 seconds.",
  },
  {
    icon: Gauge,
    step: "3",
    title: "Keep Your Mileage Current",
    description:
      "Update your odometer periodically so the app can calculate upcoming service intervals accurately.",
  },
  {
    icon: Bell,
    step: "4",
    title: "See What's Due",
    description:
      "CarCare Diary shows you which services are coming up based on your logged history, mileage, and the intervals you've set.",
  },
  {
    icon: History,
    step: "5",
    title: "Review Your Service History",
    description:
      "Browse all logged services grouped by category. Filter by type, review past work, and see the full record at any time.",
  },
  {
    icon: Share2,
    step: "6",
    title: "Share Your Record",
    description:
      "Generate a public link to your vehicle's complete service history. Anyone with the link can view it - no account required.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Step By Step
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How It Works
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto">
            Six simple steps from adding your vehicle to building a complete
            maintenance record.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1060px] mx-auto">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-panel bg-surface p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-brand/12 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Step {item.step}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const trackableItems = [
  "Oil and filter changes",
  "Brake pads and rotors",
  "Brake fluid",
  "Air filter",
  "Cabin air filter",
  "Spark plugs",
  "Coolant flush",
  "Transmission fluid",
  "Power steering fluid",
  "Tire rotations",
  "Tire replacements",
  "Battery replacement",
  "Belt and hose checks",
  "Inspections and MOTs",
  "Windshield wipers",
  "Any other service",
];

function WhatYouCanTrack() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Service Types
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What You Can Track
          </h2>
          <p className="text-base text-muted max-w-[520px] mx-auto">
            CarCare Diary supports any type of vehicle service. Each entry
            records the service type, date, mileage, parts or specifications,
            and notes.
          </p>
        </div>

        <div className="rounded-2xl border border-panel bg-surface px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trackableItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-8 border-t border-panel pt-6">
            Not sure what belongs in a service record?{" "}
            <Link
              to="/blog/what-to-include-in-a-car-service-history"
              className="text-accent hover:text-white transition-colors"
            >
              See what to include in a car service history
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function HowRemindersWork() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Reminders
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How Reminders Work
          </h2>
        </div>
        <div className="rounded-2xl border border-panel bg-surface px-8 py-10 flex flex-col gap-4 text-muted leading-relaxed">
          <p>
            When you log a service, CarCare Diary records both the date and the
            mileage at the time. You can set a service interval - for example,
            every 5,000 miles or every 6 months for oil changes.
          </p>
          <p>
            As you update your odometer, the app recalculates when each service
            is coming due based on your actual log and current mileage. It shows
            you a clear due status for each maintenance category.
          </p>
          <p>
            Reminders are based on your real service history, not factory
            defaults or guesses. If you log an oil change at 42,000 miles with
            a 5,000-mile interval, the app will flag it as due at 47,000 miles.
          </p>
          <p className="text-sm">
            For tips on building a consistent tracking habit, see{" "}
            <Link
              to="/blog/how-to-track-car-maintenance"
              className="text-accent hover:text-white transition-colors"
            >
              how to track car maintenance
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function SharingAndHistory() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Sharing
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Sharing Your Service History
          </h2>
        </div>
        <div className="rounded-2xl border border-panel bg-surface px-8 py-10 flex flex-col gap-4 text-muted leading-relaxed">
          <p>
            CarCare Diary lets you generate a public link to your vehicle's
            complete service record. Anyone with the link can view the full
            maintenance log - every logged service with its date, mileage, and
            notes.
          </p>
          <p>
            No account is needed to view the shared record. The viewer sees a
            read-only version of your vehicle's history.
          </p>
          <p>
            This is useful when selling your car. Instead of printing receipts
            or summarizing maintenance verbally, you share a single link that
            shows the complete documented history. A buyer can review it before
            the visit, which builds confidence and supports a fair asking price.
          </p>
          <p className="text-sm">
            Related:{" "}
            <Link
              to="/car-service-history"
              className="text-accent hover:text-white transition-colors"
            >
              Car service history
            </Link>{" "}
            and{" "}
            <Link
              to="/blog/how-to-keep-car-service-records-organized"
              className="text-accent hover:text-white transition-colors"
            >
              how to keep car service records organized
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Free",
    tagline: "One vehicle, no cost",
    features: [
      "1 vehicle",
      "Maintenance logs and reminders",
      "Share logs and history",
    ],
    highlight: false,
  },
  {
    name: "Base",
    tagline: "Track multiple vehicles and unlock smarter ownership tools",
    features: [
      "Up to 3 vehicles",
      "Everything in Free",
      "Vehicle spending analytics",
      "Printable QR for listings",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    tagline: "Manage unlimited vehicles with fleet-level visibility and scale",
    features: [
      "Unlimited vehicles",
      "Everything in Base",
      "Fleet-wide spending analytics",
      "Multi-vehicle overview",
    ],
    highlight: false,
  },
];

function PlansSection() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1060px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Free, Base, and Pro
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto">
            CarCare Diary is free for one vehicle. Paid plans add more vehicles
            and additional features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border bg-surface p-8 flex flex-col ${
                plan.highlight ? "border-accent/40" : "border-panel"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {plan.tagline}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
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
      </div>
    </section>
  );
}

function WorksFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Common Questions About CarCare Diary
          </h2>
          <p className="text-base text-muted max-w-[440px] mx-auto">
            Answers to the most common questions about how the app works.
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

function WorksCTA() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-16 md:px-16 md:py-20 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Get The App
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Start Keeping Your Car's Service Record
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto mb-10">
            Free car maintenance tracker for iPhone and Android. One place for
            every service, every mileage update, and every reminder.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted flex-wrap">
            <Link
              to="/car-maintenance-tracker"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              Car maintenance tracker
            </Link>
            <span className="hidden sm:inline text-panel">·</span>
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
              to="/blog"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              Maintenance guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
