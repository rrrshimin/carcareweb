import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-entretenir-climatisation-voiture";

const faqs = [
  {
    question: "À quelle fréquence faut-il faire entretenir la climatisation ?",
    answer: "Il n'existe pas de fréquence universelle de recharge. Vérifiez les recommandations du constructeur et faites contrôler le système en cas de perte de froid, d'odeur, de bruit ou de faible débit. Un contrôle préventif avant la période chaude peut être judicieux.",
  },
  {
    question: "Faut-il recharger régulièrement le gaz de climatisation ?",
    answer: "Non, un circuit en bon état n'est pas censé demander des appoints réguliers. Des recharges fréquentes indiquent une fuite possible. Un professionnel doit identifier et réparer la cause avant de remettre la bonne quantité de fluide.",
  },
  {
    question: "Qu'est-ce que le filtre d'habitacle et influence-t-il la climatisation ?",
    answer: "Il retient les poussières et pollens de l'air entrant. Un filtre très encrassé réduit le débit aux aérateurs et peut donner l'impression que la climatisation fonctionne mal, même si la production de froid est normale.",
  },
  {
    question: "Pourquoi la climatisation sent-elle le moisi ?",
    answer: "L'humidité et les dépôts sur l'évaporateur ou dans les conduits peuvent favoriser les odeurs. Le filtre, l'évaporateur et l'évacuation des condensats sont à examiner. Un nettoyage approprié peut être nécessaire.",
  },
  {
    question: "Peut-on recharger sa climatisation soi-même ?",
    answer: "La manipulation du fluide frigorigène est réglementée et requiert un équipement approprié. Évitez les kits improvisés et faites intervenir un atelier habilité : il doit notamment contrôler les fuites et la charge conforme au véhicule.",
  },
  {
    question: "Comment conserver l'historique de la climatisation ?",
    answer: "Enregistrez date, kilométrage, symptômes, pièces remplacées et résultat de l'intervention, y compris les changements de filtre. Une fiche CarCare Diary permet de retrouver le suivi au prochain passage au garage.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand faire entretenir la climatisation de sa vo",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand faire entretenir la climatisation de sa voiture ?",
    lede: "Une climatisation automobile mérite un contrôle lorsque l'air refroidit moins bien, que des odeurs apparaissent, que le débit diminue ou que le système devient bruyant. Un examen préventif avant l'été peut également être utile. Avant de supposer qu'une recharge de gaz ou une réparation importante est nécessaire, **vérifiez le filtre d'habitacle** : s'il est colmaté, le débit d'air peut fortement diminuer.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Faites contrôler la climatisation en cas de **refroidissement insuffisant, d'odeur inhabituelle, de faible ventilation ou de bruit nouveau**. Commencez par l'état du **filtre d'habitacle**, cause fréquente et relativement peu coûteuse d'un mauvais débit d'air.",
  },
  blocks: [
    { type: "heading", text: "Commencez par le filtre d'habitacle" },
    { type: "paragraph", text: "Ce filtre retient poussières, pollens et particules avant leur arrivée dans l'habitacle. Lorsqu'il s'encrasse, l'air circule moins bien, même si le circuit frigorifique fonctionne correctement. Vérifiez la périodicité de remplacement prévue pour votre véhicule et adaptez-la si vous roulez souvent dans la poussière ou en ville. Si le débit reste faible après un filtre neuf, il faut poursuivre le diagnostic." },
    { type: "heading", text: "Signes d'une climatisation qui nécessite un entretien" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Air insuffisamment froid.** Une baisse progressive peut venir d'une quantité insuffisante de fluide frigorigène, d'un condenseur endommagé, d'un compresseur ou d'une commande défaillante.",
        "**Débit d'air faible.** Un filtre d'habitacle bouché, un ventilateur fatigué ou un circuit de ventilation obstrué sont des pistes à contrôler.",
        "**Odeur de moisi.** L'humidité et les dépôts sur l'évaporateur ou le filtre favorisent les mauvaises odeurs. Un nettoyage et une vérification de l'évacuation des condensats peuvent être nécessaires.",
        "**Bruits nouveaux.** Claquements, grincements ou sifflements peuvent venir du compresseur, de la courroie, du ventilateur ou d'un composant de ventilation.",
        "**Fonctionnement irrégulier.** Si le froid disparaît par intermittence, un diagnostic électrique, de pression ou de capteurs peut être requis.",
      ],
    },
    { type: "paragraph", text: "Une climatisation ne doit pas normalement nécessiter des « recharges » répétées : une perte de fluide doit être recherchée et réparée, avec une intervention sur le circuit réservée aux professionnels habilités." },
    { type: "heading", text: "Que risque-t-on en ignorant les symptômes ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Une fuite de fluide frigorigène non réparée peut conduire à un mauvais fonctionnement et endommager le compresseur.",
        "Le remplacement du compresseur est souvent l'une des réparations les plus coûteuses du système.",
        "L'humidité et les moisissures sur l'évaporateur peuvent dégrader la qualité de l'air dans l'habitacle.",
        "Un drain de condensation obstrué peut provoquer une infiltration d'eau et abîmer des éléments intérieurs.",
      ],
    },
    { type: "heading", text: "Comment suivre l'entretien de la climatisation ?" },
    { type: "paragraph", text: "Notez la **date et le kilométrage**, l'intervention réalisée (filtre d'habitacle, contrôle de fuite, recharge après réparation ou remplacement d'un élément), les symptômes avant intervention et le résultat obtenu. Vous pourrez ainsi comparer les visites successives et identifier une panne récurrente. CarCare Diary permet de conserver ces informations avec l'historique du véhicule." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Quand changer le filtre d'habitacle ?", href: "/fr/blog/quand-changer-filtre-habitacle" },
        { label: "Filtre à air moteur", href: "/fr/blog/quand-changer-filtre-air-moteur" },
        { label: "Calendrier d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur l'entretien de la climatisation",
  faqs: [...faqs],
  ctaSlug: "quand-entretenir-climatisation-voiture",
  cta: {
    kind: "interval",
    headline: "Consignez les entretiens de climatisation",
    endHeadline: "Retrouvez l'historique de votre climatisation",
    image: "log",
    subtitle: "Gardez une trace des filtres remplacés, contrôles et réparations avec leurs dates.",
    endSubtitle: "Notez les interventions et symptômes pour éviter de repartir de zéro au prochain diagnostic.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Entretien climatisation voiture : quand intervenir ?",
    description: "Climatisation peu froide, mauvaises odeurs, manque de débit et bruits : découvrez quand faire contrôler la climatisation et le filtre habitacle.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-service-car-ac" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-service-car-ac" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToServiceCarAcFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
