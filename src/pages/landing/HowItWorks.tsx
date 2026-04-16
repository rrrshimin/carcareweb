import { CarFront, Wrench, Share2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CarFront,
    title: "Add Your Car",
    description:
      "Set up your vehicle with a photo and basic details. Takes under a minute.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Log Each Service",
    description:
      "Record maintenance with date, mileage, and notes. Your car's service history builds over time.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Stay On Track",
    description:
      "Get reminders when services are due. Share your vehicle's record anytime with a single link.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Start Tracking Maintenance{" "}
            <span className="text-accent">In Minutes</span>
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto">
            Getting started is quick. Three steps and your car's maintenance
            diary is up and running.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-px bg-panel" />
              )}

              <div className="relative">
                <span className="text-xs font-semibold text-accent tracking-wider mb-4 block">
                  STEP {step.number}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-brand/12 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted max-w-[300px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
