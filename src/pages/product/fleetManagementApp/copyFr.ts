import type { FleetManagementAppCopy } from "./types";

export const fleetManagementAppCopyFr: FleetManagementAppCopy = {
  pageFaqs: [
    {
      question: "Qu'est-ce qu'une application de gestion d'entretien de flotte ?",
      answer: "C'est un outil pour conserver les carnets d'entretien, kilométrages et échéances de plusieurs véhicules au même endroit. CarCare Diary s'adresse notamment aux petites entreprises et aux personnes qui gèrent plusieurs voitures."
    },
    {
      question: "CarCare Diary permet-elle de suivre plusieurs véhicules ?",
      answer: "Oui, avec une formule payante. Chaque véhicule possède sa fiche, son carnet d'entretien, son kilométrage et ses rappels. Vous pouvez enregistrer des voitures et des véhicules professionnels."
    },
    {
      question: "Comment suit-on le kilométrage des véhicules ?",
      answer: "Vous saisissez manuellement le compteur de chaque véhicule. L'application s'appuie sur ces données pour les échéances d'entretien, sans suivi GPS automatique."
    },
    {
      question: "Comment fonctionnent les rappels dans une flotte ?",
      answer: "Chaque véhicule dispose de ses propres échéances calculées à partir des interventions consignées, de la date et du kilométrage. Les notifications dépendent des réglages du téléphone et de l'application."
    },
    {
      question: "Peut-on partager l'historique d'un véhicule ?",
      answer: "Oui. Un lien public en lecture seule donne accès aux interventions incluses dans le partage, sans compte pour le destinataire."
    },
    {
      question: "CarCare Diary est-elle gratuite pour une flotte ?",
      answer: "La formule gratuite couvre un véhicule. Base couvre jusqu'à trois véhicules et Pro permet d'en suivre davantage. Les fonctions avancées varient selon la formule."
    },
    {
      question: "Quels entretiens peut-on enregistrer ?",
      answer: "Vidanges, filtres, freins, pneus, batterie, bougies, liquides, inspections et autres interventions, avec dates, kilométrages applicables, références et notes."
    }
  ],
  seo: {
    title: "Gestion d'entretien de flotte automobile | CarCare Diary",
    description: "Centralisez les carnets d'entretien, kilométrages et rappels des véhicules d'une petite flotte. Application de suivi d'entretien sur iPhone et Android.",
    path: "/fr/gestion-entretien-flotte",
    jsonLdSoftwareDescription: "Application de gestion d'entretien de flotte pour consigner les interventions, suivre les kilométrages et partager les historiques par véhicule."
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Gestion d'entretien de flotte automobile",
    titleAccent: "simple et centralisée",
    body: "CarCare Diary est une application pour iPhone et Android qui permet d'organiser les interventions, les kilométrages et les échéances de plusieurs véhicules. Conçue pour les petites flottes qui ont besoin d'un suivi d'entretien sans logiciel de logistique complexe.",
    subline: "Essai gratuit avec 1 véhicule · Formules multivéhicules disponibles",
    imageAlt: "Application CarCare Diary affichant les carnets et le suivi d'entretien de plusieurs véhicules."
  },
  features: {
    eyebrow: "Fonctionnalités",
    heading: "Fonctionnalités de suivi de flotte",
    intro:
      "Consultez les carnets d'entretien, les kilométrages et les prochaines échéances de chaque véhicule depuis votre téléphone.",
    items: [
      {
        title: "Fiches par véhicule",
        description:
          "Ajoutez chaque voiture, utilitaire ou camion avec sa marque, son modèle et son immatriculation. Chacun possède ses propres interventions et échéances."
      },
      {
        title: "Carnets d'entretien individuels",
        description:
          "Consignez vidanges, freins, pneus, filtres et autres services avec dates, kilométrages, références et notes."
      },
      {
        title: "Suivi kilométrique",
        description:
          "Mettez à jour manuellement le compteur de chaque véhicule pour conserver un historique pertinent et calculer les prochaines échéances."
      },
      {
        title: "Rappels de maintenance",
        description:
          "Retrouvez les entretiens à prévoir à partir des interventions enregistrées et des intervalles adaptés à chaque véhicule."
      },
      {
        title: "Historique d'entretien",
        description:
          "Parcourez les opérations consignées par véhicule et par catégorie, sans chercher dans plusieurs fichiers."
      },
      {
        title: "Documents de service partageables",
        description:
          "Créez un lien public en lecture seule vers les interventions enregistrées pour un véhicule donné."
      }
    ],
    secondaryImageAlt:
      "Liste des véhicules d'une flotte et de leurs informations d'entretien dans CarCare Diary."
  },
  compare: {
    eyebrow: "Pourquoi regrouper les informations ?",
    heading: "Les dossiers éparpillés ne passent pas à l'échelle d'une flotte",
    intro:
      "Sur papier ou dans des tableurs, les informations se perdent vite quand on gère plusieurs véhicules. Une application dédiée les regroupe au même endroit.",
    withoutLabel: "Sans CarCare Diary",
    withLabel: "Avec CarCare Diary",
    without: [
      "Difficulté à retrouver les interventions réalisées",
      "Échéances oubliées sur plusieurs véhicules",
      "Carnets, factures et tableurs séparés",
      "Aucun suivi clair des opérations récurrentes",
      "Historique difficile à présenter lors d'une vente",
      "Incertitude sur les véhicules à entretenir"
    ],
    with: [
      "Un carnet d'entretien par véhicule",
      "Vue des entretiens à prévoir par véhicule",
      "Informations organisées dans une application",
      "Calculs d'échéances à partir des kilométrages saisis",
      "Lien public vers les interventions consignées",
      "Statuts d'entretien consultables dans la flotte"
    ]
  },
  who: {
    eyebrow: "Pour qui ?",
    heading: "Pour les petites flottes, pas seulement les grandes entreprises",
    intro:
      "CarCare Diary convient à toute personne qui doit organiser l'entretien de plus d'un véhicule.",
    personas: [
      {
        title: "Petites entreprises locales",
        description:
          "Artisans, livreurs et équipes disposant de quelques véhicules : gardez l'entretien des utilitaires et voitures organisé."
      },
      {
        title: "Professionnels de la vente automobile",
        description:
          "Suivez les interventions et partagez un historique documenté des véhicules proposés."
      },
      {
        title: "Foyers avec plusieurs voitures",
        description:
          "Gérez plusieurs carnets, compteurs et rappels depuis un seul compte, selon votre formule."
      },
      {
        title: "Responsables de véhicules partagés",
        description:
          "Retrouvez les entretiens et les relevés kilométriques de véhicules utilisés par plusieurs personnes."
      }
    ]
  },
  lightweight: {
    eyebrow: "Alternative légère",
    heading: "L'essentiel du suivi d'entretien, sans les outils logistiques",
    body1:
      "Les plateformes de gestion de flotte d'entreprise couvrent souvent la télématique, les tournées et des opérations complexes. Si votre besoin principal est de suivre l'entretien de quelques véhicules, une solution plus simple peut suffire.",
    body2:
      "CarCare Diary est centrée sur les interventions et le kilométrage saisi, sans matériel GPS et sans déploiement informatique lourd.",
    enterpriseLabel: "Logiciels de flotte complets",
    ccdLabel: "CarCare Diary",
    enterprise: [
      "Géolocalisation GPS en temps réel",
      "Suivi du comportement des conducteurs",
      "Planification et affectation des tournées",
      "Processus de conformité complexes",
      "Cartes carburant, télématique, matériel embarqué",
      "Contrats et portails d'administration",
      "Licences par utilisateur"
    ],
    ccd: [
      "Carnet d'entretien pour chaque véhicule",
      "Kilométrage saisi et rappels d'intervalle",
      "Gestion de plusieurs véhicules depuis une application",
      "Historique d'entretien partageable",
      "Configuration simple : créez la fiche et consignez les services",
      "Pas de matériel dédié ni de procédure de déploiement complexe",
      "Formule gratuite pour 1 véhicule et abonnements multivéhicules"
    ],
    relatedPrefix: "Pages associées :",
    links: [
      {
        to: "/fr/application-entretien-flotte",
        label: "Application d'entretien de flotte"
      },
      {
        to: "/fr/suivi-entretien-voiture",
        label: "Suivi d'entretien voiture"
      },
      {
        to: "/fr/gestion-entretien-flotte",
        label: "CarCare Diary pour les entreprises"
      }
    ]
  },
  faq: {
    eyebrow: "Questions fréquentes",
    heading: "Questions fréquentes sur la gestion d'entretien de flotte",
    intro:
      "Réponses sur l'organisation des carnets d'entretien pour les petites flottes avec CarCare Diary."
  },
  cta: {
    eyebrow: "Télécharger l'application",
    heading: "Commencez à organiser l'entretien de votre flotte",
    body:
      "Ajoutez vos véhicules, consignez leurs interventions et consultez les échéances depuis votre téléphone. Démarrez gratuitement avec un véhicule.",
    links: [
      {
        to: "/fr/application-entretien-flotte",
        label: "Application d'entretien de flotte"
      },
      {
        to: "/fr/suivi-entretien-voiture",
        label: "Suivi d'entretien automobile"
      },
      {
        to: "/fr/carnet-entretien-voiture",
        label: "Carnet numérique"
      }
    ]
  }
};
