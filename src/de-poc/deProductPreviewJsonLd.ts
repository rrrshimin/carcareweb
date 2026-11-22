import { landingStrings } from "../pages/landing/landingStrings";
import { carMaintenanceTrackerCopyDe } from "../pages/product/carMaintenanceTracker/copyDe";
import { carServiceHistoryCopyDe } from "../pages/product/carServiceHistory/copyDe";
import { carServiceHistoryAppCopyDe } from "../pages/product/carServiceHistoryApp/copyDe";
import { vehicleMaintenanceLogCopyDe } from "../pages/product/vehicleMaintenanceLog/copyDe";
import { vehicleServiceReminderCopyDe } from "../pages/product/vehicleServiceReminder/copyDe";
import { shareCarMaintenanceHistoryCopyDe } from "../pages/product/shareCarMaintenanceHistory/copyDe";
import { howCarCareDiaryWorksCopyDe } from "../pages/product/howCarCareDiaryWorks/copyDe";
import { fleetManagementAppCopyDe } from "../pages/product/fleetManagementApp/copyDe";
import { fleetMaintenanceAppCopyDe } from "../pages/product/fleetMaintenanceApp/copyDe";
import { smallBusinessFleetManagementAppCopyDe } from "../pages/product/smallBusinessFleetManagementApp/copyDe";
import { carRentalFleetMaintenanceAppCopyDe } from "../pages/product/carRentalFleetMaintenanceApp/copyDe";
import { vehicleMaintenanceAppForDealersCopyDe } from "../pages/product/vehicleMaintenanceAppForDealers/copyDe";
import { getDeProductPreviewSeo } from "./deProductPreviewMeta";

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

type ProductDeCopy = {
  seo: { jsonLdSoftwareDescription: string };
  faqs: readonly { question: string; answer: string }[];
};

const PRODUCT_COPY_BY_PATH: Record<string, ProductDeCopy> = {
  "/de/autowartung-app": {
    seo: carMaintenanceTrackerCopyDe.seo,
    faqs: carMaintenanceTrackerCopyDe.pageFaqs,
  },
  "/de/wartungshistorie-auto": {
    seo: carServiceHistoryCopyDe.seo,
    faqs: carServiceHistoryCopyDe.pageFaqs,
  },
  "/de/digitales-serviceheft-app": {
    seo: carServiceHistoryAppCopyDe.seo,
    faqs: carServiceHistoryAppCopyDe.pageFaqs,
  },
  "/de/wartungsprotokoll-auto": {
    seo: vehicleMaintenanceLogCopyDe.seo,
    faqs: vehicleMaintenanceLogCopyDe.faq.items,
  },
  "/de/wartungserinnerung-auto": {
    seo: vehicleServiceReminderCopyDe.seo,
    faqs: vehicleServiceReminderCopyDe.pageFaqs,
  },
  "/de/wartungshistorie-teilen": {
    seo: shareCarMaintenanceHistoryCopyDe.seo,
    faqs: shareCarMaintenanceHistoryCopyDe.pageFaqs,
  },
  "/de/so-funktioniert-carcare-diary": {
    seo: howCarCareDiaryWorksCopyDe.seo,
    faqs: howCarCareDiaryWorksCopyDe.pageFaqs,
  },
  "/de/fuhrparkmanagement-app": {
    seo: fleetManagementAppCopyDe.seo,
    faqs: fleetManagementAppCopyDe.pageFaqs,
  },
  "/de/fuhrpark-wartung-app": {
    seo: fleetMaintenanceAppCopyDe.seo,
    faqs: fleetMaintenanceAppCopyDe.pageFaqs,
  },
  "/de/fuhrparkverwaltung-kleine-unternehmen": {
    seo: smallBusinessFleetManagementAppCopyDe.seo,
    faqs: smallBusinessFleetManagementAppCopyDe.pageFaqs,
  },
  "/de/mietwagen-wartung": {
    seo: carRentalFleetMaintenanceAppCopyDe.seo,
    faqs: carRentalFleetMaintenanceAppCopyDe.pageFaqs,
  },
  "/de/wartungsdokumentation-autohandel": {
    seo: vehicleMaintenanceAppForDealersCopyDe.seo,
    faqs: vehicleMaintenanceAppForDealersCopyDe.pageFaqs,
  },
};

/** JSON-LD for DE product preview SSG head injection. */
export function getDeProductPreviewJsonLd(path: string): Record<string, unknown>[] {
  if (path === "/de") {
    const str = landingStrings.de;
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
  const seo = getDeProductPreviewSeo(path);
  if (!seo) {
    throw new Error(`No DE product preview SEO for path: ${path}`);
  }

  const description = product?.seo.jsonLdSoftwareDescription ?? seo.description;
  const software = softwareApp(description);
  if (product?.faqs.length) {
    return [software, faqPage(product.faqs)];
  }
  return [software];
}