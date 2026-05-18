import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, type ServiceMockup } from "../../data/site";
import { CRMMockup } from "../mockups/CRMMockup";
import { ARVRMockup } from "../mockups/ARVRMockup";
import { BrochureMockup } from "../mockups/BrochureMockup";
import { MarketingMockup } from "../mockups/MarketingMockup";

function ServiceMockup({ kind }: { kind: ServiceMockup }) {
  if (kind === "crm") return <CRMMockup />;
  if (kind === "arvr") return <ARVRMockup />;
  if (kind === "brochure") return <BrochureMockup />;
  return <MarketingMockup />;
}

export function HorizontalServices() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackW = trackRef.current.scrollWidth;
      const vw = window.innerWidth;
      setMaxTranslate(Math.max(0, trackW - vw));
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    const t1 = setTimeout(measure, 200);
    const t2 = setTimeout(measure, 600);

    const onScroll = () => {
      if (!containerRef.current) return;
      const wh = window.innerHeight;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const total = height - wh;
      const scrolled = -top;
      if (scrolled <= 0) setProgress(0);
      else if (scrolled >= total) setProgress(1);
      else setProgress(scrolled / total);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const activeIdx = Math.min(
    SERVICES.length - 1,
    Math.floor(progress * SERVICES.length + 0.0001)
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="h-services"
      style={{ height: `${(SERVICES.length + 0.6) * 100}vh` }}
    >
      <span className="divider-label">02 · Services</span>
      <div className="h-services-stick">
        <div className="h-services-head">
          <div>
            <span className="eyebrow">What we do for Indian real estate</span>
            <h2 className="h-display" style={{ marginTop: 16 }}>
              Four disciplines.
              <br />
              <em className="italic-soft">One real estate sales floor.</em>
            </h2>
          </div>
          <div className="h-services-progress">
            <div className="bar">
              <span style={{ transform: `scaleX(${progress})` }} />
            </div>
            <div className="meta">
              <span>SVC · {String(activeIdx + 1).padStart(2, "0")}</span>
              <span>{SERVICES.length} of 4</span>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="h-services-track"
          style={{
            transform: `translate3d(${-progress * maxTranslate}px, 0, 0)`,
            transition: "transform 0.08s linear",
          }}
        >
          {SERVICES.map((s) => (
            <article key={s.num} className="panel">
              <div className="panel-info">
                <div>
                  <div className="panel-tag">
                    <span>{s.tag}</span>
                    <span className="num">/ {s.num}</span>
                  </div>
                  <h3 style={{ marginTop: "1.25rem" }}>
                    {s.title} <em>{s.accent}</em>
                  </h3>
                  <p>{s.desc}</p>
                  <ul className="panel-list">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="panel-foot">
                  <span>GRID · {s.num}</span>
                  <Link to="/contact">
                    Get a quote <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
              <div className="panel-visual">
                <ServiceMockup kind={s.mockup} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
