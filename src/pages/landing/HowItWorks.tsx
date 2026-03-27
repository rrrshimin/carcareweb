import { CarFront, Wrench, Gauge, Share2 } from "lucide-react";

const steps = [
  {
    icon: CarFront,
    title: "Add your vehicle",
    description: "Enter your car's details, upload a photo, and set your preferences.",
  },
  {
    icon: Wrench,
    title: "Log maintenance work",
    description: "Record oil changes, filters, brakes, fluids, and any other service work.",
  },
  {
    icon: Gauge,
    title: "Update mileage over time",
    description: "Keep your odometer reading current so reminders stay accurate.",
  },
  {
    icon: Share2,
    title: "Share your service history",
    description: "Generate a public link to share your vehicle's maintenance record.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-[24px] md:text-[32px] leading-tight mb-4"
            style={{ fontWeight: 800 }}
          >
            How it works
          </h2>
          <p className="text-[16px] max-w-[480px] mx-auto" style={{ color: "#A3ACBF" }}>
            Four simple steps to organized vehicle maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-md border p-6 text-center transition-colors hover:border-[#367DFF]/40"
              style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
            >
              <div
                className="w-14 h-14 rounded-md flex items-center justify-center mx-auto mb-5 mt-2"
                style={{ backgroundColor: "rgba(0, 81, 232, 0.12)" }}
              >
                <step.icon className="w-6 h-6" style={{ color: "#367DFF" }} />
              </div>

              <h4
                className="text-[16px] mb-2"
                style={{ fontWeight: 700, color: "#FFFFFF" }}
              >
                {step.title}
              </h4>
              <p className="text-[14px] leading-relaxed" style={{ color: "#A3ACBF" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
