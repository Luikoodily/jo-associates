import Image from "next/image";
import type { Metadata } from "next";
import { Compass, Flag, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { FeatureCard } from "@/components/feature-card";
import { Stats } from "@/components/stats";
import { CTA } from "@/components/cta";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import {
  company,
  milestones,
  principles,
  statistics,
  whyChooseUs,
} from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jo Associates, our founder Thijo Thomas, our mission to deliver dependable electrical infrastructure across Kerala, and the values that guide every project.",
};

const missionVision = [
  {
    icon: Flag,
    label: "Mission",
    title: "Deliver dependable electrical infrastructure",
    description:
      "Provide safe, precisely engineered electrical works that let our clients focus on their business while we own every ampere.",
  },
  {
    icon: Compass,
    label: "Vision",
    title: "Become Kerala’s most trusted electrical partner",
    description:
      "Be the first name developers, architects and industries call when quality, safety and timely delivery cannot be compromised.",
  },
  {
    icon: Sparkles,
    label: "Promise",
    title: "One accountable partner, end to end",
    description:
      "A single point of responsibility from concept design to commissioning, with continued support long after handover.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Jo Associates"
        title="Engineered with intent since 2022."
        description="A Kerala grown electrical firm delivering turnkey contracting and precision consultancy for the state’s most ambitious buildings and industries."
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <FadeIn>
              <div className="relative">
                <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-border shadow-2xl shadow-brand-500/10">
                  <Image
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
                    alt="Jo Associates team collaborating on an electrical drawing"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -right-6 -bottom-6 hidden w-64 rounded-2xl border border-border bg-card p-5 shadow-xl md:block">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
                    Founder
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {company.founder}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Chief Engineer &amp; Managing Partner
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeader
                eyebrow="Our story"
                title={
                  <>
                    A young firm carrying{" "}
                    <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                      decades of field wisdom
                    </span>
                    .
                  </>
                }
                description={company.longDescription}
              />
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Thijo Thomas started Jo Associates in {company.established} to
                  bring a modern, drawing led approach to electrical works. Every
                  project starts with careful load studies, single line diagrams
                  and coordinated shop drawings so nothing is left to chance on
                  site.
                </p>
                <p>
                  Today we work alongside residential developers, boutique
                  hospitality brands, healthcare providers and industrial
                  clients. Our team blends licensed HT engineers, disciplined
                  site electricians and design draftsmen under a common quality
                  standard.
                </p>
                <p>
                  We are proud to remain a Kerala grown firm. Every rupee we
                  earn is reinvested into safer PPE, better tools and continuous
                  training for our people.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/40 py-16 dark:bg-brand-950/30">
        <Container>
          <Stats items={statistics} />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Purpose"
            title="What guides Jo Associates every day"
            description="A clear mission, an ambitious vision and a promise we uphold on every project we sign."
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {missionVision.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.label} className="h-full">
                  <div className="relative flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
                      0{index + 1} · {item.label}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-500/20">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="bg-muted/40 py-24 dark:bg-brand-950/30">
        <Container>
          <SectionHeader
            eyebrow="Core values"
            title="Values we hire, review and reward against"
            description="Beyond posters on a wall, these are the values that shape hiring, performance reviews and the way we walk a site."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => (
              <StaggerItem key={item.id} className="h-full">
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  accent={index % 2 === 0 ? "brand" : "accent"}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Journey"
            title="Milestones along the way"
            description="A concise timeline of the moments that shaped Jo Associates into what it is today."
          />
          <div className="mt-14">
            <Timeline items={milestones} />
          </div>
        </Container>
      </section>

      <section className="bg-muted/40 py-24 dark:bg-brand-950/30">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Why choose us"
            title="Four reasons clients return"
            description="Delivery is only half the story. The way we get there is why our clients keep coming back."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <StaggerItem key={item.id} className="h-full">
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  accent={index % 2 === 0 ? "accent" : "brand"}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTA
        title="Let’s build something enduring together."
        description="Whether it is a boutique villa or a 400 kVA industrial shed, our engineers are ready with a clear plan."
      />
    </>
  );
}
