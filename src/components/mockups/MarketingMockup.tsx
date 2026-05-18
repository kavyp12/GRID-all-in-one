import { Heart, MessageCircle, Send, MoreHorizontal, ArrowDownRight } from "lucide-react";

/**
 * Performance marketing mockup — Instagram-style typographic ad
 * (no fake image placeholder), plus floating CPL card and chart.
 */
export function MarketingMockup() {
  return (
    <div className="mock-mkt">
      <div className="mkt-phone">
        <div className="screen">
          {/* Status bar */}
          <div className="ig-statusbar">
            <span>9:41</span>
            <span className="ig-statusbar-r">
              <span className="bar b1" />
              <span className="bar b2" />
              <span className="bar b3" />
            </span>
          </div>

          {/* Account header */}
          <div className="ig-head">
            <span className="ig-avatar">S</span>
            <div className="ig-meta">
              <div className="ig-name">skyline.heights</div>
              <div className="ig-sub">Sponsored · Mumbai</div>
            </div>
            <MoreHorizontal size={14} strokeWidth={1.5} className="ig-more" />
          </div>

          {/* Creative — pure typography on tinted block */}
          <div className="ig-creative">
            <div className="ig-grid" aria-hidden="true" />

            <div className="ig-eyebrow">Pre-launch · 2026</div>

            <div className="ig-title">
              Live
              <br />
              <em>luxury</em>
              <br />
              in 44 floors.
            </div>

            <div className="ig-stamp">
              <span>SKYLINE</span>
              <span className="slash">/</span>
              <span>HEIGHTS</span>
            </div>

            <div className="ig-corner-tl" aria-hidden="true" />
            <div className="ig-corner-br" aria-hidden="true" />
          </div>

          {/* Actions + CTA */}
          <div className="ig-actions">
            <div className="ig-icons">
              <Heart size={14} strokeWidth={1.4} />
              <MessageCircle size={14} strokeWidth={1.4} />
              <Send size={14} strokeWidth={1.4} />
            </div>
            <button className="ig-cta" type="button">
              Book site visit →
            </button>
          </div>
        </div>

        {/* Notch */}
        <span className="mkt-phone-notch" aria-hidden="true" />
      </div>

      {/* Floating metric card — CPL */}
      <div className="mkt-metric">
        <div className="m-label">CPL · Skyline · 7d</div>
        <div className="m-row">
          <div className="m-val">
            ₹ <em>84</em>
          </div>
          <div className="m-delta">
            <ArrowDownRight size={11} strokeWidth={1.8} />
            62% vs market
          </div>
        </div>
        <div className="m-bar" aria-hidden="true">
          <span style={{ width: "38%" }} />
        </div>
        <div className="m-foot">
          <span>You · ₹84</span>
          <span>Market · ₹220</span>
        </div>
      </div>

      {/* Floating chart card */}
      <div className="mkt-chart">
        <h6>Pipeline · last 30d</h6>
        <div className="big">
          +<em> 312</em>%
        </div>
        <svg viewBox="0 0 180 60" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="mkt-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* baseline (dashed) */}
          <path
            d="M0 48 L20 47 L40 46 L60 44 L80 42 L100 41 L120 40 L140 39 L160 38 L180 37"
            stroke="#0a0a0a"
            strokeOpacity="0.3"
            strokeWidth="0.8"
            strokeDasharray="3 3"
          />
          {/* current */}
          <path
            d="M0 50 L20 44 L40 46 L60 36 L80 30 L100 28 L120 20 L140 16 L160 10 L180 4"
            stroke="#0a0a0a"
            strokeWidth="1.6"
          />
          <path
            d="M0 50 L20 44 L40 46 L60 36 L80 30 L100 28 L120 20 L140 16 L160 10 L180 4 L180 60 L0 60 Z"
            fill="url(#mkt-area)"
          />
          <circle cx="180" cy="4" r="3" fill="#0a0a0a" />
          <circle cx="180" cy="4" r="6" fill="none" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
