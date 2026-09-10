import collaborations from "../data/collaborations";
import useReveal from "../hooks/useReveal";
import "./Collaborations.css";

export default function Collaborations() {
  const headRef = useReveal();

  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <div>
            <span className="section-index">04 — COLLABORATIONS</span>
            <h2 className="display display-lg" style={{ marginTop: "0.75rem" }}>
              Collaborations
            </h2>
          </div>
        </div>

        <ul className="collab-grid">
          {collaborations.map((name) => (
            <li className="collab-grid__item" key={name}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
