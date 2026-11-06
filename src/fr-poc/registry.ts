import type { LocalizedGuideRegistryEntry } from "../content/guides/types";
import { bestCarMaintenanceAppsFr } from "./content/best-car-maintenance-apps.fr";
import { carMaintenanceChecklistFr } from "./content/car-maintenance-checklist.fr";
import { carMaintenanceScheduleByMileageFr } from "./content/car-maintenance-schedule-by-mileage.fr";
import { howToKeepCarServiceRecordsOrganizedFr } from "./content/how-to-keep-car-service-records-organized.fr";
import { howToPrepareCarForRoadTripFr } from "./content/how-to-prepare-car-for-road-trip.fr";
import { howToTrackCarMaintenanceFr } from "./content/how-to-track-car-maintenance.fr";
import { usedCarInspectionChecklistFr } from "./content/used-car-inspection-checklist.fr";
import { whatCarFluidsShouldICheckFr } from "./content/what-car-fluids-should-i-check.fr";
import { whatDoesCheckEngineLightMeanFr } from "./content/what-does-check-engine-light-mean.fr";
import { whatToIncludeInACarServiceHistoryFr } from "./content/what-to-include-in-a-car-service-history.fr";
import { whenToChangeBrakeFluidFr } from "./content/when-to-change-brake-fluid.fr";
import { whenToChangeCoolantFr } from "./content/when-to-change-coolant.fr";
import { whenToChangeEngineOilFr } from "./content/when-to-change-engine-oil.fr";
import { whenToChangeFuelFilterFr } from "./content/when-to-change-fuel-filter.fr";
import { whenToChangeOilFilterFr } from "./content/when-to-change-oil-filter.fr";
import { whenToChangePowerSteeringFluidFr } from "./content/when-to-change-power-steering-fluid.fr";
import { whenToChangeTransmissionFluidFr } from "./content/when-to-change-transmission-fluid.fr";
import { whenToCheckTirePressureFr } from "./content/when-to-check-tire-pressure.fr";
import { whenToGetWheelAlignmentFr } from "./content/when-to-get-wheel-alignment.fr";
import { whenToReplaceBrakePadsFr } from "./content/when-to-replace-brake-pads.fr";
import { whenToReplaceBrakeRotorsFr } from "./content/when-to-replace-brake-rotors.fr";
import { whenToReplaceCabinAirFilterFr } from "./content/when-to-replace-cabin-air-filter.fr";
import { whenToReplaceCarBatteryFr } from "./content/when-to-replace-car-battery.fr";
import { whenToReplaceEngineAirFilterFr } from "./content/when-to-replace-engine-air-filter.fr";
import { whenToReplaceHeadlightsFr } from "./content/when-to-replace-headlights.fr";
import { whenToReplaceSerpentineBeltFr } from "./content/when-to-replace-serpentine-belt.fr";
import { whenToReplaceShocksAndStrutsFr } from "./content/when-to-replace-shocks-and-struts.fr";
import { whenToReplaceSparkPlugsFr } from "./content/when-to-replace-spark-plugs.fr";
import { whenToReplaceTimingBeltFr } from "./content/when-to-replace-timing-belt.fr";
import { whenToReplaceTiresFr } from "./content/when-to-replace-tires.fr";
import { whenToReplaceWindshieldWipersFr } from "./content/when-to-replace-windshield-wipers.fr";
import { whenToRotateTiresFr } from "./content/when-to-rotate-tires.fr";
import { whenToServiceCarAcFr } from "./content/when-to-service-car-ac.fr";
import { whyAreMyBrakesSqueakingFr } from "./content/why-are-my-brakes-squeaking.fr";
import { whyAreMyTiresWearingUnevenlyFr } from "./content/why-are-my-tires-wearing-unevenly.fr";
import { whyDoesMyCarBatteryKeepDyingFr } from "./content/why-does-my-car-battery-keep-dying.fr";
import { whyDoesMyCarSmellLikeBurningFr } from "./content/why-does-my-car-smell-like-burning.fr";
import { whyDoesMyCarSmellLikeGasFr } from "./content/why-does-my-car-smell-like-gas.fr";
import { whyIsMyCarLeakingCoolantFr } from "./content/why-is-my-car-leaking-coolant.fr";
import { whyIsMyCarLeakingOilFr } from "./content/why-is-my-car-leaking-oil.fr";
import { whyIsMyCarOverheatingFr } from "./content/why-is-my-car-overheating.fr";
import { whyIsMyCarPullingToOneSideFr } from "./content/why-is-my-car-pulling-to-one-side.fr";
import { whyIsMyCarShakingFr } from "./content/why-is-my-car-shaking.fr";
import { whyIsMyFuelEconomyGettingWorseFr } from "./content/why-is-my-fuel-economy-getting-worse.fr";
import { whyIsMySteeringWheelShakingFr } from "./content/why-is-my-steering-wheel-shaking.fr";
import { whyIsThereWhiteSmokeFromExhaustFr } from "./content/why-is-there-white-smoke-from-exhaust.fr";
import { whyWontMyCarStartFr } from "./content/why-wont-my-car-start.fr";

