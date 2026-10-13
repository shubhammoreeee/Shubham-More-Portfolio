import Lines from "./Lines";
import { about } from "../content";

export default function About() {
  return (
    <section id="about" className="about section-dark">
      <Lines lines={about.lines} className="display about__title" />
      <p className="about__body reveal-fade">{about.body}</p>
    </section>
  );
}
