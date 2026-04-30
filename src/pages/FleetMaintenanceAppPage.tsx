import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Bell,
  Gauge,
  History,
  Share2,
  CheckCircle,
  X,
  ClipboardList,
  FileText,
  ChevronDown,
  CalendarClock,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";
import fleetAnalyticsImg from "../assets/fleet_spending_analytics_UI_illustration_large.png";
import heroScreenshot from "../assets/hero-screenshots-mockups.png";


const pageFaqs = [
  {
    question: "What Is A Fleet Maintenance App?",
    answer:
      "A fleet maintenance app helps you track service logs, mileage, and maintenance reminders for multiple vehicles in one place. CarCare Diary is a free mobile fleet maintenance app for iPhone and Android - built for small fleets, local businesses, and teams where maintenance record-keeping is the main need.",
  },
  {
    question: "How Does CarCare Diary Handle Fleet Service Logs?",
    answer:
      "Each vehicle in CarCare Diary has its own dedicated service log. You log every service - oil change, brake inspection, filter replacement, tyre service - with the date, mileage, parts used, and notes. Every entry builds into a complete, organized maintenance record for that vehicle.",
  },
  {
    question: "Can I Set Maintenance Reminders For Each Vehicle?",
    answer:
      "Yes. CarCare Diary calculates when each service is coming due based on your logged history, current mileage, and the interval you set. You get a clear due status per service type for each vehicle - no manual calendar entries needed.",
  },
  {
    question: "How Does Mileage Tracking Work For A Fleet?",
    answer:
      "You update the odometer for each vehicle in the app. CarCare Diary uses those readings to calculate service intervals and keep your reminder schedule accurate. Mileage is also linked to every log entry, so you can see exactly how much was driven between services.",
  },
  {
    question: "Can I See Maintenance Costs Across My Fleet?",
    answer:
      "Yes. CarCare Diary tracks maintenance spending per vehicle. You can see how much has been spent on each vehicle and which categories - oil, brakes, tyres - cost the most over time. This helps you budget and identify vehicles with higher-than-expected upkeep costs.",
  },
  {
    question: "Can I Share A Vehicle's Maintenance History?",
    answer:
      "Yes. For any vehicle in your account, you can generate a public link to its complete service record. Anyone with the link can view the full maintenance log without needing an account - useful for mechanics, insurance, or resale.",
  },
  {
    question: "Is CarCare Diary Free For Fleet Maintenance?",
    answer:
      "CarCare Diary is free for one vehicle. Multi-vehicle plans are available - the Base plan supports up to 3 vehicles and the Pro plan supports unlimited vehicles. All plans include service logs, mileage tracking, reminders, and shareable history.",
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
      "Fleet maintenance app for service logs, mileage tracking, and maintenance reminders. Keep every vehicle's service records organized from a simple mobile app.",
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

export default function FleetMaintenanceAppPage() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Fleet Maintenance App for Service Logs and Reminders | CarCare Diary",
    description:
      "Keep fleet service logs, mileage and maintenance reminders organized in a simple mobile app built for small multi-vehicle teams.",
    path: "/fleet-maintenance-app",
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
          <MaintenanceFeatures />
          <HowItWorks />
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
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            CarCare Diary
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
            Fleet maintenance app for{" "}
            <span className="text-accent">
              service logs, mileage and reminders
            </span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">
            CarCare Diary is a free mobile app for iPhone and Android that keeps
            your fleet's maintenance records in order. Log every service, track
            mileage per vehicle, and get reminders when each vehicle is due for
            its next service - all from a simple app.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start mb-6">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <p className="text-sm text-muted">
            Free to start · Multi-vehicle plans available
          </p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 594 }}>
            <img
              src={heroScreenshot}
              alt="CarCare Diary fleet maintenance app showing service logs and maintenance reminders"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const maintenanceFeatures = [
  {
    icon: ClipboardList,
    title: "Service Log Per Vehicle",
    description:
      "Each vehicle has its own dedicated service log. Log oil changes, brake work, tyre services, fluid changes, filter replacements, and any other maintenance - with date, mileage, parts used, and notes per entry.",
  },
  {
    icon: Gauge,
    title: "Mileage Tracking Per Vehicle",
    description:
      "Update the odometer for each vehicle in the app. Mileage is recorded on every log entry, keeping interval calculations accurate and showing you how much has been driven since each service.",
  },
  {
    icon: Bell,
    title: "Reminder Per Service Type",
    description:
      "Set service intervals for oil changes, brake inspections, tyre rotations, and any other recurring maintenance. CarCare Diary tracks your logged history and mileage to show what's coming due per vehicle.",
  },
  {
    icon: History,
    title: "Full Maintenance History",
    description:
      "Every logged entry builds a complete, timestamped service history for each vehicle. Review what was done, when, and at what mileage - organized by maintenance category.",
  },
  {
    icon: FileText,
    title: "Maintenance Cost Tracking",
    description:
      "Record what each service costs and see your spending per vehicle over time. Identify which vehicles are costlier to maintain and plan your maintenance budget more accurately.",
  },
  {
    icon: Share2,
    title: "Shareable Service Records",
    description:
      "Generate a public link to any vehicle's complete maintenance history. No account needed to view it. Useful when selling a vehicle, dealing with insurance, or sharing records with a mechanic.",
  },
];

