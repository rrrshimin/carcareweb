import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/checklist-entretien-voiture";

const faqs = [
  {
    question: "Que faut-il inclure dans une checklist d'entretien automobile ?",
    answer: "Elle devrait couvrir les éléments susceptibles de s'user ou de se dégrader : huile moteur et filtre, pneus (pression et usure), freins, liquide de refroidissement et autres fluides, batterie, filtres à air et d'habitacle, éclairage et essuie-glaces. La fréquence dépend du modèle et de l'utilisation ; consultez en priorité le carnet d'entretien du constructeur.",
  },
  {
    question: "À quelle fréquence vérifier les différents éléments ?",
    answer: "La pression des pneus et le liquide lave-glace peuvent faire l'objet d'une vérification mensuelle. D'autres contrôles, comme l'huile moteur, la permutation des pneus et l'état des freins, dépendent du temps ou du kilométrage. Les bougies, le liquide de refroidissement et la courroie de distribution peuvent avoir des échéances beaucoup plus espacées et variables. Le constructeur fournit les intervalles adaptés à votre voiture.",
  },
  {
    question: "Faut-il conserver un historique des entretiens ?",
    answer: "Oui. Cela vous aide à savoir ce qui a été fait, à quelle date et à quel kilométrage, à anticiper les prochaines interventions et à présenter un suivi lors de la vente du véhicule. Une liste simple comportant l'opération, la date et le kilométrage est déjà plus utile que de compter uniquement sur votre mémoire.",
  },
  {
    question: "Peut-on suivre sa checklist sur une application ?",
    answer: "Oui. CarCare Diary permet de consigner les entretiens avec leur date, le kilométrage lorsque nécessaire, les spécifications et des notes. Les informations enregistrées forment progressivement un historique consultable par catégorie et partageable via un lien.",
  },
  {
    question: "Une checklist et des entretiens documentés peuvent-ils aider à la revente ?",
    answer: "Oui. Montrer à un acheteur un historique régulier et documenté peut renforcer la confiance et faciliter la discussion sur les travaux effectués. Cela ne certifie toutefois pas l'état mécanique du véhicule ni ne garantit son prix de vente.",
  },
  {
    question: "CarCare Diary est-il gratuit ?",
    answer: "Oui. La formule gratuite couvre un véhicule et les fonctions essentielles de journal d'entretien, de kilométrage et de partage d'informations d'entretien. Base permet de gérer jusqu'à trois véhicules et Pro davantage. Certaines fonctions, comme les journaux de dépenses et leurs analyses, nécessitent une formule payante.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Checklist entretien voiture",
  hero: {
    category: "Entretien",
    readTime: "6 min de lecture",
    title: "Checklist d'entretien automobile : les contrôles à ne pas oublier",
    lede: "Une checklist d'entretien automobile couvre l'huile moteur, les pneus, les freins, les fluides, la batterie, les filtres, l'éclairage et les essuie-glaces, avec des fréquences de contrôle adaptées à chaque élément. Retrouvez ci-dessous les principaux postes à surveiller, leur fréquence indicative et les informations à enregistrer après chaque intervention.",
  },
  lastUpdatedLabel: "Dernière mise à jour : août 2026",
  blocks: [
    { type: "heading", text: "Checklist d'entretien par catégorie" },
    { type: "paragraph", text: "Chaque modèle ayant son propre programme, les fréquences ci-dessous sont des **repères indicatifs**, et non des obligations universelles. Consultez le carnet d'entretien du constructeur pour votre motorisation." },
    {
      type: "cardGrid",
      cols: 2,
      cards: [
        {
          title: "Huile moteur et filtre à huile",
          badge: "Tous les 8 000 à 16 000 km ou tous les 3 à 6 mois (selon le véhicule)",
          items: [
            "Vérifier le niveau et l'état apparent de l'huile (tous les mois).",
            "Effectuer la vidange et remplacer le filtre à huile à l'échéance prévue.",
            "Rechercher d'éventuelles fuites d'huile sous la voiture.",
            "Contrôler l'état du bouchon de remplissage et du joint de la jauge d'huile.",
          ],
        },
        {
          title: "Pneus",
          badge: "Contrôle mensuel ; permutation éventuelle tous les 8 000 à 12 000 km",
          items: [
            "Contrôler la pression des pneus, y compris celle de la roue de secours si présente.",
            "Examiner la profondeur des sculptures : **1,6 mm minimum légal** en France ; ne pas attendre cette limite pour réagir.",
            "Permuter les pneus pour répartir l'usure lorsque cela est recommandé.",
            "Rechercher les dommages sur les flancs, les hernies et l'usure irrégulière.",
            "Faire contrôler l'équilibrage des roues en cas de vibrations.",
          ],
        },
        {
          title: "Freins",
          badge: "Contrôle visuel tous les 6 mois ; inspection approfondie chaque année",
          items: [
            "Vérifier l'épaisseur des plaquettes ; autour de **3 mm ou moins**, faire évaluer rapidement.",
            "Examiner les disques pour repérer rayures prononcées, déformations ou usure.",
            "Vérifier le niveau et l'état du liquide de frein.",
            "Prêter attention aux grincements, frottements métalliques ou pulsations.",
            "Prévoir le remplacement du liquide de frein selon les préconisations du constructeur (souvent autour de deux ans).",
          ],
        },
        {
          title: "Fluides",
          badge: "Contrôle des niveaux chaque mois ; remplacement selon les échéances constructeur",
          items: [
            "Vérifier le niveau et l'état du liquide de refroidissement (remplacement généralement tous les **2 à 4 ans**).",
            "Vérifier le niveau du liquide de transmission si un contrôle utilisateur est prévu.",
            "Vérifier le liquide de direction assistée si le système est hydraulique.",
            "Compléter le liquide lave-glace lorsque c'est nécessaire.",
            "Vérifier les fluides du différentiel et de la boîte de transfert sur les 4x4/AWD.",
          ],
        },
        {
          title: "Batterie et circuit électrique",
          badge: "Contrôle de l'état de la batterie une fois par an",
          items: [
            "Rechercher la corrosion sur les bornes de la batterie.",
            "Faire tester l'état de la batterie (contrôle souvent disponible en centre auto).",
            "Vérifier le fonctionnement de tous les feux : phares, feux arrière et clignotants.",
            "Contrôler les fusibles si un équipement électrique cesse de fonctionner.",
          ],
        },
        {
          title: "Filtres",
          badge: "Filtre à air : 24 000–48 000 km · Filtre d'habitacle : 19 000–24 000 km",
          items: [
            "Remplacer le filtre à air moteur lorsqu'il est encrassé ou obstrué.",
            "Remplacer le filtre d'habitacle selon le calendrier d'entretien.",
            "Vérifier le filtre à carburant lorsqu'il est accessible et que son entretien est prévu.",
          ],
        },
        {
          title: "Essuie-glaces et visibilité",
          badge: "Inspection tous les 6 mois ; remplacement chaque année ou si traces",
          items: [
            "Examiner l'état des balais et les remplacer s'ils laissent des traces.",
            "Nettoyer régulièrement les balais avec un chiffon humide.",
            "Vérifier l'absence d'impacts ou de fissures sur le pare-brise.",
            "S'assurer du bon fonctionnement de l'essuie-glace arrière lorsqu'il est présent.",
          ],
        },
        {
          title: "Éléments à intervalles longs",
          badge: "Entre 48 000 et 160 000 km suivant le véhicule et l'opération",
          items: [
            "Remplacement des bougies d'allumage (suivant le carnet d'entretien).",
            "Contrôle et remplacement de la courroie de distribution (**élément critique** : consulter impérativement le constructeur).",
            "Renouvellement du liquide de refroidissement selon le programme applicable.",
            "Vidange du liquide de transmission quand elle est prescrite.",
            "Contrôle de la courroie d'accessoires.",
            "Vérification des suspensions et de la direction.",
          ],
        },
      ],
    },
    { type: "paragraph", text: "**Important :** ces intervalles sont des indications générales. Consultez toujours le carnet d'entretien de votre véhicule pour obtenir les échéances exactes recommandées par le constructeur, en particulier pour les courroies de distribution, qui varient sensiblement d'un modèle à l'autre." },
    { type: "primaryCta" },
    { type: "heading", text: "À quelle fréquence consulter votre checklist ?" },
    { type: "paragraph", text: "Regroupez les contrôles par fréquence pour conserver une routine simple : inspection visuelle mensuelle, vérifications tous les trois à six mois, contrôle annuel plus approfondi et suivi des interventions moins fréquentes. Associer certains contrôles à une habitude existante, comme un passage à la station-service, aide à ne pas les oublier." },
    { type: "subheading", text: "Tous les mois" },
    { type: "paragraph", text: "*Contrôles visuels rapides, souvent réalisables en moins de cinq minutes :*" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Pression des pneus",
        "Vérification visuelle du niveau d'huile",
        "Niveau du liquide lave-glace",
        "Fonctionnement des feux",
      ],
    },
    { type: "subheading", text: "Tous les trois à six mois" },
    { type: "paragraph", text: "*Éléments souvent examinés à l'occasion des entretiens périodiques :*" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Vidange et remplacement du filtre à huile, uniquement si l'échéance du constructeur le prévoit",
        "Permutation des pneus, si elle est recommandée et compatible avec le montage",
        "Niveau du liquide de frein",
        "État des balais d'essuie-glace",
      ],
    },
    { type: "subheading", text: "Tous les ans" },
    { type: "paragraph", text: "*Contrôles utiles notamment avant l'hiver ou un long trajet :*" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Inspection complète des freins",
        "Contrôle de l'état de la batterie",
        "Vérification des filtres à air moteur et d'habitacle",
        "Niveau et état du liquide de refroidissement",
      ],
    },
    { type: "subheading", text: "Tous les deux à quatre ans" },
    { type: "paragraph", text: "*Éléments moins fréquents, à suivre selon les préconisations du constructeur :*" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Remplacement du liquide de refroidissement lorsque prévu",
        "Remplacement du liquide de frein selon son échéance",
        "Bougies d'allumage, selon leur type et le moteur",
        "Vérification de la courroie d'accessoires",
      ],
    },
    { type: "paragraph", text: "Vous pouvez fixer vos grandes vérifications à des moments faciles à retenir : avant l'hiver, avant un long déplacement ou à l'occasion du contrôle périodique du véhicule. Un repère saisonnier est parfois plus facile à retenir qu'un chiffre arbitraire au compteur." },
    { type: "paragraph", text: "Les calendriers d’entretien varient selon les modèles : ne remplacez jamais les préconisations du constructeur par ces repères généraux." },
    { type: "heading", text: "Quelles informations enregistrer après chaque entretien ?" },
    { type: "paragraph", text: "Conservez cinq informations : la nature de l'opération, sa date, le kilométrage, les caractéristiques des pièces et produits utilisés, et les notes utiles. Ces entrées s'accumulent progressivement pour former un historique des travaux réellement enregistrés." },
    {
      type: "list",
      variant: "check",
      items: [
        "**Type d'intervention :** vidange, permutation des pneus, remplacement des plaquettes, etc.",
        "**Date :** jour de réalisation des travaux.",
        "**Kilométrage :** valeur lue au compteur lors de l'intervention, lorsque disponible.",
        "**Spécifications et pièces :** viscosité de l'huile, référence du filtre, marque des pneus, type de fluide, etc.",
        "**Notes :** observations du garagiste et recommandations pour la prochaine visite.",
      ],
    },
    { type: "paragraph", text: "Au fil des années, ces entrées permettent de retrouver une chronologie précise des entretiens. Elles peuvent être utiles à un acheteur, à un garagiste ou, dans certaines situations, à un assureur." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "guide du carnet d'entretien", href: "/vehicle-maintenance-log" },
        { label: "historique des interventions", href: "/car-service-history" },
      ],
    },
    { type: "heading", text: "Comment CarCare Diary vous aide à garder le rythme" },
    { type: "paragraph", text: "Avec CarCare Diary, vous pouvez conserver la nature, la date, le kilométrage et les caractéristiques de chaque intervention, ainsi que vos notes. L'historique des opérations enregistrées est regroupé par catégorie et peut être partagé grâce à un lien en lecture seule. Des rappels facultatifs sont disponibles lorsque les paramètres et les autorisations de notification le permettent." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Application de suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Historique d'entretien", href: "/car-service-history" },
        { label: "Comment suivre l'entretien de sa voiture", href: "/fr/blog/comment-suivre-entretien-voiture" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes",
  faqs: [...faqs],
  ctaSlug: "checklist-entretien-voiture",
  cta: {
    kind: "checklist",
    headline: "Transformez votre checklist en carnet d'entretien",
    endHeadline: "Votre checklist et vos entretiens dans une seule application",
    image: "log",
    subtitle: "Consignez chaque intervention avec sa date, son kilométrage et vos notes, puis activez si vous le souhaitez les rappels des prochaines échéances.",
    endSubtitle: "Enregistrez vos interventions, suivez le kilométrage et retrouvez l'historique de votre voiture sur votre téléphone.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Checklist entretien voiture : les contrôles à prévoir",
    description: "Consultez la liste des points d'entretien de votre voiture : pneus, freins, huile, fluides, batterie, filtres et historique des interventions.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/car-maintenance-checklist" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/car-maintenance-checklist" },
    ],
    datePublished: "2026-04-16",
    dateModified: "2026-11-04",
  },
};

export const carMaintenanceChecklistFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
