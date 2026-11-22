import type { SmbFleetPageCopy } from "../shared/smbFleetPageTypes";

export const carRentalFleetMaintenanceAppCopyEn: SmbFleetPageCopy = {
  pageFaqs: [
    {
      question: "Can I Use CarCare Diary for a Small Rental Fleet?",
      answer: "Yes. CarCare Diary works well for small rental fleets. Each vehicle gets its own profile, service log, mileage history, and maintenance reminders. There are no per-vehicle limits on log entries, and you can share a vehicle's service history with a public link whenever needed."
    },
    {
      question: "Does CarCare Diary Handle Bookings or Rental Agreements?",
      answer: "No. CarCare Diary is focused on maintenance records, mileage, and service reminders — not bookings, reservations, rental contracts, or payments. If you need a booking system, you would use a separate tool for that. CarCare Diary handles the maintenance and service history side."
    },
    {
      question: "Can I Track Maintenance by Mileage?",
      answer: "Yes. CarCare Diary uses the odometer reading you enter to track when services are due by mileage. You can set service reminders by mileage interval (e.g., every 10,000 km), by date, or both. When you log a service, the app records the mileage at that time."
    },
    {
      question: "Can I Keep Service History for Each Rental Car Separately?",
      answer: "Yes. Each vehicle in CarCare Diary has its own completely separate service log, mileage record, and reminder schedule. There is no cross-contamination between vehicles. You can view the full history for any single vehicle at any time."
    },
    {
      question: "Can I Share a Rental Vehicle's Service Record?",
      answer: "Yes. You can generate a public link for any vehicle's service record. Anyone with the link can view the complete maintenance log — dates, mileage, services performed, notes — without needing a CarCare Diary account. Useful for insurance, compliance, or showing buyers or partners that vehicles are properly maintained."
    },
    {
      question: "How Many Vehicles Can I Track?",
      answer: "CarCare Diary is free for one vehicle. The Base plan supports up to 3 vehicles and the Pro plan supports unlimited vehicles. There are no per-user fees or complex contracts."
    }
  ],
  seo: {
    title: "Car Rental Fleet Maintenance App | CarCare Diary",
    description: "Track maintenance, mileage and service reminders for every vehicle in your rental fleet. CarCare Diary is a simple mobile app for car rental fleet maintenance records.",
    path: "/car-rental-fleet-maintenance-app",
    jsonLdSoftwareDescription: "Car rental fleet maintenance app for tracking service records, mileage, reminders, and shareable maintenance history across multiple rental vehicles."
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Car rental fleet maintenance app for",
    titleAccent: "service records and reminders",
    body: "CarCare Diary is a free mobile app for iPhone and Android. Track maintenance, mileage, service reminders, and shareable vehicle history for every car in your rental fleet — no spreadsheets, no complex setup.",
    subline: "Free to start · Multi-vehicle plans available",
    imageAlt: "CarCare Diary rental fleet maintenance app showing vehicle service logs"
  },
  problem: {
    heading: "Rental vehicles get used by many drivers — service history gets messy fast",
    body: "When multiple people drive the same car, receipts get lost, services are forgotten, and no one can answer \"when was this last serviced?\" CarCare Diary keeps one clean, organised record per vehicle — accessible on any phone, whenever you need it."
  },
  features: {
    heading: "Fleet maintenance tracking for rental vehicles",
    intro: "No bookings, no dispatching, no GPS tracking — just clean service records and reminders for every vehicle.",
    items: [
      {
        title: "Track Maintenance Per Vehicle",
        description: "Each rental car gets its own profile with a complete, separate service log. Oil changes, brake work, tyres, filters — all recorded per vehicle."
      },
      {
        title: "Log Mileage and Service Dates",
        description: "Record the odometer at every service. Mileage is linked to each log entry so you always know how many kilometres ago each job was done."
      },
      {
        title: "See What Is Due Soon",
        description: "Reminders are calculated from your actual service log and current mileage. Know which vehicle is due for its next service before it becomes overdue."
      },
      {
        title: "Notes, Parts, Fluids, and Service Details",
        description: "Log the mechanic, parts replaced, fluids used, and any extra notes on every service entry. The detail is there when you need it."
      },
      {
        title: "Complete Service History Per Car",
        description: "Every service ever logged is stored in order. View the full history for any vehicle instantly — no digging through files or spreadsheets."
      },
      {
        title: "Share Clean History When Needed",
        description: "Generate a public link to any vehicle's service record. Share it with insurers, buyers, partners, or staff — no account needed to view."
      }
    ]
  },
  useCases: {
    heading: "Who uses CarCare Diary for rental fleets",
    items: [
      {
        title: "Small Rental Fleets",
        detail: "Track oil changes, tyre services, and scheduled maintenance across a small fleet of rental cars — no spreadsheet required."
      },
      {
        title: "Peer-to-Peer Rental Hosts",
        detail: "Keep clean records for cars listed on peer-to-peer rental platforms. Share service history to build trust with renters."
      },
      {
        title: "Local Car Rental Businesses",
        detail: "Maintain organised vehicle records for a local rental business. Know what each car needs before it becomes a problem."
      },
      {
        title: "Shared Company Vehicles",
        detail: "Track maintenance for vehicles shared by multiple staff or departments. One clean record per vehicle, accessible on any phone."
      }
    ]
  },
  lightweight: {
    heading: "Why a dedicated maintenance log beats spreadsheets",
    intro: "Rental fleets need maintenance records that are always with you — not in a file that nobody can find when a vehicle needs attention.",
    withoutLabel: "Without a maintenance app",
    withLabel: "With CarCare Diary",
    calloutPrefix: "Also see:",
    calloutLinks: [
      {
        to: "/fleet-management-app",
        label: "fleet management"
      },
      {
        to: "/fleet-maintenance-app",
        label: "fleet maintenance app"
      }
    ],
    without: [
      "Service history scattered across receipts and paperwork",
      "Relying on memory for what was done and when",
      "No easy way to see which vehicle is overdue",
      "Hard to prove maintenance history when selling or insuring"
    ],
    with: [
      "Every service logged per vehicle with date and mileage",
      "Due and overdue maintenance visible at a glance",
      "Shareable service history link for any vehicle",
      "Clean records on your phone, always with you"
    ]
  },
  faqHeading: "Frequently asked questions",
  cta: {
    heading: "Start tracking your rental fleet today",
    body: "Free to start. Keep clean service records for every rental vehicle — right from your phone.",
    alsoSeePrefix: "Also see:",
    links: [
      {
        to: "/small-business-fleet-management-app",
        label: "small business fleet app"
      },
      {
        to: "/car-maintenance-tracker",
        label: "car maintenance tracker"
      }
    ]
  }
};
