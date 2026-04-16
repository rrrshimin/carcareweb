import { Link } from "react-router-dom";
import { Building2, Car, BarChart3 } from "lucide-react";

const points = [
  {
    icon: Car,
    text: "Track maintenance for every vehicle under one account",
  },
  {
    icon: BarChart3,
    text: "Monitor spending across your entire fleet",
  },
  {
    icon: Building2,
    text: "Keep organized service records for each vehicle",
  },
];

export function BusinessSection() {
  return (
    <section className="py-20 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[860px] mx-auto rounded-xl border border-panel bg-surface p-8 md:p-12 text-center">
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
          Multiple Vehicles?
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Also Built For Households And Small Fleets
        </h2>
        <p className="text-base text-muted max-w-[520px] mx-auto mb-8">
          Whether you have two cars in the driveway or a small business fleet,
          CarCare Diary supports multiple vehicles under a single account.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
          {points.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2.5 text-sm text-muted"
            >
              <item.icon className="w-4 h-4 text-accent shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <Link
          to="/business"
          className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-white transition-colors"
        >
          Learn more about CarCare Diary for Business
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
