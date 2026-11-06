import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-permuter-pneus-voiture";

const faqs = [
  {
    question: "À quelle fréquence faut-il permuter ses pneus ?",
    answer: "En règle générale, **8 000 à 12 000 km** est une plage courante, mais le constructeur peut préconiser un autre intervalle. La transmission intégrale, l'état des pneus et les conditions d'utilisation peuvent modifier la fréquence.",
  },
  {
    question: "Pourquoi permuter les pneus ?",
    answer: "Pour limiter les différences d'usure entre roues, préserver un comportement plus homogène et éventuellement prolonger la durée d'utilisation du jeu. Cela ne dispense pas de vérifier pression, géométrie et suspension.",
  },
  {
    question: "Quel est le bon schéma de permutation ?",
    answer: "Il dépend de la traction ou propulsion, des dimensions de pneus, de leur sens de rotation et des préconisations constructeur. Des pneus directionnels ne doivent pas être montés à l'envers ; des dimensions différentes selon les essieux limitent les possibilités. Faites confirmer le schéma par un professionnel.",
  },
  {
    question: "Peut-on sentir qu'il est temps de permuter les pneus ?",
    answer: "Pas toujours. Une usure visible différente ou un changement de comportement peut vous alerter, mais les différences commencent souvent avant les symptômes. Mieux vaut contrôler régulièrement la profondeur des sculptures et respecter l'intervalle adapté.",
  },
  {
    question: "Faut-il aller au garage pour faire la permutation ?",
    answer: "Un conducteur équipé et compétent peut le faire, à condition de respecter la procédure de levage, le couple de serrage, les pressions et le schéma autorisé. Un garage peut aussi mesurer l'usure et détecter un problème de géométrie ou de suspension.",
  },
  {
    question: "Comment suivre les permutations de pneus ?",
    answer: "Enregistrez date, kilométrage, positions avant/après et éventuelles observations sur l'usure. CarCare Diary peut conserver l'intervention et aider à préparer le prochain contrôle.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand permuter les pneus de sa voiture ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand permuter les pneus de sa voiture ?",
    lede: "La permutation des pneus consiste à les déplacer d'une position à une autre pour équilibrer leur usure. Les pneus avant d'une voiture à traction supportent une part importante des efforts de direction et de freinage et peuvent s'user plus vite. La permutation aide à maintenir une usure plus homogène. Un intervalle courant est **8 000 à 12 000 km**, mais le constructeur, le type de pneus et la transmission déterminent l'échéance et le schéma corrects.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Pour beaucoup de véhicules, une permutation tous les **8 000 à 12 000 km** (environ 5 000 à 7 500 miles), parfois au moment d'une vidange, constitue un repère. Les véhicules à transmission intégrale peuvent demander une attention plus fréquente. Consultez la documentation de la voiture et du manufacturier des pneus : certains montages ne permettent pas toutes les permutations.",
  },
  blocks: [
    { type: "heading", text: "Pourquoi permuter les pneus ?" },
    { type: "paragraph", text: "L'essieu avant assure la direction et subit souvent davantage de sollicitations ; selon la transmission, la répartition des efforts change. Une permutation adaptée peut éviter qu'une paire atteigne sa limite d'usure bien avant l'autre, maintenir une tenue de route plus régulière et prolonger l'utilisation homogène du train de pneus. Elle ne remplace jamais la correction d'un défaut de pression, de géométrie ou de suspension." },
    { type: "heading", text: "Comment la transmission influence-t-elle l'usure ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Traction avant.** Les pneus avant subissent propulsion, direction et une grande partie du freinage ; ils s'usent souvent plus vite. Le schéma de permutation peut déplacer certains pneus vers l'arrière.",
        "**Propulsion.** Les pneus arrière transmettent la puissance et peuvent s'user davantage, mais les pneus avant restent fortement sollicités au freinage et en virage.",
        "**Transmission intégrale (AWD/4x4).** Une différence marquée de profondeur ou de circonférence entre roues peut solliciter la transmission. Des permutations régulières et le respect des tolérances constructeur sont importants.",
        "**Montages particuliers.** Des pneus directionnels, des dimensions avant/arrière différentes ou des jantes asymétriques imposent des schémas spécifiques, voire empêchent une permutation classique.",
      ],
    },
    { type: "heading", text: "Signes qu'une permutation ou une inspection est nécessaire plus tôt" },
    { type: "paragraph", text: "Une usure plus rapide sur un essieu, des différences visibles entre pneus ou des bords plus usés peuvent justifier un contrôle anticipé. Une vibration, un tirage d'un côté ou une usure en facettes nécessitent d'abord d'en rechercher la cause : une simple permutation ne corrigera pas des éléments défectueux." },
    { type: "heading", text: "Que se passe-t-il si l'on ne permute jamais les pneus ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Les pneus les plus sollicités atteignent leur limite avant les autres, entraînant parfois un remplacement par paires.",
        "La durée d'utilisation homogène du jeu peut être réduite.",
        "Le comportement routier devient moins régulier à mesure que l'écart d'usure augmente.",
        "Sur certaines transmissions intégrales, un grand écart de circonférence peut solliciter les organes de transmission.",
        "Les pneus les plus usés offrent moins d'adhérence sous la pluie.",
      ],
    },
    { type: "heading", text: "Contrôlez la pression à chaque permutation" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Mesurez la **pression à froid**, avant le trajet ou après une utilisation très limitée.",
        "Utilisez la valeur indiquée par le constructeur sur l'étiquette de portière ou dans la notice, et non la pression maximale inscrite sur le flanc.",
        "Contrôlez aussi la roue de secours si votre voiture en possède une.",
      ],
    },
    { type: "heading", text: "Comment enregistrer les permutations ?" },
    { type: "paragraph", text: "Conservez la **date**, le **kilométrage**, le **schéma utilisé** lorsque vous le connaissez, ainsi que les mesures ou observations sur la profondeur des sculptures, la pression et l'usure irrégulière. CarCare Diary permet de noter ces opérations et de les retrouver avant la prochaine visite au garage." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Quand changer ses pneus ?", href: "/fr/blog/quand-changer-pneus-voiture" },
        { label: "Quand vérifier leur pression ?", href: "/fr/blog/quand-verifier-pression-pneus" },
        { label: "Géométrie des roues", href: "/fr/blog/quand-faire-geometrie-roues" },
        { label: "Calendrier d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur la permutation des pneus",
  faqs: [...faqs],
  ctaSlug: "quand-permuter-pneus-voiture",
  cta: {
    kind: "interval",
    headline: "Suivez vos permutations de pneus",
    endHeadline: "Une meilleure vue sur l'entretien de vos pneus",
    image: "log",
    subtitle: "Retrouvez dates, kilométrages et notes sur l'usure au même endroit.",
    endSubtitle: "Consignez permutations et contrôles pour savoir ce qui a été fait sur chaque voiture.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Permutation des pneus : quand et pourquoi la faire ?",
    description: "Quand permuter les pneus, selon quel schéma et à quel kilométrage ? Comprenez l'usure selon la transmission et suivez vos interventions.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-rotate-tires" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-rotate-tires" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToRotateTiresFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
