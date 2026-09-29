// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://cv.wilboerht.com';

const locales = [
  { code: 'zh-CN', path: '/CV-cn/' },
  { code: 'zh-TW', path: '/CV-tw/' },
  { code: 'zh-HK', path: '/CV-hk/' },
  { code: 'en', path: '/CV-en/' },
  { code: 'de', path: '/CV-de/' },
  { code: 'ko', path: '/CV-kr/' },
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
        // 保持与页面 dateModified 一致的构建时间戳
        item.lastmod = new Date().toISOString();
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
