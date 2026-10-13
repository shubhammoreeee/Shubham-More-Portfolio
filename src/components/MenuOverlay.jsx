import { nav, site } from "../content";

export default function MenuOverlay({ open, onClose, onGo }) {
  const tab = open ? 0 : -1;
  return (
    <div className={`menu${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
      <button type="button" className="menu-close" onClick={onClose} tabIndex={tab}>
        Close
      </button>
      <ul>
        {nav.map((l, i) => (
          <li key={l.id} style={{ "--i": i }}>
            <a href={`#${l.id}`} onClick={onGo(l.id)} tabIndex={tab}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="menu-foot" style={{ "--i": nav.length }}>
        <a href={`mailto:${site.email}`} tabIndex={tab}>
          {site.email}
        </a>
        <a href={site.resume} download={site.resumeName} type="application/pdf" tabIndex={tab}>
          Download resume
        </a>
      </div>
    </div>
  );
}
