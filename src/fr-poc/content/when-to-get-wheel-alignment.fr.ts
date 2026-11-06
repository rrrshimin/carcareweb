import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-faire-geometrie-roues";

const faqs = [
  {
    question: "À quelle fréquence faut-il faire la géométrie ?",
    answer: "Contrairement à la vidange, il n'existe pas d'intervalle universel. Faites-la vérifier lorsqu'un symptôme apparaît, après des travaux concernés ou un choc important. Certains constructeurs et professionnels recommandent également un contrôle annuel ou lors du montage de pneus neufs.",
  },
  {
    question: "Qu'est-ce que la géométrie des roues ?",
    answer: "Elle désigne les angles de position des roues par rapport à la route, entre elles et au véhicule. Les principaux paramètres sont le **carrossage** (inclinaison vue de face), le **parallélisme** ou angle de pincement/ouverture (orientation vue de dessus) et la **chasse** (inclinaison de l'axe de pivot vue de côté). Ils influencent l'usure des pneus, la direction et la tenue de cap. Les valeurs cibles dépendent du véhicule.",
  },
  {
    question: "Une mauvaise géométrie peut-elle user les pneus ?",
    answer: "Oui. Même un petit écart peut faire frotter les pneus de manière anormale. Un défaut de parallélisme entraîne souvent une usure en plumes, tandis qu'un carrossage excessif use davantage un bord. Des pneus peuvent se dégrader bien avant leur durée de vie normale si le défaut persiste.",
  },
  {
    question: "Géométrie et équilibrage, est-ce la même chose ?",
    answer: "Non. La géométrie concerne les angles des roues. L'**équilibrage** répartit correctement la masse autour de la roue et du pneu afin de limiter les vibrations, notamment à certaines vitesses. Les deux opérations sont distinctes. L'équilibrage est généralement réalisé lors du montage ou de certaines permutations de pneus.",
  },
  {
    question: "Faut-il contrôler la géométrie après un nid-de-poule ?",
    answer: "Un choc très important peut dérégler les éléments de suspension. Ce n'est pas nécessaire après chaque petite irrégularité. En revanche, si la voiture se met à tirer, si le volant devient décentré ou si l'usure change, faites examiner la géométrie et les pièces concernées.",
  },
  {
    question: "Comment suivre les opérations de géométrie ?",
    answer: "Enregistrez la date, le kilométrage, le motif et les réglages réalisés ou les constats de conformité. CarCare Diary permet d'ajouter une intervention avec des notes, même lorsqu'elle accompagne un changement de pneus ou une réparation de suspension.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand faire vérifier la géométrie des roues ?",
  hero: {
    category: "Entretien",
    readTime: "4 min de lecture",
    title: "Quand faire vérifier la géométrie des roues ?",
    lede: "On contrôle généralement la **géométrie des trains roulants** lorsqu'un symptôme apparaît, après une intervention sur la suspension ou la direction, après un choc important contre un nid-de-poule ou un trottoir, ou à l'occasion du montage de pneus neufs. Certains conducteurs la font aussi vérifier une fois par an. Une mauvaise géométrie accélère l'usure des pneus et peut dégrader le comportement de la voiture.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Faites contrôler la géométrie si la voiture **tire d'un côté, use ses pneus de façon irrégulière ou roule droit avec le volant de travers**. Un choc important, des travaux de suspension ou de direction et la pose de pneus neufs sont également de bonnes occasions de vérifier les réglages. Un contrôle annuel préventif peut être utile selon l'usage.",
  },
  blocks: [
    { type: "heading", text: "Quand contrôler la géométrie ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Quand des symptômes apparaissent.** Déport, volant décentré ou usure irrégulière justifient un contrôle, quel que soit le kilométrage.",
        "**Après un choc important.** Un nid-de-poule profond ou un trottoir heurté violemment peut modifier les réglages. Tous les petits chocs ne nécessitent pas un contrôle, mais oui si le comportement change ensuite.",
        "**Après des travaux sur suspension ou direction.** Le remplacement de jambes de force, bras, biellettes, roulements ou crémaillère peut modifier les angles. Le contrôle fait souvent partie de l'intervention.",
        "**Lors du montage de pneus neufs.** C'est une bonne occasion de vérifier qu'un mauvais réglage ne provoquera pas une usure prématurée.",
        "**Une fois par an, à titre préventif.** Certains professionnels le conseillent pour détecter une dérive progressive, même sans symptôme évident.",
      ],
    },
    { type: "heading", text: "Les signes d'une géométrie déréglée" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**La voiture tire sur une route droite.** Sur une chaussée plane, elle devrait suivre une ligne droite sans correction permanente. Vérifiez d'abord la pression des pneus, car une différence de gonflage peut provoquer un symptôme similaire.",
        "**Le volant n'est pas centré.** Si la voiture roule droit alors que le volant est visiblement tourné, les angles peuvent être hors tolérance.",
        "**Les pneus s'usent de manière inhabituelle.** Un mauvais parallélisme peut provoquer une usure en facettes ou en plumes ; un carrossage incorrect use davantage le bord intérieur ou extérieur.",
        "**Direction floue ou trajectoire instable.** Des corrections constantes ou un comportement peu précis en virage peuvent venir de la géométrie ou d'un défaut de suspension.",
        "**Vibrations.** Elles proviennent plus souvent d'un déséquilibrage, mais si elles persistent après équilibrage, vérifiez la géométrie et les composants de suspension.",
      ],
    },
    { type: "heading", text: "Pourquoi ne pas ignorer le problème ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Usure accélérée et irrégulière des pneus, qui peuvent devoir être remplacés bien trop tôt.",
        "Consommation de carburant potentiellement plus élevée à cause de la résistance au roulement.",
        "Nécessité de corriger continuellement la trajectoire, entraînant de la fatigue au volant.",
        "Sollicitations anormales pouvant contribuer à l'usure de composants de suspension.",
      ],
    },
    { type: "heading", text: "Comment conserver l'historique des réglages ?" },
    { type: "paragraph", text: "Notez **la date**, **le kilométrage**, **les corrections effectuées ou non**, **la raison du contrôle** (choc, symptômes, pneus neufs, travaux de suspension) et **les éventuels profils d'usure observés**. Dans CarCare Diary, vous pouvez conserver ces détails dans l'historique du véhicule et les retrouver avant un nouveau montage de pneus." },
    {
      type: "links",
      intro: "À lire aussi :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Permutation des pneus", href: "/fr/blog/quand-permuter-pneus-voiture" },
        { label: "Pression des pneus", href: "/fr/blog/quand-verifier-pression-pneus" },
        { label: "Plaquettes de frein", href: "/fr/blog/quand-changer-plaquettes-frein" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur la géométrie des roues",
  faqs: [...faqs],
  ctaSlug: "quand-faire-geometrie-roues",
  cta: {
    kind: "interval",
    headline: "Gardez une trace de vos contrôles de géométrie",
    endHeadline: "Retrouvez l'historique de vos pneus et trains roulants",
    image: "log",
    subtitle: "Enregistrez les réglages et les interventions liées aux pneus au même endroit.",
    endSubtitle: "Conservez vos observations et les dates d'intervention.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Géométrie des roues : quand la faire et quels signes surveiller ?",
    description: "Une voiture qui tire d'un côté ou des pneus qui s'usent mal ? Découvrez quand vérifier la géométrie des trains roulants.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-get-wheel-alignment" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-get-wheel-alignment" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToGetWheelAlignmentFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
