import { useEffect } from "react";
import { normalizeOrientation } from "../utils/orientation";
import "./MediaViewer.css";

export default function MediaViewer({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  const { project, category, location, type, src, poster } = item;
  const orientation = normalizeOrientation(item.orientation);

  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label={project}>
      <div className="viewer__backdrop" onClick={onClose} />

      <div className={`viewer__panel viewer__panel--${orientation}`}>
        <button className="viewer__close" onClick={onClose} aria-label="Close viewer">
          ×
        </button>

        <div className={`viewer__media viewer__media--${orientation}`}>
          {src ? (
            type === "video" ? (
              <video
                src={src}
                poster={poster || undefined}
                controls
                autoPlay
                muted
                playsInline
              />
            ) : (
              <img src={src} alt={project} />
            )
          ) : (
            <div className="media-placeholder viewer__placeholder">
              <div className="media-placeholder__glow" />
              <span className="media-placeholder__tag">Full media placeholder</span>
            </div>
          )}
        </div>

        <div className="viewer__info">
          <span className="viewer__category">{category}</span>
          <h3 className="viewer__project">{project}</h3>
          {location && <span className="viewer__location">{location}</span>}
        </div>
      </div>
    </div>
  );
}
