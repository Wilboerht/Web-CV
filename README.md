# 个人简历网站 | Personal CV Website

这是一个使用 **Astro** 框架构建的高性能个人简历网站，具备响应式设计、中英文双语支持以及针对打印优化的极简专业布局。

This is a high-performance personal CV website built with **Astro**, featuring responsive design, bilingual support (Chinese & English), and a minimalist professional layout optimized for printing.

[**在线预览 | Demo**](https://cv.wilboerht.cn)

---

## ✨ 核心特性 | Features

- **🚀 极致性能**: 基于 Astro 构建，极小的前端 JS 消耗。
- **📱 响应式布局**: 完美适配手机、平板及超大屏幕显示。
- **🌐 双语支持**: 提供完整的中文 (`/CV-cn`) 与英文 (`/CV-en`) 版本切换。
- **📑 动态交互**: 项目经历部分支持折叠/展开功能。
- **🖨️ 打印优化**: 专门针对纸质打印进行样式调优，支持导出完美 PDF。
- **🛡️ 安全加固**: 预配置了 Content Security Policy (CSP) 及安全响应头。

## 🚀 项目结构 | Project Structure

```text
/
├── public/
│   ├── img/             # 图片及 Logo 资源
│   └── fonts/           # 字体文件
├── src/
│   ├── layouts/         # Astro 布局组件
│   ├── pages/           # 页面路由
│   │   ├── index.astro  # 语言选择首页
│   │   ├── CV-cn.astro  # 简体中文简历
│   │   └── CV-en.astro  # 英文版简历
│   ├── styles/          # 全局 CSS 样式
│   └── components/      # (可选) 可复用组件
├── astro.config.mjs
└── package.json
```

## 🧞 命令 | Commands

所有命令在项目根目录下通过终端运行：

| 命令 | 操作 |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装项目依赖 |
| `npm run dev`             | 启动本地开发服务器 (`localhost:4321`) |
| `npm run build`           | 构建生产环境版本到 `/dist/` 目录 |
| `npm run preview`         | 本地预览构建完成的生产版本 |

## 🛠️ 技术栈 | Tech Stack

- **框架**: [Astro](https://astro.build/)
- **样式**: Vanilla CSS (CSS3) + Flex/Grid
- **字体**: Noto Serif SC, Inter, Serif
- **部署**: Vercel / Nginx

---

## 👨‍💻 作者 | Author

**Wang Hongkun (Wilboerht)**
- Email: [me@wilboerht.cn](mailto:me@wilboerht.cn)
- Website: [wilboerht.cn](https://www.wilboerht.cn)
- GitHub: [@Wilboerht](https://github.com/Wilboerht)

---

Proudly created with **Astro** 🚀
