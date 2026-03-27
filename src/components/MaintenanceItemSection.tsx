import type { PublicMaintenanceItem } from "../lib/types";
import { HistoryEntryRow } from "./HistoryEntryRow";

export function MaintenanceItemSection({
  item,
  odometerUnit,
}: {
  item: PublicMaintenanceItem;
  odometerUnit: string | null;
}) {
  if (item.historyEntries.length === 0) return null;

  return (
    <section className="rounded-md bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h3 className="min-w-0 break-words text-sm font-semibold text-gray-800 sm:text-base">
          {item.label}
        </h3>
        <span className="shrink-0 text-xs text-gray-400">
          {item.historyEntries.length}{" "}
          {item.historyEntries.length === 1 ? "entry" : "entries"}
        </span>
      </div>

      <div className="space-y-2">
        {item.historyEntries.map((entry) => (
          <HistoryEntryRow key={entry.id} entry={entry} odometerUnit={odometerUnit} />
        ))}
      </div>
    </section>
  );
}
