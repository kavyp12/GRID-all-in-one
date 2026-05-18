import { PARTNERS } from "../../data/site";

export function DarkBand() {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <section className="band-dark">
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {items.map((p, i) => (
            <span key={i} className="marquee-item">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="wrap manifesto">
        <div className="manifesto-grid">
          <div>
            <span className="eyebrow on-dark reveal">01 · Manifesto</span>
          </div>
          <div className="reveal" data-delay="1">
            <h2>
              Most Indian real estate businesses pay four different vendors —
              a CRM company, a 3D / AR-VR studio, a brochure designer, and a
              digital marketing agency — who never speak to each other.{" "}
              <em>GRID replaces all four — and the work compounds.</em>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
