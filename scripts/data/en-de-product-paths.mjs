/** EN → DE product marketing paths (mirrors src/de-poc/deSiteChrome.ts EN_TO_DE_PRODUCT_PATH). */
export const EN_TO_DE_PRODUCT_PATH = {
  "/": "/de",
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

export const DE_TO_EN_PRODUCT_PATH = Object.fromEntries(
  Object.entries(EN_TO_DE_PRODUCT_PATH).map(([en, de]) => [de, en]),
);