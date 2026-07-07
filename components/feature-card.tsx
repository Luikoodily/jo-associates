import type { CompanyIconName } from "@/lib/icons";
import { companyIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: CompanyIconName;
  title: string;
  description: string;
  className?: string;
  accent?: "brand" | "accent";
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  accent = "brand",
}: FeatureCardProps) {
  const FeatureIcon = companyIcons[icon];
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 dark:hover:border-brand-700/60",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute -top-16 -right-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40",
          accent === "brand" ? "bg-brand-300" : "bg-accent-400",
        )}
      />
      <div
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md",
          accent === "brand"
            ? "bg-gradient-to-br from-brand-600 to-brand-500 shadow-brand-500/25"
            : "bg-gradient-to-br from-accent-500 to-accent-400 shadow-accent-500/25",
        )}
      >
        <FeatureIcon className="h-5 w-5" aria-hidden />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
