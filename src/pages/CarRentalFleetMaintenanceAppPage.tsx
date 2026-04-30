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
  StickyNote,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";
import heroScreenshot from "../assets/hero-screenshots-mockups.png";

const pageFaqs = [
  {
    question: "Can I Use CarCare Diary for a Small Rental Fleet?",
    answer:
      "Yes. CarCare Diary works well for small rental fleets. Each vehicle gets its own profile, service log, mileage history, and maintenance reminders. There are no per-vehicle limits on log entries, and you can share a vehicle's service history with a public link whenever needed.",
  },
  {
    question: "Does CarCare Diary Handle Bookings or Rental Agreements?",
    answer:
      "No. CarCare Diary is focused on maintenance records, mileage, and service reminders — not bookings, reservations, rental contracts, or payments. If you need a booking system, you would use a separate tool for that. CarCare Diary handles the maintenance and service history side.",
  },
  {
    question: "Can I Track Maintenance by Mileage?",
    answer:
      "Yes. CarCare Diary uses the odometer reading you enter to track when services are due by mileage. You can set service reminders by mileage interval (e.g., every 10,000 km), by date, or both. When you log a service, the app records the mileage at that time.",
  },
  {
    question: "Can I Keep Service History for Each Rental Car Separately?",
    answer:
      "Yes. Each vehicle in CarCare Diary has its own completely separate service log, mileage record, and reminder schedule. There is no cross-contamination between vehicles. You can view the full history for any single vehicle at any time.",
  },
  {
    question: "Can I Share a Rental Vehicle's Service Record?",
    answer:
      "Yes. You can generate a public link for any vehicle's service record. Anyone with the link can view the complete maintenance log — dates, mileage, services performed, notes — without needing a CarCare Diary account. Useful for insurance, compliance, or showing buyers or partners that vehicles are properly maintained.",
  },
  {
    question: "How Many Vehicles Can I Track?",
    answer:
      "CarCare Diary is free for one vehicle. The Base plan supports up to 3 vehicles and the Pro plan supports unlimited vehicles. There are no per-user fees or complex contracts.",
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
      "Car rental fleet maintenance app for tracking service records, mileage, reminders, and shareable maintenance history across multiple rental vehicles.",
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
    title: "Track Maintenance Per Vehicle",
    description:
      "Each rental car gets its own profile with a complete, separate service log. Oil changes, brake work, tyres, filters — all recorded per vehicle.",
  },
  {
    icon: Gauge,
    title: "Log Mileage and Service Dates",
    description:
      "Record the odometer at every service. Mileage is linked to each log entry so you always know how many kilometres ago each job was done.",
  },
  {
    icon: Bell,
    title: "See What Is Due Soon",
    description:
      "Reminders are calculated from your actual service log and current mileage. Know which vehicle is due for its next service before it becomes overdue.",
  },
  {
    icon: StickyNote,
    title: "Notes, Parts, Fluids, and Service Details",
    description:
      "Log the mechanic, parts replaced, fluids used, and any extra notes on every service entry. The detail is there when you need it.",
  },
  {
    icon: History,
    title: "Complete Service History Per Car",
    description:
      "Every service ever logged is stored in order. View the full history for any vehicle instantly — no digging through files or spreadsheets.",
  },
  {
    icon: Share2,
    title: "Share Clean History When Needed",
    description:
      "Generate a public link to any vehicle's service record. Share it with insurers, buyers, partners, or staff — no account needed to view.",
  },
];

const withoutList = [
  "Service history scattered across receipts and paperwork",
  "Relying on memory for what was done and when",
  "No easy way to see which vehicle is overdue",
  "Hard to prove maintenance history when selling or insuring",
];

const withList = [
  "Every service logged per vehicle with date and mileage",
  "Due and overdue maintenance visible at a glance",
  "Shareable service history link for any vehicle",
  "Clean records on your phone, always with you",
];

const useCases = [
  { title: "Small Rental Fleets", detail: "Track oil changes, tyre services, and scheduled maintenance across a small fleet of rental cars — no spreadsheet required." },
  { title: "Peer-to-Peer Rental Hosts", detail: "Keep clean records for cars listed on peer-to-peer rental platforms. Share service history to build trust with renters." },
  { title: "Local Car Rental Businesses", detail: "Maintain organised vehicle records for a local rental business. Know what each car needs before it becomes a problem." },
  { title: "Shared Company Vehicles", detail: "Track maintenance for vehicles shared by multiple staff or departments. One clean record per vehicle, accessible on any phone." },
];

export default function CarRentalFleetMaintenanceAppPage() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Car Rental Fleet Maintenance App | CarCare Diary",
    description:
      "Track rental car maintenance, mileage, service reminders and vehicle history in a simple mobile app built for small rental fleets.",
    path: "/car-rental-fleet-maintenance-app",
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
            Car rental fleet maintenance app for{" "}
            <span className="text-accent">service records and reminders</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">
            CarCare Diary is a free mobile app for iPhone and Android. Track maintenance,
            mileage, service reminders, and shareable vehicle history for every car in
            your rental fleet — no spreadsheets, no complex setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start mb-6">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <p className="text-sm text-muted">Free to start · Multi-vehicle plans available</p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 594 }}>
            <img
              src={heroScreenshot}
              alt="CarCare Diary rental fleet maintenance app showing vehicle service logs"
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
          Rental vehicles get used by many drivers — service history gets messy fast
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted max-w-[680px] mx-auto">
          When multiple people drive the same car, receipts get lost, services are forgotten,
          and no one can answer "when was this last serviced?" CarCare Diary keeps one clean,
          organised record per vehicle — accessible on any phone, whenever you need it.
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
          Everything you need to track rental vehicle maintenance
        </h2>
        <p className="text-muted text-center mb-12 max-w-[560px] mx-auto">
          No bookings, no dispatch, no GPS — just clean maintenance records and reminders for every vehicle.
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
          Built for rental operators of all sizes
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
          A lightweight alternative to spreadsheets
        </h2>
        <p className="text-muted text-center mb-12 max-w-[560px] mx-auto">
          Most small rental operators don't need enterprise fleet software. They need something that works on a phone and keeps records clean.
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
            Also looking for full fleet management?{" "}
            <Link to="/fleet-management-app" className="text-accent font-semibold hover:text-white transition-colors">See the fleet management overview →</Link>
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
          Start tracking your rental fleet today
        </h2>
        <p className="text-muted mb-10 text-base md:text-lg">
          Free to start. Keep clean service records for every rental vehicle — right from your phone.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">
          Also see:{" "}
          <Link to="/small-business-fleet-management-app" className="text-accent hover:text-white transition-colors font-semibold">small business fleet app</Link>
          {" · "}
          <Link to="/car-maintenance-tracker" className="text-accent hover:text-white transition-colors font-semibold">car maintenance tracker</Link>
        </p>
      </div>
    </section>
  );
}
