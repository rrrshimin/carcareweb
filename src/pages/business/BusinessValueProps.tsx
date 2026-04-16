import {
  DollarSign,
  Car,
  ClipboardList,
  Bell,
  MonitorSmartphone,
  FileSpreadsheet,
} from "lucide-react";

const valueProps = [
  {
    icon: DollarSign,
    title: "Fleet-wide spending visibility",
    description:
      "See total fleet maintenance costs by month. Know exactly what you're spending across all company vehicles.",
  },
  {
    icon: Car,
    title: "Per-vehicle cost breakdown",
    description:
      "Track maintenance costs per vehicle. Identify high-cost units, plan replacements, and budget with real data.",
  },
  {
    icon: ClipboardList,
    title: "Centralized maintenance records",
    description:
      "Every oil change, tire rotation, and repair - logged in one place. A single source of truth for your fleet's service history.",
  },
  {
    icon: Bell,
    title: "Fleet service reminders",
    description:
      "Stay ahead of maintenance schedules. Get notified before services are due across your fleet so nothing gets missed.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile app + web dashboard",
    description:
      "Drivers log maintenance from the mobile app. Fleet managers review data and track costs from the web dashboard.",
  },
  {
    icon: FileSpreadsheet,
    title: "Export-ready fleet records",
    description:
      "Export your fleet's maintenance history and cost data for accounting, compliance, or management reporting.",
  },
];

export function BusinessValueProps() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-[24px] md:text-[32px] leading-tight mb-4"
            style={{ fontWeight: 800 }}
          >

            Why fleet operators choose{" "}
            <span style={{ color: "#367DFF" }}>CarCare Diary</span>
          </h2>
          <p
            className="text-[16px] max-w-[560px] mx-auto"
            style={{ color: "#A3ACBF" }}
          >
            Multi-vehicle maintenance tracking with cost visibility, service
            reminders, and organized records for every company vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="rounded-md border p-6 transition-colors hover:border-[#367DFF]/40"
              style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
            >
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(0, 81, 232, 0.12)" }}
              >
                <prop.icon className="w-6 h-6" style={{ color: "#367DFF" }} />
              </div>
              <h3
                className="text-[16px] mb-2"
                style={{ fontWeight: 700, color: "#FFFFFF" }}
              >
                {prop.title}
              </h3>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "#A3ACBF" }}
              >
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
