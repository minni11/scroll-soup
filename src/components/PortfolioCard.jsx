import { useEffect, useRef, useState } from "react";
import { normalizeOrientation } from "../utils/orientation";
import "./PortfolioCard.css";

/**
 * Reusable portfolio media card.
 * Renders a real <video>/<img> when item.src is provided;
 * otherwise falls back to a labeled placeholder so the layout
 * can be reviewed before real assets are dropped in.
 *
 * Video autoplay is tied to on-screen visibility (via IntersectionObserver)
 * rather than firing for every card on load — this keeps the grid light
 * and behaves well with many videos on a single page.
 */
export default function PortfolioCard({ item, onOpen }) {
  const { project, category, location, type, src, poster, span } = item;
  const orientation = normalizeOrientation(item.orientation);
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node || type !== "video" || !src) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [type, src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView) {
      // Autoplay can be rejected (e.g. low power mode) — fail silently.
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <button
      type="button"
      ref={cardRef}
      className={`pcard pcard--${span} pcard--${orientation}`}
      onClick={() => onOpen(item)}
    >
      <div className="pcard__media">
        {src ? (
          type === "video" ? (
            <>
              <video
                ref={videoRef}
                src={src}
                poster={poster || undefined}
                muted
                loop
                playsInline
                preload="metadata"
              />
              <span className="pcard__play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path d="M6 4.5v15l13-7.5-13-7.5z" fill="currentColor" />
                </svg>
              </span>
            </>
          ) : (
            <img src={src} alt={project} loading="lazy" />
          )
        ) : (
          <div className="media-placeholder pcard__placeholder">
            <div className="media-placeholder__glow" />
            <span className="media-placeholder__tag">
              {orientation === "portrait" ? "9:16" : orientation === "square" ? "1:1" : "16:9"}{" "}
              placeholder
            </span>
          </div>
        )}
      </div>

      <div className="pcard__overlay">
        <div className="pcard__info">
          <span className="pcard__category">{category}</span>
          <h3 className="pcard__project">{project}</h3>
          {location && <span className="pcard__location">{location}</span>}
        </div>
      </div>
    </button>
  );
}
