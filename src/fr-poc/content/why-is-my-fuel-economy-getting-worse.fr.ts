import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/pourquoi-voiture-consomme-plus-carburant";

const faqs = [
  {
    question: "Dans quelle mesure la pression des pneus influence-t-elle la consommation ?",
    answer: "Des pneus insuffisamment gonflés augmentent la résistance au roulement et peuvent augmenter la consommation. L'effet dépend de la pression manquante, du pneu et des conditions. Contrôlez la pression à froid selon la valeur du constructeur, sans inventer un pourcentage d'économie garanti.",
  },
  {
    question: "Un filtre à air sale peut-il augmenter la consommation ?",
    answer: "Oui, dans certains cas, notamment si le filtre est fortement obstrué. L'effet varie selon la gestion électronique du moteur. Il faut le remplacer conformément à l'entretien prévu, sans supposer que c'est toujours la cause d'une surconsommation.",
  },
  {
    question: "Des bougies usées peuvent-elles faire consommer davantage ?",
    answer: "Oui. Une combustion irrégulière ou des ratés peuvent réduire l'efficacité et provoquer un voyant moteur. Le contrôle doit aussi porter sur les bobines et le système d'injection si les symptômes le justifient.",
  },
  {
    question: "Est-il normal de consommer plus en hiver ?",
    answer: "Oui, une hausse peut être normale avec les démarrages à froid, des trajets courts, une météo plus difficile ou des équipements supplémentaires. Comparez des trajets semblables avant de conclure à une panne.",
  },
  {
    question: "Faut-il s'inquiéter d'une augmentation soudaine ?",
    answer: "Une hausse importante sans changement de conduite, surtout avec voyant moteur, manque de puissance, bruit ou odeur inhabituels, doit être examinée. Elle peut signaler un défaut moteur, de freinage ou d'émissions.",
  },
  {
    question: "Comment suivre la consommation sur la durée ?",
    answer: "Notez les litres ajoutés et les kilomètres parcourus entre les pleins dans un relevé adapté. En parallèle, tenez l'historique des vidanges, filtres, bougies et pneus dans CarCare Diary pour relier les changements de consommation aux opérations d'entretien.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi ma voiture consomme-t-elle plus de carb",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Pourquoi ma voiture consomme-t-elle plus de carburant ?",
    lede: "Une consommation de carburant qui augmente progressivement peut avoir une cause liée à l'entretien. Des pneus sous-gonflés, un filtre à air très sale, des bougies usées ou des freins qui frottent peuvent réduire le rendement. Le froid, les conditions de circulation, la charge et vos habitudes de conduite comptent également. Une hausse **brutale ou importante**, surtout avec un voyant moteur, mérite un diagnostic.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Les causes liées à l'entretien comprennent **une pression de pneus trop faible, un filtre à air encrassé, des bougies usées, une huile inadaptée ou dégradée, un filtre à carburant obstrué, des freins grippés ou une mauvaise géométrie**. D'autres facteurs sont le froid, la climatisation, le chargement et la conduite. Si le voyant moteur s'allume, faites lire les codes de défaut.",
  },
  blocks: [
    { type: "heading", text: "Les éléments d'entretien qui peuvent augmenter la consommation" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Pneus sous-gonflés.** Une pression insuffisante augmente la résistance au roulement et peut accélérer l'usure.",
        "**Filtre à air moteur très encrassé.** Selon le moteur, il peut perturber le débit d'air ou le fonctionnement optimal ; ce n'est pas toujours la cause principale d'une hausse de consommation.",
        "**Bougies ou allumage défectueux.** Une combustion imparfaite et des ratés peuvent faire augmenter la consommation, parfois avec un voyant moteur.",
        "**Huile moteur inadaptée ou entretien retardé.** Une viscosité incorrecte ou une huile dégradée peut augmenter les pertes mécaniques ; respectez la spécification constructeur.",
        "**Filtre à carburant bouché.** Sur les véhicules équipés d'un filtre remplaçable, une obstruction peut dégrader l'alimentation et les performances.",
        "**Freins qui restent partiellement serrés.** Un étrier grippé crée une résistance constante et peut provoquer chaleur, odeur ou usure anormale.",
        "**Géométrie déréglée.** Des roues mal alignées peuvent augmenter la résistance et user les pneus prématurément.",
      ],
    },
    { type: "heading", text: "D'autres facteurs sans lien direct avec une panne" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Météo et saison.** Les démarrages à froid, le chauffage, les pneus hiver et les trajets courts changent la consommation moyenne.",
        "**Climatisation et équipements.** Leur utilisation peut accroître la demande énergétique.",
        "**Charge et aérodynamique.** Bagages lourds, coffre de toit ou remorque demandent davantage d'énergie.",
        "**Trajets et style de conduite.** Embouteillages, accélérations brusques, vitesses élevées et arrêts répétés réduisent l'efficacité.",
        "**Mesure différente.** Une variation de parcours ou d'ordinateur de bord ne signifie pas nécessairement qu'une pièce est défectueuse : comparez plusieurs pleins dans des conditions proches.",
      ],
    },
    { type: "heading", text: "Ce qu'il faut vérifier en premier" },
    { type: "paragraph", text: "1. Mesurez la **pression à froid des quatre pneus** et comparez-la à l'étiquette constructeur." },
    { type: "paragraph", text: "2. Vérifiez la date de la dernière **vidange** et la viscosité prescrite." },
    { type: "paragraph", text: "3. Retrouvez les derniers remplacements du **filtre à air et des bougies**." },
    { type: "paragraph", text: "4. Si le voyant moteur s'allume, faites relever les **codes de défaut** plutôt que d'acheter des pièces au hasard." },
    { type: "paragraph", text: "5. Demandez-vous si la météo, les trajets, la charge ou la conduite ont récemment changé." },
    { type: "heading", text: "Ce que votre historique d'entretien peut expliquer" },
    { type: "paragraph", text: "Consultez les vidanges et les spécifications d'huile, les dates des filtres et bougies, les permutations et réglages de géométrie, les interventions sur les freins et les anciens voyants moteur. Des évolutions de consommation après une intervention peuvent fournir un indice, sans prouver une cause." },
    { type: "heading", text: "Comment suivre consommation et entretien ?" },
    { type: "paragraph", text: "CarCare Diary permet de conserver les **entretiens, dates et kilométrages** qui aident à comprendre l'évolution du véhicule. En revanche, ce guide ne doit pas présenter l'application comme un système de **calcul automatique des litres aux 100 km**, fonctionnalité qui n'a pas été vérifiée dans l'audit de l'app. Pour calculer votre consommation, comparez le volume ajouté et la distance parcourue entre plusieurs pleins dans un outil adapté." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Pression des pneus", href: "/fr/blog/quand-verifier-pression-pneus" },
        { label: "Filtre à air", href: "/fr/blog/quand-changer-filtre-air-moteur" },
        { label: "Bougies", href: "/fr/blog/quand-changer-bougies-allumage" },
        { label: "Vidange", href: "/fr/blog/quand-faire-vidange-voiture" },
        { label: "Filtre à carburant", href: "/fr/blog/quand-changer-filtre-carburant" },
        { label: "Géométrie", href: "/fr/blog/quand-faire-geometrie-roues" },
        { label: "Calendrier d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur la consommation de carburant",
  faqs: [...faqs],
  ctaSlug: "pourquoi-voiture-consomme-plus-carburant",
  cta: {
    kind: "symptom",
    headline: "Gardez l'historique des entretiens qui comptent",
    endHeadline: "Suivez l'entretien de votre voiture dans une application",
    image: "log",
    subtitle: "Consignez pneus, filtres, vidanges et interventions pour mieux comprendre votre voiture.",
    endSubtitle: "Retrouvez facilement les dates et kilométrages des travaux réalisés.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Voiture qui consomme plus : causes et entretien à vérifier",
    description: "Pression des pneus, filtres, bougies, freins et conduite : pourquoi votre consommation augmente et quels contrôles effectuer ?",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-is-my-fuel-economy-getting-worse" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-is-my-fuel-economy-getting-worse" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyIsMyFuelEconomyGettingWorseFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
