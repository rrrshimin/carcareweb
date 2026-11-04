import { track } from "@vercel/analytics";
import { trackStoreClick, type StorePlatform } from "./storeClick";

export type GuideCtaPlacement = "primary" | "secondary";

/**
 * Guide banner click. Reuses the shared store_click hook (dataLayer and window event; PostHog stays
 * limited to consented /fleet-* pages) and adds one Vercel Analytics custom event, the analytics
 * integration already running site-wide. Vercel Pro allows only 2 properties per custom event, so it
 * sends exactly two: `slug` and `target` (`<placement>_<ios|android>`, e.g. `primary_ios`).
 */
export function trackGuideCtaClick(
  slug: string,
  placement: GuideCtaPlacement,
  platform: StorePlatform,
) {
  try {
    trackStoreClick("en", platform);
    const target = `${placement}_${platform === "app_store" ? "ios" : "android"}`;
    window.dispatchEvent(new CustomEvent("guide_cta_click", { detail: { slug, target } }));
    track("guide_cta_click", { slug, target });
  } catch {
    // Measurement must never block the store navigation.
  }
}
