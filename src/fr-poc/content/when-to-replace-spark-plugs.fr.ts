import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-bougies-allumage";

const faqs = [
  {
    question: "À quelle fréquence faut-il changer les bougies ?",
    answer: "La fréquence dépend du type de bougie et du moteur. Certaines bougies conventionnelles sont remplacées vers 48 000 km, d'autres au platine autour de 96 000 km, tandis que certaines références en iridium ou à double platine peuvent dépasser 160 000 km. Le bon intervalle et la bonne référence figurent dans le programme du constructeur.",
  },
  {
    question: "Quels signes indiquent des bougies usées ?",
    answer: "Démarrage difficile, ralenti instable, vibrations, hésitations à l'accélération, baisse de puissance, consommation accrue ou voyant moteur lié à des ratés sont possibles. Ces signes ont aussi d'autres causes : contrôlez les bougies, puis approfondissez le diagnostic si nécessaire.",
  },
  {
    question: "Des bougies usées peuvent-elles provoquer des ratés moteur ?",
    answer: "Oui. Une électrode érodée, un dépôt important ou un mauvais écartement peut rendre l'étincelle irrégulière. Le calculateur peut détecter les ratés et mémoriser un code propre au cylindre, sans toutefois confirmer si le problème vient de la bougie, de la bobine, de l'injecteur ou de la compression.",
  },
  {
    question: "Des bougies usées peuvent-elles abîmer le catalyseur ?",
    answer: "Oui. Des ratés persistants peuvent envoyer du carburant imbrûlé vers l'échappement et surchauffer le catalyseur. Une intervention simple sur l'allumage peut alors se transformer en réparation coûteuse. Faites rechercher rapidement les causes de ratés.",
  },
  {
    question: "Faut-il remplacer les bougies de tous les cylindres ensemble ?",
    answer: "En entretien habituel, oui : le jeu complet a généralement le même âge et une usure comparable, même si les symptômes ne se manifestent que sur un cylindre. Le remplacement simultané contribue à maintenir un fonctionnement régulier. Respectez les préconisations de votre moteur.",
  },
  {
    question: "Comment conserver l'historique des changements de bougies ?",
    answer: "Notez la date, le kilométrage, le type de bougie, sa marque, sa référence et d'éventuels symptômes. Les spécifications varient d'un moteur à l'autre. CarCare Diary vous aide à conserver ces détails et à suivre la prochaine intervention.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer les bougies d'allumage ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand changer les bougies d'allumage ?",
    lede: "La durée de vie des bougies d'allumage dépend surtout de leur composition. Certaines bougies classiques nécessitent un remplacement autour de 30 000 à 50 000 km, tandis que de nombreuses bougies modernes en platine ou en iridium durent 100 000 km ou davantage selon le constructeur. Des bougies usées peuvent provoquer des ratés, un ralenti instable, des démarrages difficiles et une consommation accrue. **La référence et la fréquence prescrites pour votre moteur priment sur toute valeur générale.**",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "À titre indicatif, certaines bougies au **cuivre/nickel** sont remplacées autour de **48 000 km** (30 000 miles), les bougies au **platine** vers **96 000 km** (60 000 miles) et les bougies à **double platine ou iridium** après **160 000 km ou plus** sur certains modèles. Ces fourchettes dépendent fortement de la conception du moteur. Consultez le manuel.",
  },
  blocks: [
    { type: "heading", text: "Intervalles selon le type de bougie" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Cuivre / alliage de nickel : environ 48 000 km dans certains programmes.** On les retrouve surtout sur des modèles anciens ou quelques applications spécifiques. Les électrodes s'usent relativement vite.",
        "**Platine simple : environ 96 000 km dans certains programmes.** Le matériau d'électrode résiste davantage à l'érosion que les alliages conventionnels.",
        "**Double platine / iridium : environ 160 000 km ou davantage sur certains moteurs.** Ces métaux résistent mieux aux températures élevées et permettent des intervalles prolongés lorsque le constructeur les prévoit.",
      ],
    },
    { type: "paragraph", text: "La bougie doit aussi correspondre à l'**indice thermique**, à l'écartement des électrodes et aux dimensions de filetage prescrites. Une mauvaise référence peut perturber le fonctionnement ou endommager le moteur." },
    { type: "heading", text: "Les signes de bougies d'allumage usées" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Démarrage difficile.** Une étincelle trop faible peut rendre le démarrage à froid plus long. Une batterie, un démarreur ou une bobine défectueux peuvent produire le même symptôme.",
        "**Ralenti irrégulier ou vibrations.** Un cylindre qui rate périodiquement sa combustion rend le fonctionnement du moteur moins régulier à l'arrêt.",
        "**Hésitations à l'accélération.** Sous charge, un cylindre qui ne brûle pas correctement le mélange peut provoquer des à-coups. L'alimentation en carburant et les capteurs sont aussi des causes possibles.",
        "**Consommation de carburant en hausse.** Des combustions incomplètes peuvent gaspiller du carburant.",
        "**Voyant moteur et codes de ratés.** Le calculateur peut mémoriser P0300 pour des ratés aléatoires ou P0301 à P0312 pour des cylindres particuliers, ce qui aide à cibler le diagnostic.",
      ],
    },
    { type: "paragraph", text: "Ces symptômes ne suffisent pas à incriminer les bougies : bobines, injecteurs, compression et électronique doivent parfois être contrôlés." },
    { type: "heading", text: "Que risque-t-on en retardant le remplacement ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Fonctionnement de plus en plus irrégulier et ratés de combustion.",
        "Risque de **surchauffe du catalyseur** en cas de carburant imbrûlé dans l'échappement.",
        "Consommation et émissions polluantes plus élevées.",
        "Sollicitations accrues pouvant contribuer à la dégradation des bobines d'allumage.",
        "Dans des situations extrêmes, dommages mécaniques liés à des ratés prolongés.",
      ],
    },
    { type: "heading", text: "Comment suivre les remplacements ?" },
    { type: "paragraph", text: "Conservez la **date et le kilométrage**, la **marque et la référence**, le **nombre de cylindres équipés** ainsi que l'état des anciennes bougies et les symptômes constatés. CarCare Diary permet d'enregistrer ces éléments dans l'historique et de suivre la prochaine échéance selon la spécification installée, avec des rappels facultatifs si vous les activez." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Rappels d'entretien", href: "/vehicle-service-reminder-app" },
        { label: "Vidange moteur", href: "/fr/blog/quand-faire-vidange-voiture" },
        { label: "Tableau d'entretien par kilométrage", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les bougies d'allumage",
  faqs: [...faqs],
  ctaSlug: "quand-changer-bougies-allumage",
  cta: {
    kind: "replacement",
    headline: "Enregistrez le remplacement de vos bougies",
    endHeadline: "Gardez votre historique d'allumage au même endroit",
    image: "log",
    subtitle: "Conservez les références installées et le kilométrage pour la prochaine intervention.",
    endSubtitle: "Retrouvez facilement les dernières interventions et leurs détails.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Bougies d'allumage : quand les changer et quels symptômes ?",
    description: "Découvrez les intervalles de remplacement selon les bougies cuivre, platine ou iridium et les signes d'usure à surveiller.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-spark-plugs" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-spark-plugs" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceSparkPlugsFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
