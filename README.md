# Scroll Soup — Website

A cinematic, visual-first one-page site for Scroll Soup, a UGC & visual content
studio for hospitality brands. Built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Where things live

- **Logo** — `src/assets/scroll-soup-logo.png` (your uploaded logo, used as-is
  in the navbar and footer). Swap this file to update the logo everywhere.
- **Portfolio videos/photos** — `src/data/portfolio.js`. Each entry has a
  `src` field, currently `null` so the grid shows labeled placeholders. Drop
  your media into `src/assets/` (or point to a hosted URL) and set `src`
  (and `poster` for videos) — the `PortfolioCard` component picks it up
  automatically, no layout changes needed.

- **Colors / type** — all design tokens live at the top of
  `src/styles/global.css` (`--black`, `--lime`, `--font-display`, etc.).

## Structure

```
src/
  components/   one component per section, each with its own .css
  data/         portfolio, filters
  assets/       logo + future media
  hooks/        useReveal — scroll-in-view fade/rise
  styles/       global.css — design tokens + base styles
```

## Notes

- Portfolio media supports both video (autoplay, muted, loop, playsInline)
  and image, in portrait (9:16) or landscape, via the `type` and
  `orientation` fields in `portfolio.js`.
- Clicking a portfolio card opens `MediaViewer`, a lightweight modal — swap
  in real media the same way as the grid.
- Reduced-motion and keyboard focus states are respected throughout.
