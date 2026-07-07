import type { GalleryItem, Project } from "@/types";

export const projects: Project[] = [
  {
    id: "prj-dd-jade",
    slug: "dd-jade-tower",
    name: "DD Jade Tower",
    client: "DD Builders",
    location: "Thrissur, Kerala",
    category: "Residential Tower",
    status: "completed",
    year: 2023,
    scope: [
      "Turnkey internal electrification",
      "DG erection & AMF panel",
      "Low power wiring for CCTV & fire alarm",
    ],
    summary:
      "Complete electrical package for a 22 storey residential tower with 88 premium apartments, including centralised DG backup and structured low power services.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: "prj-dd-emerald",
    slug: "dd-emerald-gardens",
    name: "DD Emerald Gardens",
    client: "DD Builders",
    location: "Ernakulam, Kerala",
    category: "Villa Community",
    status: "completed",
    year: 2024,
    scope: [
      "HT feeder & substation",
      "External lighting design",
      "Solar ready panel provisioning",
    ],
    summary:
      "34 villa gated community with HT feeder, transformer yard and solar ready distribution. Landscape lighting was designed for architectural highlights and safety.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: "prj-dd-diamond",
    slug: "dd-diamond-park",
    name: "DD Diamond Park",
    client: "DD Builders",
    location: "Palakkad, Kerala",
    category: "Commercial Complex",
    status: "completed",
    year: 2024,
    scope: [
      "LT distribution & bus ducts",
      "Structured network cabling",
      "Building management coordination",
    ],
    summary:
      "Flagship commercial complex with retail, office and food court zones. Delivered LT distribution, bus duct risers and Cat6A backbone with performance certification.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: "prj-orchid-suites",
    slug: "orchid-suites",
    name: "Orchid Suites Boutique Hotel",
    client: "Orchid Hospitality",
    location: "Kochi, Kerala",
    category: "Hospitality",
    status: "completed",
    year: 2023,
    scope: [
      "Guest room electrification",
      "Kitchen & laundry power distribution",
      "Emergency lighting scheme",
    ],
    summary:
      "48 key boutique hotel with dedicated guest room circuits, industrial kitchen distribution and life safety lighting integrated with the fire alarm system.",
    image:
      "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "prj-clover-clinic",
    slug: "clover-multispecialty-clinic",
    name: "Clover Multi-speciality Clinic",
    client: "Clover Healthcare",
    location: "Kozhikode, Kerala",
    category: "Healthcare",
    status: "completed",
    year: 2024,
    scope: [
      "UPS and redundant power backbone",
      "Medical grade earthing",
      "Nurse call cabling",
    ],
    summary:
      "Full electrical fit out for a multi speciality clinic including redundant UPS backbone, medical grade earthing pits and low power services for nurse call and CCTV.",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "prj-verve-showroom",
    slug: "verve-flagship-showroom",
    name: "Verve Flagship Showroom",
    client: "Verve Retail",
    location: "Thiruvananthapuram, Kerala",
    category: "Retail",
    status: "completed",
    year: 2025,
    scope: [
      "Display lighting design",
      "HVAC power distribution",
      "AV and networking cabling",
    ],
    summary:
      "Three level flagship showroom featuring architectural display lighting, dedicated HVAC power distribution and structured AV cabling for immersive brand experiences.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "prj-industrial-park",
    slug: "kinfra-industrial-park-shed",
    name: "Kinfra Industrial Shed",
    client: "Confidential",
    location: "Palakkad, Kerala",
    category: "Industrial",
    status: "ongoing",
    year: 2026,
    scope: [
      "1000 kVA transformer erection",
      "HT panel and metering",
      "Compressed air room electrification",
    ],
    summary:
      "Industrial shed electrification with 1000 kVA transformer, HT metering panel and compressed air room supply currently under execution.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "prj-marine-drive-office",
    slug: "marine-drive-office-tower",
    name: "Marine Drive Office Tower",
    client: "Nova Realty",
    location: "Ernakulam, Kerala",
    category: "Commercial Tower",
    status: "ongoing",
    year: 2026,
    scope: [
      "Rising main and bus duct",
      "Redundant DG synchronisation",
      "BMS integration",
    ],
    summary:
      "18 floor Grade A office tower with rising main risers, two DG synchronisation and building management integration under active execution.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "prj-heritage-resort",
    slug: "heritage-resort-electrification",
    name: "Heritage Backwater Resort",
    client: "Heritage Getaways",
    location: "Alappuzha, Kerala",
    category: "Hospitality",
    status: "ongoing",
    year: 2026,
    scope: [
      "Villa level distribution",
      "Landscape and jetty lighting",
      "Solar hybrid ready panels",
    ],
    summary:
      "Backwater resort electrification with villa level distribution, atmospheric landscape lighting and solar hybrid ready main panels.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1600&q=80",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const completedProjects = projects.filter(
  (project) => project.status === "completed",
);
export const ongoingProjects = projects.filter(
  (project) => project.status === "ongoing",
);

export const projectCategories = Array.from(
  new Set(projects.map((project) => project.category)),
).sort();

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Panel room commissioning",
    category: "Panels",
    image:
      "https://images.unsplash.com/photo-1581091012184-7a2c0f9d0f7b?auto=format&fit=crop&w=1200&q=80",
    span: "large",
  },
  {
    id: "gal-2",
    title: "Substation yard",
    category: "HT works",
    image:
      "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-3",
    title: "Precision cable dressing",
    category: "LT works",
    image:
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-4",
    title: "Architectural lighting",
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    span: "medium",
  },
  {
    id: "gal-5",
    title: "Server room cabling",
    category: "Low power",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-6",
    title: "Villa distribution board",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-7",
    title: "Rooftop earthing",
    category: "Safety",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80",
    span: "large",
  },
  {
    id: "gal-8",
    title: "DG installation",
    category: "DG works",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-9",
    title: "Design in progress",
    category: "Consultancy",
    image:
      "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=80",
    span: "medium",
  },
  {
    id: "gal-10",
    title: "Site safety briefing",
    category: "Team",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
];
