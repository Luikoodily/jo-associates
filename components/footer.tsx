import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { company, navLinks } from "@/data/company";
import { services } from "@/data/services";

const highlightedServices = services.slice(0, 5);

export function Footer() {
  return (
    <footer className="relative border-t border-brand-900/40 bg-brand-950 text-brand-100">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-800/40 via-transparent to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="space-y-5 md:col-span-1">
          <Logo variant="light" />
          <p className="max-w-xs text-sm text-brand-100/70">
            {company.tagline} A Kerala based electrical contracting and
            consultancy partner delivering safe, dependable installations since
            {" "}
            {company.established}.
          </p>
          <ul className="space-y-3 text-sm text-brand-100/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent-400" aria-hidden />
              <span>
                {company.address.line1}, {company.address.line2}
                <br />
                {company.address.city}, {company.address.state}{" "}
                {company.address.pincode}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent-400" aria-hidden />
              <a
                href={`tel:${company.contact.phone[0]?.replace(/\s+/g, "")}`}
                className="hover:text-white"
              >
                {company.contact.phone[0]}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent-400" aria-hidden />
              <a
                href={`mailto:${company.contact.email[0]}`}
                className="hover:text-white"
              >
                {company.contact.email[0]}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100/70">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-100/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100/70">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-100/80">
            {highlightedServices.map((service) => (
              <li key={service.id}>
                <Link
                  href="/services"
                  className="transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="font-medium text-accent-300 transition-colors hover:text-accent-200"
              >
                All services →
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100/70">
            Connect
          </h3>
          <p className="text-sm text-brand-100/80">{company.contact.hours}</p>
          <div className="flex gap-3">
            {company.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-100/20 text-brand-100 transition-colors hover:border-accent-400 hover:text-accent-300"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/20 transition-colors hover:bg-accent-600"
          >
            Start a project
          </Link>
        </div>
      </div>
      <div className="border-t border-brand-100/10 bg-brand-950/80">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-brand-100/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <p>
            Designed &amp; engineered in Kerala with care by team{" "}
            {company.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
