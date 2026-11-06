import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-courroie-distribution";

const faqs = [
  {
    question: "À quelle fréquence faut-il changer la courroie de distribution ?",
    answer: "Certaines préconisations se situent autour de 96 000 à 161 000 km et imposent aussi une limite d'âge, par exemple 5 à 7 ans. Une voiture qui roule peu peut atteindre la limite d'âge bien avant le kilométrage. Les valeurs exactes dépendent du moteur : le programme constructeur doit être suivi sans extrapolation.",
  },
  {
    question: "Quelle différence entre courroie et chaîne de distribution ?",
    answer: "La courroie est en caoutchouc renforcé et suit généralement un calendrier de remplacement. La chaîne est métallique et peut être conçue pour la durée de vie du moteur avec une lubrification correcte, souvent sans échéance périodique. Les deux peuvent néanmoins présenter des défaillances. La documentation ou le code moteur permet de savoir ce que possède votre véhicule.",
  },
  {
    question: "Qu'est-ce qu'un moteur interférentiel ?",
    answer: "C'est un moteur dans lequel les pistons et soupapes occupent successivement un même espace, leur mouvement étant synchronisé par la distribution. Si la courroie casse, ils peuvent entrer en collision : soupapes tordues, pistons abîmés et dégâts de culasse. Un moteur non interférentiel possède un dégagement différent et peut s'arrêter sans ce type de collision, même si la panne reste sérieuse.",
  },
  {
    question: "La courroie prévient-elle avant de casser ?",
    answer: "Souvent non. Certains problèmes produisent un bruit de cliquetis ou des difficultés de démarrage, mais la rupture peut aussi se produire sans signe annonciateur. C'est pourquoi il faut suivre **le délai de remplacement**, sans attendre que le moteur manifeste un symptôme.",
  },
  {
    question: "Faut-il remplacer le kit complet ?",
    answer: "Très souvent, les professionnels conseillent de remplacer aussi le tendeur, les galets et parfois la pompe à eau, selon le montage. Ces pièces ont des durées de vie comparables et demandent parfois la même opération de démontage. Vérifiez la composition du kit recommandée par votre constructeur et le mécanicien.",
  },
  {
    question: "Comment conserver l'historique du remplacement ?",
    answer: "Notez la date, le kilométrage et les pièces changées en même temps, en particulier les galets et la pompe à eau. Car l'âge compte autant que le kilométrage, les deux informations sont essentielles. CarCare Diary vous permet de garder ce suivi et de préparer des rappels sur les deux dimensions.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer la courroie de distribution ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand changer la courroie de distribution ?",
    lede: "Le remplacement de la **courroie de distribution** est une intervention majeure sur les moteurs qui en possèdent une. Les constructeurs prescrivent généralement une limite de kilométrage **et** d'âge, car le caoutchouc vieillit même lorsque la voiture roule peu. La seule échéance fiable est celle du **programme d'entretien propre à votre moteur**. Sur un moteur dit « interférentiel », une rupture peut provoquer des dégâts mécaniques très importants.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Certaines marques prévoient un remplacement autour de **96 000 à 161 000 km** (60 000–100 000 miles) et souvent une limite d'âge de **5 à 7 ans**, mais ces fourchettes ne sont **pas universelles**. Référez-vous impérativement à la recommandation du constructeur et respectez le premier seuil atteint, en kilomètres ou en années.",
  },
  blocks: [
    { type: "heading", text: "Courroie ou chaîne de distribution : quelle différence ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Courroie de distribution.** Fabriquée en caoutchouc renforcé. Elle doit généralement être remplacée à un intervalle défini selon l'âge et le kilométrage. Son fonctionnement est souvent plus silencieux qu'une chaîne.",
        "**Chaîne de distribution.** Constituée de maillons métalliques, elle est souvent conçue pour fonctionner longtemps avec une lubrification correcte et ne possède pas toujours d'intervalle de remplacement périodique. Elle peut cependant présenter des problèmes d'usure ou de tension selon le moteur.",
      ],
    },
    { type: "heading", text: "Les échéances de remplacement" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Kilométrage.** Certaines prescriptions se situent entre 96 000 et 161 000 km, mais des moteurs plus anciens peuvent exiger moins et d'autres davantage. Seule la documentation du modèle permet de confirmer.",
        "**Âge.** De nombreux programmes ajoutent une limite d'environ 5 à 7 ans indépendamment du kilométrage. Une voiture peu utilisée peut donc atteindre l'échéance par le temps seul.",
        "**Kit de distribution.** On remplace souvent en même temps le tendeur, les galets et, selon l'architecture, la pompe à eau. Leur accès nécessite une partie de la même main-d'œuvre ; vérifiez précisément le contenu du kit recommandé.",
      ],
    },
    { type: "heading", text: "Les signes d'un problème possible de distribution" },
    { type: "paragraph", text: "Une courroie peut céder **sans avertissement**. Le calendrier constructeur est donc plus fiable que les symptômes. Certains signes peuvent néanmoins suggérer un problème :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Cliquetis rythmique dans le moteur.** Une courroie vieillissante ou mal tendue peut produire des bruits, mais un manque d'huile ou d'autres organes peuvent également en être responsables.",
        "**Démarrage difficile.** Un décalage du calage des arbres à cames peut perturber le fonctionnement et rendre le démarrage laborieux.",
        "**Ratés moteur.** Un calage incorrect peut provoquer des combustions irrégulières, mais de nombreux défauts d'allumage ou de carburant produisent aussi ce symptôme.",
        "**Fuite d'huile près du carter de distribution.** Un joint de vilebrequin ou d'arbre à cames qui fuit peut contaminer la courroie et raccourcir sa durée de vie.",
        "**Échéance dépassée.** Si la limite de temps ou de distance est atteinte, le remplacement est dû **même sans symptôme**.",
      ],
    },
    {
      type: "callout",
      tone: "danger",
      title: "Les risques d\u0027une courroie qui casse",
      body: "La rupture survient souvent sans signe précurseur. Sur un **moteur interférentiel**, pistons et soupapes peuvent entrer en collision, endommageant sérieusement le moteur. Sur un moteur non interférentiel, le moteur s\u0027immobilise. La panne entraîne des frais importants et l\u0027arrêt brutal en circulation peut créer une situation dangereuse.",
    },
    { type: "heading", text: "Comment suivre la courroie de distribution ?" },
    { type: "paragraph", text: "Consignez la **date du remplacement**, le **kilométrage**, les **composants du kit changés** (tendeur, galets, pompe à eau) et les éventuels travaux sur les joints moteur. Il est essentiel de conserver **les deux seuils : l'âge et la distance**. CarCare Diary permet d'enregistrer l'intervention et de suivre les échéances avec des rappels selon la date ou le kilométrage, lorsqu'ils sont configurés." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Historique automobile", href: "/car-service-history-app" },
        { label: "Bougies d'allumage", href: "/fr/blog/quand-changer-bougies-allumage" },
        { label: "Calendrier d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur la distribution",
  faqs: [...faqs],
  ctaSlug: "quand-changer-courroie-distribution",
  cta: {
    kind: "replacement",
    headline: "Ne perdez pas la date de votre dernière distribution",
    endHeadline: "Gardez l'historique de la distribution de votre voiture",
    image: "log",
    subtitle: "Enregistrez les pièces remplacées, la date et le kilométrage.",
    endSubtitle: "Conservez les informations utiles pour respecter le prochain intervalle.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Courroie de distribution : quand la changer et quels risques ?",
    description: "Kilométrage, âge, rupture : découvrez comment suivre la courroie de distribution et pourquoi l'intervalle constructeur est essentiel.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-timing-belt" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-timing-belt" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceTimingBeltFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
