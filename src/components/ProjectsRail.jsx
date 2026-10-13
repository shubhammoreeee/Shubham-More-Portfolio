import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/scroll";
import { projects, site } from "../content";

const longestWord = (s) => Math.max(...s.split(/\s+/).map((w) => w.length));

function Case({ p }) {
  const repos = `${site.github}?tab=repositories`;
  const href = p.live || p.repo || repos;
  return (
    <article className="case" style={{ "--ar": p.ratio }}>
      <div className="case-main">
        <header>
          <h3 className={longestWord(p.title) > 9 ? "is-long" : undefined}>{p.title}</h3>
          <p className="case-kind">{p.kind}</p>
          {(p.when || p.role) && <p className="case-meta">{[p.when, p.role].filter(Boolean).join(", ")}</p>}
        </header>
        <ul>
          {p.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </div>
      <div className="case-side">
        <a className="case-shot" href={href} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
          {p.image ? (
            <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" draggable="false" />
          ) : (
            <span className="case-blank" aria-hidden="true">
              {p.title}
            </span>
          )}
        </a>
        <div>
          <p className="case-stack">Built with {p.stack}.</p>
          <div className="case-links">
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer">
                Open live site
              </a>
            )}
            {p.download && (
              <a href={p.download.href} download>
                {p.download.label}
              </a>
            )}
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer">
                View code on GitHub
              </a>
            )}
            {!p.live && !p.repo && !p.download && (
              <a href={repos} target="_blank" rel="noreferrer">
                See repositories on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

// Vertical scroll drives a horizontal slide. The section is as tall as the
// track is wide, and its inner frame is sticky.
export default function ProjectsRail({ reduce }) {
  const ref = useRef(null);
  const track = useRef(null);

  useLayoutEffect(() => {
    if (reduce) return;
    const distance = () => Math.max(0, track.current.scrollWidth - window.innerWidth);
    const size = () => {
      ref.current.style.height = `${distance() + window.innerHeight}px`;
    };
    size();
    ScrollTrigger.addEventListener("refreshInit", size);
    const ctx = gsap.context(() => {
      gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, ref);
    return () => {
      ScrollTrigger.removeEventListener("refreshInit", size);
      ctx.revert();
    };
  }, [reduce]);

  return (
    <section className={`work${reduce ? " work-static" : ""}`} id="work" ref={ref}>
      <div className="work-sticky">
        <div className="work-track" ref={track}>
          {projects.map((p) => (
            <Case p={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
