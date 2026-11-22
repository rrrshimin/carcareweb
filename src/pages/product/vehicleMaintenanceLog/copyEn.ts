import type { VehicleMaintenanceLogCopy } from "./types";

/** Kept for any EN-only imports; mirrors FAQ in copy. */
export const maintenanceLogFaqsEn = [
  {
    question: "What Is A Vehicle Maintenance Log?",
    answer:
      "A vehicle maintenance log is an ongoing record of every service, repair, and upkeep task carried out on your car. Each entry typically includes the type of service, the date it was done, the mileage at the time, any parts or fluids used, and relevant notes. Over time the log builds into a complete maintenance history for the vehicle.",
  },
  {
    question: "What Should I Include In A Car Service Log?",
    answer:
      "At minimum, each entry should include the service type, date, and mileage. Adding specs such as oil grade, filter type, or part numbers makes the record significantly more useful. Notes about observations, upcoming needs, or who performed the work are also worth capturing while the detail is fresh.",
  },
  {
    question: "Can I Keep A Digital Vehicle Maintenance Log?",
    answer:
      "Yes. CarCare Diary lets you log every service on your phone with full detail - service type, date, mileage, specs, and notes. The log is always organized, always with you, and never gets lost the way paper records do.",
  },
  {
    question: "Does A Maintenance Log Help With Resale Value?",
    answer:
      "Yes. A well-kept log shows potential buyers that the car has been consistently maintained. It removes uncertainty and gives buyers confidence. CarCare Diary lets you share your full maintenance history through a single link, making that conversation straightforward.",
  },
  {
    question: "Can I Track Mileage In A Car Maintenance Log?",
    answer:
      "Yes. Mileage is recorded on every log entry in CarCare Diary. You can also update your car's current odometer reading in the app. This keeps your maintenance schedule accurate and shows the exact mileage at every service.",
  },
  {
    question: "Is CarCare Diary Free?",
    answer:
      "CarCare Diary is free for one vehicle with full access to the maintenance log, mileage tracking, and shareable service history. A Pro plan is available for tracking multiple vehicles.",
  },
] as const;

