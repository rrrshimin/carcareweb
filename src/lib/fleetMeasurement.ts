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

const ALLOWED_EVENTS = new Set(["$pageview", "store_click"]);

function isPersonal(value: string): boolean {
  return value.includes("@") || EMAIL.test(value);
}

/** Campaign parameters only. Drops blank, oversized, and personal values. */
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

/** Page address with only the allowlisted campaign parameters. */
export function measurementUrl(href: string): string {
  try {
    const url = new URL(href);
    const kept = new URLSearchParams();
    for (const [key, value] of Object.entries(campaignUtms(url.search))) {
      kept.set(key, value);
    }
    const query = kept.toString();
    url.hash = "";
    url.username = "";
    url.password = "";
    url.search = query ? `?${query}` : "";
    if (url.pathname.includes("@")) {
      url.pathname =
        "/" +
        url.pathname
          .split("/")
          .filter((segment) => {
            if (!segment) return false;
            try {
              return !isPersonal(decodeURIComponent(segment));
            } catch {
              return !isPersonal(segment);
            }
          })
          .join("/");
    }
    return url.toString();
  } catch {
    return "";
  }
}

export function isFleetPath(pathname: string): pathname is FleetPagePath {
  return pathname in FLEET_PAGE_LOCALES;
}

type MeasurementEvent = {
  event?: string;
  properties?: Record<string, unknown>;
};

const KEPT_PROPERTIES = new Set([
  "token",
  "distinct_id",
  "locale",
  "platform",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "$current_url",
  "$pathname",
  "$referrer",
  "$referring_domain",
  "$process_person_profile",
  "$cookieless_mode",
  "$is_identified",
  // Required to hash a cookieless identity. Capture backfills $ip from the
  // connection and deletes both $ip and $raw_user_agent before storage.
  // $host is the site hostname; the capture request host cannot replace it.
  "$host",
  "$raw_user_agent",
]);

const COOKIELESS_DISTINCT_ID = "$posthog_cookieless";

function cookielessProperty(key: string, value: unknown): unknown {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed || isPersonal(trimmed)) return undefined;
  if (key === "$host") {
    if (trimmed.length > 253 || !/^[a-z0-9.-]+(?::\d{1,5})?$/i.test(trimmed)) return undefined;
    return trimmed;
  }
  return trimmed.length > 1000 ? `${trimmed.slice(0, 997)}...` : trimmed;
}

function sanitizeProperty(key: string, value: unknown): unknown {
  if (!KEPT_PROPERTIES.has(key)) return undefined;
  if (key === "$host" || key === "$raw_user_agent") return cookielessProperty(key, value);
  if (key === "distinct_id" && value !== COOKIELESS_DISTINCT_ID) return undefined;
  if (typeof value === "string") {
    const keyLooksLikeAddress = /url|referrer|href|search/i.test(key);
    if (value.includes("://")) return measurementUrl(value) || undefined;
    if (keyLooksLikeAddress && (value.startsWith("?") || value.includes("="))) {
      const query = new URLSearchParams(campaignUtms(value)).toString();
      return query ? (value.startsWith("?") ? `?${query}` : query) : undefined;
    }
    if (isPersonal(value)) return undefined;
    return value;
  }
  if (Array.isArray(value)) {
    return value
      .map((item, index) => sanitizeProperty(String(index), item))
      .filter((item) => item !== undefined);
  }
  if (value && typeof value === "object") {
    const nested: Record<string, unknown> = {};
    for (const [childKey, childValue] of Object.entries(value)) {
      const next = sanitizeProperty(childKey, childValue);
      if (next !== undefined) nested[childKey] = next;
    }
    return nested;
  }
  return value;
}

/** Keep pageviews and store clicks. Strip addresses and personal values before send. */
export function prepareMeasurementEvent<T extends MeasurementEvent>(event: T | null): T | null {
  if (!event?.event || !ALLOWED_EVENTS.has(event.event)) return null;
  const properties: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(event.properties ?? {})) {
    const next = sanitizeProperty(key, value);
    if (next !== undefined) properties[key] = next;
  }
  return { ...event, properties };
}
