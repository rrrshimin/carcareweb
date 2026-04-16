import {
  TrendingUp,
  Car,
  ClipboardList,
  Bell,
  FileDown,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Fleet Spending Analytics",
    description:
      "Review monthly and yearly maintenance spending across your entire fleet. Spot cost trends, compare periods, and make budgeting decisions based on real data - not guesses.",
  },
  {
    icon: Car,
    title: "Per-Vehicle Cost Tracking",
    description:
      "See exactly how much each company vehicle costs to maintain. Compare vehicles side by side to identify high-cost units and allocate maintenance budgets where they matter most.",
  },
  {
    icon: ClipboardList,
    title: "Maintenance Logs & Service Records",
    description:
      "Every service event - oil changes, brake replacements, tire rotations, inspections - logged with date, mileage, cost, and notes. A complete maintenance record for every fleet vehicle.",
  },
  {
    icon: Bell,
    title: "Service Reminders & Due Planning",
    description:
      "Automatically track when services are coming due based on mileage and time intervals. Plan ahead instead of reacting to breakdowns. Keep your fleet running with fewer surprises.",
  },
  {
    icon: FileDown,
    title: "Export & Compliance Reporting",
    description:
      "Export your fleet's maintenance records and cost data as CSV. Use it for accounting, share with management, or keep it on file for compliance and audit readiness.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile App + Web Dashboard",
    description:
      "Drivers and field staff log maintenance on the go with the mobile app. Fleet managers review data, track costs, and manage vehicle records from the web dashboard.",
  },
];

export function BusinessFeatures() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="text-[24px] md:text-[32px] leading-tight mb-4"
            style={{ fontWeight: 800 }}
          >
            Fleet maintenance features{" "}
            <span style={{ color: "#367DFF" }}>built for operations</span>
          </h2>
          <p
            className="text-[16px] max-w-[560px] mx-auto"
            style={{ color: "#A3ACBF" }}
          >
            Everything you need to manage multi-vehicle maintenance, control
            fleet costs, and keep organized records for every company vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1060px] mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-md border p-6 flex flex-col gap-4 transition-colors hover:border-[#367DFF]/40"
              style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
            >
              <div
                className="w-11 h-11 rounded-md flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(0, 81, 232, 0.12)" }}
              >
                <feature.icon className="w-5 h-5" style={{ color: "#367DFF" }} />
              </div>
              <div>
                <h3
                  className="text-[16px] mb-2"
                  style={{ fontWeight: 700, color: "#FFFFFF" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "#A3ACBF" }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
