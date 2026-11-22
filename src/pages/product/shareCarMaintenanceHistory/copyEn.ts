import type { ShareCarMaintenanceHistoryCopy } from "./types";

export const shareCarMaintenanceHistoryCopyEn: ShareCarMaintenanceHistoryCopy = {
  pageFaqs: [
    {
      question: "How Do I Share My Car Maintenance History?",
      answer:
        "In CarCare Diary, open your vehicle's profile and tap the share button. The app generates a public read-only link to your vehicle's full maintenance record. You can send this link to anyone - they can view the history in their browser without downloading the app.",
    },
    {
      question: "What Does The Shared Maintenance History Show?",
      answer:
        "The shared history shows your vehicle's profile (make, model, year), all logged service entries with dates and mileage, notes and specifications per entry, and the maintenance categories covered. It is a read-only view of exactly what is logged in your app.",
    },
    {
      question: "Can Anyone View My Shared Service History?",
      answer:
        "Yes - anyone with the link can view the history. The page is public and read-only. You remain in control of what is logged in the app, and you can revoke or update the link at any time from your vehicle settings.",
    },
    {
      question: "Does Sharing My Service History Help When Selling A Car?",
      answer:
        "Yes. Buyers often ask for proof of maintenance. With CarCare Diary, you can send a single link that shows the complete, timestamped service record. There is nothing to print or compile - the record is already there as you logged it.",
    },
    {
      question: "Can I Share The History With My Mechanic?",
      answer:
        "Yes. Sending the link to a mechanic before a service appointment gives them the full service history in advance - they can see what was done last time, what parts were used, and what notes were recorded. This can reduce the time spent diagnosing or explaining at the appointment.",
    },
    {
      question: "Is CarCare Diary Free?",
      answer:
        "CarCare Diary is free for one vehicle, including the shareable history feature. Paid plans are available for tracking multiple vehicles.",
    },
  ],
  seo: {
    title: "Share Car Maintenance History with a Public Link | CarCare Diary",
    description:
      "Share a clean car maintenance history with buyers, family members or mechanics using CarCare Diary's mobile app and public service history link.",
    path: "/share-car-maintenance-history",
    jsonLdSoftwareDescription:
      "Share your car maintenance history with a public read-only link. Generated from your service log in the CarCare Diary mobile app.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Share car maintenance history",
    titleAccent: "with a simple public link",
    body:
      "CarCare Diary generates a read-only public link to your vehicle's complete maintenance record. Send it to a buyer, a mechanic, or a family member - they can view the full history in their browser without installing anything.",
    subline: "Free for iPhone & Android",
    imageAlt:
      "CarCare Diary shared vehicle service history page showing maintenance records in a browser",
  },
  whyItHelps: {
    eyebrow: "Why it matters",
    heading: "Why sharing your service history helps when selling",
    intro:
      "Buyers make decisions faster and with more confidence when they can verify a car's maintenance history themselves. A shareable link does that in seconds.",
    cards: [
      {
        title: "Builds trust before the viewing",
        body: "Send the history link with your listing or in your first message. Buyers arrive already confident in the car's maintenance record.",
      },
      {
        title: "Removes 'take my word for it'",
        body: "A timestamped log with real dates and mileage is more credible than a verbal summary. Every entry was recorded at the time of service.",
      },
      {
        title: "Nothing to print or compile",
        body: "The record is already built. Tap share in the app, copy the link, and send it. No folders to gather, no photos to take.",
      },
    ],
  },
  whatItShows: {
    eyebrow: "What's included",
    heading: "What the shared history page shows",
    intro:
      "The shared link shows a read-only view of your vehicle's complete log - everything you have recorded in the app, presented cleanly for anyone viewing it.",
    items: [
      { label: "Vehicle profile", detail: "Make, model, year, and any notes you have added about the vehicle." },
      {
        label: "All service entries",
        detail: "Every logged maintenance event - oil changes, brakes, filters, tyres, fluids, and any custom entry types.",
      },
      {
        label: "Mileage at each service",
        detail: "Odometer reading linked to each log entry, showing exactly when each service was performed relative to the car's usage.",
      },
      { label: "Specs and notes", detail: "Oil grade, part numbers, mechanic observations, and any other notes recorded per entry." },
      {
        label: "Maintenance categories",
        detail: "History organized by service type - easy to see which categories have been covered and how recently.",
      },
      { label: "A single shareable URL", detail: "The shared page lives at a permanent public URL. No app needed to view it. Works on any browser." },
    ],
    screenshotAlt: "CarCare Diary service log view showing maintenance history organized by category",
  },
  readOnly: {
    heading: "Read-only - you stay in control",
    intro: "The shared link is strictly read-only. The viewer cannot edit, delete, or add anything to your maintenance record.",
    points: [
      "Viewer sees history only - no editing capability",
      "No account required to view the shared page",
      "You control what is logged in the app",
      "Revoke or regenerate the link at any time",
      "The link reflects your log as it currently stands",
      "Works in any browser on desktop or mobile",
    ],
  },
  whoItsFor: {
    eyebrow: "Who uses it",
    heading: "Useful for buyers, family members, and mechanics",
    personas: [
      {
        who: "Private car sellers",
        body: "Share the full service history with every enquiry. Buyers see the record before they arrive, reducing time spent on viewings for vehicles that aren't right for them.",
      },
      {
        who: "Mechanics and garages",
        body: "Send the link before bringing the car in. The mechanic can review what has been done, what parts were used, and what notes were recorded - before the vehicle arrives.",
      },
      {
        who: "Families with shared vehicles",
        body: "Keep everyone in the household informed about a shared car's maintenance status without needing to grant app access. The shared link is always up to date.",
      },
    ],
    relatedPrefix: "Related:",
    relatedLinks: [
      { to: "/car-service-history-app", label: "car service history app" },
      { to: "/blog/best-car-maintenance-apps", label: "best car maintenance apps" },
    ],
  },
  faqHeading: "Questions about sharing your maintenance history",
  cta: {
    heading: "Build a service history worth sharing",
    body: "CarCare Diary is free for iPhone and Android. Start logging your services today and have a shareable history ready when you need it.",
  },
};