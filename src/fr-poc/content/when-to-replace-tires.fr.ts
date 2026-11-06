import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-pneus-voiture";

const faqs = [
  {
    question: "Comment savoir si ses pneus doivent être changés ?",
    answer: "Examinez la profondeur des sculptures et leur état. Lorsque la bande de roulement est au niveau des témoins d'usure moulés dans les rainures, le pneu a atteint sa limite. Utilisez une jauge pour mesurer la profondeur avant cela. Cherchez également des hernies, fissures, coupures ou vibrations persistantes après équilibrage.",
  },
  {
    question: "Combien de kilomètres durent les pneus ?",
    answer: "La longévité varie énormément. Certaines références annoncent environ **65 000 à 113 000 km** (40 000 à 70 000 miles), mais les résultats réels dépendent de la conduite, de la charge, de la pression, du parallélisme, des permutations et du climat. Même peu utilisés, les pneus vieillissent : faites-les inspecter régulièrement à partir d'environ cinq ans et suivez la limite d'âge du fabricant, souvent dix ans à compter de la fabrication.",
  },
  {
    question: "Quelle est la profondeur minimale des sculptures ?",
    answer: "Pour les voitures particulières en France, la profondeur réglementaire minimale est **1,6 mm** dans les rainures principales. Sur chaussée mouillée, les performances peuvent se dégrader bien avant cette limite ; remplacer les pneus autour de **3 mm** offre une marge supplémentaire. Les témoins indiquent la limite réglementaire, pas une marge de sécurité confortable.",
  },
  {
    question: "Quel est l'âge maximal d'un pneu ?",
    answer: "Le caoutchouc se dégrade avec la chaleur, les UV et l'oxydation. Une inspection régulière est conseillée à partir d'environ cinq ans ; de nombreux fabricants préconisent un remplacement au plus tard à dix ans. Le code DOT comporte quatre chiffres : les deux premiers indiquent la semaine, les deux derniers l'année. « 2423 » correspond à la 24e semaine de 2023.",
  },
  {
    question: "Faut-il changer les quatre pneus en même temps ?",
    answer: "Remplacer les quatre assure une usure et un comportement plus homogènes. À défaut, on remplace généralement les pneus par paire sur le même essieu, selon les recommandations du fabricant. Pour certains véhicules à transmission intégrale, des différences importantes de circonférence peuvent endommager la transmission : le remplacement des quatre peut être nécessaire.",
  },
  {
    question: "Comment conserver l'historique des pneus ?",
    answer: "Notez les dates et kilométrages de montage, la marque, le modèle, les dimensions, la date DOT et les permutations. Ajoutez les contrôles de pression et de géométrie. CarCare Diary permet d'enregistrer ces travaux avec des notes associées à chaque voiture.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer les pneus de sa voiture ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand changer les pneus de sa voiture ?",
    lede: "Les pneus doivent être remplacés lorsque les sculptures sont trop usées, qu'un dommage apparaît, que leur âge devient préoccupant ou que l'adhérence et le comportement de la voiture se dégradent. Il n'existe pas de kilométrage universel : la durée de vie dépend du modèle, de la conduite, de la géométrie, du gonflage, des routes et du climat. Des pneus usés ou endommagés compromettent le freinage, la tenue de route et la résistance à l'aquaplanage.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Changez vos pneus lorsque les **témoins d'usure sont atteints** (minimum réglementaire courant de **1,6 mm**), si vous constatez des dommages ou lorsque les pneus atteignent **10 ans**, suivant les recommandations du fabricant. Pour conserver une meilleure marge d'adhérence sous la pluie, de nombreux spécialistes conseillent d'envisager le remplacement dès **3 mm**.",
  },
  blocks: [
    { type: "heading", text: "Quand faut-il remplacer les pneus ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Sculptures au niveau des témoins.** Les témoins moulés dans les rainures correspondent à environ 1,6 mm. Lorsque la bande de roulement arrive à leur hauteur, le pneu doit être remplacé. Le seuil de 3 mm est souvent recommandé pour de meilleures performances sur chaussée mouillée.",
        "**Dommages visibles : hernies, fissures ou coupures.** Une hernie sur le flanc signale une détérioration interne et un risque de rupture soudaine : ne continuez pas à rouler ainsi. Des craquelures importantes ou des coupures profondes nécessitent également un examen professionnel.",
        "**Âge : jusqu'à 10 ans à partir de la fabrication.** De nombreux fabricants recommandent une inspection annuelle à partir de cinq ans et un remplacement au plus tard à dix ans, même si la bande de roulement semble correcte. Vérifiez la date DOT sur le flanc.",
        "**Usure irrégulière.** Une usure des bords, au centre ou en facettes peut signaler un défaut de géométrie, une pression inadaptée ou un problème de suspension. Il faut corriger la cause en même temps que l'on évalue le remplacement.",
      ],
    },
    { type: "heading", text: "Signes indiquant qu'il faut changer les pneus plus tôt" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Témoins affleurant la bande de roulement.** C'est le signal le plus net d'atteinte de la profondeur minimale ; une jauge permet de mesurer l'usure précisément.",
        "**Hernie sur un flanc.** Elle traduit une défaillance de la structure interne. **Arrêtez d'utiliser ce pneu et faites-le remplacer sans délai.**",
        "**Craquelures du flanc ou de la bande de roulement.** De petites marques superficielles peuvent être cosmétiques, mais des fissures étendues ou profondes nécessitent une inspection et éventuellement le remplacement.",
        "**Vibrations persistantes à vitesse élevée.** Si l'équilibrage ne résout pas le problème, une déformation, un méplat ou une détérioration interne du pneu sont possibles.",
        "**Adhérence réduite sur route mouillée.** Une distance de freinage accrue ou une sensation de glissement peut venir d'une profondeur de sculptures insuffisante.",
        "**Crevaison ou coupure.** Certains trous dans la bande de roulement peuvent être réparés par un spécialiste selon leur taille et leur position. Les perforations du flanc ne doivent pas être réparées.",
      ],
    },
    { type: "heading", text: "Que risque-t-on à repousser le remplacement ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Moins d'adhérence sous la pluie, avec distances de freinage allongées et risque d'aquaplanage accru.",
        "Risque plus élevé d'éclatement, notamment à grande vitesse ou par forte chaleur.",
        "Tenue de route et stabilité en virage dégradées.",
        "Risques réglementaires et assurantiels si la profondeur est inférieure au minimum requis.",
      ],
    },
    { type: "heading", text: "Comment suivre les changements de pneus ?" },
    { type: "paragraph", text: "Conservez la **date de montage**, le **kilométrage**, la **marque**, le **modèle** et les **dimensions**. Ajoutez, si possible, le code DOT de fabrication, les dates de permutation et de contrôle de pression, ainsi que les interventions de géométrie et d'équilibrage. Dans CarCare Diary, vous pouvez enregistrer ces opérations et les retrouver dans l'historique du véhicule." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Quand permuter les pneus ?", href: "/fr/blog/quand-permuter-pneus-voiture" },
        { label: "Quand vérifier la pression ?", href: "/fr/blog/quand-verifier-pression-pneus" },
        { label: "Géométrie des roues", href: "/fr/blog/quand-faire-geometrie-roues" },
        { label: "Tableau d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur le remplacement des pneus",
  faqs: [...faqs],
  ctaSlug: "quand-changer-pneus-voiture",
  cta: {
    kind: "replacement",
    headline: "Gardez l'historique de vos pneus au même endroit",
    endHeadline: "Retrouvez tous les entretiens de vos pneus",
    image: "log",
    subtitle: "Notez les montages, permutations et contrôles de pression, avec dates, kilométrage et observations.",
    endSubtitle: "Conservez votre historique sur votre téléphone pour préparer la prochaine intervention.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Quand changer ses pneus ? Usure, âge et signes d'alerte",
    description: "Profondeur des sculptures, âge DOT, hernies et tenue de route : découvrez quand remplacer vos pneus et comment consigner leur entretien.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-tires" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-tires" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceTiresFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
