import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Gauge,
  Car,
  History,
  Share2,
  CheckCircle,
  X,
  ChevronDown,
  FileText,
  AlertCircle,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";
import heroScreenshot from "../assets/hero-screenshots-mockups.png";

const pageFaqs = [
  {
    question: "What Is the Best Fleet Management App for a Small Business?",
    answer:
      "For a small business that needs maintenance tracking without GPS, dispatching, or complex fleet operations, a lightweight app like CarCare Diary works well. It covers vehicle service logs, mileage, maintenance reminders, and shareable history across multiple vehicles — without the cost or complexity of enterprise fleet software.",
  },
  {
    question: "Do I Need GPS Tracking to Manage Vehicle Maintenance?",
    answer:
      "No. GPS and telematics are useful for real-time fleet operations, but they are not required for maintenance tracking. CarCare Diary focuses on what actually keeps vehicles running: recording services done, tracking mileage, setting reminders, and keeping clean service history. You update the odometer manually — that is sufficient for maintenance-based scheduling.",
  },
  {
    question: "Can I Track Multiple Company Vehicles?",
    answer:
      "Yes. CarCare Diary supports multiple vehicles on paid plans. Each vehicle gets its own separate service log, mileage history, and reminder schedule. The Base plan covers up to 3 vehicles and the Pro plan supports unlimited vehicles.",
  },
  {
    question: "Can I Use CarCare Diary Instead of a Spreadsheet?",
    answer:
      "Yes. CarCare Diary is designed to replace the spreadsheet or the notes app that most small operators use to track vehicle maintenance. It is structured, searchable, and available on any phone. You can also share a vehicle's complete service history via a public link — something a spreadsheet cannot do easily.",
  },
  {
    question: "Can I Track Vans, Trucks, and Work Vehicles?",
    answer:
      "Yes. CarCare Diary supports any type of motorised vehicle — cars, vans, trucks, SUVs, or any other vehicle you need to maintain. You enter the make, model, year, and licence plate when adding a vehicle.",
  },
  {
    question: "How Does Maintenance Reminders Work for a Small Fleet?",
    answer:
      "Each vehicle has its own reminder schedule. When you log a service, the app tracks the date and mileage. You set the interval for the next service (e.g., oil change every 10,000 km or every 6 months) and the app shows when each vehicle is due. You can see all vehicles and their status in one view.",
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
      "Small business fleet management app for vehicle maintenance tracking. Log service records, mileage, reminders and shareable history for company vehicles.",
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

const features = [
  {
    icon: Car,
    title: "Multi-Vehicle Records",
    description:
      "Add every company vehicle with its own profile. Cars, vans, trucks, or utes — each gets a completely separate service log and reminder schedule.",
  },
  {
    icon: Gauge,
    title: "Mileage Tracking",
    description:
      "Log the odometer at every service so your maintenance history is accurate. Mileage is recorded per entry so you always know how long ago each job was done.",
  },
  {
    icon: Bell,
    title: "Date and Mileage Reminders",
    description:
      "Set reminders by mileage interval, time interval, or both. Know when each vehicle is coming due before it falls overdue.",
  },
  {
    icon: AlertCircle,
    title: "Due and Overdue Overview",
    description:
      "See which vehicles in your fleet need attention at a glance. No more relying on memory or checking each vehicle individually.",
  },
  {
    icon: History,
    title: "Service Notes and History",
    description:
      "Record the mechanic, parts replaced, fluids used, and any notes on every service entry. The full history is there whenever you need it.",
  },
  {
    icon: Share2,
    title: "Shareable Records",
    description:
      "Generate a public link to any vehicle's complete service history. Share with insurers, accountants, mechanics, or staff — no account needed to view.",
  },
];

const withoutList = [
  "Service history in WhatsApp threads, emails, and paper receipts",
  "Relying on memory for what was done and when",
  "No way to see overdue maintenance across all vehicles",
  "Disorganised records when vehicles are sold or inspected",
];

const withList = [
  "Every service logged per vehicle with date and mileage",
  "Reminders calculated automatically from the service log",
  "Overdue and upcoming maintenance visible in one place",
  "Shareable history ready when you need it",
];

const useCases = [
  { title: "Trades and Service Businesses", detail: "Plumbers, electricians, HVAC technicians, and other trades with vans or utes that need maintenance tracking without enterprise software." },
  { title: "Delivery and Local Operations", detail: "Small delivery businesses, couriers, and local operators with one to several vehicles that need scheduled maintenance kept on top of." },
  { title: "Real Estate and Company Cars", detail: "Companies with staff cars, sales vehicles, or client-facing vehicles that need clean maintenance records and timely servicing." },
  { title: "Small Teams with Shared Vehicles", detail: "Offices, community organisations, or businesses where multiple people use the same vehicles and service accountability is important." },
];

export default function SmallBusinessFleetManagementAppPage() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Small Business Fleet Management App for Maintenance | CarCare Diary",
    description:
      "Manage small business vehicle maintenance with a simple mobile app for service logs, mileage, reminders and multi-vehicle records.",
    path: "/small-business-fleet-management-app",
    jsonLd,
  });
  return (
    <div className="min-h-screen relative overflow-hidden bg-base text-white font-sans">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: "linear-gradient(180deg, #0C111F 0%, #0E1325 40%, #0C111F 100%)" }}
      />
      <div className="relative z-10">
        <LandingHeader />
        <main>
          <Hero />
          <Problem />
          <Features />
          <UseCases />
          <Lightweight />
          <FAQ />
          <FinalCTA />
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
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">CarCare Diary</p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-6">
            Small business fleet management app for{" "}
            <span className="text-accent">maintenance tracking</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">
            CarCare Diary is a free mobile app for iPhone and Android. Track vehicle
            maintenance, mileage, service reminders, and service history for your
            business fleet — without the cost or complexity of enterprise fleet software.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start mb-6">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <p className="text-sm text-muted">Free to start · Multi-vehicle plans available · No GPS required</p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 594 }}>
            <img
              src={heroScreenshot}
              alt="CarCare Diary small business fleet management app showing vehicle service logs"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-panel">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Most small fleets run on memory, receipts, and spreadsheets
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted max-w-[680px] mx-auto">
          When maintenance tracking is informal, things get missed. Services are overdue, vehicles wear
          faster, and there is no clear record when an issue arises or a vehicle is sold. CarCare Diary
          gives your fleet the structured records it needs — from a simple phone app.
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Vehicle maintenance tracking built for small business
        </h2>
        <p className="text-muted text-center mb-12 max-w-[560px] mx-auto">
          No GPS, no dispatching, no driver management — just clean service records for every company vehicle.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-panel bg-surface p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-panel">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Who uses CarCare Diary for small business fleets
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {useCases.map((uc) => (
            <div key={uc.title} className="rounded-2xl border border-panel bg-surface p-6">
              <h3 className="text-base font-semibold mb-2">{uc.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{uc.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lightweight() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Why lightweight mobile tracking is enough for most small fleets
        </h2>
        <p className="text-muted text-center mb-12 max-w-[600px] mx-auto">
          Enterprise fleet software is built for large-scale operations with dedicated fleet managers.
          Most small businesses with a handful of vehicles just need records, reminders, and history — on a phone.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-red-400/15 bg-red-400/5 p-6">
            <p className="text-sm font-semibold text-red-400 mb-4 uppercase tracking-wider">Without CarCare Diary</p>
            <ul className="flex flex-col gap-3">
              {withoutList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">With CarCare Diary</p>
            <ul className="flex flex-col gap-3">
              {withList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-panel bg-surface p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <FileText className="w-5 h-5 text-accent shrink-0" />
          <p className="text-sm text-muted">
            Need a broader overview?{" "}
            <Link to="/fleet-management-app" className="text-accent font-semibold hover:text-white transition-colors">See the fleet management page →</Link>
            {" "}or{" "}
            <Link to="/fleet-maintenance-app" className="text-accent font-semibold hover:text-white transition-colors">fleet maintenance app →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-panel">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Frequently asked questions
        </h2>
        <div className="flex flex-col gap-3">
          {pageFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className={`rounded-2xl border overflow-hidden bg-surface transition-colors ${isOpen ? "border-accent/40" : "border-panel"}`}>
                <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
                  <span className="text-[15px] font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
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

function FinalCTA() {
  return (
    <section className="py-20 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-panel">
      <div className="max-w-[640px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Keep your business vehicles on top of maintenance
        </h2>
        <p className="text-muted mb-10 text-base md:text-lg">
          Free to start. Organised service records for every company vehicle — right from your phone.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">
          Also see:{" "}
          <Link to="/car-rental-fleet-maintenance-app" className="text-accent hover:text-white transition-colors font-semibold">rental fleet app</Link>
          {" · "}
          <Link to="/vehicle-service-reminder-app" className="text-accent hover:text-white transition-colors font-semibold">service reminder app</Link>
          {" · "}
          <Link to="/car-maintenance-tracker" className="text-accent hover:text-white transition-colors font-semibold">maintenance tracker</Link>
        </p>
      </div>
    </section>
  );
}
