import { MapPinned } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { operationAreas } from "@/data/company";

export function OperationsArea() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
          <FadeIn>
            <SectionHeader
              eyebrow="Area of operations"
              title="On the ground across Kerala"
              description="Our project managers, site engineers and licensed electricians deploy from Thrissur to serve every major district in the state."
            />
          </FadeIn>
          <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {operationAreas.map((area) => (
              <StaggerItem key={area}>
                <div className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-900/40 dark:text-brand-200">
                    <MapPinned className="h-4 w-4" aria-hidden />
                  </span>
                  {area}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
