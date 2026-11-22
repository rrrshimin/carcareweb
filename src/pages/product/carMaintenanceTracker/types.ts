export type FaqItem = { question: string; answer: string };

export type ListPersona = {
  title: string;
  description: string;
};

export type CarMaintenanceTrackerCopy = {
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
  whatItHelps: {
    eyebrow: string;
    heading: string;
    intro: string;
    benefits: readonly { title: string; description: string }[];
    guidePrefix: string;
    guideLinkLabel: string;
    guidePath: string;
  };
  appVsNotes: {
    eyebrow: string;
    heading: string;
    intro: string;
    withoutHeading: string;
    withHeading: string;
    oldWay: readonly string[];
    newWay: readonly string[];
  };
  whoItsFor: {
    eyebrow: string;
    heading: string;
    intro: string;
    personas: readonly ListPersona[];
    multiVehiclePrefix: string;
    fleetManagementLabel: string;
    fleetManagementPath: string;
    fleetMaintenanceLabel: string;
    fleetMaintenancePath: string;
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
  images: {
    carPageAlt: string;
    addingLogAlt: string;
  };
};
