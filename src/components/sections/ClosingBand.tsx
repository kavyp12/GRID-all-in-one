import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SITE } from "../../data/site";

export function ClosingBand() {
  return (
    <section className="closing-band">
      <div className="wrap">
        <span className="eyebrow on-dark reveal">Ready when you are</span>
        <h2 className="reveal" data-delay="1" style={{ marginTop: 18 }}>
          Let's build the real estate growth system{" "}
          <em>that closes deals</em> for you.
        </h2>
        <p className="copy on-dark reveal" data-delay="2">
          One discovery call. Within 48 hours we send back a one-page plan —
          scoped to your project, your pipeline, your numbers — across CRM,
          AR/VR virtual site visits, brochures and performance marketing.
        </p>
        <div className="cta-row reveal" data-delay="3">
          <Link to="/contact" className="btn btn-light">
            Book a discovery call <ArrowRight />
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="btn btn-ghost"
            style={{ borderColor: "var(--on-dark-line)", color: "var(--on-dark)" }}
          >
            Or call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
