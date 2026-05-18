import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import { SITE, SERVICES } from "../../data/site";

const FAQ = [
  {
    q: "What size of project do you work with?",
    a: "From a single mid-rise tower to multi-project portfolios. Our smallest engagement is a single launch — one tower, a real estate CRM rollout, a virtual sample flat AR/VR walkthrough, project brochures and a pre-launch Meta + Google campaign. Our largest is a 5-year retainer running a developer's entire growth stack across 12+ projects.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Most GRID launches go from kickoff to live real estate CRM + brochure + AR/VR virtual site visit + first ad campaign inside 6 weeks. GRID real estate CRM alone can be live in under 30 minutes. AR/VR 3D walkthroughs and virtual sample flats typically ship in 4–8 weeks depending on tower count and finish variants. Marketing optimisation runs continuously, quarter on quarter.",
  },
  {
    q: "Do you provide AR/VR virtual site visits and 3D sample flats?",
    a: "Yes. We build photoreal 3D digital twins of your project, configurable virtual sample flat walkthroughs, and 360 virtual property tours that run on web, mobile and on-site VR sales gallery pavilions. Indian buyers and NRIs can tour your apartments months before the slab is poured, dramatically reducing site-visit dropoffs and helping close NRI deals in UAE, Singapore, UK and the US.",
  },
  {
    q: "Do you work outside India?",
    a: "Yes — we've delivered for projects in Dubai, London and Singapore, but our core expertise (and pricing) is built for Indian builders, brokers and channel partner networks. We work remote-first with on-site visits for VR sales gallery installs and project photography.",
  },
  {
    q: "What does it cost?",
    a: "GRID real estate CRM starts at ₹4,999/month (solo brokers) up to ₹12,999/month (Growth) — Enterprise is custom. AR/VR virtual walkthroughs, real estate brochure design and performance marketing engagements are scoped per project. Most full-stack engagements land between ₹4–18L for the launch sprint, plus monthly retainers for marketing.",
  },
  {
    q: "Will you sign an NDA before we share details?",
    a: "Yes — happy to sign a mutual NDA before our discovery call. Your launch plans, pricing strategy and project details never leave our team and are never used in our marketing without written consent.",
  },
];

