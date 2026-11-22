import type { CarServiceHistoryAppCopy } from "./types";

export const carServiceHistoryAppCopyFr: CarServiceHistoryAppCopy = {
  pageFaqs: [
    {
      question: "Qu'est-ce qu'une application de carnet d'entretien voiture ?",
      answer:
        "Elle permet de consigner les interventions réalisées sur un véhicule avec leur date, leur kilométrage, les pièces utilisées et les notes. CarCare Diary organise ces informations sur iPhone et Android et permet d'en partager une partie par lien.",
    },
    {
      question: "Que faut-il noter dans l'historique d'entretien ?",
      answer:
        "Le type de service, la date, le kilométrage applicable, les références des pièces ou liquides et les observations utiles. Vous pourrez retrouver ces informations par catégorie.",
    },
    {
      question: "Un historique d'entretien facilite-t-il la vente ?",
      answer:
        "Oui. Il peut rassurer les acheteurs sur les opérations consignées et éviter de devoir rassembler toutes les informations au dernier moment.",
    },
    {
      question: "Peut-on partager son carnet d'entretien numériquement ?",
      answer:
        "Oui. Le lien public en lecture seule permet de consulter les interventions et les détails partagés, sans compte CarCare Diary.",
    },
    {
      question: "Un carnet numérique remplace-t-il les documents papier ?",
      answer:
        "Il facilite la consultation des interventions, mais il reste utile de conserver les factures et justificatifs originaux. Le carnet numérique ne remplace pas nécessairement les documents demandés pour une garantie ou une démarche administrative.",
    },
    {
      question: "CarCare Diary est-elle gratuite ?",
      answer:
        "Oui, pour suivre l'entretien d'un véhicule, mettre à jour son kilométrage et partager les opérations enregistrées. Des formules payantes permettent de gérer plusieurs véhicules et d'accéder à d'autres fonctions.",
    },
  ],
  seo: {
    title: "Application carnet d'entretien voiture | CarCare Diary",
    description:
      "Une application de carnet d'entretien pour enregistrer vidanges, réparations et kilométrage, recevoir des rappels et partager l'historique de votre voiture.",
    path: "/fr/application-carnet-entretien-voiture",
    jsonLdSoftwareDescription:
      "Application de carnet d'entretien automobile permettant de consigner les interventions avec dates, kilométrages et notes, puis de les partager.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Application de carnet d'entretien voiture",
    titleAccent: "tous vos entretiens au même endroit",
    body:
      "CarCare Diary est une application gratuite sur iPhone et Android pour consigner les interventions avec leur date, leur kilométrage, les références et vos notes. Constituez un historique d'entretien organisé et partagez les opérations enregistrées grâce à un lien.",
    subline: "Gratuit sur iPhone et Android",
    addingLogAlt: "Ajout d'une intervention avec date, kilométrage et notes",
    categoriesAlt: "Historique d'entretien CarCare Diary classé par catégorie",
  },
  whyItMatters: {
    eyebrow: "Pourquoi c'est important",
    heading: "Pourquoi tenir un carnet d'entretien de voiture ?",
    intro: "",
    points: [
      { title: "Montrer les travaux effectués", body: "Un relevé d'entretien régulier aide les acheteurs, les garages ou les assureurs à comprendre les travaux consignés." },
      { title: "Réduire les incertitudes lors d'une vente", body: "Un carnet daté permet de répondre plus facilement aux questions sur les entretiens réalisés." },
      { title: "Suivre les intervalles", body: "Les dates et les kilométrages enregistrés aident à calculer les prochaines échéances en fonction de l'usage du véhicule." },
      { title: "Ne pas oublier les détails", body: "La viscosité de l'huile, la référence d'un filtre ou la remarque du mécanicien peuvent servir lors du prochain entretien." },
    ],
  },
  whatYouCanTrack: {
    eyebrow: "Que peut-on noter ?",
    heading: "Ce que CarCare Diary conserve pour chaque intervention",
    intro: "",
    items: [
      { label: "Type d'entretien", detail: "Vidange, freins, filtres, liquides, pneus, batterie, contrôle ou intervention personnalisée." },
      { label: "Date de l'intervention", detail: "Situez précisément les travaux réalisés dans le temps." },
      { label: "Kilométrage au moment du service", detail: "Relevé du compteur associé à l'intervention lorsque ce champ s'applique." },
      { label: "Références et pièces", detail: "Type d'huile, référence du filtre, marque des plaquettes ou autres spécifications." },
      { label: "Notes et observations", detail: "Conseils du mécanicien, bruit signalé ou entretien à prévoir." },
      { label: "Chronologie du véhicule", detail: "Parcourez les interventions consignées par catégorie et par date." },
    ],
  },
  shareableHistory: {
    eyebrow: "Historique partageable",
    heading: "Partagez votre historique avec un lien",
    intro:
      "CarCare Diary génère un lien public en lecture seule vers l'historique d'entretien de votre véhicule. Les personnes qui reçoivent le lien peuvent le consulter sans installer l'application.",
    bullets: [
      "Partagez le lien à un acheteur avant sa visite",
      "Envoyez les informations à votre mécanicien avant un rendez-vous",
      "Tenez les proches informés de l'entretien d'une voiture partagée",
      "Créez le lien depuis l'application",
      "Gérez sa disponibilité depuis les réglages de partage si cette option existe dans la version en production",
    ],
    moreOnSharingLabel: "En savoir plus :",
    shareLink: { to: "/fr/partager-historique-entretien-voiture", label: "partager l'historique d'entretien" },
    imageAlt: "Historique d'entretien d'un véhicule partagé dans un navigateur",
  },
  betterThanScattered: {
    eyebrow: "Pourquoi une application ?",
    heading: "Plus pratique que les reçus et les notes éparpillées",
    intro: "",
    withoutHeading: "Sans application",
    withHeading: "Avec CarCare Diary",
    withoutItems: [
      "Reçus papier perdus ou effacés",
      "Référence de l'huile introuvable",
      "Dates difficiles à retrouver lors d'une vente",
      "Informations à expliquer de mémoire",
      "Notes isolées du kilométrage",
      "Historique difficile à présenter",
    ],
    withItems: [
      "Interventions consignées au même endroit",
      "Références enregistrées pour chaque opération",
      "Historique daté prêt à consulter",
      "Lien partageable vers les travaux consignés",
      "Dates et kilométrages regroupés",
      "Chronologie organisée par catégorie",
    ],
    relatedPrefix: "Voir aussi :",
    relatedLinks: [
      { to: "/fr/suivi-entretien-voiture", label: "Suivi d'entretien" },
      { to: "/fr/historique-entretien-voiture", label: "Historique d'entretien voiture" },
    ],
  },
  faqHeading: "Questions fréquentes",
  cta: {
    heading: "Commencez votre carnet d'entretien automobile",
    body: "Téléchargez gratuitement CarCare Diary sur iPhone ou Android et commencez à enregistrer les interventions de votre voiture.",
  },
};