import type { HreflangAlternate } from "../../lib/usePageSeo";

export type FleetLocaleId = "us" | "uk" | "fr";

export type FleetIcon =
  | "bell"
  | "history"
  | "gauge"
  | "check"
  | "wallet"
  | "fleet"
  | "export"
  | "file";

export interface FleetNote {
  title: string;
  body: string;
}

export interface FleetBenefit {
  icon: FleetIcon;
  title: string;
  body: string;
}

export interface FleetCopy {
  id: FleetLocaleId;
  path: string;
  htmlLang: string;
  ogLocale: string;
  brandLine: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  hero: string;
  heroAlt: string;
  vehicleAlt: string;
  cta: string;
  microcopy: string;
  qrAction: string;
  qrStripTitle: string;
  qrStripBody: string;
  qrModalTitle: string;
  qrModalBody: string;
  qrClose: string;
  qrAlt: string;
  qrCtaHint: string;
  appStoreKicker: string;
  appStoreName: string;
  appStoreAria: string;
  playKicker: string;
  playName: string;
  playAria: string;
  dueTitle: string;
  dueBody: string;
  duePoints: string[];
  historyTitle: string;
  historyBody: string;
  historyPoints: string[];
  historyAlt: string;
  inspectionsTitle: string;
  inspectionsBody: string;
  inspectionsPoints: string[];
  inspectionsAlt: string;
  spendingTitle: string;
  spendingBody: string;
  spendingPoints: string[];
  spendingAlt: string;
  spendingVehicleAlt: string;
  benefits: FleetBenefit[];
  notesTitle: string;
  notes: FleetNote[];
  planTitle: string;
  planBody: string;
  finalTitle: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
}

/** US is the fallback because the site default language is English and there is no locale-neutral fleet URL. */
export const FLEET_ALTERNATES: readonly HreflangAlternate[] = [
  { hreflang: "en-US", path: "/fleet-us" },
  { hreflang: "en-GB", path: "/fleet-uk" },
  { hreflang: "fr-FR", path: "/fleet-fr" },
  { hreflang: "x-default", path: "/fleet-us" },
];

