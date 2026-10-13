import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/scroll";
import { projectsIntro, site } from "../content";

// The black plate has the word cut out of it, so the portrait shows through
// the letters. Scaling the word around the stem of its "T" zooms the viewer
// through the letter until the portrait fills the screen.
export default function ProjectsIntro() {
  const ref = useRef(null);
  const word = projectsIntro.word.toUpperCase();

  useLayoutEffect(() => {
    const root = ref.current;
    const text = root.querySelector(".pintro__text");
    const group = root.querySelector(".pintro__group");
    const geo = { ox: 0, oy: 0, cx: 0, cy: 0, max: 20 };

    const layout = () => {
      const w = root.clientWidth;
      const h = innerHeight;
      text.setAttribute("font-size", "100");
      const len = text.getComputedTextLength() || 1;
      const fs = (100 * w * 0.88) / len;
      text.setAttribute("font-size", fs);
      text.setAttribute("x", w / 2);
      // Anton caps sit roughly 0.7em tall, so this centres them.
      const baseline = h / 2 + fs * 0.36;
      text.setAttribute("y", baseline);
      const t = word.lastIndexOf("T");
      const cell = text.getExtentOfChar(t >= 0 ? t : Math.floor(word.length / 2));
      geo.ox = cell.x + cell.width / 2;
      geo.oy = baseline - fs * 0.3;
      geo.cx = w / 2;
      geo.cy = h / 2;
      // Browsers stop drawing glyphs past roughly 10,000px, so the zoom is
      // capped and the plate fades out for the last stretch.
      geo.max = Math.min(20, (w * 1.1) / (fs * 0.16));
    };

    // p runs 0 to 1: the scale grows exponentially (a steady zoom) while the
    // stem of the T glides to the centre of the screen.
    const state = { p: 0 };
    const apply = () => {
      const { ox, oy, cx, cy, max } = geo;
      const s = Math.pow(max, state.p);
      const tx = ox + (cx - ox) * state.p;
      const ty = oy + (cy - oy) * state.p;
      group.setAttribute("transform", `translate(${tx} ${ty}) scale(${s}) translate(${-ox} ${-oy})`);
    };

    layout();
    apply();
    const onRefresh = () => {
      layout();
      apply();
    };
    ScrollTrigger.addEventListener("refreshInit", onRefresh);
    document.fonts?.ready.then(onRefresh);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=260%",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      tl.fromTo(".pintro__photo", { autoAlpha: 0, scale: 1.15 }, { autoAlpha: 1, scale: 1, duration: 0.18 })
        .to(state, { p: 1, duration: 0.55, ease: "power1.in", onUpdate: apply }, 0.2)
        .to(".pintro__plate", { autoAlpha: 0, duration: 0.2, ease: "power1.in" }, 0.55)
        .to(".pintro__photo img", { filter: "grayscale(1) brightness(1.05) contrast(1.05)", duration: 0.1 }, 0.72)
        .to({}, { duration: 0.06 })
        .fromTo(".pintro__light", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.14 });
    }, root);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", onRefresh);
      ctx.revert();
    };
  }, [word]);

  return (
    <section id="projects" className="pintro" ref={ref}>
      <div className="pintro__photo">
        <img src={site.portrait} alt="" />
      </div>
      <svg className="pintro__plate" width="100%" height="100%" aria-label={projectsIntro.word}>
        <defs>
          <mask id="pintro-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <rect width="100%" height="100%" fill="#fff" />
            <g className="pintro__group">
              <text className="pintro__text" textAnchor="middle" fill="#000">
                {word}
              </text>
            </g>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="#050505" mask="url(#pintro-mask)" />
      </svg>
      <div className="pintro__light" />
    </section>
  );
}
