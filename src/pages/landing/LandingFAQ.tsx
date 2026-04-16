import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const landingFaqs = [
  {
    question: "What Is CarCare Diary?",
    answer:
      "CarCare Diary is a car maintenance tracker app for iPhone and Android. It helps you log every service, track mileage, get reminders when maintenance is due, and keep a complete vehicle service history you can share.",
  },
  {
    question: "Is CarCare Diary Free To Use?",
    answer:
      "Yes. CarCare Diary is free for one vehicle with full access to the service log, mileage tracking, reminders, and shareable history. A Pro plan is available if you need to track multiple vehicles.",
  },
  {
    question: "What Kind Of Maintenance Can I Track?",
    answer:
      "You can log any type of car maintenance - oil changes, brake pads, filters, spark plugs, tire rotations, fluid changes, inspections, battery replacements, and more. Each entry includes date, mileage, specifications, and notes.",
  },
  {
    question: "How Do Service Reminders Work?",
    answer:
      "CarCare Diary calculates when services are coming due based on your maintenance log, current mileage, and recommended service intervals. You see a clear due status for each maintenance type and get notified when it's time to act.",
  },
  {
    question: "Can I Share My Car's Maintenance History?",
    answer:
      "Yes. You can generate a public link to your vehicle's full service record. This is especially useful when selling your car - buyers can review every logged service, which builds trust and supports your asking price.",
  },
  {
    question: "Does CarCare Diary Support Multiple Vehicles?",
    answer:
      "The free plan covers one vehicle. If you have more than one car - or manage a small fleet - the Pro plan lets you track multiple vehicles under a single account, each with its own service log and reminders.",
  },
  {
    question: "Is CarCare Diary Available For iPhone And Android?",
    answer:
      "CarCare Diary is available for both iPhone and Android. You can download it for free on the App Store and Google Play.",
  },
  {
    question: "How Does A Maintenance Log Help When Selling My Car?",
    answer:
      "A complete service history shows potential buyers that your vehicle has been regularly maintained. With CarCare Diary, you can share a public link to your car's full maintenance record, making the sale process more transparent and increasing buyer confidence.",
  },
];

export function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Frequently Asked Questions About CarCare Diary
          </h2>
          <p className="text-base text-muted max-w-[480px] mx-auto">
            Common questions about the CarCare Diary car maintenance tracker app.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {landingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border overflow-hidden transition-colors bg-surface ${
                  isOpen ? "border-accent/40" : "border-panel"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="text-[15px] font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-muted">
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
