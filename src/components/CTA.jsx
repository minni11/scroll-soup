import useReveal from "../hooks/useReveal";
import "./CTA.css";

export default function CTA() {
  const ref = useReveal();

  return (
    <section id="contact" className="cta">
      <div className="container cta__inner reveal" ref={ref}>
        <h2 className="display display-xl">
          Your property
          <br />
          deserves to
          <br />
          <span className="lime">be seen.</span>
        </h2>

        <p className="eyebrow cta__sub">Let's create something worth stopping for.</p>

        <a href="https://wa.me/917417789506" target="_blank" rel="noreferrer" className="btn btn-solid cta__btn">
          Start a project <span className="btn-arrow">→</span>
        </a>

        <div className="cta__contacts">
          <span>MEENAKSHI</span>
          <a href="tel:+917417789506">+91 74177 89506</a>
        </div>
      </div>
    </section>
  );
}
