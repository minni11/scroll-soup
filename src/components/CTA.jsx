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

        <a href="mailto:hello@scrollsoup.com" className="btn btn-solid cta__btn">
          Start a project <span className="btn-arrow">→</span>
        </a>

        <div className="cta__contacts">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:hello@scrollsoup.com">Email</a>
          <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
