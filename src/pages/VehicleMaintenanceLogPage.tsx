import { useMemo } from "react";
import { usePageSeo } from "../lib/usePageSeo";
import { ProductPageShell } from "./product/ProductPageShell";
import { VehicleMaintenanceLogView } from "./product/vehicleMaintenanceLog/VehicleMaintenanceLogView";
import {
  maintenanceLogFaqsEn,
  vehicleMaintenanceLogCopyEn,
} from "./product/vehicleMaintenanceLog/copyEn";

/** @deprecated Re-export for any external imports; prefer maintenanceLogFaqsEn */
export const maintenanceLogFaqs = maintenanceLogFaqsEn;

const JSON_LD_BASE = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CarCare Diary",
    url: "https://www.carcarediary.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
] as const;

export default function VehicleMaintenanceLogPage() {
  const copy = vehicleMaintenanceLogCopyEn;
  const jsonLd = useMemo(
    () => [
      { ...JSON_LD_BASE[0], description: copy.seo.jsonLdSoftwareDescription },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: copy.faq.items.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
    [copy.faq.items, copy.seo.jsonLdSoftwareDescription],
  );

  usePageSeo({
    title: copy.seo.title,
    description: copy.seo.description,
    path: copy.seo.path,
    jsonLd,
  });

  return (
    <ProductPageShell>
      <VehicleMaintenanceLogView copy={copy} />
    </ProductPageShell>
  );
}
