import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { scrollToSection } from "../lib/scroll";
import { site } from "../content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.__lenis?.stop();
    return () => {
      document.removeEventListener("keydown", onKey);
      window.__lenis?.start();
    };
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToSection(id), 150);
  };

  return (
    <>
      <header className="nav">
        <button type="button" className="nav-btn" onClick={() => setOpen(true)} aria-expanded={open}>
          <svg width="22" height="10" viewBox="0 0 22 10" aria-hidden="true">
            <line x1="0" y1="2" x2="22" y2="2" stroke="currentColor" strokeWidth="1.4" />
            <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span>Menu</span>
        </button>
        <a href="#top" className="nav-logo" onClick={go("top")}>
          {site.name}
        </a>
        <a href="#contact" className="nav-btn nav-talk" onClick={go("contact")}>
          Let’s talk
        </a>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} onGo={go} />
    </>
  );
}
