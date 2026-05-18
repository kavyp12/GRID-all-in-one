import { TESTIMONIALS } from "../../data/site";

export function Testimonials() {
  return (
    <section className="section">
      <span className="divider-label">05 · Voices</span>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal">What Indian builders say</span>
          <h2 className="h-display h-2 reveal" data-delay="1">
            Trusted by Indian real estate builders,
            <br />
            <em className="italic-soft">obsessed over</em> by their sales floors.
          </h2>
        </div>

        <div className="tests">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className="test reveal"
              data-delay={String(i + 1)}
            >
              <p className="test-quote">{t.quote}</p>
              <div className="test-by">
                <span className="avatar">{t.avatar}</span>
                <span>
                  <span className="name">{t.name}</span>
                  <span className="role">{t.role}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
