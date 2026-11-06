import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/voiture-tire-droite-gauche-causes";

const faqs = [
  {
    question: "Une voiture qui tire d'un côté est-elle dangereuse ?",
    answer: "Cela peut l'être, surtout si la déviation est importante ou apparaît au freinage. Les pneus, la direction, les freins et la suspension sont des éléments de sécurité. Faites examiner rapidement tout changement soudain.",
  },
  {
    question: "Une mauvaise pression des pneus peut-elle provoquer ce problème ?",
    answer: "Oui. Des pressions différentes sur un même essieu modifient le comportement du véhicule. Mesurez-les à froid et utilisez les valeurs prévues par le constructeur ; ne vous fiez pas à la pression maximale inscrite sur le flanc.",
  },
  {
    question: "Qu'est-ce que la géométrie et pourquoi fait-elle tirer la voiture ?",
    answer: "La géométrie correspond aux angles des roues par rapport au véhicule et à la route. Lorsque le réglage dépasse les tolérances, la voiture peut dériver et les pneus s'user anormalement. Un professionnel mesure et ajuste ces angles.",
  },
  {
    question: "Un étrier grippé peut-il faire tirer la voiture ?",
    answer: "Oui. S'il maintient une roue partiellement freinée, la résistance est plus forte d'un côté et la voiture peut dévier. Il peut également provoquer une forte chaleur et une usure accélérée des freins.",
  },
  {
    question: "Pourquoi ma voiture tire-t-elle seulement quand je freine ?",
    answer: "Des freins qui n'agissent pas uniformément peuvent en être la cause. Plaquettes, disques, étriers et circuit hydraulique doivent être contrôlés sans délai ; une simple géométrie n'explique pas toujours ce symptôme.",
  },
  {
    question: "La pente de la route peut-elle faire dévier la voiture ?",
    answer: "Oui. Le profil transversal d'une chaussée peut provoquer une légère dérive. Un tirage important, constant sur diverses routes ou associé à des vibrations nécessite toutefois une inspection.",
  },
  {
    question: "Comment conserver l'historique des réglages et réparations ?",
    answer: "Notez les contrôles de géométrie, permutations, remplacements de pneus, interventions de freinage et éventuels chocs, avec dates et kilométrages. CarCare Diary facilite ce suivi.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi ma voiture tire-t-elle à droite ou à ga",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi ma voiture tire-t-elle à droite ou à gauche ?",
    lede: "Une voiture qui dévie vers la gauche ou la droite exige des corrections constantes au volant et mérite d'être examinée. Le moment où le défaut apparaît compte : sur route droite, uniquement au freinage ou après un choc contre un trottoir ou un nid-de-poule. **Une voiture qui tire au freinage présente un enjeu de sécurité particulièrement important.**",
  },
  prefaceCallout: {
    title: "Important",
    body: "Ce guide présente des pistes, pas un diagnostic. Si la déviation est soudaine ou importante, arrêtez-vous dans un endroit sûr avant de poursuivre.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Les causes possibles sont **une pression différente entre les pneus, une géométrie déréglée, une usure asymétrique, un étrier de frein grippé ou un élément de pneu ou de suspension endommagé**. Commencez par contrôler la pression à froid. Si la voiture tire fortement pendant le freinage, faites inspecter immédiatement le système de freinage.",
  },
  blocks: [
    { type: "heading", text: "Quand la voiture tire en roulant normalement" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Pressions différentes.** Un pneu moins gonflé d'un côté peut modifier la résistance au roulement et faire dévier la voiture.",
        "**Géométrie déréglée.** Un parallélisme ou un angle de roue hors tolérance peut entraîner une dérive et accélérer l'usure des pneus.",
        "**Pneus usés ou endommagés.** Des sculptures inégalement usées ou un défaut interne d'un pneu peuvent provoquer un tirage, même si la pression est correcte.",
        "**Suspension ou direction.** Silentblocs, rotules, bras ou autres composants endommagés peuvent changer la position des roues.",
        "**Inclinaison de la route.** Certaines chaussées sont bombées pour l'écoulement de l'eau ; une légère tendance à suivre cette pente n'est pas forcément une panne.",
      ],
    },
    { type: "heading", text: "Quand la voiture tire uniquement au freinage" },
    { type: "paragraph", text: "Un **étrier qui reste serré**, des plaquettes ou disques dont le comportement diffère entre les côtés, ou un problème hydraulique peuvent provoquer une déviation au freinage. Si le freinage devient moins efficace, que la pédale est anormale ou qu'une roue chauffe fortement, ne continuez pas votre trajet sans contrôle professionnel." },
    { type: "heading", text: "Ce qu'il faut vérifier en premier" },
    { type: "paragraph", text: "1. Contrôlez la **pression à froid** des quatre pneus et comparez gauche et droite sur chaque essieu." },
    { type: "paragraph", text: "2. Inspectez visuellement les pneus pour repérer hernies, dégâts et usure très différente." },
    { type: "paragraph", text: "3. Notez si la déviation apparaît **tout le temps** ou **uniquement au freinage**." },
    { type: "paragraph", text: "4. Vérifiez si le volant est bien centré quand la voiture roule droit sur une route adaptée." },
    { type: "paragraph", text: "5. Recherchez un événement récent : changement de pneus, choc, réparation de suspension ou réglage de géométrie." },
    { type: "heading", text: "Ce que l'historique d'entretien peut apporter" },
    { type: "paragraph", text: "Retrouvez la date du dernier contrôle de géométrie, les permutations et observations d'usure des pneus, les entretiens de freins (plaquettes, étriers) et les impacts ou travaux de suspension. Ces renseignements permettent de relier le symptôme à une intervention." },
    { type: "heading", text: "Comment suivre la géométrie et l'entretien des pneus ?" },
    { type: "paragraph", text: "Enregistrez date, kilométrage, symptômes, mesures de géométrie lorsqu'elles sont fournies, pneumatiques remplacés et réparations de freins ou de suspension. CarCare Diary permet de garder ces informations dans l'historique du véhicule." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Pression des pneus", href: "/fr/blog/quand-verifier-pression-pneus" },
        { label: "Géométrie", href: "/fr/blog/quand-faire-geometrie-roues" },
        { label: "Usure irrégulière", href: "/fr/blog/usure-irreguliere-pneus-causes" },
        { label: "Plaquettes", href: "/fr/blog/quand-changer-plaquettes-frein" },
        { label: "Disques", href: "/fr/blog/quand-changer-disques-frein" },
        { label: "Volant qui tremble", href: "/fr/blog/volant-voiture-tremble-causes" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur une voiture qui tire d'un côté",
  faqs: [...faqs],
  ctaSlug: "voiture-tire-droite-gauche-causes",
  cta: {
    kind: "symptom",
    headline: "Conservez vos réglages et réparations",
    endHeadline: "Préparez votre prochain rendez-vous au garage",
    image: "log",
    subtitle: "Retrouvez l'historique des pneus, freins et interventions sur la direction.",
    endSubtitle: "Gardez les symptômes et les travaux précédents dans votre carnet d'entretien.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Voiture qui tire à droite ou à gauche : causes possibles",
    description: "Pression des pneus, géométrie, freins ou suspension : pourquoi une voiture tire-t-elle d'un côté et que faut-il vérifier ?",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-is-my-car-pulling-to-one-side" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-is-my-car-pulling-to-one-side" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyIsMyCarPullingToOneSideFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
