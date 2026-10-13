# Shubham More — Portfolio

Cinematic single-page portfolio built with React (Vite), GSAP ScrollTrigger and Lenis.

## Run
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Editing
- All text, links and project data live in `src/content.js`.
- Hero: `public/hero.jpg` (the study scene) and `public/hero-cutout.webp` (the same scene with only
  the person kept, so the big name sits between the room and you). Both are built from
  `public/bg-portrait.png` by `python scripts/make-hero.py` (needs `pip install "rembg[cpu]"`).
- Project screenshots and the resume PDF are in `public/`.

## Structure
`src/components/`: Preloader, Navbar, MenuOverlay, Cursor, Hero, About, Ledger,
ProjectsIntro, ProjectsRail, Contact, Footer. Styles are plain CSS in `src/index.css`.
