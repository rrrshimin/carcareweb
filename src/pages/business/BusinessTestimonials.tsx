import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We used to track fleet maintenance in spreadsheets. Stuff got missed constantly. CarCare Diary replaced all of that - now every vehicle has a clean record and we actually see our costs.",
    name: "David R.",
    role: "Operations Manager",
    company: "QuickDeliver Logistics",
  },
  {
    quote:
      "Being able to see exactly what each van costs us per month changed how we budget for maintenance. We caught two vehicles that were costing us way more than they should have been.",
    name: "Sarah M.",
    role: "Fleet Coordinator",
    company: "ProTech HVAC Services",
  },
  {
    quote:
      "Our drivers log maintenance from their phones and I review everything from the web dashboard. The export feature saves me hours every quarter when I need to report to accounting.",
    name: "James K.",
    role: "Owner",
    company: "Greenscape Landscaping",
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
            Trusted by{" "}
            <span style={{ color: "#367DFF" }}>fleet operators</span>
          </h2>
          <p
            className="text-[16px] max-w-[480px] mx-auto"
            style={{ color: "#A3ACBF" }}
          >
            Businesses of all sizes use CarCare Diary to manage fleet
            maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-md border p-6 flex flex-col"
              style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
            >
              <Quote
                className="w-8 h-8 mb-4 opacity-30"
                style={{ color: "#367DFF" }}
              />
              <p
                className="text-[14px] leading-relaxed flex-1 mb-6"
                style={{ color: "#A3ACBF" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  className="text-[14px]"
                  style={{ fontWeight: 600, color: "#FFFFFF" }}
                >
                  {t.name}
                </p>
                <p className="text-[13px]" style={{ color: "#A3ACBF" }}>
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
