import type { HowCarCareDiaryWorksCopy } from "./types";

export const howCarCareDiaryWorksCopyFr: HowCarCareDiaryWorksCopy = {
  pageFaqs: [
    {
      question: "Qu'est-ce que CarCare Diary ?",
      answer: "C'est une application de suivi d'entretien pour iPhone et Android. Elle permet de consigner les interventions, le kilométrage, de consulter les rappels et de partager l'historique de la voiture."
    },
    {
      question: "Comment utiliser CarCare Diary ?",
      answer: "Commencez par ajouter votre voiture. Enregistrez ensuite les interventions, avec leur date et les détails utiles. L'application compare ces informations au kilométrage saisi pour afficher les prochaines échéances."
    },
    {
      question: "Quels entretiens peut-on suivre ?",
      answer: "Vidanges, filtres, freins, bougies, liquides, pneus, batterie, inspections et autres services. Vous pouvez ajouter les dates, kilométrages applicables, pièces et notes."
    },
    {
      question: "Comment fonctionnent les rappels ?",
      answer: "Chaque intervention enregistrée peut servir de point de départ à un intervalle : par exemple 10 000 km ou six mois, selon le programme adapté. Les échéances sont recalculées à partir du carnet et du compteur que vous mettez à jour."
    },
    {
      question: "Peut-on partager l'historique de sa voiture ?",
      answer: "Oui. Un lien public permet de consulter en lecture seule les interventions enregistrées et rendues visibles dans le partage, sans créer de compte."
    },
    {
      question: "CarCare Diary est-elle gratuite ?",
      answer: "Oui, pour un véhicule avec carnet d'entretien, suivi kilométrique et partage d'historique. Les offres payantes permettent de gérer plusieurs voitures et d'utiliser d'autres fonctions."
    },
    {
      question: "Peut-on suivre plusieurs véhicules ?",
      answer: "Oui. Base couvre jusqu'à trois véhicules et Pro permet d'en gérer davantage, avec une limite technique de 1 000 véhicules dans le système actuel."
    }
  ],
  seo: {
    title: "Comment fonctionne CarCare Diary ? Suivi d'entretien voiture",
    description: "Découvrez CarCare Diary : ajoutez votre voiture, enregistrez les entretiens, suivez le kilométrage, consultez les rappels et partagez votre historique.",
    path: "/fr/comment-fonctionne-carcare-diary",
    jsonLdSoftwareDescription: "Application gratuite de suivi d'entretien automobile avec carnets, rappels, kilométrage et partage d'historique."
  },
  hero: {
    titleLine: "Comment fonctionne",
    titleAccent: "CarCare Diary ?",
    body: "CarCare Diary est une application de suivi d'entretien automobile pour iPhone et Android. Elle aide à consigner les interventions, mettre à jour le kilométrage, consulter les prochaines échéances et partager l'historique de votre voiture.",
    subline: "Gratuit sur iPhone et Android"
  },
  whatItIs: {
    paragraphs: [
      "CarCare Diary est une application de carnet d'entretien automobile. Disponible gratuitement sur iPhone et Android, elle vous permet de rassembler les interventions effectuées sur votre véhicule.",
      "Après une vidange, un remplacement de freins ou une permutation des pneus, ajoutez une entrée avec le type d'opération, sa date, le kilométrage lorsqu'il s'applique et vos notes. L'historique se construit au fil du temps.",
      "À partir des interventions consignées et du kilométrage saisi, l'application calcule les prochaines échéances. Elle permet également de partager les entretiens enregistrés par un lien public en lecture seule.",
      "La formule gratuite couvre un véhicule. Les formules payantes permettent d'en suivre plusieurs et d'accéder à des outils supplémentaires."
    ]
  },
  steps: {
    eyebrow: "Comment ça marche ?",
    heading: "Comment ça marche ?",
    intro:
      "Six étapes simples pour commencer à tenir le carnet d'entretien de votre voiture.",
    items: [
      {
        number: "1",
        title: "Ajoutez votre véhicule",
        body:
          "Créez sa fiche avec les informations de base : marque, modèle, année et, si besoin, immatriculation. Chaque véhicule a son propre historique et ses échéances."
      },
      {
        number: "2",
        title: "Enregistrez un entretien",
        body:
          "Après une intervention, ajoutez le type de service, la date, le kilométrage pertinent, les pièces et vos notes."
      },
      {
        number: "3",
        title: "Actualisez le kilométrage",
        body:
          "Renseignez régulièrement le compteur pour que les échéances kilométriques correspondent à l'utilisation du véhicule."
      },
      {
        number: "4",
        title: "Consultez les échéances",
        body:
          "Voyez les opérations à prévoir à partir des services consignés, du kilométrage et des intervalles configurés."
      },
      {
        number: "5",
        title: "Parcourez l'historique",
        body:
          "Retrouvez les interventions par catégorie et par type et consultez les travaux effectués."
      },
      {
        number: "6",
        title: "Partagez les informations",
        body:
          "Créez un lien public en lecture seule vers les opérations enregistrées. Le destinataire n'a pas besoin de compte."
      }
    ]
  },
  track: {
    eyebrow: "Entretiens",
    heading: "Entretiens que vous pouvez suivre",
    intro: "CarCare Diary couvre les principaux types d'entretien.",
    items: [
      "Vidanges d'huile et remplacement des filtres",
      "Plaquettes et disques de frein",
      "Liquide de frein",
      "Filtre à air moteur",
      "Filtre d'habitacle",
      "Bougies d'allumage",
      "Liquide de refroidissement",
      "Huile de boîte de vitesses",
      "Liquide de direction assistée",
      "Permutation des pneus",
      "Remplacement des pneus",
      "Remplacement de la batterie",
      "Contrôle des courroies et durites",
      "Inspections et contrôles techniques",
      "Balais d'essuie-glace",
      "Toute autre intervention"
    ],
    guideLink: {
      to: "/fr/blog/que-contient-historique-entretien-voiture",
      label: "Que noter dans l'historique d'entretien ?"
    }
  },
  reminders: {
    eyebrow: "Rappels",
    heading: "Comment fonctionnent les rappels ?",
    paragraphs: [
      "Lorsque vous consignez une intervention, CarCare Diary enregistre la date et le kilométrage correspondants. Vous pouvez définir un intervalle de service, par exemple tous les 10 000 km ou tous les six mois pour une vidange.",
      "À mesure que vous actualisez le compteur, l'application recalcule les échéances à partir du carnet et du kilométrage en cours. Elle affiche un statut clair pour chaque catégorie d'entretien.",
      "Les rappels s'appuient sur votre historique réel, et non sur des valeurs par défaut du constructeur. Si vous consignez une vidange à 50 000 km avec un intervalle de 10 000 km, l'échéance apparaît à 60 000 km."
    ],
    guideLink: {
      to: "/fr/blog/comment-suivre-entretien-voiture",
      label: "Comment suivre l'entretien de sa voiture ?"
    }
  },
  sharing: {
    eyebrow: "Partage",
    heading: "Partager l'historique d'entretien",
    paragraphs: [
      "CarCare Diary permet de générer un lien public vers le carnet d'entretien de votre véhicule. Toute personne disposant du lien peut consulter les interventions consignées, avec leurs dates, kilométrages et notes.",
      "Aucun compte n'est nécessaire pour lire la page partagée. Le contenu reste en lecture seule.",
      "C'est utile lors de la vente d'une voiture : plutôt que d'assembler des factures, vous transmettez un lien qui présente l'historique documenté."
    ],
    links: [
      {
        to: "/fr/historique-entretien-voiture",
        label: "Historique d'entretien"
      },
      {
        to: "/fr/blog/organiser-historique-entretien-voiture",
        label: "Organiser ses entretiens"
      }
    ]
  },
  plans: {
    eyebrow: "Formules",
    heading: "Gratuit, Base et Pro",
    intro:
      "CarCare Diary est gratuite pour un véhicule. Les formules payantes permettent d'en suivre davantage et d'accéder à des fonctions supplémentaires.",
    items: [
      {
        name: "Gratuit",
        tagline: "Un véhicule, sans frais",
        features: [
          "1 véhicule",
          "Carnet d'entretien et rappels",
          "Partage des interventions et de l'historique"
        ]
      },
      {
        name: "Base",
        tagline: "Pour suivre plusieurs voitures et accéder à plus d'outils",
        features: [
          "Jusqu'à 3 véhicules",
          "Fonctionnalités gratuites",
          "Analyses des dépenses",
          "QR code imprimable pour les annonces"
        ]
      },
      {
        name: "Pro",
        tagline: "Pour gérer davantage de véhicules avec une vision d'ensemble",
        features: [
          "Jusqu'à 1 000 véhicules",
          "Base inclus",
          "Analyses de dépenses à l'échelle du parc",
          "Vue multivéhicule"
        ]
      }
    ]
  },
  faq: {
    eyebrow: "Questions fréquentes",
    heading: "Questions fréquentes",
    intro: "Comment fonctionne l'application et ce que vous pouvez en faire."
  },
  cta: {
    eyebrow: "Commencer",
    heading: "Commencez à tenir le carnet d'entretien de votre voiture",
    body:
      "Téléchargez CarCare Diary gratuitement sur iPhone et Android. Regroupez les interventions, les relevés de kilométrage et les rappels dans une seule application.",
    links: [
      {
        to: "/fr/suivi-entretien-voiture",
        label: "Suivi d'entretien voiture"
      },
      {
        to: "/fr/historique-entretien-voiture",
        label: "Historique d'entretien"
      },
      {
        to: "/fr/carnet-entretien-voiture",
        label: "Carnet numérique"
      },
      {
        to: "/fr/blog",
        label: "Guides d'entretien"
      }
    ]
  }
};
