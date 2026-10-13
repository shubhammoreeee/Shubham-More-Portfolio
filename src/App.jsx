import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, reducedMotion, setLenis, getLenis } from "./lib/scroll";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import MenuOverlay from "./components/MenuOverlay";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Resume from "./components/Resume";
import ProjectsIntro from "./components/ProjectsIntro";
import ProjectsRail from "./components/ProjectsRail";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const onLoaded = useCallback(() => setLoaded(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Lenis drives the scroll; GSAP's ticker drives Lenis.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    if (reducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // Hold the page still while the preloader plays.
  useEffect(() => {
    document.documentElement.classList.toggle("is-loading", !loaded);
    const lenis = getLenis();
    if (loaded) {
      lenis?.start();
      ScrollTrigger.refresh();
    } else {
      lenis?.stop();
    }
  }, [loaded]);

  // Shared reveals. Runs after every section has made its own pins,
  // so these triggers measure the final layout.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const d = reducedMotion() ? 0.01 : 1;
      gsap.utils.toArray(".reveal-lines").forEach((el) => {
        gsap.from(el.querySelectorAll(".line__inner"), {
          yPercent: 110,
          duration: d * 1.1,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      gsap.utils.toArray(".reveal-fade").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 40,
          duration: d,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    });
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Cursor />
      {!loaded && <Preloader onDone={onLoaded} />}
      <Navbar onMenu={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={closeMenu} />
      <main>
        <Hero ready={loaded} />
        <About />
        <Stack />
        <Resume />
        <ProjectsIntro />
        <ProjectsRail />
        <Contact />
      </main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
