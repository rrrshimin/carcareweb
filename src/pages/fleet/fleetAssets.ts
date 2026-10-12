import type { FleetLocaleId } from "./fleetContent";

export interface FleetImages {
  fleet: string;
  vehicle: string;
  log: string;
  inspections: string;
  analytics: string;
  analyticsVehicle: string;
}

type ImageModule = { default: string };

/**
 * Loaded per locale so a US visit does not download the UK and French screens.
 * Not used: *-garage.PNG (vehicle list, not a bulk-mileage form), US-shared-car.PNG
 * and FR-shared-car.PNG (browser chrome). UK-shared-car.PNG does not exist.
 * No documents screenshot exists in any locale.
 */
export function loadFleetImages(id: FleetLocaleId): Promise<FleetImages> {
  if (id === "uk") {
    return pack(
      import("../../assets/fleet-assets/UK-fleet.PNG"),
      import("../../assets/fleet-assets/UK-car-inner.PNG"),
      import("../../assets/fleet-assets/UK-log-view.PNG"),
      import("../../assets/fleet-assets/UK-inspections.PNG"),
      import("../../assets/fleet-assets/UK-analytics.PNG"),
      import("../../assets/fleet-assets/UK-analytics-per-vehicle.PNG"),
    );
  }
  if (id === "fr") {
    return pack(
      import("../../assets/fleet-assets/FR-fleet.PNG"),
      import("../../assets/fleet-assets/FR-car-inner.PNG"),
      import("../../assets/fleet-assets/FR-log-view.PNG"),
      import("../../assets/fleet-assets/FR-inspections.PNG"),
      import("../../assets/fleet-assets/FR-analytics.PNG"),
      import("../../assets/fleet-assets/FR-analytics-per-vehicle.PNG"),
    );
  }
  return pack(
    import("../../assets/fleet-assets/US-fleet.PNG"),
    import("../../assets/fleet-assets/US-car-inner.PNG"),
    import("../../assets/fleet-assets/US-log-view.PNG"),
    import("../../assets/fleet-assets/US-inspections.PNG"),
    import("../../assets/fleet-assets/US-analytics.PNG"),
    import("../../assets/fleet-assets/US-analytics-per-vehicle.PNG"),
  );
}

function pack(
  fleet: Promise<ImageModule>,
  vehicle: Promise<ImageModule>,
  log: Promise<ImageModule>,
  inspections: Promise<ImageModule>,
  analytics: Promise<ImageModule>,
  analyticsVehicle: Promise<ImageModule>,
): Promise<FleetImages> {
  return Promise.all([fleet, vehicle, log, inspections, analytics, analyticsVehicle]).then(
    ([fleetImage, vehicleImage, logImage, inspectionsImage, analyticsImage, analyticsVehicleImage]) => ({
      fleet: fleetImage.default,
      vehicle: vehicleImage.default,
      log: logImage.default,
      inspections: inspectionsImage.default,
      analytics: analyticsImage.default,
      analyticsVehicle: analyticsVehicleImage.default,
    }),
  );
}
