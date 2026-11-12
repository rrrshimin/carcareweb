import { fleetAnalyticsAllowed } from "./fleetAnalyticsPreference";
import { isFleetPath } from "./fleetMeasurement";

const UMAMI_SRC = "https://cloud.umami.is/script.js";
const UMAMI_WEBSITE_ID = "2f605dc0-195a-49b3-b6dd-15ee2b30614b";
const SCRIPT_ID = "carcare-fleet-umami";

type UmamiTracker = {
  track: (event: string, data?: Record<string, string | number | boolean>) => void;
};

type WindowWithUmami = Window & { umami?: UmamiTracker };

/** Load Umami once on allowed fleet pages; remove when opted out or the page unmounts. */
export function syncFleetUmami(pathname: string) {
  if (typeof document === "undefined") return;

  const remove = () => {
    document.getElementById(SCRIPT_ID)?.remove();
  };

  if (!isFleetPath(pathname) || !fleetAnalyticsAllowed(pathname)) {
    remove();
    return;
  }

  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.defer = true;
  script.src = UMAMI_SRC;
  script.setAttribute("data-website-id", UMAMI_WEBSITE_ID);
  document.head.appendChild(script);
}

export function removeFleetUmami() {
  if (typeof document === "undefined") return;
  document.getElementById(SCRIPT_ID)?.remove();
}

/** Fleet conversion click for Umami (uses existing onClick path; data-umami-event blocks other listeners). */
export function trackFleetUmamiClick(event: string, data: Record<string, string>) {
  if (typeof window === "undefined") return;
  if (!fleetAnalyticsAllowed(window.location.pathname)) return;
  try {
    (window as WindowWithUmami).umami?.track(event, data);
  } catch {
    // Measurement must never block navigation.
  }
}
