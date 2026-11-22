import type { CarMaintenanceTrackerCopy } from "./types";

export const carMaintenanceTrackerCopyFr: CarMaintenanceTrackerCopy = {
  pageFaqs: [
    {
      question: "À quoi sert une application de suivi d'entretien voiture ?",
      answer:
        "Elle permet de consigner les interventions, de suivre le kilométrage, de consulter les échéances et de retrouver l'historique d'un véhicule au même endroit. CarCare Diary est téléchargeable gratuitement sur iPhone et Android.",
    },
    {
      question: "Quels types d'entretiens puis-je enregistrer ?",
      answer:
        "Vidanges, plaquettes de frein, filtres, bougies, permutation des pneus, vidanges de liquides, batteries, inspections et autres travaux. Chaque fiche peut inclure une date, un kilométrage, des références et des notes.",
    },
    {
      question: "Comment fonctionnent les rappels ?",
      answer:
        "Les échéances sont calculées d'après les interventions consignées, le kilométrage que vous saisissez et les intervalles d'entretien. L'application affiche l'état des services et peut vous notifier si les rappels sont activés.",
    },
    {
      question: "Puis-je suivre le kilométrage de ma voiture ?",
      answer:
        "Oui. Vous saisissez le kilométrage du compteur dans l'application. Cette information sert à calculer les prochaines échéances et à compléter l'historique des interventions.",
    },
    {
      question: "Puis-je partager l'historique d'entretien ?",
      answer:
        "Oui. Vous pouvez créer un lien public en lecture seule vers les interventions consignées de votre véhicule, utile notamment lors d'une vente.",
    },
    {
      question: "CarCare Diary est-elle gratuite ?",
      answer:
        "Oui, pour suivre un véhicule et utiliser les fonctions de base : carnet d'entretien, kilométrage, échéances et partage des interventions. Base couvre jusqu'à trois véhicules et Pro permet d'en gérer davantage, avec des fonctionnalités payantes supplémentaires.",
    },
  ],
  seo: {
    title: "Suivi d'entretien voiture : application et rappels | CarCare Diary",
    description:
      "Suivez les entretiens, le kilométrage et les rappels de votre voiture avec CarCare Diary. Carnet d'entretien organisé et historique partageable.",
    path: "/fr/suivi-entretien-voiture",
    jsonLdSoftwareDescription:
      "Application de suivi d'entretien automobile avec carnet d'entretien, kilométrage, rappels et historique partageable.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Application de suivi d'entretien voiture",
    titleAccent: "services, kilométrage et rappels au même endroit",
    body:
      "Enregistrez les vidanges, interventions sur les freins, remplacements de pneus et autres entretiens avec leurs dates, kilométrages et notes. CarCare Diary permet aussi de consulter les prochaines échéances et de partager l'historique de votre véhicule. Téléchargement gratuit sur iPhone et Android.",
    subline: "Gratuit sur iPhone et Android",
  },
  whatItHelps: {
    eyebrow: "Fonctionnalités",
    heading: "Ce qu'un suivi d'entretien vous aide à faire",
    intro:
      "Sans système dédié, il devient difficile de retrouver les interventions et de savoir quand un entretien doit être réalisé.",
    benefits: [
      {
        title: "Enregistrez chaque entretien",
        description:
          "Consignez vidanges, freins, filtres, liquides, inspections et autres interventions. Ajoutez la date, le kilométrage lorsque pertinent et vos notes.",
      },
      {
        title: "Anticipez les échéances",
        description:
          "Consultez les services à prévoir à partir des interventions enregistrées, du compteur kilométrique et des intervalles configurés.",
      },
      {
        title: "Suivez le kilométrage",
        description:
          "Mettez à jour votre compteur pour garder un historique cohérent et des échéances pertinentes.",
      },
      {
        title: "Constituez un historique d'entretien",
        description:
          "Chaque intervention s'ajoute au carnet du véhicule. Parcourez les catégories et retrouvez les travaux effectués.",
      },
      {
        title: "Partagez vos informations lors d'une vente",
        description:
          "Générez un lien public en lecture seule vers les entretiens consignés. Un acheteur peut les consulter avant de se déplacer.",
      },
    ],
    guidePrefix: "Pour apprendre à tenir votre carnet au quotidien, consultez",
    guideLinkLabel: "notre guide de suivi d'entretien",
    guidePath: "/fr/blog/comment-suivre-entretien-voiture",
  },
  appVsNotes: {
    eyebrow: "Pourquoi utiliser une application ?",
    heading: "Notes et factures ne suffisent pas toujours",
    intro:
      "Sans système dédié, il devient difficile de retrouver les interventions et de savoir quand un entretien doit être réalisé.",
    withoutHeading: "Sans suivi structuré",
    withHeading: "Avec CarCare Diary",
    oldWay: [
      "Factures papier qui se perdent ou s'effacent",
      "Difficulté à retrouver la date de la dernière vidange",
      "Aucun rappel avant qu'un problème apparaisse",
      "Peu d'informations à présenter lors de la vente",
      "Incertitude sur les prochains services",
      "Notes dispersées entre téléphone, e-mails et boîte à gants",
    ],
    newWay: [
      "Interventions enregistrées au même endroit",
      "Historique consultable avec dates et kilométrages",
      "Échéances calculées à partir des données enregistrées",
      "Lien partageable vers l'historique disponible",
      "Vue des opérations proches ou en retard",
      "Un seul carnet accessible depuis l'application",
    ],
  },
  whoItsFor: {
    eyebrow: "Pour qui ?",
    heading: "Pensé pour les automobilistes au quotidien",
    intro:
      "CarCare Diary s'adresse à celles et ceux qui souhaitent mieux organiser l'entretien de leur véhicule.",
    personas: [
      {
        title: "Conducteurs au quotidien",
        description:
          "Gardez le rythme des vidanges, changements de filtres et révisions sans vous fier uniquement à votre mémoire.",
      },
      {
        title: "Foyers avec plusieurs véhicules",
        description:
          "Regroupez les carnets de plusieurs voitures avec leurs propres interventions et rappels, selon votre abonnement.",
      },
      {
        title: "Personnes qui préparent une vente",
        description:
          "Présentez un historique d'entretien documenté à l'aide d'un lien, pour faciliter les échanges avec les acheteurs.",
      },
    ],
    multiVehiclePrefix: "Plusieurs véhicules à gérer ?",
    fleetManagementLabel: "Découvrez le suivi d'entretien de flotte",
    fleetManagementPath: "/fr/gestion-entretien-flotte",
    fleetMaintenanceLabel: "Application d'entretien de flotte",
    fleetMaintenancePath: "/fr/application-entretien-flotte",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions fréquentes sur les applications de suivi d'entretien",
    intro: "Tout savoir sur le fonctionnement de CarCare Diary et le suivi des interventions.",
  },
  cta: {
    eyebrow: "Télécharger l'application",
    heading: "Commencez à suivre l'entretien de votre voiture",
    body:
      "Une application gratuite pour iPhone et Android : enregistrez les interventions, tenez le kilométrage à jour, consultez les rappels et partagez l'historique.",
    link1Label: "Historique d'entretien",
    link1Path: "/fr/historique-entretien-voiture",
    link2Label: "Carnet d'entretien numérique",
    link2Path: "/fr/carnet-entretien-voiture",
    link3Label: "Checklist d'entretien",
    link3Path: "/fr/blog/checklist-entretien-voiture",
  },
  images: {
    carPageAlt: "Tableau de bord CarCare Diary avec kilométrage et état des entretiens",
    addingLogAlt: "Formulaire d'ajout d'une intervention dans CarCare Diary",
  },
};
