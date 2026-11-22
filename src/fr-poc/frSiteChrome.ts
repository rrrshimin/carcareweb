import type { LocalizedGuideRegistryEntry } from "../content/guides/types";
import type { HreflangAlternate } from "../lib/pageSeoHead";
import { SITE_URL } from "../lib/pageSeoHead";
import { FR_PRODUCT_PREVIEW_PATHS } from "./frProductPreviewMeta";

export const FR_BLOG_HUB_PATH = "/fr/blog";
/** Localized marketing home. */
export const FR_HOME_PATH = "/fr";

export const FR_PRODUCT_PATHS = FR_PRODUCT_PREVIEW_PATHS;

/** Vercel/static hosts often serve directory URLs with a trailing slash; match marketing paths either way. */
function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/** EN path → localized FR marketing path. */
export const EN_TO_FR_PRODUCT_PATH: Record<string, (typeof FR_PRODUCT_PATHS)[number]> = {
  "/": FR_HOME_PATH,
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

const FR_TO_EN_PRODUCT_PATH: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_FR_PRODUCT_PATH).map(([en, fr]) => [fr, en]),
);

/** Reciprocal EN ↔ FR hreflang for product pages (POC client + SSG via mergeFrAlternatesForSsg). */
export function frPocProductHreflangAlternates(path: string): readonly HreflangAlternate[] | undefined {
  const normalized = stripTrailingSlash(path);
  const fr = EN_TO_FR_PRODUCT_PATH[normalized];
  if (fr) {
    return [
      { hreflang: "en", path },
      { hreflang: "fr", path: fr },
      { hreflang: "x-default", path },
    ];
  }
  const en = FR_TO_EN_PRODUCT_PATH[normalized];
  if (en) {
    return [
      { hreflang: "en", path: en },
      { hreflang: "fr", path },
      { hreflang: "x-default", path: en },
    ];
  }
  return undefined;
}

export function isFrProductSitePath(pathname: string): boolean {
  return (FR_PRODUCT_PATHS as readonly string[]).includes(stripTrailingSlash(pathname));
}

export function isFrBlogSitePath(pathname: string): boolean {
  const p = stripTrailingSlash(pathname);
  return p === FR_BLOG_HUB_PATH || p.startsWith(`${FR_BLOG_HUB_PATH}/`);
}

/** FR blog or FR product marketing shell (localized nav/footer). */
export function isFrLocalizedMarketingPath(pathname: string): boolean {
  return isFrBlogSitePath(pathname) || isFrProductSitePath(pathname);
}

export const FR_SITE = {
  breadcrumbHome: "Accueil",
  breadcrumbGuides: "Guides",
  backToGuides: "Retour aux guides",
  readGuide: "Lire le guide",
  header: {
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    faq: "FAQ",
    forBusiness: "Pour les professionnels",
    guides: "Guides",
    downloadApp: "Télécharger l'application",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  footer: {
    tagline:
      "Application de suivi d'entretien automobile : carnet, kilométrage, rappels et historique partageable.",
    product: "Produit",
    guides: "Guides",
    help: "Assistance",
    legal: "Informations légales",
    allRights: "Tous droits réservés.",
  },
  blogHub: {
    eyebrow: "Guides CarCare Diary",
    title: "Guides d'entretien automobile pour conducteurs au quotidien",
    lede:
      "Des guides pratiques pour entretenir votre voiture, organiser vos interventions et garder un historique clair. Checklists, calendriers d'entretien, suivi du kilométrage et organisation des documents.",
    ledeAppSuffix: ", un carnet d'entretien gratuit pour iPhone et Android.",
    seoTitle: "Guides d'entretien automobile pour conducteurs au quotidien",
    seoDescription:
      "Guides pratiques sur l'entretien, l'historique d'interventions, les checklists et le suivi du véhicule. Ressources gratuites par CarCare Diary.",
  },
  mobileBanner: {
    ariaLabel: "Télécharger l'application CarCare Diary",
    dismiss: "Fermer",
    freeOn: (store: string) => `Gratuit sur ${store}`,
    get: "Télécharger",
  },
} as const;

/** Product column for FR marketing shell (same order as FR_SHARED_UI). */
export const FR_FOOTER_PRODUCT_LINKS = [
  { to: "/fr/suivi-entretien-voiture", label: "Suivi d'entretien voiture" },
  { to: "/fr/historique-entretien-voiture", label: "Historique d'entretien" },
  { to: "/fr/application-carnet-entretien-voiture", label: "Application carnet d'entretien" },
  { to: "/fr/rappel-entretien-voiture", label: "Rappels d'entretien" },
  { to: "/fr/partager-historique-entretien-voiture", label: "Partager l'historique" },
  { to: "/fr/carnet-entretien-voiture", label: "Carnet d'entretien numérique" },
  { to: "/fr/gestion-entretien-flotte", label: "Gestion d'entretien de flotte" },
  { to: "/fr/application-entretien-flotte", label: "Application d'entretien de flotte" },
  { to: "/fr/suivi-entretien-vehicules-entreprise", label: "Véhicules d'entreprise" },
  { to: "/fr/entretien-flotte-location-voitures", label: "Flottes de location" },
  { to: "/fr/carnet-entretien-voitures-professionnels", label: "Pour vendeurs automobiles" },
  { to: "/fr/comment-fonctionne-carcare-diary", label: "Comment ça marche" },
] as const;

export function buildFrBlogHubJsonLd(
  entries: readonly LocalizedGuideRegistryEntry[],
): Record<string, unknown> {
  const guides = [...entries].sort((a, b) =>
    a.content.hero.title.localeCompare(b.content.hero.title, "fr"),
  );
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: FR_SITE.blogHub.title,
    description: FR_SITE.blogHub.seoDescription,
    url: `${SITE_URL}${FR_BLOG_HUB_PATH}`,
    itemListElement: guides.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.content.hero.title,
      description: entry.content.seo.description,
      url: `${SITE_URL}${entry.path}`,
    })),
  };
}

export const FR_FOOTER_GUIDE_LINKS = [
  { to: FR_BLOG_HUB_PATH, label: "Tous les guides" },
  { to: "/fr/blog/checklist-entretien-voiture", label: "Checklist d'entretien" },
  { to: "/fr/blog/comment-suivre-entretien-voiture", label: "Suivi d'entretien" },
  {
    to: "/fr/blog/que-contient-historique-entretien-voiture",
    label: "Historique d'entretien",
  },
  {
    to: "/fr/blog/organiser-historique-entretien-voiture",
    label: "Organiser ses documents",
  },
] as const;

export const FR_BLOG_HUB_SEO = {
  title: FR_SITE.blogHub.seoTitle,
  description: FR_SITE.blogHub.seoDescription,
  path: FR_BLOG_HUB_PATH,
  lang: "fr",
  ogLocale: "fr_FR",
  alternates: [
    { hreflang: "en", path: "/blog" },
    { hreflang: "fr", path: FR_BLOG_HUB_PATH },
    { hreflang: "x-default", path: "/blog" },
  ],
} as const;
