import type { PageData, RawLog } from "./fetchPageData";
import { buildDisplayName, capitalizeFirst } from "./format";
import type {
  PublicVehiclePageModel,
  PublicCategory,
  PublicMaintenanceItem,
  PublicHistoryEntry,
} from "./types";

export function buildViewModel(data: PageData, slug: string): PublicVehiclePageModel {
  const { vehicle, logs, logTypes, categories } = data;

  const logTypeMap = new Map(logTypes.map((lt) => [lt.id, lt]));
  const categoryMap = new Map(categories.map((c) => [c.id, c]));

  // Group logs by log_type -> becomes items
  const logsByType = new Map<number, RawLog[]>();
  for (const log of logs) {
    if (log.log_type == null) continue;
    const existing = logsByType.get(log.log_type);
    if (existing) {
      existing.push(log);
    } else {
      logsByType.set(log.log_type, [log]);
    }
  }

  // Group items by category
  const itemsByCategory = new Map<number, PublicMaintenanceItem[]>();
  for (const [logTypeId, typeLogs] of logsByType) {
    const logType = logTypeMap.get(logTypeId);
    if (!logType || logType.category_link == null) continue;

    const item: PublicMaintenanceItem = {
      id: logType.id,
      label: logType.log_type_name ?? "Unknown",
      historyEntries: typeLogs
        .map(toHistoryEntry)
        .sort(newestFirst),
    };

    const catItems = itemsByCategory.get(logType.category_link);
    if (catItems) {
      catItems.push(item);
    } else {
      itemsByCategory.set(logType.category_link, [item]);
    }
  }

  // Build category list - only categories that have items
  const publicCategories: PublicCategory[] = [];
  for (const [catId, items] of itemsByCategory) {
    const cat = categoryMap.get(catId);
    if (!cat) continue;

    items.sort((a, b) => a.label.localeCompare(b.label));

    publicCategories.push({
      id: cat.id,
      label: cat.category_name ?? "Other",
      items,
    });
  }

  publicCategories.sort((a, b) => a.label.localeCompare(b.label));

  return {
    vehicle: {
      id: vehicle.id,
      slug,
      displayName: buildDisplayName(vehicle.name, vehicle.year),
      year: vehicle.year,
      fuelType: vehicle.fuel_type ? capitalizeFirst(vehicle.fuel_type) : null,
      transmission: vehicle.transmission ? capitalizeFirst(vehicle.transmission) : null,
      imageUrl: vehicle.image_url,
      currentOdometer: vehicle.current_odometer,
      odometerUnit: data.unit,
      ownerName: data.ownerName,
    },
    categories: publicCategories,
  };
}

function toHistoryEntry(log: RawLog): PublicHistoryEntry {
  return {
    id: log.id,
    serviceDate: log.change_date,
    loggedAt: log.created_at,
    odometer: log.odo_log,
    specs: log.specs,
    notes: log.notes,
  };
}

/** Lexicographic compare works because change_date is ISO 8601 (YYYY-MM-DD). */
function newestFirst(a: PublicHistoryEntry, b: PublicHistoryEntry): number {
  if (!a.serviceDate && !b.serviceDate) return 0;
  if (!a.serviceDate) return 1;
  if (!b.serviceDate) return -1;
  return b.serviceDate.localeCompare(a.serviceDate);
}
