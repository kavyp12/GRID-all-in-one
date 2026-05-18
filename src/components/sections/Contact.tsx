import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { SITE } from "../../data/site";

export function Contact() {
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
      const response = await fetch("http://localhost:3002/api/contact", {
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
    <section id="contact" className="section contact-section">
      <span className="divider-label">06 · Contact</span>
      <div className="wrap">
        <div className="section-head" style={{ maxWidth: 1080 }}>
          <span className="eyebrow reveal">Let's talk</span>
          <h2 className="h-display h-1 reveal" data-delay="1">
            Ready to grow?
            <br />
            <em className="italic-soft">We're listening.</em>
          </h2>
          <p className="copy reveal" data-delay="2">
            Tell us about your project — a launch, a single tower, a portfolio,
            or just an idea. We'll come back with a one-page plan within 48
            hours.
          </p>
        </div>

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

            <div
              style={{
                marginTop: "0.5rem",
                padding: "1.25rem 1.5rem",
                border: "1px dashed var(--paper-strong)",
                borderRadius: 16,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "var(--ink-mute)",
                  marginBottom: 8,
                }}
              >
                Response time
              </div>
              <div className="copy" style={{ margin: 0, fontSize: 14 }}>
                We reply within one working day. Discovery calls typically
                booked the same week.
              </div>
            </div>
          </div>

          {submitted ? (
            <div 
              className="contact-form success reveal" 
              style={{ 
                textAlign: "center", 
                padding: "4rem 2rem", 
                background: "var(--surface)", 
                borderRadius: "24px", 
                border: "1px dashed var(--paper-strong)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
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
                    placeholder="Ronnie Patel"
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
                  Your details are used only to respond — never sold or shared.
                </span>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send enquiry"} <ArrowRight />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}