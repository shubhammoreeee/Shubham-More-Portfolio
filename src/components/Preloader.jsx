import { useLayoutEffect, useRef } from "react";
import { gsap, reducedMotion } from "../lib/scroll";
import { site } from "../content";

export default function Preloader({ onDone }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const root = ref.current;
    const ctx = gsap.context(() => {
      if (reducedMotion()) {
        gsap.to(root, { autoAlpha: 0, duration: 0.4, delay: 0.3, onComplete: onDone });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: "power4.out" }, onComplete: onDone });
      tl.from(".preloader__char", { yPercent: 110, duration: 1.1, stagger: 0.045 }, 0.2)
        .from(".preloader__line", { scaleX: 0, duration: 1.2, ease: "power3.inOut" }, 0.7)
        .from(".preloader__sub", { autoAlpha: 0, y: 8, duration: 0.9 }, 1.2)
        .to(".preloader__inner", { autoAlpha: 0, y: -30, duration: 0.7, ease: "power2.in" }, "+=0.7")
        .to(root, { yPercent: -100, duration: 1.1, ease: "power4.inOut" }, "-=0.2");
    }, root);
    return () => ctx.revert();
  }, [onDone]);

  return (
    <div className="preloader" ref={ref} aria-hidden="true">
      <div className="preloader__inner">
        <div className="preloader__name">
          {site.name.split("").map((c, i) => (
            <span className="preloader__mask" key={i}>
              <span className="preloader__char">{c === " " ? " " : c}</span>
            </span>
          ))}
        </div>
        <span className="preloader__line" />
        <span className="preloader__sub">{site.location}</span>
      </div>
    </div>
  );
}
