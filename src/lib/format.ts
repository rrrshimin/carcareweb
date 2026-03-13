const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** Parses a YYYY-MM-DD prefix directly to avoid Date constructor timezone shifts. */
export function formatDate(iso: string): string {
  const match = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return iso;
  const monthIndex = parseInt(match[2], 10) - 1;
  if (monthIndex < 0 || monthIndex > 11) return iso;
  return `${parseInt(match[3], 10)} ${MONTHS[monthIndex]} ${match[1]}`;
}

export function formatOdometer(value: number): string {
  return value.toLocaleString();
}

export function buildDisplayName(
  name: string | null,
  year: number | null,
): string {
  const base = name?.trim() || null;
  if (base && year) return `${year} ${base}`;
  if (base) return base;
  if (year) return `${year} Vehicle`;
  return "Unnamed Vehicle";
}

export function buildPageTitle(displayName: string): string {
  return `CarCare Diary – ${displayName}`;
}
