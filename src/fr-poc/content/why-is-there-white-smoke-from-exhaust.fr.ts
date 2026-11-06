import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/fumee-blanche-echappement-voiture";

const faqs = [
  {
    question: "La fumée blanche à l'échappement est-elle toujours grave ?",
    answer: "Non. Une fine vapeur qui apparaît au démarrage par temps froid puis disparaît en chauffant est généralement de la condensation. Une fumée épaisse qui persiste, une perte de liquide ou une surchauffe demande un contrôle.",
  },
  {
    question: "Qu'est-ce qui provoque une fumée blanche épaisse persistante ?",
    answer: "Une entrée de liquide de refroidissement dans la chambre de combustion est une cause possible, notamment à cause d'un joint de culasse défectueux ou d'une culasse fissurée. Sur un diesel, des problèmes de combustion peuvent aussi intervenir. Un diagnostic mécanique est indispensable.",
  },
  {
    question: "À quoi sert le joint de culasse et pourquoi peut-il céder ?",
    answer: "Il sépare et rend étanches les circuits de combustion, d'huile et de refroidissement entre le bloc moteur et la culasse. Une surchauffe importante peut le détériorer, provoquant parfois des fuites internes et une fumée à l'échappement.",
  },
  {
    question: "Que signifie une odeur sucrée avec la fumée blanche ?",
    answer: "Certains liquides de refroidissement dégagent une odeur sucrée lorsqu'ils chauffent. Avec une fumée blanche persistante et une baisse du niveau, cela peut suggérer une fuite interne. Ce n'est toutefois pas une preuve à lui seul.",
  },
  {
    question: "Peut-on continuer à rouler avec de la fumée blanche ?",
    answer: "Une vapeur légère et temporaire par temps froid est généralement normale. En revanche, **ne poursuivez pas la conduite** si la fumée est dense et persistante ou s'accompagne d'une surchauffe, d'un voyant ou d'une baisse de liquide importante : demandez une inspection.",
  },
  {
    question: "Comment conserver l'historique de refroidissement ?",
    answer: "Notez les changements de liquide, appoints, incidents de surchauffe et réparations avec leur date et kilométrage. CarCare Diary permet de retrouver ces éléments pour le diagnostic ultérieur.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi une fumée blanche sort-elle de l'échapp",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi une fumée blanche sort-elle de l'échappement ?",
    lede: "Une fine vapeur blanche qui sort de l'échappement par temps froid est généralement de la condensation qui s'évapore pendant que le moteur chauffe. En revanche, **une fumée blanche épaisse qui persiste moteur chaud**, surtout avec une odeur sucrée, une perte de liquide de refroidissement ou une surchauffe, peut annoncer un problème sérieux.",
  },
  prefaceCallout: {
    title: "Important",
    body: "Ce guide présente des causes possibles, pas un diagnostic. En présence de surchauffe, fumée dense persistante ou baisse importante du liquide, arrêtez-vous en sécurité et demandez une inspection.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Une **vapeur légère et brève à froid** est souvent normale. Une **fumée blanche épaisse, persistante après réchauffement**, accompagnée d'une odeur sucrée, d'une surchauffe ou d'une baisse du niveau de refroidissement, peut suggérer une fuite interne de liquide. Faites examiner rapidement le véhicule.",
  },
  blocks: [
    { type: "heading", text: "Vapeur normale ou fumée préoccupante ?" },
    { type: "subheading", text: "Ce qui évoque plutôt de la condensation" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Une vapeur **fine et légère** au démarrage à froid.",
        "Elle disparaît après une ou deux minutes de réchauffement, selon la météo.",
        "Il n'y a **pas d'odeur sucrée** particulière.",
        "Le niveau de liquide de refroidissement reste stable.",
        "Le moteur ne surchauffe pas.",
      ],
    },
    { type: "subheading", text: "Ce qui doit alerter" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Une fumée **épaisse et abondante** qui continue moteur chaud.",
        "Une odeur sucrée ou sirupeuse à l'échappement.",
        "Un niveau de liquide qui baisse sans fuite visible.",
        "Un voyant de température ou un moteur en surchauffe.",
        "De l'huile laiteuse ou mousseuse à la jauge ou autour du bouchon.",
      ],
    },
    { type: "heading", text: "Causes possibles d'une fumée blanche persistante" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Joint de culasse défectueux.** Il assure l'étanchéité entre culasse et bloc moteur. S'il cède, du liquide de refroidissement peut pénétrer dans la chambre de combustion et produire de la vapeur blanche avec une odeur sucrée. Une surchauffe antérieure en est une cause possible ; la réparation ne doit pas être retardée.",
        "**Culasse fissurée.** Une fissure peut également laisser passer du liquide dans les cylindres. Les symptômes ressemblent à ceux d'un joint de culasse et seul un diagnostic permet de les distinguer.",
        "**Fuite interne sans flaque.** Si le niveau baisse sans trace extérieure, le liquide peut être consommé dans le moteur. Une fumée blanche persistante renforce cette hypothèse sans la confirmer.",
        "**Cas des moteurs diesel.** Une vapeur ou fumée blanc-gris au démarrage à froid peut être plus courante, notamment sur les anciens modèles. Une bougie de préchauffage défaillante peut perturber la combustion à froid. Une fumée persistante moteur chaud reste néanmoins à examiner.",
      ],
    },
    {
      type: "callout",
      tone: "danger",
      title: "Arrêtez de rouler si vous observez l'un de ces signes",
      body: "Voyant de température allumé ou aiguille dans le rouge · fumée blanche dense en continu moteur chaud · niveau de liquide nettement baissé · huile laiteuse ou mousseuse.",
      footnote: "Arrêtez en sécurité et **n'ouvrez pas le bouchon de refroidissement à chaud**.",
    },
    { type: "heading", text: "Que vérifier en premier ?" },
    { type: "paragraph", text: "1. **Moteur froid**, vérifiez le niveau dans le vase d'expansion selon la notice." },
    { type: "paragraph", text: "2. Examinez l'aspect de l'huile à la jauge : une texture laiteuse peut suggérer un mélange de fluides, sans suffire au diagnostic." },
    { type: "paragraph", text: "3. Regardez sous le bouchon de remplissage d'huile : un dépôt blanc peut être un indice, mais de la condensation peut aussi s'y former." },
    { type: "paragraph", text: "4. Notez si la fumée disparaît une fois le moteur chaud ou continue." },
    { type: "paragraph", text: "5. Relevez la présence éventuelle d'une odeur sucrée et de tout voyant." },
    { type: "heading", text: "Ce que l'historique d'entretien peut expliquer" },
    { type: "paragraph", text: "Retrouvez les épisodes antérieurs de surchauffe, le dernier changement de liquide et sa spécification, les appoints fréquents et les réparations de pompe à eau, thermostat ou radiateur. Une surchauffe peut solliciter le joint de culasse : ces antécédents sont utiles au garagiste." },
    { type: "heading", text: "Comment suivre le circuit de refroidissement ?" },
    { type: "paragraph", text: "Conservez date, kilométrage, niveau de liquide, symptômes, observations du garage et pièces remplacées. CarCare Diary peut garder ces informations avec les interventions précédentes pour faciliter le suivi." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Quand changer le liquide de refroidissement ?", href: "/fr/blog/quand-changer-liquide-refroidissement" },
        { label: "Surchauffe moteur", href: "/fr/blog/moteur-voiture-surchauffe-causes" },
        { label: "Fluides à vérifier", href: "/fr/blog/quels-liquides-verifier-voiture" },
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur la fumée blanche",
  faqs: [...faqs],
  ctaSlug: "fumee-blanche-echappement-voiture",
  cta: {
    kind: "symptom",
    headline: "Conservez l'historique des symptômes et réparations",
    endHeadline: "Votre carnet d'entretien, toujours à portée de main",
    image: "log",
    subtitle: "Consignez les interventions du circuit de refroidissement avec dates et kilométrages.",
    endSubtitle: "Retrouvez les précédents appoints, diagnostics et réparations.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Fumée blanche à l'échappement : normale ou inquiétante ?",
    description: "Vapeur au démarrage, fumée blanche persistante, odeur sucrée et baisse du liquide de refroidissement : reconnaissez les signes qui nécessitent un contrôle.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-is-there-white-smoke-from-exhaust" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-is-there-white-smoke-from-exhaust" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyIsThereWhiteSmokeFromExhaustFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
