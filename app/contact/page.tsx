import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Jo Associates for electrical contracting and consultancy. Visit our office in Madavakkara, Chittishery PO, Kerala or call us to discuss your project.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${company.address.line1}, ${company.address.line2}, ${company.address.city}, ${company.address.state}`,
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your next electrical scope."
        description="Share your drawings, load requirements or site address and our engineering team will respond with a structured scope note."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-8">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-foreground">
                  Office information
                </h2>
                <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      aria-hidden
                    />
                    <span>
                      {company.address.line1}, {company.address.line2}
                      <br />
                      {company.address.city}, {company.address.state}{" "}
                      {company.address.pincode}
                      <br />
                      {company.address.country}
                    </span>
                  </li>
                  {company.contact.phone.map((phone) => (
                    <li key={phone} className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-brand-600" aria-hidden />
                      <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="font-medium text-foreground hover:text-brand-700"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                  {company.contact.email.map((email) => (
                    <li key={email} className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-brand-600" aria-hidden />
                      <a
                        href={`mailto:${email}`}
                        className="font-medium text-foreground hover:text-brand-700"
                      >
                        {email}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      aria-hidden
                    />
                    <span>{company.contact.hours}</span>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
                <iframe
                  title="Jo Associates office location"
                  src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