const us: FleetCopy = {
  id: "us",
  path: "/fleet-us",
  htmlLang: "en-US",
  ogLocale: "en_US",
  brandLine: "CarCare Fleet is part of the CarCare Diary app.",
  seoTitle: "CarCare Fleet | Fleet Maintenance & Vehicle Service Tracking",
  seoDescription:
    "Stay on top of fleet servicing, mileage, inspections and vehicle expenses with CarCare Diary. See what's due across your vehicles. Download on iOS or Android.",
  h1: "Stay on top of maintenance across your fleet.",
  hero: "Keep service history, mileage, upcoming maintenance, inspections and expenses organized across your vehicles, all from one app.",
  heroAlt:
    "CarCare Diary Fleet screen showing fleet health that needs attention, one overdue vehicle, and upcoming maintenance tasks.",
  vehicleAlt:
    "Ford Transit 250 in CarCare Diary, with current mileage in miles and maintenance status.",
  cta: "Download the app for free",
  microcopy: "Free for one vehicle. One-month free trial available.",
  appStoreKicker: "Download on the",
  appStoreName: "App Store",
  appStoreAria: "Download CarCare Diary on the App Store",
  playKicker: "GET IT ON",
  playName: "Google Play",
  playAria: "Get CarCare Diary on Google Play",
  dueTitle: "Know what's due before it becomes overdue",
  dueBody:
    "Fleet health and the upcoming list put due-soon and overdue work in one view, so you can see which vehicles need attention.",
  duePoints: [
    "Fleet health for the vehicles you track",
    "Upcoming, due soon, and overdue tasks",
    "Reminders from the service logs you keep",
  ],
  historyTitle: "A history for every vehicle",
  historyBody:
    "Record maintenance, repairs and mileage on each vehicle, then open the previous logs when you need them. Odometer readings are entered by you, including a bulk update for several vehicles at once.",
  historyPoints: [
    "Maintenance and repairs, with dates and cost",
    "Mileage you enter, including a bulk update",
    "Previous logs when you need them",
  ],
  historyAlt:
    "Engine oil change history in CarCare Diary, with dates, mileage in miles, costs and a service provider.",
  inspectionsTitle: "Checks you can run around a trip",
  inspectionsBody:
    "Quick, pre-trip, post-trip and full-vehicle checklists keep regular inspections organized. Preparing for an official inspection depends on local rules. The app does not replace a legally required inspection.",
  inspectionsPoints: ["Quick check", "Pre-trip", "Post-trip", "Full vehicle check"],
  inspectionsAlt:
    "CarCare Diary inspections screen with quick, pre-trip, post-trip and full vehicle checklists, set to the United States.",
  spendingTitle: "See where the spending goes",
  spendingBody:
    "Log expenses by category, including fuel you enter yourself. Review the totals, then export spending as a CSV or PDF report.",
  spendingPoints: ["Categories you log", "Totals by vehicle", "CSV and PDF export"],
  spendingAlt:
    "CarCare Diary analytics with monthly spending, cost per mile, category totals, and CSV or PDF export.",
  spendingVehicleAlt:
    "CarCare Diary spending listed by vehicle, with a dollar total for each vehicle.",
  benefits: [
    {
      icon: "bell",
      title: "Due and overdue",
      body: "Fleet health, plus tasks that are upcoming, due soon or already overdue.",
    },
    {
      icon: "history",
      title: "Service history",
      body: "Repairs and maintenance with dates, mileage and costs when you log them.",
    },
    {
      icon: "gauge",
      title: "Mileage you enter",
      body: "Update one vehicle or several at once. Odometers are not read automatically.",
    },
    {
      icon: "check",
      title: "Inspections",
      body: "Quick, pre-trip, post-trip and full-vehicle checklists.",
    },
    {
      icon: "wallet",
      title: "Expenses",
      body: "Costs by category, including fuel you log, with CSV and PDF export.",
    },
    {
      icon: "fleet",
      title: "Many vehicles",
      body: "A few work vehicles or a much larger fleet, in one app.",
    },
  ],
  notesTitle: "The rest of the record",
  notes: [
    {
      title: "More than a few vehicles",
      body: "Manage several vehicles in one app, whether that is a handful of work vans or a much larger fleet.",
    },
    {
      title: "Fuel you enter",
      body: "Fuel is an expense category you log. The app does not read fuel consumption from the vehicle.",
    },
    {
      title: "Documents beside the history",
      body: "Keep vehicle documents with the maintenance record for that vehicle.",
    },
  ],
  planTitle: "Start with one vehicle for free",
  planBody:
    "The free plan covers one vehicle, service logs and due reminders. A one-month trial is available for eligible paid features. Current eligibility and plan details are shown in the app stores.",
  qrAction: "Open on phone",
  qrStripTitle: "Want to open CarCare Fleet on your phone?",
  qrStripBody: "Scan to open this page on your phone, then choose your app store.",
  qrModalTitle: "Open on phone",
  qrModalBody: "Scan this code with your phone camera. It opens this page, then you choose the App Store or Google Play.",
  qrClose: "Close",
  qrAlt: "QR code that opens this CarCare Fleet page on your phone",
  qrCtaHint: "Scan to open this page on your phone.",
  finalTitle: "A clearer view of every vehicle starts here.",
  faqTitle: "Questions worth asking first",
  faqs: [
    {
      question: "Is CarCare Fleet only for small fleets?",
      answer:
        "No. You can manage multiple vehicles in one mobile app, from a handful to a much larger fleet. There is no advertised vehicle ceiling.",
    },
    {
      question: "How do I see what maintenance is coming up?",
      answer:
        "Fleet health and the upcoming list bring due-soon and overdue items together, so you can see which vehicles need attention. Due reminders are included.",
    },
    {
      question: "Can I keep a service history for each vehicle?",
      answer:
        "Yes. Record maintenance, repairs and mileage against each vehicle, and review its previous logs when you need them.",
    },
    {
      question: "Does mileage update automatically?",
      answer:
        "No. You enter mileage yourself, including a bulk update for several vehicles. CarCare does not read odometers or GPS automatically.",
    },
    {
      question: "Can I track fuel and other vehicle costs?",
      answer:
        "Yes. Log expenses by category, including fuel, and review spending totals and breakdowns. These are records you enter, not automatic fuel monitoring.",
    },
    {
      question: "What inspections can I record?",
      answer:
        "Quick checks, pre-trip, post-trip and full vehicle checks. Inspection preparation depends on local requirements. The app does not replace a legally required inspection.",
    },
    {
      question: "Can I export spending data?",
      answer: "Yes. Export spending as CSV or PDF reports from the analytics screen.",
    },
    {
      question: "Can different team members have their own accounts and permissions?",
      answer:
        "Not currently. There are no separate driver logins, roles or team permissions. You track your vehicles from your account.",
    },
    {
      question: "Is there a free plan or trial?",
      answer:
        "The free plan covers one vehicle, service logs and due reminders. A one-month trial is available for eligible paid features. Eligibility and subscription details are shown in the app stores.",
    },
  ],
};

