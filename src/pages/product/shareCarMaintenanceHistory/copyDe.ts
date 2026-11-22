import type { ShareCarMaintenanceHistoryCopy } from "./types";

export const shareCarMaintenanceHistoryCopyDe: ShareCarMaintenanceHistoryCopy = {
  pageFaqs: [
    {
      question: "Wie teile ich die Wartungshistorie meines Autos?",
      answer:
        "Öffne in CarCare Diary dein Fahrzeugprofil und die Teilen-Funktion. Du kannst einen öffentlichen, schreibgeschützten Link zur freigegebenen Fahrzeughistorie erstellen und verschicken. Empfänger öffnen ihn im Browser ohne App.",
    },
    {
      question: "Was ist in der geteilten Historie zu sehen?",
      answer:
        "Sie kann Fahrzeugdaten wie Marke, Modell und Baujahr sowie die freigegebenen Wartungseinträge mit Datum, Kilometerstand, technischen Angaben und Notizen anzeigen. Prüfe vor dem Teilen, welche Informationen sichtbar sind.",
    },
    {
      question: "Kann jeder meine Wartungshistorie ansehen?",
      answer:
        "Jeder, der den öffentlichen Link besitzt, kann die freigegebenen Daten lesen, aber nicht bearbeiten. Verwalte die Freigabe in den Fahrzeugeinstellungen und teile den Link nur mit Personen, für die die Informationen bestimmt sind.",
    },
    {
      question: "Hilft die Historie beim Autoverkauf?",
      answer:
        "Ein Wartungsprotokoll kann Kaufinteressenten zeigen, welche Arbeiten erfasst wurden. Ein einziger Link erspart dir das Zusammenstellen der Angaben vor jeder Anfrage.",
    },
    {
      question: "Kann ich den Link an meine Werkstatt schicken?",
      answer:
        "Ja. Die Werkstatt kann damit vor dem Termin die freigegebenen Wartungseinträge prüfen. Das kann Rückfragen zu früheren Arbeiten oder Teilen vereinfachen.",
    },
    {
      question: "Ist CarCare Diary kostenlos?",
      answer:
        "Die teilbare Servicehistorie ist für ein Fahrzeug im kostenlosen Tarif enthalten. Kostenpflichtige Tarife ermöglichen die Verwaltung mehrerer Fahrzeuge.",
    },
  ],
  seo: {
    title: "Wartungshistorie fürs Auto per Link teilen | CarCare Diary",
    description:
      "Teile die dokumentierte Wartungshistorie deines Autos mit Käufern, Familie oder Werkstätten - über einen öffentlichen, schreibgeschützten Link.",
    path: "/de/wartungshistorie-teilen",
    jsonLdSoftwareDescription:
      "Erfasste Fahrzeugwartungen über einen öffentlichen, schreibgeschützten Link teilen. Erstellt aus dem Serviceprotokoll in CarCare Diary.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Wartungshistorie des Autos teilen",
    titleAccent: "mit einem einzigen Link",
    body:
      "Mit CarCare Diary kannst du einen öffentlichen Link zur erfassten Servicehistorie deines Fahrzeugs erstellen. Schicke ihn einem Kaufinteressenten, einer Werkstatt oder einem Familienmitglied. Die Angaben lassen sich im Browser ansehen - ohne App-Installation.",
    subline: "Kostenlos für iPhone und Android",
    imageAlt: "Geteilte Fahrzeughistorie von CarCare Diary mit Wartungseinträgen im Browser.",
  },
  whyItHelps: {
    eyebrow: "Warum das hilfreich ist",
    heading: "Wie eine teilbare Servicehistorie beim Autoverkauf hilft",
    intro: "",
    cards: [
      {
        title: "Schon vor der Besichtigung Vertrauen schaffen",
        body: "Füge den Link deiner Anzeige hinzu oder sende ihn bei der ersten Anfrage. Interessenten können vorab prüfen, welche Wartungen erfasst wurden.",
      },
      {
        title: "Nicht nur mündliche Angaben",
        body: "Ein Protokoll mit Datum und Kilometerstand ist nachvollziehbarer als eine Erinnerung. Es zeigt, welche Arbeiten du in der App dokumentiert hast.",
      },
      {
        title: "Nichts zusammenstellen oder ausdrucken",
        body: "Die Historie wächst mit deinen Einträgen. Link erstellen, kopieren und senden - ohne Belege fotografieren oder Unterlagen zusammensuchen zu müssen.",
      },
    ],
  },
  whatItShows: {
    eyebrow: "Was enthalten ist",
    heading: "Diese Informationen zeigt die geteilte Fahrzeughistorie",
    intro: "",
    items: [
      { label: "Fahrzeugprofil", detail: "Marke, Modell, Baujahr und freigegebene Zusatzinformationen zum Fahrzeug." },
      {
        label: "Wartungseinträge",
        detail:
          "Die freigegebenen Servicearbeiten wie Ölwechsel, Bremsen, Filter, Reifen, Flüssigkeiten und individuelle Einträge.",
      },
      {
        label: "Kilometerstand je Wartung",
        detail: "Der zu einem Eintrag erfasste Tachostand zeigt, bei welcher Laufleistung die Arbeit dokumentiert wurde.",
      },
      {
        label: "Technische Angaben und Notizen",
        detail:
          "Erfasste Ölviskosität, Teilenummern, Werkstatthinweise und weitere Notizen, soweit sie in der freigegebenen Ansicht enthalten sind.",
      },
      {
        label: "Wartungskategorien",
        detail: "Nach Serviceart geordnete Einträge machen erkennbar, welche Bereiche zuletzt gewartet wurden.",
      },
      {
        label: "Ein teilbarer Link",
        detail: "Die Seite ist über eine öffentliche URL im Browser erreichbar. Zum Lesen ist keine App erforderlich.",
      },
    ],
    screenshotAlt: "Nach Wartungskategorien sortierte Servicehistorie in CarCare Diary.",
  },
  readOnly: {
    heading: "Nur lesen - du behältst die Kontrolle",
    intro: "",
    points: [
      "Empfänger können die Historie ansehen, aber nicht bearbeiten",
      "Zum Öffnen ist kein Konto erforderlich",
      "Du bestimmst, welche Einträge du in der App erfasst",
      "Die Freigabe lässt sich in den Fahrzeugeinstellungen verwalten",
      "Der Link zeigt den aktuell freigegebenen Datenstand",
      "Die Seite funktioniert auf Smartphone und Computer",
    ],
  },
  whoItsFor: {
    eyebrow: "Für wen geeignet?",
    heading: "An wen kannst du den Link senden?",
    personas: [
      {
        who: "Private Autoverkäufer",
        body: "Teile die erfasste Wartungshistorie schon bei der ersten Anfrage. Interessenten können sich vor der Besichtigung einen Überblick verschaffen.",
      },
      {
        who: "Werkstätten",
        body: "Sende den Link vor einem Termin. Die Werkstatt kann nachsehen, welche Arbeiten dokumentiert wurden und welche Teile oder Notizen hinterlegt sind.",
      },
      {
        who: "Familien mit gemeinsam genutzten Autos",
        body: "Informiere andere Personen über Wartungseinträge, ohne ihnen dafür Zugriff auf dein App-Konto geben zu müssen.",
      },
    ],
    relatedPrefix: "Mehr dazu:",
    relatedLinks: [
      { to: "/de/digitales-serviceheft-app", label: "Digitales Serviceheft" },
      { to: "/blog", label: "Autowartungsratgeber" },
    ],
  },
  faqHeading: "Häufige Fragen",
  cta: {
    heading: "Eine Servicehistorie erstellen, die du teilen kannst",
    body:
      "CarCare Diary ist kostenlos für iPhone und Android. Erfasse deine Wartungen ab heute - so hast du eine dokumentierte Historie bereit, wenn du sie brauchst.",
  },
};