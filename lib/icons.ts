import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Cpu,
  Factory,
  FileSpreadsheet,
  Gauge,
  Handshake,
  HardHat,
  Layers,
  Lightbulb,
  Network,
  PencilRuler,
  Phone,
  Power,
  Ruler,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const serviceIcons = {
  layers: Layers,
  power: Power,
  zap: Zap,
  lightbulb: Lightbulb,
  factory: Factory,
  cable: Cable,
  network: Network,
  gauge: Gauge,
  "pencil-ruler": PencilRuler,
  "file-spreadsheet": FileSpreadsheet,
  cpu: Cpu,
  wrench: Wrench,
  hardhat: HardHat,
} as const satisfies Record<string, LucideIcon>;

export type ServiceIconName = keyof typeof serviceIcons;

export function getServiceIcon(name: ServiceIconName): LucideIcon {
  return serviceIcons[name];
}

export const companyIcons = {
  award: Award,
  briefcase: Briefcase,
  "check-circle": CheckCircle2,
  "clipboard-check": ClipboardCheck,
  compass: Compass,
  handshake: Handshake,
  hardhat: HardHat,
  layers: Layers,
  lightbulb: Lightbulb,
  "pencil-ruler": PencilRuler,
  phone: Phone,
  ruler: Ruler,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  target: Target,
  users: Users,
  wrench: Wrench,
  zap: Zap,
} as const satisfies Record<string, LucideIcon>;

export type CompanyIconName = keyof typeof companyIcons;

export function getCompanyIcon(name: CompanyIconName): LucideIcon {
  return companyIcons[name];
}
