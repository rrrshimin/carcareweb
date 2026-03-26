import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I manage multiple vehicles?",
    answer:
      "Yes. CarCare Diary supports multiple vehicles under a single account. With a Pro subscription, you can add as many vehicles as your fleet needs and track them all individually.",
  },
  {
    question: "Can I track costs by vehicle?",
    answer:
      "Absolutely. Every maintenance log includes cost data, and you can view spending breakdowns per vehicle and per month — making it easy to identify high-cost vehicles and budget accurately.",
  },
  {
    question: "Does it work on mobile and web?",
    answer:
      "Yes. Drivers and field staff can log maintenance on the go using the iOS or Android app. Fleet managers and office staff can review data, export records, and manage vehicles from the web dashboard.",
  },
  {
    question: "Can I export records?",
    answer:
      "Yes. You can export your fleet's maintenance history and cost data as CSV files, which you can use for accounting, compliance reporting, or import into other business tools.",
  },
  {
    question: "Is there a free option?",
    answer:
      "CarCare Diary is free for a single vehicle. For businesses managing multiple vehicles, the Pro plan unlocks unlimited vehicles, cost tracking, exports, and all fleet management features.",
  },
  {
    question: "How is this different from a spreadsheet?",
    answer:
      "Unlike spreadsheets, CarCare Diary gives you structured maintenance tracking with automatic reminders, cost analytics, mobile access for drivers, and a web dashboard for managers — without manual data entry and formatting.",
  },
];

export function BusinessFAQ() {
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
            Common questions from business and fleet users.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-[14px] border overflow-hidden transition-colors"
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
