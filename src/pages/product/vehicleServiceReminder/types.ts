export type FaqItem = { question: string; answer: string };

export type VehicleServiceReminderCopy = {
  pageFaqs: readonly FaqItem[];
  seo: {
    title: string;
    description: string;
    path: string;
    jsonLdSoftwareDescription: string;
  };
  hero: {
    eyebrow: string;
    titleLine: string;
    titleAccent: string;
    body: string;
    subline: string;
    imageAlt: string;
  };
  problem: {
    eyebrow: string;
    heading: string;
    intro: string;
    cards: readonly { title: string; body: string }[];
  };
  reminderTypes: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly { title: string; body: string }[];
    screenshotAlt: string;
  };
  dueOverdue: {
    eyebrow: string;
    heading: string;
    intro: string;
    statuses: readonly { label: string; body: string; tone: "ok" | "soon" | "late" }[];
    callout: string;
  };
  mileage: {
    eyebrow: string;
    heading: string;
    body: string;
    bullets: readonly string[];
    imageAlt: string;
    relatedPrefix: string;
    relatedLinks: readonly { to: string; label: string }[];
  };
  faqHeading: string;
  cta: {
    heading: string;
    body: string;
  };
};