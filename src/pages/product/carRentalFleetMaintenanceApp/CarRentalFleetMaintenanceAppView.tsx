import { Bell, Car, Gauge, History, Share2, StickyNote } from "lucide-react";
import { SmbFleetPageView } from "../shared/SmbFleetPageView";
import type { SmbFleetPageCopy } from "../shared/smbFleetPageTypes";

const featureIcons = [Car, Gauge, Bell, StickyNote, History, Share2] as const;

export function CarRentalFleetMaintenanceAppView({ copy }: { copy: SmbFleetPageCopy }) {
  return <SmbFleetPageView copy={copy} featureIcons={featureIcons} />;
}