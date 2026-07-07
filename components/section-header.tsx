import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  actions?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  actions,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        actions && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-3",
          align === "center" && "items-center",
        )}
      >
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-brand-700 dark:border-brand-800 dark:bg-brand-900/40 dark:text-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
            {eyebrow}
          </span>
        )}
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.65rem] md:leading-[1.1]">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex flex-wrap items-center gap-3">{actions}</div>
      )}
    </div>
  );
}
