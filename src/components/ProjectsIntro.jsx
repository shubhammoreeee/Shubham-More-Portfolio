import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/scroll";
import { dive, site } from "../content";

const FOCUS = 2; // zoom into the left stroke of the "O"

// Where the solid left stroke of the focus letter sits, measured from the
// pen position, by scanning one row of the glyph drawn on a canvas.
function strokeOffset(char, fontSize) {
  const c = document.createElement("canvas");
  c.width = 900;
  c.height = 700;
  const g = c.getContext("2d", { willReadFrequently: true });
  g.font = "330px Anton";
  g.textBaseline = "alphabetic";
  const m = g.measureText(char);
  const penX = 150;
  const base = 500;
  g.fillText(char, penX, base);
  const row = Math.round(base - m.actualBoundingBoxAscent / 2);
  const data = g.getImageData(0, row, c.width, 1).data;
  let start = -1;
  let end = -1;
  for (let x = 0; x < c.width; x++) {
    const on = data[x * 4 + 3] > 128;
    if (on && start < 0) start = x;
    if (!on && start >= 0) {
      end = x;
      break;
    }
  }
  if (start < 0 || end <= start) return null;
  return {
    x: (((start + end) / 2 - penX) / 330) * fontSize,
    width: ((end - start) / 330) * fontSize,
  };
}

export default function ProjectsIntro({ reduce }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (reduce) return;
    const root = ref.current;
    const text = root.querySelector(".dive-text");
    const group = root.querySelector(".dive-group");
    const geo = { ox: 0, oy: 0, cx: 0, cy: 0, max: 20 };
    const state = { p: 0 };

    // Same framing as a 1600x900 stage scaled to fit: 330px type, centred a
    // third of the way down.
    const layout = () => {
      const w = innerWidth;
      const h = innerHeight;
      const k = Math.min(w / 1600, h / 900);
      const fs = 330 * k;
      const mid = (h - 900 * k) / 2 + 300 * k;
      text.setAttribute("font-size", fs);
      text.setAttribute("letter-spacing", 4 * k);
      text.setAttribute("x", w / 2);
      const baseline = mid + fs * 0.36;
      text.setAttribute("y", baseline);
      const cell = text.getExtentOfChar(FOCUS);
      const stroke = strokeOffset(dive.word[FOCUS], fs);
      geo.ox = cell.x + (stroke ? stroke.x : cell.width * 0.2);
      geo.oy = mid;
      geo.cx = w / 2;
      geo.cy = h / 2;
      // Browsers stop drawing glyphs past roughly 10,000px, so the zoom is
      // capped and the plate fades out over the last stretch.
      const strokeW = stroke ? stroke.width : fs * 0.15;
      geo.max = Math.min(20, (Math.max(w, h) * 1.2) / strokeW);
    };
    const apply = () => {
      const { ox, oy, cx, cy, max } = geo;
      const s = Math.pow(max, state.p);
      const tx = ox + (cx - ox) * state.p;
      const ty = oy + (cy - oy) * state.p;
      group.setAttribute("transform", `translate(${tx} ${ty}) scale(${s}) translate(${-ox} ${-oy})`);
    };
    const refresh = () => {
      layout();
      apply();
    };
    refresh();
    document.fonts?.load("330px Anton").then(() => {
      refresh();
      ScrollTrigger.refresh();
    });

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
            onRefreshInit: refresh,
          },
        })
        .to(state, { p: 1, ease: "power2.in", duration: 0.5, onUpdate: apply }, 0)
        .to(".dive-cover", { opacity: 0, ease: "none", duration: 0.12 }, 0.44)
        .to(".dive-img", { scale: 1.08, ease: "none", duration: 1 }, 0)
        .fromTo(".dive-cap", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.14 }, 0.74)
        .to(".dive-cap", { opacity: 0, duration: 0.06 }, 0.9)
        .to(".dive-wash", { opacity: 1, ease: "none", duration: 0.1 }, 0.9);
    }, root);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="dive" ref={ref}>
      <div className="dive-sticky">
        <img className="dive-img" src={site.heroImage} alt="" aria-hidden="true" draggable="false" />
        <svg className="dive-cover" width="100%" height="100%" aria-hidden="true">
          <defs>
            <mask id="dive-hole" maskUnits="userSpaceOnUse" x="-60000" y="-60000" width="120000" height="120000">
              <rect x="-60000" y="-60000" width="120000" height="120000" fill="#fff" />
              <g className="dive-group">
                <text className="dive-text" textAnchor="middle" fill="#000">
                  {dive.word}
                </text>
              </g>
            </mask>
          </defs>
          <rect x="-60000" y="-60000" width="120000" height="120000" fill="#000" mask="url(#dive-hole)" />
        </svg>
        <h2 className="sr-only">Projects</h2>
        <p className="dive-cap">{dive.caption}</p>
        <div className="dive-wash" />
      </div>
    </section>
  );
}
