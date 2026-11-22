import type { VehicleMaintenanceLogCopy } from "./types";

export const vehicleMaintenanceLogCopyFr: VehicleMaintenanceLogCopy = {
  seo: {
    title: "Carnet d'entretien voiture numérique et gratuit | CarCare Diary",
    description:
      "Créez le carnet d'entretien numérique de votre voiture : interventions, kilométrages, notes et historique partageable. Application iPhone et Android.",
    path: "/fr/carnet-entretien-voiture",
    jsonLdSoftwareDescription:
      "Carnet d'entretien numérique pour enregistrer les interventions, les kilométrages, les notes et les rappels.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Carnet d'entretien voiture numérique",
    titleAccent: "gardez une trace de chaque intervention",
    body:
      "Un carnet d'entretien automobile rassemble les opérations réalisées sur votre véhicule : vidanges, freins, filtres ou permutation des pneus, avec leurs dates, kilométrages et notes. CarCare Diary conserve ce suivi dans votre téléphone et permet de partager l'historique des interventions.",
    subline: "Gratuit sur iPhone et Android",
  },
  whatIsALog: {
    eyebrow: "Les bases",
    heading: "Qu'est-ce qu'un carnet d'entretien ?",
    paragraphs: [
      "Le carnet d'entretien d'une voiture est un relevé continu des entretiens et réparations effectués. Contrairement à une facture isolée, il crée une chronologie des interventions : leur nature, leur date et leur kilométrage lorsque celui-ci est connu.",
      "Un bon carnet couvre les opérations courantes, comme les vidanges et les pneus, ainsi que les interventions plus rares : freins, distribution ou contrôles. Avec le temps, il devient une ressource utile pour suivre l'entretien du véhicule.",
      "Il est facile de commencer par conserver quelques factures puis de perdre le fil. Un carnet numérique aide à enregistrer les travaux au fur et à mesure et à les retrouver dans une même application.",
    ],
    guideLink: {
      to: "/fr/blog/que-contient-historique-entretien-voiture",
      label: "Que doit contenir l'historique d'entretien ?",
    },
  },
  whatToLog: {
    eyebrow: "Que noter ?",
    heading: "Quelles informations noter ?",
    intro:
      "Un carnet d'entretien n'est utile que si chaque entrée contient les bonnes informations. Voici six champs à renseigner.",
    fields: [
      {
        title: "Type d'intervention",
        description:
          "Précisez le travail réalisé : vidange, remplacement de plaquettes, filtre à air, liquide de refroidissement, etc.",
      },
      {
        title: "Date",
        description:
          "Notez quand l'entretien a été réalisé. Une date exacte est préférable pour suivre les échéances.",
      },
      {
        title: "Kilométrage",
        description:
          "Relevez le compteur au moment du service lorsque c'est applicable, afin de savoir à quelle distance l'intervention a été effectuée.",
      },
      {
        title: "Pièces et caractéristiques",
        description:
          "Viscosité de l'huile, référence du filtre, type de liquide, marque des pneus : les détails utiles pour la prochaine intervention.",
      },
      {
        title: "Coût",
        description:
          "Si vous utilisez les fonctionnalités de suivi des dépenses disponibles selon votre formule, vous pouvez analyser les coûts d'entretien sur la durée.",
      },
      {
        title: "Notes et observations",
        description:
          "Consignez les recommandations du mécanicien, un symptôme observé ou le travail à prévoir.",
      },
    ],
    illustrationAlt:
      "Différents types d'interventions dans le carnet CarCare Diary",
  },
  whyLoggingHelps: {
    eyebrow: "Pourquoi c'est utile",
    heading: "À quoi sert ce suivi ?",
    intro:
      "Plus vous consignez d'interventions au fil du temps, plus le carnet devient une ressource fiable pour votre véhicule.",
    outcomes: [
      {
        title: "Retrouver les interventions effectuées",
        description:
          "Consultez la date de la dernière vidange, l'huile utilisée ou le kilométrage lors du changement des plaquettes.",
      },
      {
        title: "Observer les tendances",
        description:
          "Avec plusieurs mois ou années d'entrées, repérez la fréquence de certaines opérations et, lorsque vous suivez les coûts, la répartition des dépenses.",
      },
      {
        title: "Anticiper les entretiens",
        description:
          "Les kilométrages et dates consignés aident à calculer les prochaines échéances, en complément du programme constructeur.",
      },
      {
        title: "Présenter des informations documentées",
        description:
          "Un historique suivi régulièrement est plus utile qu'un souvenir approximatif lors d'une vente ou d'un échange avec un garage.",
      },
    ],
    analyticsImageAlt:
      "Graphique d'analyse des dépenses d'entretien dans CarCare Diary (fonctionnalité payante)",
  },
  howCarCareHelps: {
    eyebrow: "L'application",
    heading: "Comment CarCare Diary aide à tenir le carnet",
    intro:
      "CarCare Diary est pensé autour du carnet d'entretien : enregistrer chaque intervention reste rapide et votre historique reste organisé.",
    cards: [
      {
        title: "Enregistrement simple",
        body:
          "Sélectionnez le type d'intervention, ajoutez la date, le kilométrage pertinent, les références et les notes.",
      },
      {
        title: "Classement par catégorie",
        body: "Retrouvez les opérations moteur, freins, liquides, électricité, pneus et autres catégories.",
      },
      {
        title: "Kilométrage intégré",
        body:
          "Renseignez le kilométrage lors des entretiens, puis mettez à jour le compteur dans l'application pour suivre les échéances.",
      },
      {
        title: "Références et notes",
        body: "Conservez viscosités, numéros de pièces, observations et autres détails liés à chaque intervention.",
      },
      {
        title: "Historique du véhicule",
        body: "Chaque opération enregistrée rejoint la chronologie de la voiture.",
      },
      {
        title: "Partage lorsque nécessaire",
        body:
          "Générez un lien public en lecture seule vers les interventions consignées pour le montrer à un garagiste ou à un acheteur.",
      },
    ],
    relatedLinks: [
      { to: "/fr/suivi-entretien-voiture", label: "Suivi d'entretien et rappels" },
      { to: "/fr/historique-entretien-voiture", label: "Historique et partage" },
    ],
  },
  exampleEntries: {
    eyebrow: "Exemple",
    heading: "Exemple de carnet d'entretien",
    intro:
      "Ces entrées illustrent le type d'informations qu'un carnet peut contenir. Des données fictives à titre d'exemple.",
    closing:
      "Ces exemples montrent le type d'informations qu'un carnet d'entretien peut contenir. Avec des entrées régulières, vous obtenez une chronologie utile des opérations réalisées.",
    entries: [
      {
        type: "Vidange moteur",
        detail: "Huile 0W-30 100 % synthèse - 5 L · filtre Bosch n° 3323",
        note: "Prochaine échéance à 88 000 km ou dans 12 mois",
        date: "11 févr. 2025",
        mileage: "80 800 km",
      },
      {
        type: "Plaquettes de frein avant",
        detail: "Brembo P50037 - des deux côtés",
        note: "Plaquettes arrière à environ 60 % ; à revoir au prochain entretien",
        date: "28 oct. 2024",
        mileage: "78 300 km",
      },
      {
        type: "Filtre à air",
        detail: "Filtre Mann C2594",
        note: "Filtre d'habitacle changé lors de la même visite",
        date: "14 juin 2024",
        mileage: "72 600 km",
      },
      {
        type: "Permutation des pneus",
        detail: "Permutation croisée avant-arrière",
        note: "Usure régulière ; pneus avant à environ 5 mm",
        date: "14 juin 2024",
        mileage: "72 600 km",
      },
      {
        type: "Remplacement du liquide de refroidissement",
        detail: "Liquide OAT - mélange 50/50 - 6 L",
        note: "Circuit mis sous pression ; aucune fuite relevée",
        date: "3 mars 2024",
        mileage: "70 500 km",
      },
      {
        type: "Inspection annuelle",
        detail: "Contrôle complet - balais d'essuie-glace signalés",
        note: "Balais remplacés le même jour",
        date: "18 janv. 2024",
        mileage: "68 500 km",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions fréquentes sur le carnet d'entretien voiture",
    intro: "Les informations à consigner et la manière dont CarCare Diary vous aide à les conserver.",
    items: [
      {
        question: "Qu'est-ce qu'un carnet d'entretien automobile ?",
        answer:
          "C'est un relevé continu des services, réparations et contrôles effectués sur un véhicule. Chaque entrée peut inclure le type d'intervention, la date, le kilométrage, les pièces et les observations.",
      },
      {
        question: "Que faut-il noter après un entretien ?",
        answer:
          "Le type d'intervention, la date, le kilométrage applicable et, si possible, les caractéristiques des pièces ou liquides utilisés. Ajoutez aussi les observations utiles tant qu'elles sont fraîches.",
      },
      {
        question: "Peut-on tenir un carnet d'entretien numérique ?",
        answer:
          "Oui. CarCare Diary vous permet d'enregistrer les interventions depuis votre téléphone avec leurs détails, classés dans l'historique du véhicule.",
      },
      {
        question: "Un carnet d'entretien aide-t-il lors d'une revente ?",
        answer:
          "Un historique documenté peut rassurer les acheteurs et clarifier les travaux effectués. CarCare Diary permet de partager les interventions enregistrées par lien.",
      },
      {
        question: "Peut-on suivre le kilométrage dans le carnet ?",
        answer:
          "Oui. Vous pouvez l'indiquer pour les interventions concernées et actualiser manuellement le compteur du véhicule.",
      },
      {
        question: "CarCare Diary est-elle gratuite ?",
        answer:
          "Oui, pour le carnet d'entretien, le kilométrage et le partage de l'historique d'un véhicule. Base et Pro permettent notamment de suivre plusieurs voitures.",
      },
    ],
  },
  cta: {
    eyebrow: "Télécharger",
    heading: "Commencez votre carnet d'entretien dès aujourd'hui",
    body:
      "Téléchargez gratuitement CarCare Diary sur iPhone et Android. Consignez vos interventions, suivez le kilométrage et construisez l'historique de votre voiture.",
    links: [
      { to: "/fr/suivi-entretien-voiture", label: "Suivi d'entretien" },
      { to: "/fr/historique-entretien-voiture", label: "Historique d'entretien" },
      { to: "/fr/blog/comment-suivre-entretien-voiture", label: "Guide de suivi d'entretien" },
    ],
  },
};
