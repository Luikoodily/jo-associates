import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { FadeIn } from "@/components/motion";
import { milestones } from "@/data/company";

export function MilestonesSection() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeader
          eyebrow="Milestones"
          title="A short journey with big momentum"
          description="Since inception in 2022 we have chased steady, thoughtful growth. Here are the moments that shaped Jo Associates."
        />
        <FadeIn className="mt-14">
          <Timeline items={milestones} />
        </FadeIn>
      </Container>
    </section>
  );
}
