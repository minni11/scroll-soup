import { useMemo, useState } from "react";
import portfolio from "../data/portfolio";
import filters from "../data/filters";
import PortfolioCard from "./PortfolioCard";
import MediaViewer from "./MediaViewer";
import useReveal from "../hooks/useReveal";
import "./Portfolio.css";

export default function Portfolio() {
  const [active, setActive] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null); // null = "All"
  const headRef = useReveal();

  const visible = useMemo(() => {
    const real = portfolio.filter((item) => !item.isPlaceholder);
    return activeFilter
      ? real.filter((item) => item.category === activeFilter)
      : real;
  }, [activeFilter]);

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <div>
            <span className="section-index">01 — SELECTED WORK</span>
            <h2 className="display display-lg" style={{ marginTop: "0.75rem" }}>
              Selected work
            </h2>
          </div>
          <p className="eyebrow">Places worth experiencing. Stories worth watching.</p>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Filter portfolio by content type">
          {filters.map((f) => (
            <button
              key={f.label}
              type="button"
              role="tab"
              aria-selected={activeFilter === f.value}
              className={`filter-bar__item ${
                activeFilter === f.value ? "is-active" : ""
              }`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {visible.map((item) => (
            <div
              key={`${activeFilter ?? "all"}-${item.id}`}
              className={`portfolio-grid__item portfolio-grid__item--${item.span}`}
            >
              <PortfolioCard item={item} onOpen={setActive} />
            </div>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="portfolio-empty">No work in this category yet.</p>
        )}
      </div>

      <MediaViewer item={active} onClose={() => setActive(null)} />
    </section>
  );
}
