import { useLayoutEffect, useRef } from "react";
import { gsap, fitText, reducedMotion } from "../lib/scroll";
import { site } from "../content";

export default function Footer() {
  const ref = useRef(null);
  const measure = useRef(null);

  useLayoutEffect(() => {
    const fit = () => fitText(ref.current, measure.current, "--footer-fs");
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);
    const ctx = gsap.context(() => {
      gsap.from(".footer__char", {
        yPercent: 105,
        duration: reducedMotion() ? 0.01 : 1.1,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => {
      window.removeEventListener("resize", fit);
      ctx.revert();
    };
  }, []);

  return (
    <footer className="footer" ref={ref}>
      <p className="footer__credit">{site.credit}</p>
      <div className="footer__name-wrap">
        <p className="footer__name" ref={measure} aria-label={site.name}>
          {site.name.split("").map((c, i) => (
            <span className="footer__char" key={i} aria-hidden="true">
              {c === " " ? " " : c}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
