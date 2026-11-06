import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/voiture-vibre-tremble-causes";

const faqs = [
  {
    question: "Pourquoi ma voiture tremble-t-elle à haute vitesse, mais pas à faible vitesse ?",
    answer: "Un défaut d'équilibrage, un pneu déformé ou une jante endommagée se manifeste souvent davantage lorsque la vitesse augmente. Un roulement ou un élément de suspension est également possible. Il faut contrôler roues et train roulant.",
  },
  {
    question: "Pourquoi la voiture vibre-t-elle au freinage ?",
    answer: "Les disques peuvent présenter des irrégularités d'épaisseur ou de surface, ou un étrier peut fonctionner anormalement. Si la pédale pulse, si la voiture tire ou si le freinage s'allonge, faites contrôler les freins rapidement.",
  },
  {
    question: "Pourquoi le moteur fait-il trembler la voiture à l'arrêt ?",
    answer: "Une combustion irrégulière, une bougie ou une bobine défectueuse, ou des supports moteur fatigués peuvent provoquer des vibrations au ralenti. Un diagnostic moteur est nécessaire pour distinguer ces causes.",
  },
  {
    question: "Pourquoi ma voiture tremble-t-elle quand j'accélère ?",
    answer: "Les joints de transmission, les arbres, les supports et des ratés d'allumage sont parmi les pistes possibles. Notez si le phénomène apparaît seulement en charge ou à une vitesse particulière.",
  },
  {
    question: "Les pneus peuvent-ils faire vibrer toute la voiture ?",
    answer: "Oui. Un déséquilibre, une déformation ou une usure irrégulière peut transmettre les vibrations au volant, au plancher ou aux sièges. Un examen visuel ne suffit pas toujours à détecter un défaut interne.",
  },
  {
    question: "Comment suivre les réparations liées aux vibrations ?",
    answer: "Enregistrez date, kilométrage, conditions de la vibration, mesures et réparations. CarCare Diary permet de retrouver les interventions si les symptômes reviennent.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi ma voiture vibre-t-elle ou tremble-t-el",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi ma voiture vibre-t-elle ou tremble-t-elle ?",
    lede: "Les vibrations d'une voiture peuvent venir de systèmes différents selon **le moment où elles apparaissent**. Un tremblement à grande vitesse ne s'explique pas nécessairement comme une vibration au freinage, au ralenti ou lors d'une accélération. Identifier les conditions précises est la première étape utile avant tout contrôle.",
  },
  prefaceCallout: {
    title: "Important",
    body: "Si les vibrations apparaissent soudainement, affectent la direction ou le freinage, ou sont très fortes, arrêtez-vous dès que possible en sécurité et faites contrôler la voiture.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Demandez-vous d'abord : **quand la voiture tremble-t-elle ?** À grande vitesse, pensez notamment à l'équilibrage ou aux pneus ; au freinage, au système de disques et plaquettes ; au ralenti, au moteur ou à ses supports ; lors des accélérations, aux transmissions, aux ratés moteur ou aux pneus. Ces pistes ne constituent pas un diagnostic.",
  },
  blocks: [
    { type: "heading", text: "Quand faut-il arrêter de rouler ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Vibrations soudaines ou intenses pendant une conduite normalement stable.",
        "Voyant d'alerte accompagné de secousses.",
        "Freinage dégradé, déport du véhicule ou pulsations importantes dans la pédale.",
        "Direction instable ou difficile à maîtriser.",
        "Bruit de grincement métallique, claquement ou cognement accompagnant les vibrations.",
      ],
    },
    { type: "heading", text: "Les causes selon la situation" },
    { type: "subheading", text: "La voiture tremble surtout à vitesse élevée" },
    { type: "paragraph", text: "Un **déséquilibrage de roue**, un pneu déformé, un méplat ou une usure irrégulière peuvent provoquer des vibrations qui augmentent avec la vitesse. Une jante tordue ou des éléments de suspension usés sont d'autres pistes. Contrôlez les pneus et faites réaliser un diagnostic si la vibration persiste après équilibrage." },
    { type: "subheading", text: "La voiture vibre lors du freinage" },
    { type: "paragraph", text: "Des variations d'épaisseur des disques, des dépôts irréguliers sur leur surface ou un étrier qui fonctionne mal peuvent faire vibrer la pédale et parfois le volant. Une baisse d'efficacité exige un contrôle urgent des freins." },
    { type: "subheading", text: "La voiture tremble au ralenti" },
    { type: "paragraph", text: "Une combustion irrégulière, des bougies ou des bobines défectueuses, certains problèmes d'admission ou un support moteur détérioré peuvent transmettre des secousses à la caisse. Un voyant moteur peut aider à orienter le diagnostic, mais ne suffit pas à l'établir." },
    { type: "subheading", text: "La voiture vibre à l'accélération" },
    { type: "paragraph", text: "Des joints homocinétiques, arbres de transmission, supports moteur ou éléments de roues usés peuvent provoquer des vibrations sous charge. Un raté d'allumage peut aussi entraîner des secousses, parfois accompagnées d'un voyant moteur." },
    { type: "subheading", text: "Secousses après un choc" },
    { type: "paragraph", text: "Après un nid-de-poule ou un trottoir, vérifiez l'état des pneus et jantes et faites examiner la direction et la suspension. Une vibration nouvelle après un impact mérite une inspection avant d'augmenter la vitesse." },
    { type: "heading", text: "Ce que l'historique d'entretien peut expliquer" },
    { type: "paragraph", text: "Retrouvez les dernières dates d'équilibrage et de permutation, l'âge et le kilométrage des pneus, le remplacement des disques et plaquettes, l'entretien des bougies et de l'allumage, les travaux de suspension et direction, ainsi que les réparations de cardans ou arbres de transmission." },
    { type: "heading", text: "Comment suivre les vibrations et réparations ?" },
    { type: "paragraph", text: "Consignez **la vitesse ou les conditions exactes**, la date, le kilométrage, les voyants, les contrôles réalisés et les pièces remplacées. Indiquez si la vibration a disparu après la réparation. CarCare Diary peut garder cet historique pour faciliter le diagnostic d'une récidive." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Quand changer les pneus ?", href: "/fr/blog/quand-changer-pneus-voiture" },
        { label: "Géométrie", href: "/fr/blog/quand-faire-geometrie-roues" },
        { label: "Disques de frein", href: "/fr/blog/quand-changer-disques-frein" },
        { label: "Bougies", href: "/fr/blog/quand-changer-bougies-allumage" },
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les vibrations d'une voiture",
  faqs: [...faqs],
  ctaSlug: "voiture-vibre-tremble-causes",
  cta: {
    kind: "symptom",
    headline: "Enregistrez les symptômes avant le diagnostic",
    endHeadline: "Retrouvez les réparations déjà réalisées",
    image: "log",
    subtitle: "Décrivez quand votre voiture tremble et gardez une trace des contrôles effectués.",
    endSubtitle: "Consignez équilibrages, pneus, freins et interventions de transmission dans votre historique.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Voiture qui tremble : causes selon la vitesse et le moment",
    description: "Vibrations en roulant, au freinage, à l'arrêt ou à l'accélération : comprenez les causes possibles et les contrôles à prévoir.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-is-my-car-shaking" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-is-my-car-shaking" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyIsMyCarShakingFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
