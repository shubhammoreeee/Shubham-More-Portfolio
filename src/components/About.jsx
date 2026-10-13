import { useEffect, useState } from "react";
import { buildWords, statement } from "../content";

export default function About({ reduce }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % buildWords.length), 2400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="statement">
      <h2>
        NOT JUST CODE.
        <br />I BUILD{" "}
        <span className="rot-wrap">
          <span className="rot" key={i}>
            {buildWords[i]}
          </span>
        </span>
      </h2>
      <p>{statement}</p>
    </section>
  );
}