export const vehicleMaintenanceLogCopyEn: VehicleMaintenanceLogCopy = {
  seo: {
    title: "Vehicle Maintenance Log App for Service Records and Mileage",
    description:
      "Keep a vehicle maintenance log with service records, mileage, notes, and reminders in one app. Organize your car maintenance history with CarCare Diary.",
    path: "/vehicle-maintenance-log",
    jsonLdSoftwareDescription:
      "Keep a vehicle maintenance log with service records, mileage, notes, and reminders in one app. Organize your car maintenance history with CarCare Diary.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Vehicle Maintenance Log",
    titleAccent: "Keep A Running Record Of Every Service Your Car Receives",
    body:
      "A vehicle maintenance log is an ongoing record of every service your car receives - oil changes, brake work, filter replacements, tire rotations - with dates, mileage, and notes for each entry. CarCare Diary keeps this log on your phone, organized by category and shareable when needed.",
    subline: "Free for iPhone & Android",
  },
  whatIsALog: {
    eyebrow: "The Basics",
    heading: "What Is A Vehicle Maintenance Log?",
    paragraphs: [
      "A vehicle maintenance log is an ongoing record of every service and repair your car receives over its life. Unlike a one-off service receipt, a log builds over time - creating a clear timeline of what was done, when, and at what mileage.",
      "A good log covers routine upkeep like oil changes and tire rotations, but also captures less frequent work like brake replacements, timing belt service, and inspections. Over the years this record becomes one of the most useful documents you have for your vehicle.",
      "Most car owners start with good intentions - keeping receipts, remembering rough dates - but without a dedicated system the picture becomes incomplete quickly. A digital maintenance log solves that by making entries fast and keeping everything in one place.",
    ],
    guideLink: { to: "/blog/what-to-include-in-a-car-service-history", label: "what to include in a car service history" },
  },
  whatToLog: {
    eyebrow: "What To Record",
    heading: "What To Log For Every Service",
    intro:
      "A maintenance log is only as useful as what goes into it. These are the six things worth capturing for each entry.",
    fields: [
      {
        title: "Service Type",
        description:
          "What was actually done - oil change, brake pad replacement, air filter, coolant flush. Be specific enough to be useful later.",
      },
      {
        title: "Date",
        description:
          "When the service was performed. Even an approximate date is better than none. Exact dates let you spot intervals and patterns over time.",
      },
      {
        title: "Mileage",
        description:
          "The odometer reading at the time of service. This is how you know when something is due again, and how you build a precise maintenance timeline.",
      },
      {
        title: "Specs And Parts",
        description:
          "Oil grade, filter part number, fluid type, tyre brand - whatever was used. These details matter when the same work needs to be done again.",
      },
      {
        title: "Cost",
        description:
          "Recording what you spent lets you see your total maintenance outlay over time and makes budgeting for future service easier.",
      },
      {
        title: "Notes And Observations",
        description:
          "Anything the mechanic flagged, something you noticed, or a reminder for next time. Notes capture context that specs alone cannot.",
      },
    ],
    illustrationAlt:
      "CarCare Diary showing different log types including oil change, brakes, filters, and tyre entries",
  },
  whyLoggingHelps: {
    eyebrow: "Why It Matters",
    heading: "Why Keeping A Maintenance Log Pays Off",
    intro:
      "The value of a maintenance log grows with time. A few entries are useful. A few years of entries are genuinely valuable.",
    outcomes: [
      {
        title: "Remember Exactly What Was Done",
        description:
          "A log answers the question you always forget to remember: when was the last oil change? What oil grade was used? What was the mileage at the last brake service?",
      },
      {
        title: "See Patterns Over Time",
        description:
          "Once you have a year or two of entries, patterns emerge. You can see how often certain services recur, where the costs cluster, and how your car behaves across mileage ranges.",
      },
      {
        title: "Stay On Schedule Without Guessing",
        description:
          "With exact mileage recorded at each service, you know precisely when the next one is due. No guessing, no relying on stickers on the windscreen, no missed intervals.",
      },
      {
        title: "Keep Records That Hold Up",
        description:
          "A log you've built consistently over years is more credible than memory alone - whether that's for warranty discussions, mechanic conversations, or showing a buyer what's been maintained.",
      },
    ],
    analyticsImageAlt: "CarCare Diary spending analytics showing car maintenance costs over time",
  },
  howCarCareHelps: {
    eyebrow: "The App",
    heading: "How CarCare Diary Keeps Your Log Organized",
    intro:
      "CarCare Diary is built around the maintenance log. Every feature supports the core habit of recording and reviewing your car's service history.",
    cards: [
      {
        title: "Quick Entry Logging",
        body:
          "Add a new log entry in under a minute. Select the service type, enter the date and mileage, add specs and notes. The entry goes straight into your vehicle's timeline.",
      },
      {
        title: "Organized By Category",
        body:
          "Entries are grouped by service category - Engine, Brakes, Fluids, Electrical, Tyres, and more - so scanning your log for a specific type of work takes seconds.",
      },
      {
        title: "Mileage Tracking Built In",
        body:
          "Mileage is captured on every entry. Update your odometer in the app to keep your log current and your upcoming service intervals accurate.",
      },
      {
        title: "Specs And Notes Per Entry",
        body:
          "Every log entry supports detailed specs and free-form notes. Oil grade, part numbers, technician observations - all stored alongside the service record.",
      },
      {
        title: "Your Full History In One Place",
        body:
          "Every entry you log builds into a complete, scrollable maintenance timeline for your vehicle. No need to dig through paperwork or try to remember dates.",
      },
      {
        title: "Share When You Need To",
        body:
          "When you want to show a mechanic or a buyer what's been done, generate a shareable link to your vehicle's full log. No app or login required to view it.",
      },
    ],
    relatedLinks: [
      { to: "/car-maintenance-tracker", label: "Car Maintenance Tracker - reminders and scheduling" },
      { to: "/car-service-history", label: "Car Service History - sharing and resale" },
    ],
  },
  exampleEntries: {
    eyebrow: "In Practice",
    heading: "What A Well-Kept Maintenance Log Looks Like",
    intro:
      "These are the kinds of entries that make a log genuinely useful - specific enough to reference later, and consistent enough to build a clear picture over time.",
    closing:
      "Each entry above takes under a minute to log in CarCare Diary. Over time, entries like these become a complete and reliable record of your car's maintenance history.",
    entries: [
      {
        type: "Oil Change",
        detail: "0W-30 full synthetic - 5L · Bosch filter #3323",
        note: "Next due at 88,000 km or in 12 months",
        date: "11 Feb 2025",
        mileage: "80,800 km",
      },
      {
        type: "Front Brake Pads",
        detail: "Brembo P50037 - both sides",
        note: "Rear pads at ~60%, revisit at next service",
        date: "28 Oct 2024",
        mileage: "78,300 km",
      },
      {
        type: "Air Filter Replacement",
        detail: "Mann C2594 filter",
        note: "Cabin filter also replaced at same visit",
        date: "14 Jun 2024",
        mileage: "72,600 km",
      },
      {
        type: "Tyre Rotation",
        detail: "Front to rear cross-rotation",
        note: "Tread even across all four. Fronts at ~5mm",
        date: "14 Jun 2024",
        mileage: "72,600 km",
      },
      {
        type: "Coolant Flush",
        detail: "OAT coolant - 50/50 mix - 6L",
        note: "System pressure tested, no leaks found",
        date: "3 Mar 2024",
        mileage: "70,500 km",
      },
      {
        type: "Annual Inspection",
        detail: "Full inspection - advisory issued on wiper blades",
        note: "Wipers replaced same day",
        date: "18 Jan 2024",
        mileage: "68,500 km",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions About Vehicle Maintenance Logs",
    intro: "Questions about keeping a car service log, what to record, and how CarCare Diary helps.",
    items: [...maintenanceLogFaqsEn],
  },
  cta: {
    eyebrow: "Get The App",
    heading: "Start Your Vehicle Maintenance Log Today",
    body:
      "CarCare Diary is a free app for iPhone and Android. Log every service, track your mileage, and build a complete car maintenance diary you can rely on.",
    links: [
      { to: "/car-maintenance-tracker", label: "Car maintenance tracker" },
      { to: "/car-service-history", label: "Car service history" },
      { to: "/blog/how-to-track-car-maintenance", label: "How to track maintenance" },
    ],
  },
};
