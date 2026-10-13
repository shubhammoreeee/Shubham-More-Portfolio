import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/scroll";
import { projects } from "../content";

function Card({ p }) {
  return (
    <article className="card" data-cursor-grow>
      <div className="card__text">
        <h3 className="card__title">{p.title}</h3>
        <p className="card__subtitle">{p.subtitle}</p>
        {p.meta && <p className="card__meta">{p.meta}</p>}
        <ul className="card__bullets">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <figure className="card__media">
        <div className="card__frame">
          <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
        </div>
        <figcaption className="card__caption">Built with {p.stack}</figcaption>
        <div className="card__links">
          {p.links.map((l) => (
            <a
              key={l.label}
              className="u-line"
              href={l.href}
              {...(l.download
                ? { download: true }
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {l.label}
            </a>
          ))}
        </div>
      </figure>
    </article>
  );
}

export default function ProjectsRail() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const root = ref.current;
    const track = root.querySelector(".rail__track");
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      const distance = () => Math.max(0, track.scrollWidth - root.clientWidth);
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
    });
    mm.add("(max-width: 899px)", () => {
      gsap.utils.toArray(".card", root).forEach((card) => {
        gsap.from(card, {
          y: 60,
          autoAlpha: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="rail section-light" ref={ref} data-cursor="dark">
      <div className="rail__track">
        {projects.map((p) => (
          <Card p={p} key={p.title} />
        ))}
      </div>
    </section>
  );
}
