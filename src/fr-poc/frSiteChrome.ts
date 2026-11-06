import type { LocalizedGuideRegistryEntry } from "../content/guides/types";
import { SITE_URL } from "../lib/pageSeoHead";

export const FR_BLOG_HUB_PATH = "/fr/blog";

export function isFrBlogSitePath(pathname: string): boolean {
  return pathname === FR_BLOG_HUB_PATH || pathname.startsWith(`${FR_BLOG_HUB_PATH}/`);
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
    forBusiness: "Entreprises",
    guides: "Guides",
    downloadApp: "Télécharger l'app",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  footer: {
    tagline:
      "Carnet d'entretien pour consigner les interventions, le kilométrage, les rappels et l'historique partageable du véhicule.",
    product: "Produit",
    guides: "Guides",
    help: "Aide",
    legal: "Mentions légales",
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
    freeOn: (store: string) => `Gratuit — sur ${store}`,
    get: "Obtenir",
  },
} as const;

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
