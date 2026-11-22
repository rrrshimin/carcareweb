import type { SmbFleetPageCopy } from "../shared/smbFleetPageTypes";

export const carRentalFleetMaintenanceAppCopyDe: SmbFleetPageCopy = {
  pageFaqs: [
    {
      question: "Kann ich CarCare Diary für eine kleine Mietwagenflotte nutzen?",
      answer:
        "Ja. Jedes Fahrzeug hat ein eigenes Profil, Serviceprotokoll, Kilometerstände und Erinnerungen. Die Zahl der möglichen Fahrzeuge hängt vom Tarif ab. Die erfasste Historie lässt sich bei Bedarf per Link teilen.",
    },
    {
      question: "Verwaltet CarCare Diary auch Mietbuchungen oder Mietverträge?",
      answer:
        "Nein. CarCare Diary konzentriert sich auf Wartung, Kilometerstand und Erinnerungen. Buchungen, Mietverträge und Zahlungen benötigen eine separate Lösung.",
    },
    {
      question: "Kann ich Wartungen nach Kilometerstand verfolgen?",
      answer:
        "Ja. Die App verwendet den von Ihnen eingetragenen Tachostand für kilometerabhängige Intervalle. Auch zeitbasierte Erinnerungen sind möglich. Bei jedem Serviceeintrag wird der damalige Kilometerstand festgehalten.",
    },
    {
      question: "Kann ich die Servicehistorie jedes Mietwagens getrennt führen?",
      answer:
        "Ja. Jedes Fahrzeug hat eine eigene Historie und einen eigenen Erinnerungsplan. Die Einträge verschiedener Fahrzeuge werden nicht vermischt.",
    },
    {
      question: "Kann ich Wartungsunterlagen eines Mietwagens teilen?",
      answer:
        "Ja. Ein öffentlicher Link ermöglicht anderen, die freigegebenen Serviceeinträge im Browser anzusehen. Das kann für Versicherungen, Partner oder beim Fahrzeugverkauf hilfreich sein.",
    },
    {
      question: "Wie viele Fahrzeuge kann ich verwalten?",
      answer:
        "Ein Fahrzeug ist kostenlos. Base unterstützt bis zu drei Fahrzeuge, Pro weitere Fahrzeuge gemäß den aktuellen Tarifgrenzen (bis zu 1.000 Fahrzeuge). Für die Wartungsdokumentation ist keine zusätzliche Hardware notwendig.",
    }
  ],
  seo: {
    title: "Mietwagen-Wartung digital verwalten | CarCare Diary",
    description:
      "Wartungen, Kilometerstände und Serviceerinnerungen für Mietwagen dokumentieren. CarCare Diary hilft kleinen Autovermietungen, jedes Fahrzeug im Blick zu behalten.",
    path: "/de/mietwagen-wartung",
    jsonLdSoftwareDescription:
      "Mobile App für die Wartungsdokumentation kleiner Mietwagenflotten mit Serviceprotokollen, Kilometerständen, Erinnerungen und teilbarer Historie.",
  },
  hero: {
    eyebrow: "CarCare Diary",
    titleLine: "Wartungs-App für Mietwagenflotten",
    titleAccent: "Serviceeinträge und Erinnerungen im Blick",
    body:
      "Mit CarCare Diary verwalten Sie Wartungen, Kilometerstände und Serviceerinnerungen für jedes Fahrzeug Ihrer Mietwagenflotte. Die mobile App für iPhone und Android hält Fahrzeughistorien übersichtlich - ohne aufwendige Tabellen oder komplexe Einrichtung.",
    subline: "Kostenlos starten · Tarife für mehrere Fahrzeuge",
    imageAlt: "CarCare Diary Wartungs-App für Mietwagenflotten mit Serviceeinträgen pro Fahrzeug.",
  },
  problem: {
    heading: "Viele Fahrer, viele Termine - die Wartungshistorie wird schnell unübersichtlich",
    body:
      "Wenn ein Auto von verschiedenen Personen genutzt wird, gehen Belege leicht verloren und Wartungen werden vergessen. Bald weiß niemand mehr, wann der letzte Service war. CarCare Diary führt für jeden Mietwagen ein eigenes Wartungsprotokoll, das bei Bedarf auf dem Smartphone verfügbar ist.",
  },
  features: {
    heading: "Wartungen für jeden Mietwagen dokumentieren",
    intro:
      "Keine Buchungen, keine Disposition, kein GPS - nur Serviceeinträge und Erinnerungen für Ihre Fahrzeuge.",
    items: [
      {
        title: "Wartungen je Fahrzeug verfolgen",
        description:
          "Jeder Mietwagen erhält ein eigenes Profil und Serviceprotokoll. Ölwechsel, Bremsen, Reifen und Filter werden getrennt je Fahrzeug erfasst.",
      },
      {
        title: "Kilometerstände und Servicetermine festhalten",
        description:
          "Dokumentieren Sie den Tachostand bei jeder Wartung. So ist nachvollziehbar, vor wie vielen Kilometern eine Arbeit ausgeführt wurde.",
      },
      {
        title: "Anstehende Wartungen erkennen",
        description:
          "Die App berechnet Erinnerungen aus den erfassten Servicearbeiten und dem aktuellen Kilometerstand. So sehen Sie frühzeitig, welches Fahrzeug einen Service benötigt.",
      },
      {
        title: "Notizen, Teile und Flüssigkeiten speichern",
        description:
          "Halten Sie Werkstatt, ausgetauschte Teile, verwendete Flüssigkeiten und ergänzende Hinweise zu jedem Eintrag fest.",
      },
      {
        title: "Servicehistorie pro Mietwagen",
        description:
          "Alle dokumentierten Arbeiten bilden eine geordnete Historie pro Fahrzeug - ohne Suche in einzelnen Dateien.",
      },
      {
        title: "Fahrzeughistorie bei Bedarf teilen",
        description:
          "Erstellen Sie einen öffentlichen Link zu den freigegebenen Wartungseinträgen, etwa für Versicherungen, Käufer, Partner oder Mitarbeiter.",
      },
    ],
  },
  useCases: {
    heading: "Für wen sich die App bei Mietfahrzeugen eignet",
    items: [
      {
        title: "Kleine Autovermietungen",
        detail:
          "Ölwechsel, Reifenservice und planmäßige Wartungen für mehrere Mietwagen dokumentieren - ohne Tabellenkalkulation.",
      },
      {
        title: "Private Vermieter auf Plattformen",
        detail:
          "Führen Sie Wartungsunterlagen für Fahrzeuge, die Sie über Peer-to-Peer-Vermietungsplattformen anbieten.",
      },
      {
        title: "Lokale Mietwagenanbieter",
        detail:
          "Behalten Sie den Wartungsbedarf einzelner Mietwagen im Blick, bevor daraus ein größeres Problem wird.",
      },
      {
        title: "Gemeinsam genutzte Firmenfahrzeuge",
        detail:
          "Dokumentieren Sie Wartungen für Autos, die von mehreren Mitarbeitern oder Abteilungen verwendet werden.",
      },
    ],
  },
  lightweight: {
    heading: "Warum ein eigenes Wartungsprotokoll besser als Tabellen ist",
    intro:
      "Wartungsunterlagen sollten verfügbar sein, wenn ein Fahrzeug Aufmerksamkeit braucht - nicht in einer Datei liegen, die niemand gerade findet.",
    withoutLabel: "Ohne Wartungs-App",
    withLabel: "Mit CarCare Diary",
    without: [
      "Serviceunterlagen auf Rechnungen und in Ordnern verstreut",
      "Nur aus dem Gedächtnis bekannt, was wann gemacht wurde",
      "Kein schneller Überblick über überfällige Fahrzeuge",
      "Beim Verkauf oder bei Versicherungsfragen fehlen Unterlagen",
    ],
    with: [
      "Jeder Service mit Datum und Kilometerstand je Fahrzeug dokumentiert",
      "Anstehende und überfällige Wartungen im Blick",
      "Teilbare Fahrzeughistorie für jedes Fahrzeug",
      "Serviceeinträge immer auf dem Smartphone verfügbar",
    ],
    calloutPrefix: "Weitere Funktionen:",
    calloutLinks: [
      { to: "/de/fuhrparkmanagement-app", label: "Fuhrparkmanagement" },
      { to: "/de/fuhrpark-wartung-app", label: "Fuhrpark-Wartungs-App" },
    ],
  },
  faqHeading: "Häufige Fragen",
  cta: {
    heading: "Jetzt die Wartung Ihrer Mietwagen verwalten",
    body:
      "Kostenlos starten. Führen Sie übersichtliche Serviceprotokolle für jedes Mietfahrzeug - direkt auf dem Smartphone.",
    alsoSeePrefix: "Siehe auch:",
    links: [
      { to: "/de/fuhrparkverwaltung-kleine-unternehmen", label: "Fuhrpark für kleine Unternehmen" },
      { to: "/de/autowartung-app", label: "Autowartung-App" },
    ],
  },
};