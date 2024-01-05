import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.nowdeparting.nyc',
    integrations: [sitemap()],
    trailingSlash: 'always'
  });
