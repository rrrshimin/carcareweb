import { fleetAnalyticsAllowed } from "./fleetAnalyticsPreference";
import {
  campaignUtms,
  FLEET_PAGE_LOCALES,
  isFleetPath,
  prepareMeasurementEvent,
} from "./fleetMeasurement";
import type { StorePlatform } from "./storeClick";

const EU_HOST = "https://eu.i.posthog.com";

type PostHogClient = {
  init: (key: string, config: Record<string, unknown>) => void;
  capture: (event: string, properties?: Record<string, string>) => void;
  __loaded?: boolean;
};

let starting: Promise<PostHogClient | null> | null = null;

function projectKey(): string {
  return (import.meta.env.VITE_POSTHOG_KEY ?? "").trim();
}

function measurementEvent(event: Parameters<typeof prepareMeasurementEvent>[0]) {
  if (!fleetAnalyticsAllowed()) return null;
  return prepareMeasurementEvent(event);
}

function client(): Promise<PostHogClient | null> {
  const key = projectKey();
  if (!key || typeof window === "undefined") return Promise.resolve(null);
  if (!fleetAnalyticsAllowed()) return Promise.resolve(null);
  if (!isFleetPath(window.location.pathname)) return Promise.resolve(null);
  if (!starting) {
    starting = import("posthog-js/dist/module.slim")
      .then((mod) => {
        if (!fleetAnalyticsAllowed()) {
          starting = null;
          return null;
        }
        const posthog = mod.default as PostHogClient;
        if (!posthog.__loaded) {
          posthog.init(key, {
            api_host: (import.meta.env.VITE_POSTHOG_HOST ?? "").trim() || EU_HOST,
            cookieless_mode: "always",
            person_profiles: "never",
            autocapture: false,
            capture_pageview: false,
            capture_pageleave: false,
            capture_dead_clicks: false,
            capture_heatmaps: false,
            disable_session_recording: true,
            advanced_disable_flags: true,
            // Send during capture so a later Decline cannot flush a queued event.
            request_batching: false,
            before_send: measurementEvent,
          });
        }
        return fleetAnalyticsAllowed() ? posthog : null;
      })
      .catch(() => {
        starting = null;
        return null;
      });
  }
  return starting.then((posthog) => (fleetAnalyticsAllowed() ? posthog : null));
}

export function captureFleetPageview(path: string) {
  if (!isFleetPath(path)) return;
  const locale = FLEET_PAGE_LOCALES[path];
  void client().then((posthog) => {
    posthog?.capture("$pageview", {
      locale,
      ...campaignUtms(window.location.search),
    });
  });
}

export function captureFleetStoreClick(locale: string, platform: StorePlatform) {
  void client().then((posthog) => {
    posthog?.capture("store_click", {
      locale,
      platform,
      ...campaignUtms(window.location.search),
    });
  });
}
