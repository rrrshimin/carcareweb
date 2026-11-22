export type FaqItem = { question: string; answer: string };

export type SmbFleetPageCopy = {
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
  problem: { heading: string; body: string };
  features: {
    heading: string;
    intro: string;
    items: readonly { title: string; description: string }[];
  };
  useCases: {
    heading: string;
    items: readonly { title: string; detail: string }[];
  };
  lightweight: {
    heading: string;
    intro: string;
    withoutLabel: string;
    withLabel: string;
    without: readonly string[];
    with: readonly string[];
    calloutPrefix: string;
    calloutLinks: readonly { to: string; label: string }[];
  };
  faqHeading: string;
  cta: {
    heading: string;
    body: string;
    alsoSeePrefix: string;
    links: readonly { to: string; label: string }[];
  };
};