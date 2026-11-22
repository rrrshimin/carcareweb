import type { PageSeoHeadOptions } from "../lib/pageSeoHead";
import { dePocProductHreflangAlternates } from "./deSiteChrome";

export const DE_PRODUCT_PREVIEW_PATHS = [
  "/de",
  "/de/autowartung-app",
  "/de/wartungshistorie-auto",
  "/de/digitales-serviceheft-app",
  "/de/wartungsprotokoll-auto",
  "/de/wartungserinnerung-auto",
  "/de/wartungshistorie-teilen",
  "/de/so-funktioniert-carcare-diary",
  "/de/fuhrparkmanagement-app",
  "/de/fuhrpark-wartung-app",
  "/de/fuhrparkverwaltung-kleine-unternehmen",
  "/de/mietwagen-wartung",
  "/de/wartungsdokumentation-autohandel",
] as const;

export const DE_PRODUCT_PREVIEW_ROUTED_PATHS = DE_PRODUCT_PREVIEW_PATHS;

export const DE_PRODUCT_BREADCRUMB_TITLE: Record<(typeof DE_PRODUCT_PREVIEW_PATHS)[number], string> = {
  "/de": "CarCare Diary Startseite (DE)",
  "/de/autowartung-app": "Autowartung-App",
  "/de/wartungshistorie-auto": "Wartungshistorie",
  "/de/digitales-serviceheft-app": "Digitales Serviceheft",
  "/de/wartungsprotokoll-auto": "Wartungsprotokoll",
  "/de/wartungserinnerung-auto": "Wartungserinnerung",
  "/de/wartungshistorie-teilen": "Wartungshistorie teilen",
  "/de/so-funktioniert-carcare-diary": "So funktioniert CarCare Diary",
  "/de/fuhrparkmanagement-app": "Fuhrparkmanagement",
  "/de/fuhrpark-wartung-app": "Fuhrpark-Wartung",
  "/de/fuhrparkverwaltung-kleine-unternehmen": "Fuhrpark kleine Unternehmen",
  "/de/mietwagen-wartung": "Mietwagen-Wartung",
  "/de/wartungsdokumentation-autohandel": "Wartungsdokumentation Autohandel",
};

export function getDeProductPreviewSeo(path: string): PageSeoHeadOptions | undefined {
  const seo = DE_PRODUCT_PREVIEW_SEO[path as keyof typeof DE_PRODUCT_PREVIEW_SEO];
  if (!seo) return undefined;
  return {
    ...seo,
    lang: "de",
    ogLocale: "de_DE",
    alternates: dePocProductHreflangAlternates(path),
  };
}

const DE_PRODUCT_PREVIEW_SEO: Record<
  (typeof DE_PRODUCT_PREVIEW_PATHS)[number],
  Omit<PageSeoHeadOptions, "lang" | "ogLocale" | "alternates">
