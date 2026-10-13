# Shubham More — Portfolio

Cinematic single-page portfolio built with React 19, Vite, GSAP ScrollTrigger and Lenis.

## Run
```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```
Needs Node 20.19 or newer (`.nvmrc` pins 22).

## Deploy
- **Vercel:** import the repo; `vercel.json` sets the Vite build, `dist/` output and cache headers.
- **Netlify:** import the repo; `netlify.toml` does the same.

## Editing
- All text, links, experience and project data live in `src/content.js`.
- Files in `public/` are served as-is at the site root. Names are case-sensitive on the server,
  so keep `public/Shubham_More_Resume.pdf` spelled exactly like that when you replace it.
- Project screenshots: add a `.webp` (around 800px wide) to `public/` and set `image` on the project.
- Hero: `public/hero.jpg` (the study scene) and `public/hero-cutout.webp` (the same scene with only the
  person kept, so the big name sits between the room and you). Both are generated from
  `source-assets/bg-portrait.png` with `python scripts/make-hero.py` (needs `pip install "rembg[cpu]"`).
- `source-assets/` holds full-size originals that are not deployed.

## Structure
```
src/
  content.js          all copy and data
  main.jsx            entry, self-hosted fonts
  App.jsx             intro, Lenis smooth scroll, section order
  index.css           all styles
  lib/scroll.js       GSAP + ScrollTrigger setup, scroll helpers
  components/         Preloader, Navbar, MenuOverlay, Cursor, Hero, About, Ledger,
                      ProjectsIntro, ProjectsRail, Contact, Footer
public/               images, icons, resume, APK
scripts/make-hero.py  builds the hero images
source-assets/        originals (not deployed)
```
