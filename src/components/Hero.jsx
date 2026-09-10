import { heroVideo } from "../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__media">
        {heroVideo?.src ? (
          <video
            className="hero__video"
            src={heroVideo.src}
            poster={heroVideo.poster || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <div className="media-placeholder hero__media-placeholder">
            <div className="media-placeholder__glow" />
            <span className="media-placeholder__tag">Reel placeholder — 9:16 / 16:9</span>
          </div>
        )}
      </div>

      <div className="hero__scrim" />

      <div className="hero__content container">
        <p className="eyebrow hero__sub">UGC &amp; visual content for hospitality brands.</p>
        <h1 className="display display-xl hero__title">
          We make
          <br />
          stays
          <br />
          <span className="lime">scroll-worthy.</span>
        </h1>

        <a href="#work" className="btn btn-solid hero__cta">
          View our work
        </a>
      </div>

      <a href="#work" className="hero__scroll-cue" aria-label="Scroll to selected work">
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