const REASONS = [
  { Icon: Clock, label: "Reply within 24 hours" },
  { Icon: Shield, label: "Mutual NDA before details" },
  { Icon: Zap, label: "Live CRM demo on the call" },
];

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "Real Estate CRM",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <article className="contact-page">
      {/* ── PAGE HERO ───────────────────────────────── */}
      <section className="contact-hero">
        <div className="grid-bg" />
        <div className="wrap">
          <div className="contact-hero-grid">
            <div>
              <span className="eyebrow reveal">06 · Contact · Real Estate Growth Studio</span>
              <h1 className="contact-hero-h reveal" data-delay="1">
                Let's talk about
                <br />
                <em className="italic-soft">your next real estate launch.</em>
              </h1>
              <p className="copy reveal" data-delay="2">
                Whether you need a real estate CRM, an AR/VR virtual site
                visit and 3D sample flat for your sales gallery, a premium
                project brochure, or a Meta + Google performance marketing
                campaign — tell us where you are. A launch, a single tower,
                a portfolio, or just an idea. We'll come back within 48 hours
                with a one-page plan scoped to your project, your pipeline,
                your numbers.
              </p>

              <ul className="contact-reasons reveal" data-delay="3">
                {REASONS.map((r) => (
                  <li key={r.label}>
                    <span className="ic">
                      <r.Icon size={14} strokeWidth={1.5} />
                    </span>
                    {r.label}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="contact-hero-meta reveal" data-delay="2">
              <div className="cm-head">
                <span className="ticker-pulse" />
                <span>Studio · open for 2026</span>
              </div>
              <div className="cm-grid">
                <div>
                  <span className="lbl">Reply time</span>
                  <span className="val">&lt; 24 hrs</span>
                </div>
                <div>
                  <span className="lbl">Discovery call</span>
                  <span className="val">45 min</span>
                </div>
                <div>
                  <span className="lbl">Proposal</span>
                  <span className="val">48 hrs</span>
                </div>
                <div>
                  <span className="lbl">Engagement</span>
                  <span className="val">3 mo +</span>
                </div>
              </div>
              <div className="cm-rule" />
              <div className="cm-foot">
                <span className="lbl">Reach us</span>
                <a className="val" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── INFO + FORM ─────────────────────────────── */}
      <section className="section contact-section">
        <div className="wrap">
          <div className="contact-wrap">
            <div className="contact-info reveal">
              <div className="contact-row">
                <span className="ic">
                  <Phone size={16} />
                </span>
                <div>
                  <div className="lbl">Phone / WhatsApp</div>
                  <a
                    className="val"
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="contact-row">
                <span className="ic">
                  <Mail size={16} />
                </span>
                <div>
                  <div className="lbl">Email</div>
                  <a className="val" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="contact-row">
                <span className="ic">
                  <MapPin size={16} />
                </span>
                <div>
                  <div className="lbl">Where we work</div>
                  <div className="val">{SITE.location}</div>
                </div>
              </div>

              <div className="contact-services">
                <div className="cs-head">
                  <span>What we work on</span>
                  <span className="dim">04 / 04</span>
                </div>
                <ul>
                  {SERVICES.map((s) => (
                    <li key={s.num}>
                      <span className="idx">{s.num}</span>
                      <span className="ttl">{s.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {submitted ? (
              <div className="contact-form success reveal" style={{ textAlign: "center", padding: "4rem 2rem", background: "var(--surface)", borderRadius: "24px", border: "1px solid var(--paper-strong)" }}>
                <Sparkles size={48} strokeWidth={1.5} style={{ margin: "0 auto 1.5rem", color: "var(--accent)" }} />
                <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Thank you for reaching out!</h4>
                <p className="copy" style={{ margin: "0 auto", maxWidth: "400px" }}>
                  We've received your enquiry. Our team will review your project details and get back to you within 24 hours.
                </p>
                <button
                  className="btn btn-ghost"
                  style={{ marginTop: "2rem" }}
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ ...form, message: "" });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form reveal" onSubmit={onSubmit}>
                <header className="form-head">
                  <span className="eyebrow">Send an enquiry</span>
                  <span className="ticker-mono dim">FORM · 01</span>
                </header>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={onChange}
                      placeholder="Developer / Brokerage"
                    />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Service of interest</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={onChange}
                    >
                      <option>Real Estate CRM</option>
                      <option>AR / VR Walkthroughs</option>
                      <option>Brochures &amp; Brand Kits</option>
                      <option>Performance Marketing</option>
                      <option>Full stack — all four</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={onChange}
                    placeholder="A few lines about your project, launch date, current pain points…"
                  />
                </div>

                <div className="form-foot">
                  <span className="form-note">
                    Your details are used only to respond — never sold or
                    shared.
                  </span>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={sending}
                  >
                    {sending ? "Opening mail…" : "Send enquiry"} <ArrowRight />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── PULL-QUOTE ──────────────────────────────── */}
      <section className="contact-quote">
        <div className="wrap">
          <span className="eyebrow reveal">A note from a client</span>
          <blockquote className="reveal" data-delay="1">
            <p>
              Calling GRID was the cheapest decision we made all year.{" "}
              <em>One discovery call replaced four vendor meetings.</em> Six
              weeks later, our CRM was live, the 3D walkthrough was on the
              sales gallery iPad, and we'd already taken 11 tokens.
            </p>
            <footer>
              <span className="avatar">V</span>
              <span>
                <span className="name">Vishal Prajapati</span>
                <span className="role">Director · Gohil Developers</span>
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="section contact-faq">
        <div className="wrap">
          <div className="faq-grid">
            <div>
              <span className="eyebrow reveal">Frequently asked · GRID</span>
              <h2 className="h-display h-2 reveal" data-delay="1">
                Before you write,
                <br />
                <em className="italic-soft">a few things to know.</em>
              </h2>
              <p className="copy reveal" data-delay="2">
                Common questions about our real estate CRM, AR/VR virtual
                site visits, brochure design and performance marketing
                engagements. If your question isn't here, drop it straight
                into the form — we'd rather answer one specific question
                than a generic one.
              </p>
            </div>
            <ul className="faq-list">
              {FAQ.map((item, i) => (
                <li key={item.q} className="reveal" data-delay={String((i % 4) + 1)}>
                  <details>
                    <summary>
                      <span className="idx">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="q">{item.q}</span>
                      <span className="plus" aria-hidden="true" />
                    </summary>
                    <p>{item.a}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── DIRECT-LINE STRIP ───────────────────────── */}
      <section className="contact-strip">
        <div className="wrap">
          <div className="cs-row reveal">
            <div>
              <span className="eyebrow on-dark">Skip the form</span>
              <h3 className="cs-h">
                Just call.
                <br />
                <em>{SITE.phone}</em>
              </h3>
            </div>
            <div className="cs-actions">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="btn btn-light"
              >
                Call now <Phone size={14} />
              </a>
              <a
                href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                style={{
                  borderColor: "var(--on-dark-line)",
                  color: "var(--on-dark)",
                }}
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
