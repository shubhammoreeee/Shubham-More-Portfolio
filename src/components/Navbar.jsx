import { nav, site } from "../content";
import { scrollToTarget } from "../lib/scroll";

export default function Navbar({ onMenu }) {
  return (
    <header className="navbar">
      <button className="navbar__menu" onClick={onMenu} aria-label="Open menu">
        <span className="navbar__burger" aria-hidden="true">
          <span />
          <span />
        </span>
        {nav.menu}
      </button>
      <a
        className="navbar__logo"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollToTarget("#home");
        }}
      >
        {site.name}
      </a>
      <a
        className="navbar__talk"
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToTarget("#contact");
        }}
      >
        {nav.talk}
      </a>
    </header>
  );
}
