import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reducedMotion } from "../lib/scroll";
import { contact, site } from "../content";

export default function Contact() {
  const ref = useRef(null);

  // White blob trails the pointer and inverts the letters it covers.
  useEffect(() => {
    const root = ref.current;
    const blob = root.querySelector(".contact__blob");
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const k = reducedMotion() ? 1 : 0.12;
    const pos = { x: -400, y: -400 };
    const target = { x: -400, y: -400 };
    let raf;
    let running = false;
    const onMove = (e) => {
      const r = root.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
    };
    const tick = () => {
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;
      blob.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(root);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  // Dark "Let's talk." in the middle, then the room lights up and the
  // details slide in beneath the title.
  useLayoutEffect(() => {
    const root = ref.current;
    const title = root.querySelector(".contact__title");
    const ctx = gsap.context(() => {
      const toCentre = () => root.clientHeight / 2 - (title.offsetTop + title.offsetHeight / 2);
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const mode = self.progress > 0.35 ? "dark" : "blob";
            if (root.dataset.cursor !== mode) root.dataset.cursor = mode;
          },
        },
      });
      tl.fromTo(title, { y: toCentre }, { y: toCentre, duration: 0.25 })
        .to(".contact__light", { autoAlpha: 1, duration: 0.3 }, 0.25)
        .to(title, { y: 0, color: "#0d0d0d", duration: 0.35, ease: "power2.inOut" }, 0.25)
        .to(".contact__blob-inner", { scale: 0, duration: 0.15 }, 0.25)
        .fromTo(
          ".contact__item",
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 0.2, stagger: 0.05, ease: "power3.out" },
          0.6
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="contact" ref={ref} data-cursor="blob">
      <div className="contact__light section-light" />
      <div className="contact__inner">
        <h2 className="contact__title display">{contact.title}</h2>
        <div className="contact__details">
          <a className="contact__email contact__item" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="contact__phone contact__item u-line"
            href={site.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.phoneLabel}
          </a>
          <div className="contact__socials contact__item">
            {contact.socials.map((s) => (
              <a key={s.label} className="u-line" href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="contact__blob" aria-hidden="true">
        <span className="contact__blob-inner" />
      </div>
    </section>
  );
}
