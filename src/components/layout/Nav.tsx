import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SITE, NAV } from "../../data/site";
import { jump } from "../../hooks/useSmoothScroll";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToAnchor = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      jump(hash);
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mono">G</span>
          <span>
            {SITE.name}
            <small>{SITE.tagline}</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV.map((n) =>
            n.href.startsWith("#") ? (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => goToAnchor(e, n.href)}
              >
                {n.label}
              </a>
            ) : (
              <Link key={n.href} to={n.href}>
                {n.label}
              </Link>
            )
          )}
        </nav>

        <Link
          to="/contact"
          className="btn btn-primary"
          style={{ padding: "11px 20px" }}
        >
          Book a call <ArrowUpRight />
        </Link>
      </div>
    </header>
  );
}
