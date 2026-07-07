import Image from "next/image";
import { MapPin, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const statusVariant = {
  completed: { variant: "success", label: "Completed" },
  ongoing: { variant: "warning", label: "In progress" },
  upcoming: { variant: "outline", label: "Upcoming" },
} as const;

export function ProjectCard({ project, className }: ProjectCardProps) {
  const status = statusVariant[project.status];
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <Badge variant="default">{project.category}</Badge>
          <Badge variant={status.variant}>{status.label}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden />
            {project.year}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.scope.slice(0, 3).map((item) => (
            <li
              key={item}
              className="rounded-full border border-border/60 bg-muted px-3 py-1 text-[11px] text-foreground/70"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
