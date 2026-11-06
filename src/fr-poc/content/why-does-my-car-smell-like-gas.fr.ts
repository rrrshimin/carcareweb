import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/odeur-essence-voiture-causes";

const faqs = [
  {
    question: "Une odeur d'essence dans une voiture est-elle dangereuse ?",
    answer: "Potentiellement oui. Les vapeurs de carburant sont inflammables et peuvent annoncer une fuite. Une odeur forte, durable ou présente à l'intérieur mérite une inspection urgente. Ne poursuivez pas la conduite en cas de fuite suspectée.",
  },
  {
    question: "Est-il normal de sentir l'essence après avoir fait le plein ?",
    answer: "Une odeur faible et brève peut provenir d'un peu de carburant renversé. Elle devrait disparaître rapidement. Si elle persiste ou réapparaît, contrôlez le bouchon et faites vérifier les conduites et le circuit des vapeurs.",
  },
  {
    question: "Un bouchon de réservoir desserré peut-il provoquer une odeur ?",
    answer: "Oui. Un bouchon ou joint défectueux laisse s'échapper des vapeurs et peut déclencher un voyant moteur associé à un code EVAP. Si l'odeur est forte malgré le bouchon fermé, cherchez une autre cause avec un professionnel.",
  },
  {
    question: "Pourquoi ma voiture sent-elle l'essence après un trajet ?",
    answer: "Une fuite autour des injecteurs ou des conduites peut devenir perceptible moteur chaud. Le circuit EVAP et un mélange trop riche sont aussi possibles. L'odeur ne suffit pas à distinguer ces cas ; un diagnostic est nécessaire.",
  },
  {
    question: "Une fuite de carburant peut-elle être invisible ?",
    answer: "Oui. Certaines fuites s'évaporent rapidement ou se produisent dans une zone peu accessible ; un problème de vapeurs EVAP peut ne laisser aucune flaque. Une odeur persistante doit donc être prise au sérieux même sans trace au sol.",
  },
  {
    question: "Comment conserver l'historique des réparations de carburant ?",
    answer: "Notez les symptômes, la date, le kilométrage, les codes de panne et les pièces remplacées. CarCare Diary peut conserver ces informations pour les visites suivantes au garage.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi ma voiture sent-elle l'essence ?",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi ma voiture sent-elle l'essence ?",
    lede: "Une odeur de carburant ne doit pas être minimisée. Une légère odeur passagère après un plein ou au démarrage à froid peut avoir une explication bénigne, mais **une odeur forte ou persistante, surtout dans l'habitacle, est un risque de sécurité**. L'essence est inflammable : une fuite importante peut provoquer un incendie. En cas de doute, cessez de rouler et faites inspecter le véhicule.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Les causes possibles sont **un bouchon de réservoir desserré ou défectueux, du carburant renversé, une fuite d'injecteur, une durite ou un raccord de carburant endommagé, un défaut du circuit de récupération des vapeurs (EVAP) ou un mélange moteur trop riche**. Si l'odeur est forte ou pénètre dans l'habitacle, faites contrôler rapidement le véhicule.",
  },
  blocks: [
    { type: "heading", text: "Quand faut-il arrêter de rouler ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "L'odeur de carburant est **forte ou persistante**, et pas seulement momentanée après un plein.",
        "Vous sentez de l'essence **dans l'habitacle**.",
        "Une fuite visible ou une zone humide apparaît sous la voiture.",
        "Un voyant s'allume en même temps que l'odeur.",
      ],
    },
    { type: "paragraph", text: "En cas de fuite suspectée, arrêtez-vous dans un endroit sûr, coupez le moteur, évitez les flammes et sources d'étincelles, et demandez une assistance. N'essayez pas de manipuler une conduite sous pression." },
    { type: "heading", text: "Causes fréquentes d'une odeur de carburant" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Bouchon de réservoir mal fermé ou endommagé.** Les vapeurs peuvent s'échapper autour du remplissage, particulièrement après le plein. Un défaut d'étanchéité peut aussi déclencher un code du système EVAP et le voyant moteur.",
        "**Carburant renversé au plein.** Quelques gouttes sur la carrosserie ou les mains peuvent provoquer une odeur brève qui disparaît ensuite. Une odeur persistante ne doit pas être expliquée automatiquement ainsi.",
        "**Joint d'injecteur ou injecteur qui fuit.** Un joint détérioré ou un corps d'injecteur fissuré peut laisser s'échapper du carburant dans le compartiment moteur, parfois surtout après un trajet.",
        "**Durite ou raccord de carburant endommagé.** Une fissure, de la corrosion ou un raccord desserré peut provoquer un écoulement ou des vapeurs. Toute fuite visible impose une réparation avant de continuer à rouler.",
        "**Défaut du circuit EVAP.** Le canister, la vanne de purge ou une conduite de récupération des vapeurs peut être en cause ; des codes de diagnostic liés à l'EVAP apparaissent parfois.",
        "**Mélange trop riche à l'échappement.** Une quantité excessive de carburant non brûlé peut créer une odeur à la sortie du pot. Sonde lambda, débitmètre, régulation de pression ou injection sont des causes possibles, souvent avec voyant moteur et parfois fumée noire.",
      ],
    },
    { type: "heading", text: "Ce qu'il faut vérifier d'abord" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Vérifiez que le **bouchon de réservoir** est bien en place.",
        "Depuis un emplacement sûr, observez sans toucher à une fuite suspecte s'il existe une zone humide sous le véhicule.",
        "Notez **quand** l'odeur apparaît : après le plein, après conduite ou moteur chaud.",
        "Relevez un éventuel voyant moteur et son contexte ; les défauts EVAP peuvent être associés à des vapeurs.",
        "Si le carburant se sent dans l'habitacle ou qu'une fuite est visible, **ne conduisez pas avant inspection**.",
      ],
    },
    { type: "heading", text: "Ce que l'historique d'entretien peut révéler" },
    { type: "paragraph", text: "Consultez les interventions sur les injecteurs et conduites de carburant, le dernier remplacement du filtre à carburant lorsque le modèle en possède un remplaçable, les précédents voyants moteur et toute réparation récente du système EVAP." },
    { type: "heading", text: "Comment suivre les réparations du circuit d'alimentation ?" },
    { type: "paragraph", text: "Consignez la date, le kilométrage, les symptômes, les codes relevés par le garage, les pièces changées et le résultat de l'intervention. CarCare Diary permet de garder ces éléments avec l'historique de maintenance du véhicule, pour repérer une récidive." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Voyant moteur", href: "/fr/blog/voyant-moteur-allume-signification" },
        { label: "Filtre à carburant", href: "/fr/blog/quand-changer-filtre-carburant" },
        { label: "Fluides à contrôler", href: "/fr/blog/quels-liquides-verifier-voiture" },
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les odeurs d'essence",
  faqs: [...faqs],
  ctaSlug: "odeur-essence-voiture-causes",
  cta: {
    kind: "symptom",
    headline: "Gardez une trace des réparations du circuit de carburant",
    endHeadline: "Un historique utile en cas de panne récurrente",
    image: "log",
    subtitle: "Consignez diagnostics, dates et pièces remplacées dans votre carnet d'entretien.",
    endSubtitle: "Retrouvez ce qui a déjà été vérifié et réparé sur votre voiture.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Odeur d'essence dans la voiture : causes et risques",
    description: "Bouchon de réservoir, fuite de durite, injecteur ou système EVAP : causes possibles d'une odeur d'essence et actions de sécurité.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-does-my-car-smell-like-gas" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-does-my-car-smell-like-gas" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyDoesMyCarSmellLikeGasFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
