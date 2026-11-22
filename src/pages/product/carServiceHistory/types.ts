import type { FaqItem } from "../carMaintenanceTracker/types";

export type CarServiceHistoryCopy = {
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
  };
  whyItMatters: {
    eyebrow: string;
    heading: string;
    intro: string;
    problems: readonly { title: string; description: string }[];
  };
  whatBelongs: {
    eyebrow: string;
    heading: string;
    intro: string;
    serviceTypes: readonly { name: string; details: string }[];
    detailLinePrefix: string;
    detailLineHighlight1: string;
    detailLineHighlight2: string;
    detailLineHighlight3: string;
    detailLineHighlight4: string;
    detailLineSuffix: string;
    guidePrefix: string;
    guideLinkLabel: string;
    guidePath: string;
  };
  howItHelps: {
    eyebrow: string;
    heading: string;
    intro: string;
    outcomes: readonly { title: string; description: string }[];
    trackerPrefix: string;
    trackerLinkLabel: string;
    trackerPath: string;
  };
  resale: {
    eyebrow: string;
    heading: string;
    body1: string;
    body2: string;
    bullets: readonly string[];
  };
  images: {
    categoriesAlt: string;
    sharedAlt: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    link1Label: string;
    link1Path: string;
    link2Label: string;
    link2Path: string;
    link3Label: string;
    link3Path: string;
  };
};
