import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Bell,
  Gauge,
  Car,
  History,
  Share2,
  CheckCircle,
  X,
  Building2,
  Package,
  ChevronDown,
  Layers,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";
import carsListImg from "../assets/cars_list_UI_illistration_large.png";
import fleetAnalyticsImg from "../assets/fleet_spending_analytics_UI_illustration_large.png";

const PAGE_URL = "https://www.carcarediary.com/fleet-management-app";

const pageFaqs = [
  {
    question: "What Is A Fleet Management App?",
    answer:
      "A fleet management app helps you keep maintenance records, mileage, and service history organized for multiple vehicles. CarCare Diary is a lightweight mobile fleet management app for iPhone and Android - built for small teams, local businesses, and households with multiple vehicles.",
  },
  {
    question: "Can CarCare Diary Track Multiple Vehicles?",
    answer:
      "Yes. CarCare Diary supports multiple vehicles on paid plans. Each vehicle gets its own profile, service log, mileage history, and maintenance reminders. You can add cars, vans, trucks, or any other vehicle type.",
  },
  {
    question: "Does CarCare Diary Track Mileage For Each Fleet Vehicle?",
    answer:
      "Yes. You update the odometer for each vehicle in the app. CarCare Diary uses that mileage reading to calculate when maintenance is coming due and to keep each vehicle's service schedule accurate.",
  },
  {
    question: "How Do Maintenance Reminders Work For A Fleet?",
    answer:
      "Each vehicle in CarCare Diary has its own service log and reminder schedule. When a service is logged - oil change, brake inspection, filter replacement - the app tracks the date and mileage and shows you when that service is due again based on the interval you set.",
  },
  {
    question: "Can I Share A Vehicle's Service History?",
    answer:
      "Yes. For any vehicle in your account, you can generate a public link to its complete service record. Anyone with the link can view the full maintenance log without needing an account. Useful for insurance, resale, or sharing records with a mechanic.",
  },
  {
    question: "Is CarCare Diary Free For Fleet Management?",
    answer:
      "CarCare Diary is free for one vehicle. Multi-vehicle plans are available - the Base plan supports up to 3 vehicles and the Pro plan supports unlimited vehicles. There are no per-user fees or complex contracts.",
  },
  {
    question: "What Types Of Maintenance Can I Track Per Vehicle?",
    answer:
      "You can log any type of service: oil and filter changes, brakes, tires, fluid changes, air and cabin filters, spark plugs, battery replacements, inspections, and anything else. Each entry records the service type, date, mileage, parts used, and notes.",
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
      "Fleet management app for vehicle maintenance records. Track service logs, mileage, reminders, and shareable history for multiple vehicles from a simple mobile app.",
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

export default function FleetManagementAppPage() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Fleet Management App for Vehicle Maintenance | CarCare Diary",
    description:
      "Track fleet maintenance, mileage, service history and reminders from a simple mobile app. CarCare Diary helps small fleets keep vehicle records organized.",
    path: "/fleet-management-app",
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
          <FleetHero />
          <WhatItDoes />
          <WithoutVsWith />
          <WhoItsFor />
          <LightweightAlternative />
          <FleetFAQ />
          <FleetCTA />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

function FleetHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
      <div className="max-w-[820px] mx-auto">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
          CarCare Diary
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
          Fleet management app for{" "}
          <span className="text-accent">
            simple vehicle maintenance tracking
          </span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[620px] mx-auto">
          CarCare Diary is a free mobile fleet management app for iPhone and
          Android. Track service logs, mileage, and maintenance reminders for
          every vehicle in your fleet - no complex setup, no web dashboard
          required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">
          Free to start · Multi-vehicle plans available
        </p>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Car,
    title: "Multi-Vehicle Profiles",
    description:
      "Add each vehicle in your fleet with make, model, year, and license plate. Every vehicle gets its own service log, mileage history, and reminder schedule.",
  },
  {
    icon: Wrench,
    title: "Service Logs Per Vehicle",
    description:
      "Log oil changes, brake work, filter replacements, tyre services, and any other maintenance. Each entry records the date, mileage, parts used, and notes.",
  },
  {
    icon: Gauge,
    title: "Mileage Tracking",
    description:
      "Update the odometer for each vehicle so service schedules stay accurate. Mileage is linked to every log entry, giving you a precise maintenance history.",
  },
  {
    icon: Bell,
    title: "Maintenance Reminders",
    description:
      "Know when each vehicle is due for its next service. Reminders are calculated from your actual service log and current mileage - no manual calendar entries needed.",
  },
  {
    icon: History,
    title: "Complete Service History",
    description:
      "Every logged service builds into an organized, searchable maintenance record for each vehicle. Review the full history for any vehicle at any time.",
  },
  {
    icon: Share2,
    title: "Shareable Vehicle Records",
    description:
      "Generate a public link to any vehicle's complete service history. Useful for resale, insurance, or sharing records with a mechanic before a service appointment.",
  },
];

