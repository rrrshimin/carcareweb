import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const businessFaqs = [
  {
    question: "How many vehicles can I track?",
    answer:
      "CarCare Diary is free for one vehicle. With a Pro subscription, you can add as many company vehicles as your fleet needs and track each one individually with its own maintenance log, cost history, and service reminders.",
  },
  {
    question: "Can I see maintenance costs per vehicle?",
    answer:
      "Yes. Every maintenance log entry includes cost data, and you can view spending breakdowns per vehicle and per month - making it easy to identify high-cost vehicles, compare fleet units, and budget accurately.",
  },
  {
    question: "Does it work on mobile and web?",
    answer:
      "Yes. Drivers and field staff log maintenance on the go using the iOS or Android app. Fleet managers and office staff review data, export records, and manage vehicle records from the web dashboard. Everything syncs automatically.",
  },
  {
    question: "Can I export fleet records?",
    answer:
      "Yes. You can export your fleet's maintenance history and cost data as CSV files for accounting, compliance reporting, or import into other business tools.",
  },
  {
    question: "How do fleet service reminders work?",
    answer:
      "CarCare Diary tracks when services are due for each vehicle based on mileage and time intervals. Fleet managers can see a clear due status for every vehicle and get notified before maintenance is overdue.",
  },
  {
    question: "How is this different from a spreadsheet?",
    answer:
      "Unlike spreadsheets, CarCare Diary gives you structured multi-vehicle maintenance tracking with automatic service reminders, per-vehicle cost analytics, mobile logging for drivers, and a web dashboard for fleet managers - without manual data entry.",
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
            Fleet maintenance FAQ
          </h2>
          <p
            className="text-[16px] max-w-[480px] mx-auto"
            style={{ color: "#A3ACBF" }}
          >
            Common questions about using CarCare Diary for business and fleet
            vehicle maintenance.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {businessFaqs.map((faq, index) => {
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
