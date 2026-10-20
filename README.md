# MacDuvy

Marketing site for [macduvy.com](https://macduvy.com) — rebuilt from the original Figma Make design as a static Vite + React + Tailwind site.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs static site to dist/
```

Pages: `/` (home) and `/about/` (built as separate HTML entry points so each has its own SEO meta + JSON-LD).

## Contact form

Set your Tally form ID in `src/config.ts` (`tallyFormId`). Until it's set, the contact section shows an email button.

## Deploy (Cloudflare Pages)

- Framework preset: **Vite** (or None)
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22 (from `.node-version`)

Custom domain: Pages project → Custom domains → add `macduvy.com` (and `www.macduvy.com`).
`robots.txt`, `sitemap.xml` and `_headers` live in `public/` and are served from the site root.
