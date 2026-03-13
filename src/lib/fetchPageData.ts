import { supabase } from "./supabase";
import type { Tables } from "../../database.types";

const VEHICLE_FIELDS =
  "id, name, year, fuel_type, transmission, current_odometer, image_url, user_id_link" as const;

const LOG_FIELDS =
  "id, car_id, log_type, change_date, odo_log, specs, notes" as const;

const LOG_TYPE_FIELDS = "id, log_type_name, category_link" as const;

const CATEGORY_FIELDS = "id, category_name" as const;

export type RawVehicle = Pick<
  Tables<"vehicles">,
  "id" | "name" | "year" | "fuel_type" | "transmission" | "current_odometer" | "image_url" | "user_id_link"
>;

export type RawLog = Pick<
  Tables<"user_logs">,
  "id" | "car_id" | "log_type" | "change_date" | "odo_log" | "specs" | "notes"
>;

export type RawLogType = Pick<
  Tables<"log_types">,
  "id" | "log_type_name" | "category_link"
>;

export type RawCategory = Pick<
  Tables<"log_categories">,
  "id" | "category_name"
>;

export type PageData = {
  vehicle: RawVehicle;
  logs: RawLog[];
  logTypes: RawLogType[];
  categories: RawCategory[];
  unit: string | null;
};

export type FetchResult =
  | { status: "unavailable" }
  | { status: "error" }
  | { status: "found"; data: PageData };

export async function fetchPageData(slug: string): Promise<FetchResult> {
  const { data: vehicle, error: vehicleErr } = await supabase
    .from("vehicles")
    .select(VEHICLE_FIELDS)
    .eq("shared_link", slug)
    .maybeSingle();

  if (vehicleErr || !vehicle) {
    return { status: "unavailable" };
  }

  let unit: string | null = null;
  if (vehicle.user_id_link) {
    const { data: device } = await supabase
      .from("user_devices")
      .select("unit")
      .eq("device_id", vehicle.user_id_link)
      .maybeSingle();
    unit = device?.unit ?? null;
  }

  const { data: logs, error: logsErr } = await supabase
    .from("user_logs")
    .select(LOG_FIELDS)
    .eq("car_id", vehicle.id);

  if (logsErr) return { status: "error" };

  const safeLogs = logs ?? [];

  const logTypeIds = [...new Set(safeLogs.map((l) => l.log_type).filter((id): id is number => id != null))];

  let logTypes: RawLogType[] = [];
  if (logTypeIds.length > 0) {
    const { data, error: ltErr } = await supabase
      .from("log_types")
      .select(LOG_TYPE_FIELDS)
      .in("id", logTypeIds);
    if (ltErr) return { status: "error" };
    logTypes = data ?? [];
  }

  const categoryIds = [...new Set(logTypes.map((lt) => lt.category_link).filter((id): id is number => id != null))];

  let categories: RawCategory[] = [];
  if (categoryIds.length > 0) {
    const { data, error: catErr } = await supabase
      .from("log_categories")
      .select(CATEGORY_FIELDS)
      .in("id", categoryIds);
    if (catErr) return { status: "error" };
    categories = data ?? [];
  }

  return {
    status: "found",
    data: { vehicle, logs: safeLogs, logTypes, categories, unit },
  };
}
