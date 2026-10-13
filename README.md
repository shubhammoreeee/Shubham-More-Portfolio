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
- Hero portrait: `public/SelfImage.jpg`. `public/portrait-cutout.png` is the same photo with the
  backdrop removed (it lets the head sit in front of the big name). Regenerate it if you swap the photo.
- Project screenshots and the resume PDF are in `public/`.

## Structure
`src/components/`: Preloader, Navbar, MenuOverlay, Cursor, Hero, About, Stack, Resume,
ProjectsIntro, ProjectsRail, Contact, Footer. Styles are plain CSS in `src/index.css`.
