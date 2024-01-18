import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { AppConfig } from "./src/utils/AppConfig.mjs";

const { url } = AppConfig;

// https://astro.build/config
export default defineConfig({
  site: url,
  integrations: [sitemap()],
  trailingSlash: "always",
});
