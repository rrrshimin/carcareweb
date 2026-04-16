import { Smartphone, ClipboardCheck, Bell, Share2, Car } from "lucide-react";

const signals = [
  { icon: Smartphone, text: "Built for iPhone & Android" },
  { icon: ClipboardCheck, text: "Complete Service Log" },
  { icon: Bell, text: "Smart Reminders" },
  { icon: Share2, text: "Shareable Records" },
  { icon: Car, text: "Multi-Vehicle Support" },
];

export function TrustBar() {
  return (
    <section className="py-10 md:py-12 px-6 sm:px-10 lg:px-16 xl:px-20 border-y border-panel">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {signals.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2.5 text-sm text-muted"
            >
              <item.icon className="w-4 h-4 text-accent shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