/** FR localized guides — bundled only when FR_POC=1 (Vite alias on extra routes). */
export const FR_POC_REGISTRY: readonly LocalizedGuideRegistryEntry[] = [
  {
    id: "how-to-track-car-maintenance",
    locale: "fr",
    slug: "comment-suivre-entretien-voiture",
    path: "/fr/blog/comment-suivre-entretien-voiture",
    published: true,
    content: howToTrackCarMaintenanceFr,
  },
  {
    id: "what-to-include-in-a-car-service-history",
    locale: "fr",
    slug: "que-contient-historique-entretien-voiture",
    path: "/fr/blog/que-contient-historique-entretien-voiture",
    published: true,
    content: whatToIncludeInACarServiceHistoryFr,
  },
  {
    id: "car-maintenance-schedule-by-mileage",
    locale: "fr",
    slug: "tableau-entretien-voiture-kilometrage",
    path: "/fr/blog/tableau-entretien-voiture-kilometrage",
    published: true,
    content: carMaintenanceScheduleByMileageFr,
  },
  {
    id: "when-to-change-engine-oil",
    locale: "fr",
    slug: "quand-faire-vidange-voiture",
    path: "/fr/blog/quand-faire-vidange-voiture",
    published: true,
    content: whenToChangeEngineOilFr,
  },
  {
    id: "when-to-change-coolant",
    locale: "fr",
    slug: "quand-changer-liquide-refroidissement",
    path: "/fr/blog/quand-changer-liquide-refroidissement",
    published: true,
    content: whenToChangeCoolantFr,
  },
  {
    id: "when-to-replace-brake-pads",
    locale: "fr",
    slug: "quand-changer-plaquettes-frein",
    path: "/fr/blog/quand-changer-plaquettes-frein",
    published: true,
    content: whenToReplaceBrakePadsFr,
  },
  {
    id: "when-to-check-tire-pressure",
    locale: "fr",
    slug: "quand-verifier-pression-pneus",
    path: "/fr/blog/quand-verifier-pression-pneus",
    published: true,
    content: whenToCheckTirePressureFr,
  },
  {
    id: "why-wont-my-car-start",
    locale: "fr",
    slug: "voiture-ne-demarre-pas-causes",
    path: "/fr/blog/voiture-ne-demarre-pas-causes",
    published: true,
    content: whyWontMyCarStartFr,
  },
  {
    id: "how-to-keep-car-service-records-organized",
    locale: "fr",
    slug: "organiser-historique-entretien-voiture",
    path: "/fr/blog/organiser-historique-entretien-voiture",
    published: true,
    content: howToKeepCarServiceRecordsOrganizedFr,
  },
  {
    id: "how-to-prepare-car-for-road-trip",
    locale: "fr",
    slug: "preparer-voiture-long-trajet",
    path: "/fr/blog/preparer-voiture-long-trajet",
    published: true,
    content: howToPrepareCarForRoadTripFr,
  },
  {
    id: "best-car-maintenance-apps",
    locale: "fr",
    slug: "meilleures-applications-suivi-entretien-voiture",
    path: "/fr/blog/meilleures-applications-suivi-entretien-voiture",
    published: false,
    content: bestCarMaintenanceAppsFr,
  },
  {
    id: "car-maintenance-checklist",
    locale: "fr",
    slug: "checklist-entretien-voiture",
    path: "/fr/blog/checklist-entretien-voiture",
    published: true,
    content: carMaintenanceChecklistFr,
  },
  {
    id: "used-car-inspection-checklist",
    locale: "fr",
    slug: "checklist-achat-voiture-occasion",
    path: "/fr/blog/checklist-achat-voiture-occasion",
    published: true,
    content: usedCarInspectionChecklistFr,
  },
  {
    id: "what-car-fluids-should-i-check",
    locale: "fr",
    slug: "quels-liquides-verifier-voiture",
    path: "/fr/blog/quels-liquides-verifier-voiture",
    published: true,
    content: whatCarFluidsShouldICheckFr,
  },
  {
    id: "what-does-check-engine-light-mean",
    locale: "fr",
    slug: "voyant-moteur-allume-signification",
    path: "/fr/blog/voyant-moteur-allume-signification",
    published: true,
    content: whatDoesCheckEngineLightMeanFr,
  },
  {
    id: "when-to-change-brake-fluid",
    locale: "fr",
    slug: "quand-changer-liquide-de-frein",
    path: "/fr/blog/quand-changer-liquide-de-frein",
    published: true,
    content: whenToChangeBrakeFluidFr,
  },
  {
    id: "when-to-change-fuel-filter",
    locale: "fr",
    slug: "quand-changer-filtre-carburant",
    path: "/fr/blog/quand-changer-filtre-carburant",
    published: true,
    content: whenToChangeFuelFilterFr,
  },
  {
    id: "when-to-change-oil-filter",
    locale: "fr",
    slug: "quand-changer-filtre-huile",
    path: "/fr/blog/quand-changer-filtre-huile",
    published: true,
    content: whenToChangeOilFilterFr,
  },
  {
    id: "when-to-change-power-steering-fluid",
    locale: "fr",
    slug: "quand-changer-liquide-direction-assistee",
    path: "/fr/blog/quand-changer-liquide-direction-assistee",
    published: true,
    content: whenToChangePowerSteeringFluidFr,
  },
  {
    id: "when-to-change-transmission-fluid",
    locale: "fr",
    slug: "quand-changer-huile-boite-vitesses",
    path: "/fr/blog/quand-changer-huile-boite-vitesses",
    published: true,
    content: whenToChangeTransmissionFluidFr,
  },
  {
    id: "when-to-get-wheel-alignment",
    locale: "fr",
    slug: "quand-faire-geometrie-roues",
    path: "/fr/blog/quand-faire-geometrie-roues",
    published: true,
    content: whenToGetWheelAlignmentFr,
  },
  {
    id: "when-to-replace-brake-rotors",
    locale: "fr",
    slug: "quand-changer-disques-frein",
    path: "/fr/blog/quand-changer-disques-frein",
    published: true,
    content: whenToReplaceBrakeRotorsFr,
  },
  {
    id: "when-to-replace-cabin-air-filter",
    locale: "fr",
    slug: "quand-changer-filtre-habitacle",
    path: "/fr/blog/quand-changer-filtre-habitacle",
    published: true,
    content: whenToReplaceCabinAirFilterFr,
  },
  {
    id: "when-to-replace-car-battery",
    locale: "fr",
    slug: "quand-changer-batterie-voiture",
    path: "/fr/blog/quand-changer-batterie-voiture",
    published: true,
    content: whenToReplaceCarBatteryFr,
  },
  {
    id: "when-to-replace-engine-air-filter",
    locale: "fr",
    slug: "quand-changer-filtre-air-moteur",
    path: "/fr/blog/quand-changer-filtre-air-moteur",
    published: true,
    content: whenToReplaceEngineAirFilterFr,
  },
  {
    id: "when-to-replace-headlights",
    locale: "fr",
    slug: "quand-changer-ampoules-phares",
    path: "/fr/blog/quand-changer-ampoules-phares",
    published: true,
    content: whenToReplaceHeadlightsFr,
  },
  {
    id: "when-to-replace-serpentine-belt",
    locale: "fr",
    slug: "quand-changer-courroie-accessoires",
    path: "/fr/blog/quand-changer-courroie-accessoires",
    published: true,
    content: whenToReplaceSerpentineBeltFr,
  },
  {
    id: "when-to-replace-shocks-and-struts",
    locale: "fr",
    slug: "quand-changer-amortisseurs-voiture",
    path: "/fr/blog/quand-changer-amortisseurs-voiture",
    published: true,
    content: whenToReplaceShocksAndStrutsFr,
  },
  {
    id: "when-to-replace-spark-plugs",
    locale: "fr",
    slug: "quand-changer-bougies-allumage",
    path: "/fr/blog/quand-changer-bougies-allumage",
    published: true,
    content: whenToReplaceSparkPlugsFr,
  },
  {
    id: "when-to-replace-timing-belt",
    locale: "fr",
    slug: "quand-changer-courroie-distribution",
    path: "/fr/blog/quand-changer-courroie-distribution",
    published: true,
    content: whenToReplaceTimingBeltFr,
  },
  {
    id: "when-to-replace-tires",
    locale: "fr",
    slug: "quand-changer-pneus-voiture",
    path: "/fr/blog/quand-changer-pneus-voiture",
    published: true,
    content: whenToReplaceTiresFr,
  },
  {
    id: "when-to-replace-windshield-wipers",
    locale: "fr",
    slug: "quand-changer-essuie-glaces-voiture",
    path: "/fr/blog/quand-changer-essuie-glaces-voiture",
    published: true,
    content: whenToReplaceWindshieldWipersFr,
  },
  {
    id: "when-to-rotate-tires",
    locale: "fr",
    slug: "quand-permuter-pneus-voiture",
    path: "/fr/blog/quand-permuter-pneus-voiture",
    published: true,
    content: whenToRotateTiresFr,
  },
  {
    id: "when-to-service-car-ac",
    locale: "fr",
    slug: "quand-entretenir-climatisation-voiture",
    path: "/fr/blog/quand-entretenir-climatisation-voiture",
    published: true,
    content: whenToServiceCarAcFr,
  },
  {
    id: "why-are-my-brakes-squeaking",
    locale: "fr",
    slug: "pourquoi-freins-voiture-grincent",
    path: "/fr/blog/pourquoi-freins-voiture-grincent",
    published: true,
    content: whyAreMyBrakesSqueakingFr,
  },
  {
    id: "why-are-my-tires-wearing-unevenly",
    locale: "fr",
    slug: "usure-irreguliere-pneus-causes",
    path: "/fr/blog/usure-irreguliere-pneus-causes",
    published: true,
    content: whyAreMyTiresWearingUnevenlyFr,
  },
  {
    id: "why-does-my-car-battery-keep-dying",
    locale: "fr",
    slug: "batterie-voiture-se-decharge-souvent",
    path: "/fr/blog/batterie-voiture-se-decharge-souvent",
    published: true,
    content: whyDoesMyCarBatteryKeepDyingFr,
  },
  {
    id: "why-does-my-car-smell-like-burning",
    locale: "fr",
    slug: "odeur-brule-voiture-causes",
    path: "/fr/blog/odeur-brule-voiture-causes",
    published: true,
    content: whyDoesMyCarSmellLikeBurningFr,
  },
  {
    id: "why-does-my-car-smell-like-gas",
    locale: "fr",
    slug: "odeur-essence-voiture-causes",
    path: "/fr/blog/odeur-essence-voiture-causes",
    published: true,
    content: whyDoesMyCarSmellLikeGasFr,
  },
  {
    id: "why-is-my-car-leaking-coolant",
    locale: "fr",
    slug: "fuite-liquide-refroidissement-voiture",
    path: "/fr/blog/fuite-liquide-refroidissement-voiture",
    published: true,
    content: whyIsMyCarLeakingCoolantFr,
  },
  {
    id: "why-is-my-car-leaking-oil",
    locale: "fr",
    slug: "fuite-huile-moteur-voiture",
    path: "/fr/blog/fuite-huile-moteur-voiture",
    published: true,
    content: whyIsMyCarLeakingOilFr,
  },
  {
    id: "why-is-my-car-overheating",
    locale: "fr",
    slug: "moteur-voiture-surchauffe-causes",
    path: "/fr/blog/moteur-voiture-surchauffe-causes",
    published: true,
    content: whyIsMyCarOverheatingFr,
  },
  {
    id: "why-is-my-car-pulling-to-one-side",
    locale: "fr",
    slug: "voiture-tire-droite-gauche-causes",
    path: "/fr/blog/voiture-tire-droite-gauche-causes",
    published: true,
    content: whyIsMyCarPullingToOneSideFr,
  },
  {
    id: "why-is-my-car-shaking",
    locale: "fr",
    slug: "voiture-vibre-tremble-causes",
    path: "/fr/blog/voiture-vibre-tremble-causes",
    published: true,
    content: whyIsMyCarShakingFr,
  },
  {
    id: "why-is-my-fuel-economy-getting-worse",
    locale: "fr",
    slug: "pourquoi-voiture-consomme-plus-carburant",
    path: "/fr/blog/pourquoi-voiture-consomme-plus-carburant",
    published: true,
    content: whyIsMyFuelEconomyGettingWorseFr,
  },
  {
    id: "why-is-my-steering-wheel-shaking",
    locale: "fr",
    slug: "volant-voiture-tremble-causes",
    path: "/fr/blog/volant-voiture-tremble-causes",
    published: true,
    content: whyIsMySteeringWheelShakingFr,
  },
  {
    id: "why-is-there-white-smoke-from-exhaust",
    locale: "fr",
    slug: "fumee-blanche-echappement-voiture",
    path: "/fr/blog/fumee-blanche-echappement-voiture",
    published: true,
    content: whyIsThereWhiteSmokeFromExhaustFr,
  },
];

