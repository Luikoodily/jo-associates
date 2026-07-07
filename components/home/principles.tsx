import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { Stagger, StaggerItem } from "@/components/motion";
import { getCompanyIcon } from "@/lib/icons";
import { principles } from "@/data/company";

export function Principles() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-soft opacity-15"
      />
      <div
        aria-hidden
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent-500/25 blur-3xl"
      />
      <Container className="relative">
        <SectionHeader
          eyebrow="Core principles"
          title={
            <span className="text-white">
              The values every engineer at Jo Associates works by.
            </span>
          }
          description={
            <span className="text-white/70">
              A simple compass that keeps our craft consistent, whether we are
              wiring a boutique showroom or a 22 storey tower.
            </span>
          }
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
          {principles.map((item, index) => {
            const Icon = getCompanyIcon(item.icon);
            return (
              <StaggerItem key={item.id} className="h-full">
                <div className="group relative flex h-full items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-white/25 hover:bg-white/10">
                  <span
                    aria-hidden
                    className="absolute -top-3 left-6 rounded-full bg-accent-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white shadow-lg shadow-accent-500/40"
                  >
                    0{index + 1}
                  </span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500/25 text-accent-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
