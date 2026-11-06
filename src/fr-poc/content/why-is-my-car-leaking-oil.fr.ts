import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/fuite-huile-moteur-voiture";

const faqs = [
  {
    question: "Peut-on rouler avec une fuite d'huile ?",
    answer: "Cela dépend de sa gravité, mais une fuite peut rapidement abaisser le niveau et provoquer une panne moteur. **N'utilisez pas le véhicule si le voyant de pression d'huile est allumé, si le niveau est extrêmement bas ou si la fuite est importante.** Faites identifier et réparer la cause.",
  },
  {
    question: "Que signifie le voyant d'huile ?",
    answer: "Le voyant rouge d'huile indique généralement un problème de **pression**, potentiellement plus urgent qu'un simple rappel de niveau. Arrêtez le moteur dans un endroit sûr et demandez une assistance. Ne le confondez pas avec un rappel d'entretien ou un indicateur de niveau.",
  },
  {
    question: "Une tache sous la voiture est-elle toujours de l'huile moteur ?",
    answer: "Non. Elle peut provenir d'autres fluides, et une flaque d'eau claire sous la climatisation est souvent de la condensation. L'emplacement, la texture, l'odeur et l'état du véhicule peuvent aider, mais le diagnostic doit rester prudent.",
  },
  {
    question: "Un filtre à huile mal serré peut-il provoquer une fuite ?",
    answer: "Oui. Le joint du filtre ou la portée d'étanchéité peut être en cause, surtout après une vidange. Un mécanicien doit vérifier le montage selon les prescriptions ; un serrage excessif peut également poser problème.",
  },
  {
    question: "Comment trouver d'où vient une fuite d'huile ?",
    answer: "Il faut examiner le moteur et les composants associés, parfois après nettoyage, pour localiser la zone la plus haute d'où l'huile s'échappe. La fuite peut couler le long du bloc et apparaître au sol loin de sa source. Un garage pourra utiliser des méthodes adaptées.",
  },
  {
    question: "Comment garder l'historique des fuites et vidanges ?",
    answer: "Enregistrez l'huile et le filtre utilisés, les dates, kilométrages, appoints, symptômes et joints remplacés. CarCare Diary peut centraliser ces informations pour faciliter le suivi.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi ma voiture perd-elle de l'huile moteur ",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi ma voiture perd-elle de l'huile moteur ?",
    lede: "Une fuite d'huile ne doit pas être ignorée. Rouler avec un niveau insuffisant peut rapidement endommager gravement le moteur. Les sources courantes comprennent le bouchon de vidange, le filtre à huile, le joint de couvre-culasse, celui du carter et différents joints moteur. La priorité est de **contrôler le niveau d'huile et de déterminer si la voiture peut encore être utilisée en sécurité**, avant de chercher l'origine exacte.",
  },
  prefaceCallout: {
    title: "Important",
    body: "Cet article explique des causes possibles, pas un diagnostic. Fumée sous le capot, voyant de pression d'huile ou écoulement important exigent une inspection urgente.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Une fuite peut provenir d'un **joint de bouchon de vidange usé, d'un filtre mal étanche, d'un joint de couvre-culasse, d'un joint de carter ou d'un joint de vilebrequin**. Vérifiez d'abord le niveau. Si le voyant rouge de pression d'huile s'allume ou si le niveau est extrêmement bas, **arrêtez le moteur et ne continuez pas à rouler** avant évaluation.",
  },
  blocks: [
    { type: "heading", text: "Vérifiez d'abord le niveau et le voyant d'huile" },
    { type: "paragraph", text: "Arrêtez-vous et demandez de l'aide si :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "le **voyant rouge de pression d'huile** est allumé ;",
        "le niveau à la jauge est au minimum ou sous celui-ci ;",
        "de la fumée ou de la vapeur s'échappe du compartiment moteur ;",
        "une grosse flaque se forme rapidement sous la voiture.",
      ],
    },
    { type: "paragraph", text: "Le voyant de pression d'huile peut signaler un manque de lubrification : il ne faut pas se contenter de le réinitialiser. Utilisez la procédure de vérification prévue dans la notice, sur sol adapté et moteur dans les conditions prescrites." },
    { type: "heading", text: "Toutes les taches sous la voiture ne sont pas de l'huile moteur" },
    { type: "paragraph", text: "Une trace sombre et grasse peut évoquer de l'huile, mais d'autres fluides se trouvent sous une voiture : liquide de transmission, de direction assistée, de frein ou de refroidissement, selon sa conception. De l'eau claire provenant de la condensation de climatisation peut être normale. **La couleur seule ne permet pas d'identifier un liquide.** En cas de doute, faites-le examiner et évitez de toucher un produit inconnu." },
    { type: "heading", text: "Les principales sources de fuite d'huile" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Bouchon de vidange ou joint de bouchon.** Il est manipulé à chaque vidange. Un joint écrasé ou absent, un filetage endommagé ou un bouchon mal serré peut provoquer une fuite, parfois peu après l'intervention.",
        "**Joint du filtre à huile.** Un filtre mal positionné, une portée sale ou une étanchéité défectueuse peut laisser couler de l'huile. C'est un point à vérifier si la fuite suit une vidange récente.",
        "**Joint de couvre-culasse.** Le joint en partie haute du moteur peut durcir avec le temps. L'huile descend alors sur le bloc et peut dégager une odeur de brûlé au contact de surfaces chaudes.",
        "**Joint du carter d'huile.** Un suintement au bas du moteur peut provenir d'un joint vieilli ; il s'agit souvent d'une fuite progressive.",
        "**Joint spi arrière de vilebrequin.** Une fuite à l'arrière du moteur peut être visible près de la jonction moteur/boîte de vitesses.",
        "**Autres joints d'arbre à cames ou de vilebrequin.** Ils peuvent s'user avec l'âge et être repérés lors d'une intervention sur la distribution ou la courroie d'accessoires.",
      ],
    },
    { type: "heading", text: "Ce que l'historique d'entretien peut apporter" },
    { type: "paragraph", text: "Retrouvez la dernière date de vidange, les références des filtres et joints utilisés, les observations faites sur le bouchon de carter et les réparations d'étanchéité antérieures. Notez aussi **la vitesse à laquelle le niveau baisse** : une goutte occasionnelle et une perte rapide n'impliquent pas le même degré d'urgence." },
    { type: "heading", text: "Comment suivre les vidanges et les fuites d'huile ?" },
    { type: "paragraph", text: "Consignez les dates, les kilométrages, l'huile utilisée, le niveau observé, les appoints, les diagnostics et les réparations. Un historique CarCare Diary aide à voir si une fuite est réapparue après une intervention." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Quand faire la vidange ?", href: "/fr/blog/quand-faire-vidange-voiture" },
        { label: "Filtre à huile", href: "/fr/blog/quand-changer-filtre-huile" },
        { label: "Fluides à contrôler", href: "/fr/blog/quels-liquides-verifier-voiture" },
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les fuites d'huile",
  faqs: [...faqs],
  ctaSlug: "fuite-huile-moteur-voiture",
  cta: {
    kind: "symptom",
    headline: "Retrouvez vos vidanges et réparations",
    endHeadline: "Votre historique d'entretien, toujours accessible",
    image: "log",
    subtitle: "Conservez une trace des fuites, appoints et pièces remplacées au même endroit.",
    endSubtitle: "Dates, kilométrages et observations utiles pour un contrôle ultérieur.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Fuite d'huile moteur : causes possibles et vérifications",
    description: "Filtre, bouchon de vidange, joints et carter : découvrez les causes possibles d'une fuite d'huile et les signes qui imposent l'arrêt.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-is-my-car-leaking-oil" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-is-my-car-leaking-oil" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyIsMyCarLeakingOilFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
