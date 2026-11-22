import { landingStrings } from "../pages/landing/landingStrings";
import { carMaintenanceTrackerCopyFr } from "../pages/product/carMaintenanceTracker/copyFr";
import { carServiceHistoryCopyFr } from "../pages/product/carServiceHistory/copyFr";
import { carServiceHistoryAppCopyFr } from "../pages/product/carServiceHistoryApp/copyFr";
import { vehicleMaintenanceLogCopyFr } from "../pages/product/vehicleMaintenanceLog/copyFr";
import { vehicleServiceReminderCopyFr } from "../pages/product/vehicleServiceReminder/copyFr";
import { shareCarMaintenanceHistoryCopyFr } from "../pages/product/shareCarMaintenanceHistory/copyFr";
import { howCarCareDiaryWorksCopyFr } from "../pages/product/howCarCareDiaryWorks/copyFr";
import { fleetManagementAppCopyFr } from "../pages/product/fleetManagementApp/copyFr";
import { fleetMaintenanceAppCopyFr } from "../pages/product/fleetMaintenanceApp/copyFr";
import { smallBusinessFleetManagementAppCopyFr } from "../pages/product/smallBusinessFleetManagementApp/copyFr";
import { carRentalFleetMaintenanceAppCopyFr } from "../pages/product/carRentalFleetMaintenanceApp/copyFr";
import { vehicleMaintenanceAppForDealersCopyFr } from "../pages/product/vehicleMaintenanceAppForDealers/copyFr";
import { getFrProductPreviewSeo } from "./frProductPreviewMeta";

const OFFER_ZERO = { "@type": "Offer", price: "0", priceCurrency: "USD" };

function softwareApp(description: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CarCare Diary",
    url: "https://www.carcarediary.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    description,
    offers: OFFER_ZERO,
  };
}

function faqPage(items: readonly { question: string; answer: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

type ProductFrCopy = {
  seo: { jsonLdSoftwareDescription: string };
  faqs: readonly { question: string; answer: string }[];
};

const PRODUCT_COPY_BY_PATH: Record<string, ProductFrCopy> = {
  "/fr/suivi-entretien-voiture": {
    seo: carMaintenanceTrackerCopyFr.seo,
    faqs: carMaintenanceTrackerCopyFr.pageFaqs,
  },
  "/fr/historique-entretien-voiture": {
    seo: carServiceHistoryCopyFr.seo,
    faqs: carServiceHistoryCopyFr.pageFaqs,
  },
  "/fr/application-carnet-entretien-voiture": {
    seo: carServiceHistoryAppCopyFr.seo,
    faqs: carServiceHistoryAppCopyFr.pageFaqs,
  },
  "/fr/carnet-entretien-voiture": {
    seo: vehicleMaintenanceLogCopyFr.seo,
    faqs: vehicleMaintenanceLogCopyFr.faq.items,
  },
  "/fr/rappel-entretien-voiture": {
    seo: vehicleServiceReminderCopyFr.seo,
    faqs: vehicleServiceReminderCopyFr.pageFaqs,
  },
  "/fr/partager-historique-entretien-voiture": {
    seo: shareCarMaintenanceHistoryCopyFr.seo,
    faqs: shareCarMaintenanceHistoryCopyFr.pageFaqs,
  },
  "/fr/comment-fonctionne-carcare-diary": {
    seo: howCarCareDiaryWorksCopyFr.seo,
    faqs: howCarCareDiaryWorksCopyFr.pageFaqs,
  },
  "/fr/gestion-entretien-flotte": {
    seo: fleetManagementAppCopyFr.seo,
    faqs: fleetManagementAppCopyFr.pageFaqs,
  },
  "/fr/application-entretien-flotte": {
    seo: fleetMaintenanceAppCopyFr.seo,
    faqs: fleetMaintenanceAppCopyFr.pageFaqs,
  },
  "/fr/suivi-entretien-vehicules-entreprise": {
    seo: smallBusinessFleetManagementAppCopyFr.seo,
    faqs: smallBusinessFleetManagementAppCopyFr.pageFaqs,
  },
  "/fr/entretien-flotte-location-voitures": {
    seo: carRentalFleetMaintenanceAppCopyFr.seo,
    faqs: carRentalFleetMaintenanceAppCopyFr.pageFaqs,
  },
  "/fr/carnet-entretien-voitures-professionnels": {
    seo: vehicleMaintenanceAppForDealersCopyFr.seo,
    faqs: vehicleMaintenanceAppForDealersCopyFr.pageFaqs,
  },
};

/** JSON-LD for FR product production SSG head injection. */
export function getFrProductPreviewJsonLd(path: string): Record<string, unknown>[] {
  if (path === "/fr") {
    const str = landingStrings.fr;
    return [
      {
        ...softwareApp(str.seoJsonLd.softwareAppDescription),
        image: "https://www.carcarediary.com/og-image.png",
        installUrl: "https://play.google.com/store/apps/details?id=com.carcarediary.app",
      },
      { "@context": "https://schema.org", "@type": "WebSite", name: "CarCare Diary", url: "https://www.carcarediary.com" },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "CarCare Diary",
        url: "https://www.carcarediary.com",
        email: "hello@carcarediary.com",
      },
      faqPage(str.landingFaq.items),
    ];
  }

  const product = PRODUCT_COPY_BY_PATH[path];
  const seo = getFrProductPreviewSeo(path);
  if (!seo) {
    throw new Error(`No FR product SEO for path: ${path}`);
  }

  const description = product?.seo.jsonLdSoftwareDescription ?? seo.description;
  const software = softwareApp(description);
  if (product?.faqs.length) {
    return [software, faqPage(product.faqs)];
  }
  return [software];
}