const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const EMAIL = /[^\s@]+@[^\s@]+\.[^\s@]+/;

export const FLEET_PAGE_LOCALES = {
  "/fleet-us": "en-US",
  "/fleet-uk": "en-GB",
  "/fleet-fr": "fr-FR",
} as const;

export type FleetPagePath = keyof typeof FLEET_PAGE_LOCALES;

function isPersonal(value: string): boolean {
  return value.includes("@") || EMAIL.test(value);
}

/** Campaign parameters only. Drops blank, oversized, and personal values. Used for dataLayer store clicks. */
export function campaignUtms(search: string): Record<string, string> {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const utms: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim();
    if (!value || value.length > 120 || isPersonal(value)) continue;
    utms[key] = value;
  }
  return utms;
}

export function isFleetPath(pathname: string): pathname is FleetPagePath {
  return pathname in FLEET_PAGE_LOCALES;
}
