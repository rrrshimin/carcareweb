import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/batterie-voiture-se-decharge-souvent";

const faqs = [
  {
    question: "Comment savoir si le problème vient de la batterie ou de l'alternateur ?",
    answer: "Une batterie peut échouer à un test de capacité même si la charge fonctionne correctement. À l'inverse, un alternateur défectueux peut laisser se vider une bonne batterie. La tension de charge, la capacité sous charge et l'état des connexions doivent être testés par un professionnel.",
  },
  {
    question: "Qu'est-ce qu'une consommation électrique parasite ?",
    answer: "C'est un courant qui continue de circuler lorsque la voiture est arrêtée, au-delà de la consommation normale des systèmes en veille. Un relais bloqué, une lampe ou un accessoire peut provoquer cette décharge. Le diagnostic consiste à mesurer correctement le courant à l'arrêt.",
  },
  {
    question: "Les petits trajets peuvent-ils décharger une batterie ?",
    answer: "Oui. Des démarrages fréquents, une circulation lente et des équipements électriques sollicités peuvent empêcher la recharge complète, particulièrement en hiver. Le problème est plus marqué avec une batterie vieillissante.",
  },
  {
    question: "Combien de temps dure une batterie de voiture ?",
    answer: "La durée de vie varie selon la température, l'utilisation, la technologie et l'entretien. Une plage d'environ trois à cinq ans est courante, mais un test d'état est plus utile qu'un âge isolé pour décider du remplacement.",
  },
  {
    question: "Le voyant batterie s'allume-t-il toujours si l'alternateur est défaillant ?",
    answer: "Non. Il peut s'allumer en cas de défaut de charge, mais certains problèmes intermittents ou partiels n'activent pas immédiatement un voyant. Une panne de charge reste possible malgré l'absence de témoin.",
  },
  {
    question: "Comment garder l'historique de la batterie et du circuit de charge ?",
    answer: "Notez dates de remplacement, caractéristiques de la batterie, dépannages, relevés de diagnostic, changements d'alternateur ou d'accessoires. Un historique dans CarCare Diary facilite la recherche d'une récidive.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi la batterie de ma voiture se décharge-t",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi la batterie de ma voiture se décharge-t-elle sans arrêt ?",
    lede: "Une batterie à plat une seule fois peut être simplement vieillissante. Mais si elle se décharge de nouveau après une recharge ou un démarrage avec des câbles, le problème peut venir de l'alternateur, d'une consommation électrique à l'arrêt ou de trajets trop courts pour recharger correctement la batterie. Un diagnostic méthodique évite de remplacer plusieurs fois une batterie qui n'est pas la vraie cause.",
  },
  prefaceCallout: {
    title: "Important",
    body: "Cet article présente des hypothèses, pas un diagnostic. Un test de capacité de batterie, de charge et de fuite de courant requiert des outils et une méthode appropriés.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Les causes fréquentes sont **une batterie usée, des cosses corrodées, un alternateur défaillant, une consommation électrique parasite, des trajets trop courts ou des températures extrêmes**. Si la batterie se vide régulièrement après une recharge complète, faites vérifier le circuit de charge et la consommation à l'arrêt.",
  },
  blocks: [
    { type: "heading", text: "Causes fréquentes d'une batterie qui se décharge" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Batterie vieillissante ou affaiblie.** Avec l'âge, sa capacité baisse. Après trois ou quatre ans, selon le modèle et les conditions climatiques, elle mérite une vérification, sans que l'âge suffise à condamner la batterie.",
        "**Alternateur ou régulateur défaillant.** Si la batterie n'est pas suffisamment rechargée pendant la conduite, elle peut se vider au fil des trajets. Un voyant batterie peut apparaître, mais son absence ne garantit pas un circuit sain.",
        "**Consommation parasite à l'arrêt.** Une lampe de coffre, un relais, un module qui ne se met pas en veille ou un accessoire ajouté peut continuer à consommer du courant après l'arrêt.",
        "**Trajets courts et répétés.** Le démarrage sollicite fortement la batterie ; si la voiture roule peu ensuite, elle peut ne jamais retrouver une charge satisfaisante.",
        "**Cosses desserrées ou oxydées.** De mauvaises connexions augmentent les résistances et perturbent démarrage et recharge.",
        "**Chaleur ou grand froid.** La chaleur accélère certains mécanismes de vieillissement ; le froid réduit temporairement la puissance disponible au démarrage.",
      ],
    },
    { type: "heading", text: "Ce qu'il faut vérifier en premier" },
    { type: "paragraph", text: "1. **Âge de la batterie :** au-delà d'environ trois à quatre ans, faites vérifier son état." },
    { type: "paragraph", text: "2. **Connexions :** examinez visuellement les cosses pour repérer corrosion et desserrage, sans toucher à un système électrique dangereux." },
    { type: "paragraph", text: "3. **Équipements oubliés :** feux, éclairages intérieurs, accessoires branchés." },
    { type: "paragraph", text: "4. **Moment de la décharge :** uniquement après plusieurs jours sans rouler ou même après utilisation normale ?" },
    { type: "paragraph", text: "5. **Récidive après recharge complète :** ce comportement oriente vers un test de batterie, d'alternateur et de consommation à l'arrêt." },
    { type: "heading", text: "Ce que l'historique d'entretien peut apporter" },
    { type: "paragraph", text: "Retrouvez la **date de pose**, la **marque et les caractéristiques** de la batterie, les épisodes de démarrage avec câbles, les réparations d'alternateur et les équipements électriques ajoutés récemment. Ces dates aident le garagiste à relier les symptômes à une intervention." },
    { type: "heading", text: "Comment suivre les réparations électriques ?" },
    { type: "paragraph", text: "Consignez chaque test, recharge, remplacement de batterie ou réparation du circuit de charge avec la date, le kilométrage, les pièces, les valeurs mesurées lorsqu'elles sont disponibles et le résultat. CarCare Diary permet de conserver ces informations dans l'historique de la voiture." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Quand changer la batterie ?", href: "/fr/blog/quand-changer-batterie-voiture" },
        { label: "Voiture qui ne démarre pas", href: "/fr/blog/voiture-ne-demarre-pas-causes" },
        { label: "Tableau d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les décharges de batterie",
  faqs: [...faqs],
  ctaSlug: "batterie-voiture-se-decharge-souvent",
  cta: {
    kind: "symptom",
    headline: "Gardez une trace de vos problèmes de batterie",
    endHeadline: "Retrouvez les réparations électriques de votre voiture",
    image: "log",
    subtitle: "Enregistrez changements, diagnostics et réparations avec leurs dates et kilométrages.",
    endSubtitle: "Un historique utile si la batterie se décharge de nouveau.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Batterie voiture qui se décharge : causes et vérifications",
    description: "Batterie faible, alternateur, consommation parasite ou petits trajets : identifiez les causes possibles des décharges répétées et les contrôles utiles.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-does-my-car-battery-keep-dying" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-does-my-car-battery-keep-dying" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyDoesMyCarBatteryKeepDyingFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
