import type { FleetMaintenanceAppCopy } from "./types";

export const fleetMaintenanceAppCopyFr: FleetMaintenanceAppCopy = {
  pageFaqs: [
    {
      question: "Qu'est-ce qu'une application d'entretien de flotte ?",
      answer: "Elle permet de suivre les carnets d'entretien, les kilométrages et les rappels de plusieurs véhicules. CarCare Diary convient aux petites structures qui veulent organiser les interventions sans logiciel de logistique complet."
    },
    {
      question: "Comment les carnets des véhicules sont-ils organisés ?",
      answer: "Chaque véhicule dispose de son propre historique. Vous enregistrez les interventions avec leurs dates, kilométrages applicables, références et notes."
    },
    {
      question: "Peut-on définir des rappels pour chaque véhicule ?",
      answer: "Oui. L'application calcule les échéances à partir des informations enregistrées et des intervalles configurés. Les notifications nécessitent leur activation."
    },
    {
      question: "Comment fonctionne le suivi kilométrique ?",
      answer: "Vous mettez à jour manuellement le compteur de chaque véhicule. Les relevés servent au calcul des prochains entretiens."
    },
    {
      question: "Peut-on suivre les coûts à l'échelle de la flotte ?",
      answer: "Les formules payantes donnent accès au suivi des dépenses ; les analyses agrégées de flotte relèvent des fonctionnalités Pro. Les dépenses ne sont pas incluses dans l'historique public partagé."
    },
    {
      question: "Peut-on partager l'historique d'un véhicule ?",
      answer: "Oui. Le lien public en lecture seule permet de consulter les interventions incluses dans le partage."
    },
    {
      question: "CarCare Diary est-elle gratuite pour une flotte ?",
      answer: "La formule gratuite permet de suivre un véhicule. Base couvre jusqu'à trois véhicules et Pro davantage. Les fonctionnalités incluses dépendent de la formule."
    }
  ],
  seo: {
    title: "Application d'entretien de flotte : suivi et rappels | CarCare Diary",
    description: "Suivez les interventions, kilométrages et rappels d'une petite flotte depuis votre téléphone. Un carnet d'entretien par véhicule avec CarCare Diary.",
    path: "/fr/application-entretien-flotte",
    jsonLdSoftwareDescription: "Suivi de maintenance de flotte avec carnet d'entretien, relevés kilométriques et rappels par véhicule."
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Application d'entretien de flotte",
    titleAccent: "carnets, kilométrages et rappels",
    body: "CarCare Diary aide les petites flottes à conserver les interventions de chaque véhicule dans une application mobile. Enregistrez les entretiens, actualisez les kilométrages et consultez les prochaines échéances, sans système de gestion complexe.",
    subline: "Gratuit pour commencer · Formules multivéhicules disponibles",
    imageAlt: "Application CarCare Diary présentant les interventions et les rappels d'entretien d'une flotte."
  },
  features: {
    eyebrow: "Fonctionnalités d'entretien",
    heading: "Fonctionnalités d'entretien",
    intro:
      "Carnets, kilométrages et échéances par véhicule, à partir des interventions que vous consignez.",
    items: [
      {
        title: "Carnet d'entretien par véhicule",
        description:
          "Consignez vidanges, freins, pneus, changements de filtres et autres interventions avec leurs dates, kilométrages, références et notes."
      },
      {
        title: "Suivi du compteur",
        description:
          "Saisissez le kilométrage de chaque véhicule et enregistrez les relevés pertinents lors des services."
      },
      {
        title: "Rappels par type d'intervention",
        description:
          "Définissez des intervalles adaptés aux vidanges, freins, pneus et autres entretiens récurrents. L'application affiche leurs échéances."
      },
      {
        title: "Historique par véhicule",
        description:
          "Parcourez les travaux consignés, classés par catégorie et par date."
      },
      {
        title: "Suivi des dépenses de maintenance",
        description:
          "Avec les fonctionnalités payantes correspondantes, analysez les coûts d'entretien par véhicule et leur évolution."
      },
      {
        title: "Historique partageable",
        description:
          "Générez un lien public en lecture seule vers les interventions consignées pour un véhicule, sans compte pour le destinataire."
      }
    ],
    secondaryImageAlt:
      "Catégories d'entretien avec statuts des échéances dans CarCare Diary."
  },
  steps: {
    eyebrow: "Comment ça marche ?",
    heading: "Comment ça marche ?",
    intro:
      "Configurez chaque véhicule une fois, puis consignez les interventions au fil du temps.",
    items: [
      {
        number: "01",
        title: "Ajoutez chaque véhicule",
        body:
          "Renseignez marque, modèle et informations utiles. Le nombre de véhicules dépend de votre formule."
      },
      {
        number: "02",
        title: "Indiquez le kilométrage actuel",
        body:
          "Saisissez le compteur de chaque véhicule afin de disposer d'une référence pour les échéances kilométriques."
      },
      {
        number: "03",
        title: "Enregistrez les interventions",
        body:
          "Après chaque service, ajoutez la date, le kilométrage applicable, les pièces et vos notes."
      },
      {
        number: "04",
        title: "Consultez les échéances",
        body:
          "Retrouvez les opérations à jour, proches ou dépassées pour chaque véhicule."
      },
      {
        number: "05",
        title: "Actualisez le compteur régulièrement",
        body:
          "De nouveaux relevés permettent de recalculer les échéances sans connexion OBD."
      }
    ]
  },
  who: {
    eyebrow: "Pour qui ?",
    heading: "Pour qui ?",
    intro:
      "CarCare Diary aide à organiser les carnets d'entretien dès que vous gérez plusieurs véhicules.",
    personas: [
      {
        title: "Artisans et entreprises de services",
        description:
          "Entretenez les utilitaires des plombiers, électriciens, professionnels du bâtiment et autres équipes de terrain."
      },
      {
        title: "Responsables des échéances",
        description:
          "Suivez les opérations récurrentes sur plusieurs véhicules à partir des intervalles et services consignés."
      },
      {
        title: "Gestionnaires d'historiques",
        description:
          "Conservez un dossier d'entretien par voiture ou utilitaire, partageable quand cela devient nécessaire."
      }
    ]
  },
  lightweight: {
    eyebrow: "Alternative simple",
    heading: "Une alternative simple",
    body1:
      "Les plateformes de flotte d'entreprise regroupent GPS, dispatching, cartes carburant et matériel télématique. Si votre priorité est de savoir quels entretiens ont été réalisés sur chaque véhicule, cette complexité est inutile.",
    body2:
      "CarCare Diary se concentre sur les carnets, le kilométrage et les rappels par véhicule — depuis une application mobile aux formules simples.",
    enterpriseLabel: "Logiciels d'entreprise souvent dédiés à…",
    ccdLabel: "CarCare Diary se concentre sur…",
    enterprise: [
      "Matériel GPS et télématique",
      "Évaluation de conduite",
      "Planification des tournées et dispatching",
      "Cartes carburant et intégrations de dépenses",
      "Gestion de conformité réglementaire",
      "Contrats et projets informatiques lourds"
    ],
    ccd: [
      "Carnets d'entretien des véhicules",
      "Kilométrages saisis et intervalles",
      "Rappels calculés à partir des services consignés",
      "Suivi des coûts d'entretien selon la formule",
      "Historique de maintenance partageable",
      "Application mobile sans matériel dédié"
    ],
    relatedPrefix: "Voir aussi :",
    links: [
      {
        to: "/fr/gestion-entretien-flotte",
        label: "Gestion d'entretien de flotte"
      },
      {
        to: "/fr/suivi-entretien-voiture",
        label: "Suivi d'entretien voiture"
      },
      {
        to: "/fr/carnet-entretien-voiture",
        label: "Carnet d'entretien numérique"
      }
    ]
  },
  faq: {
    eyebrow: "Questions fréquentes",
    heading: "Questions sur le suivi d'entretien de flotte",
    intro:
      "Comment CarCare Diary aide les petites flottes à consigner les entretiens et respecter les échéances."
  },
  cta: {
    eyebrow: "Télécharger l'application",
    heading: "Organisez l'entretien des véhicules de votre flotte",
    body:
      "Consignez les interventions, suivez les kilométrages et consultez les prochaines échéances dans une application mobile.",
    links: [
      {
        to: "/fr/gestion-entretien-flotte",
        label: "Gestion de flotte"
      },
      {
        to: "/fr/historique-entretien-voiture",
        label: "Historique d'entretien"
      },
      {
        to: "/fr/blog/comment-suivre-entretien-voiture",
        label: "Guide de suivi d'entretien"
      }
    ]
  }
};
