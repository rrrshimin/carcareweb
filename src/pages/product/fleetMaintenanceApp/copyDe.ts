import type { FleetMaintenanceAppCopy } from "./types";

export const fleetMaintenanceAppCopyDe: FleetMaintenanceAppCopy = {
  pageFaqs: [
    {
      question: "Was ist eine Fuhrpark-Wartungs-App?",
      answer:
        "Damit lassen sich Serviceeinträge, Kilometerstände und Wartungserinnerungen für mehrere Fahrzeuge an einem Ort verwalten. CarCare Diary ist vor allem für kleine Fuhrparks und Betriebe geeignet, die Wartungsdokumentation benötigen.",
    },
    {
      question: "Wie verwaltet CarCare Diary die Serviceeinträge?",
      answer:
        "Jedes Fahrzeug hat ein eigenes Wartungsprotokoll. Ölwechsel, Bremsen, Filter, Reifen und andere Arbeiten werden mit Datum, Kilometerstand, Teilen und Notizen erfasst und zur Fahrzeughistorie hinzugefügt.",
    },
    {
      question: "Kann ich für jedes Fahrzeug Erinnerungen festlegen?",
      answer:
        "Ja. Die Fälligkeit wird anhand der erfassten Wartung, des aktuellen Kilometerstands und des gewählten Intervalls berechnet. Für jede Wartungsart sehen Sie den Status.",
    },
    {
      question: "Wie funktioniert die Kilometererfassung im Fuhrpark?",
      answer:
        "Sie aktualisieren den Tachostand jedes Fahrzeugs in der App. Diese Werte beeinflussen Wartungsintervalle und werden zu Serviceeinträgen festgehalten.",
    },
    {
      question: "Kann ich Wartungskosten über den Fuhrpark hinweg auswerten?",
      answer:
        "Wartungskosten lassen sich je Serviceeintrag erfassen. Kostenanalysen pro Fahrzeug und für den Fuhrpark sind abhängig vom gebuchten Tarif verfügbar.",
    },
    {
      question: "Kann ich die Historie eines Fahrzeugs teilen?",
      answer:
        "Ja. Ein öffentlicher Link ermöglicht den schreibgeschützten Zugriff auf die freigegebenen Wartungseinträge eines Fahrzeugs - ohne Konto des Empfängers.",
    },
    {
      question: "Ist CarCare Diary für Fuhrparkwartung kostenlos?",
      answer:
        "Ein Fahrzeug kann kostenlos verwaltet werden. Base unterstützt bis zu drei Fahrzeuge, Pro weitere Fahrzeuge gemäß geltenden Tarifgrenzen (bis zu 1.000 Fahrzeuge). Serviceeinträge, Kilometerstand, Erinnerungen und das Teilen der Historie gehören zu den Grundfunktionen.",
    },
  ],
  seo: {
    title: "Fuhrpark-Wartungs-App: Service & Erinnerungen | CarCare Diary",
    description:
      "Wartungen für mehrere Fahrzeuge dokumentieren. CarCare Diary bündelt Serviceprotokolle, Kilometerstand, Erinnerungen und Wartungskosten pro Fahrzeug.",
    path: "/de/fuhrpark-wartung-app",
    jsonLdSoftwareDescription:
      "Fuhrpark-Wartungs-App mit Serviceprotokollen, Kilometerständen, Wartungserinnerungen und teilbarer Historie für mehrere Fahrzeuge.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Fuhrpark-Wartungs-App",
    titleAccent: "Serviceprotokolle, Kilometerstand und Erinnerungen",
    body:
      "Mit CarCare Diary halten Sie die Wartungsunterlagen Ihrer Fahrzeuge übersichtlich. Erfassen Sie jede Servicearbeit, aktualisieren Sie die Tachostände und erkennen Sie, wann das nächste Wartungsintervall ansteht - direkt auf iPhone oder Android.",
    subline: "Kostenlos starten · Tarife für mehrere Fahrzeuge",
    imageAlt: "CarCare Diary Fuhrpark-Wartungs-App mit Serviceeinträgen und Wartungserinnerungen.",
  },
  features: {
    eyebrow: "Wartungsfunktionen",
    heading: "Was die App für Fuhrparkwartung bietet",
    intro:
      "Protokolle, Kilometerstände und Fälligkeiten je Fahrzeug – aus Ihren erfassten Wartungen.",
    items: [
      {
        title: "Wartungsprotokoll je Fahrzeug",
        description:
          "Ölwechsel, Bremsen, Reifen, Flüssigkeiten und Filter separat je Fahrzeug dokumentieren - mit Datum, Kilometerstand, Teilen und Notizen.",
      },
      {
        title: "Kilometerstand pro Fahrzeug",
        description:
          "Erfassen Sie den aktuellen Tachostand und den Kilometerstand zu jedem Serviceeintrag. So bleiben intervallbasierte Berechnungen nachvollziehbar.",
      },
      {
        title: "Erinnerungen nach Wartungsart",
        description:
          "Legen Sie Intervalle für Ölwechsel, Bremsenprüfung, Reifenrotation und weitere Arbeiten fest. CarCare Diary zeigt anstehende Wartungen pro Fahrzeug an.",
      },
      {
        title: "Komplette Wartungshistorie",
        description:
          "Alle eingetragenen Arbeiten bilden eine chronologische, nach Kategorien sortierte Historie für jedes Fahrzeug.",
      },
      {
        title: "Wartungskosten erfassen",
        description:
          "Halten Sie die Ausgaben je Service fest. In den entsprechenden kostenpflichtigen Tarifen können Sie Ausgaben je Fahrzeug auswerten und teure Wartungskategorien erkennen.",
      },
      {
        title: "Servicehistorie teilen",
        description:
          "Erstellen Sie einen öffentlichen Link zur freigegebenen Historie eines Fahrzeugs - zum Beispiel für Werkstätten oder Kaufinteressenten.",
      },
    ],
    secondaryImageAlt:
      "CarCare Diary Wartungskategorien mit Fälligkeit und Erinnerungen.",
  },
  steps: {
    eyebrow: "So funktioniert's",
    heading: "So richten Sie den Fuhrpark ein",
    intro:
      "Fahrzeug anlegen, Kilometerstand pflegen, Wartungen erfassen – in wenigen Schritten.",
    items: [
      {
        number: "01",
        title: "Jedes Fahrzeug hinzufügen",
        body:
          "Marke, Modell, Baujahr und Kennzeichen eingeben. So viele Fahrzeuge anlegen, wie Ihr Tarif erlaubt.",
      },
      {
        number: "02",
        title: "Aktuellen Kilometerstand eintragen",
        body:
          "Den Tachostand jedes Fahrzeugs erfassen, damit kilometerabhängige Wartungen berechnet werden können.",
      },
      {
        number: "03",
        title: "Servicearbeiten dokumentieren",
        body:
          "Nach der Wartung Art der Arbeit, Datum, Kilometerstand, Teile und Notizen eintragen. Die Historie wächst automatisch.",
      },
      {
        number: "04",
        title: "Fällige Wartungen prüfen",
        body: "Sehen Sie, welche Arbeiten aktuell, bald fällig oder bereits überfällig sind.",
      },
      {
        number: "05",
        title: "Tachostände regelmäßig aktualisieren",
        body:
          "Halten Sie die Laufleistung aktuell, damit Serviceintervalle zuverlässig berechnet werden.",
      },
    ],
  },
  who: {
    eyebrow: "Für wen geeignet?",
    heading: "Typische Nutzer im Fuhrpark",
    intro: "CarCare Diary hilft, Wartungen über mehrere Fahrzeuge hinweg zu organisieren.",
    personas: [
      {
        title: "Handwerksbetriebe",
        description:
          "Für Bauunternehmen, Installateure, Elektriker und andere Betriebe mit Dienstwagen oder Transportern, deren Wartung zuverlässig dokumentiert werden soll.",
      },
      {
        title: "Teams mit festen Serviceintervallen",
        description:
          "Für alle, die Wartungspläne mehrerer Fahrzeuge im Blick behalten möchten. Intervall festlegen, Einträge aktualisieren, Fälligkeit prüfen.",
      },
      {
        title: "Unternehmen mit Dokumentationsbedarf",
        description:
          "Für Betriebe und Privatpersonen, die pro Fahrzeug eine nachvollziehbare, teilbare Servicehistorie führen möchten.",
      },
    ],
  },
  lightweight: {
    eyebrow: "Einfache Alternative",
    heading: "Ohne Telematik-Overkill",
    body1:
      "Für einfache Wartungsdokumentation brauchen kleine Fuhrparks nicht zwingend eine umfangreiche Telematikplattform. CarCare Diary konzentriert sich auf Wartungen und Historien.",
    body2:
      "Mobile App, klare Protokolle, Erinnerungen pro Fahrzeug – ohne Pflicht-Hardware.",
    enterpriseLabel: "Typische Enterprise-Funktionen",
    ccdLabel: "Fokus von CarCare Diary",
    enterprise: [
      "Telematik- und GPS-Hardware",
      "Bewertung des Fahrverhaltens",
      "Tourenplanung und Disposition",
      "Tankkarten- und Ausgabenintegrationen",
      "Umfangreiche Compliance-Workflows",
      "Unternehmensverträge und IT-Einführung",
    ],
    ccd: [
      "Serviceprotokoll für jede Wartungsart",
      "Kilometerstand und intervallbasierte Fälligkeit",
      "Erinnerungen auf Basis der dokumentierten Historie",
      "Wartungskosten je Fahrzeug erfassen und auswerten (tarifabhängig)",
      "Teilbare Wartungshistorie",
      "Mobile App ohne Pflicht-Hardware",
    ],
    relatedPrefix: "Siehe auch:",
    links: [
      { to: "/de/fuhrparkmanagement-app", label: "Fuhrparkmanagement-App" },
      { to: "/de/autowartung-app", label: "Autowartung-App" },
      { to: "/de/wartungsprotokoll-auto", label: "Wartungsprotokoll" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Häufige Fragen zur Fuhrpark-Wartung",
    intro:
      "Wie CarCare Diary kleinen Fuhrparks hilft, Wartungen zu dokumentieren und Fälligkeiten im Blick zu behalten.",
  },
  cta: {
    eyebrow: "App herunterladen",
    heading: "Alle Wartungseinträge Ihres Fuhrparks an einem Ort",
    body:
      "Starten Sie mit CarCare Diary und behalten Sie Servicearbeiten, Kilometerstände und Erinnerungen für jedes Fahrzeug im Blick.",
    links: [
      { to: "/de/fuhrparkmanagement-app", label: "Fuhrparkmanagement" },
      { to: "/de/wartungshistorie-auto", label: "Wartungshistorie" },
      { to: "/blog/how-to-track-car-maintenance", label: "Autowartung dokumentieren" },
    ],
  },
};