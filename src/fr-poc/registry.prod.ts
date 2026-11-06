import type { LocalizedGuideRegistryEntry } from "../content/guides/types";
import { FR_PROD_REGISTRY } from "./registry.prod.generated";

/** Production client: only guides listed in registry.prod.generated (published === true). */
export function getPublishedRegistryEntries(): readonly LocalizedGuideRegistryEntry[] {
  return FR_PROD_REGISTRY;
}

/** Hub listing mirrors published set in production. */
export function getFrBlogHubRegistryEntries(): readonly LocalizedGuideRegistryEntry[] {
  return FR_PROD_REGISTRY;
}

export function getRegistryEntryByPath(path: string): LocalizedGuideRegistryEntry | undefined {
  return FR_PROD_REGISTRY.find((entry) => entry.path === path);
}
