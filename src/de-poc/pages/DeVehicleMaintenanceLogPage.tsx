import { useMemo } from "react";
import { mergeDeAlternatesForSsg } from "../dePublishing";
import { getDeProductPreviewSeo } from "../deProductPreviewMeta";
import { usePageSeo } from "../../lib/usePageSeo";
import { ProductPageShell } from "../../pages/product/ProductPageShell";
import { VehicleMaintenanceLogView } from "../../pages/product/vehicleMaintenanceLog/VehicleMaintenanceLogView";
import { vehicleMaintenanceLogCopyDe } from "../../pages/product/vehicleMaintenanceLog/copyDe";

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

export default function DeVehicleMaintenanceLogPage() {
  const copy = vehicleMaintenanceLogCopyDe;
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

  const baseSeo = getDeProductPreviewSeo(copy.seo.path)!;
  const seo = mergeDeAlternatesForSsg({ ...baseSeo, jsonLd });

  usePageSeo({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    lang: seo.lang,
    ogLocale: seo.ogLocale,
    alternates: seo.alternates,
    jsonLd: seo.jsonLd,
    noindex: Boolean(import.meta.env.VITE_DE_POC),
  });

  return (
    <ProductPageShell>
      <VehicleMaintenanceLogView copy={copy} />
    </ProductPageShell>
  );
}