const uk: FleetCopy = {
  id: "uk",
  path: "/fleet-uk",
  htmlLang: "en-GB",
  ogLocale: "en_GB",
  brandLine: "CarCare Fleet is part of the CarCare Diary app.",
  seoTitle: "CarCare Fleet | Fleet Servicing & Maintenance App",
  seoDescription:
    "Keep fleet servicing, kilometre readings, vehicle inspections and spending organised. See what's due across your vehicles with CarCare Diary.",
  h1: "Keep fleet maintenance organised in one place.",
  hero: "Track servicing, vehicle histories, kilometre readings, upcoming checks and running costs across your fleet, all in one app.",
  heroAlt:
    "CarCare Diary Fleet screen showing fleet health looking good, with upcoming servicing and no overdue vehicles.",
  vehicleAlt:
    "Ford Transit 250 in CarCare Diary, with current distance in kilometres and upcoming maintenance.",
  cta: "Download the app for free",
  microcopy: "Free for one vehicle. One-month free trial available.",
  appStoreKicker: "Download on the",
  appStoreName: "App Store",
  appStoreAria: "Download CarCare Diary on the App Store",
  playKicker: "GET IT ON",
  playName: "Google Play",
  playAria: "Get CarCare Diary on Google Play",
  dueTitle: "Know what's due before it becomes overdue",
  dueBody:
    "Fleet health and the upcoming list show servicing that is due soon or overdue, so you can plan the work before it becomes urgent.",
  duePoints: [
    "Fleet health for the vehicles you track",
    "Upcoming, due soon, and overdue work",
    "Reminders from the service logs you keep",
  ],
  historyTitle: "A service history for every vehicle",
  historyBody:
    "Keep repairs, servicing and kilometre readings on each vehicle, then open earlier logs when you need them. Distance is entered by you, including a bulk update for several vehicles in one place.",
  historyPoints: [
    "Servicing and repairs, with dates and cost",
    "Kilometres you enter, including a bulk update",
    "Earlier logs when you need them",
  ],
  historyAlt:
    "Engine oil change history in CarCare Diary, with dates, kilometre readings, costs in pounds and a service provider.",
  inspectionsTitle: "Checks you can run around a trip",
  inspectionsBody:
    "Quick, pre-trip, post-trip and full-vehicle checklists keep regular inspections organised. Preparing for an official inspection depends on local rules. The app does not replace a legally required inspection.",
  inspectionsPoints: ["Quick check", "Pre-trip", "Post-trip", "Full vehicle check"],
  inspectionsAlt:
    "CarCare Diary inspections screen with quick, pre-trip, post-trip and full vehicle checklists, set to the United Kingdom.",
  spendingTitle: "See where the running costs go",
  spendingBody:
    "Log vehicle expenses by category, including fuel you enter yourself. Review the totals, then export spending as a CSV or PDF report.",
  spendingPoints: ["Categories you log", "Totals by vehicle", "CSV and PDF export"],
  spendingAlt:
    "CarCare Diary analytics with monthly spending, cost per kilometre in pounds, category totals, and CSV or PDF export.",
  spendingVehicleAlt:
    "CarCare Diary spending listed by vehicle, with a pound total for each vehicle.",
  benefits: [
    {
      icon: "bell",
      title: "Due and overdue",
      body: "Fleet health, plus servicing that is due soon or already overdue.",
    },
    {
      icon: "history",
      title: "Service history",
      body: "Repairs and servicing with dates, kilometre readings and costs when you log them.",
    },
    {
      icon: "gauge",
      title: "Distance you enter",
      body: "Update one vehicle or several at once. Odometers are not read automatically.",
    },
    {
      icon: "check",
      title: "Inspections",
      body: "Quick, pre-trip, post-trip and full-vehicle checklists.",
    },
    {
      icon: "wallet",
      title: "Running costs",
      body: "Expenses by category, including fuel you log, with CSV and PDF export.",
    },
    {
      icon: "fleet",
      title: "Many vehicles",
      body: "A handful of work vehicles or a much larger fleet, in one app.",
    },
  ],
  notesTitle: "The rest of the record",
  notes: [
    {
      title: "More than a few vehicles",
      body: "Manage several vehicles in one app, from a handful of work vehicles to a much larger fleet.",
    },
    {
      title: "Fuel you enter",
      body: "Fuel is an expense category you log. The app does not read fuel consumption from the vehicle.",
    },
    {
      title: "Documents beside the history",
      body: "Keep vehicle documents with the service history for that vehicle.",
    },
  ],
  planTitle: "Get started free with one vehicle",
  planBody:
    "The free plan covers one vehicle, service logs and due reminders. A one-month trial is available for eligible paid features. Current plans are shown in the app stores.",
  qrAction: "Open on phone",
  qrStripTitle: "Want to open CarCare Fleet on your phone?",
  qrStripBody: "Scan to open this page on your phone, then choose your app store.",
  qrModalTitle: "Open on phone",
  qrModalBody: "Scan this code with your phone camera. It opens this page, then you choose the App Store or Google Play.",
  qrClose: "Close",
  qrAlt: "QR code that opens this CarCare Fleet page on your phone",
  qrCtaHint: "Scan to open this page on your phone.",
  finalTitle: "Stay ahead of the next service date.",
  faqTitle: "Questions worth asking first",
  faqs: [
    {
      question: "Is CarCare Fleet only for small fleets?",
      answer:
        "No. You can manage multiple vehicles in one mobile app, from a handful to a much larger fleet. There is no advertised vehicle ceiling.",
    },
    {
      question: "How do I see what maintenance is coming up?",
      answer:
        "Fleet health and the upcoming list bring due-soon and overdue items together, so you can see which vehicles need attention. Due reminders are included.",
    },
    {
      question: "Can I keep a service history for each vehicle?",
      answer:
        "Yes. Record servicing, repairs and kilometre readings against each vehicle, and review its previous logs when you need them.",
    },
    {
      question: "Does the kilometre reading update automatically?",
      answer:
        "No. You enter the distance yourself, including a bulk update for several vehicles. CarCare does not read odometers or GPS automatically.",
    },
    {
      question: "Can I track fuel and other vehicle costs?",
      answer:
        "Yes. Log expenses by category, including fuel, and review spending totals and breakdowns. These are records you enter, not automatic fuel monitoring.",
    },
    {
      question: "What inspections can I record?",
      answer:
        "Quick checks, pre-trip, post-trip and full vehicle checks. Inspection preparation depends on local requirements. The app does not replace a legally required inspection.",
    },
    {
      question: "Can I export spending data?",
      answer: "Yes. Export spending as CSV or PDF reports from the analytics screen.",
    },
    {
      question: "Can different team members have their own accounts and permissions?",
      answer:
        "Not currently. There are no separate driver logins, roles or team permissions. You track your vehicles from your account.",
    },
    {
      question: "Is there a free plan or trial?",
      answer:
        "The free plan covers one vehicle, service logs and due reminders. A one-month trial is available for eligible paid features. Eligibility and subscription details are shown in the app stores.",
    },
  ],
};

