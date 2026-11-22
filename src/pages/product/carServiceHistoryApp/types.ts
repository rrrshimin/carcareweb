export type FaqItem = { question: string; answer: string };

export type CarServiceHistoryAppCopy = {
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
    addingLogAlt: string;
    categoriesAlt: string;
  };
  whyItMatters: {
    eyebrow: string;
    heading: string;
    intro: string;
    points: readonly { title: string; body: string }[];
  };
  whatYouCanTrack: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly { label: string; detail: string }[];
  };
  shareableHistory: {
    eyebrow: string;
    heading: string;
    intro: string;
    bullets: readonly string[];
    moreOnSharingLabel: string;
    shareLink: { to: string; label: string };
    imageAlt: string;
  };
  betterThanScattered: {
    eyebrow: string;
    heading: string;
    intro: string;
    withoutHeading: string;
    withHeading: string;
    withoutItems: readonly string[];
    withItems: readonly string[];
    relatedPrefix: string;
    relatedLinks: readonly { to: string; label: string }[];
  };
  faqHeading: string;
  cta: { heading: string; body: string };
};