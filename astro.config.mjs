import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { AppConfig } from "./src/utils/AppConfig.mjs";

const { site } = AppConfig;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap()],
  trailingSlash: "always",
});
