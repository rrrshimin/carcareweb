import { Truck, Wrench, HardHat, Building2, Car } from "lucide-react";

const useCases = [
  {
    icon: Truck,
    title: "Delivery Fleets",
    description:
      "Track maintenance for delivery vans, couriers, and last-mile vehicles. Keep every vehicle road-ready and costs documented.",
  },
  {
    icon: Wrench,
    title: "Service & Repair Vans",
    description:
      "Field service teams need reliable vehicles. Log maintenance per van and never let a missed service delay a job.",
  },
  {
    icon: HardHat,
    title: "Trades & Construction",
    description:
      "Plumbers, electricians, HVAC, landscaping — track fleet costs alongside your jobs and keep vehicles properly maintained.",
  },
  {
    icon: Building2,
    title: "Small Business Fleets",
    description:
      "Whether you manage 3 vehicles or 30, get clear cost visibility and maintenance tracking without expensive fleet software.",
  },
  {
    icon: Car,
    title: "Any Multi-Vehicle Business",
    description:
      "If your business depends on vehicles, CarCare Diary gives you the records, cost tracking, and reminders you need.",
  },
];

export function BusinessUseCases() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-[24px] md:text-[32px] leading-tight mb-4"
            style={{ fontWeight: 800 }}
          >
            Built for businesses that{" "}
            <span style={{ color: "#367DFF" }}>rely on vehicles</span>
          </h2>
          <p
            className="text-[16px] max-w-[520px] mx-auto"
            style={{ color: "#A3ACBF" }}
          >
            From delivery vans to service trucks, CarCare Diary works for any
            business managing a fleet.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-[14px] border p-6 text-center transition-colors hover:border-[#367DFF]/40"
              style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: "rgba(0, 81, 232, 0.12)" }}
              >
                <useCase.icon
                  className="w-6 h-6"
                  style={{ color: "#367DFF" }}
                />
              </div>
              <h4
                className="text-[16px] mb-2"
                style={{ fontWeight: 700, color: "#FFFFFF" }}
              >
                {useCase.title}
              </h4>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "#A3ACBF" }}
              >
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
