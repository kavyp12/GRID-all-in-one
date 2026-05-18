import { STATS } from "../../data/site";

export function StatBand() {
  return (
    <section id="proof" className="section stat-band">
      <span className="divider-label">04 · Proof</span>
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: "3rem" }}>
          <span className="eyebrow reveal">The numbers · Indian real estate</span>
          <h2 className="h-display h-2 reveal" data-delay="1">
            What an integrated CRM, AR/VR,
            <br />
            brochures &amp; <em className="italic-soft">marketing stack</em> delivers.
          </h2>
        </div>
        <div className="stat-grid">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="stat reveal"
              data-delay={String(i + 1)}
            >
              <div className="stat-num">
                {s.num}
                <em>{s.em}</em>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
