/** View-model types for the public vehicle page. */

export type PublicVehiclePageModel = {
  vehicle: PublicVehicle;
  categories: PublicCategory[];
};

export type PublicVehicle = {
  id: number;
  slug: string;
  displayName: string;
  year: number | null;
  fuelType: string | null;
  transmission: string | null;
  imageUrl: string | null;
  currentOdometer: number | null;
};

export type PublicCategory = {
  id: number;
  label: string;
  items: PublicMaintenanceItem[];
};

export type PublicMaintenanceItem = {
  id: number;
  label: string;
  historyEntries: PublicHistoryEntry[];
};

export type PublicHistoryEntry = {
  id: number;
  serviceDate: string | null;
  odometer: number | null;
  specs: string | null;
  notes: string | null;
};
