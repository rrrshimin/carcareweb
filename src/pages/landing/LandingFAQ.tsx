import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const landingFaqs = [
  {
    question: "What is CarCare Diary?",
    answer:
      "CarCare Diary is a car maintenance tracker app for iOS and Android. It lets you log service work, track mileage, get reminders when maintenance is due, and keep a complete vehicle maintenance history you can share.",
  },
  {
    question: "Is CarCare Diary free?",
    answer:
      "Yes. CarCare Diary is free to use for one vehicle with full access to maintenance logging, mileage tracking, service reminders, and shareable history. A Pro plan is available if you need to track multiple vehicles.",
  },
  {
    question: "What kind of maintenance can I track?",
    answer:
      "You can log any type of vehicle maintenance — oil changes, brake pads, filters, spark plugs, tire rotations, fluid top-ups, inspections, and more. Each entry includes date, mileage, specifications, and notes.",
  },
  {
    question: "How do service reminders work?",
    answer:
      "CarCare Diary calculates when services are coming due based on your maintenance log, current mileage, and recommended service intervals. You'll see a clear due status for each maintenance type and get notified when it's time to act.",
  },
  {
    question: "Can I share my car's maintenance history?",
    answer:
      "Yes. You can generate a public link to your vehicle's full service record. This is especially useful when selling your car — buyers can see every logged service, giving them confidence the vehicle has been properly maintained.",
  },
  {
    question: "Does CarCare Diary work for multiple cars?",
    answer:
      "The free plan covers one vehicle. If you own more than one car, the Pro plan lets you add and track multiple vehicles under a single account, each with its own maintenance log and reminders.",
  },
];

export function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-[24px] md:text-[32px] leading-tight mb-4"
            style={{ fontWeight: 800 }}
          >
            Frequently asked questions
          </h2>
          <p
            className="text-[16px] max-w-[480px] mx-auto"
            style={{ color: "#A3ACBF" }}
          >
            Common questions about the CarCare Diary maintenance tracker.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {landingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-md border overflow-hidden transition-colors"
                style={{
                  backgroundColor: "#141A2B",
                  borderColor: isOpen
                    ? "rgba(54, 125, 255, 0.4)"
                    : "#1F2740",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span
                    className="text-[15px] pr-4"
                    style={{ fontWeight: 600, color: "#FFFFFF" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: "#A3ACBF" }}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p
                      className="text-[14px] leading-relaxed"
                      style={{ color: "#A3ACBF" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
