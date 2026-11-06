import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/usure-irreguliere-pneus-causes";

const faqs = [
  {
    question: "Une mauvaise pression peut-elle provoquer une usure irrégulière ?",
    answer: "Oui. Le sous-gonflage favorise souvent l'usure des deux bords, alors que le surgonflage peut accentuer celle du centre. Mesurez la pression à froid et utilisez la valeur prévue pour le véhicule, pas celle inscrite comme maximum sur le pneu.",
  },
  {
    question: "À quelle fréquence permuter les pneus pour réduire l'usure ?",
    answer: "Un intervalle courant est **8 000 à 12 000 km**, selon les préconisations constructeur et les pneus. La permutation peut répartir l'usure, mais ne corrigera pas une pression ou une géométrie incorrecte.",
  },
  {
    question: "La géométrie des roues influence-t-elle l'usure ?",
    answer: "Oui. Un parallélisme ou un carrossage hors tolérance peut user rapidement un bord du pneu. Il faut mesurer et corriger la géométrie et vérifier qu'aucun élément mécanique n'est endommagé.",
  },
  {
    question: "Des amortisseurs usés peuvent-ils abîmer les pneus ?",
    answer: "Oui. Des amortisseurs ou des silentblocs fatigués peuvent laisser la roue rebondir ou se déplacer anormalement, ce qui favorise une usure en facettes. Un professionnel doit contrôler la suspension.",
  },
  {
    question: "Peut-on rouler avec des pneus usés de manière irrégulière ?",
    answer: "Cela dépend de la gravité et de la cause. Des pneus ayant atteint leur limite, présentant des armatures apparentes ou une hernie ne doivent pas continuer à être utilisés. Si le véhicule tire fortement ou vibre, arrêtez-vous et faites-le inspecter.",
  },
  {
    question: "Comment conserver l'historique d'entretien des pneus ?",
    answer: "Notez les pressions, permutations, réglages de géométrie et réparations de suspension avec dates, kilomètres et observations. CarCare Diary peut centraliser ces interventions par véhicule.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi mes pneus s'usent-ils de façon irréguli",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi mes pneus s'usent-ils de façon irrégulière ?",
    lede: "Un pneu qui s'use davantage sur un bord, présente des zones en creux ou s'use plus vite que les autres signale souvent un problème de pression, de géométrie, de suspension ou d'entretien. Plus on tarde à comprendre la cause, plus les pneus se détériorent. Une observation précoce peut éviter de remplacer prématurément un jeu de pneus et révéler un risque de sécurité.",
  },
  prefaceCallout: {
    title: "Important",
    body: "Si la direction ou la tenue de route sont affectées, ou si les pneus sont fortement usés, faites examiner le véhicule par un professionnel.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Les causes fréquentes sont une **pression incorrecte**, un **mauvais réglage de la géométrie**, des **permutations oubliées**, des **éléments de suspension usés** ou un **déséquilibre de roue**. La forme de l'usure donne des indices, mais ne constitue pas un diagnostic à elle seule.",
  },
  blocks: [
    { type: "heading", text: "Les profils d'usure et leurs causes possibles" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Usure des deux épaules.** Peut indiquer un sous-gonflage répété : les bords portent davantage de charge que le centre.",
        "**Usure centrale.** Souvent associée à une pression excessive, même si le dessin du pneu et la charge peuvent aussi jouer.",
        "**Usure d'un seul bord, intérieur ou extérieur.** Peut révéler un problème de parallélisme ou de carrossage ; un choc contre un trottoir ou un nid-de-poule est parfois à l'origine du dérèglement.",
        "**Usure en facettes ou en vagues.** Un amortisseur fatigué, une roue déséquilibrée ou du jeu dans des composants de suspension peuvent provoquer une usure irrégulière en plaques.",
        "**Différence entre essieux.** L'absence de permutation adaptée, la transmission et la répartition des charges peuvent entraîner une usure plus rapide d'une paire.",
      ],
    },
    { type: "paragraph", text: "Seul un contrôle des pneus, des pressions et de la géométrie permet de confirmer les causes." },
    { type: "heading", text: "Quand faut-il éviter de continuer à rouler ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Les sculptures atteignent les témoins d'usure.",
        "Des hernies, des armatures visibles ou des dommages structurels apparaissent.",
        "La voiture tire fortement d'un côté ou devient difficile à maîtriser.",
        "Les vibrations sont intenses, notamment à vitesse élevée.",
      ],
    },
    { type: "paragraph", text: "Dans ces cas, arrêtez-vous dès que possible en sécurité et demandez une inspection." },
    { type: "heading", text: "Ce qu'il faut vérifier en premier" },
    { type: "paragraph", text: "1. **Pression des pneus à froid**, comparée à l'étiquette de portière ou au manuel constructeur." },
    { type: "paragraph", text: "2. **Date de la dernière permutation** et différences d'usure entre les quatre pneus." },
    { type: "paragraph", text: "3. **Direction :** la voiture tire-t-elle d'un côté sur route plane ?" },
    { type: "paragraph", text: "4. **Vibrations :** apparaissent-elles à certaines vitesses ?" },
    { type: "paragraph", text: "5. **Profil de chaque pneu :** photographiez les zones usées pour montrer le phénomène au professionnel." },
    { type: "heading", text: "Ce que l'historique d'entretien peut expliquer" },
    { type: "paragraph", text: "Retrouvez les dernières permutations et leurs kilométrages, le dernier réglage de géométrie, les réparations de suspension et les chocs éventuels contre trottoirs ou nids-de-poule. L'historique des pressions trop faibles ou des contrôles oubliés peut également aider à comprendre une usure prématurée." },
    { type: "heading", text: "Comment suivre l'entretien des pneus ?" },
    { type: "paragraph", text: "Enregistrez dates, kilométrages, permutation, équilibrage, réglage de géométrie et profondeur mesurée des sculptures. Dans CarCare Diary, vous pouvez ajouter les observations aux interventions pour comparer l'évolution de l'usure dans le temps." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Pression des pneus", href: "/fr/blog/quand-verifier-pression-pneus" },
        { label: "Permutation", href: "/fr/blog/quand-permuter-pneus-voiture" },
        { label: "Géométrie", href: "/fr/blog/quand-faire-geometrie-roues" },
        { label: "Changement des pneus", href: "/fr/blog/quand-changer-pneus-voiture" },
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur l'usure irrégulière des pneus",
  faqs: [...faqs],
  ctaSlug: "usure-irreguliere-pneus-causes",
  cta: {
    kind: "symptom",
    headline: "Comprenez l'historique d'usure de vos pneus",
    endHeadline: "Gardez vos interventions au même endroit",
    image: "log",
    subtitle: "Conservez une trace des contrôles de pression, permutations et réglages de géométrie.",
    endSubtitle: "Dates, kilométrages et notes pour chaque contrôle ou réparation de pneus.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Usure irrégulière des pneus : causes et contrôles",
    description: "Usure intérieure, extérieure, au centre ou en facettes : découvrez les causes possibles et les vérifications à effectuer.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-are-my-tires-wearing-unevenly" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-are-my-tires-wearing-unevenly" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyAreMyTiresWearingUnevenlyFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
