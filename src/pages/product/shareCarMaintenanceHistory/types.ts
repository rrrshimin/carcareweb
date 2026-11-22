export type FaqItem = { question: string; answer: string };

export type ShareCarMaintenanceHistoryCopy = {
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
  whyItHelps: {
    eyebrow: string;
    heading: string;
    intro: string;
    cards: readonly { title: string; body: string }[];
  };
  whatItShows: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly { label: string; detail: string }[];
    screenshotAlt: string;
  };
  readOnly: {
    heading: string;
    intro: string;
    points: readonly string[];
  };
  whoItsFor: {
    eyebrow: string;
    heading: string;
    personas: readonly { who: string; body: string }[];
    relatedPrefix: string;
    relatedLinks: readonly { to: string; label: string }[];
  };
  faqHeading: string;
  cta: { heading: string; body: string };
};