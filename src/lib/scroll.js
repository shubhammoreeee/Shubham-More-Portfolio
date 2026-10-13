import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis = null;

export function setLenis(instance) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

export function scrollToTarget(target, opts = {}) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { duration: 1.6, ...opts });
  } else {
    // Pinned sections live inside spacers, so measure from the document.
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: reducedMotion() ? "auto" : "smooth" });
  }
}

// Fits a single line of text to the width of its wrapper by writing a CSS
// custom property (in px) on `root`, so several layers can share one size.
export function fitText(root, measureEl, varName, ratio = 1) {
  if (!root || !measureEl) return;
  const wrapper = measureEl.parentElement;
  measureEl.style.fontSize = "100px";
  const w = measureEl.getBoundingClientRect().width;
  measureEl.style.fontSize = "";
  if (!w) return;
  const size = (100 * wrapper.clientWidth * ratio) / w;
  root.style.setProperty(varName, `${size}px`);
}
