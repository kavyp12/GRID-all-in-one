import { useEffect, useState } from "react";

/**
 * Hero-side animated panel.
 * Cycles through the four disciplines on a 4s interval.
 * Background: slowly drifting architectural grid + a giant watermark
 * numeral for the active step. Foreground: tight typographic card.
 */

const DISCIPLINES = [
  {
    num: "01",
    code: "CRM",
    title: "Real Estate",
    titleEm: "CRM",
    bullets: ["Lead capture · 15,600+", "Telecalling · live recall", "Site visits · ratings"],
  },
  {
    num: "02",
    code: "AR / VR",
    title: "Virtual Site Visits",
    titleEm: "& Sample Flats",
    bullets: ["Photoreal 3D · real-time", "Web + VR sales pavilions", "Configurable virtual sample flat"],
  },
  {
    num: "03",
    code: "PRINT",
    title: "Real Estate",
    titleEm: "Brochures & Brand",
    bullets: ["Project books · OOH", "Brand identity systems", "Investor & RERA sales kits"],
  },
  {
    num: "04",
    code: "ADS",
    title: "Real Estate",
    titleEm: "Performance Marketing",
    bullets: ["Meta + Google · ROAS", "Landing pages · WA · NRI", "CRM-synced reporting"],
  },
] as const;

const CYCLE_MS = 4200;

export function DisciplineTicker() {
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0);

  // Cycle the active discipline
  useEffect(() => {
    const id = window.setInterval(() => {
      setI((prev) => (prev + 1) % DISCIPLINES.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  // 1Hz tick for the timestamp
  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const time = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  void tick;

  const d = DISCIPLINES[i];

  return (
    <aside className="ticker" aria-label="Disciplines, live">
      <header className="ticker-head">
        <span className="ticker-mono">
          <span className="ticker-pulse" />
          Studio · Live
        </span>
        <span className="ticker-mono dim">IST · {time}</span>
      </header>

      <div className="ticker-stage">
        {/* Drifting grid */}
        <div className="ticker-grid" aria-hidden="true" />
        {/* Soft circular halo behind the watermark */}
        <div className="ticker-halo" aria-hidden="true" />
        {/* Watermark numeral */}
        <div className="ticker-watermark" aria-hidden="true">
          {d.num}
        </div>

        {/* Foreground card (re-mount each step for fresh fade animation) */}
        <article key={i} className="ticker-card">
          <div className="ticker-card-top">
            <span className="ticker-mono">
              Discipline · {d.num} <span className="dim">/ 04</span>
            </span>
            <span className="ticker-code">{d.code}</span>
          </div>

          <h3 className="ticker-title">
            {d.title}
            <br />
            <em>{d.titleEm}</em>
          </h3>

          <ul className="ticker-bullets">
            {d.bullets.map((b) => (
              <li key={b}>
                <span className="bar" />
                {b}
              </li>
            ))}
          </ul>
        </article>

        {/* Progress dots */}
        <div className="ticker-dots">
          {DISCIPLINES.map((_, idx) => (
            <span
              key={idx}
              className={idx === i ? "is-active" : ""}
              aria-current={idx === i ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      <footer className="ticker-foot">
        <span className="ticker-mono dim">04 Disciplines · Indian Real Estate</span>
        <span className="ticker-mono">GRID · Est. 2024</span>
      </footer>
    </aside>
  );
}
