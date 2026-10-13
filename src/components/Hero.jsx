import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/scroll";
import { hero, site } from "../content";

// One layer of the hero: the room, the name, then the person cut out of the
// same photo on top, so the name sits between the wall and the person.
function Stack({ lit }) {
  return (
    <div className={`hstack ${lit ? "hstack-lit" : "hstack-base"}`} aria-hidden="true">
      <img className="hs-img hs-bg" src={site.heroImage} alt="" draggable="false" />
      <div className="hs-name">
        <span>{site.first}</span> <span>{site.last}</span>
      </div>
      <img className="hs-img hs-person" src={site.heroCutout} alt="" draggable="false" />
    </div>
  );
}

export default function Hero({ reduce, ready }) {
  const runway = useRef(null);
  const stage = useRef(null);
  const light = useRef({ x: 0, y: 0, r: 1 });

  // Spotlight follows the pointer and opens up while it is over the hero.
  useLayoutEffect(() => {
    const el = stage.current;
    const l = light.current;
    const hover = window.matchMedia("(hover: hover)").matches;
    const paint = () => {
      el.style.setProperty("--mx", `${l.x}px`);
      el.style.setProperty("--my", `${l.y}px`);
      el.style.setProperty("--r", `${Math.max(1, l.r)}px`);
    };
    l.paint = paint;
    l.hover = false;
    l.x = innerWidth * 0.5;
    l.y = innerHeight * 0.36;
    l.r = reduce || !hover ? Math.max(innerWidth, innerHeight) * 0.8 : 1;
    paint();
    if (reduce) return;

    const toX = gsap.quickTo(l, "x", { duration: 0.45, ease: "power3", onUpdate: paint });
    const toY = gsap.quickTo(l, "y", { duration: 0.45, ease: "power3", onUpdate: paint });
    const radius = (r) =>
      gsap.to(l, { r, duration: 0.6, ease: "power3.out", onUpdate: paint, overwrite: "auto" });
    const rect = () => el.getBoundingClientRect();
    const inside = (x, y) => {
      const b = rect();
      return x >= b.left && x <= b.right && y >= b.top && y <= b.bottom;
    };
    const stopSweep = () => {
      l.sweep?.kill();
      l.sweep = null;
    };
    const onMove = (e) => {
      l.seen = true;
      l.px = e.clientX;
      l.py = e.clientY;
      const b = rect();
      if (inside(e.clientX, e.clientY)) {
        stopSweep();
        toX(e.clientX - b.left);
        toY(e.clientY - b.top);
        if (!l.hover) {
          l.hover = true;
          radius(260);
        }
      } else if (l.hover) {
        l.hover = false;
        radius(1);
      }
    };
    const onLeave = () => {
      if (l.hover) {
        l.hover = false;
        radius(1);
      }
    };
    const onTouch = (e) => {
      const t = e.touches[0];
      if (!t) return;
      const b = rect();
      toX(t.clientX - b.left);
      toY(t.clientY - b.top);
      radius(220);
    };

    if (hover) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
    } else {
      el.addEventListener("touchstart", onTouch, { passive: true });
      el.addEventListener("touchmove", onTouch, { passive: true });
    }
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onTouch);
      el.removeEventListener("touchmove", onTouch);
    };
  }, [reduce]);

  // After the intro lifts: open the light where the pointer already is, or
  // sweep it once across the portrait as a hint.
  useEffect(() => {
    if (!ready || reduce || !window.matchMedia("(hover: hover)").matches) return;
    const l = light.current;
    const el = stage.current;
    if (l.hover) return;
    if (l.seen && l.px != null) {
      const b = el.getBoundingClientRect();
      if (l.px >= b.left && l.px <= b.right && l.py >= b.top && l.py <= b.bottom) {
        l.hover = true;
        l.x = l.px - b.left;
        l.y = l.py - b.top;
        gsap.to(l, { r: 260, duration: 0.8, ease: "power3.out", onUpdate: l.paint });
        return;
      }
    }
    const w = innerWidth;
    const tl = gsap.timeline({
      delay: 0.3,
      onUpdate: l.paint,
      onComplete: () => {
        l.sweep = null;
      },
    });
    tl.fromTo(l, { x: w * 0.3 }, { x: w * 0.55, duration: 2.2, ease: "power2.inOut" }, 0)
      .fromTo(l, { r: 1 }, { r: 300, duration: 1, ease: "power3.out" }, 0)
      .to(l, { r: 1, duration: 1.1, ease: "power3.in" }, 1.5);
    l.sweep = tl;
    return () => {
      tl.kill();
      l.sweep = null;
    };
  }, [ready, reduce]);

  // Scrolling through the runway: the photo pushes in, the name drifts up
  // behind the person (the parallax), then the stage fades to black.
  useLayoutEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: { trigger: runway.current, start: "top top", end: "bottom bottom", scrub: true },
        })
        .to(".hero-photo", { scale: 1.14, ease: "none" }, 0)
        .to(".hs-name", { yPercent: -14, ease: "none" }, 0)
        .to(".hero-fade", { opacity: 1, ease: "none" }, 0.2);
    }, runway);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <div className="hero-runway" ref={runway} id="top">
      <section className="hero-stage" ref={stage} aria-label={`Portrait of ${site.name}`}>
        <div className="hero-photo">
          <Stack />
          <Stack lit />
        </div>
        <h1 className="sr-only">{site.name}</h1>
        <p className="hero-cap">{site.tagline}</p>
        <div className="hero-fade" />
        <p className="hero-hint">{hero.hint}</p>
      </section>
    </div>
  );
}
