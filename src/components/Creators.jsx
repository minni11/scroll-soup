import creators from "../data/creators";
import useReveal from "../hooks/useReveal";
import "./Creators.css";

export default function Creators() {
  const headRef = useReveal();

  return (
    <section id="creators" className="section">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <div>
            <span className="section-index">02 — CREATORS</span>
            <h2 className="display display-lg" style={{ marginTop: "0.75rem" }}>
              The faces behind
              <br />
              the content
            </h2>
          </div>
        </div>

        <div className="creators-grid">
          {creators.map((creator) => (
            <div className="creator-card" key={creator.id}>
              <div className="creator-card__media media-placeholder">
                <div className="media-placeholder__glow" />
              </div>
              <div className="creator-card__info">
                <h3 className="creator-card__name">{creator.name}</h3>
                <span className="creator-card__specialty">{creator.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