const seenIds = new Set<string>();
const seenSlugs = new Set<string>();
const seenPaths = new Set<string>();

for (const entry of FR_POC_REGISTRY) {
  if (typeof entry.published !== "boolean") {
    throw new Error(`Registry entry "${entry.id}" must set published explicitly.`);
  }
  if (seenIds.has(entry.id)) {
    throw new Error(`Duplicate registry id: ${entry.id}`);
  }
  seenIds.add(entry.id);
  if (seenSlugs.has(entry.slug)) {
    throw new Error(`Duplicate registry slug: ${entry.slug}`);
  }
  seenSlugs.add(entry.slug);
  if (seenPaths.has(entry.path)) {
    throw new Error(`Duplicate registry path: ${entry.path}`);
  }
  seenPaths.add(entry.path);
  const expectedPath = `/fr/blog/${entry.slug}`;
  if (entry.path !== expectedPath) {
    throw new Error(`Registry entry "${entry.id}" path must be ${expectedPath}`);
  }
  if (entry.content.seo.path !== entry.path) {
    throw new Error(`Registry entry "${entry.id}" content.seo.path must match path`);
  }
  if (!entry.content.seo.title?.trim() || !entry.content.seo.description?.trim()) {
    throw new Error(`Registry entry "${entry.id}" requires seo.title and seo.description`);
  }
}

/** Local preview SSG: all registry rows (including unpublished drafts). */
export function getFrPreviewRegistryEntries(): readonly LocalizedGuideRegistryEntry[] {
  return FR_POC_REGISTRY;
}

/** Future production SSG: only rows with published === true. */
export function getPublishedRegistryEntries(): readonly LocalizedGuideRegistryEntry[] {
  return FR_POC_REGISTRY.filter((entry) => entry.published === true);
}

export function getRegistryEntryByPath(path: string): LocalizedGuideRegistryEntry | undefined {
  return FR_POC_REGISTRY.find((entry) => entry.path === path);
}

export function pathToStaticRelativeDir(entryPath: string): string {
  return entryPath.replace(/^\//, "");
}
