const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type StorePlatform = "app_store" | "google_play";

/** Page locale plus store platform. Includes campaign UTMs already on the URL. */
export function trackStoreClick(locale: string, platform: StorePlatform) {
  try {
    const params = new URLSearchParams(window.location.search);
    const detail: Record<string, string> = { locale, platform };
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) detail[key] = value;
    }

    const dataLayer = (
      window as Window & { dataLayer?: Array<Record<string, string>> }
    ).dataLayer;
    if (Array.isArray(dataLayer)) {
      dataLayer.push({ event: "store_click", ...detail });
    }

    window.dispatchEvent(new CustomEvent("store_click", { detail }));
  } catch {
    // Measurement must never block the store navigation.
  }
}
