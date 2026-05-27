/**
 * Four cohesive technical-drawing illustrations, one per process step.
 * They share a mono-line aesthetic with subtle annotations.
 */

const COMMON = {
  stroke: "currentColor",
  fontFamily: "Geist Mono",
  fontSize: 6.5,
  letterSpacing: 1.6,
};

export function ProcessIllust({ i }: { i: number }) {
  if (i === 0) return <Discover />;
  if (i === 1) return <Design />;
  if (i === 2) return <Deploy />;
  return <Optimise />;
}

/* ──────────────────────────────────────────────
   01 · Discover — radar / target with data points
   ────────────────────────────────────────────── */
function Discover() {
  return (
    <svg viewBox="0 0 320 200" width="92%" aria-hidden="true">
      <defs>
        <radialGradient id="discover-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      <text x="14" y="20" fill="currentColor" {...COMMON} opacity="0.5">DISCOVERY · MAP</text>

      {/* Glow */}
      <circle cx="160" cy="105" r="80" fill="url(#discover-glow)" />

      {/* Concentric rings */}
      <g stroke="currentColor" fill="none" strokeWidth="0.6">
        <circle cx="160" cy="105" r="20" opacity="0.65" />
        <circle cx="160" cy="105" r="40" opacity="0.4" />
        <circle cx="160" cy="105" r="60" opacity="0.25" />
        <circle cx="160" cy="105" r="80" opacity="0.15" />
      </g>

      {/* Crosshair */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.4" strokeDasharray="2 3">
        <line x1="50" y1="105" x2="270" y2="105" />
        <line x1="160" y1="20" x2="160" y2="190" />
      </g>

      {/* Axis labels */}
      <g fill="currentColor" {...COMMON} opacity="0.4">
        <text x="270" y="103" textAnchor="end">X · CONVERSION</text>
        <text x="158" y="14" textAnchor="end">Y · INTENT</text>
      </g>

      {/* Data points (leak map) */}
      <g fill="currentColor">
        <circle cx="120" cy="78" r="1.6" opacity="0.5" />
        <circle cx="142" cy="92" r="1.6" opacity="0.5" />
        <circle cx="190" cy="112" r="1.6" opacity="0.5" />
        <circle cx="210" cy="84" r="1.6" opacity="0.6" />
        <circle cx="172" cy="142" r="1.6" opacity="0.5" />
        <circle cx="130" cy="128" r="1.6" opacity="0.5" />
        <circle cx="222" cy="138" r="1.6" opacity="0.4" />
        <circle cx="108" cy="108" r="1.6" opacity="0.55" />
        <circle cx="240" cy="100" r="1.6" opacity="0.45" />
      </g>

      {/* Targeted hotspot */}
      <g>
        <circle cx="186" cy="78" r="5" fill="currentColor" />
        <rect x="172" y="64" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="172" y1="64" x2="178" y2="64" stroke="currentColor" strokeWidth="1" />
        <line x1="172" y1="64" x2="172" y2="70" stroke="currentColor" strokeWidth="1" />
        <line x1="194" y1="92" x2="200" y2="92" stroke="currentColor" strokeWidth="1" />
        <line x1="200" y1="86" x2="200" y2="92" stroke="currentColor" strokeWidth="1" />
        {/* leader line */}
        <line x1="200" y1="78" x2="244" y2="50" stroke="currentColor" strokeWidth="0.6" />
        <line x1="244" y1="50" x2="284" y2="50" stroke="currentColor" strokeWidth="0.6" />
        <text x="244" y="44" fill="currentColor" {...COMMON} opacity="0.7">LEAK · 42%</text>
      </g>

      {/* Footer index */}
      <text x="14" y="190" fill="currentColor" {...COMMON} opacity="0.45">
        09 SIGNALS · 01 PRIMARY LEAK · MAPPED 03·05·26
      </text>
    </svg>
  );
}

/* ──────────────────────────────────────────────
   02 · Design — architectural elevation w/ dims
   ────────────────────────────────────────────── */
function Design() {
  return (
    <svg viewBox="0 0 320 200" width="92%" aria-hidden="true">
      <text x="14" y="20" fill="currentColor" {...COMMON} opacity="0.5">ELEVATION · 01</text>

      {/* Dimension line — top */}
      <g stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.55">
        <line x1="70" y1="32" x2="250" y2="32" />
        <line x1="70" y1="28" x2="70" y2="36" />
        <line x1="250" y1="28" x2="250" y2="36" />
        <text x="160" y="28" textAnchor="middle" {...COMMON}>32.0 M</text>
      </g>

      {/* Dimension line — left */}
      <g stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.55">
        <line x1="56" y1="48" x2="56" y2="172" />
        <line x1="52" y1="48" x2="60" y2="48" />
        <line x1="52" y1="172" x2="60" y2="172" />
        <g transform="rotate(-90 46 110)">
          <text x="46" y="113" textAnchor="middle" {...COMMON}>44 F · 132M</text>
        </g>
      </g>

      {/* Building body */}
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <rect x="70" y="48" width="180" height="124" />
        {/* Crown */}
        <line x1="70" y1="58" x2="250" y2="58" />
        <rect x="148" y="32" width="24" height="16" fill="none" />
        {/* Base */}
        <line x1="70" y1="162" x2="250" y2="162" />
        <line x1="60" y1="172" x2="260" y2="172" />
      </g>

      {/* Window grid */}
      <g fill="currentColor" opacity="0.7">
        {Array.from({ length: 9 }).map((_, r) =>
          Array.from({ length: 10 }).map((__, c) => (
            <rect
              key={`${r}-${c}`}
              x={80 + c * 17}
              y={68 + r * 10}
              width="9"
              height="5"
              opacity={(r + c) % 5 === 0 ? 1 : 0.35}
            />
          ))
        )}
      </g>

      {/* Highlighted unit + callout */}
      <g>
        <rect x={80 + 4 * 17 - 1} y={68 + 3 * 10 - 1} width="11" height="7" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <line x1="166" y1="98" x2="220" y2="78" stroke="currentColor" strokeWidth="0.6" />
        <line x1="220" y1="78" x2="290" y2="78" stroke="currentColor" strokeWidth="0.6" />
        <text x="220" y="72" fill="currentColor" {...COMMON} opacity="0.7">UNIT · 14B</text>
      </g>

      {/* Annotation: floor index along right */}
      <g fill="currentColor" {...COMMON} opacity="0.45">
        <text x="260" y="76" textAnchor="start">F · 12</text>
        <text x="260" y="126" textAnchor="start">F · 06</text>
        <text x="260" y="166" textAnchor="start">GND</text>
      </g>

      <text x="14" y="190" fill="currentColor" {...COMMON} opacity="0.45">
        SECTION A — A′ · SCALE 1:200
      </text>
    </svg>
  );
}

/* ──────────────────────────────────────────────
   03 · Deploy — pipeline / system diagram
   ────────────────────────────────────────────── */
function Deploy() {
  return (
    <svg viewBox="0 0 320 200" width="92%" aria-hidden="true">
      <text x="14" y="20" fill="currentColor" {...COMMON} opacity="0.5">SYSTEM · DEPLOY</text>

      {/* Nodes */}
      {[
        { x: 50, y: 60, t: "META · GOOG", sub: "INTAKE" },
        { x: 195, y: 60, t: "GRID · CRM", sub: "CORE" },
        { x: 50, y: 140, t: "VR · WALK", sub: "GALLERY" },
        { x: 195, y: 140, t: "OPS · BI", sub: "OUTPUT" },
      ].map((n, idx) => (
        <g key={idx}>
          <rect
            x={n.x}
            y={n.y}
            width="80"
            height="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          {/* corner ticks */}
          <line x1={n.x} y1={n.y} x2={n.x + 5} y2={n.y} stroke="currentColor" strokeWidth="1.4" />
          <line x1={n.x} y1={n.y} x2={n.x} y2={n.y + 5} stroke="currentColor" strokeWidth="1.4" />
          <line x1={n.x + 80} y1={n.y + 36} x2={n.x + 75} y2={n.y + 36} stroke="currentColor" strokeWidth="1.4" />
          <line x1={n.x + 80} y1={n.y + 36} x2={n.x + 80} y2={n.y + 31} stroke="currentColor" strokeWidth="1.4" />

          <text x={n.x + 8} y={n.y + 14} fill="currentColor" {...COMMON} fontSize="7" opacity="0.5">{n.sub}</text>
          <text x={n.x + 8} y={n.y + 28} fill="currentColor" fontFamily="Geist Mono" fontSize="9" letterSpacing="1.4">{n.t}</text>
        </g>
      ))}

      {/* Connectors */}
      <g stroke="currentColor" strokeWidth="0.8" fill="none">
        {/* Intake → Core */}
        <line x1="130" y1="78" x2="195" y2="78" strokeDasharray="2 3" />
        <path d="M188 74 L195 78 L188 82 Z" fill="currentColor" />
        {/* Core → Output */}
        <line x1="235" y1="96" x2="235" y2="140" strokeDasharray="2 3" />
        <path d="M231 133 L235 140 L239 133 Z" fill="currentColor" />
        {/* Gallery → Output */}
        <line x1="130" y1="158" x2="195" y2="158" strokeDasharray="2 3" />
        <path d="M188 154 L195 158 L188 162 Z" fill="currentColor" />
        {/* Intake → Gallery (data feed) */}
        <line x1="90" y1="96" x2="90" y2="140" strokeDasharray="2 3" />
        <path d="M86 133 L90 140 L94 133 Z" fill="currentColor" />
      </g>

      {/* Central tag */}
      <g>
        <rect x="135" y="92" width="50" height="16" fill="currentColor" />
        <text x="160" y="103" textAnchor="middle" fill="#f7f4ed" fontFamily="Geist Mono" fontSize="7" letterSpacing="1.8">
          PIPELINE
        </text>
      </g>

      <text x="14" y="190" fill="currentColor" {...COMMON} opacity="0.45">
        04 NODES · LIVE · UPTIME 99.9%
      </text>
    </svg>
  );
}

/* ──────────────────────────────────────────────
   04 · Optimise — multi-line chart w/ +312% annotation
   ────────────────────────────────────────────── */
function Optimise() {
  // Note: this renders inside a dark-variant card, so currentColor is the on-dark text
  return (
    <svg viewBox="0 0 320 200" width="92%" aria-hidden="true">
      <text x="14" y="20" fill="currentColor" {...COMMON} opacity="0.55">PIPELINE · 90D</text>

      {/* Grid */}
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.18">
        <line x1="40" y1="50" x2="300" y2="50" />
        <line x1="40" y1="90" x2="300" y2="90" />
        <line x1="40" y1="130" x2="300" y2="130" />
        <line x1="40" y1="170" x2="300" y2="170" />
        <line x1="40" y1="50" x2="40" y2="170" />
        <line x1="105" y1="50" x2="105" y2="170" />
        <line x1="170" y1="50" x2="170" y2="170" />
        <line x1="235" y1="50" x2="235" y2="170" />
        <line x1="300" y1="50" x2="300" y2="170" />
      </g>

      {/* Y axis labels */}
      <g fill="currentColor" {...COMMON} opacity="0.45">
        <text x="34" y="53" textAnchor="end">100</text>
        <text x="34" y="93" textAnchor="end">75</text>
        <text x="34" y="133" textAnchor="end">50</text>
        <text x="34" y="173" textAnchor="end">25</text>
      </g>

      {/* X axis labels */}
      <g fill="currentColor" {...COMMON} opacity="0.45">
        <text x="40" y="184" textAnchor="middle">W·01</text>
        <text x="105" y="184" textAnchor="middle">W·04</text>
        <text x="170" y="184" textAnchor="middle">W·08</text>
        <text x="235" y="184" textAnchor="middle">W·10</text>
        <text x="300" y="184" textAnchor="middle">NOW</text>
      </g>

      {/* Baseline (dashed) — before */}
      <path
        d="M40 154 L75 152 L110 150 L145 148 L180 146 L215 144 L250 142 L285 140 L300 138"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeDasharray="3 3"
        opacity="0.45"
      />

      {/* Current (solid) — after GRID */}
      <path
        d="M40 154 L75 142 L110 130 L145 116 L180 102 L215 88 L250 70 L285 56 L300 50"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />

      {/* Filled area under current */}
      <path
        d="M40 154 L75 142 L110 130 L145 116 L180 102 L215 88 L250 70 L285 56 L300 50 L300 170 L40 170 Z"
        fill="currentColor"
        opacity="0.06"
      />

      {/* Data points */}
      {[
        { x: 75, y: 142 },
        { x: 145, y: 116 },
        { x: 215, y: 88 },
        { x: 285, y: 56 },
      ].map((p, idx) => (
        <g key={idx}>
          <circle cx={p.x} cy={p.y} r="3" fill="currentColor" />
          <circle cx={p.x} cy={p.y} r="6" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        </g>
      ))}

      {/* Final point — highlighted */}
      <circle cx="300" cy="50" r="5" fill="currentColor" />
      <circle cx="300" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />

      {/* +312% callout */}
      <g>
        <line x1="300" y1="50" x2="270" y2="34" stroke="currentColor" strokeWidth="0.6" />
        <rect x="200" y="22" width="68" height="18" fill="currentColor" />
        <text x="234" y="34" textAnchor="middle" fill="#0a0a0a" fontFamily="Geist" fontSize="13" fontWeight="500">
          + 312%
        </text>
      </g>

      <text x="14" y="194" fill="currentColor" {...COMMON} opacity="0.45">
        VS BASELINE · MEASURED QUARTERLY
      </text>
    </svg>
  );
}
