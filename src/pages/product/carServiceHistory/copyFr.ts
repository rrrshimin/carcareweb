import type { CarServiceHistoryCopy } from "./types";

export const carServiceHistoryCopyFr: CarServiceHistoryCopy = {
  pageFaqs: [
    {
      question: "Qu'est-ce que l'historique d'entretien d'une voiture ?",
      answer:
        "C'est le relevé des opérations d'entretien et de réparation : type d'intervention, date, kilométrage, pièces ou liquides utilisés et notes éventuelles. Il permet de comprendre comment le véhicule a été entretenu.",
    },
    {
      question: "Quelles informations doit contenir un carnet d'entretien ?",
      answer:
        "Indiquez la nature de l'opération, la date, le kilométrage si pertinent, les références des pièces et les observations. Les vidanges, freins, filtres, liquides, batteries, pneus et inspections en sont des exemples.",
    },
    {
      question: "Peut-on conserver un historique d'entretien numérique ?",
      answer:
        "Oui. CarCare Diary vous permet d'enregistrer les interventions avec leurs détails sur votre téléphone et de les parcourir par catégorie.",
    },
    {
      question: "Puis-je partager l'historique de ma voiture ?",
      answer:
        "Oui. Un lien public en lecture seule permet de consulter les interventions consignées. C'est utile pour un acheteur ou un mécanicien.",
    },
    {
      question: "Un historique d'entretien aide-t-il à vendre un véhicule ?",
      answer:
        "Un dossier documenté peut rassurer les acheteurs en réduisant l'incertitude sur les travaux réalisés. Il facilite les discussions, sans garantir un meilleur prix de vente.",
    },
    {
      question: "CarCare Diary est-elle gratuite ?",
      answer:
        "Oui, pour le carnet d'entretien, le kilométrage et le partage des interventions d'un véhicule. Base permet d'en suivre jusqu'à trois, Pro davantage, avec des fonctionnalités supplémentaires selon la formule.",
    },
  ],
  seo: {
    title: "Historique d'entretien voiture : carnet et suivi | CarCare Diary",
    description:
      "Conservez l'historique d'entretien de votre voiture avec dates, kilométrages et interventions. Organisez et partagez vos informations avec CarCare Diary.",
    path: "/fr/historique-entretien-voiture",
    jsonLdSoftwareDescription:
      "Carnet d'entretien pour suivre les services, le kilométrage et partager les interventions consignées.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Historique d'entretien voiture",
    titleAccent: "conservez et partagez vos interventions",
    body:
      "L'historique d'entretien rassemble les travaux réalisés sur votre voiture : vidanges, freins, pneus et contrôles, avec les dates, les kilométrages et les notes utiles. CarCare Diary vous aide à les organiser dans votre téléphone et à les partager lorsque nécessaire.",
    subline: "Gratuit sur iPhone et Android",
  },
  whyItMatters: {
    eyebrow: "Pourquoi c'est important",
    heading: "L'importance d'un historique d'entretien bien tenu",
    intro: "Il est facile de vouloir conserver toutes ses factures, puis de perdre le fil. Un carnet structuré facilite le suivi.",
    problems: [
      {
        title: "Factures perdues, informations manquantes",
        description:
          "Les justificatifs papier peuvent s'effacer ou se perdre. Sans notes, difficile de retrouver les opérations déjà réalisées.",
      },
      {
        title: "Absence de chronologie claire",
        description:
          "Quand les plaquettes ont-elles été changées ? Et le filtre d'habitacle ? Un historique évite de s'en remettre à des souvenirs approximatifs.",
      },
      {
        title: "Entretiens oubliés ou dépassés",
        description:
          "Sans relevé des interventions, une échéance peut passer inaperçue jusqu'à l'apparition d'un problème.",
      },
      {
        title: "Vente plus compliquée",
        description:
          "Les acheteurs demandent souvent l'historique. Une documentation incomplète rend les échanges moins simples.",
      },
    ],
  },
  whatBelongs: {
    eyebrow: "Quelles informations conserver ?",
    heading: "Que noter dans votre carnet d'entretien",
    intro:
      "Un historique complet couvre bien plus que les seules vidanges. Voici les types d'interventions courantes à documenter.",
    serviceTypes: [
      { name: "Vidange moteur", details: "Date, kilométrage, viscosité de l'huile, référence du filtre" },
      { name: "Freins", details: "Plaquettes, disques, étriers, date, kilométrage" },
      {
        name: "Filtres à air et d'habitacle",
        details: "Référence du filtre, date, kilométrage",
      },
      {
        name: "Liquides",
        details: "Refroidissement, freins, transmission, direction assistée",
      },
      {
        name: "Bougies d'allumage",
        details: "Type de bougie, écartement, date et kilométrage",
      },
      {
        name: "Pneus : permutation et remplacement",
        details: "Marque, dimensions, pression, date de permutation",
      },
      {
        name: "Batterie",
        details: "Référence, date, kilométrage, informations de garantie",
      },
      {
        name: "Contrôles et inspections",
        details: "Contrôle technique, observations, résultats",
      },
      {
        name: "Courroie ou chaîne de distribution",
        details: "Date, kilométrage, tendeurs et galets",
      },
      {
        name: "Suspension et direction",
        details: "Amortisseurs, ressorts, biellettes, géométrie",
      },
      {
        name: "Entretien de boîte de vitesses",
        details: "Type de liquide, date, kilométrage, filtre",
      },
      {
        name: "Autres réparations",
        details: "Toute autre intervention avec notes et références disponibles",
      },
    ],
    detailLinePrefix: "Pour chaque intervention, notez au minimum",
    detailLineHighlight1: "la date",
    detailLineHighlight2: "le kilométrage lorsqu'il est pertinent",
    detailLineHighlight3: "le travail effectué",
    detailLineHighlight4: "les références ou observations utiles",
    detailLineSuffix: ". Plus votre carnet est précis, plus il sera facile à consulter.",
    guidePrefix: "",
    guideLinkLabel: "Que doit contenir l'historique d'entretien d'une voiture ?",
    guidePath: "/fr/blog/que-contient-historique-entretien-voiture",
  },
  howItHelps: {
    eyebrow: "Comment CarCare Diary vous aide",
    heading: "Un carnet clair pour chaque véhicule",
    intro:
      "CarCare Diary regroupe vos interventions dans un seul historique, au lieu de notes ou justificatifs dispersés.",
    outcomes: [
      {
        title: "Une chronologie des interventions",
        description: "Les opérations enregistrées sont regroupées dans l'historique du véhicule.",
      },
      {
        title: "Dates et kilométrages",
        description:
          "Conservez les dates et le kilométrage applicable à chaque entretien pour situer les travaux dans le temps.",
      },
      {
        title: "Références et notes",
        description:
          "Indiquez huiles, pièces, observations du mécanicien et informations à retrouver plus tard.",
      },
      {
        title: "Classement par catégorie",
        description:
          "Retrouvez les opérations moteur, freins, liquides, électricité et autres catégories.",
      },
      {
        title: "Partage par lien",
        description:
          "Créez un lien public en lecture seule vers les entretiens consignés, sans exiger de compte au destinataire.",
      },
    ],
    trackerPrefix: "Vous souhaitez aussi suivre les échéances ?",
    trackerLinkLabel: "Découvrez le suivi d'entretien voiture",
    trackerPath: "/fr/suivi-entretien-voiture",
  },
  resale: {
    eyebrow: "Transparence",
    heading: "Partagez l'historique d'entretien de votre voiture",
    body1:
      "Lors d'une vente, présenter un historique documenté facilite la discussion sur les travaux effectués et rend les informations plus transparentes.",
    body2:
      "CarCare Diary permet de générer un lien vers les interventions que vous choisissez de partager. Le destinataire consulte la vue en lecture seule dans son navigateur.",
    bullets: [
      "Présente les interventions enregistrées, leurs dates et leurs détails",
      "Consultable dans un navigateur, sans compte",
      "Peut être envoyé par message, e-mail ou dans une annonce",
      "Facilite la discussion sur les travaux effectués et le prix demandé",
    ],
  },
  images: {
    categoriesAlt: "Liste des interventions classées par catégorie dans CarCare Diary",
    sharedAlt: "Page web d'historique d'entretien CarCare Diary sur mobile",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions fréquentes sur l'historique d'entretien",
    intro: "Tout savoir sur la conservation, l'organisation et le partage du carnet.",
  },
  cta: {
    eyebrow: "Télécharger l'application",
    heading: "Commencez l'historique d'entretien de votre voiture",
    body:
      "Téléchargez gratuitement CarCare Diary sur iPhone ou Android, enregistrez vos interventions et partagez le carnet quand vous en avez besoin.",
    link1Label: "Suivi d'entretien",
    link1Path: "/fr/suivi-entretien-voiture",
    link2Label: "Carnet d'entretien numérique",
    link2Path: "/fr/carnet-entretien-voiture",
    link3Label: "Comment organiser son historique ?",
    link3Path: "/fr/blog/organiser-historique-entretien-voiture",
  },
};
