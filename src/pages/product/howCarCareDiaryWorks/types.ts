import type { FaqItem, TextLink } from "../fleetManagementApp/types";

export type PlanItem = { name: string; tagline: string; features: readonly string[] };

export type HowCarCareDiaryWorksCopy = {
  pageFaqs: readonly FaqItem[];
  seo: {
    title: string;
    description: string;
    path: string;
    jsonLdSoftwareDescription: string;
  };
  hero: {
    titleLine: string;
    titleAccent: string;
    body: string;
    subline: string;
  };
  whatItIs: { paragraphs: readonly string[] };
  steps: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly { number: string; title: string; body: string }[];
  };
  track: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly string[];
    guideLink: TextLink;
  };
  reminders: {
    eyebrow: string;
    heading: string;
    paragraphs: readonly string[];
    guideLink: TextLink;
  };
  sharing: {
    eyebrow: string;
    heading: string;
    paragraphs: readonly string[];
    links: readonly TextLink[];
  };
  plans: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly PlanItem[];
  };
  faq: { eyebrow: string; heading: string; intro: string };
  cta: { eyebrow: string; heading: string; body: string; links: readonly TextLink[] };
};
