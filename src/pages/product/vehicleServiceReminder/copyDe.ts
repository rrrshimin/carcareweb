import type { VehicleServiceReminderCopy } from "./types";

export const vehicleServiceReminderCopyDe: VehicleServiceReminderCopy = {
  pageFaqs: [
    {
      question: "Was ist eine Wartungserinnerungs-App?",
      answer:
        "Sie hilft dir zu erkennen, wann geplante Wartungen nach Datum, Kilometerstand oder beidem anstehen. CarCare Diary berechnet die Fälligkeit anhand deiner echten Einträge und des manuell aktualisierten Tachostands.",
    },
    {
      question: "Was ist der Unterschied zwischen zeit- und kilometerabhängigen Erinnerungen?",
      answer:
        "Bei zeitabhängigen Erinnerungen zählt ein Zeitraum, etwa zwölf Monate seit der letzten Wartung. Kilometerabhängige Erinnerungen orientieren sich an einer zurückgelegten Strecke, etwa 10.000 km seit dem letzten Ölwechsel. In CarCare Diary kannst du beide Intervalle nutzen.",
    },
    {
      question: "Wie funktionieren Erinnerungen nach Kilometerstand?",
      answer:
        "Beim Eintragen einer Wartung speichert die App den Kilometerstand. Du legst das nächste Intervall fest. Nach einer Aktualisierung des Tachostands berechnet CarCare Diary die verbleibende Strecke und zeigt nahende Wartungen an.",
    },
    {
      question: "Sehe ich alle bald fälligen und überfälligen Wartungen auf einen Blick?",
      answer:
        "Ja. Für jedes Fahrzeug zeigt CarCare Diary, welche Wartungen noch aktuell, bald fällig oder bereits überfällig sind. Du musst nicht alle Servicekategorien einzeln öffnen.",
    },
    {
      question: "Muss ich den Kilometerstand selbst aktualisieren?",
      answer:
        "Ja. CarCare Diary verbindet sich nicht elektronisch mit deinem Auto. Du trägst den aktuellen Tachostand selbst ein, damit die Kilometerintervalle richtig berechnet werden.",
    },
    {
      question: "Ist CarCare Diary kostenlos?",
      answer:
        "Ja, für ein Fahrzeug sind Wartungserinnerungen, Serviceprotokoll, Kilometerstand und teilbare Historie enthalten. Base unterstützt bis zu drei Fahrzeuge, Pro weitere Fahrzeuge gemäß den geltenden Tarifgrenzen (bis zu 1.000 Fahrzeuge).",
    },
  ],
  seo: {
    title: "Wartungserinnerung fürs Auto nach Zeit & Kilometern | CarCare Diary",
    description:
      "Wartungserinnerungen nach Kilometerstand und Datum. Sieh mit CarCare Diary, welche Inspektionen und Servicearbeiten bald fällig oder überfällig sind.",
    path: "/de/wartungserinnerung-auto",
    jsonLdSoftwareDescription:
      "App für kilometer- und zeitbasierte Wartungserinnerungen anhand des erfassten Serviceprotokolls und des aktuellen Tachostands.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Wartungserinnerung fürs Auto",
    titleAccent: "nach Kilometerstand und Zeit",
    body:
      "CarCare Diary berechnet anhand deiner erfassten Wartungen und des aktuellen Kilometerstands, wann der nächste Service ansteht. Erhalte Erinnerungen für zeit- und kilometerabhängige Wartungsintervalle, statt dich nur auf einen allgemeinen Kalender zu verlassen.",
    subline: "Kostenlos für iPhone und Android",
    imageAlt: "CarCare Diary Wartungskategorien mit Servicefälligkeit und Erinnerungen.",
  },
  problem: {
    eyebrow: "Das Problem",
    heading: "Wartungstermine gehen im Alltag leicht unter",
    intro:
      "Die meisten Autofahrer verschieben Wartungen nicht absichtlich. Ohne ein System werden Serviceintervalle aber schnell überzogen oder nur anhand grober Erinnerungen eingeschätzt.",
    cards: [
      {
        title: "Überhaupt keine Erinnerung",
        body: "Viele verlassen sich auf den Aufkleber aus der Werkstatt oder das eigene Gedächtnis. Beides gerät im Alltag leicht in Vergessenheit.",
      },
      {
        title: "Allgemeine Kalendererinnerungen",
        body: "Erinnerungen nach Datum berücksichtigen die Fahrleistung nicht. Ein Auto mit 30.000 km pro Jahr benötigt bestimmte Wartungen häufiger als eines mit 5.000 km.",
      },
      {
        title: "Veraltete Daten",
        body: "Wenn eine App nicht weiß, wann eine Arbeit tatsächlich durchgeführt wurde, kann sie nach vorgezogenen oder verspäteten Wartungen die Intervalle nicht korrekt neu berechnen.",
      },
    ],
  },
  reminderTypes: {
    eyebrow: "So funktionieren Erinnerungen",
    heading: "Kilometer- und zeitabhängige Erinnerungen",
    intro:
      "Unterschiedliche Wartungen folgen unterschiedlichen Intervallen. CarCare Diary unterstützt beide Arten und kann sie kombinieren.",
    items: [
      {
        title: "Kilometerabhängige Erinnerungen",
        body: "Lege ein Intervall in Kilometern oder Meilen fest, zum Beispiel alle 10.000 km für einen Ölwechsel. CarCare Diary berechnet anhand des letzten Eintrags und des aktualisierten Tachostands, wie viele Kilometer bis zum nächsten Service bleiben.",
      },
      {
        title: "Zeitabhängige Erinnerungen",
        body: "Lege monatliche oder jährliche Intervalle fest, etwa für eine jährliche Fahrzeugprüfung, eine Kühlmittelkontrolle nach sechs Monaten oder die vierteljährliche Kontrolle des Innenraumfilters. Die Frist beginnt beim letzten erfassten Service.",
      },
      {
        title: "Bald fällig und überfällig",
        body: "Wenn sich das Intervall nähert, erscheint der Status „Bald fällig“. Ist es überschritten, wird „Überfällig“ angezeigt. Du erkennst den Zustand, ohne jede Kategorie einzeln zu öffnen.",
      },
    ],
    screenshotAlt: "CarCare Diary zeigt Wartungserinnerungen und Fälligkeitsstatus pro Fahrzeug.",
  },
  dueOverdue: {
    eyebrow: "Fälligkeiten im Überblick",
    heading: "Alle anstehenden Wartungen auf einen Blick",
    intro:
      "CarCare Diary zeigt den Wartungsstatus für jede Kategorie deines Fahrzeugs – ohne dass du jede einzeln öffnen musst.",
    statuses: [
      {
        label: "Aktuell",
        body: "Die Wartung liegt noch innerhalb des eingestellten Intervalls. Derzeit ist nichts zu tun.",
        tone: "ok",
      },
      {
        label: "Bald fällig",
        body: "Die Kilometer- oder Zeitgrenze nähert sich. Plane einen Werkstatttermin ein.",
        tone: "soon",
      },
      {
        label: "Überfällig",
        body: "Das Intervall ist überschritten. Kümmere dich möglichst bald um die entsprechende Wartung.",
        tone: "late",
      },
    ],
    callout:
      "Die Statusübersicht wird automatisch aktualisiert, wenn du einen neuen Serviceeintrag erstellst oder den Kilometerstand änderst. Du musst nichts selbst nachrechnen.",
  },
  mileage: {
    eyebrow: "Erinnerungen präzise halten",
    heading: "Kilometerstand aktualisieren, Intervalle im Blick behalten",
    body:
      "Kilometerabhängige Erinnerungen sind nur so genau wie dein erfasster Tachostand. Aktualisiere ihn regelmäßig, damit jede Fälligkeit stimmt.",
    bullets: [
      "Den Tachostand kannst du in wenigen Sekunden in der App aktualisieren",
      "Jeder Wartungseintrag hält auch den damaligen Kilometerstand fest",
      "Nach einer Aktualisierung werden die fälligen Wartungen neu berechnet",
      "Eine Verbindung zum OBD-Anschluss deines Autos ist nicht erforderlich",
    ],
    imageAlt: "Kilometerstand und Übersicht der Wartungskategorien in CarCare Diary.",
    relatedPrefix: "Siehe auch:",
    relatedLinks: [
      { to: "/de/autowartung-app", label: "Autowartung-App" },
      { to: "/de/fuhrpark-wartung-app", label: "Fuhrpark-Wartung" },
    ],
  },
  faqHeading: "Häufige Fragen zur Wartungserinnerung",
  cta: {
    heading: "Keine Wartungstermine mehr übersehen",
    body: "CarCare Diary ist kostenlos für iPhone und Android. Lege deine erste kilometerabhängige Erinnerung in weniger als einer Minute an.",
  },
};