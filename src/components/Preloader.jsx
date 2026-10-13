import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/scroll";
import { site } from "../content";

export default function Preloader({ onDone }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ onComplete: onDone })
        .from(".il-char", { yPercent: 115, duration: 0.8, stagger: 0.05, ease: "power3.out" })
        .from(".il-rule", { scaleX: 0, duration: 0.9, ease: "power2.inOut" }, "-=0.35")
        .from(".il-sub", { opacity: 0, y: 10, duration: 0.6 }, "-=0.5")
        .to({}, { duration: 0.55 })
        .to(ref.current, { yPercent: -100, duration: 1, ease: "power4.inOut" });
    }, ref);
    return () => ctx.revert();
  }, [onDone]);

  return (
    <div className="intro" ref={ref} aria-hidden="true">
      <div className="il-name">
        {site.name.split("").map((c, i) => (
          <span className="il-mask" key={i}>
            <span className="il-char">{c === " " ? " " : c}</span>
          </span>
        ))}
      </div>
      <div className="il-rule" />
      <p className="il-sub">{site.location}</p>
    </div>
  );
}
