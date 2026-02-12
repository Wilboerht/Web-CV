# Personal CV Website

This is a high-performance personal CV website built with **Astro**, featuring responsive design, bilingual support (Chinese & English), and a minimalist professional layout optimized for printing.

[**Live Demo**](https://cv.wilboerht.cn)

---

## Features

- **High Performance**: Built with Astro for minimal frontend JS overhead.
- **Responsive Layout**: Perfectly adapted for mobile, tablet, and ultra-wide screens.
- **Bilingual Support**: Complete support for switching between Chinese (`/CV-cn`) and English (`/CV-en`) versions.
- **Dynamic Interaction**: Collapsible sections for project experience.
- **Print Optimized**: Styles tuned specifically for printing to export perfect PDFs.
- **Security Hardened**: Pre-configured with Content Security Policy (CSP) and security headers.

## Project Structure

```text
/
├── public/
│   ├── img/             # Images and Logo assets
│   └── fonts/           # Font files
├── src/
│   ├── layouts/         # Astro layout components
│   ├── pages/           # Page routes
│   │   ├── index.astro  # Language selection landing page
│   │   ├── CV-cn.astro  # Simplified Chinese CV
│   │   └── CV-en.astro  # English CV
│   ├── styles/          # Global CSS styles
│   └── components/      # (Optional) Reusable components
├── astro.config.mjs
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: Vanilla CSS (CSS3) + Flex/Grid
- **Fonts**: Noto Serif SC, Inter, Serif
- **Deployment**: Vercel / Nginx

---

## Author

**Wang Hongkun (Wilboerht)**
- Email: [me@wilboerht.cn](mailto:me@wilboerht.cn)
- Website: [wilboerht.cn](https://www.wilboerht.cn)
- GitHub: [@Wilboerht](https://github.com/Wilboerht)

---

Proudly created with **Astro**
