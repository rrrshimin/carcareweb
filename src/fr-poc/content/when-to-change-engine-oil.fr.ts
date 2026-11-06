import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-faire-vidange-voiture";

const faqs = [
  {
    question: "À quelle fréquence faut-il faire la vidange ?",
    answer: "Cela dépend du véhicule, du moteur et de l'huile. À titre indicatif, environ 12 000 à 16 000 km ou 12 mois est fréquemment mentionné pour certains véhicules modernes utilisant une huile entièrement synthétique, contre 4 800 à 8 000 km pour des huiles conventionnelles. L'intervalle de votre constructeur est le seul adapté à votre véhicule.",
  },
  {
    question: "Peut-on rouler trop longtemps sans vidange ?",
    answer: "Oui. Avec le temps et les kilomètres, l'huile perd progressivement ses qualités de lubrification. Un retard prolongé peut favoriser les dépôts, l'usure et, à terme, des dommages au moteur. Mieux vaut respecter le programme d'entretien.",
  },
  {
    question: "Une huile synthétique dure-t-elle plus longtemps ?",
    answer: "En général, les huiles entièrement synthétiques résistent mieux à certaines contraintes thermiques et peuvent permettre des intervalles plus longs. Cela dépend toutefois du moteur et des conditions d'utilisation : ne choisissez pas automatiquement l'échéance la plus éloignée.",
  },
  {
    question: "Le style de conduite influence-t-il la fréquence des vidanges ?",
    answer: "Oui. Les trajets courts, les embouteillages, le remorquage, les températures extrêmes et la poussière peuvent relever des conditions d'utilisation sévères. À l'inverse, des trajets autoroutiers réguliers dans des conditions modérées permettent parfois de respecter le programme normal du constructeur.",
  },
  {
    question: "Comment savoir quand la prochaine vidange est prévue ?",
    answer: "Enregistrez chaque vidange avec sa date et son kilométrage, puis reportez l'échéance recommandée. Une application comme CarCare Diary permet de conserver les interventions et de consulter les échéances calculées. Les notifications facultatives doivent être activées dans les paramètres et autorisées sur le téléphone.",
  },
  {
    question: "L'indicateur de durée de vie de l'huile du tableau de bord est-il fiable ?",
    answer: "La plupart de ces systèmes utilisent des calculs fondés sur les conditions de conduite et ne mesurent pas directement les propriétés de l'huile. Ils offrent un repère utile dans la limite des recommandations du constructeur. Il faut généralement réinitialiser l'indicateur après la vidange, selon la procédure prévue pour le véhicule.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand faire la vidange",
  hero: {
    category: "Entretien",
    readTime: "8 min de lecture",
    title: "Quand faut-il faire la vidange de sa voiture ?",
    lede: "Sur les voitures récentes, les intervalles entre deux vidanges se sont allongés. De nombreuses recommandations constructeur pour les huiles entièrement synthétiques se situent autour de 10 000 à 16 000 km, tandis que les huiles conventionnelles demandent souvent des remplacements plus fréquents. Il existe généralement une limite de kilométrage et une limite de temps : la première atteinte fait foi. Seul le carnet d'entretien du constructeur indique l'échéance applicable à votre voiture.",
  },
  lastUpdatedLabel: "Dernière mise à jour : novembre 2026",
  shortAnswer: {
    label: "Réponse rapide",
    body: "Pour beaucoup de véhicules récents utilisant une huile entièrement synthétique, 12 000 à 16 000 km environ (7 500 à 10 000 miles) ou 12 mois, selon la première échéance atteinte, est souvent indiqué pour les huiles entièrement synthétiques. Pour une huile conventionnelle, environ 4 800 à 8 000 km (3 000 à 5 000 miles). Ces chiffres sont indicatifs : respectez les préconisations de votre constructeur, qui peuvent être très différentes.",
  },
  blocks: [
    { type: "heading", text: "Intervalles habituels entre deux vidanges" },
    { type: "paragraph", text: "Il n'existe pas d'échéance unique : la durée dépend de l'huile, du moteur et de l'utilisation du véhicule. Voici les grandes fourchettes couramment évoquées." },
    { type: "subheading", text: "Huile conventionnelle (minérale)" },
    { type: "paragraph", text: "Intervalle indicatif : environ 4 800 à 8 000 km ou 3 à 6 mois (3 000 à 5 000 miles)." },
    { type: "paragraph", text: "Elle résiste généralement moins bien aux fortes températures et à l'oxydation qu'une huile synthétique, ce qui peut nécessiter des vidanges plus rapprochées." },
    { type: "subheading", text: "Huile semi-synthétique" },
    { type: "paragraph", text: "Intervalle indicatif : environ 8 000 à 12 000 km ou 6 mois (5 000 à 7 500 miles)." },
    { type: "paragraph", text: "Il s'agit d'un compromis entre la stabilité d'une huile synthétique et les caractéristiques d'une huile conventionnelle." },
    { type: "subheading", text: "Huile entièrement synthétique" },
    { type: "paragraph", text: "Intervalle indicatif : environ 12 000 à 16 000 km ou 12 mois (7 500 à 10 000 miles)." },
    { type: "paragraph", text: "De nombreux moteurs modernes utilisent ce type d'huile. Certains constructeurs autorisent des intervalles plus longs, pouvant atteindre environ 24 000 km. Vérifiez toujours les indications propres à votre voiture." },
    { type: "paragraph", text: "Si votre tableau de bord dispose d'un indicateur de durée de vie de l'huile, il utilise des données de conduite pour estimer l'échéance. Cet indicateur est utile, mais doit être interprété dans le cadre des limites fixées par le constructeur." },
    { type: "heading", text: "Conduite sévère : pourquoi les vidanges peuvent être plus fréquentes" },
    { type: "paragraph", text: "De nombreux constructeurs distinguent l'utilisation normale des conditions dites sévères. Ces dernières peuvent nécessiter un entretien plus rapproché. Vérifiez si vous êtes régulièrement confronté à l'une de ces situations :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Trajets courts de moins d'environ 8 km, pendant lesquels le moteur n'atteint pas toujours sa température normale.",
        "Circulation urbaine avec arrêts et redémarrages fréquents.",
        "Remorquage ou transport régulier de charges lourdes.",
        "Conduite fréquente par très forte chaleur ou grand froid.",
        "Utilisation dans la poussière, le sable ou hors route.",
        "Longues périodes de fonctionnement au ralenti, notamment pour certains véhicules de livraison ou professionnels.",
      ],
    },
    { type: "paragraph", text: "Si plusieurs de ces conditions vous concernent, consultez le programme « utilisation sévère » de votre carnet. Des intervalles réduits à 50-75 % de la normale, mais ce pourcentage ne doit pas remplacer la recommandation officielle du constructeur." },
    { type: "heading", text: "Signes indiquant que l'huile nécessite une attention plus rapide" },
    { type: "paragraph", text: "Entre deux entretiens programmés, certains symptômes peuvent signaler une dégradation de l'huile ou un autre problème mécanique." },
    { type: "subheading", text: "Huile très foncée sur la jauge" },
    { type: "paragraph", text: "L'huile neuve est souvent ambrée et elle fonce normalement avec l'utilisation. Une huile très épaisse, granuleuse ou fortement contaminée peut justifier une vérification. La couleur seule ne permet pas de déterminer si une vidange est nécessaire." },
    { type: "subheading", text: "Niveau d'huile en baisse entre deux vidanges" },
    { type: "paragraph", text: "Une certaine consommation peut être normale sur des moteurs plus anciens. Une baisse importante peut toutefois signaler une fuite ou une consommation anormale et mérite d'être recherchée sans attendre la prochaine vidange." },
    { type: "subheading", text: "Voyant d'huile allumé" },
    { type: "paragraph", text: "Un voyant de pression d'huile peut signaler une pression insuffisante, pas simplement un niveau bas. Arrêtez-vous dès que vous pouvez le faire en sécurité, coupez le moteur et suivez les consignes du constructeur. Continuer à rouler peut endommager gravement le moteur." },
    { type: "subheading", text: "Moteur anormalement bruyant" },
    { type: "paragraph", text: "Une lubrification insuffisante augmente les frottements. Des claquements ou cliquetis inhabituels peuvent constituer un signe d'alerte nécessitant un contrôle." },
    { type: "subheading", text: "Odeur de brûlé dans le compartiment moteur" },
    { type: "paragraph", text: "Elle peut notamment provenir d'une fuite d'huile sur des éléments chauds. Faites rechercher la cause plutôt que d'attendre la prochaine échéance." },
    { type: "heading", text: "Que se passe-t-il si l'on retarde une vidange ?" },
    { type: "paragraph", text: "Avec la chaleur, l'oxydation et les contaminants, l'huile perd progressivement certaines propriétés protectrices. Des dépôts peuvent se former, et les conséquences s'aggraver avec le temps :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Frottements plus importants entre les pièces mobiles du moteur.",
        "Dépôts pouvant gêner la circulation de l'huile vers des éléments critiques.",
        "Usure accélérée des paliers, des arbres à cames ou des parois des cylindres.",
        "Éventuelle hausse de la consommation de carburant due aux résistances internes.",
        "Refroidissement moins efficace si l'huile ne remplit plus correctement son rôle.",
        "Risque de dégâts moteur pouvant coûter cher à réparer.",
      ],
    },
    { type: "paragraph", text: "Une vidange est généralement peu coûteuse par rapport à certaines conséquences d'un entretien négligé. Le plus simple reste de suivre les échéances correspondant à votre voiture." },
    { type: "heading", text: "Comment suivre les vidanges effectuées ?" },
    { type: "paragraph", text: "Le plus fiable est d'enregistrer la vidange lorsqu'elle a lieu, de relever le compteur, de noter l'huile utilisée et de conserver l'échéance recommandée pour la prochaine intervention." },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Date de la vidange.",
        "Kilométrage au moment de l'entretien.",
        "Type d'huile et viscosité, par exemple 5W-30 entièrement synthétique.",
      ],
    },
    { type: "paragraph", text: "CarCare Diary permet de consigner ces informations dans un journal d'entretien. Le suivi des échéances utilise les données enregistrées et les intervalles disponibles ; des notifications locales facultatives peuvent être activées sous réserve des autorisations du téléphone. Votre historique de vidanges reste consultable lorsque vous préparez une visite au garage ou la vente du véhicule." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Plaquettes de frein", href: "/fr/blog/quand-changer-plaquettes-frein" },
        { label: "Permutation des pneus", href: "/fr/blog/quand-permuter-pneus-voiture" },
        { label: "Application de suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Application de rappels d'entretien", href: "/vehicle-service-reminder-app" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes",
  faqs: [...faqs],
  ctaSlug: "quand-faire-vidange-voiture",
  cta: {
    kind: "interval",
    headline: "Notez votre prochaine vidange",
    endHeadline: "Gardez votre historique de vidanges au même endroit",
    image: "log",
    subtitle: "Enregistrez chaque intervention avec sa date et son kilométrage, puis activez les rappels facultatifs des prochaines échéances si vous le souhaitez.",
    endSubtitle: "Consignez les interventions, suivez le kilométrage et retrouvez les informations de votre voiture sur votre téléphone.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Quand faire la vidange ? Kilométrage et signes à connaître",
    description: "Quand faire la vidange de votre voiture ? Comprenez les intervalles selon l'huile et le moteur, les signes d'alerte et le suivi des entretiens.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-change-engine-oil" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-change-engine-oil" },
    ],
    datePublished: "2026-04-16",
    dateModified: "2026-11-04",
  },
};

export const whenToChangeEngineOilFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
