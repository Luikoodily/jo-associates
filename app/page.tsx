import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/home/stats-section";
import { HomeIntro } from "@/components/home/intro";
import { Strengths } from "@/components/home/strengths";
import { Principles } from "@/components/home/principles";
import { OperationsArea } from "@/components/home/operations";
import { FeaturedServices } from "@/components/home/featured-services";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { MilestonesSection } from "@/components/home/milestones-section";
import { Testimonials } from "@/components/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { CTA } from "@/components/cta";
import { testimonials } from "@/data/company";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <HomeIntro />
      <Strengths />
      <Principles />
      <OperationsArea />
      <FeaturedServices />
      <FeaturedProjects />
      <MilestonesSection />
      <section className="py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Client voices"
            title="Trusted by builders, architects and owners"
            description="Long term relationships are built from small commitments delivered every day."
          />
          <div className="mt-14">
            <Testimonials items={testimonials} />
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