function MaintenanceFeatures() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="flex-1">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              Maintenance Features
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Every maintenance record your fleet needs
            </h2>
            <p className="text-base text-muted mb-10 max-w-[520px]">
              Service logs, mileage tracking, and reminder schedules - all per
              vehicle. No guesswork about what was done or when.
            </p>
            <div className="flex flex-col gap-6">
              {maintenanceFeatures.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
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

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 520 }}>
              <img
                src={heroScreenshot}
                alt="CarCare Diary maintenance categories showing service due status and reminder states"
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

const steps = [
  {
    number: "01",
    title: "Add each vehicle",
    body: "Enter make, model, year, and license plate. Add as many vehicles as your plan allows - each gets its own log and reminder schedule.",
  },
  {
    number: "02",
    title: "Set the current mileage",
    body: "Enter the current odometer reading for each vehicle. This is the starting point for all interval-based service reminders.",
  },
  {
    number: "03",
    title: "Log services as they happen",
    body: "After each maintenance job, log the service type, date, mileage, parts used, and any notes. The record builds automatically.",
  },
  {
    number: "04",
    title: "Review what's due",
    body: "The app shows each vehicle's service status - what's current, what's due soon, and what's overdue - so nothing gets missed.",
  },
  {
    number: "05",
    title: "Update mileage regularly",
    body: "Keep odometer readings current so reminder intervals stay accurate. Update from the app in seconds.",
  },
];

function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Up and running in minutes
          </h2>
          <p className="text-base text-muted max-w-[460px] mx-auto">
            No complex setup or training. Add your vehicles and start logging -
            the records build themselves as you go.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-[720px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-panel bg-surface px-6 py-5 flex gap-5"
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
      </div>
    </section>
  );
}

const personas = [
  {
    icon: Wrench,
    title: "Trade Businesses",
    description:
      "Builders, plumbers, electricians, and other tradespeople with work vans. Keep each vehicle's service log current so maintenance doesn't get neglected.",
  },
  {
    icon: CalendarClock,
    title: "Service Interval Trackers",
    description:
      "Anyone who wants to stay on top of service schedules across multiple vehicles. Set the interval once - CarCare Diary handles the reminder from your actual log.",
  },
  {
    icon: ClipboardList,
    title: "Vehicle Record Keepers",
    description:
      "Businesses and individuals who want a documented, shareable service history for every vehicle they own or manage. Build a complete record from day one.",
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
            Maintenance-focused, not operations-focused
          </h2>
          <p className="text-base text-muted max-w-[500px] mx-auto">
            CarCare Diary focuses on one thing: keeping service records and
            maintenance schedules organized for every vehicle you manage.
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
      </div>
    </section>
  );
}

const enterpriseClaims = [
  "Telematics and GPS hardware",
  "Driver behaviour scores",
  "Route planning and dispatching",
  "Fuel card and expense integrations",
  "Regulatory compliance workflows",
  "Enterprise contracts and IT setup",
];

const ccdFocus = [
  "Service log for every maintenance type",
  "Mileage tracking that updates service intervals",
  "Reminders calculated from your actual log",
  "Maintenance cost tracking per vehicle",
  "Shareable vehicle history links",
  "Free mobile app - no hardware or contracts",
];

function LightweightAlternative() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Lightweight Alternative
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Purpose-built for maintenance records, not operations
          </h2>
          <p className="text-base text-muted max-w-[580px] mx-auto">
            Enterprise fleet platforms bundle together GPS, driver monitoring,
            compliance, and much more - at a cost and complexity that doesn't
            suit small teams. CarCare Diary is focused entirely on the
            maintenance side: service logs, mileage, and reminders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          <div className="rounded-xl border border-panel bg-surface p-8">
            <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-5">
              Enterprise fleet platforms add
            </h3>
            <ul className="flex flex-col gap-3">
              {enterpriseClaims.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <X className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-accent/30 bg-surface p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-5 px-3 py-1.5 rounded-lg bg-brand text-white inline-block">
              CarCare Diary focuses on
            </h3>
            <ul className="flex flex-col gap-3 mt-1">
              {ccdFocus.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 text-sm text-muted justify-center">
          <span>See also:</span>
          <Link
            to="/fleet-management-app"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            Fleet management app
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
            Common questions about fleet maintenance apps
          </h2>
          <p className="text-base text-muted max-w-[440px] mx-auto">
            Questions about using CarCare Diary for fleet service logs, mileage
            tracking, and maintenance reminders.
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
            Keep your fleet's maintenance records organized
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto mb-10">
            Free mobile app for iPhone and Android. Service logs, mileage
            tracking, and maintenance reminders for every vehicle in your fleet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted">
            <Link
              to="/fleet-management-app"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              Fleet management app
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
              to="/blog/how-to-track-car-maintenance"
              className="text-accent font-semibold hover:text-white transition-colors"
            >
              How to track car maintenance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
