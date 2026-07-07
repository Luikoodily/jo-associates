import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { ProjectBrowser } from "@/components/projects/project-browser";
import { CTA } from "@/components/cta";
import { cn } from "@/lib/utils";
import { ongoingProjects, projectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Ongoing Projects",
  description:
    "View active electrical contracting engagements currently under execution by Jo Associates across Kerala.",
};

const tabs = [
  { label: "Completed", href: "/projects/completed", active: false },
  { label: "Ongoing", href: "/projects/ongoing", active: true },
];

export default function OngoingProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Works in progress across Kerala."
        description="Active engagements where our teams are on site delivering HT infrastructure, distribution networks and integrated low power services."
        breadcrumbs={[
          { label: "Projects", href: "/projects/completed" },
          { label: "Ongoing" },
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
            projects={ongoingProjects}
            defaultStatus="ongoing"
            categories={projectCategories}
          />
        </Container>
      </section>

      <CTA
        title="Want a similar delivery partner?"
        description="Tell us about your active site and we will share how our crews mobilise with safety plans and milestone reporting."
      />
    </>
  );
}
