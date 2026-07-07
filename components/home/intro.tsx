import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { FadeIn } from "@/components/motion";
import { company } from "@/data/company";

const highlights = [
  "One accountable partner from design to commissioning",
  "Licensed HT & LT works with statutory compliance",
  "Documented safety plan and quality inspection at every stage",
];

export function HomeIntro() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl dark:bg-brand-900/40"
      />
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-border shadow-2xl shadow-brand-500/10">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
                  alt="Jo Associates engineer inspecting a switchgear panel"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden w-64 rounded-2xl border border-border bg-card p-5 shadow-xl md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
                  Since {company.established}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Trusted by 85+ developers, architects and industry owners
                  across Kerala.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeader
              eyebrow="Who we are"
              title={
                <>
                  Engineering excellence rooted in{" "}
                  <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                    Kerala’s craftsmanship
                  </span>
                  .
                </>
              }
              description={company.longDescription}
            />
            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-100">
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 dark:text-brand-200"
              >
                More about our story
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
