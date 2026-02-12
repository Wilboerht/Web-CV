// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 生产环境下启用安全措施和最佳实践
  server: {
    headers: {
      // HTTPS相关安全头
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      // 禁止MIME类型嗅探
      'X-Content-Type-Options': 'nosniff',
      // 防止点击劫持
      'X-Frame-Options': 'DENY',
      // 设置引用策略
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // 权限策略
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      // 老式XSS保护，虽然现代浏览器可能忽略，但对旧浏览器有用
      'X-XSS-Protection': '1; mode=block',
    }
  },
  // 确保静态生成选项
  output: 'static',
  build: {
    // 确保严格模式
    format: 'directory',
    assets: 'assets'
  }
});
