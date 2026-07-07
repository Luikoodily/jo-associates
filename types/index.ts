import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";
import type { CompanyIconName, ServiceIconName } from "@/lib/icons";

export type IconComponent =
  | LucideIcon
  | ComponentType<SVGProps<SVGSVGElement>>;

export interface CompanyInfo {
  name: string;
  legalName: string;
  founder: string;
  established: number;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  contact: {
    phone: string[];
    email: string[];
    hours: string;
  };
  socials: {
    label: string;
    href: string;
    icon: IconComponent;
  }[];
}

export type ServiceCategory =
  | "contracting"
  | "consultancy"
  | "additional";

export interface Service {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  icon: ServiceIconName;
  accent: string;
}

export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface Project {
  id: string;
  slug: string;
  name: string;
  client: string;
  location: string;
  category: string;
  status: ProjectStatus;
  year: number;
  scope: string[];
  summary: string;
  image: string;
  featured?: boolean;
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: CompanyIconName;
}

export interface Milestone {
  id: string;
  year: number;
  title: string;
  description: string;
}

export interface Principle {
  id: string;
  title: string;
  description: string;
  icon: CompanyIconName;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organisation: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: "small" | "medium" | "large";
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: CompanyIconName;
}

export interface NavLink {
  label: string;
  href: string;
}
