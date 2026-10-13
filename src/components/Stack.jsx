import { useLayoutEffect, useRef } from "react";
import Lines from "./Lines";
import { gsap } from "../lib/scroll";
import { statements } from "../content";

export default function Stack() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stack__path",
        { strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 70%", end: "bottom 40%", scrub: 0.6 },
        }
      );
      gsap.utils.toArray(".stack__item .display").forEach((h) => {
        gsap.fromTo(
          h,
          { "--stmt": "#3a3a3a" },
          {
            "--stmt": "#ffffff",
            ease: "none",
            scrollTrigger: { trigger: h, start: "top 90%", end: "top 50%", scrub: true },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="stack section-dark" ref={ref}>
      <svg className="stack__curve" viewBox="0 0 1000 2400" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="stack__path"
          pathLength="1"
          vectorEffect="non-scaling-stroke"
          d="M10 0 C 40 260, 340 380, 820 540 C 1060 620, 1020 900, 620 1080 C 240 1250, -20 1420, 60 1700 C 120 1930, 260 2120, 180 2400"
        />
      </svg>
      {statements.map((s, i) => (
        <article className={`stack__item stack__item--${i % 2 ? "offset" : "start"}`} key={s.lines.join()}>
          <Lines lines={s.lines} as="h3" className="display" />
          <p className="stack__body reveal-fade">{s.body}</p>
        </article>
      ))}
    </section>
  );
}
