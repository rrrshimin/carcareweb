import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-filtre-habitacle";

const faqs = [
  {
    question: "À quelle fréquence remplacer le filtre d'habitacle ?",
    answer: "En conditions normales, une fois par an ou tous les 19 000 à 24 000 km constitue un ordre de grandeur fréquemment cité. Pollen, poussière, fumées et pollution peuvent imposer un remplacement plus rapide. Référez-vous à l'intervalle indiqué pour votre modèle.",
  },
  {
    question: "Quels signes indiquent qu'il faut le changer ?",
    answer: "Ventilation moins puissante, odeur désagréable à l'allumage du chauffage ou de la climatisation, poussière inhabituelle dans l'habitacle et vitres plus longues à désembuer sont des indices. D'autres causes sont possibles ; le filtre constitue cependant un premier contrôle simple.",
  },
  {
    question: "Où se trouve le filtre d'habitacle ?",
    answer: "Il est souvent derrière la boîte à gants, sous le tableau de bord ou près de la base du pare-brise côté compartiment moteur. L'emplacement dépend de la voiture. Consultez le manuel ou la procédure propre au modèle pour y accéder sans endommager les fixations.",
  },
  {
    question: "Un filtre sale peut-il diminuer l'efficacité de la climatisation ?",
    answer: "Oui. S'il est fortement obstrué, le filtre limite le débit d'air et réduit l'efficacité perçue du chauffage ou de la climatisation dans l'habitacle. Remplacer un filtre bouché peut améliorer la circulation de l'air, même si cela ne résout pas toutes les pannes de climatisation.",
  },
  {
    question: "Le filtre d'habitacle est-il le même que le filtre à air moteur ?",
    answer: "Non. Le filtre à air **moteur** protège l'admission d'air du moteur. Le filtre d'**habitacle** filtre l'air envoyé vers les occupants par la ventilation. Ils n'ont ni le même emplacement, ni nécessairement la même fréquence d'entretien.",
  },
  {
    question: "Comment suivre les remplacements du filtre d'habitacle ?",
    answer: "Enregistrez la date et le kilométrage à chaque changement. Cet entretien se planifie souvent annuellement ou en même temps qu'une révision. CarCare Diary permet de conserver l'historique et de préparer la prochaine échéance avec des rappels configurables.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer le filtre d'habitacle de sa voitur",
  hero: {
    category: "Entretien",
    readTime: "4 min de lecture",
    title: "Quand changer le filtre d'habitacle de sa voiture ?",
    lede: "Le filtre d'habitacle retient une partie des poussières, pollens et particules présentes dans l'air qui entre par la ventilation, le chauffage et la climatisation. Un remplacement **environ une fois par an ou tous les 19 000 à 24 000 km** est une référence courante, mais les routes poussiéreuses, les périodes de pollens et la pollution urbaine peuvent justifier un remplacement plus fréquent.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "À titre indicatif, remplacez le filtre d'habitacle **une fois par an** ou vers **19 000–24 000 km** (12 000–15 000 miles) dans des conditions normales. Contrôlez-le plus souvent si vous roulez dans la poussière, la fumée, de fortes concentrations de pollens ou une circulation très polluée. Suivez d'abord le programme du constructeur.",
  },
  blocks: [
    { type: "heading", text: "Intervalles selon les conditions d'utilisation" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Conduite normale :** un an ou environ 19 000–24 000 km sur de nombreux modèles, principalement sur routes revêtues et en air relativement peu chargé.",
        "**Périodes de pollens :** contrôle recommandé après la saison si la concentration en pollens est importante, notamment en milieu rural ou boisé.",
        "**Routes poussiéreuses, chantiers et fumées :** accumulation rapide de particules ; inspectez le filtre plus régulièrement.",
        "**Trafic urbain dense :** les particules d'échappement peuvent accélérer l'encrassement par rapport à une circulation fluide.",
      ],
    },
    { type: "heading", text: "Les signes d'un filtre d'habitacle encrassé" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Débit d'air réduit aux aérateurs.** Un filtre obstrué limite le volume d'air que le ventilateur peut faire passer, parfois même à vitesse maximale.",
        "**Odeur de moisi ou de poussière.** Des dépôts dans le filtre ou le système de ventilation peuvent favoriser des odeurs ; il faut parfois nettoyer également les conduits.",
        "**Plus de poussière à l'intérieur.** Un filtre vieillissant peut laisser davantage de particules circuler, même si d'autres causes sont possibles.",
        "**Désembuage ou dégivrage plus lent.** Une circulation d'air réduite rend le pare-brise plus long à dégager.",
        "**Irritations ou gêne allergique.** Une filtration moins efficace des pollens et particules peut se faire sentir chez les personnes sensibles.",
      ],
    },
    { type: "heading", text: "Pourquoi ne pas négliger le filtre ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Débit de ventilation de plus en plus faible.",
        "Qualité de l'air de l'habitacle potentiellement dégradée.",
        "Sollicitation accrue du ventilateur lorsque la résistance au passage de l'air devient importante.",
        "Accumulation possible de moisissures ou bactéries en conditions humides.",
        "Désembuage moins performant par temps froid ou humide.",
      ],
    },
    { type: "heading", text: "Comment conserver l'historique des remplacements ?" },
    { type: "paragraph", text: "Notez la **date**, le **kilométrage**, la **marque et le type de filtre** (filtre à particules ou à charbon actif, par exemple) et les observations sur l'ancien élément. CarCare Diary permet d'enregistrer le remplacement et de suivre la prochaine échéance, avec des rappels facultatifs si vous les activez." },
  ],
  faqHeading: "Questions fréquentes sur le filtre d'habitacle",
  faqs: [...faqs],
  ctaSlug: "quand-changer-filtre-habitacle",
  cta: {
    kind: "replacement",
    headline: "Enregistrez vos changements de filtre d'habitacle",
    endHeadline: "Gardez l'historique de vos filtres",
    image: "log",
    subtitle: "Gardez les dates et kilométrages de vos entretiens au même endroit.",
    endSubtitle: "Retrouvez les dernières interventions sur votre téléphone.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Filtre d'habitacle : quand le changer et quels signes ?",
    description: "Débit d'air faible, odeurs, pollen : découvrez quand remplacer le filtre d'habitacle et comment suivre cet entretien.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-cabin-air-filter" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-cabin-air-filter" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceCabinAirFilterFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
