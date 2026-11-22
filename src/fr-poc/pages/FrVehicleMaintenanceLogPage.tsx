import { useMemo } from "react";
import { mergeFrAlternatesForSsg } from "../frPublishing";
import { getFrProductPreviewSeo } from "../frProductPreviewMeta";
import { usePageSeo } from "../../lib/usePageSeo";
import { ProductPageShell } from "../../pages/product/ProductPageShell";
import { VehicleMaintenanceLogView } from "../../pages/product/vehicleMaintenanceLog/VehicleMaintenanceLogView";
import { vehicleMaintenanceLogCopyFr } from "../../pages/product/vehicleMaintenanceLog/copyFr";
import { resolveFrGuideInternalHref } from "../frPublishing";

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

export default function FrVehicleMaintenanceLogPage() {
  const copy = vehicleMaintenanceLogCopyFr;
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

  const baseSeo = getFrProductPreviewSeo(copy.seo.path)!;
  const seo = mergeFrAlternatesForSsg({ ...baseSeo, jsonLd });

  usePageSeo({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    lang: seo.lang,
    ogLocale: seo.ogLocale,
    alternates: seo.alternates,
    jsonLd: seo.jsonLd,
  });

  return (
    <ProductPageShell>
      <VehicleMaintenanceLogView copy={copy} resolveInternalHref={resolveFrGuideInternalHref} />
    </ProductPageShell>
  );
}
