import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/scroll";
import { education, experience, roles, skills } from "../content";

// Roles and the resume table, threaded by one long S-curve. The curve's tip
// tracks a point 60% down the viewport, so it is drawn as you scroll.
export default function Ledger({ reduce }) {
  const ref = useRef(null);
  const path = useRef({ samples: [], total: 1 });

  // Lay the curve out to the section's real size and sample its height
  // against length, so a scroll position maps to a draw fraction.
  useLayoutEffect(() => {
    const root = ref.current;
    const svg = root.querySelector(".curve");
    const p = svg.querySelector("path");
    const layout = () => {
      const w = root.offsetWidth;
      const h = root.offsetHeight;
      const a = w * 0.05;
      const c = w * 0.95;
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      p.setAttribute(
        "d",
        `M ${a} 0 C ${a} ${h * 0.11}, ${c} ${h * 0.09}, ${c} ${h * 0.24} S ${a} ${h * 0.35}, ${a} ${h * 0.49} S ${c} ${h * 0.61}, ${c} ${h * 0.75} S ${w * 0.25} ${h * 0.87}, ${w * 0.5} ${h}`
      );
      const total = p.getTotalLength();
      const samples = [];
      const n = 500;
      for (let i = 0; i <= n; i++) {
        const len = (total * i) / n;
        samples.push([p.getPointAtLength(len).y, len / total]);
      }
      path.current = { samples, total };
    };
    layout();
    ScrollTrigger.addEventListener("refreshInit", layout);
    return () => ScrollTrigger.removeEventListener("refreshInit", layout);
  }, []);

  useLayoutEffect(() => {
    if (reduce) return;
    const root = ref.current;
    const p = root.querySelector(".curve path");
    const ctx = gsap.context(() => {
      const drawn = { v: 0 };
      const paint = () => {
        p.style.strokeDashoffset = String(1 - drawn.v);
      };
      paint();
      const to = gsap.quickTo(drawn, "v", { duration: 0.5, ease: "power3", onUpdate: paint });
      const update = () => {
        const { samples } = path.current;
        const top = root.getBoundingClientRect().top + window.scrollY;
        const tip = window.scrollY + window.innerHeight * 0.6 - top;
        let v = 0;
        if (tip > 0) {
          v = 1;
          for (let i = 0; i < samples.length; i++) {
            if (samples[i][0] >= tip) {
              v = samples[i][1];
              break;
            }
          }
        }
        to(v);
      };
      ScrollTrigger.create({ trigger: root, start: "top bottom", end: "bottom top", onUpdate: update, onRefresh: update });
      update();
      gsap.utils.toArray(".role").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.16 },
          { opacity: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 82%", end: "top 48%", scrub: true } }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="ledger" id="about" ref={ref}>
      <svg className="curve" aria-hidden="true">
        <path pathLength="1" />
      </svg>
      <div className="roles">
        {roles.map((r) => (
          <article className="role" key={r.title}>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </article>
        ))}
      </div>
      <div className="rows">
        <div className="row">
          <h3>Education</h3>
          <div>
            {education.map((e) => (
              <div className="entry" key={e.place}>
                <p className="entry-main">{e.place}</p>
                <p>{e.what}</p>
                {(e.when || e.note) && (
                  <p className="entry-meta">{[e.when, e.note].filter(Boolean).join(", ")}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <h3>Skills</h3>
          <dl className="skills">
            {skills.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="row">
          <h3>Experience</h3>
          <div>
            {experience.map((e) => (
              <div className="entry" key={e.title}>
                <p className="entry-main">{e.title}</p>
                <p className="entry-meta">{e.when}</p>
                <ul className="entry-points">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
