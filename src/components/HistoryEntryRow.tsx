import { CalendarDays, Gauge } from "lucide-react";
import { formatDate, formatOdometer } from "../lib/format";
import type { PublicHistoryEntry } from "../lib/types";

export function HistoryEntryRow({ entry }: { entry: PublicHistoryEntry }) {
  const hasDate = !!entry.serviceDate;
  const hasOdo = entry.odometer != null;
  const hasSpecs = !!entry.specs;
  const hasNotes = !!entry.notes;

  if (!hasDate && !hasOdo && !hasSpecs && !hasNotes) return null;

  return (
    <div className="rounded-lg border border-gray-100 bg-gray-50/50 px-3 py-2.5 sm:px-4 sm:py-3">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] sm:text-sm">
        {hasDate && (
          <span className="flex items-center gap-1.5 text-gray-700">
            <CalendarDays className="h-3.5 w-3.5 text-gray-400" />
            {formatDate(entry.serviceDate!)}
          </span>
        )}
        {hasOdo && (
          <span className="flex items-center gap-1.5 text-gray-700">
            <Gauge className="h-3.5 w-3.5 text-gray-400" />
            {formatOdometer(entry.odometer!)}
          </span>
        )}
        {hasSpecs && <span className="text-gray-500">{entry.specs}</span>}
      </div>

      {hasNotes && (
        <p className="mt-1.5 break-words text-[13px] leading-relaxed text-gray-500 sm:text-sm">
          {entry.notes}
        </p>
      )}
    </div>
  );
}
