import { Bell, Gauge, History, Share2, StickyNote, Wrench } from "lucide-react";
import { SmbFleetPageView } from "../shared/SmbFleetPageView";
import type { SmbFleetPageCopy } from "../shared/smbFleetPageTypes";

const featureIcons = [Wrench, Gauge, StickyNote, Bell, Share2, History] as const;

export function VehicleMaintenanceAppForDealersView({ copy }: { copy: SmbFleetPageCopy }) {
  return <SmbFleetPageView copy={copy} featureIcons={featureIcons} />;
}