import { useEffect, useRef, useState } from "react";
import { PROCESS } from "../../data/site";
import { ProcessIllust } from "../mockups/ProcessIllust";

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const wh = window.innerHeight;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const total = height - wh;
      const scrolled = -top;
      if (scrolled <= 0) setProgress(0);
      else if (scrolled >= total) setProgress(1);
      else setProgress(scrolled / total);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="process-sticky"
      style={{ height: `${(PROCESS.length + 0.4) * 100}vh` }}
    >
      <span className="divider-label">03 · Process</span>
      <div className="process-stage">
        <div className="wrap" style={{ width: "100%" }}>
          <div className="section-head" style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow">How we work</span>
          </div>
          <div className="process-deck">
            {PROCESS.map((p, i) => {
              const start = i / PROCESS.length;
              const end = (i + 1) / PROCESS.length;
              const local =
                progress < start
                  ? 0
                  : progress > end
                  ? 1
                  : (progress - start) / (end - start);

              const isCurrent = progress >= start && progress < end;
              const isPast = progress >= end;
              const isFuture = progress < start;

              const translateY = isFuture
                ? 80 + (PROCESS.length - i) * 12
                : isPast
                ? -40 - i * 8
                : (1 - local) * 80;

              const scale = isFuture
                ? 0.92 - (PROCESS.length - i - 1) * 0.02
                : isPast
                ? 0.96 - (PROCESS.length - i - 1) * 0.01
                : 0.92 + local * 0.08;

              const opacity = isFuture
                ? 1 - (PROCESS.length - i - 1) * 0.15
                : isPast
                ? 0
                : 1;

              const z = isPast ? 0 : isFuture ? PROCESS.length - i : 10;

              return (
                <div
                  key={p.num}
                  className={`process-card ${p.variant}`}
                  style={{
                    transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                    opacity,
                    zIndex: z,
                    pointerEvents: isCurrent ? "auto" : "none",
                  }}
                >
                  <div>
                    <div className="step-num">Step · {p.num}</div>
                    <h3>
                      {p.title} <em>{p.em}</em>
                    </h3>
                    <p style={{ marginTop: "1.25rem" }}>{p.desc}</p>
                  </div>
                  <div className="process-illust">
                    <ProcessIllust i={i} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
