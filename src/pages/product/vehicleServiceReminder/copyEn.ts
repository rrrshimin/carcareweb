import type { VehicleServiceReminderCopy } from "./types";

export const vehicleServiceReminderCopyEn: VehicleServiceReminderCopy = {
  pageFaqs: [
    {
      question: "What Is A Vehicle Service Reminder App?",
      answer:
        "A vehicle service reminder app alerts you when scheduled maintenance is coming due - based on mileage, time, or both. CarCare Diary is a free reminder app for iPhone and Android that calculates due dates from your actual service log and odometer, not just a generic calendar.",
    },
    {
      question: "What Is The Difference Between Date-Based And Mileage-Based Reminders?",
      answer:
        "Date-based reminders trigger after a set time period - for example, an annual MOT or 12-month coolant flush. Mileage-based reminders trigger after a set distance - for example, an oil change every 10,000 km. CarCare Diary supports both types simultaneously, so each service type uses the interval that makes sense for it.",
    },
    {
      question: "How Do Mileage-Based Reminders Work In CarCare Diary?",
      answer:
        "When you log a service, CarCare Diary records the odometer reading at that time. You set a mileage interval for that service type. When you update your odometer, the app calculates how much distance remains before the next service is due. When you get close, it shows the service as coming due.",
    },
    {
      question: "Can I See All Overdue And Due Services In One Place?",
      answer:
        "Yes. CarCare Diary shows a due/overdue overview for each vehicle - which services are up to date, which are coming due soon, and which are already overdue. You do not need to check each service type individually.",
    },
    {
      question: "Do I Need To Update My Mileage Manually?",
      answer:
        "Yes. CarCare Diary does not connect to your vehicle electronically. You update the odometer in the app - this keeps the reminder calculations accurate. The update takes a few seconds and can be done whenever you check your mileage.",
    },
    {
      question: "Is CarCare Diary Free?",
      answer:
        "CarCare Diary is free for one vehicle with full access to reminders, service logs, mileage tracking, and shareable history. Paid plans are available for tracking multiple vehicles.",
    },
  ],
  seo: {
    title: "Vehicle Service Reminder App for Maintenance Tasks | CarCare Diary",
    description:
      "Get vehicle service reminders based on mileage and time. Track what is due soon, overdue and already completed in one mobile app.",
    path: "/vehicle-service-reminder-app",
    jsonLdSoftwareDescription:
      "Vehicle service reminder app. Get mileage-based and date-based maintenance reminders calculated from your real service log and current odometer.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Vehicle service reminder app for",
    titleAccent: "mileage and time-based maintenance",
    body:
      "CarCare Diary calculates when each service is due based on your actual logged history and current odometer - not just a generic calendar. Get reminders for both mileage-based and date-based maintenance intervals.",
    subline: "Free for iPhone & Android",
    imageAlt: "CarCare Diary maintenance categories showing service due status and reminders",
  },
  problem: {
    eyebrow: "The problem",
    heading: "Missed service intervals are easy to ignore",
    intro:
      "Most drivers do not skip maintenance on purpose. They simply have no system to track it. The result is services that go overdue by months, or intervals calculated from memory instead of real data.",
    cards: [
      {
        title: "No reminder at all",
        body: "Many drivers rely on garage stickers or memory. Both get ignored when life gets busy.",
      },
      {
        title: "Generic calendar reminders",
        body: "Date-only reminders ignore mileage. A car driven 30,000 km/year needs oil changes more often than one driven 5,000.",
      },
      {
        title: "Stale data",
        body: "Reminder apps that do not link to real service history cannot recalculate accurately after a delayed or early service.",
      },
    ],
  },
  reminderTypes: {
    eyebrow: "How reminders work",
    heading: "Mileage-based and date-based reminders",
    intro:
      "Different services follow different intervals. CarCare Diary supports both types - and can combine them so a reminder triggers on whichever comes first.",
    items: [
      {
        title: "Mileage-based reminders",
        body: "Set an interval in kilometres or miles - for example, every 10,000 km for an oil change. CarCare Diary calculates the due mileage from your last logged service and shows how far you are from it as your odometer updates.",
      },
      {
        title: "Date-based reminders",
        body: "Set an annual or monthly interval - for example, a yearly MOT, a 6-month coolant check, or a quarterly cabin filter inspection. The reminder counts from the date of your last logged service.",
      },
      {
        title: "Due-soon and overdue status",
        body: "As the interval approaches, the service moves to 'due soon'. Once it passes, it shows as 'overdue'. Both statuses are visible at a glance without opening each service type individually.",
      },
    ],
    screenshotAlt: "CarCare Diary app showing maintenance reminders and due status per vehicle",
  },
  dueOverdue: {
    eyebrow: "Due and overdue view",
    heading: "See everything that's due at a glance",
    intro:
      "CarCare Diary shows the current maintenance status for every service type on your vehicle - without you needing to check each one individually.",
    statuses: [
      {
        label: "Up to date",
        body: "Services that are within their interval. Nothing needed now.",
        tone: "ok",
      },
      {
        label: "Due soon",
        body: "Services approaching their mileage or date threshold. Plan a service appointment.",
        tone: "soon",
      },
      {
        label: "Overdue",
        body: "Services that have passed their interval. Prioritize these at your next service.",
        tone: "late",
      },
    ],
    callout:
      "The status overview updates automatically each time you log a new service or update your odometer. No manual recalculation needed.",
  },
  mileage: {
    eyebrow: "Keeping reminders accurate",
    heading: "Update your mileage to keep intervals precise",
    body:
      "Mileage-based reminders are only as accurate as your logged odometer. CarCare Diary works from the mileage you record - update it regularly and every reminder stays correctly calibrated.",
    bullets: [
      "Odometer updates take a few seconds in the app",
      "Each service log entry also records the mileage at that point",
      "Reminders recalculate automatically after each update",
      "No connection to your car's OBD port required",
    ],
    imageAlt: "CarCare Diary mileage and service category overview",
    relatedPrefix: "Related:",
    relatedLinks: [
      { to: "/car-maintenance-tracker", label: "car maintenance tracker" },
      { to: "/fleet-maintenance-app", label: "fleet maintenance app" },
    ],
  },
  faqHeading: "Questions about vehicle service reminders",
  cta: {
    heading: "Never miss a service interval again",
    body: "CarCare Diary is free for iPhone and Android. Set your first mileage-based reminder in under a minute.",
  },
};