"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { EmptyState } from "@/components/empty-state";
import { Stagger, StaggerItem } from "@/components/motion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { Project, ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectBrowserProps {
  projects: Project[];
  defaultStatus?: ProjectStatus | "all";
  categories: string[];
}

const statusFilters: { value: ProjectStatus | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "ongoing", label: "Ongoing" },
  { value: "upcoming", label: "Upcoming" },
];

export function ProjectBrowser({
  projects,
  defaultStatus = "all",
  categories,
}: ProjectBrowserProps) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<ProjectStatus | "all">(defaultStatus);
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesStatus = status === "all" || project.status === status;
      const matchesCategory =
        category === "all" || project.category === category;
      const matchesQuery =
        normalized.length === 0 ||
        [
          project.name,
          project.client,
          project.location,
          project.category,
          project.summary,
          ...project.scope,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return matchesStatus && matchesCategory && matchesQuery;
    });
  }, [projects, query, status, category]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, clients or locations..."
            className="h-11 rounded-full pl-11"
            aria-label="Search projects"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {statusFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setStatus(filter.value)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                status === filter.value
                  ? "border-brand-300 bg-brand-50 text-brand-700 dark:border-brand-700 dark:bg-brand-900/50 dark:text-brand-100"
                  : "border-border text-muted-foreground hover:border-brand-200 hover:text-foreground",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
            category === "all"
              ? "border-accent-300 bg-accent-50 text-accent-700"
              : "border-border text-muted-foreground hover:border-accent-200",
          )}
        >
          All categories
        </button>
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              category === item
                ? "border-accent-300 bg-accent-50 text-accent-700"
                : "border-border text-muted-foreground hover:border-accent-200",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Badge variant="outline">{filtered.length} projects</Badge>
        {query && <span>matching &ldquo;{query}&rdquo;</span>}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No projects found"
          description="Try adjusting your search or filters to discover more of our work."
        />
      ) : (
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </div>
  );
}
