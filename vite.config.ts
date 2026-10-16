import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { companiesHouseDisclosure } from "./src/content/companiesHouseDisclosure";

function outreachNoticeHtml(): Plugin {
  const block = `<template id="business-outreach-source"><section id="business-outreach"><h2>Sources</h2><p>${companiesHouseDisclosure}</p></section></template>`;
  return {
    name: "outreach-notice-html",
    transformIndexHtml(html) {
      return html.replace("</body>", `${block}</body>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), outreachNoticeHtml()],
});
