import type {
  FaqItem,
  FleetManagementAppCopy,
} from "../fleetManagementApp/types";

export type { FaqItem };
export type StepItem = { number: string; title: string; body: string };

export type FleetMaintenanceAppCopy = {
  pageFaqs: readonly FaqItem[];
  seo: FleetManagementAppCopy["seo"];
  hero: FleetManagementAppCopy["hero"];
  features: FleetManagementAppCopy["features"];
  steps: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly StepItem[];
  };
  who: FleetManagementAppCopy["who"];
  lightweight: FleetManagementAppCopy["lightweight"];
  faq: FleetManagementAppCopy["faq"];
  cta: FleetManagementAppCopy["cta"];
};