> = {
  "/de": {
    title: "CarCare Diary - Autowartung-App mit digitalem Serviceheft",
    description:
      "Autowartung einfach dokumentieren: Serviceeinträge, Kilometerstand und Erinnerungen verwalten und deine Fahrzeughistorie teilen. Kostenlos für iPhone und Android.",
    path: "/de",
    ogType: "website",
  },
  "/de/autowartung-app": {
    title: "Autowartung-App: Wartungen, Kilometerstand & Erinnerungen | CarCare Diary",
    description:
      "Mit CarCare Diary Wartungen dokumentieren, Kilometerstand verfolgen und Erinnerungen erhalten. Alle Serviceeinträge und die Fahrzeughistorie an einem Ort.",
    path: "/de/autowartung-app",
  },
  "/de/wartungshistorie-auto": {
    title: "Wartungshistorie fürs Auto digital verwalten | CarCare Diary",
    description:
      "Die Wartungshistorie deines Autos an einem Ort: Serviceeinträge, Kilometerstände und Details dokumentieren und bei Bedarf per Link teilen.",
    path: "/de/wartungshistorie-auto",
  },
  "/de/digitales-serviceheft-app": {
    title: "Digitales Serviceheft als App für dein Auto | CarCare Diary",
    description:
      "Digitales Serviceheft auf dem Smartphone: Wartungen mit Datum, Kilometerstand und Notizen erfassen, übersichtlich verwalten und per Link teilen.",
    path: "/de/digitales-serviceheft-app",
  },
  "/de/wartungsprotokoll-auto": {
    title: "Wartungsprotokoll fürs Auto: Service & Kilometerstand | CarCare Diary",
    description:
      "Führe ein digitales Wartungsprotokoll mit Serviceeinträgen, Kilometerstand, Notizen und Erinnerungen. Alle Wartungen übersichtlich in CarCare Diary.",
    path: "/de/wartungsprotokoll-auto",
  },
  "/de/wartungserinnerung-auto": {
    title: "Wartungserinnerung fürs Auto nach Zeit & Kilometern | CarCare Diary",
    description:
      "Wartungserinnerungen nach Kilometerstand und Datum. Sieh mit CarCare Diary, welche Inspektionen und Servicearbeiten bald fällig oder überfällig sind.",
    path: "/de/wartungserinnerung-auto",
  },
  "/de/wartungshistorie-teilen": {
    title: "Wartungshistorie fürs Auto per Link teilen | CarCare Diary",
    description:
      "Teile die dokumentierte Wartungshistorie deines Autos mit Käufern, Familie oder Werkstätten - über einen öffentlichen, schreibgeschützten Link.",
    path: "/de/wartungshistorie-teilen",
  },
  "/de/so-funktioniert-carcare-diary": {
    title: "So funktioniert CarCare Diary - Autowartung einfach verwalten",
    description:
      "So nutzt du CarCare Diary: Fahrzeug hinzufügen, Wartungen erfassen, Kilometerstand aktualisieren, Erinnerungen erhalten und Servicehistorie teilen.",
    path: "/de/so-funktioniert-carcare-diary",
  },
  "/de/fuhrparkmanagement-app": {
    title: "Fuhrparkmanagement-App für Wartung & Service | CarCare Diary",
    description:
      "Fahrzeugwartung im Fuhrpark organisieren: Serviceeinträge, Kilometerstand, Erinnerungen und Historie pro Fahrzeug in einer einfachen App verwalten.",
    path: "/de/fuhrparkmanagement-app",
  },
  "/de/fuhrpark-wartung-app": {
    title: "Fuhrpark-Wartungs-App: Service & Erinnerungen | CarCare Diary",
    description:
      "Wartungen für mehrere Fahrzeuge dokumentieren. CarCare Diary bündelt Serviceprotokolle, Kilometerstand, Erinnerungen und Wartungskosten pro Fahrzeug.",
    path: "/de/fuhrpark-wartung-app",
  },
  "/de/fuhrparkverwaltung-kleine-unternehmen": {
    title: "Fuhrparkverwaltung für kleine Unternehmen | CarCare Diary",
    description:
      "Wartungen für Firmenwagen und Transporter verwalten: Serviceprotokolle, Kilometerstände, Erinnerungen und Fahrzeughistorien in einer einfachen mobilen App.",
    path: "/de/fuhrparkverwaltung-kleine-unternehmen",
  },
  "/de/mietwagen-wartung": {
    title: "Mietwagen-Wartung digital verwalten | CarCare Diary",
    description:
      "Wartungen, Kilometerstände und Serviceerinnerungen für Mietwagen dokumentieren. CarCare Diary hilft kleinen Autovermietungen, jedes Fahrzeug im Blick zu behalten.",
    path: "/de/mietwagen-wartung",
  },
  "/de/wartungsdokumentation-autohandel": {
    title: "Wartungsdokumentation für Autohändler | CarCare Diary",
    description:
      "Servicehistorien für Gebrauchtwagen dokumentieren und mit Käufern teilen. CarCare Diary erfasst Wartungen, Kilometerstände und Fahrzeugunterlagen pro Auto.",
    path: "/de/wartungsdokumentation-autohandel",
  },
};