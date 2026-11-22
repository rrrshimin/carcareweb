export type FaqItem = { question: string; answer: string };
export type TextLink = { to: string; label: string };
export type FeatureItem = { title: string; description: string };
export type PersonaItem = { title: string; description: string };

export type FleetManagementAppCopy = {
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
  features: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly FeatureItem[];
    secondaryImageAlt: string;
  };
  compare: {
    eyebrow: string;
    heading: string;
    intro: string;
    withoutLabel: string;
    withLabel: string;
    without: readonly string[];
    with: readonly string[];
  };
  who: {
    eyebrow: string;
    heading: string;
    intro: string;
    personas: readonly PersonaItem[];
  };
  lightweight: {
    eyebrow: string;
    heading: string;
    body1: string;
    body2: string;
    enterpriseLabel: string;
    ccdLabel: string;
    enterprise: readonly string[];
    ccd: readonly string[];
    relatedPrefix: string;
    links: readonly TextLink[];
  };
  faq: { eyebrow: string; heading: string; intro: string };
  cta: { eyebrow: string; heading: string; body: string; links: readonly TextLink[] };
};
