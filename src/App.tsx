import { Routes, Route } from "react-router-dom";
import { useReveal } from "./hooks/useReveal";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useSeo } from "./lib/seo";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { DarkBand } from "./components/sections/DarkBand";
import { HorizontalServices } from "./components/sections/HorizontalServices";
import { Process } from "./components/sections/Process";
import { StatBand } from "./components/sections/StatBand";
import { Testimonials } from "./components/sections/Testimonials";
import { ClosingBand } from "./components/sections/ClosingBand";
import { ContactPage } from "./components/sections/ContactPage";

function Home() {
  useSeo({
    title:
      "Real Estate CRM, AR/VR Virtual Tours, Brochures & Marketing in India | GRID",
    description:
      "GRID is India's all-in-one real estate growth partner — purpose-built CRM for builders & brokers, AR/VR virtual site visits and 3D sample flat walkthroughs, premium project brochures, and Meta + Google Ads performance marketing. One studio, four disciplines, built for Indian developers.",
    path: "/",
    keywords:
      "real estate CRM India, AR VR real estate India, virtual site visit, 3D walkthrough company India, virtual sample flat, real estate brochure design India, real estate performance marketing India, real estate digital marketing agency, all in one real estate growth partner, end to end real estate marketing studio, Meta Ads real estate India, Google Ads real estate India",
  });
  return (
    <>
      <Hero />
      <DarkBand />
      <HorizontalServices />
      <Process />
      <StatBand />
      <Testimonials />
      <ClosingBand />
    </>
  );
}

function ContactRoute() {
  useSeo({
    title:
      "Book a Real Estate Growth Consultation — CRM, AR/VR, Brochures, Marketing | GRID",
    description:
      "Talk to GRID — India's all-in-one real estate growth partner. Book a discovery call for our CRM, AR/VR virtual site visits & 3D sample flats, project brochures or Meta/Google performance marketing. One-page plan in 48 hours, scoped to your project.",
    path: "/contact",
    keywords:
      "real estate CRM demo India, virtual tour quote real estate, real estate brochure design quote, real estate marketing agency contact, real estate growth consultation India",
  });
  return <ContactPage />;
}

export default function App() {
  useSmoothScroll();
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
