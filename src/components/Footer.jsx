import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/scroll";
import { site } from "../content";

export default function Footer({ reduce }) {
  const ref = useRef(null);

  // Letters rise out of their masks, scrubbed to the footer coming into view.
  useLayoutEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.from(".fw-char", {
        yPercent: 105,
        stagger: 0.04,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top 85%", end: "bottom bottom", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <footer className="footer" ref={ref}>
      <p className="footer-note">© 2026 {site.name}. Built with Love and Passion.</p>
      <div className="fw" aria-label={site.name}>
        {site.name
          .toUpperCase()
          .split("")
          .map((c, i) => (
            <span className="fw-mask" aria-hidden="true" key={i}>
              <span className="fw-char">{c === " " ? " " : c}</span>
            </span>
          ))}
      </div>
    </footer>
  );
}
