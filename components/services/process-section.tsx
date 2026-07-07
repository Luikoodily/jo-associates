import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { Stagger, StaggerItem } from "@/components/motion";
import { getCompanyIcon } from "@/lib/icons";
import { processSteps } from "@/data/company";

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-soft opacity-10"
      />
      <div
        aria-hidden
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl"
      />
      <Container className="relative">
        <SectionHeader
          eyebrow="Our process"
          title={
            <span className="text-white">
              Ten stages, one accountable partner.
            </span>
          }
          description={
            <span className="text-white/70">
              Every project follows a rigorous cadence so you always know what
              is happening on site, what comes next and what still needs input.
            </span>
          }
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = getCompanyIcon(step.icon);
            return (
              <StaggerItem key={step.id} className="h-full">
                <div className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-accent-400/60">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500/20 text-accent-300">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                      Stage {step.step.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
