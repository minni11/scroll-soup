import { useEffect, useRef, useState } from "react";
import "./Statement.css";

export default function Statement() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh - rect.top) / (vh + rect.height);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opacity = 0.35 + progress * 0.65;
  const translate = 24 - progress * 24;

  return (
    <section ref={ref} className="statement">
      <h2
        className="display display-xl statement__text"
        style={{
          opacity,
          transform: `translateY(${translate}px)`,
        }}
      >
        We capture
        <br />
        the feeling
        <br />
        <span className="lime">of a stay.</span>
      </h2>
    </section>
  );
}
