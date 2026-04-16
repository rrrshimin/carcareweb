import { TrendingUp, ShieldCheck, FolderOpen } from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "Protect Your Resale Value",
    description:
      "A complete maintenance record shows buyers your car has been properly cared for. Documented vehicles sell faster and for more.",
  },
  {
    icon: ShieldCheck,
    title: "Never Forget A Service",
    description:
      "Missed maintenance leads to bigger problems. Reminders and a clear due status help you stay ahead of every oil change, filter, and inspection.",
  },
  {
    icon: FolderOpen,
    title: "All Your Records In One Place",
    description:
      "No more lost receipts or scattered notes. Every service is logged, organized by category, and always accessible from your phone.",
  },
];

export function ValueSection() {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Why It Matters
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What You Get From Keeping{" "}
            <span className="text-accent">Proper Maintenance Records</span>
          </h2>
          <p className="text-base text-muted max-w-[540px] mx-auto">
            A complete service log protects your car's resale value, keeps you
            ahead of maintenance, and gives you one reliable place for every
            record.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-panel bg-surface p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/12 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
