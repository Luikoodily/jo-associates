"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/types";

interface CategoryNavItem {
  key: ServiceCategory;
  label: string;
}

interface CategoryNavProps {
  items: CategoryNavItem[];
}

export function CategoryNav({ items }: CategoryNavProps) {
  const [active, setActive] = useState<ServiceCategory>(items[0]?.key ?? "contracting");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(`services-${item.key}`))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          const key = visible.target.id.replace("services-", "") as ServiceCategory;
          setActive(key);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Service categories"
      className="sticky top-16 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl lg:top-20"
    >
      <div className="mx-auto flex w-full max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {items.map((item) => (
          <a
            key={item.key}
            href={`#services-${item.key}`}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === item.key
                ? "border-brand-300 bg-brand-50 text-brand-700 dark:border-brand-700 dark:bg-brand-900/50 dark:text-brand-100"
                : "border-border text-muted-foreground hover:border-brand-200 hover:text-foreground",
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
