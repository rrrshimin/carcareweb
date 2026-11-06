import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-liquide-refroidissement";

const faqs = [
  {
    question: "À quelle fréquence faut-il changer le liquide de refroidissement ?",
    answer: "Cela dépend du véhicule et du liquide. Certains anciens programmes prévoyaient environ 2 ans ou 48 000 km ; des liquides longue durée peuvent être prévus pour 5 ans ou plus de 160 000 km, parfois avec des contrôles plutôt qu'un remplacement systématique. Vérifiez toujours le programme de votre constructeur.",
  },
  {
    question: "À quoi sert exactement le liquide de refroidissement ?",
    answer: "Il transporte la chaleur du moteur vers le radiateur, aide à empêcher la surchauffe, protège contre le gel et contient des inhibiteurs limitant la corrosion et les dépôts. Ces inhibiteurs se dégradent avec le temps, même lorsque le liquide paraît propre.",
  },
  {
    question: "Quels signes peuvent indiquer un problème de liquide de refroidissement ?",
    answer: "Une température moteur plus élevée que d'habitude, un niveau sous le minimum, un liquide brun ou chargé de particules, une odeur de liquide près du moteur ou un chauffage d'habitacle anormalement faible. Il faut rechercher la cause de ces symptômes, qui ne signifient pas tous qu'un simple remplacement du liquide suffira.",
  },
  {
    question: "Peut-on faire soi-même l'appoint ?",
    answer: "Il est possible de compléter le niveau dans le vase d'expansion uniquement lorsque le moteur est complètement refroidi, en suivant la procédure du constructeur. N'ouvrez jamais un bouchon de circuit chaud : le liquide sous pression peut provoquer de graves brûlures. Utilisez exclusivement un produit conforme aux spécifications recommandées et compatible avec celui déjà présent.",
  },
  {
    question: "Le type de liquide est-il important ?",
    answer: "Oui. Les formulations conventionnelles, OAT, HOAT et autres utilisent différents inhibiteurs, qui ne sont pas toujours compatibles. Un produit inadapté peut diminuer la protection contre la corrosion ou entraîner des réactions dommageables. Référez-vous au carnet et aux spécifications du véhicule.",
  },
  {
    question: "Comment enregistrer les remplacements de liquide ?",
    answer: "Consignez la date, le kilométrage et la formulation utilisée. Comme l'échéance dépend parfois à la fois du temps et des kilomètres, ces deux données sont utiles. CarCare Diary permet d'enregistrer une intervention liée au refroidissement et de suivre les prochaines échéances, avec notifications facultatives si activées.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Liquide de refroidissement",
  hero: {
    category: "Entretien",
    readTime: "7 min de lecture",
    title: "Quand faut-il changer le liquide de refroidissement ?",
    lede: "Le liquide de refroidissement protège le moteur contre la surchauffe, le gel et la corrosion interne. Sa durée d'utilisation varie fortement selon la voiture et la formulation du liquide : les anciens programmes prévoyaient souvent des remplacements plus fréquents, tandis que certains liquides modernes longue durée peuvent rester en service beaucoup plus longtemps. Seul le carnet d'entretien du constructeur permet de connaître l'échéance adaptée à votre véhicule.",
  },
  lastUpdatedLabel: "Dernière mise à jour : novembre 2026",
  shortAnswer: {
    label: "Réponse rapide",
    body: "Les intervalles sont très variables. Les anciens véhicules utilisant un liquide conventionnel peuvent suivre une échéance proche de 2 ans ou 48 000 km (30 000 miles). Certains véhicules modernes dotés d'un liquide longue durée peuvent atteindre 5 ans ou plus de 160 000 km (100 000 miles). Vérifiez les préconisations de votre constructeur : la formulation et l'âge du véhicule changent les besoins.",
    footnote: "Ces intervalles sont des repères indicatifs, convertis en kilomètres de manière approximative. Ils ne remplacent pas la documentation de votre voiture.",
  },
  blocks: [
    { type: "heading", text: "À quoi sert le liquide de refroidissement et pourquoi le remplacer ?" },
    { type: "paragraph", text: "Le liquide circule dans le moteur et le radiateur pour absorber et évacuer la chaleur, et ainsi limiter les risques de surchauffe. Il contient aussi des agents antigel pour protéger le circuit en hiver, ainsi que des inhibiteurs de corrosion destinés à limiter la rouille, les dépôts et la corrosion électrochimique des composants métalliques." },
    { type: "paragraph", text: "Ces inhibiteurs se dégradent au fil du temps et de l'utilisation. Une fois leur efficacité réduite, le circuit n'est plus aussi bien protégé contre la corrosion, même si le liquide semble encore propre et coloré. C'est pourquoi son remplacement peut être nécessaire selon un calendrier, même lorsque le système de refroidissement fonctionne normalement." },
    { type: "heading", text: "Intervalles habituels de remplacement" },
    { type: "subheading", text: "Liquide conventionnel à additifs inorganiques (IAT)" },
    { type: "paragraph", text: "Intervalle indicatif : tous les 2 ans ou environ 48 000 km (30 000 miles)." },
    { type: "paragraph", text: "Présent sur de nombreux véhicules plus anciens, il contient des inhibiteurs dont l'efficacité peut diminuer plus rapidement. Il est parfois vert ou jaune, mais la couleur ne permet pas d'identifier fiablement sa formulation." },
    { type: "subheading", text: "Liquide OAT (Organic Acid Technology)" },
    { type: "paragraph", text: "Intervalle indicatif : tous les 5 ans ou environ 160 000 km (100 000 miles)." },
    { type: "paragraph", text: "Utilisé sur de nombreux véhicules modernes, ce type emploie des inhibiteurs à base d'acides organiques, généralement conçus pour durer davantage. Il peut être orange, rouge ou rose. Ne mélangez pas des fluides sans confirmation de leur compatibilité : une formule OAT n'est pas nécessairement compatible avec un liquide conventionnel." },
    { type: "subheading", text: "Liquide HOAT (technologie hybride)" },
    { type: "paragraph", text: "Intervalle indicatif : souvent autour de 5 ans, mais variable." },
    { type: "paragraph", text: "Il combine différentes technologies d'inhibiteurs et équipe certains véhicules selon le fabricant. L'intervalle et la compatibilité dépendent de sa formulation précise : suivez les spécifications indiquées par le constructeur." },
    { type: "paragraph", text: "Ne vous fiez pas à la couleur : plusieurs fabricants utilisent des teintes différentes pour des produits proches, ou une teinte similaire pour des formulations distinctes. Un mélange inadapté peut aussi modifier la couleur du circuit." },
    { type: "heading", text: "Signes indiquant qu'il faut examiner le liquide plus tôt" },
    { type: "subheading", text: "Température moteur plus élevée que d'habitude" },
    { type: "paragraph", text: "Une hausse anormale peut indiquer un défaut du système de refroidissement. Le niveau de liquide, une éventuelle fuite et le thermostat font partie des éléments à faire vérifier. En cas de surchauffe, arrêtez-vous en sécurité et suivez les recommandations du constructeur." },
    { type: "subheading", text: "Niveau de liquide sous le repère minimum" },
    { type: "paragraph", text: "Un circuit étanche ne devrait pas perdre continuellement du liquide. Une baisse répétée peut indiquer une fuite externe (durite, radiateur, vase d'expansion) ou interne (notamment joint de culasse). Faire l'appoint sans rechercher la cause ne résout pas le problème." },
    { type: "subheading", text: "Liquide brun, rouillé ou chargé de particules" },
    { type: "paragraph", text: "La présence de rouille ou de dépôts peut signaler une corrosion du circuit ou un liquide dégradé. Un professionnel pourra déterminer si un rinçage et un remplacement sont nécessaires." },
    { type: "subheading", text: "Odeur sucrée dans le compartiment moteur" },
    { type: "paragraph", text: "Certains liquides ont une odeur caractéristique légèrement sucrée. La percevoir dans l'habitacle ou près du moteur peut indiquer une fuite. N'ignorez pas ce signe : une perte de liquide peut entraîner une surchauffe." },
    { type: "subheading", text: "Chauffage de l'habitacle moins efficace" },
    { type: "paragraph", text: "Le chauffage utilise la chaleur transportée par le liquide de refroidissement. Une baisse importante peut venir d'un niveau insuffisant, d'air dans le circuit ou d'un thermostat défectueux, et justifie une vérification." },
    { type: "subheading", text: "Fumée blanche persistante ou vapeur à l'échappement" },
    { type: "paragraph", text: "Une petite quantité de vapeur lors d'un démarrage à froid peut être de la condensation normale. Une fumée blanche persistante peut cependant signaler la présence de liquide dans la chambre de combustion, notamment en cas de problème de joint de culasse : faites contrôler le véhicule rapidement." },
    { type: "heading", text: "Que risque-t-on en retardant le remplacement ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Corrosion des composants internes : radiateur, pompe à eau, radiateur de chauffage et culasse.",
        "Accumulation de tartre et de dépôts qui réduit progressivement l'efficacité du refroidissement.",
        "Surchauffe pouvant entraîner, dans les cas graves, une défaillance du joint de culasse ou des dégâts moteur.",
        "Détérioration possible des joints de la pompe à eau avec un liquide devenu agressif.",
        "Obstruction du radiateur de chauffage par les dépôts accumulés dans un ancien liquide.",
      ],
    },
    { type: "heading", text: "Comment suivre les remplacements du liquide de refroidissement ?" },
    { type: "paragraph", text: "Enregistrez chaque vidange ou rinçage du circuit avec sa date, son kilométrage et le type de liquide employé. Pour certains liquides longue durée, la date est un repère important ; les programmes plus anciens peuvent aussi dépendre fortement du kilométrage." },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Date du remplacement ou rinçage.",
        "Kilométrage lors de l'intervention.",
        "Type de liquide utilisé (conventionnel, OAT, HOAT ou référence prescrite).",
        "Observations sur l'état du liquide retiré.",
      ],
    },
    { type: "paragraph", text: "CarCare Diary permet de consigner les opérations liées au refroidissement, avec date, kilométrage et notes. Les échéances peuvent être suivies dans l'application et des notifications facultatives peuvent être activées selon la configuration." },
    { type: "callout", title: "Sécurité : ne jamais ouvrir un circuit chaud", body: "N'ouvrez jamais le bouchon du radiateur ni celui du vase d'expansion lorsque le moteur est chaud. Le circuit est sous pression et le liquide peut dépasser 100 °C. Attendez que le moteur soit complètement refroidi avant toute vérification ou opération d'appoint, et respectez les instructions du constructeur." },
  ],
  faqHeading: "Questions fréquentes",
  faqs: [...faqs],
  ctaSlug: "quand-changer-liquide-refroidissement",
  cta: {
    kind: "interval",
    headline: "Suivez les remplacements du liquide de refroidissement",
    endHeadline: "Retrouvez tous vos entretiens du circuit de refroidissement",
    image: "log",
    subtitle: "Notez les interventions avec leur date et leur kilométrage, puis activez les rappels facultatifs pour les prochaines échéances.",
    endSubtitle: "Enregistrez vos interventions, suivez votre kilométrage et conservez les informations de votre voiture sur votre téléphone.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Quand changer le liquide de refroidissement ?",
    description: "Découvrez quand remplacer le liquide de refroidissement, les différences OAT/HOAT, les signes de fuite et les précautions de sécurité.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-change-coolant" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-change-coolant" },
    ],
    datePublished: "2026-04-16",
    dateModified: "2026-11-04",
  },
};

export const whenToChangeCoolantFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
