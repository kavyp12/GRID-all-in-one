import { Link } from "react-router-dom";
import { SITE } from "../../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link to="/" className="brand">
              <span className="brand-mono">G</span>
              <span>
                {SITE.name}
                <small>{SITE.tagline}</small>
              </span>
            </Link>
            <p className="copy" style={{ fontSize: 14, marginTop: "1.25rem" }}>
              GRID — India's all-in-one real estate growth partner. One
              team, four disciplines: real estate CRM, AR/VR virtual site
              visits & 3D sample flats, project brochures and Meta + Google
              performance marketing — built around your pipeline.
            </p>
          </div>

          <div>
            <div className="foot-h">Services</div>
            <ul className="foot-list">
              <li><a href="#services">Real Estate CRM for Builders &amp; Brokers</a></li>
              <li><a href="#services">AR / VR Virtual Site Visits &amp; 3D Sample Flats</a></li>
              <li><a href="#services">Real Estate Brochures &amp; Brand Design</a></li>
              <li><a href="#services">Real Estate Performance Marketing</a></li>
            </ul>
          </div>

          <div>
            <div className="foot-h">Studio</div>
            <ul className="foot-list">
              <li><a href="/#process">Process</a></li>
              <li><a href="/#proof">Proof</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="foot-h">Reach us</div>
            <ul className="foot-list">
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              </li>
              <li>{SITE.location}</li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {SITE.name} {SITE.tagline}. All rights reserved.
          </span>
          <span>Made in India · v1.0</span>
        </div>
      </div>
    </footer>
  );
}
