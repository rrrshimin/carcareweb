import { Wrench, Bell, Gauge, Car, History, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Wrench,
    title: "Service Log",
    description:
      "Log oil changes, brake work, filter replacements, and every other service your car needs. Each entry captures date, mileage, and notes.",
  },
  {
    icon: Bell,
    title: "Service Reminders",
    description:
      "Get notified when maintenance is coming due. Reminders are calculated from your service log, current mileage, and recommended intervals.",
  },
  {
    icon: Gauge,
    title: "Mileage Tracker",
    description:
      "Keep your odometer up to date so service schedules and reminders stay accurate as you drive.",
  },
  {
    icon: Car,
    title: "Vehicle Profile",
    description:
      "Store your car's make, model, year, fuel type, and photo in one place. Your vehicle's identity at a glance.",
  },
  {
    icon: History,
    title: "Maintenance History",
    description:
      "Build a complete, organized record of every service your car has received. Filter by category and review anytime.",
  },
  {
    icon: Share2,
    title: "Shareable Records",
    description:
      "Generate a public link to your vehicle's full service history. Useful when selling your car or visiting a mechanic.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Everything You Need To{" "}
            <span className="text-accent">Track Car Maintenance</span>
          </h2>
          <p className="text-base text-muted max-w-[560px] mx-auto">
            A complete vehicle maintenance log with service reminders, mileage
            tracking, and a shareable history - built for everyday car owners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-panel bg-surface p-8 transition-colors duration-300 hover:border-accent/30"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/12 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-12">
          Want to learn more?{" "}
          <Link
            to="/car-maintenance-tracker"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            See how CarCare Diary works as a car maintenance tracker
          </Link>
          {" · "}
          <Link
            to="/blog"
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            Browse the maintenance guides
          </Link>
        </p>
      </div>
    </section>
  );
}
