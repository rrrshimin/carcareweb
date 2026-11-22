export type VehicleMaintenanceLogLocale = "en" | "fr";

export type VehicleMaintenanceLogFaq = { question: string; answer: string };

export type VehicleMaintenanceLogExample = {
  type: string;
  detail: string;
  note: string;
  date: string;
  mileage: string;
};

export type VehicleMaintenanceLogCopy = {
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
  };
  whatIsALog: {
    eyebrow: string;
    heading: string;
    paragraphs: readonly string[];
    guideLink: { to: string; label: string };
  };
  whatToLog: {
    eyebrow: string;
    heading: string;
    intro: string;
    fields: readonly { title: string; description: string }[];
    illustrationAlt: string;
  };
  whyLoggingHelps: {
    eyebrow: string;
    heading: string;
    intro: string;
    outcomes: readonly { title: string; description: string }[];
    analyticsImageAlt: string;
  };
  howCarCareHelps: {
    eyebrow: string;
    heading: string;
    intro: string;
    cards: readonly { title: string; body: string }[];
    relatedLinks: readonly { to: string; label: string }[];
  };
  exampleEntries: {
    eyebrow: string;
    heading: string;
    intro: string;
    closing: string;
    entries: readonly VehicleMaintenanceLogExample[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly VehicleMaintenanceLogFaq[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    links: readonly { to: string; label: string }[];
  };
};
