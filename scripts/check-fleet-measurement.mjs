import { campaignUtms, isFleetPath } from "../src/lib/fleetMeasurement.ts";

const utms = campaignUtms(
  "?utm_source=qr&utm_medium=print&utm_campaign=fleet&utm_term=a@b.com&email=person@example.com&gclid=abc",
);
if (utms.utm_source !== "qr" || utms.utm_medium !== "print" || utms.utm_campaign !== "fleet") {
  throw new Error(`UTMs were not kept: ${JSON.stringify(utms)}`);
}
if ("utm_term" in utms || "email" in utms || "gclid" in utms) {
  throw new Error(`Personal or non-campaign parameters leaked: ${JSON.stringify(utms)}`);
}

if (!isFleetPath("/fleet-uk") || isFleetPath("/fleet-de")) {
  throw new Error("isFleetPath did not match fleet routes");
}

console.log("fleet measurement checks passed");
