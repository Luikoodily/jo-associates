import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { Stagger, StaggerItem } from "@/components/motion";
import { ProcessSection } from "@/components/services/process-section";
import { CategoryNav } from "@/components/services/category-nav";
import { ServicesOverview } from "@/components/services/services-overview";
import { CTA } from "@/components/cta";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import type { ServiceCategory } from "@/types";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Contracting, HT and LT works, DG erection, low power wiring, network cabling, consultancy, design, budget estimation, valuation and plumbing services from Jo Associates.",
  openGraph: {
    title: "Services · Jo Associates",
    description:
      "Full spectrum electrical contracting and consultancy services across Kerala.",
  },
};

interface Category {
  key: ServiceCategory;
  title: string;
  description: string;
}

const categories: Category[] = [
  {
    key: "contracting",
    title: "Contracting",
    description:
      "Turnkey electrical execution covering HT, LT, internal electrification, DG erection and structured low power services.",
  },
  {
    key: "consultancy",
    title: "Consultancy",
    description:
      "Independent engineering advisory including detailed designing, budget estimation and asset valuation.",
  },
  {
    key: "additional",
    title: "Additional services",
    description:
      "Complementary trades and long term maintenance that keep your project running smoothly after handover.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every electrical need under one accountable roof."
        description="From concept design to commissioning, Jo Associates delivers a full spectrum of contracting, consultancy and supporting services for buildings and industry."
        breadcrumbs={[{ label: "Services" }]}
        actions={
          <Button asChild variant="primary" size="md">
            <Link href="/contact">
              Discuss your scope
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        }
      />

      <ServicesOverview />

      <CategoryNav
        items={categories.map((category) => ({
          key: category.key,
          label: category.title,
        }))}
      />

      {categories.map((category, categoryIndex) => {
        const filtered = services.filter(
          (service) => service.category === category.key,
        );
        return (
          <section
            key={category.key}
            id={`services-${category.key}`}
            className={
              categoryIndex % 2 === 0
                ? "scroll-mt-36 py-24"
                : "scroll-mt-36 bg-muted/40 py-24 dark:bg-brand-950/30"
            }
          >
            <Container>
              <SectionHeader
                eyebrow={`0${categoryIndex + 1} · ${category.title}`}
                title={category.title}
                description={category.description}
              />
              <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((service) => (
                  <StaggerItem key={service.id} className="h-full">
                    <ServiceCard service={service} />
                  </StaggerItem>
                ))}
              </Stagger>
            </Container>
          </section>
        );
      })}

      <ProcessSection />

      <CTA
        title="Have a scope in mind? Let’s scope it out together."
        description="Share drawings or a project brief and we will respond with a structured proposal in under 24 hours."
      />
    </>
  );
}
