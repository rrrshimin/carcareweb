import type { VehicleServiceReminderCopy } from "./types";

export const vehicleServiceReminderCopyFr: VehicleServiceReminderCopy = {
  pageFaqs: [
    {
      question: "Qu'est-ce qu'une application de rappel d'entretien voiture ?",
      answer:
        "Elle vous aide à anticiper les entretiens selon le temps, le kilométrage ou les deux. CarCare Diary calcule ces échéances à partir de votre historique et du compteur que vous mettez à jour. Les alertes nécessitent l'activation et l'autorisation des notifications.",
    },
    {
      question: "Quelle différence entre un rappel par date et par kilométrage ?",
      answer:
        "Un rappel par date se base sur un délai, par exemple douze mois. Un rappel par kilométrage se base sur une distance, par exemple 10 000 km. La périodicité appropriée dépend de l'intervention et des recommandations du constructeur.",
    },
    {
      question: "Comment fonctionnent les rappels kilométriques ?",
      answer:
        "Lorsqu'une intervention est enregistrée, le kilométrage correspondant sert de référence. L'application compare ensuite le compteur mis à jour avec l'intervalle configuré et affiche la distance restante.",
    },
    {
      question: "Peut-on voir tous les entretiens en retard ?",
      answer:
        "Oui. La vue d'entretien du véhicule indique les opérations à jour, proches de leur échéance ou en retard.",
    },
    {
      question: "Faut-il saisir le kilométrage manuellement ?",
      answer:
        "Oui. CarCare Diary ne se connecte pas au véhicule pour lire automatiquement son compteur. Vous mettez à jour cette valeur dans l'application.",
    },
    {
      question: "CarCare Diary est-elle gratuite ?",
      answer:
        "La formule gratuite inclut les fonctionnalités de base pour un véhicule : carnet, kilométrage, échéances et partage d'historique. Des formules payantes permettent de suivre plusieurs véhicules.",
    },
  ],
  seo: {
    title: "Rappel d'entretien voiture : appli kilométrage et dates | CarCare Diary",
    description:
      "Anticipez les vidanges, révisions et entretiens selon la date et le kilométrage. Suivez les échéances et activez les rappels avec CarCare Diary.",
    path: "/fr/rappel-entretien-voiture",
    jsonLdSoftwareDescription:
      "Application de rappels d'entretien automobile par date et kilométrage, calculés à partir du carnet d'entretien et du compteur saisi.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Application de rappel d'entretien voiture",
    titleAccent: "par date et kilométrage",
    body:
      "CarCare Diary calcule les prochaines échéances à partir des interventions que vous avez enregistrées et du kilométrage que vous saisissez. Retrouvez les rappels par distance ou par date, plutôt que de dépendre d'un simple calendrier.",
    subline: "Gratuit sur iPhone et Android",
    imageAlt: "État des échéances d'entretien et rappels dans CarCare Diary.",
  },
  problem: {
    eyebrow: "Le problème",
    heading: "Il est facile de laisser passer une échéance d'entretien",
    intro:
      "Les conducteurs ne négligent pas toujours leur voiture volontairement : sans suivi, les intervalles sont vite oubliés ou évalués de mémoire.",
    cards: [
      {
        title: "Aucun rappel",
        body: "Les autocollants du garage ou la mémoire ne suffisent pas toujours quand le quotidien s'accélère.",
      },
      {
        title: "Rappel à date fixe uniquement",
        body: "Le temps ne reflète pas la distance parcourue : une voiture qui roule 30 000 km par an n'a pas le même usage qu'une voiture qui en fait 5 000.",
      },
      {
        title: "Informations obsolètes",
        body: "Sans historique d'entretien, les calculs ne peuvent pas prendre en compte une intervention réalisée plus tôt ou plus tard que prévu.",
      },
    ],
  },
  reminderTypes: {
    eyebrow: "Comment ça marche",
    heading: "Trois façons de suivre les échéances",
    intro:
      "Chaque type d'entretien suit sa propre logique. CarCare Diary combine rappels par kilométrage, par date et statuts visibles.",
    items: [
      {
        title: "Rappels par kilométrage",
        body: "Définissez un intervalle, par exemple une vidange tous les 10 000 km si cela correspond au programme constructeur. L'application calcule le prochain seuil à partir de l'intervention enregistrée et des relevés du compteur.",
      },
      {
        title: "Rappels par date",
        body: "Configurez un intervalle mensuel ou annuel : contrôle périodique, inspection de liquide ou remplacement de filtre. Le calcul part de la date du dernier service enregistré.",
      },
      {
        title: "Statuts « bientôt » et « en retard »",
        body: "Les interventions passent de « à jour » à « bientôt à prévoir », puis « en retard » lorsque l'échéance est dépassée. Consultez les statuts sans ouvrir chaque catégorie.",
      },
    ],
    screenshotAlt: "Échéances d'entretien par véhicule affichées dans l'application.",
  },
  dueOverdue: {
    eyebrow: "Vue des entretiens",
    heading: "Consultez les statuts en un coup d'œil",
    intro:
      "CarCare Diary affiche l'état de chaque type d'entretien pour votre véhicule, sans ouvrir chaque catégorie séparément.",
    statuses: [
      {
        label: "À jour",
        body: "L'intervalle défini n'est pas encore atteint.",
        tone: "ok",
      },
      {
        label: "Bientôt à prévoir",
        body: "La prochaine échéance approche selon le temps ou le kilométrage.",
        tone: "soon",
      },
      {
        label: "En retard",
        body: "L'intervalle défini est dépassé : planifiez un contrôle ou un entretien.",
        tone: "late",
      },
    ],
    callout:
      "L'état des échéances est recalculé lorsque vous enregistrez une intervention ou mettez à jour le compteur. Vous n'avez pas à refaire les calculs vous-même.",
  },
  mileage: {
    eyebrow: "Kilométrage",
    heading: "Mettez à jour le kilométrage pour des échéances pertinentes",
    body:
      "Les rappels basés sur la distance dépendent du compteur que vous enregistrez. Mettez-le à jour régulièrement pour conserver des échéances fiables.",
    bullets: [
      "Mettre à jour le compteur prend quelques instants dans l'application.",
      "Les interventions peuvent inclure le kilométrage au moment du service.",
      "Les échéances sont recalculées à partir des informations enregistrées.",
      "Aucune connexion au port OBD de la voiture n'est nécessaire.",
    ],
    imageAlt: "Catégories d'entretien et kilométrage dans CarCare Diary.",
    relatedPrefix: "Voir aussi :",
    relatedLinks: [
      { to: "/fr/suivi-entretien-voiture", label: "Suivi d'entretien voiture" },
      { to: "/fr/application-entretien-flotte", label: "Application d'entretien de flotte" },
    ],
  },
  faqHeading: "Questions fréquentes",
  cta: {
    heading: "Anticipez les prochains entretiens de votre voiture",
    body:
      "Téléchargez CarCare Diary gratuitement sur iPhone ou Android pour consulter les échéances et configurer vos premiers rappels.",
  },
};