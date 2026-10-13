import { campaignUtms, measurementUrl, prepareMeasurementEvent } from "../src/lib/fleetMeasurement.ts";

const utms = campaignUtms(
  "?utm_source=qr&utm_medium=print&utm_campaign=fleet&utm_term=a@b.com&email=person@example.com&gclid=abc",
);
if (utms.utm_source !== "qr" || utms.utm_medium !== "print" || utms.utm_campaign !== "fleet") {
  throw new Error(`UTMs were not kept: ${JSON.stringify(utms)}`);
}
if ("utm_term" in utms || "email" in utms || "gclid" in utms) {
  throw new Error(`Personal or non-campaign parameters leaked: ${JSON.stringify(utms)}`);
}

const cleaned = measurementUrl(
  "https://www.carcarediary.com/fleet-uk?utm_source=qr&email=person@example.com#store",
);
if (cleaned !== "https://www.carcarediary.com/fleet-uk?utm_source=qr") {
  throw new Error(`URL was not reduced to campaign parameters: ${cleaned}`);
}

const pageview = prepareMeasurementEvent({
  event: "$pageview",
  properties: {
    $current_url: "https://www.carcarediary.com/fleet-fr?utm_campaign=print&email=person@example.com",
    $referrer: "https://example.com/path?user=person@example.com",
    locale: "fr-FR",
    note: "person@example.com",
  },
});
if (pageview?.properties?.$current_url !== "https://www.carcarediary.com/fleet-fr?utm_campaign=print") {
  throw new Error("page URL was not sanitized");
}
if (pageview?.properties?.$referrer !== "https://example.com/path") {
  throw new Error("referrer query was not removed");
}
if ("note" in (pageview?.properties ?? {})) {
  throw new Error("email-like property was kept");
}

for (const event of ["$identify", "$autocapture", "$snapshot", "$heatmap"]) {
  if (prepareMeasurementEvent({ event, properties: {} }) !== null) {
    throw new Error(`${event} was not dropped`);
  }
}

const click = prepareMeasurementEvent({
  event: "store_click",
  properties: { locale: "en-US", platform: "app_store", utm_source: "qr" },
});
if (click?.properties?.platform !== "app_store") {
  throw new Error("store_click was dropped");
}

const nested = prepareMeasurementEvent({
  event: "$pageview",
  properties: {
    $current_url: "https://www.carcarediary.com/fleet-us?utm_source=audit&email=person@example.com",
    $search: "?utm_source=audit&email=person@example.com",
    $raw_user_agent: "Mozilla/5.0",
    $initial_referrer_info: {
      referrer: "https://mail.example/view?user=person@example.com&utm_medium=email",
    },
    locale: "en-US",
  },
});
const nestedProps = nested?.properties ?? {};
if ("$raw_user_agent" in nestedProps || "$search" in nestedProps || "$initial_referrer_info" in nestedProps) {
  throw new Error(`automatic property was kept: ${JSON.stringify(nestedProps)}`);
}
if (String(nestedProps.$current_url).includes("email")) throw new Error("current url leaked email");

const automatic = prepareMeasurementEvent({
  event: "$pageview",
  properties: {
    token: "phc_test",
    distinct_id: "$posthog_cookieless",
    $browser: "Chrome",
    $os: "Windows",
    $screen_width: 800,
    gclid: "click-id-123",
    fbclid: "social-id",
    $current_url: "https://www.carcarediary.com/fleet-us?utm_source=audit&gclid=click-id-123&email=person@example.com",
    locale: "en-US",
    $process_person_profile: false,
  },
});
const automaticProps = automatic?.properties ?? {};
if (automaticProps.token !== "phc_test") throw new Error("project token was removed");
if (automaticProps.distinct_id !== "$posthog_cookieless") throw new Error("cookieless id was removed");
if ("gclid" in automaticProps || "fbclid" in automaticProps || "$browser" in automaticProps || "$os" in automaticProps) {
  throw new Error(`device or click id leaked: ${JSON.stringify(automaticProps)}`);
}
if (String(automaticProps.$current_url).includes("gclid") || String(automaticProps.$current_url).includes("email")) {
  throw new Error(`current url kept a non-campaign parameter: ${automaticProps.$current_url}`);
}
const identified = prepareMeasurementEvent({
  event: "$pageview",
  properties: { distinct_id: "user-123", token: "phc_test" },
});
if ("distinct_id" in (identified?.properties ?? {})) throw new Error("real distinct id was kept");

console.log("fleet measurement checks passed");
