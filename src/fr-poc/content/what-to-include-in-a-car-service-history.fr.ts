import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/que-contient-historique-entretien-voiture";

const faqs = [
  {
    question: "Que doit contenir l'historique d'entretien d'une voiture ?",
    answer: "Il est utile de noter la nature de chaque intervention, sa date, le kilométrage correspondant, les caractéristiques des pièces et fluides utilisés et les observations ou travaux à prévoir. Plus ces informations sont précises, plus l'historique devient utile au fil des années.",
  },
  {
    question: "Faut-il relever le kilométrage à chaque intervention ?",
    answer: "Dans la mesure du possible, oui. Le kilométrage permet de mesurer la distance parcourue entre deux entretiens et de suivre les échéances liées à la distance. Une date seule donne une chronologie, mais pas toutes les informations nécessaires pour prévoir l'entretien.",
  },
  {
    question: "Faut-il noter les pièces et fluides utilisés ?",
    answer: "Oui. Renseigner la viscosité de l'huile, la référence d'un filtre ou la marque d'un pneu prend peu de temps et facilite les interventions futures. Il vaut mieux connaître les spécifications exactes que devoir tout rechercher ultérieurement.",
  },
  {
    question: "Peut-on conserver un historique d'entretien numérique ?",
    answer: "Oui. CarCare Diary vous permet d'enregistrer sur votre téléphone les interventions, leurs dates, les kilométrages et des notes comprenant les informations sur les pièces et fluides. Les entrées sont organisées par catégorie et les informations d'entretien partagées peuvent être consultées via un lien.",
  },
  {
    question: "Un historique d'entretien peut-il aider à vendre une voiture ?",
    answer: "Oui. Un historique documenté permet à un acheteur de mieux comprendre les travaux réalisés et les points suivis. Il facilite la discussion et peut réduire certaines incertitudes, sans garantir l'état mécanique ni la valeur de revente du véhicule. CarCare Diary permet de partager les interventions enregistrées grâce à un lien en lecture seule.",
  },
  {
    question: "CarCare Diary est-il gratuit ?",
    answer: "Oui. La formule gratuite permet de suivre un véhicule, d'enregistrer les entretiens courants, de mettre à jour manuellement le kilométrage et de partager des informations d'entretien via un lien. Base prend en charge jusqu'à trois véhicules et Pro permet d'en gérer davantage. Certaines fonctionnalités, notamment les journaux de dépenses et leurs analyses, nécessitent une formule payante.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Historique entretien voiture",
  hero: {
    category: "Guides",
    readTime: "8 min de lecture",
    title: "Que doit contenir l'historique d'entretien d'une voiture ?",
    lede: "Chaque intervention devrait être accompagnée de sa nature, de sa date, du kilométrage, des pièces remplacées, des fluides utilisés, des observations du garagiste, de l'identité de l'intervenant et des éventuels travaux à prévoir. Voici comment renseigner ces huit éléments, avec des exemples et les détails que l'on oublie le plus souvent.",
  },
  lastUpdatedLabel: "Dernière mise à jour : novembre 2026",
  blocks: [
    { type: "heading", text: "Pourquoi un historique d'entretien détaillé est-il important ?" },
    { type: "paragraph", text: "Un historique précis indique quels travaux ont été réalisés sur la voiture, à quelle date et à quel kilométrage. C'est exactement ce qu'un garagiste, un acheteur ou vous-même pourriez avoir besoin de savoir. Son utilité devient évidente lorsqu'une intervention semble en retard, qu'un professionnel demande la spécification d'une huile ou qu'un acheteur veut comprendre comment le véhicule a été entretenu." },
    { type: "paragraph", text: "La plupart des propriétaires conservent quelques informations, mais pas toujours suffisamment. Voyons ce qu'il est utile de noter et ce qui est souvent oublié." },
    { type: "primaryCta" },
    { type: "heading", text: "Les huit informations à conserver pour chaque entretien" },
    { type: "paragraph", text: "Ces huit éléments permettent de constituer une fiche détaillée. Ils ne sont pas tous pertinents pour chaque opération : un contrôle de pression des pneus ne nécessite pas une liste de pièces. Mais ils forment une bonne base pour les interventions importantes." },
    { type: "subheading", text: "Type d'intervention" },
    { type: "paragraph", text: "Indiquez précisément ce qui a été fait. « Vidange » est un début ; « vidange moteur, huile 0W-30 entièrement synthétique et filtre Bosch » est bien plus utile. Plus la fiche est précise, moins vous aurez d'informations à reconstituer par la suite." },
    { type: "subheading", text: "Date" },
    { type: "paragraph", text: "Notez la date exacte de l'intervention. Un mois ou une année approximatifs deviennent vite insuffisants : une date précise permet de calculer les intervalles et de consulter une chronologie compréhensible." },
    { type: "subheading", text: "Kilométrage au compteur" },
    { type: "paragraph", text: "Relevez le compteur au moment de l'entretien. Cette information est essentielle pour les échéances fondées sur la distance parcourue. Sans elle, vous disposez d'un historique, mais pas de toutes les données nécessaires à un calendrier d'entretien." },
    { type: "subheading", text: "Pièces remplacées" },
    { type: "paragraph", text: "Notez leur nom et, si possible, leur référence ou leur marque : filtre, modèle de plaquettes, caractéristiques de la batterie, marque et dimensions des pneus. Vous éviterez ainsi de chercher à nouveau les mêmes informations lors du prochain remplacement." },
    { type: "subheading", text: "Fluides utilisés" },
    { type: "paragraph", text: "Précisez la viscosité de l'huile, le type de liquide de refroidissement, la spécification du liquide de frein ou la référence du fluide de transmission. La compatibilité est importante : savoir exactement quel produit a été utilisé peut éviter une erreur lors d'un appoint ultérieur." },
    { type: "subheading", text: "Notes et observations" },
    { type: "paragraph", text: "Conservez ce que le garagiste a signalé, ce que vous avez vous-même remarqué et les recommandations pour la prochaine visite : plaquettes encore à 40 %, léger jeu dans un joint de transmission, permutation des pneus conseillée dans 5 000 km. Ces notes préservent des informations qu'une fiche structurée ne décrit pas toujours." },
    { type: "subheading", text: "Qui a effectué les travaux ?" },
    { type: "paragraph", text: "Indiquez le nom du garage ou « effectué par moi-même ». Cela aide à retrouver l'origine d'une intervention, à répondre à d'éventuelles questions de garantie et à présenter le suivi du véhicule lors d'une vente." },
    { type: "subheading", text: "Travaux à prévoir" },
    { type: "paragraph", text: "Si le professionnel recommande de surveiller une courroie, de contrôler les freins ou de remplacer bientôt un fluide, notez-le clairement pour ne pas l'oublier." },
    { type: "heading", text: "Exemples de fiches d'entretien bien renseignées" },
    { type: "paragraph", text: "Voici six exemples réalistes, mais non exhaustifs, de ce que vous pouvez conserver pour des opérations courantes." },
    { type: "subheading", text: "Vidange moteur" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Intervention : remplacement de l'huile moteur et du filtre",
        "Date : 14 mars 2025",
        "Kilométrage : 62 400 km",
        "Huile : 0W-30 entièrement synthétique, 5 L",
        "Filtre : Bosch 3323",
        "Note : prochain entretien prévu à 70 000 km ou dans 12 mois",
      ],
    },
    { type: "subheading", text: "Plaquettes de frein avant" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Intervention : remplacement des plaquettes avant",
        "Date : 8 novembre 2024",
        "Kilométrage : 59 800 km",
        "Pièces : Brembo P50037, des deux côtés",
        "Note : plaquettes arrière estimées à environ 40 % de garniture restante ; à surveiller lors du prochain entretien",
      ],
    },
    { type: "subheading", text: "Filtre à air" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Intervention : remplacement du filtre à air moteur",
        "Date : 22 juillet 2024",
        "Kilométrage : 57 100 km",
        "Filtre : Mann C2594",
        "Note : filtre d'habitacle également remplacé lors de la visite",
      ],
    },
    { type: "subheading", text: "Contrôle annuel" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Intervention : contrôle réglementaire annuel du véhicule, selon le pays concerné",
        "Date : 15 janvier 2025",
        "Kilométrage : 61 500 km",
        "Résultat : favorable",
        "Observation : balais d'essuie-glace usés, remplacés le même jour",
        "Note : usure uniforme des pneus, aucune observation concernant la suspension",
      ],
    },
    { type: "subheading", text: "Remplacement du liquide de refroidissement" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Intervention : vidange, rinçage et remplissage du circuit de refroidissement",
        "Date : 3 avril 2024",
        "Kilométrage : 55 200 km",
        "Fluide : liquide OAT, mélange 50/50, 6 L",
        "Note : circuit contrôlé sous pression, aucune fuite détectée",
      ],
    },
    { type: "subheading", text: "Permutation des pneus" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Intervention : permutation des pneus entre l'avant et l'arrière, avec permutation croisée indiquée dans la fiche d'origine",
        "Date : 22 juillet 2024",
        "Kilométrage : 57 100 km",
        "Note : usure régulière ; profondeur des sculptures : 5 mm à l'avant, 6 mm à l'arrière",
        "Note : pression réglée à 32 psi (environ 2,2 bar) sur les quatre pneus",
      ],
    },
    { type: "paragraph", text: "La permutation doit être compatible avec le montage des pneus et les recommandations du constructeur. La pression de cet exemple n'est pas une valeur conseillée pour tous les véhicules." },
    { type: "heading", text: "Les détails le plus souvent oubliés" },
    { type: "paragraph", text: "Ces cinq informations semblent parfois secondaires, mais valent la peine d'être notées." },
    { type: "subheading", text: "Le kilométrage exact" },
    { type: "paragraph", text: "On note souvent l'intervention sans relever le compteur. Il devient alors difficile d'estimer la prochaine échéance en kilomètres. Même une valeur approximative, clairement signalée comme telle, est préférable à une absence totale d'information." },
    { type: "subheading", text: "Les spécifications de l'huile et des autres fluides" },
    { type: "paragraph", text: "Écrire « vidange » sans préciser la viscosité ou la marque oblige le prochain intervenant à rechercher ces informations. La compatibilité des fluides compte : quelques secondes suffisent à consigner les spécifications utilisées." },
    { type: "subheading", text: "La marque ou la référence des pièces" },
    { type: "paragraph", text: "Une fiche de remplacement des plaquettes sans marque ni référence perd une information utile. Elle pourra pourtant aider à choisir une pièce compatible lors de la prochaine intervention." },
    { type: "subheading", text: "Les observations et recommandations" },
    { type: "paragraph", text: "Courroie usée, pression d'un pneu légèrement insuffisante, élément à surveiller : les remarques orales d'un professionnel sont vite oubliées. Sans elles, la fiche ne raconte qu'une partie de l'intervention." },
    { type: "subheading", text: "L'identité de l'intervenant" },
    { type: "paragraph", text: "Concessionnaire, garage indépendant ou entretien réalisé soi-même : cette information facilite la traçabilité, notamment pour une question de garantie ou un suivi ultérieur." },
    { type: "heading", text: "Comment CarCare Diary organise l'historique d'entretien" },
    { type: "paragraph", text: "CarCare Diary permet de consigner la nature de l'intervention, la date, le kilométrage lorsque nécessaire, les caractéristiques des pièces et fluides dans le champ de spécifications, ainsi que des notes. Les entrées sont regroupées par catégorie et construisent progressivement l'historique des opérations que vous avez enregistrées pour chaque véhicule." },
    { type: "paragraph", text: "Pour communiquer ces informations à un garagiste ou à un acheteur, vous pouvez générer un lien public en lecture seule. Le destinataire peut consulter les données d'entretien partagées sans compte. Les coûts, journaux financiers, pièces jointes et noms de prestataires ne font pas partie de cette vue publique." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Comment suivre l'entretien de sa voiture", href: "/fr/blog/comment-suivre-entretien-voiture" },
        { label: "Comment organiser ses documents d'entretien", href: "/fr/blog/organiser-historique-entretien-voiture" },
        { label: "Historique d'entretien automobile", href: "/car-service-history" },
        { label: "Carnet d'entretien du véhicule", href: "/vehicle-maintenance-log" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes",
  faqs: [...faqs],
  ctaSlug: "que-contient-historique-entretien-voiture",
  cta: {
    kind: "records",
    headline: "Constituez votre historique d'entretien au fil du temps",
    endHeadline: "Gardez votre historique prêt à être partagé",
    image: "log",
    subtitle: "Enregistrez les interventions, actualisez le kilométrage et partagez les informations d'entretien consignées grâce à un simple lien.",
    endSubtitle: "Enregistrez les entretiens, suivez le kilométrage et conservez les informations de votre voiture sur votre téléphone.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Historique entretien voiture : que faut-il noter ?",
    description: "Découvrez quelles informations conserver dans l'historique d'entretien de votre voiture : dates, kilométrage, pièces, fluides, notes et exemples.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/what-to-include-in-a-car-service-history" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/what-to-include-in-a-car-service-history" },
    ],
    datePublished: "2026-04-16",
    dateModified: "2026-11-04",
  },
};

export const whatToIncludeInACarServiceHistoryFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
