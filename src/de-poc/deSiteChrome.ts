import type { HreflangAlternate } from "../lib/pageSeoHead";
import { EN_TO_FR_PRODUCT_PATH } from "../fr-poc/frSiteChrome";
import { DE_PRODUCT_PREVIEW_PATHS } from "./deProductPreviewMeta";

export const DE_HOME_PATH = "/de";

export const DE_PRODUCT_PATHS = DE_PRODUCT_PREVIEW_PATHS;

/** EN path → localized DE marketing path (MANIFEST.csv). */
export const EN_TO_DE_PRODUCT_PATH: Record<string, (typeof DE_PRODUCT_PATHS)[number]> = {
  "/": DE_HOME_PATH,
  "/car-maintenance-tracker": "/de/autowartung-app",
  "/car-service-history": "/de/wartungshistorie-auto",
  "/car-service-history-app": "/de/digitales-serviceheft-app",
  "/vehicle-maintenance-log": "/de/wartungsprotokoll-auto",
  "/vehicle-service-reminder-app": "/de/wartungserinnerung-auto",
  "/share-car-maintenance-history": "/de/wartungshistorie-teilen",
  "/how-carcare-diary-works": "/de/so-funktioniert-carcare-diary",
  "/fleet-management-app": "/de/fuhrparkmanagement-app",
  "/fleet-maintenance-app": "/de/fuhrpark-wartung-app",
  "/small-business-fleet-management-app": "/de/fuhrparkverwaltung-kleine-unternehmen",
  "/car-rental-fleet-maintenance-app": "/de/mietwagen-wartung",
  "/vehicle-maintenance-app-for-dealers": "/de/wartungsdokumentation-autohandel",
};

const DE_TO_EN_PRODUCT_PATH: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_DE_PRODUCT_PATH).map(([en, de]) => [de, en]),
);

function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function isDeProductSitePath(pathname: string): boolean {
  return (DE_PRODUCT_PATHS as readonly string[]).includes(stripTrailingSlash(pathname));
}

/** DE product marketing shell (localized nav/footer). */
export function isDeLocalizedMarketingPath(pathname: string): boolean {
  return isDeProductSitePath(pathname);
}

/** Preview hreflang: en + fr (when mapped) + de + x-default en. */
export function dePocProductHreflangAlternates(path: string): readonly HreflangAlternate[] | undefined {
  const normalized = stripTrailingSlash(path);
  const de = EN_TO_DE_PRODUCT_PATH[normalized];
  if (de) {
    const fr = EN_TO_FR_PRODUCT_PATH[normalized];
    const alts: HreflangAlternate[] = [
      { hreflang: "en", path: normalized },
      { hreflang: "de", path: de },
      { hreflang: "x-default", path: normalized },
    ];
    if (fr) alts.splice(1, 0, { hreflang: "fr", path: fr });
    return alts;
  }
  const en = DE_TO_EN_PRODUCT_PATH[normalized];
  if (en) {
    const fr = EN_TO_FR_PRODUCT_PATH[en];
    const alts: HreflangAlternate[] = [
      { hreflang: "en", path: en },
      { hreflang: "de", path: normalized },
      { hreflang: "x-default", path: en },
    ];
    if (fr) alts.splice(1, 0, { hreflang: "fr", path: fr });
    return alts;
  }
  return undefined;
}

export const DE_SITE = {
  breadcrumbHome: "Startseite",
  header: {
    features: "Funktionen",
    howItWorks: "So funktioniert's",
    faq: "FAQ",
    forBusiness: "Für Unternehmen",
    downloadApp: "App herunterladen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  footer: {
    tagline:
      "Wartung, Kilometerstand, Erinnerungen und Fahrzeughistorie - übersichtlich in einer App.",
    product: "Produkt",
    guides: "Ratgeber",
    help: "Hilfe",
    legal: "Rechtliches",
    allRights: "Alle Rechte vorbehalten.",
  },
  store: {
    appStoreKicker: "Laden im",
    appStoreName: "App Store",
    appStoreAria: "CarCare Diary im App Store herunterladen",
    playKicker: "JETZT BEI",
    playName: "Google Play",
    playAria: "CarCare Diary bei Google Play herunterladen",
  },
  mobileBanner: {
    title: "CarCare Diary App herunterladen",
    dismiss: "Schließen",
    freeOnAppStore: "Kostenlos im App Store",
    freeOnPlay: "Kostenlos bei Google Play",
    get: "Laden",
  },
} as const;

export const DE_FOOTER_PRODUCT_LINKS = [
  { to: "/de/autowartung-app", label: "Autowartung-App" },
  { to: "/de/wartungshistorie-auto", label: "Wartungshistorie" },
  { to: "/de/digitales-serviceheft-app", label: "Digitales Serviceheft" },
  { to: "/de/wartungserinnerung-auto", label: "Wartungserinnerungen" },
  { to: "/de/wartungshistorie-teilen", label: "Wartungshistorie teilen" },
  { to: "/de/wartungsprotokoll-auto", label: "Wartungsprotokoll" },
  { to: "/de/fuhrparkmanagement-app", label: "Fuhrparkmanagement-App" },
  { to: "/de/fuhrpark-wartung-app", label: "Fuhrpark-Wartung" },
  { to: "/de/fuhrparkverwaltung-kleine-unternehmen", label: "Fuhrpark für kleine Unternehmen" },
  { to: "/de/mietwagen-wartung", label: "Wartung von Mietwagen" },
  { to: "/de/wartungsdokumentation-autohandel", label: "Autohandel und Wiederverkauf" },
  { to: "/de/so-funktioniert-carcare-diary", label: "So funktioniert CarCare Diary" },
] as const;

/** Guide links → published EN blog until DE guides exist. */
export const DE_FOOTER_GUIDE_LINKS = [
  { to: "/blog", label: "Alle Ratgeber" },
  { to: "/blog/car-maintenance-checklist", label: "Wartungscheckliste" },
  { to: "/blog/how-to-track-car-maintenance", label: "Wartung dokumentieren" },
  { to: "/blog/what-to-include-in-a-car-service-history", label: "Was gehört in die Wartungshistorie?" },
  { to: "/blog/how-to-keep-car-service-records-organized", label: "Wartungsunterlagen ordnen" },
] as const;

export const DE_HELP_LINKS = [
  { to: "/help", label: "Hilfe-Center" },
  { to: "/help/getting-started-with-carcare-diary", label: "Erste Schritte" },
  { to: "/help/how-to-log-your-first-service", label: "Ersten Wartungseintrag erstellen" },
  { to: "/help/how-to-share-your-vehicle-history", label: "Fahrzeughistorie teilen" },
  { to: "/support", label: "Support kontaktieren" },
] as const;

export const DE_LEGAL_LINKS = [
  { to: "/privacy", label: "Datenschutzerklärung" },
  { to: "/terms", label: "Nutzungsbedingungen" },
] as const;