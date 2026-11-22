import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  ClipboardCheck,
  Bell,
  Share2,
  Car,
  Wrench,
  History,
  TrendingUp,
  ShieldCheck,
  FolderOpen,
  Building2,
  BarChart3,
  Gauge,
} from "lucide-react";

export type LandingLocale = "en" | "fr";

export type LandingFaqItem = { question: string; answer: string };

type FeatureCard = { icon: LucideIcon; title: string; description: string };

type ShowcaseRow = {
  title: string;
  description: string;
  alt: string;
};

type HowStep = {
  number: string;
  title: string;
  description: string;
};

type ValueCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type LandingStrings = {
  seoJsonLd: {
    softwareAppDescription: string;
  };
  hero: {
    eyebrow: string;
    titleLine: string;
    titleAccent: string;
    body: string;
    subline: string;
    heroImageAlt: string;
  };
  trustBar: {
    signals: readonly { icon: LucideIcon; text: string }[];
  };
  features: {
    eyebrow: string;
    headingLine: string;
    headingAccent: string;
    intro: string;
    items: readonly FeatureCard[];
    footerPrefix: string;
    linkTracker: string;
    linkGuides: string;
  };
  appShowcase: {
    eyebrow: string;
    headingLine: string;
    headingAccent: string;
    intro: string;
    rows: readonly ShowcaseRow[];
  };
  howItWorks: {
    eyebrow: string;
    headingLine: string;
    headingAccent: string;
    intro: string;
    steps: readonly HowStep[];
    stepLabel: (n: string) => string;
  };
  valueSection: {
    eyebrow: string;
    headingLine: string;
    headingAccent: string;
    intro: string;
    values: readonly ValueCard[];
  };
  businessSection: {
    eyebrow: string;
    heading: string;
    body: string;
    points: readonly { icon: LucideIcon; text: string }[];
    ctaLabel: string;
    ctaTo: string;
  };
  landingFaq: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly LandingFaqItem[];
  };
  downloadCta: {
    eyebrow: string;
    headingLine: string;
    headingAccent: string;
    body: string;
    link1: { label: string; to: string };
    link2: { label: string; to: string };
    link3: { label: string; to: string };
  };
};

const trustIcons = [Smartphone, ClipboardCheck, Bell, Share2, Car] as const;

