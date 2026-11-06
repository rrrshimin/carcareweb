/**
 * Contextual copy for the two download banners shown on every /blog/* guide.
 * Keyed by the guide's URL slug (the part after /blog/). Unknown slugs fall back to GUIDE_CTA_FALLBACK.
 *
 * Copy rules: say "free to download" only, never describe plan tiers, never promise outcomes
 * (no "never overdue", no diagnosis or prevention claims). Features mentioned (service log,
 * mileage, reminders, shareable history) are the ones the help article lists as free.
 */

export type GuideCtaKind = "interval" | "replacement" | "symptom" | "records" | "checklist";

/** Real in-app screenshot already in src/assets. The vehicle page shows spending, so it is not used in banners. */
export type GuideCtaImage = "log";

export interface GuideCtaEntry {
  kind: GuideCtaKind;
  /** Primary banner headline, shown after the answer. */
  headline: string;
  /** Secondary end-of-article banner headline. */
  endHeadline: string;
  image?: GuideCtaImage;
  /** Localized primary banner body; defaults to GUIDE_CTA_SUBTITLES[kind]. */
  subtitle?: string;
  /** Localized footer banner body; defaults to GUIDE_CTA_END_SUBTITLE. */
  endSubtitle?: string;
  /** Localized screenshot alt for the primary banner image. */
  imageAlt?: string;
}

export const GUIDE_CTA_SUBTITLES: Record<GuideCtaKind, string> = {
  interval:
    "Log each service with its date and mileage, and get reminders for what is due next.",
  replacement:
    "Save the part, date, mileage and notes for every replacement, so the history is always on your phone.",
  symptom:
    "Save repairs, parts, mileage and notes in one place, so your history is ready the next time you see a mechanic.",
  records:
    "Log every service, keep your mileage current, and share your full history with a single link.",
  checklist:
    "Turn each check into a logged service with date, mileage and notes, and get reminders for what is next.",
};

export const GUIDE_CTA_END_SUBTITLE =
  "Log services, track mileage and keep your car's history on your phone.";

export const GUIDE_CTA_FALLBACK: GuideCtaEntry = {
  kind: "records",
  headline: "Keep your car's service history in one app",
  endHeadline: "Start your car's service log today",
  image: "log",
};

