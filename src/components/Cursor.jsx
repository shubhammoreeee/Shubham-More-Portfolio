import { useEffect, useRef } from "react";

// Modes come from the nearest [data-cursor] ancestor of whatever is hovered:
// ring (default), light (hero spotlight), dark (light sections),
// menu (overlay links), blob (contact; the section draws its own blob).
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");

    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const target = { ...pos };
    let raf;
    let visible = false;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        pos.x = target.x;
        pos.y = target.y;
        visible = true;
        el.classList.add("is-visible");
      }
      readMode(e.target);
    };
    const readMode = (node) => {
      if (!node || !node.closest) return;
      const host = node.closest("[data-cursor]");
      const mode = host ? host.getAttribute("data-cursor") : "ring";
      if (el.dataset.mode !== mode) el.dataset.mode = mode;
      el.classList.toggle("is-active", !!node.closest("a, button, [data-cursor-grow]"));
    };
    // Content moves under a still mouse while scrolling, so re-read then too.
    const onScroll = () => {
      if (visible) readMode(document.elementFromPoint(target.x, target.y));
    };
    const onLeave = () => {
      visible = false;
      el.classList.remove("is-visible");
    };
    const onDown = () => el.classList.add("is-down");
    const onUp = () => el.classList.remove("is-down");

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div className="cursor" ref={ref} data-mode="ring" aria-hidden="true">
      <span className="cursor__dot" />
    </div>
  );
}