const fr: FleetCopy = {
  id: "fr",
  path: "/fleet-fr",
  htmlLang: "fr-FR",
  ogLocale: "fr_FR",
  brandLine: "CarCare Fleet fait partie de l’application CarCare Diary.",
  seoTitle: "CarCare Fleet | Suivi de l'entretien de votre flotte automobile",
  seoDescription:
    "Suivez l'entretien, les kilométrages, les inspections et les dépenses de votre flotte avec CarCare Diary. Disponible sur iOS et Android.",
  h1: "Gardez l'entretien de votre flotte sous contrôle.",
  hero: "Centralisez les historiques d'entretien, les kilométrages, les échéances, les contrôles et les dépenses de vos véhicules dans une seule application.",
  heroAlt:
    "Écran Flotte de CarCare Diary : état de la flotte au vert, avec les entretiens à venir et aucun véhicule en retard.",
  vehicleAlt:
    "Fiche du Ford Transit 250 dans CarCare Diary, avec le kilométrage actuel en kilomètres.",
  cta: "Télécharger l’application gratuitement",
  microcopy: "Gratuit pour un véhicule. Essai gratuit d’un mois disponible.",
  appStoreKicker: "Télécharger dans",
  appStoreName: "l’App Store",
  appStoreAria: "Télécharger CarCare Diary sur l’App Store",
  playKicker: "Disponible sur",
  playName: "Google Play",
  playAria: "Télécharger CarCare Diary sur Google Play",
  dueTitle: "Repérez les entretiens avant qu’ils ne soient en retard",
  dueBody:
    "La vue Flotte réunit l’état du parc et les interventions à venir, proches de l’échéance ou déjà en retard, pour voir quels véhicules demandent une attention.",
  duePoints: [
    "L’état de la flotte en un coup d’œil",
    "Interventions à venir, bientôt dues ou en retard",
    "Rappels à partir des entretiens que vous consignez",
  ],
  historyTitle: "L’historique de chaque véhicule",
  historyBody:
    "Enregistrez les entretiens, les réparations et les kilométrages de chaque véhicule, puis retrouvez les interventions précédentes. Les relevés sont saisis par vous, y compris une mise à jour groupée pour plusieurs véhicules.",
  historyPoints: [
    "Entretiens et réparations, avec dates et coûts",
    "Kilométrages saisis, y compris une mise à jour groupée",
    "Les interventions précédentes",
  ],
  historyAlt:
    "Historique de vidange dans CarCare Diary, avec dates, kilométrages, coûts en euros et prestataire.",
  inspectionsTitle: "Des contrôles autour du trajet",
  inspectionsBody:
    "Des listes rapides, avant trajet, après trajet et pour un contrôle complet aident à organiser les vérifications régulières. L’application ne remplace pas une inspection réglementaire.",
  inspectionsPoints: [
    "Contrôle rapide",
    "Avant trajet",
    "Après trajet",
    "Contrôle complet",
  ],
  inspectionsAlt:
    "Écran des contrôles dans CarCare Diary : contrôle rapide, avant départ, après trajet et contrôle complet, avec la France comme lieu.",
  spendingTitle: "Voyez où part l’argent",
  spendingBody:
    "Enregistrez les frais par catégorie, y compris le carburant que vous saisissez. Consultez les totaux, puis exportez les dépenses en CSV ou en PDF.",
  spendingPoints: ["Catégories saisies", "Totaux par véhicule", "Export CSV et PDF"],
  spendingAlt:
    "Écran Analyses de CarCare Diary : dépenses mensuelles, coût au kilomètre en euros, catégories et export CSV ou PDF.",
  spendingVehicleAlt:
    "Dépenses de CarCare Diary classées par véhicule, avec un total en euros pour chacun.",
  benefits: [
    {
      icon: "bell",
      title: "Échéances et retards",
      body: "L’état de la flotte, et les interventions à venir, bientôt dues ou déjà en retard.",
    },
    {
      icon: "history",
      title: "Historique d’entretien",
      body: "Réparations et entretiens, avec dates, kilométrages et coûts lorsque vous les consignez.",
    },
    {
      icon: "gauge",
      title: "Kilométrage saisi",
      body: "Mettez à jour un véhicule ou plusieurs à la fois. Le compteur n’est pas lu automatiquement.",
    },
    {
      icon: "check",
      title: "Contrôles",
      body: "Listes rapides, avant trajet, après trajet et contrôle complet du véhicule.",
    },
    {
      icon: "wallet",
      title: "Dépenses",
      body: "Frais par catégorie, carburant saisi compris, avec export CSV et PDF.",
    },
    {
      icon: "fleet",
      title: "Plusieurs véhicules",
      body: "Quelques utilitaires ou un parc plus important, dans une seule application.",
    },
  ],
  notesTitle: "Le reste du dossier",
  notes: [
    {
      title: "Plusieurs véhicules",
      body: "Suivez plusieurs véhicules dans la même application, qu’il s’agisse de quelques utilitaires ou d’un parc plus important.",
    },
    {
      title: "Carburant saisi par vous",
      body: "Le carburant est une catégorie de dépense que vous enregistrez. L’application ne mesure pas la consommation.",
    },
    {
      title: "Documents avec l’historique",
      body: "Conservez les documents du véhicule à côté de son suivi d’entretien.",
    },
  ],
  planTitle: "Commencez gratuitement avec un véhicule",
  planBody:
    "L’offre gratuite couvre un véhicule, ses entretiens et ses rappels d’échéance. Un essai d’un mois est disponible pour les fonctions payantes éligibles. Les conditions en vigueur sont indiquées dans les boutiques d’applications.",
  qrAction: "Ouvrir sur mobile",
  qrStripTitle: "Ouvrir CarCare Fleet sur votre téléphone ?",
  qrStripBody: "Scannez pour ouvrir cette page sur votre téléphone, puis choisissez votre boutique d’applications.",
  qrModalTitle: "Ouvrir sur mobile",
  qrModalBody: "Scannez ce code avec l’appareil photo. Il ouvre cette page, puis vous choisissez l’App Store ou Google Play.",
  qrClose: "Fermer",
  qrAlt: "QR code qui ouvre cette page CarCare Fleet sur votre téléphone",
  qrCtaHint: "Scannez pour ouvrir cette page sur votre téléphone.",
  finalTitle: "Anticipez les prochaines échéances d’entretien.",
  faqTitle: "Questions utiles avant de télécharger",
  faqs: [
    {
      question: "Est-ce réservé aux petites flottes ?",
      answer:
        "Non. L’application permet de suivre plusieurs véhicules au même endroit, qu’il s’agisse de quelques véhicules ou d’un parc plus important. Aucun plafond chiffré n’est annoncé.",
    },
    {
      question: "Comment savoir quels entretiens arrivent à échéance ?",
      answer:
        "La vue Flotte regroupe les opérations à venir, celles qui approchent de l’échéance et celles déjà en retard. Des rappels d’entretien sont également disponibles.",
    },
    {
      question: "Puis-je conserver l’historique de chaque véhicule ?",
      answer:
        "Oui. Vous enregistrez les entretiens, les réparations et les relevés kilométriques, puis vous retrouvez les interventions précédentes.",
    },
    {
      question: "Le kilométrage est-il relevé automatiquement ?",
      answer:
        "Non. Les relevés sont saisis manuellement, avec une mise à jour groupée pour plusieurs véhicules. Il n’y a pas de lecture automatique du compteur ni de suivi GPS.",
    },
    {
      question: "Puis-je suivre le carburant et les autres dépenses ?",
      answer:
        "Oui. Vous enregistrez les frais par catégorie, y compris le carburant, puis vous consultez les totaux et les analyses. Il ne s’agit pas d’une mesure automatique de la consommation.",
    },
    {
      question: "Quels contrôles puis-je effectuer ?",
      answer:
        "L’application propose des vérifications rapides, avant trajet, après trajet et des contrôles complets du véhicule. Elle ne remplace pas les inspections réglementaires.",
    },
    {
      question: "Puis-je exporter les dépenses ?",
      answer: "Oui. Vous pouvez exporter vos données de dépenses au format CSV ou PDF.",
    },
    {
      question: "Plusieurs collaborateurs peuvent-ils disposer de comptes distincts ?",
      answer:
        "Pas actuellement. L’application ne propose pas de rôles ni d’autorisations séparées pour chaque conducteur ou membre de l’équipe.",
    },
    {
      question: "Existe-t-il une version gratuite ou un essai ?",
      answer:
        "La version gratuite permet de suivre un véhicule, avec son historique et ses rappels. Un essai d’un mois est disponible. Les conditions et les tarifs en vigueur sont indiqués dans l’application.",
    },
  ],
};

export const FLEET_LOCALES: Record<FleetLocaleId, FleetCopy> = { us, uk, fr };