export const GUIDE_CTA: Record<string, GuideCtaEntry> = {
  // Records and general guides
  "car-maintenance-checklist": {
    kind: "checklist",
    headline: "Turn this checklist into a service log",
    endHeadline: "Keep your checklist and service history in one app",
    image: "log",
  },
  "how-to-track-car-maintenance": {
    kind: "records",
    headline: "Track every service in one place",
    endHeadline: "Start your maintenance log today",
    image: "log",
  },
  "what-to-include-in-a-car-service-history": {
    kind: "records",
    headline: "Build a complete service history as you go",
    endHeadline: "Keep your service history ready to share",
    image: "log",
  },
  "how-to-keep-car-service-records-organized": {
    kind: "records",
    headline: "Keep your service records organized",
    endHeadline: "Put every service record in one place",
    image: "log",
  },
  "best-car-maintenance-apps": {
    kind: "records",
    headline: "Try a maintenance-first car app",
    endHeadline: "Try CarCare Diary on your phone",
    image: "log",
  },
  "car-maintenance-schedule-by-mileage": {
    kind: "checklist",
    headline: "Keep your maintenance schedule in one app",
    endHeadline: "Log each service by date and mileage",
    image: "log",
  },
  "what-car-fluids-should-i-check": {
    kind: "checklist",
    headline: "Log your fluid checks and top-ups",
    endHeadline: "Keep your fluid service history in one place",
    image: "log",
  },
  "used-car-inspection-checklist": {
    kind: "checklist",
    headline: "Start your service log from day one",
    endHeadline: "Track your new car's maintenance from the start",
    image: "log",
  },
  "how-to-prepare-car-for-road-trip": {
    kind: "checklist",
    headline: "Log your pre-trip car checks",
    endHeadline: "Keep your car's service history on your phone",
    image: "log",
  },

  // Timing and interval guides
  "when-to-change-engine-oil": {
    kind: "interval",
    headline: "Log your next oil change",
    endHeadline: "Keep your oil change history in one place",
    image: "log",
  },
  "when-to-change-oil-filter": {
    kind: "interval",
    headline: "Log your oil and filter changes",
    endHeadline: "Keep your oil and filter history in one place",
    image: "log",
  },
  "when-to-change-coolant": {
    kind: "interval",
    headline: "Track coolant changes by date and mileage",
    endHeadline: "Keep your coolant service history in one place",
    image: "log",
  },
  "when-to-change-brake-fluid": {
    kind: "interval",
    headline: "Log brake fluid changes by date",
    endHeadline: "Keep your brake fluid history in one place",
    image: "log",
  },
  "when-to-change-transmission-fluid": {
    kind: "interval",
    headline: "Log transmission fluid services",
    endHeadline: "Keep your transmission service history in one place",
    image: "log",
  },
  "when-to-change-power-steering-fluid": {
    kind: "interval",
    headline: "Log power steering fluid services",
    endHeadline: "Keep your power steering service history in one place",
    image: "log",
  },
  "when-to-change-fuel-filter": {
    kind: "interval",
    headline: "Log your fuel filter changes",
    endHeadline: "Keep your fuel filter history in one place",
    image: "log",
  },
  "when-to-rotate-tires": {
    kind: "interval",
    headline: "Log tire rotations with mileage",
    endHeadline: "Keep your tire rotation history in one place",
    image: "log",
  },
  "when-to-check-tire-pressure": {
    kind: "interval",
    headline: "Keep a log of your tire pressure checks",
    endHeadline: "Keep your tire care history in one place",
    image: "log",
  },
  "when-to-get-wheel-alignment": {
    kind: "interval",
    headline: "Log your wheel alignment checks",
    endHeadline: "Keep your alignment history in one place",
    image: "log",
  },
  "when-to-service-car-ac": {
    kind: "interval",
    headline: "Log your car A/C service",
    endHeadline: "Keep your A/C service history in one place",
    image: "log",
  },

  // Replacement guides
  "when-to-replace-brake-pads": {
    kind: "replacement",
    headline: "Record your brake pad replacements",
    endHeadline: "Keep your brake service history in one place",
    image: "log",
  },
  "when-to-replace-brake-rotors": {
    kind: "replacement",
    headline: "Record your brake rotor replacement",
    endHeadline: "Keep your brake service history in one place",
    image: "log",
  },
  "when-to-replace-tires": {
    kind: "replacement",
    headline: "Record your tire replacements",
    endHeadline: "Keep your tire history in one place",
    image: "log",
  },
  "when-to-replace-car-battery": {
    kind: "replacement",
    headline: "Record your battery replacement date",
    endHeadline: "Keep your battery history in one place",
    image: "log",
  },
  "when-to-replace-spark-plugs": {
    kind: "replacement",
    headline: "Record your spark plug replacements",
    endHeadline: "Keep your spark plug history in one place",
    image: "log",
  },
  "when-to-replace-timing-belt": {
    kind: "replacement",
    headline: "Log your timing belt replacement",
    endHeadline: "Keep your timing belt history in one place",
    image: "log",
  },
  "when-to-replace-serpentine-belt": {
    kind: "replacement",
    headline: "Log your serpentine belt replacement",
    endHeadline: "Keep your belt service history in one place",
    image: "log",
  },
  "when-to-replace-engine-air-filter": {
    kind: "replacement",
    headline: "Log your engine air filter changes",
    endHeadline: "Keep your filter history in one place",
    image: "log",
  },
  "when-to-replace-cabin-air-filter": {
    kind: "replacement",
    headline: "Log your cabin air filter changes",
    endHeadline: "Keep your filter history in one place",
    image: "log",
  },
  "when-to-replace-windshield-wipers": {
    kind: "replacement",
    headline: "Log your wiper blade replacements",
    endHeadline: "Keep your wiper replacement history in one place",
    image: "log",
  },
  "when-to-replace-headlights": {
    kind: "replacement",
    headline: "Log your headlight bulb replacements",
    endHeadline: "Keep your headlight replacement history in one place",
    image: "log",
  },
  "when-to-replace-shocks-and-struts": {
    kind: "replacement",
    headline: "Record your shock and strut replacements",
    endHeadline: "Keep your suspension history in one place",
    image: "log",
  },

  // Symptom and diagnostic guides: tie the banner to logging repairs, never to diagnosing.
  "what-does-check-engine-light-mean": {
    kind: "symptom",
    headline: "Log the code, repair and mileage",
    endHeadline: "Keep a record of every repair",
    image: "log",
  },
  "why-is-my-car-overheating": {
    kind: "symptom",
    headline: "Keep a record of cooling system repairs",
    endHeadline: "Keep your coolant and repair history in one place",
    image: "log",
  },
  "why-is-my-car-leaking-coolant": {
    kind: "symptom",
    headline: "Keep a record of coolant leak repairs",
    endHeadline: "Keep your coolant and repair history in one place",
    image: "log",
  },
  "why-is-my-car-leaking-oil": {
    kind: "symptom",
    headline: "Keep a record of oil leak repairs",
    endHeadline: "Keep your oil and repair history in one place",
    image: "log",
  },
  "why-are-my-brakes-squeaking": {
    kind: "symptom",
    headline: "Keep a record of brake service and repairs",
    endHeadline: "Keep your brake service history in one place",
    image: "log",
  },
  "why-is-my-car-shaking": {
    kind: "symptom",
    headline: "Log repairs and symptoms in one place",
    endHeadline: "Keep a record of every repair",
    image: "log",
  },
  "why-is-my-steering-wheel-shaking": {
    kind: "symptom",
    headline: "Log steering and tire repairs",
    endHeadline: "Keep a record of every repair",
    image: "log",
  },
  "why-is-my-car-pulling-to-one-side": {
    kind: "symptom",
    headline: "Log alignment, tire and brake service",
    endHeadline: "Keep your tire and brake history in one place",
    image: "log",
  },
  "why-are-my-tires-wearing-unevenly": {
    kind: "symptom",
    headline: "Keep a record of tire and alignment service",
    endHeadline: "Keep your tire history in one place",
    image: "log",
  },
  "why-does-my-car-battery-keep-dying": {
    kind: "symptom",
    headline: "Log battery and charging repairs",
    endHeadline: "Keep your battery history in one place",
    image: "log",
  },
  "why-wont-my-car-start": {
    kind: "symptom",
    headline: "Log battery and starting repairs",
    endHeadline: "Keep a record of every repair",
    image: "log",
  },
  "why-does-my-car-smell-like-gas": {
    kind: "symptom",
    headline: "Keep a record of fuel system repairs",
    endHeadline: "Keep a record of every repair",
    image: "log",
  },
  "why-does-my-car-smell-like-burning": {
    kind: "symptom",
    headline: "Keep a record of repairs and service",
    endHeadline: "Keep a record of every repair",
    image: "log",
  },
  "why-is-there-white-smoke-from-exhaust": {
    kind: "symptom",
    headline: "Keep a record of engine repairs and service",
    endHeadline: "Keep a record of every repair",
    image: "log",
  },
  "why-is-my-fuel-economy-getting-worse": {
    kind: "symptom",
    headline: "Track the maintenance that can affect fuel economy",
    endHeadline: "Keep your maintenance history in one place",
    image: "log",
  },
};

/** "/blog/when-to-change-engine-oil" -> "when-to-change-engine-oil" */
export function guideSlugFromPath(pathname: string): string {
  return pathname.replace(/^\/(?:[a-z]{2}\/)?blog\//, "").replace(/\/+$/, "");
}

export function getGuideCta(slug: string): GuideCtaEntry {
  return GUIDE_CTA[slug] ?? GUIDE_CTA_FALLBACK;
}
