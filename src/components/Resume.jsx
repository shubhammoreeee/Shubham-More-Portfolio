import { resume } from "../content";

function Block({ label, children }) {
  return (
    <div className="resume__block">
      <h3 className="resume__label reveal-fade">{label}</h3>
      <div className="resume__content">{children}</div>
    </div>
  );
}

function Entries({ items }) {
  return items.map((it) => (
    <div className="resume__entry reveal-fade" key={it.title}>
      <p className="resume__title">{it.title}</p>
      <p className="resume__detail">{it.detail}</p>
      <p className="resume__meta">{it.meta}</p>
    </div>
  ));
}

export default function Resume() {
  const { education, experience, skills } = resume;
  return (
    <section className="resume section-dark">
      <Block label={education.label}>
        <Entries items={education.items} />
      </Block>
      <Block label={experience.label}>
        <Entries items={experience.items} />
      </Block>
      <Block label={skills.label}>
        <dl className="resume__skills">
          {skills.rows.map((r) => (
            <div className="resume__skill reveal-fade" key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      </Block>
    </section>
  );
}
