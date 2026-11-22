import type { CarMaintenanceTrackerCopy } from "./types";

export const carMaintenanceTrackerCopyDe: CarMaintenanceTrackerCopy = {
  pageFaqs: [
    {
      question: "Was ist eine Autowartung-App?",
      answer:
        "Eine Autowartung-App speichert Serviceeinträge, Kilometerstände und Wartungserinnerungen an einem Ort. Du kannst sehen, wann Arbeiten anstehen, und eine nachvollziehbare Fahrzeughistorie aufbauen. CarCare Diary gibt es kostenlos für iPhone und Android.",
    },
    {
      question: "Welche Wartungen kann ich mit CarCare Diary erfassen?",
      answer:
        "Beispielsweise Ölwechsel, Bremsbeläge, Filter, Zündkerzen, Reifenrotation, Flüssigkeitswechsel, Batteriewechsel und Inspektionen. Zu jedem Eintrag kannst du Datum, Kilometerstand, technische Angaben und Notizen speichern.",
    },
    {
      question: "Wie funktionieren Serviceerinnerungen?",
      answer:
        "CarCare Diary berechnet die Fälligkeit aus deinen bisherigen Einträgen, dem aktuellen Tachostand und den festgelegten Wartungsintervallen. Du siehst für jede Wartung den Status und wirst an anstehende Arbeiten erinnert.",
    },
    {
      question: "Kann ich den Kilometerstand in der App verfolgen?",
      answer:
        "Ja. Du aktualisierst den Tachostand selbst. CarCare Diary verwendet ihn zur Berechnung kommender Wartungen und speichert den Kilometerstand zu deinen Einträgen.",
    },
    {
      question: "Kann ich die Wartungshistorie meines Autos teilen?",
      answer:
        "Ja. Über einen öffentlichen Link können andere die freigegebenen Serviceeinträge einsehen. Das ist etwa beim Fahrzeugverkauf praktisch.",
    },
    {
      question: "Ist CarCare Diary kostenlos?",
      answer:
        "Der kostenlose Tarif umfasst ein Fahrzeug mit Serviceprotokoll, Kilometerstand, Erinnerungen und teilbarer Historie. Für mehrere Fahrzeuge gibt es die kostenpflichtigen Tarife Base und Pro.",
    }
  ],
  seo: {
    title: "Autowartung-App: Wartungen, Kilometerstand & Erinnerungen | CarCare Diary",
    description:
      "Mit CarCare Diary Wartungen dokumentieren, Kilometerstand verfolgen und Erinnerungen erhalten. Alle Serviceeinträge und die Fahrzeughistorie an einem Ort.",
    path: "/de/autowartung-app",
    jsonLdSoftwareDescription:
      "Autowartung-App für Serviceeinträge, Kilometerstand, Wartungserinnerungen und eine teilbare Fahrzeughistorie.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Autowartung-App",
    titleAccent: "Alle Wartungen, Kilometerstände und Erinnerungen an einem Ort",
    body:
      "Eine Autowartung-App hält fest, welche Arbeiten an deinem Fahrzeug erledigt wurden - vom Ölwechsel über Bremsen bis zum Reifenwechsel. CarCare Diary erfasst Datum, Kilometerstand und Notizen, erinnert dich an anstehende Wartungen und ermöglicht das Teilen deiner Servicehistorie. Kostenlos für iPhone und Android.",
    subline: "Kostenlos für iPhone und Android",
  },
  whatItHelps: {
    eyebrow: "Funktionen",
    heading: "Was eine Autowartung-App dir hilft zu erledigen",
    intro:
      "Viele Autofahrer verlassen sich auf ihr Gedächtnis oder einen Stapel Rechnungen. Mit einer Wartungs-App behältst du die Fahrzeugpflege systematisch im Blick.",
    benefits: [
      {
        title: "Jede Wartung dokumentieren",
        description:
          "Halte Ölwechsel, Bremsenarbeiten, Filterwechsel, Flüssigkeiten, Inspektionen und weitere Arbeiten fest - inklusive Datum, Kilometerstand und Notizen.",
      },
      {
        title: "An Wartungen erinnern lassen",
        description:
          "Erkenne, wann Arbeiten anstehen. Die Fälligkeit wird aus den erfassten Wartungen, dem aktuellen Kilometerstand und den eingestellten Intervallen berechnet.",
      },
      {
        title: "Kilometerstand verfolgen",
        description:
          "Halte den Tachostand aktuell, damit Erinnerungen und Wartungsintervalle auch bei veränderter Fahrleistung stimmen. Die Kilometerstände sind mit deinen Serviceeinträgen verknüpft.",
      },
      {
        title: "Vollständige Historie aufbauen",
        description:
          "Jeder Eintrag ergänzt die Wartungshistorie deines Autos. Filtere nach Kategorien und sieh jederzeit nach, was früher gemacht wurde.",
      },
      {
        title: "Unterlagen beim Verkauf teilen",
        description:
          "Erstelle einen Link zur dokumentierten Servicehistorie. Kaufinteressenten können die erfassten Wartungen vor einer Entscheidung einsehen.",
      },
    ],
    guidePrefix: "Tipps zum Aufbau einer einfachen Wartungsroutine findest du hier:",
    guideLinkLabel: "Autowartung dokumentieren",
    guidePath: "/blog/how-to-track-car-maintenance",
  },
  appVsNotes: {
    eyebrow: "Warum eine App?",
    heading: "Notizen und Belege reichen oft nicht aus",
    intro:
      "Viele Autofahrer verlassen sich auf ihr Gedächtnis oder einen Stapel Rechnungen. Mit einer Wartungs-App behältst du die Fahrzeugpflege systematisch im Blick.",
    withoutHeading: "Ohne App",
    withHeading: "Mit CarCare Diary",
    oldWay: [
      "Papierbelege verblassen oder gehen verloren",
      "Du musst dich an den letzten Ölwechsel erinnern",
      "Erst beim Defekt fällt die versäumte Wartung auf",
      "Beim Verkauf fehlen nachvollziehbare Unterlagen",
      "Du weißt nicht, welche Arbeit als Nächstes ansteht",
      "Notizen sind zwischen Smartphone, E-Mails und Handschuhfach verstreut",
    ],
    newWay: [
      "Alle Serviceeinträge an einem Ort",
      "Du siehst sofort, wann eine Wartung zuletzt durchgeführt wurde",
      "Erinnerungen anhand von Kilometerstand und Wartungshistorie",
      "Die dokumentierte Historie lässt sich per Link teilen",
      "Klare Übersicht über bald fällige Wartungen",
      "Eine App für alle erfassten Informationen",
    ],
  },
  whoItsFor: {
    eyebrow: "Für wen geeignet?",
    heading: "Für alle, die ihr Auto im Blick behalten möchten",
    intro: "CarCare Diary hilft dir, deine Wartungsarbeiten übersichtlich zu dokumentieren.",
    personas: [
      {
        title: "Alltagsfahrer",
        description:
          "Wenn du regelmäßig fährst und bei Ölwechseln, Filtern und Serviceintervallen nicht auf dein Gedächtnis vertrauen möchtest.",
      },
      {
        title: "Haushalte mit mehreren Autos",
        description:
          "Führe für jedes Fahrzeug ein eigenes Profil mit Wartungseinträgen, Kilometerstand und Erinnerungen.",
      },
      {
        title: "Autobesitzer vor dem Verkauf",
        description:
          "Eine dokumentierte Servicehistorie kann Gespräche mit Interessenten erleichtern. Teile die erfassten Einträge über einen einzigen Link.",
      },
    ],
    multiVehiclePrefix: "Mehrere Fahrzeuge verwalten?",
    fleetManagementLabel: "Fuhrparkmanagement-App",
    fleetManagementPath: "/de/fuhrparkmanagement-app",
    fleetMaintenanceLabel: "Fuhrpark-Wartung",
    fleetMaintenancePath: "/de/fuhrpark-wartung-app",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Häufige Fragen zu Autowartung-Apps",
    intro: "So funktioniert die digitale Wartungsdokumentation mit CarCare Diary.",
  },
  cta: {
    eyebrow: "App herunterladen",
    heading: "Jetzt mit der Wartungsdokumentation starten",
    body:
      "Kostenlose Autowartung-App für iPhone und Android. Erfasse Serviceeinträge, verfolge den Kilometerstand, nutze Erinnerungen und teile die Fahrzeughistorie.",
    link1Label: "Wartungshistorie",
    link1Path: "/de/wartungshistorie-auto",
    link2Label: "Wartungsprotokoll",
    link2Path: "/de/wartungsprotokoll-auto",
    link3Label: "Wartungscheckliste",
    link3Path: "/blog/car-maintenance-checklist",
  },
  images: {
    carPageAlt:
      "Fahrzeugübersicht in CarCare Diary mit Wartungsstatus, Kilometerstand und Servicekategorien",
    addingLogAlt: "Neuen Wartungseintrag in CarCare Diary mit Kilometerstand und Notizen erstellen",
  },
};