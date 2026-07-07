import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { featuredServices } from "@/data/services";

export function FeaturedServices() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-24 dark:bg-brand-950/30">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="Full spectrum electrical services delivered under one roof"
          description="From HT feeders to sensor grade low power cabling, we take single point responsibility for every wire on your project."
          actions={
            <Button asChild variant="outline" size="md">
              <Link href="/services">
                All services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          }
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <ServiceCard service={service} expandable={false} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