export const landingStrings: Record<LandingLocale, LandingStrings> = {
  en: {
    seoJsonLd: {
      softwareAppDescription:
        "Car maintenance tracker app. Log services, track mileage, get reminders, and share your vehicle's maintenance history.",
    },
    hero: {
      eyebrow: "Car Maintenance Tracker App",
      titleLine: "Track Car Maintenance And Service History",
      titleAccent: "In One App",
      body:
        "CarCare Diary is a free car maintenance tracker for iPhone and Android. Log every service, monitor your mileage, get reminders when maintenance is due, and share your vehicle's complete service history.",
      subline: "Free for iPhone & Android",
      heroImageAlt:
        "CarCare Diary car maintenance tracker app showing vehicle service log and mileage tracking",
    },
    trustBar: {
      signals: [
        { icon: trustIcons[0], text: "Built for iPhone & Android" },
        { icon: trustIcons[1], text: "Complete Service Log" },
        { icon: trustIcons[2], text: "Smart Reminders" },
        { icon: trustIcons[3], text: "Shareable Records" },
        { icon: trustIcons[4], text: "Multi-Vehicle Support" },
      ],
    },
    features: {
      eyebrow: "Features",
      headingLine: "Everything You Need To",
      headingAccent: "Track Car Maintenance",
      intro:
        "A complete vehicle maintenance log with service reminders, mileage tracking, and a shareable history - built for everyday car owners.",
      items: [
        {
          icon: Wrench,
          title: "Service Log",
          description:
            "Log oil changes, brake work, filter replacements, and every other service your car needs. Each entry captures date, mileage, and notes.",
        },
        {
          icon: Bell,
          title: "Service Reminders",
          description:
            "Get notified when maintenance is coming due. Reminders are calculated from your service log, current mileage, and recommended intervals.",
        },
        {
          icon: Gauge,
          title: "Mileage Tracker",
          description:
            "Keep your odometer up to date so service schedules and reminders stay accurate as you drive.",
        },
        {
          icon: Car,
          title: "Vehicle Profile",
          description:
            "Store your car's make, model, year, fuel type, and photo in one place. Your vehicle's identity at a glance.",
        },
        {
          icon: History,
          title: "Maintenance History",
          description:
            "Build a complete, organized record of every service your car has received. Filter by category and review anytime.",
        },
        {
          icon: Share2,
          title: "Shareable Records",
          description:
            "Generate a public link to your vehicle's full service history. Useful when selling your car or visiting a mechanic.",
        },
      ],
      footerPrefix: "Want to learn more?",
      linkTracker: "See how CarCare Diary works as a car maintenance tracker",
      linkGuides: "Browse the maintenance guides",
    },
    appShowcase: {
      eyebrow: "Inside The App",
      headingLine: "Your Car's Maintenance Diary,",
      headingAccent: "Always Up To Date",
      intro:
        "A clear, organized view of every service, reminder, and record - designed to make car maintenance simple.",
      rows: [
        {
          title: "Know Exactly What's Due",
          description:
            "See your vehicle's full maintenance status at a glance. Upcoming services, current mileage, spending summary, and every maintenance category - all in one view.",
          alt: "CarCare Diary vehicle dashboard showing maintenance status, mileage, and service categories",
        },
        {
          title: "Never Miss A Service Again",
          description:
            "Color-coded status shows what's due soon, what's coming up, and what's overdue. Stay ahead of every oil change, filter replacement, and scheduled inspection.",
          alt: "CarCare Diary service reminders showing due and overdue maintenance items",
        },
        {
          title: "Understand Your Maintenance Costs",
          description:
            "See how much you spend on car upkeep month by month. Track which categories cost the most and spot trends in your vehicle's maintenance spending.",
          alt: "CarCare Diary maintenance spending analytics with monthly chart and category breakdown",
        },
        {
          title: "Share Your Car's Full Service History",
          description:
            "When it's time to sell, generate a public link to your vehicle's complete maintenance record. Buyers can see every logged service, building trust and supporting your asking price.",
          alt: "CarCare Diary shareable vehicle service history page opened in a mobile browser",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How It Works",
      headingLine: "Start Tracking Maintenance",
      headingAccent: "In Minutes",
      intro:
        "Getting started is quick. Three steps and your car's maintenance diary is up and running.",
      stepLabel: (n) => `STEP ${n}`,
      steps: [
        {
          number: "01",
          title: "Add Your Car",
          description:
            "Set up your vehicle with a photo and basic details. Takes under a minute.",
        },
        {
          number: "02",
          title: "Log Each Service",
          description:
            "Record maintenance with date, mileage, and notes. Your car's service history builds over time.",
        },
        {
          number: "03",
          title: "Stay On Track",
          description:
            "Get reminders when services are due. Share your vehicle's record anytime with a single link.",
        },
      ],
    },
    valueSection: {
      eyebrow: "Why It Matters",
      headingLine: "What You Get From Keeping",
      headingAccent: "Proper Maintenance Records",
      intro:
        "A complete service log protects your car's resale value, keeps you ahead of maintenance, and gives you one reliable place for every record.",
      values: [
        {
          icon: TrendingUp,
          title: "Protect Your Resale Value",
          description:
            "A complete maintenance record shows buyers your car has been properly cared for. Documented vehicles sell faster and for more.",
        },
        {
          icon: ShieldCheck,
          title: "Never Forget A Service",
          description:
            "Missed maintenance leads to bigger problems. Reminders and a clear due status help you stay ahead of every oil change, filter, and inspection.",
        },
        {
          icon: FolderOpen,
          title: "All Your Records In One Place",
          description:
            "No more lost receipts or scattered notes. Every service is logged, organized by category, and always accessible from your phone.",
        },
      ],
    },
    businessSection: {
      eyebrow: "Multiple Vehicles?",
      heading: "Also Built For Households And Small Fleets",
      body:
        "Whether you have two cars in the driveway or a small business fleet, CarCare Diary supports multiple vehicles under a single account.",
      points: [
        { icon: Car, text: "Track maintenance for every vehicle under one account" },
        {
          icon: BarChart3,
          text: "Monitor spending across your entire fleet",
        },
        {
          icon: Building2,
          text: "Keep organized service records for each vehicle",
        },
      ],
      ctaLabel: "Learn more about CarCare Diary for Business",
      ctaTo: "/business",
    },
    landingFaq: {
      eyebrow: "FAQ",
      heading: "Frequently Asked Questions About CarCare Diary",
      intro: "Common questions about the CarCare Diary car maintenance tracker app.",
      items: [
        {
          question: "What Is CarCare Diary?",
          answer:
            "CarCare Diary is a car maintenance tracker app for iPhone and Android. It helps you log every service, track mileage, get reminders when maintenance is due, and keep a complete vehicle service history you can share.",
        },
        {
          question: "Is CarCare Diary Free To Use?",
          answer:
            "Yes. CarCare Diary is free for one vehicle with full access to the service log, mileage tracking, reminders, and shareable history. A Pro plan is available if you need to track multiple vehicles.",
        },
        {
          question: "What Kind Of Maintenance Can I Track?",
          answer:
            "You can log any type of car maintenance - oil changes, brake pads, filters, spark plugs, tire rotations, fluid changes, inspections, battery replacements, and more. Each entry includes date, mileage, specifications, and notes.",
        },
        {
          question: "How Do Service Reminders Work?",
          answer:
            "CarCare Diary calculates when services are coming due based on your maintenance log, current mileage, and recommended service intervals. You see a clear due status for each maintenance type and get notified when it's time to act.",
        },
        {
          question: "Can I Share My Car's Maintenance History?",
          answer:
            "Yes. You can generate a public link to your vehicle's full service record. This is especially useful when selling your car - buyers can review every logged service, which builds trust and supports your asking price.",
        },
        {
          question: "Does CarCare Diary Support Multiple Vehicles?",
          answer:
            "The free plan covers one vehicle. If you have more than one car - or manage a small fleet - the Pro plan lets you track multiple vehicles under a single account, each with its own service log and reminders.",
        },
        {
          question: "Is CarCare Diary Available For iPhone And Android?",
          answer:
            "CarCare Diary is available for both iPhone and Android. You can download it for free on the App Store and Google Play.",
        },
        {
          question: "How Does A Maintenance Log Help When Selling My Car?",
          answer:
            "A complete service history shows potential buyers that your vehicle has been regularly maintained. With CarCare Diary, you can share a public link to your car's full maintenance record, making the sale process more transparent and increasing buyer confidence.",
        },
      ],
    },
    downloadCta: {
      eyebrow: "Get The App",
      headingLine: "Start Tracking Your Car's Maintenance",
      headingAccent: "Today",
      body:
        "CarCare Diary is a free car maintenance tracker for iPhone and Android. Log services, track mileage, get reminders, and share your vehicle's complete service history.",
      link1: { label: "Car maintenance tracker", to: "/car-maintenance-tracker" },
      link2: { label: "Car service history", to: "/car-service-history" },
      link3: { label: "Vehicle maintenance log", to: "/vehicle-maintenance-log" },
    },
  },
  fr: {
    seoJsonLd: {
      softwareAppDescription:
        "Application de suivi d'entretien automobile avec carnet numérique, kilométrage, rappels et historique partageable.",
    },
    hero: {
      eyebrow: "Application de suivi d'entretien automobile",
      titleLine: "Suivez l'entretien et l'historique de votre voiture",
      titleAccent: "dans une seule application",
      body:
        "CarCare Diary est une application gratuite pour iPhone et Android qui vous aide à consigner les entretiens et réparations, suivre le kilométrage, consulter les prochaines échéances et partager l'historique d'entretien de votre véhicule.",
      subline: "Téléchargement gratuit sur iPhone et Android",
      heroImageAlt:
        "Application CarCare Diary affichant le carnet d'entretien et le suivi du kilométrage d'une voiture",
    },
    trustBar: {
      signals: [
        { icon: trustIcons[0], text: "Disponible sur iPhone et Android" },
        { icon: trustIcons[1], text: "Carnet d'entretien organisé" },
        { icon: trustIcons[2], text: "Rappels d'entretien" },
        { icon: trustIcons[3], text: "Historique partageable" },
        { icon: trustIcons[4], text: "Gestion de plusieurs véhicules" },
      ],
    },
    features: {
      eyebrow: "Fonctionnalités",
      headingLine: "Tout pour",
      headingAccent: "suivre l'entretien de votre voiture",
      intro:
        "Un carnet d'entretien numérique avec rappels, suivi du kilométrage et historique partageable, conçu pour les automobilistes au quotidien.",
      items: [
        {
          icon: Wrench,
          title: "Carnet d'entretien",
          description:
            "Consignez les vidanges, interventions sur les freins, changements de filtres et autres opérations. Ajoutez une date, le kilométrage et vos notes.",
        },
        {
          icon: Bell,
          title: "Rappels d'entretien",
          description:
            "Consultez les prochaines échéances calculées à partir de vos interventions, du kilométrage saisi et des intervalles d'entretien. Activez les notifications si vous souhaitez recevoir des alertes.",
        },
        {
          icon: Gauge,
          title: "Suivi du kilométrage",
          description:
            "Mettez régulièrement à jour le compteur kilométrique pour garder des échéances d'entretien pertinentes.",
        },
        {
          icon: Car,
          title: "Fiche du véhicule",
          description:
            "Retrouvez la marque, le modèle, l'année, la motorisation et la photo de votre voiture au même endroit.",
        },
        {
          icon: History,
          title: "Historique des interventions",
          description:
            "Constituez un historique organisé des entretiens que vous enregistrez. Parcourez-le par catégorie.",
        },
        {
          icon: Share2,
          title: "Historique partageable",
          description:
            "Créez un lien public en lecture seule vers les interventions enregistrées. Pratique pour une vente ou un rendez-vous au garage.",
        },
      ],
      footerPrefix: "Vous voulez en savoir plus ?",
      linkTracker: "Découvrir le suivi d'entretien CarCare Diary",
      linkGuides: "Consulter les guides d'entretien",
    },
    appShowcase: {
      eyebrow: "Dans l'application",
      headingLine: "Le carnet d'entretien de votre voiture,",
      headingAccent: "toujours à jour",
      intro:
        "Une vue claire des interventions, échéances et informations utiles, pour simplifier le suivi de votre véhicule.",
      rows: [
        {
          title: "Voyez les prochaines échéances",
          description:
            "Retrouvez l'état de l'entretien du véhicule, le kilométrage actuel et les catégories de maintenance en un coup d'œil. Des informations sur les dépenses sont disponibles selon votre abonnement.",
          alt: "Tableau de bord CarCare Diary avec les catégories d'entretien et le kilométrage",
        },
        {
          title: "Repérez les entretiens à prévoir",
          description:
            "Les statuts distinguent les échéances à venir, proches ou dépassées, selon les informations enregistrées.",
          alt: "Statuts des rappels d'entretien dans CarCare Diary",
        },
        {
          title: "Comprenez vos dépenses d'entretien",
          description:
            "Avec les fonctionnalités payantes correspondantes, consultez les dépenses par mois et par catégorie pour mieux suivre le budget automobile.",
          alt: "Analyses des dépenses d'entretien CarCare Diary",
        },
        {
          title: "Partagez l'historique du véhicule",
          description:
            "Au moment de vendre, transmettez un lien vers les interventions consignées. L'acheteur peut consulter les informations partagées dans son navigateur.",
          alt: "Historique d'entretien partagé dans un navigateur mobile",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Comment ça marche",
      headingLine: "Suivez les entretiens",
      headingAccent: "en quelques étapes",
      intro: "Ajoutez votre voiture, consignez vos interventions et consultez les prochaines échéances.",
      stepLabel: (n) => `ÉTAPE ${n}`,
      steps: [
        {
          number: "01",
          title: "Ajoutez votre voiture",
          description:
            "Créez la fiche du véhicule avec les informations de base et, si vous le souhaitez, une photo.",
        },
        {
          number: "02",
          title: "Enregistrez chaque entretien",
          description:
            "Ajoutez la date, le kilométrage quand il est pertinent, et vos notes. L'historique se construit au fil des interventions.",
        },
        {
          number: "03",
          title: "Gardez le cap",
          description:
            "Consultez les prochaines échéances et partagez l'historique du véhicule quand vous en avez besoin.",
        },
      ],
    },
    valueSection: {
      eyebrow: "Pourquoi c'est utile",
      headingLine: "Les avantages d'un",
      headingAccent: "historique d'entretien bien tenu",
      intro:
        "Conserver les informations d'entretien permet de mieux anticiper les interventions et de présenter un historique clair lors de la vente.",
      values: [
        {
          icon: TrendingUp,
          title: "Valorisez l'entretien de votre voiture",
          description:
            "Un historique documenté rassure les acheteurs potentiels et permet d'expliquer les travaux déjà effectués, sans garantir un prix de vente supérieur.",
        },
        {
          icon: ShieldCheck,
          title: "Évitez les oublis",
          description:
            "Les échéances et rappels vous aident à anticiper les vidanges, remplacements de filtres et contrôles réguliers.",
        },
        {
          icon: FolderOpen,
          title: "Regroupez vos informations",
          description:
            "Retrouvez les interventions et les notes par catégorie, sans chercher parmi différents messages et carnets.",
        },
      ],
    },
    businessSection: {
      eyebrow: "Plusieurs véhicules ?",
      heading: "Aussi adapté aux foyers et aux petites flottes",
      body:
        "Que vous ayez deux voitures à la maison ou quelques véhicules professionnels, CarCare Diary permet de suivre plusieurs véhicules depuis un même compte, selon votre abonnement.",
      points: [
        { icon: Car, text: "Suivez l'entretien de chaque véhicule depuis un seul compte." },
        {
          icon: BarChart3,
          text: "Consultez les dépenses de l'ensemble de votre flotte avec les fonctionnalités Pro correspondantes.",
        },
        { icon: Building2, text: "Conservez un historique d'entretien distinct pour chaque véhicule." },
      ],
      ctaLabel: "Découvrir CarCare Diary pour les professionnels",
      ctaTo: "/fr/gestion-entretien-flotte",
    },
    landingFaq: {
      eyebrow: "FAQ",
      heading: "Questions fréquentes sur CarCare Diary",
      intro: "Retrouvez les réponses aux questions les plus courantes sur l'application de suivi d'entretien.",
      items: [
        {
          question: "Qu'est-ce que CarCare Diary ?",
          answer:
            "CarCare Diary est une application pour iPhone et Android qui permet d'enregistrer les entretiens et réparations de votre voiture, de suivre son kilométrage, de consulter les échéances et de partager son historique d'entretien.",
        },
        {
          question: "CarCare Diary est-elle gratuite ?",
          answer:
            "Oui. La formule gratuite permet de suivre un véhicule avec un carnet d'entretien, le kilométrage, les rappels et le partage de l'historique des interventions. La formule Base permet de gérer jusqu'à trois véhicules ; Pro s'adresse notamment à ceux qui en ont davantage.",
        },
        {
          question: "Quels entretiens peut-on enregistrer ?",
          answer:
            "Vidanges, freins, filtres, bougies, permutation des pneus, liquides, contrôles, batterie et autres réparations. Vous pouvez préciser la date, le kilométrage quand il s'applique, les références et vos notes.",
        },
        {
          question: "Comment fonctionnent les rappels d'entretien ?",
          answer:
            "L'application calcule les échéances à partir des interventions consignées, du kilométrage que vous saisissez et des intervalles configurés. Vous pouvez consulter le statut de chaque entretien et recevoir des notifications si elles sont activées et autorisées.",
        },
        {
          question: "Peut-on partager l'historique d'entretien ?",
          answer:
            "Oui. Un lien public en lecture seule permet à un acheteur ou à un mécanicien de consulter les entretiens enregistrés et les informations partagées, sans compte CarCare Diary.",
        },
        {
          question: "Peut-on suivre plusieurs voitures ?",
          answer:
            "Oui. La formule gratuite couvre un véhicule, Base jusqu'à trois, et Pro davantage. Chaque voiture dispose de ses propres interventions, kilométrage et échéances.",
        },
        {
          question: "L'application existe-t-elle sur iPhone et Android ?",
          answer: "Oui. CarCare Diary est téléchargeable gratuitement sur l'App Store et Google Play.",
        },
        {
          question: "À quoi sert l'historique lors de la vente ?",
          answer:
            "Il permet de montrer les interventions consignées avec leurs dates et les kilométrages disponibles. Un lien partageable facilite les échanges avec les acheteurs et rend les informations plus transparentes.",
        },
      ],
    },
    downloadCta: {
      eyebrow: "Télécharger l'application",
      headingLine: "Commencez à suivre l'entretien de votre voiture",
      headingAccent: "dès aujourd'hui",
      body:
        "Téléchargez CarCare Diary sur iPhone ou Android pour consigner les interventions, suivre le kilométrage, anticiper les échéances et partager l'historique de votre véhicule.",
      link1: { label: "Suivi d'entretien", to: "/fr/suivi-entretien-voiture" },
      link2: { label: "Historique d'entretien", to: "/fr/historique-entretien-voiture" },
      link3: { label: "Carnet d'entretien numérique", to: "/fr/carnet-entretien-voiture" },
    },
  },
};
