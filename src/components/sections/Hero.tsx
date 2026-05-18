import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { jump } from "../../hooks/useSmoothScroll";
import { DisciplineTicker } from "./DisciplineTicker";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="grid-bg" />

      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-main">
            <div className="hero-eyebrow reveal">
              <span className="dot" />
              One studio · four real estate disciplines · zero handoffs
            </div>

            <h1 className="reveal" data-delay="1">
              <span className="stack">Close more deals.</span>
              <span className="stack">Build, sell &amp;</span>
              <span className="stack">
                <em className="italic-soft">market</em> as one.
              </span>
            </h1>

            <p className="lead reveal" data-delay="2">
              GRID is India's all-in-one real estate growth partner.
              Indian builders, brokers and channel partners use us to run their
              entire growth stack — a purpose-built real estate CRM,
              photoreal AR/VR virtual site visits and 3D sample flat
              walkthroughs, premium project brochures, and Meta + Google
              performance marketing. Engineered together. Never bolted on.
            </p>

            <div className="hero-cta reveal" data-delay="3">
              <a
                href="#services"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  jump("#services");
                }}
              >
                Explore services <ArrowRight />
              </a>
              <Link to="/contact" className="btn btn-ghost">
                Talk to founders
              </Link>
            </div>
          </div>

          <div className="reveal" data-delay="2">
            <DisciplineTicker />
          </div>
        </div>

        <div className="hero-footer reveal" data-delay="3">
          <div className="hero-stat">
            <div className="num">
              4 <em>disciplines</em>
            </div>
            <div className="lbl">CRM · AR/VR · Brochures · Ads</div>
          </div>
          <div className="hero-stat">
            <div className="num">15,600+</div>
            <div className="lbl">Leads managed</div>
          </div>
          <div className="hero-stat">
            <div className="num">
              ₹31 <em>Cr</em>
            </div>
            <div className="lbl">Pipeline tracked</div>
          </div>
          <div className="hero-stat">
            <div className="num">99.9%</div>
            <div className="lbl">CRM uptime SLA</div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span className="tick" />
        Scroll
      </div>
    </section>
  );
}
