import { Container } from "@/components/ui/container";
import { Stats } from "@/components/stats";
import { statistics } from "@/data/company";

export function StatsSection() {
  return (
    <section className="-mt-16 pb-16 sm:-mt-24">
      <Container>
        <div className="relative rounded-[2.5rem] border border-border bg-card p-8 shadow-2xl shadow-brand-500/10 md:p-10">
          <Stats items={statistics} />
        </div>
      </Container>
    </section>
  );
}
