import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { AppConfig } from "./src/utils/AppConfig";

const { site } = AppConfig;

// https://astro.build/config
export default defineConfig({
    site,
    integrations: [sitemap()],
    trailingSlash: 'always'
  });
