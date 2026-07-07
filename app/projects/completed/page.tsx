import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { ProjectBrowser } from "@/components/projects/project-browser";
import { CTA } from "@/components/cta";
import { cn } from "@/lib/utils";
import { completedProjects, projectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Completed Projects",
  description:
    "Explore completed electrical contracting and consultancy projects delivered by Jo Associates across Kerala including DD Jade Tower, DD Emerald Gardens and DD Diamond Park.",
};

const tabs = [
  { label: "Completed", href: "/projects/completed", active: true },
  { label: "Ongoing", href: "/projects/ongoing", active: false },
];

export default function CompletedProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Landmarks we have energised."
        description="A portfolio of residential towers, gated communities, commercial complexes and industrial installations delivered with precision and accountability."
        breadcrumbs={[
          { label: "Projects", href: "/projects/completed" },
          { label: "Completed" },
        ]}
      />

      <section className="border-b border-border">
        <Container className="flex gap-2 py-4">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={tab.active ? "page" : undefined}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                tab.active
                  ? "border-brand-300 bg-brand-50 text-brand-700 dark:border-brand-700 dark:bg-brand-900/50 dark:text-brand-100"
                  : "border-border text-muted-foreground hover:border-brand-200 hover:text-foreground",
              )}
            >
              {tab.label}
            </Link>
          ))}
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <ProjectBrowser
            projects={completedProjects}
            defaultStatus="completed"
            categories={projectCategories}
          />
        </Container>
      </section>

      <CTA
        title="Planning your next landmark?"
        description="Share your drawings and we will assemble a delivery plan with milestones, material strategy and indicative timelines."
      />
    </>
  );
}
