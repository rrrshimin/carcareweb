import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/odeur-brule-voiture-causes";

const faqs = [
  {
    question: "Une odeur après un freinage intense est-elle normale ?",
    answer: "Des freins très sollicités peuvent devenir chauds et dégager une odeur temporaire. Mais une forte odeur lors de trajets ordinaires, une roue anormalement chaude ou une modification du freinage indiquent un problème à vérifier immédiatement.",
  },
  {
    question: "Un étrier grippé peut-il produire une odeur de brûlé ?",
    answer: "Oui. Un étrier qui serre en permanence maintient le disque et les plaquettes en friction. Il peut provoquer une forte chaleur, une odeur, une usure accélérée et un risque de perte d'efficacité.",
  },
  {
    question: "Une fuite d'huile peut-elle provoquer un incendie ?",
    answer: "Oui, lorsque l'huile atteint des composants suffisamment chauds. Une fuite sur l'échappement peut d'abord provoquer de la fumée et une odeur ; faites réparer rapidement et arrêtez-vous si la situation s'aggrave.",
  },
  {
    question: "Quelle odeur produit une courroie qui brûle ?",
    answer: "Une courroie qui patine ou surchauffe peut produire une odeur de caoutchouc brûlé, parfois accompagnée de sifflements. Il faut rechercher pourquoi elle glisse ou frotte plutôt que supposer qu'un simple remplacement suffit.",
  },
  {
    question: "Une odeur de brûlé est-elle normale sur une voiture neuve ?",
    answer: "Certains matériaux ou résidus de fabrication peuvent dégager temporairement une odeur pendant les premières utilisations. Toutefois, une odeur forte, persistante ou accompagnée de fumée ou de voyants n'est pas à considérer comme normale.",
  },
  {
    question: "Comment conserver l'historique des incidents et réparations ?",
    answer: "Notez quand et dans quelles conditions l'odeur apparaît, les voyants, les pièces contrôlées et les réparations. CarCare Diary permet de retrouver ces éléments si le symptôme revient.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi ma voiture sent-elle le brûlé ?",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi ma voiture sent-elle le brûlé ?",
    lede: "Une odeur de brûlé peut venir d'huile déposée sur une partie chaude, de freins qui surchauffent, d'une courroie qui patine, d'un élément électrique ou d'un débris sur l'échappement. L'odeur peut donner un indice, mais **ne suffit pas à identifier la panne**. Une odeur forte, de la fumée ou un voyant d'alerte nécessitent une réaction rapide.",
  },
  prefaceCallout: {
    title: "Important",
    body: "Cet article présente des causes fréquentes, pas un diagnostic. Une fumée visible ou une forte odeur électrique peut annoncer un départ de feu ; ne poursuivez pas votre route dans le doute.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Parmi les causes possibles figurent **une fuite d'huile sur l'échappement, des freins qui frottent ou surchauffent, une courroie détériorée, un composant électrique en surchauffe ou un débris collé au système d'échappement**. Si l'odeur persiste, si de la fumée apparaît ou si un voyant s'allume, arrêtez-vous en sécurité et faites inspecter le véhicule.",
  },
  blocks: [
    { type: "heading", text: "Les odeurs de brûlé et leurs causes possibles" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Huile brûlée.** Une fuite sur le moteur peut déposer de l'huile sur le collecteur d'échappement ou une surface très chaude et produire une odeur âcre accompagnée de fumée.",
        "**Freins surchauffés.** Après une longue descente ou lorsque l'étrier reste partiellement serré, des freins trop chauds peuvent dégager une odeur forte. Une roue anormalement chaude ou un tirage au freinage sont des signaux supplémentaires.",
        "**Courroie qui patine.** Une courroie d'accessoires détendue, abîmée ou bloquée par une poulie peut sentir le caoutchouc brûlé, parfois avec un couinement.",
        "**Composant électrique.** Un câble, un connecteur ou un élément surchauffé peut dégager une odeur de plastique ou d'isolant brûlé. C'est un risque d'incendie à prendre au sérieux.",
        "**Débris sur l'échappement.** Un morceau de plastique, des feuilles ou d'autres matériaux peuvent fondre ou se consumer près de la ligne d'échappement.",
        "**Odeur après une intervention.** Un petit résidu d'huile ou un revêtement neuf peut parfois produire une odeur temporaire ; si elle persiste ou s'accompagne d'autres symptômes, faites vérifier.",
      ],
    },
    { type: "heading", text: "Quand faut-il arrêter de rouler ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "De la fumée apparaît dans le compartiment moteur, près des freins ou des roues.",
        "L'odeur électrique ou âcre est forte et ne disparaît pas.",
        "Un voyant d'alerte accompagne l'odeur.",
        "Les freins deviennent mous, la voiture tire d'un côté ou l'odeur de freinage est forte en conduite normale.",
        "La température moteur augmente ou un voyant de surchauffe s'allume.",
      ],
    },
    { type: "paragraph", text: "Arrêtez-vous dans un lieu sûr, coupez le moteur si nécessaire et faites appel à une assistance. N'ouvrez pas le capot face à un feu ou une fumée importante sans consigne des secours." },
    { type: "heading", text: "Ce qu'il faut vérifier d'abord, sans prendre de risque" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Repérez visuellement d'éventuelles traces d'huile sur les surfaces chaudes du moteur ou de l'échappement, une fois le véhicule sécurisé.",
        "Vérifiez visuellement l'état de la courroie d'accessoires (fissures, effilochage, surface brillante), moteur arrêté.",
        "Notez si l'odeur apparaît **après freinage** ou pendant la conduite normale.",
        "Recherchez un débris visible près de l'échappement, sans toucher une pièce chaude.",
        "Notez tout voyant d'alerte allumé.",
      ],
    },
    { type: "heading", text: "Ce que l'historique d'entretien peut expliquer" },
    { type: "paragraph", text: "Retrouvez les anciennes fuites d'huile et leurs réparations, les contrôles ou remplacements de courroie, la dernière intervention sur les freins et les incidents électriques ou remplacements de fusibles. Ces informations aident à orienter les vérifications." },
    { type: "heading", text: "Comment suivre les épisodes d'odeur de brûlé ?" },
    { type: "paragraph", text: "Notez **date, kilométrage, conditions d'apparition, description de l'odeur, voyants, diagnostic et réparation**. Après intervention, précisez si le symptôme a disparu. CarCare Diary permet d'ajouter ces détails à votre historique de maintenance." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Fuite d'huile", href: "/fr/blog/fuite-huile-moteur-voiture" },
        { label: "Freins qui grincent", href: "/fr/blog/pourquoi-freins-voiture-grincent" },
        { label: "Plaquettes", href: "/fr/blog/quand-changer-plaquettes-frein" },
        { label: "Disques", href: "/fr/blog/quand-changer-disques-frein" },
        { label: "Courroie d'accessoires", href: "/fr/blog/quand-changer-courroie-accessoires" },
        { label: "Surchauffe moteur", href: "/fr/blog/moteur-voiture-surchauffe-causes" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les odeurs de brûlé",
  faqs: [...faqs],
  ctaSlug: "odeur-brule-voiture-causes",
  cta: {
    kind: "symptom",
    headline: "Gardez une trace des symptômes et réparations",
    endHeadline: "Retrouvez ce qui a déjà été vérifié",
    image: "log",
    subtitle: "Dates, kilométrages et notes sur les interventions dans un historique unique.",
    endSubtitle: "Un historique clair pour aider le garagiste à suivre une panne récurrente.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Odeur de brûlé dans la voiture : causes et urgences",
    description: "Huile sur l'échappement, freins surchauffés, courroie ou problème électrique : causes possibles d'une odeur de brûlé et consignes de sécurité.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-does-my-car-smell-like-burning" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-does-my-car-smell-like-burning" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyDoesMyCarSmellLikeBurningFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
