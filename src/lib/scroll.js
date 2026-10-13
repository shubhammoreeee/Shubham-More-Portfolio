import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// The contact section is a tall sticky runway; land at its end, where the
// disc has filled the screen and the links are showing.
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  let top = el.getBoundingClientRect().top + window.scrollY;
  if (id === "contact") top += el.offsetHeight - window.innerHeight;
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(top, { duration: 1.4 });
  else window.scrollTo({ top, behavior: reducedMotion() ? "auto" : "smooth" });
}
