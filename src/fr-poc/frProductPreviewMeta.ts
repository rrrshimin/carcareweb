/**
 * FR product SEO (13 localized marketing URLs). Title/description align with MANIFEST and approved drafts.
 */
import type { PageSeoHeadOptions } from "../lib/pageSeoHead";
import { frPocProductHreflangAlternates } from "./frSiteChrome";

export const FR_PRODUCT_PREVIEW_PATHS = [
  "/fr",
  "/fr/suivi-entretien-voiture",
  "/fr/historique-entretien-voiture",
  "/fr/application-carnet-entretien-voiture",
  "/fr/carnet-entretien-voiture",
  "/fr/rappel-entretien-voiture",
  "/fr/partager-historique-entretien-voiture",
  "/fr/comment-fonctionne-carcare-diary",
  "/fr/gestion-entretien-flotte",
  "/fr/application-entretien-flotte",
  "/fr/suivi-entretien-vehicules-entreprise",
  "/fr/entretien-flotte-location-voitures",
  "/fr/carnet-entretien-voitures-professionnels",
] as const;

/** Product paths with React routes + production SSG. */
export const FR_PRODUCT_PREVIEW_ROUTED_PATHS = FR_PRODUCT_PREVIEW_PATHS;

/** Short label for JSON-LD BreadcrumbList (position 3). */
export const FR_PRODUCT_BREADCRUMB_TITLE: Record<(typeof FR_PRODUCT_PREVIEW_PATHS)[number], string> = {
  "/fr": "Accueil produit CarCare Diary (FR)",
  "/fr/suivi-entretien-voiture": "Suivi d'entretien voiture",
  "/fr/historique-entretien-voiture": "Historique d'entretien voiture",
  "/fr/application-carnet-entretien-voiture": "Application carnet d'entretien voiture",
  "/fr/carnet-entretien-voiture": "Carnet d'entretien voiture numérique",
  "/fr/rappel-entretien-voiture": "Rappel d'entretien voiture",
  "/fr/partager-historique-entretien-voiture": "Partager l'historique d'entretien",
  "/fr/comment-fonctionne-carcare-diary": "Comment fonctionne CarCare Diary",
  "/fr/gestion-entretien-flotte": "Gestion d'entretien de flotte",
  "/fr/application-entretien-flotte": "Application d'entretien de flotte",
  "/fr/suivi-entretien-vehicules-entreprise": "Suivi d'entretien des véhicules d'entreprise",
  "/fr/entretien-flotte-location-voitures": "Entretien flotte location",
  "/fr/carnet-entretien-voitures-professionnels": "Carnet d'entretien pour professionnels",
};

export function getFrProductPreviewSeo(path: string): PageSeoHeadOptions | undefined {
  const seo = FR_PRODUCT_PREVIEW_SEO[path as keyof typeof FR_PRODUCT_PREVIEW_SEO];
  if (!seo) return undefined;
  return {
    ...seo,
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: frPocProductHreflangAlternates(path),
  };
}

const FR_PRODUCT_PREVIEW_SEO: Record<
  (typeof FR_PRODUCT_PREVIEW_PATHS)[number],
  Omit<PageSeoHeadOptions, "lang" | "ogLocale" | "alternates">
