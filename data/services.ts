import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "turnkey",
    slug: "turnkey-projects",
    category: "contracting",
    title: "Turnkey projects & solutions",
    summary:
      "End to end electrical delivery covering design, procurement, installation and commissioning.",
    description:
      "We assume single point responsibility for the entire electrical scope of your project. Our teams coordinate with civil, HVAC and interiors to keep the electrical timeline aligned so you get a fully energised building without juggling multiple vendors.",
    bullets: [
      "Detailed engineering and shop drawings",
      "Vetted material procurement and vendor management",
      "Milestone based execution with weekly progress reports",
      "Testing, commissioning and statutory approvals",
    ],
    icon: "layers",
    accent: "from-brand-600 to-brand-400",
  },
  {
    id: "ht-works",
    slug: "ht-electrical-works",
    category: "contracting",
    title: "HT electrical works",
    summary:
      "Licensed installation of high tension infrastructure up to 11 kV for industrial and commercial developments.",
    description:
      "From transformer yard civil coordination to switchgear installation and HT cable jointing, our licensed teams execute HT works with rigorous safety protocols and utility board coordination.",
    bullets: [
      "Transformer erection and testing",
      "HT switchgear installation and cable jointing",
      "KSEB liaison and statutory approvals",
      "Load management and metering panels",
    ],
    icon: "power",
    accent: "from-accent-600 to-accent-400",
  },
  {
    id: "lt-works",
    slug: "lt-electrical-works",
    category: "contracting",
    title: "LT electrical works",
    summary:
      "Low tension distribution, panel boards and circuit installations engineered for reliability.",
    description:
      "We design and install LT distribution networks with attention to load balancing, harmonic mitigation and future scalability. Every panel is factory tested and documented before energisation.",
    bullets: [
      "Main distribution and sub distribution panels",
      "Bus duct and rising main installation",
      "Cable trays, containment and routing",
      "Earthing and lightning protection",
    ],
    icon: "zap",
    accent: "from-brand-600 to-brand-400",
  },
  {
    id: "internal",
    slug: "internal-electrification",
    category: "contracting",
    title: "Internal electrification",
    summary:
      "Concealed wiring, lighting layouts and finishing electricals for homes, offices and retail spaces.",
    description:
      "Precision wiring with quality copper conductors and FR grade PVC insulation. We work closely with interior teams to hide services beautifully while keeping load calculations and safety uncompromised.",
    bullets: [
      "Concealed and modular wiring systems",
      "Architectural and functional lighting",
      "Modular switches and premium fittings",
      "Smart home ready circuits",
    ],
    icon: "lightbulb",
    accent: "from-accent-600 to-accent-400",
  },
  {
    id: "dg-erection",
    slug: "dg-erection",
    category: "contracting",
    title: "DG erection & commissioning",
    summary:
      "Diesel generator sizing, installation, exhaust, acoustic enclosures and load testing.",
    description:
      "We handle DG sets from foundation to synchronisation. Every install includes acoustic compliance, exhaust routing, fuel system safety and full load tests documented for statutory records.",
    bullets: [
      "Foundation design and vibration isolation",
      "AMF panels and auto synchronisation",
      "Exhaust and acoustic treatment",
      "Load bank and functional testing",
    ],
    icon: "factory",
    accent: "from-brand-600 to-brand-400",
  },
  {
    id: "low-power",
    slug: "low-power-wiring",
    category: "contracting",
    title: "Low power wiring",
    summary:
      "Structured cabling for CCTV, access control, fire alarm and building automation.",
    description:
      "Neatly labelled containment and dressed cabinets set the tone for reliable low power services. We integrate CCTV, access control, fire alarm and BMS trunking under one plan for simpler operations.",
    bullets: [
      "CCTV, intercom and access control cabling",
      "Fire alarm and PA system wiring",
      "Cat6A/Cat6 and fibre backbones",
      "BMS and IoT ready pathways",
    ],
    icon: "cable",
    accent: "from-accent-600 to-accent-400",
  },
  {
    id: "network-cabling",
    slug: "network-cabling",
    category: "contracting",
    title: "Network cabling",
    summary:
      "Structured data cabling with certified terminations and performance testing.",
    description:
      "Whether it is a boutique office or a multi floor showroom, our network cabling is planned for cable dressing, patch panel neatness and Fluke certified performance.",
    bullets: [
      "Cat6 and Cat6A structured cabling",
      "Fibre optic backbones and splicing",
      "Rack integration and cable dressing",
      "Fluke certified test reports",
    ],
    icon: "network",
    accent: "from-brand-600 to-brand-400",
  },
  {
    id: "consultancy",
    slug: "electrical-consultancy",
    category: "consultancy",
    title: "Electrical consultancy",
    summary:
      "Independent advisory for developers, architects and industry owners.",
    description:
      "We help clients make informed decisions with feasibility studies, tender document preparation and contractor evaluation. Our recommendations balance capex, opex and safety over the life of the asset.",
    bullets: [
      "Feasibility and load studies",
      "Tender document preparation",
      "Contractor evaluation and audits",
      "Energy efficiency reviews",
    ],
    icon: "gauge",
    accent: "from-accent-600 to-accent-400",
  },
  {
    id: "designing",
    slug: "electrical-designing",
    category: "consultancy",
    title: "Electrical designing",
    summary:
      "Detailed engineering drawings, load schedules and single line diagrams.",
    description:
      "Our design team produces coordinated electrical drawings that clash checked with architecture and services. We deliver schematics, panel layouts and cable schedules ready for tender or execution.",
    bullets: [
      "AutoCAD single line and layout drawings",
      "Load and cable schedules",
      "Panel and lighting design",
      "Coordination with civil and MEP",
    ],
    icon: "pencil-ruler",
    accent: "from-brand-600 to-brand-400",
  },
  {
    id: "estimation",
    slug: "budget-estimation",
    category: "consultancy",
    title: "Budget estimation",
    summary:
      "Detailed BOQ and cost estimation grounded in current market rates.",
    description:
      "We prepare granular Bill of Quantities and comparative statements that make procurement decisions straightforward. Estimates include contingencies and future proofing recommendations.",
    bullets: [
      "Itemised material and labour costing",
      "Comparative statements and vendor evaluation",
      "Value engineering suggestions",
      "Cash flow and procurement planning",
    ],
    icon: "file-spreadsheet",
    accent: "from-accent-600 to-accent-400",
  },
  {
    id: "valuation",
    slug: "electrical-valuation",
    category: "consultancy",
    title: "Electrical valuation",
    summary:
      "Independent asset valuation for insurance, sale or refinance.",
    description:
      "Our chartered engineers evaluate the electrical infrastructure of properties, factories and hospitality assets. Reports meet lender and insurer expectations with clear methodology.",
    bullets: [
      "Depreciation and residual life analysis",
      "Insurance and lender ready reports",
      "Compliance and safety observations",
      "Recommendations for upgrades",
    ],
    icon: "cpu",
    accent: "from-brand-600 to-brand-400",
  },
  {
    id: "plumbing",
    slug: "plumbing-services",
    category: "additional",
    title: "Plumbing services",
    summary:
      "Residential and commercial plumbing coordinated alongside our electrical scope.",
    description:
      "Our plumbing division delivers water supply, drainage and rainwater harvesting works using ISI marked materials. Being under one roof, plumbing timelines stay perfectly aligned with electrical works.",
    bullets: [
      "Water supply and drainage systems",
      "Rainwater harvesting and treatment",
      "Bathroom and kitchen plumbing",
      "Preventive maintenance contracts",
    ],
    icon: "wrench",
    accent: "from-accent-600 to-accent-400",
  },
  {
    id: "maintenance",
    slug: "annual-maintenance",
    category: "additional",
    title: "Annual maintenance",
    summary:
      "Structured AMC contracts with priority response and preventive schedules.",
    description:
      "Keep your installations performing at their best with quarterly inspections, thermal scanning, insulation testing and priority breakdown response backed by a service level agreement.",
    bullets: [
      "Quarterly preventive inspections",
      "Thermal scanning of panels",
      "Priority breakdown response",
      "Detailed maintenance dashboards",
    ],
    icon: "hardhat",
    accent: "from-brand-600 to-brand-400",
  },
];

export const featuredServices = services.slice(0, 6);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
