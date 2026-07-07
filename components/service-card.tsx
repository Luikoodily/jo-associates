"use client";

import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { serviceIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  expandable?: boolean;
}

export function ServiceCard({ service, expandable = true }: ServiceCardProps) {
  const [open, setOpen] = useState(false);
  const ServiceIcon = serviceIcons[service.icon];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300",
        "hover:-translate-y-1 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/10",
        "dark:hover:border-brand-700/60",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-70",
          service.accent,
        )}
      />
      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg shadow-brand-500/20",
            service.accent,
          )}
        >
          <ServiceIcon className="h-6 w-6" aria-hidden />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.summary}
      </p>
      {expandable && (
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-medium text-brand-700 transition-colors hover:text-brand-800 dark:text-brand-200"
          aria-expanded={open}
        >
          {open ? "Show less" : "Explore details"}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      )}
      <div
        className={cn(
          "grid transition-all duration-500 ease-in-out",
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <ul className="mt-4 space-y-2">
            {service.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-sm text-foreground/80"
              >
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
