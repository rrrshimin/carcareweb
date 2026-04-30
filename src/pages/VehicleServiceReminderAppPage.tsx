import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Gauge,
  CalendarDays,
  CheckCircle,
  AlertTriangle,
  Clock,
  ChevronDown,
  RefreshCw,
  LayoutDashboard,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";
import { AppStoreButton, GooglePlayButton } from "./landing/StoreButtons";
import { usePageSeo } from "../lib/usePageSeo";
import logCategoriesImg from "../assets/log_categories_illustration_mid_size.png";
import heroScreenshot from "../assets/hero-screenshots-mockups.png";

const pageFaqs = [
  {
    question: "What Is A Vehicle Service Reminder App?",
    answer:
      "A vehicle service reminder app alerts you when scheduled maintenance is coming due - based on mileage, time, or both. CarCare Diary is a free reminder app for iPhone and Android that calculates due dates from your actual service log and odometer, not just a generic calendar.",
  },
  {
    question: "What Is The Difference Between Date-Based And Mileage-Based Reminders?",
    answer:
      "Date-based reminders trigger after a set time period - for example, an annual MOT or 12-month coolant flush. Mileage-based reminders trigger after a set distance - for example, an oil change every 10,000 km. CarCare Diary supports both types simultaneously, so each service type uses the interval that makes sense for it.",
  },
  {
    question: "How Do Mileage-Based Reminders Work In CarCare Diary?",
    answer:
      "When you log a service, CarCare Diary records the odometer reading at that time. You set a mileage interval for that service type. When you update your odometer, the app calculates how much distance remains before the next service is due. When you get close, it shows the service as coming due.",
  },
  {
    question: "Can I See All Overdue And Due Services In One Place?",
    answer:
      "Yes. CarCare Diary shows a due/overdue overview for each vehicle - which services are up to date, which are coming due soon, and which are already overdue. You do not need to check each service type individually.",
  },
  {
    question: "Do I Need To Update My Mileage Manually?",
    answer:
      "Yes. CarCare Diary does not connect to your vehicle electronically. You update the odometer in the app - this keeps the reminder calculations accurate. The update takes a few seconds and can be done whenever you check your mileage.",
  },
  {
    question: "Is CarCare Diary Free?",
    answer:
      "CarCare Diary is free for one vehicle with full access to reminders, service logs, mileage tracking, and shareable history. Paid plans are available for tracking multiple vehicles.",
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
      "Vehicle service reminder app. Get mileage-based and date-based maintenance reminders calculated from your real service log and current odometer.",
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

export default function VehicleServiceReminderAppPage() {
  const jsonLd = useMemo(() => JSON_LD, []);

  usePageSeo({
    title: "Vehicle Service Reminder App for Maintenance Tasks | CarCare Diary",
    description:
      "Get vehicle service reminders based on mileage and time. Track what is due soon, overdue and already completed in one mobile app.",
    path: "/vehicle-service-reminder-app",
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
          <ProblemSection />
          <ReminderTypes />
          <DueOverdueSection />
          <MileageSection />
          <ReminderFAQ />
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
            Vehicle service reminder app for{" "}
            <span className="text-accent">
              mileage and time-based maintenance
            </span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-10 max-w-[540px] mx-auto lg:mx-0">
            CarCare Diary calculates when each service is due based on your
            actual logged history and current odometer - not just a generic
            calendar. Get reminders for both mileage-based and date-based
            maintenance intervals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start mb-6">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <p className="text-sm text-muted">Free for iPhone &amp; Android</p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 420 }}>
            <img
              src={logCategoriesImg}
              alt="CarCare Diary maintenance categories showing service due status and reminders"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Missed service intervals are easy to ignore
          </h2>
          <p className="text-base text-muted max-w-[560px] mx-auto">
            Most drivers do not skip maintenance on purpose. They simply have no
            system to track it. The result is services that go overdue by
            months, or intervals calculated from memory instead of real data.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {[
            {
              icon: Clock,
              title: "No reminder at all",
              body: "Many drivers rely on garage stickers or memory. Both get ignored when life gets busy.",
            },
            {
              icon: AlertTriangle,
              title: "Generic calendar reminders",
              body: "Date-only reminders ignore mileage. A car driven 30,000 km/year needs oil changes more often than one driven 5,000.",
            },
            {
              icon: RefreshCw,
              title: "Stale data",
              body: "Reminder apps that do not link to real service history cannot recalculate accurately after a delayed or early service.",
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

function ReminderTypes() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              How reminders work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Mileage-based and date-based reminders
            </h2>
            <p className="text-base text-muted mb-10 max-w-[520px] mx-auto lg:mx-0">
              Different services follow different intervals. CarCare Diary
              supports both types - and can combine them so a reminder triggers
              on whichever comes first.
            </p>
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: Gauge,
                  title: "Mileage-based reminders",
                  body: "Set an interval in kilometres or miles - for example, every 10,000 km for an oil change. CarCare Diary calculates the due mileage from your last logged service and shows how far you are from it as your odometer updates.",
                },
                {
                  icon: CalendarDays,
                  title: "Date-based reminders",
                  body: "Set an annual or monthly interval - for example, a yearly MOT, a 6-month coolant check, or a quarterly cabin filter inspection. The reminder counts from the date of your last logged service.",
                },
                {
                  icon: Bell,
                  title: "Due-soon and overdue status",
                  body: "As the interval approaches, the service moves to 'due soon'. Once it passes, it shows as 'overdue'. Both statuses are visible at a glance without opening each service type individually.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-lg bg-brand/12 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.body}
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
                alt="CarCare Diary app showing maintenance reminders and due status per vehicle"
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

function DueOverdueSection() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Due and overdue view
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            See everything that's due at a glance
          </h2>
          <p className="text-base text-muted max-w-[540px] mx-auto">
            CarCare Diary shows the current maintenance status for every
            service type on your vehicle - without you needing to check each
            one individually.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {[
            {
              icon: CheckCircle,
              label: "Up to date",
              color: "text-emerald-400",
              body: "Services that are within their interval. Nothing needed now.",
            },
            {
              icon: Bell,
              label: "Due soon",
              color: "text-accent",
              body: "Services approaching their mileage or date threshold. Plan a service appointment.",
            },
            {
              icon: AlertTriangle,
              label: "Overdue",
              color: "text-red-400",
              body: "Services that have passed their interval. Prioritize these at your next service.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-panel bg-surface p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className={`text-base font-semibold mb-2 ${item.color}`}>
                {item.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <div className="inline-flex items-start gap-3 rounded-xl border border-panel bg-surface px-6 py-5 max-w-[560px] text-left">
            <LayoutDashboard className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed text-muted">
              The status overview updates automatically each time you log a new
              service or update your odometer. No manual recalculation needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MileageSection() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[900px] mx-auto">
        <div className="rounded-2xl border border-panel bg-surface px-8 py-10 md:px-12 md:py-14">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            <div className="flex-1">
              <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
                Keeping reminders accurate
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Update your mileage to keep intervals precise
              </h2>
              <p className="text-sm leading-relaxed text-muted mb-5">
                Mileage-based reminders are only as accurate as your logged
                odometer. CarCare Diary works from the mileage you record -
                update it regularly and every reminder stays correctly
                calibrated.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Odometer updates take a few seconds in the app",
                  "Each service log entry also records the mileage at that point",
                  "Reminders recalculate automatically after each update",
                  "No connection to your car's OBD port required",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 md:w-[200px]">
              <img
                src={logCategoriesImg}
                alt="CarCare Diary mileage and service category overview"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-muted mt-8">
          Related:{" "}
          <Link
            to="/car-maintenance-tracker"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            car maintenance tracker
          </Link>
          {" · "}
          <Link
            to="/fleet-maintenance-app"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            fleet maintenance app
          </Link>
        </p>
      </div>
    </section>
  );
}

function ReminderFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[860px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Questions about vehicle service reminders
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
          Never miss a service interval again
        </h2>
        <p className="text-base text-muted mb-10">
          CarCare Diary is free for iPhone and Android. Set your first
          mileage-based reminder in under a minute.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>
    </section>
  );
}
