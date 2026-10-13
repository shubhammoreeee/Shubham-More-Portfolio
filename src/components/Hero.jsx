import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reducedMotion, fitText } from "../lib/scroll";
import { hero, site } from "../content";

function Layer({ lit, measureRef }) {
  return (
    <div className={`hero__layer ${lit ? "hero__layer--lit" : ""}`} aria-hidden={lit}>
      <div className="hero__photo">
        <img src={site.portrait} alt={lit ? "" : `Portrait of ${site.name}`} />
      </div>
      <div className="hero__title-wrap">
        <h1 className="hero__title" ref={measureRef}>
          {site.name.split("").map((c, i) => (
            <span className="hero__char-mask" key={i}>
              <span className="hero__char">{c === " " ? " " : c}</span>
            </span>
          ))}
        </h1>
      </div>
      {/* Same photo with the backdrop removed, so the head sits in front of the name. */}
      <div className="hero__photo hero__photo--cutout">
        <img src={site.portraitCutout} alt="" />
      </div>
    </div>
  );
}

export default function Hero({ ready }) {
  const ref = useRef(null);
  const measure = useRef(null);

  // Title spans the full width in both layers at the same size.
  useLayoutEffect(() => {
    const fit = () => fitText(ref.current, measure.current, "--hero-fs");
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  // Spotlight: lerp toward the pointer, drift on its own when idle.
  useEffect(() => {
    const root = ref.current;
    const lit = root.querySelector(".hero__layer--lit");
    const still = reducedMotion();
    const rect = () => root.getBoundingClientRect();
    const target = { x: innerWidth * 0.5, y: innerHeight * 0.45 };
    const pos = { ...target };
    let lastInput = -Infinity;
    let raf;
    let running = false;

    const setFromClient = (cx, cy) => {
      const r = rect();
      target.x = cx - r.left;
      target.y = cy - r.top;
      lastInput = performance.now();
    };
    const onMove = (e) => setFromClient(e.clientX, e.clientY);
    const onTouch = (e) => {
      const t = e.touches[0];
      if (t) setFromClient(t.clientX, t.clientY);
    };

    const tick = (now) => {
      const r = rect();
      if (!still && now - lastInput > 2200) {
        const t = now / 1000;
        target.x = r.width * (0.5 + 0.22 * Math.sin(t * 0.45));
        target.y = r.height * (0.45 + 0.16 * Math.sin(t * 0.7 + 1.3));
      }
      const k = still ? 1 : 0.09;
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;
      lit.style.setProperty("--x", `${pos.x}px`);
      lit.style.setProperty("--y", `${pos.y}px`);
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(root);
    root.addEventListener("mousemove", onMove, { passive: true });
    root.addEventListener("touchstart", onTouch, { passive: true });
    root.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("touchstart", onTouch);
      root.removeEventListener("touchmove", onTouch);
    };
  }, []);

  // Entrance once the preloader has lifted.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!ready) {
        gsap.set(".hero__char", { yPercent: 110 });
        gsap.set(".hero__hint, .hero__tagline", { autoAlpha: 0 });
        return;
      }
      const d = reducedMotion() ? 0.01 : 1.2;
      gsap.fromTo(
        ".hero__char",
        { yPercent: 110 },
        { yPercent: 0, duration: d, ease: "power4.out", stagger: 0.04 }
      );
      gsap.fromTo(
        ".hero__hint, .hero__tagline",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: d, delay: d * 0.5 }
      );
    }, ref);
    return () => ctx.revert();
  }, [ready]);

  return (
    <section id="home" className="hero" ref={ref} data-cursor="light">
      <Layer measureRef={measure} />
      <Layer lit />
      <div className="hero__vignette" />
      <p className="hero__hint">{hero.hint}</p>
      <p className="hero__tagline">{hero.tagline}</p>
    </section>
  );
}
