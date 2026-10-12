import QRCode from "qrcode";
import { PNG } from "pngjs";
import jsQR from "jsqr";
import { fleetHandoffUrl } from "../src/pages/fleet/fleetUrl.ts";

const samples = [
  ["https://www.carcarediary.com", "/fleet-us", "?utm_source=outbound&utm_medium=email&utm_campaign=carcare-us&utm_content=default"],
  ["https://www.carcarediary.com", "/fleet-uk", "?utm_source=outbound&utm_medium=email&utm_campaign=carcare-uk-plumbing&utm_content=default"],
  ["https://www.carcarediary.com", "/fleet-fr", "?utm_source=outbound&utm_medium=email&utm_campaign=carcare-fr&utm_content=default#section"],
];

for (const [origin, pathname, search] of samples) {
  const value = fleetHandoffUrl(origin, pathname, search);
  if (value.includes("#") || value.includes("javascript:")) {
    throw new Error(`handoff URL is not a plain page URL: ${value}`);
  }
  if (!value.startsWith(`${origin}${pathname}?utm_`)) {
    throw new Error(`handoff URL dropped the query: ${value}`);
  }
  const buffer = await QRCode.toBuffer(value, {
    errorCorrectionLevel: "Q",
    margin: 2,
    width: 512,
    color: { dark: "#0C111F", light: "#FFFFFF" },
  });
  const png = PNG.sync.read(buffer);
  const decoded = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
  if (decoded?.data !== value) {
    throw new Error(`decoded ${decoded?.data ?? "nothing"} instead of ${value}`);
  }
  console.log(`scanned ${value}`);
}
