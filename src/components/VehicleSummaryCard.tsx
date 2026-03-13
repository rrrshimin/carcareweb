import { useState } from "react";
import { Car, Fuel, Gauge, Settings2 } from "lucide-react";
import { formatOdometer } from "../lib/format";
import type { PublicVehicle } from "../lib/types";

export function VehicleSummaryCard({ vehicle }: { vehicle: PublicVehicle }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = !!vehicle.imageUrl && !imgFailed;
  const details = buildDetails(vehicle);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      {showImage ? (
        <img
          src={vehicle.imageUrl!}
          alt={vehicle.displayName}
          className="h-44 w-full object-cover sm:h-52 lg:h-48"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="flex h-44 items-center justify-center bg-gray-100 sm:h-52 lg:h-48">
          <Car className="h-14 w-14 text-gray-300" />
        </div>
      )}

      <div className="px-5 py-4">
        <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
          {vehicle.displayName}
        </h1>

        {details.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {details.map((d) => (
              <div key={d.label} className="flex items-center gap-2">
                {d.icon}
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wide text-gray-400">
                    {d.label}
                  </p>
                  <p className="truncate text-sm font-medium text-gray-700">
                    {d.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function buildDetails(v: PublicVehicle) {
  const out: { label: string; value: string; icon: React.ReactNode }[] = [];

  if (v.fuelType)
    out.push({
      label: "Fuel",
      value: v.fuelType,
      icon: <Fuel className="h-4 w-4 shrink-0 text-blue-500" />,
    });

  if (v.transmission)
    out.push({
      label: "Transmission",
      value: v.transmission,
      icon: <Settings2 className="h-4 w-4 shrink-0 text-blue-500" />,
    });

  if (v.currentOdometer != null)
    out.push({
      label: "Odometer",
      value: formatOdometer(v.currentOdometer),
      icon: <Gauge className="h-4 w-4 shrink-0 text-blue-500" />,
    });

  return out;
}
