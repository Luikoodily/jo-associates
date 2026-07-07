import Link from "next/link";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  compact?: boolean;
  variant?: "default" | "light";
}

export function Logo({ className, compact = false, variant = "default" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full",
        className,
      )}
      aria-label="Jo Associates home"
    >
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 text-white shadow-md shadow-brand-500/20",
          compact && "h-9 w-9",
        )}
      >
        <Zap className="h-5 w-5" aria-hidden />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-base font-semibold tracking-tight",
            isLight ? "text-white" : "text-foreground",
          )}
        >
          Jo Associates
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.28em]",
            isLight ? "text-white/70" : "text-brand-600 dark:text-brand-300",
          )}
        >
          Power &amp; Electrical
        </span>
      </span>
    </Link>
  );
}