function WhatItDoes() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Everything you need to manage fleet vehicle maintenance
            </h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">
              One app to keep every vehicle's maintenance history, mileage, and
              upcoming services organized - accessible from your phone at any
              time.
            </p>
            <div className="flex flex-col gap-6">
              {features.map((item) => (
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
          </div>

          <div className="flex-1 flex items-center justify-center">
            <img
              src={carsListImg}
              alt="CarCare Diary fleet vehicle list showing multiple vehicles with mileage and maintenance status"
              className="w-full max-w-[420px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const withoutApp = [
  "No record of what was done or when",
  "Missed service intervals across multiple vehicles",
  "Separate notebooks, receipts, and spreadsheets per vehicle",
  "No reminders until something breaks",
  "Nothing to show when selling a vehicle",
  "Hard to know which vehicle is overdue for service",
];

const withApp = [
  "Every vehicle's service history in one app",
  "Clear view of what's due across your whole fleet",
  "One organized record per vehicle, always current",
  "Reminders based on actual mileage and logged services",
  "Shareable service record link for any vehicle",
  "At-a-glance overview of your entire fleet's maintenance status",
];

function WithoutVsWith() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Why Use An App
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Scattered records don't scale across a fleet
          </h2>
          <p className="text-base text-muted max-w-[520px] mx-auto">
            Managing maintenance records for multiple vehicles on paper or
            spreadsheets means things get missed. A dedicated app keeps
            everything in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          <div className="rounded-xl border border-panel bg-surface p-8">
            <h3 className="text-sm font-semibold text-muted mb-5 uppercase tracking-wide">
              Without A Fleet App
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

          <div className="rounded-xl border border-accent/30 bg-surface p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-5 px-3 py-1.5 rounded-lg bg-brand text-white inline-block">
              With CarCare Diary
            </h3>
            <ul className="flex flex-col gap-3">
              {withApp.map((item) => (
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
    icon: Building2,
    title: "Local Businesses",
    description:
      "Tradespeople, delivery teams, and small businesses with 2-10 vehicles. Keep every van and truck's service log organized from your phone.",
  },
  {
    icon: Package,
    title: "Vehicle Sellers & Dealers",
    description:
      "Track the service history of every vehicle you manage. Share a documented maintenance record with buyers through a single public link.",
  },
  {
    icon: Layers,
    title: "Multi-Vehicle Households",
    description:
      "Keep maintenance records for every car in your household in one place. Each vehicle gets its own profile, log, and reminder schedule.",
  },
  {
    icon: Briefcase,
    title: "Property & Fleet Managers",
    description:
      "Keep service logs and mileage records for shared or managed vehicles. Know what each vehicle needs and when it was last serviced.",
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
            Built for small fleets, not enterprise
          </h2>
          <p className="text-base text-muted max-w-[500px] mx-auto">
            CarCare Diary works for anyone who needs to keep maintenance records
            organized across more than one vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
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
      </div>
    </section>
  );
}

const enterpriseFeatures = [
  "Real-time GPS tracking",
  "Driver behaviour monitoring",
  "Route dispatching",
  "Compliance and inspection checklists",
  "Fuel card integrations",
  "ELD / telematics hardware",
  "Per-seat licensing and admin portals",
];

const ccdFeatures = [
  "Service logs and maintenance history per vehicle",
  "Mileage tracking and interval-based reminders",
  "Multi-vehicle management from a free mobile app",
  "Shareable service record links",
  "Simple setup - add a vehicle and start logging",
  "No contracts, hardware, or complex onboarding",
  "Free to start, straightforward paid plans",
];

function LightweightAlternative() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="flex-1">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              Lightweight Alternative
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Not every fleet needs enterprise software
            </h2>
            <p className="text-base text-muted mb-8 max-w-[520px]">
              Large fleet management platforms are built for logistics
              operations with dozens of vehicles, dedicated fleet managers, and
              specialized hardware. If you just need to keep service records
              organized for a small number of vehicles, that complexity and cost
              isn't justified.
            </p>
            <p className="text-base text-muted max-w-[520px]">
              CarCare Diary is built for teams and households where maintenance
              tracking is the primary need. No GPS hardware, no per-seat
              contracts - just clean records of what was done to each vehicle,
              when, and at what mileage.
            </p>

            <div className="mt-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <AppStoreButton />
                <GooglePlayButton />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <div className="rounded-xl border border-panel bg-surface p-7">
              <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
                Enterprise fleet software includes
              </h3>
              <ul className="flex flex-col gap-3">
                {enterpriseFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <X className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-accent/30 bg-surface p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 px-3 py-1.5 rounded-lg bg-brand text-white inline-block">
                CarCare Diary covers
              </h3>
              <ul className="flex flex-col gap-3 mt-1">
                {ccdFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 text-sm text-muted">
          <span>Related pages:</span>
          <Link
            to="/fleet-maintenance-app"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            Fleet maintenance app
          </Link>
          <span className="hidden sm:inline text-panel">·</span>
          <Link
            to="/car-maintenance-tracker"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            Car maintenance tracker
          </Link>
          <span className="hidden sm:inline text-panel">·</span>
          <Link
            to="/business"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            CarCare Diary for Business
          </Link>
        </div>
      </div>
    </section>
  );
}

function FleetFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Common questions about fleet management apps
          </h2>
          <p className="text-base text-muted max-w-[440px] mx-auto">
            Questions about managing vehicle maintenance records for small fleets
            with CarCare Diary.
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

function FleetCTA() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-16 md:px-16 md:py-20 text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Get The App
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Start managing your fleet's maintenance today
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto mb-10">
            Free mobile fleet management app for iPhone and Android. Add your
            vehicles, log services, track mileage, and keep every vehicle's
            maintenance history organized in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted">
            <Link
              to="/fleet-maintenance-app"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              Fleet maintenance app
            </Link>
            <span className="hidden sm:inline text-panel">·</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
