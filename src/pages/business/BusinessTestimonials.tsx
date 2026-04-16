import { Wrench, DollarSign, Smartphone } from "lucide-react";

const useCases = [
  {
    icon: Wrench,
    heading: "One record per vehicle",
    body: "Every service your vehicles receive is logged in one place — oil changes, tyre replacements, inspections, fluid changes. No more spreadsheets or scattered receipts.",
  },
  {
    icon: DollarSign,
    heading: "Spending visibility per vehicle",
    body: "See what each vehicle is costing you in maintenance over time. Spot outliers, budget ahead, and make informed decisions about your fleet.",
  },
  {
    icon: Smartphone,
    heading: "Drivers log from their phones",
    body: "Anyone in your team can log a service from the CarCare Diary app on iPhone or Android. Records stay organized centrally without extra admin overhead.",
  },
];

export function BusinessTestimonials() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-[24px] md:text-[32px] leading-tight mb-4"
            style={{ fontWeight: 800 }}
          >
            Built for{" "}
            <span style={{ color: "#367DFF" }}>small business fleets</span>
          </h2>
          <p
            className="text-[16px] max-w-[480px] mx-auto"
            style={{ color: "#A3ACBF" }}
          >
            CarCare Diary gives businesses the same organized maintenance
            tracking and cost visibility that individual owners rely on — across
            every vehicle in your fleet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {useCases.map((item) => (
            <div
              key={item.heading}
              className="rounded-md border p-6 flex flex-col gap-4"
              style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(55, 125, 255, 0.12)" }}
              >
                <item.icon className="w-5 h-5" style={{ color: "#367DFF" }} />
              </div>
              <p
                className="text-[15px]"
                style={{ fontWeight: 600, color: "#FFFFFF" }}
              >
                {item.heading}
              </p>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "#A3ACBF" }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
