import type { ShareCarMaintenanceHistoryCopy } from "./types";

export const shareCarMaintenanceHistoryCopyFr: ShareCarMaintenanceHistoryCopy = {
  pageFaqs: [
    {
      question: "Comment partager l'historique d'entretien de ma voiture ?",
      answer:
        "Depuis la fiche du véhicule dans CarCare Diary, utilisez la fonction de partage pour obtenir un lien public en lecture seule. Vous pouvez l'envoyer à qui vous voulez ; la personne pourra consulter les interventions dans son navigateur.",
    },
    {
      question: "Que contient l'historique partagé ?",
      answer:
        "Il présente la fiche publique du véhicule et les interventions consignées qui sont incluses dans le partage, avec dates, kilométrages et notes disponibles. Les données financières privées et certaines informations internes ne figurent pas dans la page publique.",
    },
    {
      question: "Tout le monde peut-il consulter le lien ?",
      answer:
        "Toute personne disposant du lien peut afficher la page publique. Elle ne peut pas modifier votre carnet. Vérifiez les options de gestion ou de désactivation du partage disponibles dans l'application.",
    },
    {
      question: "Est-ce utile quand on vend sa voiture ?",
      answer:
        "Oui. Un lien permet de montrer les entretiens enregistrés sans imprimer un dossier, ce qui facilite les échanges avec les acheteurs.",
    },
    {
      question: "Puis-je l'envoyer à mon mécanicien ?",
      answer:
        "Oui. Il pourra consulter les interventions précédentes et les références ou notes partagées avant le rendez-vous.",
    },
    {
      question: "CarCare Diary est-elle gratuite ?",
      answer:
        "Oui, y compris la fonction de partage d'historique pour un véhicule. Des formules payantes permettent de suivre davantage de véhicules.",
    },
  ],
  seo: {
    title: "Partager l'historique d'entretien d'une voiture | CarCare Diary",
    description:
      "Partagez l'historique d'entretien de votre voiture par lien public en lecture seule avec un acheteur, un proche ou un garagiste, sans créer de compte.",
    path: "/fr/partager-historique-entretien-voiture",
    jsonLdSoftwareDescription:
      "Partager par lien public en lecture seule les entretiens d'une voiture enregistrés dans CarCare Diary.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Partagez l'historique d'entretien de votre voiture",
    titleAccent: "avec un simple lien",
    body:
      "CarCare Diary crée un lien public en lecture seule vers les interventions enregistrées pour votre véhicule. Envoyez-le à un acheteur, un garagiste ou un proche : ils peuvent consulter l'historique depuis un navigateur, sans installer l'application.",
    subline: "Gratuit sur iPhone et Android",
    imageAlt: "Page web de partage des interventions d'entretien d'un véhicule.",
  },
  whyItHelps: {
    eyebrow: "Pourquoi c'est utile",
    heading: "Pourquoi partager son historique d'entretien avant une vente ?",
    intro: "",
    cards: [
      {
        title: "Rassurer avant la visite",
        body: "Envoyez le lien avec votre annonce ou lors du premier échange pour permettre aux acheteurs de voir les interventions consignées.",
      },
      {
        title: "Appuyer vos explications",
        body: "Un historique avec dates et kilométrages est plus précis qu'un simple résumé oral. Il représente les informations enregistrées par le propriétaire, pas une attestation indépendante.",
      },
      {
        title: "Éviter d'imprimer un dossier",
        body: "L'historique est accessible par lien, sans devoir rassembler des captures d'écran ou des dossiers papier.",
      },
    ],
  },
  whatItShows: {
    eyebrow: "Informations partagées",
    heading: "Les informations visibles sur la page partagée",
    intro: "",
    items: [
      { label: "Fiche du véhicule", detail: "Marque, modèle, année et informations publiques disponibles." },
      {
        label: "Interventions enregistrées",
        detail: "Entretiens visibles dans le partage : vidanges, freins, filtres, pneus, liquides et autres opérations incluses.",
      },
      {
        label: "Kilométrage des interventions",
        detail: "Relevé du compteur associé aux opérations lorsque cette information a été renseignée.",
      },
      { label: "Références et notes", detail: "Détails de pièces, huiles et observations inclus dans les opérations partagées." },
      { label: "Catégories d'entretien", detail: "Interventions regroupées pour faciliter la lecture de l'historique." },
      { label: "Lien de consultation", detail: "URL publique accessible dans un navigateur sans compte utilisateur." },
    ],
    screenshotAlt: "Historique des opérations d'entretien classées dans CarCare Diary.",
  },
  readOnly: {
    heading: "En lecture seule : vous gardez le contrôle",
    intro: "",
    points: [
      "Les visiteurs peuvent consulter l'historique, mais ne peuvent pas le modifier.",
      "Aucun compte n'est nécessaire pour afficher la page publique.",
      "Vous choisissez les interventions et détails saisis dans l'application.",
      "La disponibilité et les options de régénération du lien dépendent des fonctionnalités de partage existantes.",
      "Le lien reflète les opérations actuellement incluses dans le partage.",
      "La consultation fonctionne depuis un navigateur sur ordinateur ou mobile.",
    ],
  },
  whoItsFor: {
    eyebrow: "Pour qui ?",
    heading: "À qui envoyer le lien ?",
    personas: [
      {
        who: "Particuliers qui vendent leur voiture",
        body: "Partagez les entretiens connus avec les personnes intéressées avant une visite.",
      },
      {
        who: "Garagistes et mécaniciens",
        body: "Donnez un aperçu des interventions précédentes et des références enregistrées avant le rendez-vous.",
      },
      {
        who: "Familles utilisant la même voiture",
        body: "Permettez à vos proches de consulter l'historique sans leur donner accès à votre compte.",
      },
    ],
    relatedPrefix: "Voir aussi :",
    relatedLinks: [
      { to: "/fr/application-carnet-entretien-voiture", label: "Application carnet d'entretien" },
      { to: "/blog/best-car-maintenance-apps", label: "Guide des applications d'entretien en anglais" },
    ],
  },
  faqHeading: "Questions fréquentes",
  cta: {
    heading: "Créez un historique d'entretien facile à partager",
    body:
      "Téléchargez gratuitement CarCare Diary pour iPhone ou Android. Enregistrez les interventions et retrouvez un lien de partage quand vous en avez besoin.",
  },
};