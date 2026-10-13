import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/scroll";
import { contact, site } from "../content";

// A paper-coloured disc grows from the centre of a black room. The title is
// blended with difference, so it reads white on black and black on paper,
// and inverts letter by letter where the disc crosses it.
export default function Contact({ reduce }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom bottom", scrub: true },
        })
        .fromTo(".disc", { scale: 0.02 }, { scale: 1, ease: "power2.in", duration: 0.55 }, 0)
        .fromTo(".contact-links", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.25 }, 0.65);
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className={`contact${reduce ? " contact-static" : ""}`} id="contact" ref={ref}>
      <div className="contact-sticky">
        <div className="disc" aria-hidden="true" />
        <h2 className="contact-title">{contact.title}</h2>
        <div className="contact-links">
          <a className="contact-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="contact-wa" href={site.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp {site.phone}
          </a>
          <ul>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.resume} download={site.resumeName} type="application/pdf">
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
