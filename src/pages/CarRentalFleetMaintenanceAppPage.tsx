import { useMemo } from "react";
import { usePageSeo } from "../lib/usePageSeo";
import { ProductPageShell } from "./product/ProductPageShell";
import { CarRentalFleetMaintenanceAppView } from "./product/carRentalFleetMaintenanceApp/CarRentalFleetMaintenanceAppView";
import { carRentalFleetMaintenanceAppCopyEn } from "./product/carRentalFleetMaintenanceApp/copyEn";

const JSON_LD_BASE = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CarCare Diary",
    url: "https://www.carcarediary.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
] as const;

export default function CarRentalFleetMaintenanceAppPage() {
  const copy = carRentalFleetMaintenanceAppCopyEn;
  const jsonLd = useMemo(
    () => [
      { ...JSON_LD_BASE[0], description: copy.seo.jsonLdSoftwareDescription },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: copy.pageFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
    [copy.pageFaqs, copy.seo.jsonLdSoftwareDescription],
  );

  usePageSeo({ title: copy.seo.title, description: copy.seo.description, path: copy.seo.path, jsonLd });

  return (
    <ProductPageShell>
      <CarRentalFleetMaintenanceAppView copy={copy} />
    </ProductPageShell>
  );
}