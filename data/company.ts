import type {
  CompanyInfo,
  Milestone,
  NavLink,
  Principle,
  ProcessStep,
  Statistic,
  Testimonial,
} from "@/types";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/social-icons";

export const company: CompanyInfo = {
  name: "Jo Associates",
  legalName: "Jo Associates Power & Electrical",
  founder: "Thijo Thomas",
  established: 2022,
  tagline: "Engineering the power of tomorrow.",
  shortDescription:
    "Jo Associates is a Kerala based electrical contracting and consultancy firm delivering turnkey HT and LT electrical solutions for residential, commercial and industrial projects.",
  longDescription:
    "Founded in 2022 by Thijo Thomas, Jo Associates has grown into a trusted partner for developers, architects and industry owners seeking dependable electrical infrastructure. From high voltage substations to intricate low power cabling, our team blends deep field experience with modern engineering practice to deliver installations that are safe, efficient and future ready.",
  address: {
    line1: "Madavakkara",
    line2: "Chittishery PO",
    city: "Thrissur",
    state: "Kerala",
    country: "India",
    pincode: "680 000",
  },
  contact: {
    phone: ["+91 98470 00000", "+91 90370 00000"],
    email: ["info@joassociates.in", "projects@joassociates.in"],
    hours: "Monday to Saturday · 9:00 AM to 6:30 PM",
  },
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
    { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
    { label: "WhatsApp", href: "https://wa.me/919999999999", icon: WhatsAppIcon },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const statistics: Statistic[] = [
  { id: "stat-projects", label: "Projects delivered", value: 120, suffix: "+", icon: "briefcase" },
  { id: "stat-clients", label: "Happy clients", value: 85, suffix: "+", icon: "users" },
  { id: "stat-experience", label: "Years of expertise", value: 15, suffix: "+", icon: "award" },
  { id: "stat-team", label: "Skilled engineers", value: 40, suffix: "+", icon: "hardhat" },
];

export const strengths: Principle[] = [
  {
    id: "strength-turnkey",
    title: "End to end turnkey delivery",
    description:
      "From single line diagrams to commissioning, we own every stage of the electrical lifecycle so clients get one accountable partner.",
    icon: "layers",
  },
  {
    id: "strength-safety",
    title: "Safety first culture",
    description:
      "Every worksite is governed by a documented safety plan, PPE audits and daily toolbox talks that keep our teams and clients protected.",
    icon: "shield-check",
  },
  {
    id: "strength-quality",
    title: "Certified quality",
    description:
      "Materials from vetted manufacturers, insulation resistance testing and third party inspections ensure long service life.",
    icon: "check-circle",
  },
  {
    id: "strength-onsite",
    title: "Dedicated site engineers",
    description:
      "A named engineer stays with the project from kickoff to handover, giving clients a single point of contact through every milestone.",
    icon: "hardhat",
  },
];

export const principles: Principle[] = [
  {
    id: "principle-integrity",
    title: "Integrity",
    description:
      "Transparent quotations, honest updates and no hidden variations. Our word is our contract.",
    icon: "handshake",
  },
  {
    id: "principle-precision",
    title: "Precision",
    description:
      "Detailed load calculations, cable sizing and drawings that leave nothing to chance on site.",
    icon: "ruler",
  },
  {
    id: "principle-innovation",
    title: "Innovation",
    description:
      "We stay current on smart metering, solar ready panels and IoT monitoring so our installs are future proof.",
    icon: "lightbulb",
  },
  {
    id: "principle-partnership",
    title: "Partnership",
    description:
      "We treat every builder, architect and homeowner as a long term partner, not a one time transaction.",
    icon: "users",
  },
];

export const operationAreas: string[] = [
  "Thrissur",
  "Ernakulam",
  "Kozhikode",
  "Palakkad",
  "Malappuram",
  "Kannur",
  "Kollam",
  "Thiruvananthapuram",
];

export const milestones: Milestone[] = [
  {
    id: "milestone-founded",
    year: 2022,
    title: "Jo Associates founded",
    description:
      "Thijo Thomas incorporates Jo Associates with a small team focused on internal electrification for residential apartments.",
  },
  {
    id: "milestone-first-turnkey",
    year: 2022,
    title: "First turnkey handover",
    description:
      "Successfully commissioned complete electrification for DD Jade Tower ahead of schedule.",
  },
  {
    id: "milestone-consultancy",
    year: 2023,
    title: "Consultancy division launched",
    description:
      "Added dedicated electrical design and budget estimation services for architects and PMCs.",
  },
  {
    id: "milestone-ht",
    year: 2024,
    title: "HT works accreditation",
    description:
      "Earned licensed electrical contractor status for HT works up to 11 kV, opening industrial project opportunities.",
  },
  {
    id: "milestone-projects",
    year: 2025,
    title: "100 projects delivered",
    description:
      "Crossed the century mark across contracting and consultancy engagements throughout Kerala.",
  },
  {
    id: "milestone-2026",
    year: 2026,
    title: "Expanding to solar ready builds",
    description:
      "Rolling out solar ready panel configurations and EV charging integrations for new construction.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "step-discovery",
    step: 1,
    title: "Client discussion",
    description:
      "We listen to your intent, brief and constraints so the electrical strategy aligns with your project goals.",
    icon: "users",
  },
  {
    id: "step-survey",
    step: 2,
    title: "Site survey",
    description:
      "Our engineers walk the site to capture existing infrastructure, load points and civil interfaces.",
    icon: "compass",
  },
  {
    id: "step-planning",
    step: 3,
    title: "Planning",
    description:
      "Load lists, single line diagrams and phase distribution are shaped into a workable plan.",
    icon: "clipboard-check",
  },
  {
    id: "step-design",
    step: 4,
    title: "Design",
    description:
      "AutoCAD and simulation tools drive precise cable schedules, panel layouts and lighting design.",
    icon: "pencil-ruler",
  },
  {
    id: "step-estimation",
    step: 5,
    title: "Estimation",
    description:
      "Transparent BOQ with itemised material and labour costs so approvals move quickly.",
    icon: "briefcase",
  },
  {
    id: "step-execution",
    step: 6,
    title: "Execution",
    description:
      "Trained crews mobilise with safety plans, staged milestones and daily reporting to keep progress visible.",
    icon: "hardhat",
  },
  {
    id: "step-testing",
    step: 7,
    title: "Testing",
    description:
      "Insulation resistance, earth continuity and phase sequence tests are logged for every circuit.",
    icon: "zap",
  },
  {
    id: "step-inspection",
    step: 8,
    title: "Quality inspection",
    description:
      "Independent walkthroughs verify workmanship against IE Rules and client specifications.",
    icon: "shield-check",
  },
  {
    id: "step-commissioning",
    step: 9,
    title: "Commissioning",
    description:
      "Energisation, load balancing and full functional demonstrations before formal handover.",
    icon: "sparkles",
  },
  {
    id: "step-support",
    step: 10,
    title: "Ongoing support",
    description:
      "Annual maintenance plans and priority response for warranty and expansion works.",
    icon: "wrench",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Vinod Menon",
    role: "Managing Director",
    organisation: "DD Builders",
    quote:
      "Jo Associates delivered our tower electrification ahead of schedule with meticulous documentation. Their site discipline stands out.",
  },
  {
    id: "testimonial-2",
    name: "Anitha Ramesh",
    role: "Principal Architect",
    organisation: "Arcline Studio",
    quote:
      "Their consultancy team produced load calculations and drawings that made our approvals painless. A dependable engineering partner.",
  },
  {
    id: "testimonial-3",
    name: "Ravi Krishnan",
    role: "Facility Manager",
    organisation: "Emerald Retail",
    quote:
      "Their DG erection and low power cabling for our showroom was faultless. We now have a maintenance contract for all our outlets.",
  },
];

export const whyChooseUs: Principle[] = [
  {
    id: "why-experience",
    title: "Field tested expertise",
    description:
      "Over 120 completed projects across residential, commercial and industrial sectors.",
    icon: "award",
  },
  {
    id: "why-team",
    title: "Full spectrum team",
    description:
      "Designers, licensed electricians, safety officers and project managers under one roof.",
    icon: "users",
  },
  {
    id: "why-schedule",
    title: "On schedule delivery",
    description:
      "Milestone based execution with daily progress reports keeps handovers predictable.",
    icon: "target",
  },
  {
    id: "why-support",
    title: "Continuous support",
    description:
      "Annual maintenance, upgrade planning and 24/7 emergency response for our clients.",
    icon: "phone",
  },
];
