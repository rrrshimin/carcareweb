import { campaignUtms } from "./fleetMeasurement";
import { captureFleetStoreClick } from "./fleetAnalytics";

export type StorePlatform = "app_store" | "google_play";

/** Page locale plus store platform. Includes campaign UTMs already on the URL. */
export function trackStoreClick(locale: string, platform: StorePlatform) {
  try {
    const detail: Record<string, string> = {
      locale,
      platform,
      ...campaignUtms(window.location.search),
    };

    const dataLayer = (
      window as Window & { dataLayer?: Array<Record<string, string>> }
    ).dataLayer;
    if (Array.isArray(dataLayer)) {
      dataLayer.push({ event: "store_click", ...detail });
    }

    window.dispatchEvent(new CustomEvent("store_click", { detail }));
    captureFleetStoreClick(locale, platform);
  } catch {
    // Measurement must never block the store navigation.
  }
}
