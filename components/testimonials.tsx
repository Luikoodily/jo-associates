import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { Stagger, StaggerItem } from "@/components/motion";

interface TestimonialsProps {
  items: Testimonial[];
}

export function Testimonials({ items }: TestimonialsProps) {
  return (
    <Stagger className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <StaggerItem key={item.id}>
          <figure className="relative flex h-full flex-col justify-between gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg">
            <Quote
              className="h-8 w-8 text-brand-500/60"
              aria-hidden
            />
            <blockquote className="text-base leading-relaxed text-foreground/85">
              “{item.quote}”
            </blockquote>
            <figcaption className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">
                {item.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {item.role}, {item.organisation}
              </span>
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
