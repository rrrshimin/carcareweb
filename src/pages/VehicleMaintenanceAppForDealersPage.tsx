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
    question: "Can Dealers Use CarCare Diary to Track Service History?",
    answer:
      "Yes. CarCare Diary works well for small dealers and resellers who want to maintain organised service records for each vehicle. You can log every service, oil change, brake job, tyre change, or repair with date and mileage, and access the full history for any vehicle at any time.",
  },
  {
    question: "Can I Share Maintenance History With a Buyer?",
    answer:
      "Yes. CarCare Diary lets you generate a public shareable link to any vehicle's complete service record. A buyer can view the full maintenance log — dates, mileage, services, notes — without needing a CarCare Diary account. This is one of the simplest ways to demonstrate that a vehicle has been properly maintained.",
  },
  {
    question: "Does CarCare Diary Replace Dealer Inventory Software?",
    answer:
      "No. CarCare Diary is focused on maintenance records and service history — not inventory management, dealer CRM, financing, valuations, or sales workflows. If you need a DMS or inventory system, you would use a separate tool for that. CarCare Diary handles the service record and history side.",
  },
  {
    question: "What Records Should I Keep Before Selling a Used Car?",
    answer:
      "Buyers generally look for oil change dates and mileage, brake and tyre service records, any major repairs or parts replaced, and consistent servicing from the time of ownership. CarCare Diary lets you log all of these with dates, mileage, and notes, and share the complete record via a link.",
  },
  {
    question: "Can I Track Upcoming Maintenance Before a Vehicle Is Sold?",
    answer:
      "Yes. CarCare Diary can tell you what is due or coming due for each vehicle. If a car needs an oil change, tyre rotation, or brake inspection before sale, you can see this from the service log and reminder overview.",
  },
  {
    question: "How Many Vehicles Can I Track?",
    answer:
      "CarCare Diary is free for one vehicle. The Base plan covers up to 3 vehicles and the Pro plan supports unlimited vehicles. There are no per-vehicle fees for log entries or history sharing.",
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
      "Vehicle maintenance app for dealers and resellers. Track service history, mileage, and maintenance records per vehicle and share history with buyers.",
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
    icon: Wrench,
    title: "Log Service Work Per Vehicle",
    description:
      "Record every oil change, brake job, tyre service, repair, and detail job with date, mileage, and notes. One complete log per vehicle.",
  },
  {
    icon: Gauge,
    title: "Mileage and Date Records",
    description:
      "Every log entry is tagged with the odometer reading and date. Buyers can see exactly when each service was done and at how many kilometres.",
  },
  {
    icon: StickyNote,
    title: "Notes, Parts, Fluids, and Specs",
    description:
      "Add the mechanic, parts replaced, fluids used, and any relevant notes to every service entry. The detail is there when a buyer asks.",
  },
  {
    icon: Bell,
    title: "Track Upcoming Maintenance Before Sale",
    description:
      "See what each vehicle is due for before it goes to market. Ensure oil changes, inspections, and services are current before handover.",
  },
  {
    icon: Share2,
    title: "Share Service History With Buyers",
    description:
      "Generate a shareable public link to any vehicle's complete service record. Buyers can view the full history without needing an account.",
  },
  {
    icon: History,
    title: "Complete Per-Vehicle History",
    description:
      "Every service ever logged is stored in date order. View any vehicle's full maintenance history instantly — no searching through paperwork.",
  },
];

const withoutList = [
  "Service records scattered across paper and old receipts",
  "Buyers asking for history that is hard to prove",
  "No easy way to check what is due before a vehicle is sold",
  "Losing records when a vehicle is taken in for trade",
];

const withList = [
  "Complete service log per vehicle with date and mileage",
  "Shareable history link ready to send to any buyer",
  "Due maintenance visible before a vehicle goes to market",
  "Clean records that build buyer confidence",
];

const useCases = [
  { title: "Small Used Car Dealers", detail: "Keep structured service records for each vehicle on the lot. Share history with buyers to reduce questions and build confidence." },
  { title: "Private Resellers", detail: "Individuals who buy, maintain, and resell vehicles can demonstrate proper care with a clean, shareable service log." },
  { title: "Detailers and Pre-Sale Prep Teams", detail: "Log pre-sale services, detail work, and preparation jobs so the buyer knows exactly what was done and when." },
  { title: "Families Preparing Cars for Sale", detail: "Keep a clear record of all maintenance while you own the car. When it's time to sell, the history is ready to share with one link." },
];

export default function VehicleMaintenanceAppForDealersPage() {
  const jsonLd = useMemo(() => JSON_LD, []);
  usePageSeo({
    title: "Vehicle Maintenance App for Dealers and Resellers | CarCare Diary",
    description:
      "Keep vehicle maintenance records organized for dealers, resellers and sellers with a mobile app for service logs, mileage and shareable history.",
    path: "/vehicle-maintenance-app-for-dealers",
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
          <ResaleTrust />
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
            Vehicle maintenance app for{" "}
            <span className="text-accent">dealers and resellers</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">
            CarCare Diary is a free mobile app for iPhone and Android. Log service
            history, mileage, and maintenance records per vehicle — and share a clean
            service history with any buyer via a single link.
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
              alt="CarCare Diary vehicle maintenance app for dealers showing service history logs"
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
          Buyers trust cars with clear maintenance history
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted max-w-[680px] mx-auto">
          A vehicle with documented service records sells faster and for more than one without. But
          keeping clean records for every vehicle you sell is harder without a structured system.
          CarCare Diary makes it easy to log every service and share a clean, verifiable history
          with any buyer — from your phone.
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
          Service history tracking built for dealers and resellers
        </h2>
        <p className="text-muted text-center mb-12 max-w-[560px] mx-auto">
          No inventory management, no CRM, no financing — just clean service logs and shareable history per vehicle.
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
          Who uses CarCare Diary for vehicle resale records
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

function ResaleTrust() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Clean records build buyer trust — and that helps you sell
        </h2>
        <p className="text-muted text-center mb-12 max-w-[600px] mx-auto">
          A shareable service history link answers the buyer's questions before they're asked.
          No more "do you have the service records?" with a vague answer.
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
            Focused on sharing history?{" "}
            <Link to="/share-car-maintenance-history" className="text-accent font-semibold hover:text-white transition-colors">See the shareable history feature →</Link>
            {" · "}
            <Link to="/car-service-history-app" className="text-accent font-semibold hover:text-white transition-colors">service history app →</Link>
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
          Start keeping clean records for every vehicle you sell
        </h2>
        <p className="text-muted mb-10 text-base md:text-lg">
          Free to start. Log service history, share with buyers, and keep records organised — from your phone.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
        <p className="text-sm text-muted">
          Also see:{" "}
          <Link to="/small-business-fleet-management-app" className="text-accent hover:text-white transition-colors font-semibold">small business fleet</Link>
          {" · "}
          <Link to="/car-rental-fleet-maintenance-app" className="text-accent hover:text-white transition-colors font-semibold">rental fleet app</Link>
          {" · "}
          <Link to="/car-service-history-app" className="text-accent hover:text-white transition-colors font-semibold">service history app</Link>
        </p>
      </div>
    </section>
  );
}
