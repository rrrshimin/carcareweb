/** EN ↔ FR product marketing paths (mirrors src/fr-poc/frSiteChrome.ts EN_TO_FR_PRODUCT_PATH). */
export const EN_TO_FR_PRODUCT_PATH = {
  "/": "/fr",
  "/car-maintenance-tracker": "/fr/suivi-entretien-voiture",
  "/car-service-history": "/fr/historique-entretien-voiture",
  "/car-service-history-app": "/fr/application-carnet-entretien-voiture",
  "/vehicle-maintenance-log": "/fr/carnet-entretien-voiture",
  "/vehicle-service-reminder-app": "/fr/rappel-entretien-voiture",
  "/share-car-maintenance-history": "/fr/partager-historique-entretien-voiture",
  "/how-carcare-diary-works": "/fr/comment-fonctionne-carcare-diary",
  "/fleet-management-app": "/fr/gestion-entretien-flotte",
  "/fleet-maintenance-app": "/fr/application-entretien-flotte",
  "/small-business-fleet-management-app": "/fr/suivi-entretien-vehicules-entreprise",
  "/car-rental-fleet-maintenance-app": "/fr/entretien-flotte-location-voitures",
  "/vehicle-maintenance-app-for-dealers": "/fr/carnet-entretien-voitures-professionnels",
};

export const FR_TO_EN_PRODUCT_PATH = Object.fromEntries(
  Object.entries(EN_TO_FR_PRODUCT_PATH).map(([en, fr]) => [fr, en]),
);