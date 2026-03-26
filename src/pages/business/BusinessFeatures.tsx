import {
  TrendingUp,
  Car,
  ClipboardList,
  Bell,
  FileDown,
  MonitorSmartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Fleet Spending Analytics",
    description:
      "Review monthly and yearly maintenance spending across your entire fleet. Spot trends, compare periods, and make informed budgeting decisions based on real cost data — not guesses.",
    placeholder: "Spending overview screenshot",
  },
  {
    icon: Car,
    title: "Vehicle-by-Vehicle Cost Tracking",
    description:
      "See exactly how much each vehicle costs to maintain. Compare vehicles side by side to identify high-cost units, plan replacements, and allocate budgets where they matter most.",
    placeholder: "Per-vehicle cost breakdown",
  },
  {
    icon: ClipboardList,
    title: "Maintenance Logs & Service History",
    description:
      "Every service event — oil changes, brake replacements, tire rotations, inspections — logged with date, mileage, cost, and notes. A complete and organized record for every vehicle in your fleet.",
    placeholder: "Service history log view",
  },
  {
    icon: Bell,
    title: "Due Reminders & Service Planning",
    description:
      "Automatically track when services are coming due based on mileage and time intervals. Plan ahead instead of reacting to breakdowns. Keep your fleet running and reduce costly downtime.",
    placeholder: "Due reminders dashboard",
  },
  {
    icon: FileDown,
    title: "Export & Reporting",
    description:
      "Export your fleet's maintenance records and cost data as CSV. Feed it into your accounting software, share with management, or keep it for compliance and audit readiness.",
    placeholder: "Export and reports view",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile App + Web Dashboard",
    description:
      "Drivers and field staff log maintenance on the go with the mobile app. Fleet managers review data, track costs, and manage vehicles from the web dashboard. Everything syncs automatically.",
    placeholder: "Mobile and web views",
  },
];

function PlaceholderImage({ label, Icon }: { label: string; Icon: LucideIcon }) {
  return (
    <div
      className="rounded-[14px] border overflow-hidden w-full aspect-[4/3] flex flex-col items-center justify-center gap-3 p-6"
      style={{ backgroundColor: "#0C111F", borderColor: "#1F2740" }}
    >
      <Icon className="w-10 h-10" style={{ color: "#367DFF", opacity: 0.4 }} />
      <span
        className="text-[13px] text-center"
        style={{ color: "#A3ACBF", opacity: 0.6 }}
      >
        {label}
      </span>
    </div>
  );
}

export function BusinessFeatures() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="text-[24px] md:text-[32px] leading-tight mb-4"
            style={{ fontWeight: 800 }}
          >
            Built for{" "}
            <span style={{ color: "#367DFF" }}>fleet operations</span>
          </h2>
          <p
            className="text-[16px] max-w-[560px] mx-auto"
            style={{ color: "#A3ACBF" }}
          >
            Detailed features that help you manage maintenance, control costs,
            and keep every vehicle documented.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={feature.title}
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12 max-w-[900px] mx-auto`}
              >
                <div className="shrink-0 w-[280px] md:w-[380px]">
                  <PlaceholderImage label={feature.placeholder} Icon={feature.icon} />
                </div>

                <div className="flex-1">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(0, 81, 232, 0.12)" }}
                  >
                    <feature.icon
                      className="w-5 h-5"
                      style={{ color: "#367DFF" }}
                    />
                  </div>
                  <h3
                    className="text-[20px] md:text-[24px] mb-4"
                    style={{ fontWeight: 700 }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-[16px] leading-relaxed"
                    style={{ color: "#A3ACBF" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
