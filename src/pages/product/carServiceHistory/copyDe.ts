import type { CarServiceHistoryCopy } from "./types";

export const carServiceHistoryCopyDe: CarServiceHistoryCopy = {
  pageFaqs: [
    {
      question: "Was ist die Wartungshistorie eines Autos?",
      answer:
        "Sie dokumentiert Wartungs- und Reparaturarbeiten an einem Fahrzeug: Art der Arbeit, Datum, Kilometerstand, verwendete Teile oder Flüssigkeiten und ergänzende Hinweise. Sie zeigt, welche Arbeiten im Laufe der Zeit erfasst wurden.",
    },
    {
      question: "Was gehört in einen Serviceeintrag?",
      answer:
        "Mindestens Wartungsart, Datum und Kilometerstand. Sinnvoll sind außerdem verwendete Teile, Öl- oder Flüssigkeitsspezifikationen und Notizen. Typische Einträge sind Ölwechsel, Bremsen, Filter, Reifen, Batterie und Inspektionen.",
    },
    {
      question: "Kann ich eine digitale Wartungshistorie führen?",
      answer:
        "Ja. Mit CarCare Diary erfasst du Servicearbeiten samt Datum, Kilometerstand, Details und Notizen direkt auf dem Smartphone. Die Einträge sind nach Kategorien sortiert und jederzeit abrufbar.",
    },
    {
      question: "Kann ich die Servicehistorie meines Autos teilen?",
      answer:
        "Ja. Du kannst einen öffentlichen Link zu den freigegebenen Wartungseinträgen erstellen. Das ist beim Verkauf oder für einen Werkstatttermin praktisch.",
    },
    {
      question: "Hilft eine Wartungshistorie beim Autoverkauf?",
      answer:
        "Eine nachvollziehbare Dokumentation kann Fragen reduzieren und Vertrauen schaffen. Mit CarCare Diary lässt sich die erfasste Historie über einen Link zur Ansicht teilen.",
    },
    {
      question: "Ist CarCare Diary kostenlos?",
      answer:
        "Ja. Für ein Fahrzeug kannst du Wartungen und Kilometerstände kostenlos erfassen und die Servicehistorie teilen. Base umfasst bis zu drei Fahrzeuge, Pro weitere Fahrzeuge gemäß Tarifgrenzen (bis zu 1.000 Fahrzeuge).",
    },
  ],
  seo: {
    title: "Wartungshistorie fürs Auto digital verwalten | CarCare Diary",
    description:
      "Die Wartungshistorie deines Autos an einem Ort: Serviceeinträge, Kilometerstände und Details dokumentieren und bei Bedarf per Link teilen.",
    path: "/de/wartungshistorie-auto",
    jsonLdSoftwareDescription:
      "Autowartungen mit Datum, Kilometerstand und Notizen dokumentieren, übersichtlich verwalten und die erfasste Servicehistorie teilen.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Wartungshistorie fürs Auto",
    titleAccent: "Alle Serviceeinträge übersichtlich dokumentieren und teilen",
    body:
      "Die Wartungshistorie hält fest, welche Arbeiten an deinem Auto durchgeführt wurden - etwa Ölwechsel, Bremsenservice, Reifenwechsel und Inspektionen. CarCare Diary speichert die Einträge mit Datum, Kilometerstand und Notizen auf deinem Smartphone, damit du sie jederzeit nachschlagen und bei Bedarf teilen kannst.",
    subline: "Kostenlos für iPhone und Android",
  },
  whyItMatters: {
    eyebrow: "Warum das wichtig ist",
    heading: "Warum eine vollständige Wartungshistorie sinnvoll ist",
    intro:
      "Viele Autobesitzer möchten Unterlagen aufbewahren. Ohne ein festes System wird die Dokumentation aber schnell lückenhaft.",
    problems: [
      {
        title: "Verlorene Belege und fehlende Einträge",
        description:
          "Rechnungen verblassen oder gehen im Handschuhfach verloren. Ohne Übersicht weißt du irgendwann nicht mehr, welche Arbeiten wann gemacht wurden.",
      },
      {
        title: "Kein klarer Wartungsverlauf",
        description:
          "Wurden die Bremsen vor einem oder zwei Jahren erneuert? Wann kam der Innenraumfilter dran? Ohne Aufzeichnungen bleibt oft nur Raten.",
      },
      {
        title: "Versäumte Wartungen",
        description:
          "Fehlt die Historie als Orientierung, können Serviceintervalle unbemerkt verstreichen - bis eine Warnleuchte oder ein Defekt darauf aufmerksam macht.",
      },
      {
        title: "Schwieriger beim Wiederverkauf",
        description:
          "Interessenten fragen nach Wartungen. Ohne Dokumentation musst du dich auf dein Gedächtnis verlassen, was Unsicherheit erzeugen kann.",
      },
    ],
  },
  whatBelongs: {
    eyebrow: "Was dokumentieren?",
    heading: "Welche Angaben in die Wartungshistorie gehören",
    intro:
      "Eine vollständige Aufzeichnung umfasst mehr als nur Ölwechsel. Hier sind gängige Wartungsarten, die sich zu dokumentieren lohnen.",
    serviceTypes: [
      { name: "Ölwechsel", details: "Datum, Kilometerstand, Ölviskosität, Teilenummer des Filters" },
      { name: "Bremsenservice", details: "Beläge, Bremsscheiben, Bremssättel, Datum, Kilometerstand" },
      { name: "Luft- und Innenraumfilter", details: "Filtertyp, Wechseltermin und Kilometerstand" },
      { name: "Flüssigkeitswechsel", details: "Kühlmittel, Bremsflüssigkeit, Getriebeöl, Servolenkungsöl" },
      { name: "Zündkerzen", details: "Kerzentyp, Elektrodenabstand, Datum, Kilometerstand" },
      { name: "Reifenwechsel und Reifenrotation", details: "Reifenmarke, Größe, Luftdruck und Wechseltermin" },
      { name: "Batterie", details: "Batteriespezifikation, Datum, Kilometerstand, Garantiehinweise" },
      { name: "Inspektionen", details: "Regelmäßige Prüfung, Ergebnisse, festgestellte Mängel" },
      { name: "Zahnriemen / Steuerkette", details: "Datum, Kilometerstand, Spanner und Umlenkrollen" },
      { name: "Fahrwerk und Lenkung", details: "Stoßdämpfer, Federn, Koppelstangen, Achsvermessung" },
      { name: "Getriebeservice", details: "Öltyp, Datum, Kilometerstand, Filter" },
      { name: "Weitere Reparaturen", details: "Andere durchgeführte Arbeiten mit Notizen und Belegangaben" },
    ],
    detailLinePrefix: "Halte bei jedem Eintrag mindestens",
    detailLineHighlight1: "Datum",
    detailLineHighlight2: "Kilometerstand",
    detailLineHighlight3: "die durchgeführten Arbeiten",
    detailLineHighlight4: "Teileangaben und Notizen",
    detailLineSuffix:
      "fest. Je genauer du dokumentierst, desto hilfreicher ist die Historie später.",
    guidePrefix: "Ausführliche Hinweise zu einzelnen Einträgen:",
    guideLinkLabel: "Welche Angaben gehören in die Servicehistorie?",
    guidePath: "/blog/what-to-include-in-a-car-service-history",
  },
  howItHelps: {
    eyebrow: "So funktioniert's",
    heading: "So organisiert CarCare Diary deine Serviceunterlagen",
    intro:
      "CarCare Diary ersetzt verstreute Notizen und Belege durch eine strukturierte, stets aktuelle Wartungshistorie.",
    outcomes: [
      {
        title: "Ein Zeitverlauf für alle Wartungen",
        description:
          "Alle erfassten Arbeiten erscheinen in einer geordneten Fahrzeughistorie - statt verteilt auf Apps, Notizbücher und Belege.",
      },
      {
        title: "Datum und Kilometerstand pro Eintrag",
        description:
          "Du siehst, wann eine Arbeit durchgeführt wurde und welchen Kilometerstand das Auto damals hatte.",
      },
      {
        title: "Technische Angaben und Notizen",
        description:
          "Speichere Ölviskosität, Teilenummern, Werkstatthinweise und weitere wichtige Details für später.",
      },
      {
        title: "Nach Kategorien sortiert",
        description:
          "Motor, Bremsen, Flüssigkeiten, Elektrik und weitere Kategorien helfen dir, den richtigen Eintrag schnell zu finden.",
      },
      {
        title: "Gesamte Historie über einen Link teilen",
        description:
          "Erstelle einen öffentlichen Link zu den freigegebenen Wartungseinträgen deines Autos. Empfänger benötigen dafür kein Konto.",
      },
    ],
    trackerPrefix: "Auch Erinnerungen und Kilometerstand verfolgen?",
    trackerLinkLabel: "Zur Autowartung-App",
    trackerPath: "/de/autowartung-app",
  },
  resale: {
    eyebrow: "Verkauf und Transparenz",
    heading: "Die Servicehistorie deines Autos teilen",
    body1:
      "Beim Verkauf kann eine dokumentierte Wartungshistorie Interessenten zeigen, welche Arbeiten erfasst wurden und den Zustand des Fahrzeugs nachvollziehbarer machen.",
    body2:
      "CarCare Diary erstellt einen öffentlichen Link zu den freigegebenen Wartungseinträgen. Käufer können die Historie im Browser ansehen - ohne App oder Konto.",
    bullets: [
      "Zeigt dokumentierte Wartungen mit Datum, Kilometerstand und Details",
      "Im Browser ohne Anmeldung zugänglich",
      "Per Nachricht, Anzeige oder E-Mail teilbar",
      "Kann den Zustand und die Pflege des Fahrzeugs nachvollziehbarer machen",
    ],
  },
  images: {
    categoriesAlt:
      "Serviceprotokoll von CarCare Diary mit Wartungskategorien und chronologischen Einträgen",
    sharedAlt: "Teilbare Fahrzeughistorie von CarCare Diary im mobilen Browser",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Häufige Fragen zur Wartungshistorie",
    intro: "Fragen zum Führen, Organisieren und Teilen von Serviceunterlagen.",
  },
  cta: {
    eyebrow: "App herunterladen",
    heading: "Jetzt die Wartungshistorie deines Autos aufbauen",
    body:
      "CarCare Diary ist eine kostenlose App für iPhone und Android. Dokumentiere jede Wartung, halte deine Einträge übersichtlich und teile die Fahrzeughistorie, wenn du sie brauchst.",
    link1Label: "Autowartung-App",
    link1Path: "/de/autowartung-app",
    link2Label: "Wartungsprotokoll",
    link2Path: "/de/wartungsprotokoll-auto",
    link3Label: "Wartungsunterlagen organisieren",
    link3Path: "/blog/how-to-keep-car-service-records-organized",
  },
};