import { useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, reducedMotion } from "./lib/scroll";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Ledger from "./components/Ledger";
import ProjectsIntro from "./components/ProjectsIntro";
import ProjectsRail from "./components/ProjectsRail";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const reduce = reducedMotion();
  const [intro, setIntro] = useState(!reduce);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  // Hold the page still while the intro plays.
  useEffect(() => {
    if (!intro) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [intro]);

  // Lenis drives the scroll once the intro is gone; GSAP's ticker drives Lenis.
  useEffect(() => {
    if (intro || reduce) return;
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, [intro, reduce]);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh, { once: true });
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <>
      {intro && <Preloader onDone={() => setIntro(false)} />}
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero reduce={reduce} ready={!intro} />
        <About reduce={reduce} />
        <Ledger reduce={reduce} />
        <ProjectsIntro reduce={reduce} />
        <ProjectsRail reduce={reduce} />
        <Contact reduce={reduce} />
      </main>
      <Footer reduce={reduce} />
    </>
  );
}
