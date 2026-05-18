export const SITE = {
  name: "GRID",
  tagline: "Real Estate Growth Studio",
  phone: "+91 93131 53036",
  email: "contact@enhc.tech",
  location: "India · Remote-friendly",
} as const;

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "/contact" },
] as const;

export const PARTNERS = [
  "Gohil Developers",
  "Skyline Realty",
  "Urban Homes",
  "Kapoor Properties",
  "Lodha",
  "Prestige",
] as const;

export type ServiceMockup = "crm" | "arvr" | "brochure" | "marketing";

export interface Service {
  num: string;
  tag: string;
  title: string;
  accent: string;
  desc: string;
  bullets: string[];
  mockup: ServiceMockup;
}

export const SERVICES: Service[] = [
  {
    num: "01",
    tag: "Software · GRID",
    title: "Real Estate CRM",
    accent: "the operating system.",
    desc:
      "GRID is our purpose-built real estate CRM for Indian builders, brokers, developers and channel partners. It captures every Meta, Google, MagicBricks, 99acres, Housing.com, web form and walk-in lead, scores intent with AI, and runs your telecalling, site visits and channel partner commissions on one platform.",
    bullets: [
      "Lead capture from MagicBricks, 99acres, Housing.com, Meta & Google",
      "Telecalling center with dispositions and recording",
      "Site visit scheduling, agent ratings & RERA audit trails",
      "Channel partner portal, commissions & payouts",
    ],
    mockup: "crm",
  },
  {
    num: "02",
    tag: "Immersive · Virtual Grid",
    title: "AR / VR Virtual Site Visits",
    accent: "before you build.",
    desc:
      "Photoreal 3D digital twins, virtual property tours and virtual sample flat walkthroughs of every apartment, amenity and view. Indian buyers and NRIs tour your project on web, mobile or in your on-site VR sales gallery pavilion — months before the slab is poured.",
    bullets: [
      "Photoreal 3D real-time virtual site visits",
      "Web, mobile and on-site VR sales gallery pavilions",
      "Configurable virtual sample flats, units & finishes",
      "360 virtual property tours for NRI buyers & remote viewing",
    ],
    mockup: "arvr",
  },
  {
    num: "03",
    tag: "Design · Print + Digital",
    title: "Real Estate Brochures & Brand",
    accent: "that get picked up.",
    desc:
      "Premium real estate brochure design, project brochures, interactive PDF flipbooks, coffee-table books, hoarding artwork, OOH launch collateral and full brand identity systems — concept to press, with the eye of a luxury fashion house. Built for Indian builders launching residential, commercial and luxury projects.",
    bullets: [
      "Project brochures, coffee-table books & flipbook PDFs",
      "Hoardings, OOH and launch collateral",
      "Brand identity systems & logos for real estate",
      "Investor decks, RERA collateral & sales kit packaging",
    ],
    mockup: "brochure",
  },
  {
    num: "04",
    tag: "Growth · Marketing",
    title: "Real Estate Performance Marketing",
    accent: "that closes.",
    desc:
      "Real estate performance marketing engineered for cost-per-token-booking — not vanity clicks. Meta Ads, Google Ads, YouTube, landing pages, WhatsApp funnels, NRI campaigns in UAE / UK / Singapore / US, and CRM-synced retargeting — all measured against revenue, not impressions.",
    bullets: [
      "Meta Ads + Google Ads management for builders",
      "Landing pages, WhatsApp funnels & NRI campaigns",
      "Creative production at scale (video, reels, statics)",
      "CRM-synced ROAS & cost-per-booking reporting",
    ],
    mockup: "marketing",
  },
];

export interface ProcessStep {
  num: string;
  title: string;
  em: string;
  desc: string;
  variant: "" | "cream" | "deep" | "dark";
}

export const PROCESS: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    em: "the leaks.",
    desc:
      "Workshops with your sales, marketing and project teams. We map where real estate leads die in your funnel, which assets convert, and what your competitors do better across CRM, AR/VR, brochures and digital ads.",
    variant: "",
  },
  {
    num: "02",
    title: "Design",
    em: "the system.",
    desc:
      "Strategy, wireframes, brand direction, 3D moodboards for the virtual walkthrough, and media plans for the launch campaign. You sign off on the look, the funnel and the numbers — before a single line of code or polygon.",
    variant: "cream",
  },
  {
    num: "03",
    title: "Deploy",
    em: "the stack.",
    desc:
      "Build sprint. GRID real estate CRM goes live, the 3D walkthrough and virtual sample flat ship to the sales gallery iPad and VR pavilion, brochures hit press, Meta and Google campaigns flip on.",
    variant: "deep",
  },
  {
    num: "04",
    title: "Optimise",
    em: "the numbers.",
    desc:
      "Monthly reviews against pipeline value, ROAS and close rate. We tune creative, AI lead scoring, walkthrough hotspots and ad budgets — quarter after quarter — until cost-per-booking compounds down.",
    variant: "dark",
  },
];

export const STATS = [
  { num: "15,600", em: "+", label: "Leads under management" },
  { num: "₹31", em: " Cr", label: "Pipeline value tracked" },
  { num: "300", em: "+", label: "3D projects delivered" },
  { num: "3.2", em: "×", label: "Higher lead-to-token" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "GRID gave us one team for everything — the CRM, the 3D walkthrough and the ad campaigns. Pipeline tripled and we stopped chasing four different vendors.",
    name: "Vishal Prajapati",
    role: "Director · Gohil Developers",
    avatar: "V",
  },
  {
    quote:
      "The brochure and the AR experience told the same story. Buyers walked in already convinced. Our token-to-booking ratio jumped 40% in a single quarter.",
    name: "Priya Mehta",
    role: "Sales Head · Urban Homes",
    avatar: "P",
  },
] as const;
