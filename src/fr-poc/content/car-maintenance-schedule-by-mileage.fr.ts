import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/tableau-entretien-voiture-kilometrage";

const faqs = [
  {
    question: "Un tableau basé sur le kilométrage est-il valable pour toutes les voitures ?",
    answer: "Non. Il s'agit d'un cadre général. Chaque constructeur publie un calendrier adapté au moteur, à la transmission et à la chaîne cinématique du véhicule. Remorquage, trajets urbains, autoroute et températures extrêmes influencent également l'usure. Le carnet constructeur reste la référence principale.",
  },
  {
    question: "Faut-il suivre le kilométrage ou la durée ?",
    answer: "Les deux, lorsque le constructeur prévoit ces deux critères. La première limite atteinte détermine l'échéance. Par exemple, une huile peut avoir une limite de 12 mois même si le kilométrage prévu n'est pas atteint. C'est particulièrement important pour certaines courroies de distribution, qui vieillissent avec le temps.",
  },
  {
    question: "Une conduite intensive nécessite-t-elle un autre calendrier ?",
    answer: "Oui. Selon les constructeurs, le remorquage, les charges lourdes, le tout-terrain, les trajets très courts (moins d'environ 8 km), les arrêts urbains répétés, les températures extrêmes et la poussière peuvent justifier un programme d'entretien renforcé. Vérifiez la section « conditions sévères » de votre documentation.",
  },
  {
    question: "Comment savoir si les plaquettes de frein doivent être remplacées ?",
    answer: "Il faut les inspecter régulièrement et mesurer leur épaisseur plutôt que se fier uniquement aux kilomètres. Certains modèles comportent un témoin d'usure mécanique qui provoque un sifflement, d'autres disposent d'un capteur électronique. Un professionnel peut mesurer précisément l'usure lors d'un contrôle.",
  },
  {
    question: "Quelle est la meilleure façon de suivre un calendrier d'entretien ?",
    answer: "Notez la date et le kilométrage dès qu'une opération est terminée. Préparez un rappel pour la prochaine échéance selon les recommandations du constructeur. Conserver ce qui a été fait, quand et par qui est également utile pour la vente, sans constituer à lui seul une preuve indépendante de toutes les réparations.",
  },
  {
    question: "Peut-on repousser un entretien si la voiture fonctionne normalement ?",
    answer: "Ce n'est pas une méthode fiable. Certaines opérations en retard peuvent provoquer des symptômes, d'autres non. Une courroie de distribution peut par exemple céder sans avertissement et entraîner de graves dégâts. Mieux vaut respecter les échéances adaptées au véhicule que réagir après une panne.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Tableau entretien kilométrage",
  hero: {
    category: "Référence",
    readTime: "10 min de lecture",
    title: "Tableau d'entretien voiture selon le kilométrage",
    lede: "Suivre l'entretien de sa voiture est plus simple lorsqu'on sait quelles interventions surveiller à chaque palier kilométrique. Ce tableau réunit les opérations courantes, des vidanges aux bougies et aux courroies de distribution. Les intervalles varient selon le véhicule, le moteur, les fluides et les recommandations du constructeur. Utilisez ce document comme repère général ; le carnet d'entretien de votre voiture fait référence.",
  },
  lastUpdatedLabel: "Dernière mise à jour : novembre 2026",
  shortAnswer: {
    label: "Réponse rapide",
    body: "Les repères généraux correspondent approximativement à une vidange tous les 8 000 à 12 000 km (5 000 à 7 500 miles), à des contrôles ou remplacements de filtres autour de 24 000 à 48 000 km, à certains fluides autour de 48 000 à 97 000 km, et à certaines bougies ou courroies de distribution autour de 97 000 à 161 000 km, selon le véhicule. Les intervalles exacts sont indiqués dans le carnet du constructeur.",
  },
  blocks: [
    { type: "heading", text: "Comment utiliser ce tableau d'entretien ?" },
    { type: "paragraph", text: "Les interventions sont regroupées par plages kilométriques approximatives. Elles ne s'appliquent pas nécessairement à votre voiture : son programme d'entretien exact figure dans sa documentation." },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Tous les intervalles sont indicatifs ; de nombreux modèles utilisent d'autres échéances.",
        "Lorsqu'une intervention a une limite de kilométrage ou de temps, c'est la première échéance atteinte qui s'applique.",
        "Une utilisation intensive peut imposer des intervalles plus courts.",
        "La distribution est un élément critique : vérifiez si votre moteur possède une courroie ou une chaîne.",
      ],
    },
    { type: "heading", text: "Tableau des entretiens par kilométrage" },
    {
      type: "table",
      headers: ["Kilométrage approximatif", "Intervention", "Informations utiles"],
      groupByFirstCol: true,
      accentFirstCol: true,
      rows: [
        ["Tous les 8 000 à 12 000 km", "Huile moteur et filtre", "Dépend de l'huile, du moteur et de l'utilisation. Vérifiez les préconisations constructeur."],
        ["Tous les 8 000 à 12 000 km", "Permutation des pneus", "Certains constructeurs la recommandent à chaque vidange ou à intervalles similaires pour équilibrer l'usure, si le montage le permet."],
        ["Vérifications régulières", "Pression des pneus, niveaux, éclairage", "Contrôles visuels et pratiques, importants pour la sécurité, la consommation et l'usure."],
        ["Vers 19 000 à 24 000 km", "Inspection du filtre à air moteur", "Le remplacement est conseillé vers 24 000 à 48 000 km ; examiner plus souvent en environnement poussiéreux."],
        ["Vers 19 000 à 24 000 km", "Inspection du filtre d'habitacle", "Peut suivre une fréquence comparable au filtre moteur. Remplacer selon son état et les recommandations du constructeur."],
        ["Vers 19 000 à 24 000 km", "Vérification visuelle des freins", "Contrôler l'épaisseur des garnitures, l'état des disques et le niveau de liquide."],
        ["Vers 40 000 à 80 000 km", "Inspection/remplacement des plaquettes", "La durée de vie varie fortement avec la conduite et le poids. Remplacer selon l'usure constatée, pas sur le seul kilométrage."],
        ["Vers 40 000 à 80 000 km", "Évaluation de l'état des pneus", "Examiner la profondeur des sculptures, les témoins d'usure et l'état général ; remplacer selon les critères applicables."],
        ["Vers 48 000 à 97 000 km, ou au temps indiqué", "Liquide de frein", "Certains constructeurs prévoient un remplacement environ tous les deux ans. L'humidité absorbée diminue son point d'ébullition."],
        ["Vers 48 000 à 97 000 km, ou au temps indiqué", "Liquide de refroidissement", "Varie fortement selon sa formulation et le véhicule. Certains liquides longue durée suivent d'autres échéances."],
        ["Vers 48 000 à 97 000 km, ou au temps indiqué", "Fluide de transmission", "Dépend de la boîte (manuelle, automatique, CVT, double embrayage) et des conditions d'utilisation."],
        ["Vers 48 000 à 97 000 km, ou au temps indiqué", "Fluide de direction assistée hydraulique", "Seulement si le véhicule en possède et si le constructeur prévoit un entretien."],
        ["Vers 97 000 à 161 000 km", "Bougies d'allumage", "Selon leur type : les bougies cuivre peuvent demander un remplacement plus tôt, celles au platine ou à l'iridium plus tard. Respecter la référence et l'échéance prescrites."],
        ["Vers 97 000 à 161 000 km", "Courroie de distribution, si présente", "Beaucoup de voitures possèdent une chaîne. La courroie peut également avoir une limite d'âge, variable selon le constructeur."],
        ["Vers 97 000 à 161 000 km", "Durites et courroies du moteur", "Contrôler fissures, gonflements et dégradations ; remplacer les composants endommagés indépendamment du kilométrage."],
      ],
    },
    { type: "heading", text: "Pourquoi le kilométrage ne suffit-il pas ?" },
    { type: "paragraph", text: "La distance parcourue donne une indication sur l'usure, mais d'autres facteurs comptent autant." },
    { type: "subheading", text: "Âge et temps écoulé" },
    { type: "paragraph", text: "Les composants en caoutchouc (courroies de distribution, durites et joints), le liquide de refroidissement et le liquide de frein vieillissent même lorsque la voiture roule peu. Certains entretiens doivent donc aussi être suivis dans le temps." },
    { type: "subheading", text: "Conditions de conduite" },
    { type: "paragraph", text: "Remorquage, routes de montagne, fortes chaleurs ou grands froids, trajets très courts et circulation urbaine avec arrêts fréquents peuvent accroître l'usure par rapport à un usage autoroutier régulier. Les constructeurs prévoient souvent un programme spécifique pour les conditions sévères." },
    { type: "subheading", text: "Type de fluide" },
    { type: "paragraph", text: "Les huiles minérales et synthétiques peuvent suivre des intervalles différents. Les liquides de refroidissement longue durée ont leurs propres exigences. Un fluide de transmission CVT n'est pas nécessairement interchangeable avec un liquide pour boîte automatique classique. La spécification utilisée influe sur l'entretien recommandé." },
    { type: "subheading", text: "Conception du véhicule et du moteur" },
    { type: "paragraph", text: "Une voiture ancienne équipée de bougies classiques et un moteur récent doté de bougies à l'iridium et d'une transmission différente n'ont pas les mêmes besoins. Aucun calendrier ne convient à tous les véhicules." },
    { type: "heading", text: "Suivez les entretiens réellement effectués" },
    { type: "paragraph", text: "Un tableau d'échéances indique quand vérifier un élément ; un historique d'entretien indique quand l'intervention a réellement eu lieu. Les deux sont utiles : le programme définit les repères, les entrées enregistrées permettent de vérifier ce qui a été fait." },
    { type: "paragraph", text: "CarCare Diary vous permet de noter les interventions avec leur date, leur kilométrage et vos observations, puis de consulter les échéances calculées à partir des données et intervalles disponibles. Des notifications facultatives peuvent être activées dans les paramètres, sous réserve des autorisations de l'appareil. Plusieurs véhicules peuvent être suivis selon la formule choisie, avec un historique distinct pour chacun." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Comment suivre l'entretien", href: "/fr/blog/comment-suivre-entretien-voiture" },
        { label: "Checklist d'entretien", href: "/fr/blog/checklist-entretien-voiture" },
        { label: "Application de suivi", href: "/car-maintenance-tracker" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes",
  faqs: [...faqs],
  ctaSlug: "tableau-entretien-voiture-kilometrage",
  cta: {
    kind: "checklist",
    headline: "Gardez votre calendrier d'entretien dans une seule application",
    endHeadline: "Enregistrez chaque entretien avec sa date et son kilométrage",
    image: "log",
    subtitle: "Consignez les interventions avec leur date, leur kilométrage et vos notes, puis activez si besoin les rappels des prochaines échéances.",
    endSubtitle: "Consignez les interventions, tenez votre kilométrage à jour et retrouvez les informations d'entretien sur votre téléphone.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Tableau entretien voiture par kilométrage : repères",
    description: "Tableau indicatif d'entretien voiture en kilomètres : huile, filtres, freins, fluides et distribution. Respectez les échéances du constructeur.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/car-maintenance-schedule-by-mileage" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/car-maintenance-schedule-by-mileage" },
    ],
    datePublished: "2026-04-16",
    dateModified: "2026-11-04",
  },
};

export const carMaintenanceScheduleByMileageFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
