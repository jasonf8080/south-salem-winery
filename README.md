# South Salem Winery — Website

Vite + React 18 + Tailwind + GSAP marketing site for South Salem Winery.

## Run it locally

```
npm install
npm run dev
```

Opens at `http://localhost:5173`. `npm run build` produces a production build in `dist/`; `npm run preview` serves that build locally.

## Structure

- `src/data.js` — every piece of site copy (business info, wines, services, hours, gallery, partner content) lives here as plain data. Edit this file to change text without touching components.
- `src/components/` — feature folders (Navbar, Footer, SEO, Home, About, Wines, Gallery, Contact), each with a barrel `index.js`.
- `src/pages/` — one file per route, assembling components and setting per-page SEO.
- `public/images/` — all photos, already compressed to WebP (100–300KB each) and renamed to SEO-friendly filenames.
- `public/_redirects` — required for Netlify so refreshing on `/about`, `/wines`, etc. doesn't 404.

## Deploying to Netlify

Connect the repo (or drag-and-drop the `dist/` folder after `npm run build`) in Netlify. Build command: `npm run build`. Publish directory: `dist`. The `_redirects` file is copied into `dist/` automatically by Vite — no extra Netlify config needed.

## Before you launch — see NOTES-before-launch.md

A few things need your input before this goes live (domain, social links, a couple of photo calls). Details in that file.
