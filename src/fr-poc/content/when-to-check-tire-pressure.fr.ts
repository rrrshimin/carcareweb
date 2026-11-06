import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-verifier-pression-pneus";

const faqs = [
  {
    question: "À quelle fréquence faut-il vérifier la pression des pneus ?",
    answer: "Il est généralement conseillé de le faire au moins une fois par mois et avant les longs trajets. Les pneus perdent progressivement de la pression, même sans crevaison. La température extérieure joue aussi : le froid réduit la pression, tandis que la chaleur l'augmente. Un contrôle régulier permet de détecter ces variations avant qu'elles n'affectent sensiblement l'usure ou la tenue de route.",
  },
  {
    question: "Qu'est-ce que la pression à froid et pourquoi est-elle importante ?",
    answer: "Il s'agit de la pression mesurée lorsque les pneus n'ont pas roulé récemment, en général après au moins trois heures de stationnement. La conduite échauffe les pneus, ce qui augmente temporairement leur pression. Les recommandations du constructeur se réfèrent à la pression à froid : une mesure juste après un trajet peut donc être trompeuse. Mesurez-la de préférence avant de démarrer.",
  },
  {
    question: "À quelle pression faut-il gonfler les pneus ?",
    answer: "Utilisez les valeurs indiquées sur l'étiquette du montant de porte conducteur ou dans le manuel de votre voiture. N'utilisez pas la pression maximale inscrite sur le flanc du pneu : ce n'est pas la pression de fonctionnement recommandée pour le véhicule. Les prescriptions peuvent être différentes pour l'essieu avant et l'essieu arrière.",
  },
  {
    question: "Comment la température influence-t-elle la pression ?",
    answer: "À titre indicatif, la pression varie d'environ **0,07 bar (1 psi) pour une différence de 5,5 °C** de température ambiante. Un pneu correctement gonflé en été peut donc se retrouver sous-gonflé lorsque la température chute à l'automne ou en hiver. Vérifiez la pression au changement de saison et ajustez-la si nécessaire.",
  },
  {
    question: "Quels sont les risques de rouler avec des pneus sous-gonflés ?",
    answer: "Un pneu sous-gonflé se déforme excessivement et chauffe davantage, ce qui accélère sa dégradation interne. Il peut également augmenter la consommation, dégrader la direction et le freinage, et entraîner une usure irrégulière, souvent sur les épaules du pneu. Dans les cas graves, il peut éclater.",
  },
  {
    question: "Quels sont les risques de pneus surgonflés ?",
    answer: "Un pneu trop gonflé possède une zone de contact plus petite et plus rigide. Cela peut réduire l'adhérence, favoriser les dommages sur les obstacles et accélérer l'usure au centre de la bande de roulement. Respectez les valeurs recommandées pour votre véhicule.",
  },
  {
    question: "Comment suivre les contrôles de pression ?",
    answer: "Notez la date de chaque contrôle et les éventuels ajustements. Dans CarCare Diary, vous pouvez enregistrer des opérations liées aux pneus avec des notes, notamment des vérifications de pression, des permutations ou des changements de pneus. Vous constituez ainsi un historique de leur entretien par véhicule.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand vérifier la pression des pneus de sa voitu",
  hero: {
    category: "Entretien",
    readTime: "4 min de lecture",
    title: "Quand vérifier la pression des pneus de sa voiture ?",
    lede: "La pression des pneus fait partie des contrôles réguliers les plus importants, mais aussi des plus souvent oubliés. Elle influence la sécurité, la consommation de carburant, la tenue de route et l'usure des pneumatiques. Prenez l'habitude de vérifier la pression **au moins une fois par mois et avant un long trajet**. Utilisez la valeur recommandée pour votre véhicule, indiquée sur l'étiquette du montant de porte côté conducteur ou dans le manuel, et non la pression maximale inscrite sur le flanc du pneu.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Vérifiez la pression **au moins une fois par mois** et avant tout long trajet. Faites la mesure **sur des pneus froids** et respectez les valeurs prescrites par le constructeur, qui peuvent être différentes entre l'avant et l'arrière.",
  },
  blocks: [
    { type: "heading", text: "Quand contrôler la pression des pneus ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Chaque mois.** Les pneus perdent naturellement un peu d'air avec le temps, même sans crevaison ni dommage. Une mesure mensuelle permet de détecter une perte progressive avant qu'elle ne dégrade la tenue de route ou accélère l'usure.",
        "**Avant un long trajet.** Vérifiez la pression avant de parcourir une grande distance, notamment si la voiture est restée immobilisée. Un gonflage correct limite la résistance au roulement et l'échauffement sur autoroute.",
        "**Aux changements de saison.** La pression baisse quand la température extérieure diminue et augmente lorsqu'elle monte. Le début de l'hiver et de l'été sont de bonnes occasions de vérifier les quatre pneus et de corriger la pression si nécessaire.",
        "**Après l'allumage du témoin TPMS.** De nombreuses voitures signalent une baisse importante de pression à l'aide du système de surveillance des pneus (TPMS). Ne l'ignorez pas : contrôlez les pneus et regonflez celui qui en a besoin. Le système ne prévient pas nécessairement les petites pertes avant qu'un seuil soit atteint.",
      ],
    },
    { type: "heading", text: "Pourquoi mesurer la pression à froid ?" },
    { type: "paragraph", text: "Les valeurs recommandées par le constructeur concernent des **pneus froids**, c'est-à-dire une voiture stationnée depuis au moins trois heures ou ayant parcouru moins d'environ 1,6 km à faible vitesse. En roulant, les pneus s'échauffent et la pression mesurée augmente temporairement. Une mesure prise juste après le trajet peut donc être artificiellement élevée." },
    { type: "paragraph", text: "Pour obtenir une valeur comparable à la recommandation constructeur, vérifiez la pression le matin, avant de prendre la route." },
    { type: "heading", text: "Les signes d'une pression insuffisante" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Témoin de pression des pneus.** Le voyant TPMS s'allume lorsque la pression devient nettement inférieure au seuil prévu. Vérifiez les quatre roues, car certains systèmes n'indiquent pas quel pneu est concerné.",
        "**Comportement inhabituel de la voiture.** Une direction plus lourde ou moins précise peut signaler un ou plusieurs pneus sous-gonflés. La voiture peut aussi tirer légèrement d'un côté si les deux pneus avant présentent une différence importante.",
        "**Pneu visiblement affaissé.** Un pneu très dégonflé peut paraître aplati au contact du sol. Mais une pression inférieure de 0,7 à 1 bar environ à la recommandation peut passer inaperçue à l'œil nu : une inspection visuelle ne suffit pas.",
        "**Consommation de carburant en hausse.** Le sous-gonflage augmente la résistance au roulement. Si la consommation augmente sans raison évidente, contrôlez la pression.",
      ],
    },
    { type: "heading", text: "Que risque-t-on en négligeant la pression ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Une usure accélérée ou irrégulière de la bande de roulement, qui réduit la durée de vie des pneus.",
        "Une tenue de route et une efficacité du freinage dégradées.",
        "Une consommation de carburant plus élevée à cause de la résistance au roulement.",
        "Un risque accru d'endommagement des pneus sur les obstacles, en raison des déformations excessives.",
        "En cas de sous-gonflage important, un risque d'éclatement à vitesse élevée.",
      ],
    },
    { type: "paragraph", text: "À l'inverse, un surgonflage peut réduire la surface de contact, accroître l'usure au centre de la bande de roulement et rendre le pneu plus vulnérable aux chocs. Ne dépassez pas systématiquement la pression recommandée par le constructeur." },
    { type: "heading", text: "Comment conserver un historique des contrôles ?" },
    { type: "paragraph", text: "Pour chaque vérification, notez :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "la **date du contrôle** ;",
        "les **corrections de pression** effectuées et les roues concernées ;",
        "toute **perte de pression inhabituelle**, surtout si elle se répète, car elle peut révéler une fuite lente.",
      ],
    },
    { type: "paragraph", text: "CarCare Diary permet d'enregistrer des interventions concernant les pneus, comme les vérifications de pression, les permutations et les remplacements, en indiquant la date et des notes pour chaque véhicule." },
    {
      type: "links",
      intro: "À lire aussi :",
      links: [
        { label: "Suivi de l'entretien automobile", href: "/car-maintenance-tracker" },
        { label: "Quand permuter les pneus ?", href: "/fr/blog/quand-permuter-pneus-voiture" },
        { label: "Quand remplacer la batterie ?", href: "/fr/blog/quand-changer-batterie-voiture" },
        { label: "Tableau d'entretien selon le kilométrage", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur la pression des pneus",
  faqs: [...faqs],
  ctaSlug: "quand-verifier-pression-pneus",
  cta: {
    kind: "interval",
    headline: "Gardez une trace de vos contrôles de pression",
    endHeadline: "Retrouvez tout l'entretien de vos pneus au même endroit",
    image: "log",
    subtitle: "Enregistrez les entretiens de vos pneus, votre kilométrage et vos observations au même endroit.",
    endSubtitle: "Conservez l'historique des contrôles et des interventions sur votre téléphone.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Pression des pneus : quand la vérifier et comment bien la mesurer",
    description: "Découvrez quand contrôler la pression des pneus, pourquoi elle varie avec la température et comment conserver un suivi de leur entretien.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-check-tire-pressure" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-check-tire-pressure" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToCheckTirePressureFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
