import type { FleetManagementAppCopy } from "./types";

export const fleetManagementAppCopyDe: FleetManagementAppCopy = {
  pageFaqs: [
    {
      question: "Was ist eine Fuhrparkmanagement-App?",
      answer:
        "Eine solche App unterstützt bei der Verwaltung mehrerer Fahrzeuge, zum Beispiel Wartungen, Kilometerständen und Servicehistorien. CarCare Diary richtet sich an kleine Fuhrparks, Teams und Haushalte, die vor allem Wartungsdaten übersichtlich dokumentieren möchten.",
    },
    {
      question: "Kann ich mit CarCare Diary mehrere Fahrzeuge verwalten?",
      answer:
        "Ja. In kostenpflichtigen Tarifen erhält jedes Fahrzeug ein eigenes Profil mit Serviceprotokoll, Kilometerstand und Erinnerungen. Sie können Pkw, Transporter und weitere Fahrzeugtypen hinzufügen.",
    },
    {
      question: "Lässt sich der Kilometerstand jedes Fahrzeugs erfassen?",
      answer:
        "Ja. Sie aktualisieren die Tachostände manuell in der App. Die Werte werden für Wartungsintervalle verwendet und zu Serviceeinträgen gespeichert.",
    },
    {
      question: "Wie funktionieren Wartungserinnerungen für den Fuhrpark?",
      answer:
        "Für jedes Fahrzeug gibt es eigene Serviceeinträge und Intervalle. Wird beispielsweise ein Ölwechsel oder eine Bremseninspektion erfasst, nutzt die App Datum und Kilometerstand, um die nächste Fälligkeit zu berechnen.",
    },
    {
      question: "Kann ich eine Fahrzeughistorie teilen?",
      answer:
        "Ja. Für jedes Fahrzeug kann ein öffentlicher Link zu den freigegebenen Wartungseinträgen erstellt werden. Empfänger benötigen zum Lesen kein Konto.",
    },
    {
      question: "Ist CarCare Diary für Fuhrparks kostenlos?",
      answer:
        "Ein Fahrzeug ist kostenlos. Base erlaubt bis zu drei Fahrzeuge, Pro weitere Fahrzeuge gemäß aktuellen Tarifgrenzen (bis zu 1.000 Fahrzeuge). Für den Einstieg sind keine zusätzlichen GPS-Geräte nötig.",
    },
    {
      question: "Welche Wartungsarten kann ich pro Fahrzeug dokumentieren?",
      answer:
        "Öl- und Filterwechsel, Bremsen, Reifen, Flüssigkeiten, Luftfilter, Zündkerzen, Batterie, Inspektionen und weitere Arbeiten, jeweils mit Datum, Kilometerstand, Teilen und Notizen.",
    },
  ],
  seo: {
    title: "Fuhrparkmanagement-App für Wartung & Service | CarCare Diary",
    description:
      "Fahrzeugwartung im Fuhrpark organisieren: Serviceeinträge, Kilometerstand, Erinnerungen und Historie pro Fahrzeug in einer einfachen App verwalten.",
    path: "/de/fuhrparkmanagement-app",
    jsonLdSoftwareDescription:
      "App für die Wartungsverwaltung mehrerer Fahrzeuge mit Serviceprotokollen, Kilometerständen, Erinnerungen und teilbarer Historie.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Fuhrparkmanagement-App",
    titleAccent: "Wartung mehrerer Fahrzeuge einfach verwalten",
    body:
      "CarCare Diary ist eine mobile App für iPhone und Android, mit der Sie Serviceeinträge, Kilometerstände und Wartungserinnerungen für Ihre Fahrzeuge verwalten können. Ohne komplizierte Einrichtung und ohne zusätzliches GPS-Gerät.",
    subline: "Kostenlos starten · Tarife für mehrere Fahrzeuge",
    imageAlt: "CarCare Diary Fuhrparkmanagement-App mit Wartungseinträgen und Fahrzeugübersicht.",
  },
  features: {
    eyebrow: "Funktionen",
    heading: "Was die Fuhrpark-App leistet",
    intro:
      "Serviceeinträge, Kilometerstände und Erinnerungen für jedes Fahrzeug – auf dem Smartphone im Blick.",
    items: [
      {
        title: "Profile für mehrere Fahrzeuge",
        description:
          "Erfassen Sie für jedes Fahrzeug Marke, Modell, Baujahr und Kennzeichen. Jedes Fahrzeug erhält ein eigenes Wartungsprotokoll und eigene Erinnerungen.",
      },
      {
        title: "Serviceeinträge je Fahrzeug",
        description:
          "Dokumentieren Sie Ölwechsel, Bremsen, Filter, Reifen und weitere Arbeiten mit Datum, Kilometerstand, Teilen und Notizen.",
      },
      {
        title: "Kilometerstand verwalten",
        description:
          "Aktualisieren Sie die Tachostände, damit Serviceintervalle richtig berechnet werden. Die Laufleistung ist mit den Wartungseinträgen verknüpft.",
      },
      {
        title: "Wartungserinnerungen",
        description:
          "Sehen Sie, wann Arbeiten anstehen. Die Berechnung orientiert sich an dokumentierten Wartungen, aktuellem Kilometerstand und festgelegten Intervallen.",
      },
      {
        title: "Vollständige Servicehistorie",
        description:
          "Für jedes Fahrzeug entsteht eine nach Kategorien geordnete Übersicht aller erfassten Wartungen.",
      },
      {
        title: "Teilbare Fahrzeugunterlagen",
        description:
          "Erstellen Sie einen öffentlichen Link zur freigegebenen Servicehistorie, etwa für eine Werkstatt, Versicherung oder den Wiederverkauf.",
      },
    ],
    secondaryImageAlt:
      "Fuhrpark-Fahrzeugliste in CarCare Diary mit Kilometerständen und Wartungsstatus.",
  },
  compare: {
    eyebrow: "Warum nicht verstreut?",
    heading: "Verstreute Unterlagen werden mit jedem Fahrzeug unübersichtlicher",
    intro:
      "Auf Papier oder in Tabellen gehen Informationen schnell verloren, wenn mehrere Fahrzeuge im Spiel sind. Eine App bündelt alles an einem Ort.",
    withoutLabel: "Ohne CarCare Diary",
    withLabel: "Mit CarCare Diary",
    without: [
      "Kein Überblick, welche Arbeit wann durchgeführt wurde",
      "Wartungstermine werden übersehen",
      "Getrennte Notizbücher, Belege und Tabellen",
      "Keine Erinnerung bis zum Defekt",
      "Beim Verkauf fehlen Informationen",
      "Unklar, welches Fahrzeug überfällig ist",
    ],
    with: [
      "Wartungshistorie jedes Fahrzeugs in einer App",
      "Übersicht über anstehende Arbeiten im Fuhrpark",
      "Ein geordnetes Serviceprotokoll je Fahrzeug",
      "Erinnerungen anhand dokumentierter Wartungen und Tachostände",
      "Teilbarer Link zur Servicehistorie",
      "Überblick über den Wartungsstatus mehrerer Fahrzeuge",
    ],
  },
  who: {
    eyebrow: "Für wen geeignet?",
    heading: "Für kleine Fuhrparks statt komplexe Großflotten",
    intro:
      "CarCare Diary eignet sich, wenn Sie mehrere Fahrzeuge wartungsübersichtlich dokumentieren möchten.",
    personas: [
      {
        title: "Lokale Unternehmen",
        description:
          "Handwerksbetriebe, Lieferteams und kleinere Firmen mit wenigen Fahrzeugen können Serviceeinträge ihrer Transporter und Pkw direkt am Smartphone verwalten.",
      },
      {
        title: "Autohändler und Wiederverkäufer",
        description:
          "Führen Sie Wartungsunterlagen für Ihre Fahrzeuge und teilen Sie dokumentierte Historien mit Kaufinteressenten.",
      },
      {
        title: "Haushalte mit mehreren Autos",
        description:
          "Behalten Sie die Wartungen aller Familienfahrzeuge unter einem Konto im Blick.",
      },
      {
        title: "Objekt- und Fuhrparkverantwortliche",
        description:
          "Verwalten Sie Serviceeinträge und Kilometerstände gemeinsam genutzter Fahrzeuge, damit fällige Arbeiten nicht untergehen.",
      },
    ],
  },
  lightweight: {
    eyebrow: "Schlanke Alternative",
    heading: "Umfangreiche Fuhrparksysteme sind oft zu viel",
    body1:
      "Große Fuhrparkplattformen sind für Logistikbetriebe mit vielen Fahrzeugen, eigenen Fuhrparkleitern und spezieller Hardware entwickelt. Wer nur Wartungen für wenige Fahrzeuge dokumentieren möchte, braucht diese Komplexität oft nicht.",
    body2:
      "CarCare Diary konzentriert sich auf Serviceeinträge und Fahrzeughistorien. Keine GPS-Hardware, keine aufwendige Einführung - stattdessen Übersicht darüber, welche Arbeiten wann und bei welchem Kilometerstand erfasst wurden.",
    enterpriseLabel: "Umfangreiche Fuhrparksysteme bieten unter anderem",
    ccdLabel: "CarCare Diary konzentriert sich auf",
    enterprise: [
      "GPS-Ortung in Echtzeit",
      "Überwachung des Fahrverhaltens",
      "Routen- und Einsatzplanung",
      "Komplexe Compliance- und Prüflisten",
      "Tankkarten-Integrationen",
      "Telematik-Hardware und elektronische Fahrtenbücher",
      "Lizenzmodelle und umfangreiche Admin-Portale",
    ],
    ccd: [
      "Serviceeinträge und Historie pro Fahrzeug",
      "Kilometerstand und intervallbasierte Erinnerungen",
      "Mehrere Fahrzeugprofile in einer mobilen App",
      "Teilbare Servicehistorien",
      "Einfaches Einrichten und direkte Wartungseinträge",
      "Keine erforderliche Zusatzhardware",
      "Kostenloser Einstieg und verständliche Mehrfahrzeugtarife",
    ],
    relatedPrefix: "Verwandte Seiten:",
    links: [
      { to: "/de/fuhrpark-wartung-app", label: "Fuhrpark-Wartungs-App" },
      { to: "/de/autowartung-app", label: "Autowartung-App" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Häufige Fragen zum Fuhrparkmanagement",
    intro:
      "So organisieren kleine Fuhrparks Wartungsunterlagen mit CarCare Diary.",
  },
  cta: {
    eyebrow: "App herunterladen",
    heading: "Die Wartung Ihres Fuhrparks jetzt übersichtlich verwalten",
    body:
      "Starten Sie kostenlos auf iPhone oder Android. Fahrzeuge hinzufügen, Wartungen erfassen, Kilometerstände aktualisieren und Servicehistorien an einem Ort verwalten.",
    links: [
      { to: "/de/fuhrpark-wartung-app", label: "Fuhrpark-Wartung" },
      { to: "/de/autowartung-app", label: "Autowartung-App" },
      { to: "/de/wartungsprotokoll-auto", label: "Wartungsprotokoll" },
    ],
  },
};