> = {
  "/fr": {
    title: "Application de suivi d'entretien voiture | CarCare Diary",
    description:
      "Suivez l'entretien de votre voiture : carnet d'entretien numérique, kilométrage, rappels et historique partageable. Application gratuite sur iPhone et Android.",
    path: "/fr",
    ogType: "website",
  },
  "/fr/suivi-entretien-voiture": {
    title: "Suivi d'entretien voiture : application et rappels | CarCare Diary",
    description:
      "Suivez les entretiens, le kilométrage et les rappels de votre voiture avec CarCare Diary. Carnet d'entretien organisé et historique partageable.",
    path: "/fr/suivi-entretien-voiture",
  },
  "/fr/historique-entretien-voiture": {
    title: "Historique d'entretien voiture : carnet et suivi | CarCare Diary",
    description:
      "Conservez l'historique d'entretien de votre voiture avec dates, kilométrages et interventions. Organisez et partagez vos informations avec CarCare Diary.",
    path: "/fr/historique-entretien-voiture",
  },
  "/fr/application-carnet-entretien-voiture": {
    title: "Application carnet d'entretien voiture | CarCare Diary",
    description:
      "Une application de carnet d'entretien pour enregistrer vidanges, réparations et kilométrage, recevoir des rappels et partager l'historique de votre voiture.",
    path: "/fr/application-carnet-entretien-voiture",
  },
  "/fr/carnet-entretien-voiture": {
    title: "Carnet d'entretien voiture numérique et gratuit | CarCare Diary",
    description:
      "Créez le carnet d'entretien numérique de votre voiture : interventions, kilométrages, notes et historique partageable. Application iPhone et Android.",
    path: "/fr/carnet-entretien-voiture",
  },
  "/fr/rappel-entretien-voiture": {
    title: "Rappel d'entretien voiture : appli kilométrage et dates | CarCare Diary",
    description:
      "Anticipez les vidanges, révisions et entretiens selon la date et le kilométrage. Suivez les échéances et activez les rappels avec CarCare Diary.",
    path: "/fr/rappel-entretien-voiture",
  },
  "/fr/partager-historique-entretien-voiture": {
    title: "Partager l'historique d'entretien d'une voiture | CarCare Diary",
    description:
      "Partagez l'historique d'entretien de votre voiture par lien public en lecture seule avec un acheteur, un proche ou un garagiste, sans créer de compte.",
    path: "/fr/partager-historique-entretien-voiture",
  },
  "/fr/comment-fonctionne-carcare-diary": {
    title: "Comment fonctionne CarCare Diary ? Suivi d'entretien voiture",
    description:
      "Découvrez CarCare Diary : ajoutez votre voiture, enregistrez les entretiens, suivez le kilométrage, consultez les rappels et partagez votre historique.",
    path: "/fr/comment-fonctionne-carcare-diary",
  },
  "/fr/gestion-entretien-flotte": {
    title: "Gestion d'entretien de flotte automobile | CarCare Diary",
    description:
      "Centralisez les carnets d'entretien, kilométrages et rappels des véhicules d'une petite flotte. Application de suivi d'entretien sur iPhone et Android.",
    path: "/fr/gestion-entretien-flotte",
  },
  "/fr/application-entretien-flotte": {
    title: "Application d'entretien de flotte : suivi et rappels | CarCare Diary",
    description:
      "Suivez les interventions, kilométrages et rappels d'une petite flotte depuis votre téléphone. Un carnet d'entretien par véhicule avec CarCare Diary.",
    path: "/fr/application-entretien-flotte",
  },
  "/fr/suivi-entretien-vehicules-entreprise": {
    title: "Suivi d'entretien des véhicules d'entreprise | CarCare Diary",
    description:
      "Suivez l'entretien de vos véhicules d'entreprise : interventions, kilométrages et rappels, sans GPS ni logiciel complexe. Application mobile CarCare Diary.",
    path: "/fr/suivi-entretien-vehicules-entreprise",
  },
  "/fr/entretien-flotte-location-voitures": {
    title: "Suivi d'entretien d'une flotte de voitures de location | CarCare Diary",
    description:
      "Gérez l'entretien des voitures de location : historiques par véhicule, kilométrages, échéances et dossiers partageables, depuis une application mobile.",
    path: "/fr/entretien-flotte-location-voitures",
  },
  "/fr/carnet-entretien-voitures-professionnels": {
    title: "Carnet d'entretien pour vendeurs de voitures | CarCare Diary",
    description:
      "Organisez les entretiens et kilométrages des véhicules à vendre. Partagez leur historique par lien avec les acheteurs, depuis CarCare Diary.",
    path: "/fr/carnet-entretien-voitures-professionnels",
  },
};
