import { AlertCircle, Bell, Car, Gauge, History, Share2 } from "lucide-react";
import { SmbFleetPageView } from "../shared/SmbFleetPageView";
import type { SmbFleetPageCopy } from "../shared/smbFleetPageTypes";

const featureIcons = [Car, Gauge, Bell, AlertCircle, History, Share2] as const;

export function SmallBusinessFleetManagementAppView({ copy }: { copy: SmbFleetPageCopy }) {
  return <SmbFleetPageView copy={copy} featureIcons={featureIcons} />;
}