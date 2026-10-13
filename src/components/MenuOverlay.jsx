import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reducedMotion, scrollToTarget, getLenis } from "../lib/scroll";
import { nav, site } from "../content";

export default function MenuOverlay({ open, onClose }) {
  const ref = useRef(null);
  const tl = useRef(null);
  const pending = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const fast = reducedMotion();
      tl.current = gsap
        .timeline({
          paused: true,
          onReverseComplete: () => {
            gsap.set(ref.current, { visibility: "hidden" });
            if (pending.current) {
              scrollToTarget(pending.current);
              pending.current = null;
            }
          },
        })
        .set(ref.current, { visibility: "visible" })
        .fromTo(
          ref.current,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: fast ? 0.01 : 0.9, ease: "power4.inOut" }
        )
        .from(
          ".menu__link-inner",
          { yPercent: 110, duration: fast ? 0.01 : 0.9, stagger: 0.07, ease: "power4.out" },
          "-=0.35"
        )
        .from(".menu__foot, .menu__close", { autoAlpha: 0, y: 12, duration: 0.5 }, "-=0.6");
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      tl.current.timeScale(1).play();
    } else {
      lenis?.start();
      tl.current.timeScale(1.6).reverse();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const go = (e, target) => {
    e.preventDefault();
    pending.current = target;
    onClose();
  };

  return (
    <div className="menu" ref={ref} aria-hidden={!open} data-cursor="menu">
      <div className="menu__top">
        <span className="menu__logo">{site.name}</span>
        <button className="menu__close" onClick={onClose}>
          {nav.close}
        </button>
      </div>
      <nav className="menu__links">
        {nav.links.map((l) => (
          <a key={l.label} href={l.target} className="menu__link" onClick={(e) => go(e, l.target)}>
            <span className="menu__link-inner">{l.label}</span>
          </a>
        ))}
      </nav>
      <div className="menu__foot">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.resume} className="u-line" download>
          {nav.resumeLabel}
        </a>
      </div>
    </div>
  );
}
