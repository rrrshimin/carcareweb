export const FLEET_ANALYTICS_PREFERENCE_KEY = "carcare_fleet_analytics";
export const FLEET_ANALYTICS_PREFERENCE_EVENT = "carcare-fleet-analytics-preference";

export type FleetAnalyticsPreference = "allow" | "decline";

const OPT_IN_FLEET_PATHS = new Set(["/fleet-uk", "/fleet-fr"]);

let memory: FleetAnalyticsPreference | null = null;

function isPreference(value: string | null): value is FleetAnalyticsPreference {
  return value === "allow" || value === "decline";
}

/** The saved privacy choice. This value is not an analytics identifier. */
export function readFleetAnalyticsPreference(): FleetAnalyticsPreference | null {
  if (typeof window === "undefined") return memory;
  try {
    const stored = window.localStorage.getItem(FLEET_ANALYTICS_PREFERENCE_KEY);
    if (isPreference(stored)) {
      memory = stored;
      return stored;
    }
  } catch {
    // Storage can be blocked. The in-memory choice still applies in this tab.
  }
  return memory;
}

export function writeFleetAnalyticsPreference(value: FleetAnalyticsPreference) {
  memory = value;
  try {
    window.localStorage.setItem(FLEET_ANALYTICS_PREFERENCE_KEY, value);
  } catch {
    // Kept in memory for this tab when storage is unavailable.
  }
  window.dispatchEvent(new Event(FLEET_ANALYTICS_PREFERENCE_EVENT));
}

/** UK/FR fleet pages require explicit Allow; US fleet uses measurement unless opted out. */
export function fleetPathRequiresAnalyticsOptIn(pathname: string): boolean {
  return OPT_IN_FLEET_PATHS.has(pathname);
}

export function fleetAnalyticsAllowed(pathname: string): boolean {
  const preference = readFleetAnalyticsPreference();
  if (preference === "decline") return false;
  if (fleetPathRequiresAnalyticsOptIn(pathname)) return preference === "allow";
  if (pathname === "/fleet-us") return true;
  return false;
}
