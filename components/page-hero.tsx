import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/breadcrumb";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-500/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-16 md:py-24">
        <FadeIn>
          <div className="space-y-6">
            {breadcrumbs && (
              <Breadcrumb
                items={breadcrumbs}
                className="text-white/70 [&_a]:text-white/70 [&_span]:text-white [&_a:hover]:text-white"
              />
            )}
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden />
                {eyebrow}
              </span>
            )}
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                {description}
              </p>
            )}
            {actions && (
              <div className="flex flex-wrap gap-3 pt-2">{actions}</div>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
