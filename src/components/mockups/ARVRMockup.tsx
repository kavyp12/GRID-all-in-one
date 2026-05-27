/**
 * Top-down architectural floor plan for a 2BHK unit.
 * Technical-drawing aesthetic: thick exterior walls, dimension lines,
 * room labels, numbered walkthrough hotspots, compass rose.
 */
export function ARVRMockup() {
  return (
    <div className="mock-arvr">
      {/* Title strip — top-left */}
      <div className="mock-arvr-title">
        <span className="mono">Unit 14B · 2BHK · 980 sq.ft</span>
        <span className="mono dim">Floor 12 · Skyline Heights</span>
      </div>

      {/* North compass — top-right */}
      <div className="mock-arvr-compass" aria-hidden="true">
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
          <path d="M20 4 L23 20 L20 17 L17 20 Z" fill="#0a0a0a" />
          <text x="20" y="36" textAnchor="middle" fontSize="6" fontFamily="Geist Mono" letterSpacing="2">N</text>
        </svg>
      </div>

      <svg
        className="mock-arvr-plan"
        viewBox="0 0 480 380"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Apartment floor plan with walkthrough hotspots"
      >
        {/* Drop shadow for the plan */}
        <defs>
          <filter id="plan-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
            <feOffset dx="0" dy="8" />
            <feComponentTransfer><feFuncA type="linear" slope="0.12" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ─── Dimension lines (exterior) ─── */}
        <g
          stroke="#0a0a0a"
          strokeWidth="0.6"
          fill="#0a0a0a"
          fontFamily="Geist Mono"
          fontSize="9"
          letterSpacing="2"
          opacity="0.55"
        >
          {/* Top: 12.4 M */}
          <line x1="60" y1="40" x2="420" y2="40" />
          <line x1="60" y1="36" x2="60" y2="44" />
          <line x1="420" y1="36" x2="420" y2="44" />
          <rect x="220" y="32" width="40" height="14" fill="#f7f4ed" stroke="none" />
          <text x="240" y="42" textAnchor="middle">12.4 M</text>

          {/* Left: 8.2 M */}
          <line x1="36" y1="70" x2="36" y2="340" />
          <line x1="32" y1="70" x2="40" y2="70" />
          <line x1="32" y1="340" x2="40" y2="340" />
          <g transform="rotate(-90 26 200)">
            <rect x="6" y="194" width="40" height="14" fill="#f7f4ed" stroke="none" />
            <text x="26" y="204" textAnchor="middle">8.2 M</text>
          </g>
        </g>

        {/* ─── Plan body ─── */}
        <g filter="url(#plan-shadow)">
          {/* Floor fill */}
          <rect
            x="60"
            y="70"
            width="360"
            height="270"
            fill="#fff"
            stroke="none"
          />

          {/* Exterior walls (thick) */}
          <rect
            x="60"
            y="70"
            width="360"
            height="240"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth="3"
          />

          {/* Balcony (separated, thinner) */}
          <rect
            x="60"
            y="310"
            width="360"
            height="30"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth="1.2"
            strokeDasharray="0"
          />
          {/* Balcony rail texture */}
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={i}
              x1={70 + i * 25}
              y1="335"
              x2={70 + i * 25}
              y2="340"
              stroke="#0a0a0a"
              strokeWidth="0.5"
              opacity="0.4"
            />
          ))}
        </g>

        {/* Internal walls (thinner) */}
        <g stroke="#0a0a0a" strokeWidth="1.6" fill="none">
          {/* Vertical: master BR | BR-02 */}
          <line x1="200" y1="70" x2="200" y2="200" />
          {/* Vertical: BR-02 | Kitchen */}
          <line x1="320" y1="70" x2="320" y2="200" />
          {/* Horizontal: bedrooms | living */}
          <line x1="60" y1="200" x2="420" y2="200" />
          {/* Bath wall */}
          <line x1="260" y1="140" x2="320" y2="140" />
          <line x1="260" y1="140" x2="260" y2="200" />
        </g>

        {/* ─── Doorway openings (gaps in walls + swing arcs) ─── */}
        <g stroke="#0a0a0a" strokeWidth="0.8" fill="none" opacity="0.6">
          {/* Master BR door */}
          <line x1="170" y1="200" x2="200" y2="200" stroke="#f7f4ed" strokeWidth="2.5" />
          <path d="M170 200 A 30 30 0 0 0 200 170" />
          {/* BR-02 door */}
          <line x1="260" y1="200" x2="290" y2="200" stroke="#f7f4ed" strokeWidth="2.5" />
          <path d="M260 200 A 30 30 0 0 0 290 170" />
          {/* Kitchen door */}
          <line x1="360" y1="200" x2="390" y2="200" stroke="#f7f4ed" strokeWidth="2.5" />
          <path d="M360 200 A 30 30 0 0 0 390 170" />
          {/* Bath door */}
          <line x1="282" y1="140" x2="302" y2="140" stroke="#f7f4ed" strokeWidth="2.5" />
          <path d="M282 140 A 20 20 0 0 1 302 160" />
          {/* Balcony door */}
          <line x1="200" y1="310" x2="240" y2="310" stroke="#f7f4ed" strokeWidth="2.5" />
        </g>

        {/* ─── Furniture sketches (subtle) ─── */}
        <g stroke="#0a0a0a" strokeWidth="0.6" fill="none" opacity="0.32">
          {/* Master bed */}
          <rect x="80" y="90" width="60" height="42" rx="3" />
          <line x1="100" y1="90" x2="100" y2="100" />
          <line x1="120" y1="90" x2="120" y2="100" />
          {/* BR-02 bed */}
          <rect x="220" y="90" width="46" height="34" rx="3" />
          {/* Kitchen counter */}
          <rect x="332" y="90" width="76" height="14" />
          <rect x="332" y="180" width="14" height="14" />
          {/* Bath */}
          <rect x="270" y="150" width="18" height="14" rx="2" />
          <circle cx="306" cy="180" r="5" />
          {/* Living sofa */}
          <rect x="90" y="226" width="100" height="32" rx="4" />
          <rect x="220" y="232" width="48" height="24" rx="3" />
          {/* Dining */}
          <ellipse cx="350" cy="250" rx="34" ry="20" />
          <circle cx="312" cy="250" r="4" />
          <circle cx="388" cy="250" r="4" />
        </g>

        {/* ─── Room labels ─── */}
        <g
          fill="#0a0a0a"
          fontFamily="Geist Mono"
          fontSize="7.5"
          letterSpacing="2"
        >
          <text x="130" y="180" textAnchor="middle" opacity="0.78">MASTER BR</text>
          <text x="260" y="180" textAnchor="middle" opacity="0.78">BR · 02</text>
          <text x="290" y="135" textAnchor="middle" opacity="0.65">BATH</text>
          <text x="370" y="180" textAnchor="middle" opacity="0.78">KITCHEN</text>
          <text x="200" y="280" textAnchor="middle" opacity="0.78">LIVING · DINING</text>
          <text x="240" y="328" textAnchor="middle" opacity="0.55">BALCONY</text>
        </g>

        {/* ─── Walkthrough path (dashed) ─── */}
        <path
          d="M130 160 C 180 160, 220 160, 260 160 S 360 220, 200 270"
          stroke="#0a0a0a"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
          opacity="0.6"
        />

        {/* ─── Numbered hotspots ─── */}
        {[
          { x: 130, y: 160, n: 1 },
          { x: 260, y: 160, n: 2 },
          { x: 370, y: 160, n: 3 },
          { x: 200, y: 270, n: 4 },
        ].map((h) => (
          <g key={h.n}>
            <circle cx={h.x} cy={h.y} r="12" fill="#fff" stroke="#0a0a0a" strokeWidth="1.2" />
            <circle cx={h.x} cy={h.y} r="4" fill="#0a0a0a" />
            <circle cx={h.x} cy={h.y} r="18" fill="none" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />
            <text
              x={h.x}
              y={h.y - 18}
              textAnchor="middle"
              fontFamily="Geist Mono"
              fontSize="7"
              letterSpacing="1.5"
              fill="#0a0a0a"
              opacity="0.7"
            >
              {String(h.n).padStart(2, "0")}
            </text>
          </g>
        ))}
      </svg>

      {/* Floating tag — live walkthrough */}
      <span className="mock-arvr-tag t-live">
        <span className="dot" />
        Live walkthrough · 1.4k visits
      </span>
      <span className="mock-arvr-tag t-corner">04 hotspots</span>
    </div>
  );
}
