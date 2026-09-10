import hospitality from "../data/hospitality";
import useReveal from "../hooks/useReveal";
import "./Hospitality.css";

export default function Hospitality() {
  const headRef = useReveal();

  return (
    <section id="hospitality" className="section">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <div>
            <span className="section-index">03 — WHO WE SHOOT FOR</span>
            <h2 className="display display-lg" style={{ marginTop: "0.75rem" }}>
              Built for hospitality
            </h2>
          </div>
        </div>

        <div className="hospitality-grid">
          {hospitality.map((item) => (
            <div className="hospitality-card" key={item.id}>
              <div className="media-placeholder hospitality-card__media">
                <div className="media-placeholder__glow" />
              </div>
              <span className="hospitality-card__label display">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
