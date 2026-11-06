import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { companiesHouseDisclosure } from "./src/content/companiesHouseDisclosure";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const frPocBuild = process.env.FR_POC === "1";

function generateFrProdRegistryPlugin(): Plugin {
  return {
    name: "generate-fr-prod-registry",
    buildStart() {
      const r = spawnSync(process.execPath, [path.join(projectRoot, "scripts/generate-fr-registry-prod.mjs")], {
        cwd: projectRoot,
        stdio: "inherit",
        env: process.env,
      });
      if (r.status !== 0) {
        throw new Error("generate-fr-registry-prod.mjs failed");
      }
    },
    configureServer() {
      const r = spawnSync(process.execPath, [path.join(projectRoot, "scripts/generate-fr-registry-prod.mjs")], {
        cwd: projectRoot,
        stdio: "inherit",
        env: process.env,
      });
      if (r.status !== 0) {
        throw new Error("generate-fr-registry-prod.mjs failed");
      }
    },
  };
}

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
  plugins: [generateFrProdRegistryPlugin(), react(), tailwindcss(), outreachNoticeHtml()],
  define: {
    "import.meta.env.VITE_FR_POC": JSON.stringify(frPocBuild),
  },
  resolve: {
    alias: {
      "@fr-poc-routes": path.resolve(
        projectRoot,
        frPocBuild ? "src/fr-poc/extraRoutes.tsx" : "src/fr-poc/extraRoutes.prod.pick.ts",
      ),
      "@fr-poc-hub-registry": path.resolve(
        projectRoot,
        frPocBuild ? "src/fr-poc/frBlogRegistry.preview.ts" : "src/fr-poc/frBlogRegistry.prod.ts",
      ),
    },
  },
  ssr: {
    noExternal: ["react-router", "react-router-dom"],
  },
});
