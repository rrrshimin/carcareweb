import type { SmbFleetPageCopy } from "../shared/smbFleetPageTypes";

export const smallBusinessFleetManagementAppCopyFr: SmbFleetPageCopy = {
  pageFaqs: [
    {
      question: "Quelle application de gestion d'entretien choisir pour une petite entreprise ?",
      answer:
        "Si votre priorité est de suivre les interventions plutôt que le GPS, la géolocalisation ou les tournées, CarCare Diary permet d'organiser carnets, kilométrages, échéances et historiques partageables.",
    },
    {
      question: "Le GPS est-il nécessaire pour suivre l'entretien ?",
      answer:
        "Non. Le GPS sert notamment à la gestion opérationnelle de flotte. Pour calculer les échéances d'entretien, vous pouvez saisir manuellement le kilométrage et enregistrer les services.",
    },
    {
      question: "Puis-je suivre plusieurs véhicules professionnels ?",
      answer:
        "Oui, avec une formule payante. Base couvre jusqu'à trois véhicules et Pro permet d'en gérer davantage. Chaque véhicule dispose de son propre historique.",
    },
    {
      question: "L'application peut-elle remplacer un tableur ?",
      answer:
        "Pour le suivi des interventions et des échéances, elle apporte une structure adaptée à l'entretien automobile. Vous pouvez aussi partager certaines informations par lien. Elle ne remplace pas nécessairement les besoins de comptabilité ou de gestion globale de l'entreprise.",
    },
    {
      question: "Peut-on suivre des utilitaires et camions ?",
      answer:
        "Oui. CarCare Diary permet d'ajouter différents types de véhicules motorisés, notamment les voitures et utilitaires. Les opérations sont consignées par véhicule.",
    },
    {
      question: "Comment fonctionnent les rappels de petite flotte ?",
      answer:
        "Chaque véhicule possède son propre calendrier d'échéances à partir des services consignés, des dates et des relevés kilométriques. Les notifications doivent être activées pour recevoir les alertes.",
    },
  ],
  seo: {
    title: "Suivi d'entretien des véhicules d'entreprise | CarCare Diary",
    description:
      "Suivez l'entretien de vos véhicules d'entreprise : interventions, kilométrages et rappels, sans GPS ni logiciel complexe. Application mobile CarCare Diary.",
    path: "/fr/suivi-entretien-vehicules-entreprise",
    jsonLdSoftwareDescription:
      "Application de suivi d'entretien des véhicules de petite entreprise, avec carnets, relevés kilométriques et rappels.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Suivi d'entretien des véhicules d'entreprise",
    titleAccent: "sans logiciel complexe",
    body:
      "CarCare Diary aide les petites entreprises à enregistrer les interventions, suivre les kilométrages et consulter les échéances de leurs véhicules professionnels. Une application mobile simple, sans matériel GPS ni fonctionnalités de dispatching superflues.",
    subline: "Gratuit pour commencer · Offres multivéhicules disponibles · Pas de GPS nécessaire",
    imageAlt: "Carnets d'entretien de véhicules professionnels dans l'application CarCare Diary.",
  },
  problem: {
    heading: "Petites flottes : la mémoire, les factures et les tableurs atteignent vite leurs limites",
    body:
      "Sans suivi structuré, certaines opérations passent inaperçues : entretien en retard, usure mal documentée, historique difficile à retrouver lors d'une panne ou d'une vente. CarCare Diary rassemble les informations d'entretien dans une application mobile.",
  },
  features: {
    heading: "Le suivi d'entretien adapté aux petites entreprises",
    intro:
      "Ni GPS, ni gestion des tournées, ni supervision des conducteurs : un carnet d'entretien par véhicule professionnel.",
    items: [
      { title: "Plusieurs véhicules", description: "Créez une fiche distincte pour chaque voiture, utilitaire ou camion professionnel, avec son historique et ses échéances." },
      { title: "Suivi kilométrique", description: "Saisissez le compteur lors des entretiens, puis actualisez-le régulièrement pour situer les interventions dans le temps." },
      { title: "Rappels par date et kilométrage", description: "Utilisez des intervalles temporels ou kilométriques, selon l'opération et les préconisations du constructeur." },
      { title: "Vue des échéances", description: "Repérez les interventions à jour, proches ou dépassées pour chaque véhicule." },
      { title: "Historique et notes", description: "Conservez les opérations, les références, les liquides et les observations. Le nom du prestataire peut dépendre de votre formule." },
      { title: "Dossiers partageables", description: "Envoyez un lien public en lecture seule vers les interventions consignées. Les dépenses et données privées ne sont pas exposées dans la page partagée." },
    ],
  },
  useCases: {
    heading: "Cas d'utilisation",
    items: [
      { title: "Artisans et entreprises de services", detail: "Plombiers, électriciens, techniciens CVC et autres professionnels qui utilisent des utilitaires sans avoir besoin d'une solution de flotte d'entreprise." },
      { title: "Livraisons et activités locales", detail: "Petites entreprises de livraison et coursiers qui souhaitent garder les révisions à jour pour plusieurs véhicules." },
      { title: "Agences et véhicules de fonction", detail: "Sociétés disposant de voitures de service ou de véhicules utilisés par leurs collaborateurs." },
      { title: "Petites équipes utilisant des véhicules partagés", detail: "Organisez les interventions de véhicules qui passent entre plusieurs employés ou départements." },
    ],
  },
  lightweight: {
    heading: "Pourquoi un suivi mobile simple peut suffire à une petite flotte",
    intro:
      "Les logiciels destinés aux grandes flottes répondent à des besoins logistiques complexes. Une petite entreprise avec quelques véhicules peut surtout avoir besoin d'historiques et de rappels bien organisés.",
    withoutLabel: "Sans CarCare Diary",
    withLabel: "Avec CarCare Diary",
    without: [
      "Historique dans des messages, e-mails et reçus",
      "Services difficiles à retrouver",
      "Aucune vue des entretiens en retard",
      "Dossiers dispersés lors des inspections et ventes",
    ],
    with: [
      "Carnet par véhicule avec dates et kilométrages",
      "Échéances calculées à partir des interventions consignées",
      "Statuts des prochaines échéances dans l'application",
      "Historique partageable lorsque nécessaire",
    ],
    calloutPrefix: "Besoin d'une présentation générale ?",
    calloutLinks: [
      { to: "/fr/gestion-entretien-flotte", label: "Gestion d'entretien de flotte" },
      { to: "/fr/application-entretien-flotte", label: "Application d'entretien de flotte" },
    ],
  },
  faqHeading: "Questions fréquentes",
  cta: {
    heading: "Gardez l'entretien de vos véhicules professionnels à jour",
    body:
      "Commencez gratuitement avec un véhicule. Consignez vos entretiens et retrouvez les échéances de chaque voiture ou utilitaire depuis votre téléphone.",
    alsoSeePrefix: "Voir aussi :",
    links: [
      { to: "/fr/entretien-flotte-location-voitures", label: "Entretien de véhicules de location" },
      { to: "/fr/rappel-entretien-voiture", label: "Rappels d'entretien" },
      { to: "/fr/suivi-entretien-voiture", label: "Suivi d'entretien" },
    ],
  },
};