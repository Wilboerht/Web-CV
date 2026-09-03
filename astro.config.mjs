// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cv.wilboerht.com',
  integrations: [sitemap()],
  output: 'static',
  build: {
    // 确保严格模式
    format: 'directory',
    assets: 'assets'
  }
});
