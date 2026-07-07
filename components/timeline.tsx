import type { Milestone } from "@/types";
import { FadeIn } from "@/components/motion";

interface TimelineProps {
  items: Milestone[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l border-border pl-8">
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-brand-500/60 via-brand-500/20 to-transparent"
      />
      {items.map((item, index) => (
        <FadeIn key={item.id} delay={index * 0.05} className="mb-10 last:mb-0">
          <li className="relative">
            <span
              aria-hidden
              className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 shadow-lg shadow-brand-500/30 ring-4 ring-background"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
              {item.year}
            </span>
            <h3 className="mt-1 text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}
