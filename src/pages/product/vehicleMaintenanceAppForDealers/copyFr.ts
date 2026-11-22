import type { SmbFleetPageCopy } from "../shared/smbFleetPageTypes";

export const vehicleMaintenanceAppForDealersCopyFr: SmbFleetPageCopy = {
  pageFaqs: [
    { question: "Un vendeur automobile peut-il utiliser CarCare Diary ?", answer: "Oui. L'application aide à conserver les interventions par véhicule, avec leur date, leur kilométrage et les notes utiles. Elle convient particulièrement à ceux qui souhaitent documenter les opérations d'entretien." },
    { question: "Peut-on partager l'historique avec un acheteur ?", answer: "Oui. Un lien public en lecture seule permet de consulter les interventions consignées et partagées, sans compte CarCare Diary." },
    { question: "CarCare Diary remplace-t-elle un logiciel de gestion de concession ?", answer: "Non. Elle n'assure pas la gestion des stocks, des ventes, des financements ou d'un CRM concessionnaire. Elle est centrée sur le suivi d'entretien." },
    { question: "Quelles informations conserver avant la vente d'une voiture d'occasion ?", answer: "Les dates et kilométrages des entretiens, vidanges, freins, pneus, réparations majeures, inspections et justificatifs disponibles. CarCare Diary peut aider à organiser le carnet, mais les preuves d'intervention restent importantes." },
    { question: "Peut-on suivre les entretiens à réaliser avant la vente ?", answer: "Oui. Les échéances calculées à partir des données enregistrées permettent de repérer les services à prévoir sur chaque véhicule." },
    { question: "Combien de véhicules peut-on suivre ?", answer: "Un dans la formule gratuite, jusqu'à trois avec Base, et davantage avec Pro. Le carnet et le partage des interventions ne sont pas facturés à l'entrée individuelle selon le fonctionnement actuel." },
  ],
  seo: {
    title: "Carnet d'entretien pour vendeurs de voitures | CarCare Diary",
    description:
      "Organisez les entretiens et kilométrages des véhicules à vendre. Partagez leur historique par lien avec les acheteurs, depuis CarCare Diary.",
    path: "/fr/carnet-entretien-voitures-professionnels",
    jsonLdSoftwareDescription:
      "Application de carnet d'entretien pour professionnels de la vente automobile et revendeurs de véhicules.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Carnet d'entretien pour vendeurs de voitures",
    titleAccent: "des dossiers clairs à partager avec les acheteurs",
    body:
      "CarCare Diary aide les petits professionnels et particuliers qui revendent des voitures à enregistrer les travaux, les dates et les kilométrages de chaque véhicule. Partagez l'historique des interventions grâce à un lien public en lecture seule.",
    subline: "Gratuit pour commencer · Abonnements multivéhicules disponibles",
    imageAlt: "Historique d'entretien des véhicules à vendre dans CarCare Diary.",
  },
  problem: {
    heading: "Un historique clair facilite la confiance des acheteurs",
    body:
      "Les acheteurs veulent savoir quels entretiens ont été réalisés. Sans dossier structuré, il est difficile de retrouver les informations de chaque voiture. CarCare Diary permet de consigner les interventions et de présenter un historique daté, sans prétendre qu'il remplace les factures ou attestations originales.",
  },
  features: {
    heading: "Fonctionnalités",
    intro: "Pas de gestion de stock, de CRM ou de financement : un carnet d'entretien et un historique partageable par véhicule.",
    items: [
      { title: "Interventions par véhicule", description: "Consignez vidanges, freins, pneus, réparations et préparations à la vente avec leurs dates, kilométrages et notes." },
      { title: "Dates et compteurs", description: "Retrouvez les informations enregistrées pour expliquer quand et à quel kilométrage un service a été effectué." },
      { title: "Pièces, liquides et observations", description: "Indiquez les références de pièces, les fluides et les notes. Certaines données de prestataire dépendent des fonctionnalités souscrites." },
      { title: "Échéances avant la vente", description: "Vérifiez les entretiens proches ou dépassés avant de présenter un véhicule à la vente." },
      { title: "Lien de partage", description: "Transmettez à un acheteur un lien public en lecture seule vers les travaux consignés." },
      { title: "Historique distinct par voiture", description: "Chaque véhicule possède sa chronologie d'interventions, sans mélanger les dossiers." },
    ],
  },
  useCases: {
    heading: "Cas d'utilisation",
    items: [
      { title: "Petits négociants en véhicules d'occasion", detail: "Gardez une fiche d'entretien par voiture en stock et partagez les interventions connues avec les acheteurs." },
      { title: "Revendeurs particuliers", detail: "Montrez les travaux consignés sur un véhicule acquis, entretenu puis revendu." },
      { title: "Préparateurs et centres de detailing", detail: "Notez les travaux de préparation avant la mise en vente et leur date." },
      { title: "Familles préparant une vente", detail: "Conservez le suivi d'entretien durant la possession du véhicule pour pouvoir le partager ensuite." },
    ],
  },
  lightweight: {
    heading: "Des informations prêtes à présenter",
    intro: "",
    withoutLabel: "Sans carnet structuré",
    withLabel: "Avec CarCare Diary",
    without: [
      "Factures et notes dispersées",
      "Acheteurs demandant des informations difficiles à retrouver",
      "Entretiens à venir oubliés avant la vente",
      "Informations perdues lors d'une reprise",
    ],
    with: [
      "Historique par véhicule avec dates et kilométrages",
      "Lien de consultation à envoyer lors d'un échange",
      "Échéances visibles avant la mise en vente",
      "Opérations consignées dans la fiche du véhicule",
    ],
    calloutPrefix: "Voir aussi :",
    calloutLinks: [
      { to: "/fr/partager-historique-entretien-voiture", label: "Partager l'historique d'entretien" },
      { to: "/fr/application-carnet-entretien-voiture", label: "Application carnet d'entretien" },
    ],
  },
  faqHeading: "Questions fréquentes",
  cta: {
    heading: "Organisez les dossiers d'entretien des véhicules que vous vendez",
    body:
      "Commencez gratuitement. Consignez les interventions et partagez l'historique d'entretien de chaque voiture depuis votre téléphone.",
    alsoSeePrefix: "Voir aussi :",
    links: [
      { to: "/fr/suivi-entretien-vehicules-entreprise", label: "Véhicules de petite entreprise" },
      { to: "/fr/entretien-flotte-location-voitures", label: "Entretien de flotte de location" },
      { to: "/fr/application-carnet-entretien-voiture", label: "Application carnet d'entretien" },
    ],
  },
};