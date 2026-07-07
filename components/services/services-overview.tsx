import { Container } from "@/components/ui/container";
import { services } from "@/data/services";
import type { ServiceCategory } from "@/types";

const categoryLabels: Record<ServiceCategory, string> = {
  contracting: "Contracting",
  consultancy: "Consultancy",
  additional: "Additional",
};

export function ServicesOverview() {
  const counts = (["contracting", "consultancy", "additional"] as const).map(
    (key) => ({
      key,
      label: categoryLabels[key],
      count: services.filter((service) => service.category === key).length,
    }),
  );

  return (
    <section className="border-b border-border bg-muted/30 py-10 dark:bg-brand-950/20">
      <Container>
        <div className="grid gap-4 sm:grid-cols-3">
          {counts.map((item) => (
            <a
              key={item.key}
              href={`#services-${item.key}`}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-2xl font-semibold text-foreground">
                  {item.count} services
                </p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-900/50 dark:text-brand-200">
                →
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
