import type { SmbFleetPageCopy } from "../shared/smbFleetPageTypes";

export const carRentalFleetMaintenanceAppCopyFr: SmbFleetPageCopy = {
  pageFaqs: [
    { question: "CarCare Diary convient-elle à une petite flotte de location ?", answer: "Oui. Chaque voiture peut disposer de sa fiche, de son historique, du kilométrage et des rappels. Le nombre de véhicules dépend de la formule, et un lien permet de partager les interventions consignées." },
    { question: "L'application gère-t-elle les réservations et contrats de location ?", answer: "Non. CarCare Diary se concentre sur l'entretien, le kilométrage et les échéances. Elle ne gère pas les réservations, contrats de location ou paiements. Ces besoins nécessitent un outil dédié." },
    { question: "Peut-on suivre l'entretien par kilométrage ?", answer: "Oui. Vous saisissez le compteur, et l'application calcule les échéances à partir des intervalles définis et des services enregistrés." },
    { question: "Chaque voiture possède-t-elle un historique séparé ?", answer: "Oui. Les interventions, dates, relevés et rappels sont associés au véhicule concerné." },
    { question: "Peut-on partager l'historique d'une voiture de location ?", answer: "Oui. Vous pouvez créer un lien public en lecture seule vers les interventions incluses dans le partage, sans compte pour le destinataire. Cela peut faciliter les échanges avec des partenaires ou des acheteurs." },
    { question: "Combien de voitures peut-on suivre ?", answer: "La formule gratuite couvre un véhicule. Base permet jusqu'à trois véhicules et Pro davantage, selon les limites et fonctionnalités en vigueur." },
  ],
  seo: {
    title: "Suivi d'entretien d'une flotte de voitures de location | CarCare Diary",
    description:
      "Gérez l'entretien des voitures de location : historiques par véhicule, kilométrages, échéances et dossiers partageables, depuis une application mobile.",
    path: "/fr/entretien-flotte-location-voitures",
    jsonLdSoftwareDescription:
      "Application de suivi d'entretien des véhicules de location avec carnet par voiture, kilométrages, échéances et historique partageable.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Suivi d'entretien d'une flotte de voitures de location",
    titleAccent: "historique et rappels par véhicule",
    body:
      "CarCare Diary aide les petites entreprises de location à enregistrer les interventions, le kilométrage et les échéances de chaque voiture. Retrouvez les carnets d'entretien séparés et partagez les informations utiles, sans tableur ni configuration compliquée.",
    subline: "Gratuit pour commencer · Abonnements multivéhicules disponibles",
    imageAlt: "Application de suivi d'entretien des voitures de location dans CarCare Diary.",
  },
  problem: {
    heading: "De nombreux conducteurs, un historique d'entretien à préserver",
    body:
      "Lorsqu'une voiture passe d'un conducteur à l'autre, les justificatifs s'égarent et il devient difficile de répondre à une question simple : « Quand a-t-elle été entretenue pour la dernière fois ? » CarCare Diary rassemble les interventions dans un carnet par véhicule, accessible depuis l'application.",
  },
  features: {
    heading: "Fonctionnalités",
    intro: "Pas de réservations, de dispatching ou de GPS : seulement le suivi d'entretien et les échéances de vos véhicules.",
    items: [
      { title: "Entretien par voiture", description: "Chaque véhicule de location possède sa fiche et son carnet distincts : vidanges, pneus, filtres, freins et autres services." },
      { title: "Kilométrage et dates", description: "Associez aux interventions leurs dates et les relevés de compteur disponibles." },
      { title: "Échéances à venir", description: "Consultez les prochains entretiens calculés à partir des services enregistrés et du kilométrage actualisé." },
      { title: "Notes, pièces et liquides", description: "Ajoutez les pièces remplacées, fluides utilisés et observations pertinentes. Le champ prestataire dépend des fonctionnalités disponibles." },
      { title: "Historique par véhicule", description: "Parcourez les interventions consignées pour une voiture donnée, sans fouiller dans plusieurs dossiers." },
      { title: "Partage lorsque nécessaire", description: "Transmettez un lien public en lecture seule vers les interventions enregistrées à un acheteur, un partenaire ou un garagiste." },
    ],
  },
  useCases: {
    heading: "Pour quel type d'activité ?",
    items: [
      { title: "Petites flottes de location", detail: "Suivez vidanges, pneus et contrôles des voitures de location dans un même système." },
      { title: "Hôtes de location entre particuliers", detail: "Conservez les opérations liées aux voitures proposées sur des plateformes de location." },
      { title: "Agences locales de location", detail: "Retrouvez les échéances de chaque véhicule et anticipez les prochaines visites au garage." },
      { title: "Véhicules d'entreprise partagés", detail: "Suivez les services de voitures conduites par plusieurs collaborateurs." },
    ],
  },
  lightweight: {
    heading: "Sans ou avec un carnet dédié",
    intro: "",
    withoutLabel: "Sans suivi structuré",
    withLabel: "Avec CarCare Diary",
    without: [
      "Factures et historiques dispersés",
      "Souvenirs approximatifs des derniers services",
      "Difficulté à savoir quelle voiture est en retard",
      "Documentation à reconstituer lors d'une vente",
    ],
    with: [
      "Interventions regroupées pour chaque voiture",
      "Dates et kilométrages consignés",
      "Statuts d'entretien par véhicule",
      "Lien partageable vers l'historique disponible",
    ],
    calloutPrefix: "Voir aussi :",
    calloutLinks: [
      { to: "/fr/gestion-entretien-flotte", label: "Gestion d'entretien de flotte" },
      { to: "/fr/application-entretien-flotte", label: "Application d'entretien de flotte" },
    ],
  },
  faqHeading: "Questions fréquentes",
  cta: {
    heading: "Organisez l'entretien de votre flotte de location",
    body:
      "Commencez gratuitement. Consignez les interventions de chaque voiture de location et consultez les échéances depuis votre téléphone.",
    alsoSeePrefix: "Voir aussi :",
    links: [
      { to: "/fr/suivi-entretien-vehicules-entreprise", label: "Suivi des véhicules de petite entreprise" },
      { to: "/fr/suivi-entretien-voiture", label: "Suivi d'entretien voiture" },
    ],
  },
};