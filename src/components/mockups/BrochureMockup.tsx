/**
 * Editorial book cover — no faux image placeholder, pure typography.
 * Three stacked pages fanned out; top page renders a Vignelli-style cover.
 */
export function BrochureMockup() {
  return (
    <div className="mock-brochure">
      <div className="brochure-stack">
        {/* Back pages — give depth */}
        <div className="brochure-page p3" />
        <div className="brochure-page p2" />

        {/* Front cover */}
        <article className="brochure-page p1">
          <header className="b-head">
            <span className="b-mono">Vol. 01 · Project Book</span>
            <span className="b-mono dim">2026 / 01</span>
          </header>

          <div className="b-rule" />

          <div className="b-title">
            <span className="b-mono small dim">Project</span>
            <h6 className="b-display">
              Skyline
              <br />
              <em>Heights</em>
            </h6>
            <span className="b-meta">
              <span>44 Floors</span>
              <span className="dot" />
              <span>320 Units</span>
              <span className="dot" />
              <span>Eastern Waterfront</span>
            </span>
          </div>

          {/* Architectural line motif — replaces the bad image */}
          <div className="b-motif" aria-hidden="true">
            <svg viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#0a0a0a" strokeWidth="0.8" fill="none">
                {/* Twin towers silhouette in line work */}
                <path d="M30 88 L30 30 L52 30 L52 88 Z" />
                <path d="M52 88 L52 14 L74 14 L74 88 Z" />
                <path d="M86 88 L86 22 L108 22 L108 88 Z" />
                <path d="M108 88 L108 6 L130 6 L130 88 Z" />
                <path d="M142 88 L142 30 L168 30 L168 88 Z" />
                <path d="M172 88 L172 38 L192 38 L192 88 Z" />
                {/* window grid — small ticks */}
                <g opacity="0.4">
                  {Array.from({ length: 6 }).map((_, r) =>
                    Array.from({ length: 4 }).map((__, c) => (
                      <rect
                        key={`${r}-${c}`}
                        x={56 + c * 5}
                        y={22 + r * 9}
                        width="2"
                        height="3"
                        fill="#0a0a0a"
                        stroke="none"
                      />
                    ))
                  )}
                </g>
                {/* ground line */}
                <line x1="10" y1="88" x2="210" y2="88" strokeWidth="1.4" />
              </g>
            </svg>
          </div>

          <div className="b-rule" />

          <ol className="b-contents">
            <li><span>01</span><span>The Vision</span><span className="num">p.04</span></li>
            <li><span>02</span><span>Architecture</span><span className="num">p.12</span></li>
            <li><span>03</span><span>The Address</span><span className="num">p.26</span></li>
            <li><span>04</span><span>Living Plan</span><span className="num">p.34</span></li>
          </ol>

          <footer className="b-foot">
            <span className="b-mono">GRID · Studio</span>
            <span className="b-mono dim">Edition 01</span>
          </footer>
        </article>
      </div>
    </div>
  );
}
