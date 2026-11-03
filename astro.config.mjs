// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { CONTENT_LAST_UPDATED } from './src/data/site.ts';

const SITE = 'https://cv.wilboerht.com';

const locales = [
  { code: 'zh-CN', path: '/CV-cn/' },
  { code: 'zh-TW', path: '/CV-tw/' },
  { code: 'zh-HK', path: '/CV-hk/' },
  { code: 'en', path: '/CV-en/' },
  { code: 'de', path: '/CV-de/' },
  { code: 'ko', path: '/CV-kr/' },
  { code: 'ja', path: '/CV-jp/' },
];

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // 排除 noindex 的根页面（它只是重定向入口）
      filter: (page) => page !== `${SITE}/`,
      serialize(item) {
        // 为每个 CV 页面写入 hreflang alternates，与 HTML 中的 hreflang 保持一致
        if (locales.some((l) => item.url === `${SITE}${l.path}`)) {
          item.links = [
            ...locales.map((l) => ({ lang: l.code, url: `${SITE}${l.path}` })),
            { lang: 'x-default', url: `${SITE}/CV-en/` },
          ];
        }
        // 使用统一的内容更新时间，避免每次构建都改变 lastmod
        item.lastmod = CONTENT_LAST_UPDATED;
        return item;
      },
    }),
  ],
  output: 'static',
  build: {
    // 确保严格模式
    format: 'directory',
    assets: 'assets'
  }
});
