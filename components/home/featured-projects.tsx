import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Featured projects"
          title="Landmark installations we take pride in"
          description="A snapshot of recent turnkey engagements across residential towers, gated communities and commercial complexes."
          actions={
            <Button asChild variant="ghost" size="md">
              <Link href="/projects/completed">
                Browse all projects
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          }
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
