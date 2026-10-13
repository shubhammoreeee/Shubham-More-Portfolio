import { useEffect, useRef } from "react";
import { gsap } from "../lib/scroll";

// A thin ring drawn with mix-blend-mode: difference, so it reads white on
// dark sections and black on light ones. Over links it fills in.
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = ref.current;
    const toX = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
    const toY = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
    const onMove = (e) => {
      el.classList.add("is-on");
      toX(e.clientX);
      toY(e.clientY);
      el.classList.toggle("is-link", !!e.target.closest("a, button"));
    };
    const onLeave = () => el.classList.remove("is-on");
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} className="cursor" aria-hidden="true" />;
}
