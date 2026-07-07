import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { FeatureCard } from "@/components/feature-card";
import { Stagger, StaggerItem } from "@/components/motion";
import { strengths } from "@/data/company";

export function Strengths() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Our strengths"
          title="Why teams keep coming back to Jo Associates"
          description="Four ideas shape everything we do on site and off it."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <StaggerItem key={item.id} className="h-full">
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                accent={index % 2 === 0 ? "brand" : "accent"}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
