import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/fuite-liquide-refroidissement-voiture";

const faqs = [
  {
    question: "Quelle est la couleur du liquide de refroidissement ?",
    answer: "Elle varie selon la formule : vert, rose, orange, bleu ou jaune, notamment. La couleur seule ne permet pas d'identifier sa norme ou sa compatibilité. Une fuite laisse parfois une flaque colorée ou un dépôt cristallisé, mais un professionnel doit confirmer l'origine.",
  },
  {
    question: "Peut-on rouler avec une fuite de liquide de refroidissement ?",
    answer: "Une fuite peut provoquer une surchauffe rapide et des dommages graves. **Si le niveau chute, si un voyant s'allume ou si la température monte, arrêtez-vous et faites contrôler le véhicule.** Ne considérez pas un simple appoint comme une réparation.",
  },
  {
    question: "Peut-on faire soi-même l'appoint ?",
    answer: "Parfois, lorsque le moteur est totalement froid, en suivant la notice du constructeur et en utilisant uniquement un liquide conforme. Mais des appoints répétés signalent un problème à diagnostiquer. **N'ouvrez pas un circuit chaud sous pression.**",
  },
  {
    question: "D'où vient l'odeur sucrée associée au liquide ?",
    answer: "Certains liquides contiennent du glycol et dégagent une odeur sucrée. Elle peut apparaître près d'une fuite dans le compartiment moteur, au niveau du chauffage intérieur ou parfois à l'échappement en cas de fuite interne. L'odeur n'est pas un test suffisant.",
  },
  {
    question: "Comment savoir si le niveau est trop bas ?",
    answer: "Vérifiez, moteur froid, que le niveau se situe entre les repères minimum et maximum du vase d'expansion, selon la notice. Un niveau qui rebaisse régulièrement nécessite une inspection. N'attendez pas que le moteur surchauffe.",
  },
  {
    question: "Comment suivre les fuites et les interventions ?",
    answer: "Notez les appoints avec dates et kilométrages, la spécification du liquide, les réparations et les éventuels épisodes de surchauffe. CarCare Diary permet de consulter ces informations en cas de récidive.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi ma voiture perd-elle du liquide de refr",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi ma voiture perd-elle du liquide de refroidissement ?",
    lede: "Une fuite de liquide de refroidissement, qu'elle se manifeste par une flaque sous la voiture, une baisse répétée du niveau ou une odeur sucrée, doit être prise au sérieux avant qu'elle ne provoque une surchauffe. Plusieurs éléments du circuit peuvent être en cause, des durites au radiateur. **Ne négligez jamais un niveau insuffisant ou un voyant de température.**",
  },
  prefaceCallout: {
    title: "Important",
    body: "Cet article expose des pistes de diagnostic. Si la voiture surchauffe ou affiche un voyant de température, arrêtez-vous dès que cela est sûr, coupez le moteur et faites contrôler le véhicule avant de reprendre la route. **N'ouvrez jamais le bouchon du circuit lorsqu'il est chaud.**",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Les causes courantes comprennent **radiateur, durites, pompe à eau, boîtier de thermostat, vase d'expansion, bouchon de circuit ou radiateur de chauffage**. Un joint de culasse défectueux peut provoquer une fuite interne sans flaque visible. Selon sa formule, le liquide peut être vert, orange, rose, bleu ou jaune et avoir une odeur légèrement sucrée.",
  },
  blocks: [
    { type: "heading", text: "D'où peut venir une fuite de liquide de refroidissement ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Radiateur.** Des fissures, chocs, raccords ou zones corrodées peuvent laisser suinter ou couler le liquide, parfois seulement sous pression à chaud.",
        "**Durites et colliers.** Le caoutchouc vieillit et les jonctions peuvent se desserrer. Une trace humide ou un dépôt coloré près d'un raccord est un indice.",
        "**Pompe à eau.** Un joint d'étanchéité ou une garniture usée peut laisser échapper du liquide ; un bruit anormal ou une circulation défaillante peut parfois l'accompagner.",
        "**Boîtier de thermostat.** Un joint ou un boîtier fissuré provoque parfois une fuite difficile à localiser.",
        "**Vase d'expansion ou bouchon.** Une fissure ou une mauvaise régulation de pression peut entraîner pertes et débordements.",
        "**Radiateur de chauffage.** Une fuite à l'intérieur peut créer une odeur sucrée dans l'habitacle, de la buée anormale ou un tapis humide.",
        "**Joint de culasse.** Une fuite interne peut faire passer du liquide vers les cylindres ou l'huile ; fumée blanche persistante et baisse du niveau sont des indices parmi d'autres.",
      ],
    },
    { type: "heading", text: "Signes à ne pas ignorer" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "L'aiguille de température grimpe vers la zone rouge ou le voyant de surchauffe s'allume.",
        "Le niveau baisse régulièrement, même sans flaque au sol.",
        "Une odeur sucrée apparaît dans le compartiment moteur ou à l'échappement.",
        "De la fumée blanche persistante sort de l'échappement.",
        "L'huile sur la jauge paraît laiteuse ou mousseuse, ce qui peut évoquer un mélange de fluides.",
        "De la vapeur s'échappe sous le capot.",
      ],
    },
    { type: "heading", text: "Que peut-on vérifier en premier, en sécurité ?" },
    { type: "paragraph", text: "1. **Moteur complètement froid**, contrôlez le niveau dans le vase d'expansion, selon la procédure de la notice." },
    { type: "paragraph", text: "2. Regardez si une flaque se trouve sous la voiture et notez sa couleur et son odeur, sans toucher un liquide inconnu." },
    { type: "paragraph", text: "3. Recherchez visuellement des dépôts secs ou des traces humides autour des durites et du radiateur." },
    { type: "paragraph", text: "4. Notez si le moteur atteint une température anormalement élevée." },
    { type: "paragraph", text: "5. Examinez le niveau et l'aspect de l'huile lorsque cela peut être fait en sécurité." },
    { type: "paragraph", text: "Un professionnel peut effectuer un test de pression du circuit et rechercher la source, notamment lorsqu'aucune fuite extérieure n'est visible." },
    { type: "heading", text: "Ce que l'historique d'entretien peut expliquer" },
    { type: "paragraph", text: "Retrouvez le dernier remplacement du liquide, les surchauffes antérieures, les appoints répétés et les anciennes réparations de pompe à eau ou de thermostat. Un liquide très dégradé peut contribuer à la corrosion de certains composants, tandis que des surchauffes répétées peuvent endommager joints et durites." },
    { type: "heading", text: "Comment suivre l'entretien du circuit de refroidissement ?" },
    { type: "paragraph", text: "Consignez la date, le kilométrage, la nature et la spécification du liquide utilisé, les appoints, les symptômes, les pièces remplacées et les résultats du contrôle. CarCare Diary peut enregistrer ces informations dans votre historique d'entretien." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Quand changer le liquide ?", href: "/fr/blog/quand-changer-liquide-refroidissement" },
        { label: "Surchauffe moteur", href: "/fr/blog/moteur-voiture-surchauffe-causes" },
        { label: "Fumée blanche", href: "/fr/blog/fumee-blanche-echappement-voiture" },
        { label: "Autres fluides à contrôler", href: "/fr/blog/quels-liquides-verifier-voiture" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les fuites de refroidissement",
  faqs: [...faqs],
  ctaSlug: "fuite-liquide-refroidissement-voiture",
  cta: {
    kind: "symptom",
    headline: "Conservez l'historique du circuit de refroidissement",
    endHeadline: "Retrouvez les interventions avant votre prochain contrôle",
    image: "log",
    subtitle: "Notez les changements de liquide, appoints, diagnostics et réparations.",
    endSubtitle: "Gardez les dates, les symptômes et les pièces remplacées au même endroit.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Fuite de liquide de refroidissement : causes et alertes",
    description: "Radiateur, durites, pompe à eau ou joint de culasse : repérez les causes possibles d'une fuite de liquide de refroidissement et les signes urgents.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-is-my-car-leaking-coolant" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-is-my-car-leaking-coolant" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyIsMyCarLeakingCoolantFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
