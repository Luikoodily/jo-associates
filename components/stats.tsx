import { AnimatedCounter } from "@/components/animated-counter";
import { FadeIn } from "@/components/motion";
import type { Statistic } from "@/types";
import { getCompanyIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface StatsProps {
  items: Statistic[];
  className?: string;
  variant?: "default" | "dark";
}

export function Stats({ items, className, variant = "default" }: StatsProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4",
        className,
      )}
    >
      {items.map((stat, index) => {
        const Icon = getCompanyIcon(stat.icon);
        return (
          <FadeIn key={stat.id} delay={index * 0.08}>
            <div
              className={cn(
                "group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300",
                isDark
                  ? "border-white/10 bg-white/5 text-white hover:border-white/20"
                  : "border-border bg-card hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/10",
              )}
            >
              <div
                className={cn(
                  "absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40",
                  isDark
                    ? "bg-accent-400"
                    : "bg-brand-300",
                )}
                aria-hidden
              />
              <div
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-2xl",
                  isDark
                    ? "bg-white/10 text-accent-300"
                    : "bg-brand-50 text-brand-600",
                )}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div className="relative mt-4 flex items-baseline gap-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className={cn(
                    "text-3xl font-semibold tracking-tight sm:text-4xl",
                    isDark ? "text-white" : "text-foreground",
                  )}
                />
              </div>
              <p
                className={cn(
                  "relative mt-1 text-sm",
                  isDark
                    ? "text-white/70"
                    : "text-muted-foreground",
                )}
              >
                {stat.label}
              </p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
