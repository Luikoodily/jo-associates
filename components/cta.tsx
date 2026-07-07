import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { company } from "@/data/company";

interface CTAProps {
  title?: string;
  description?: string;
}

export function CTA({
  title = "Ready to energise your next project?",
  description = "Share your requirements and our engineering team will respond with a scope note and indicative timeline within one working day.",
}: CTAProps) {
  return (
    <section className="relative py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-800/40 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 px-6 py-16 shadow-2xl shadow-brand-900/40 sm:px-14">
          <div
            aria-hidden
            className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-5 text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden />
                Start a conversation
              </span>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/70">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Book a consultation
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <a
                href={`tel:${company.contact.phone[0]?.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-accent-300" aria-hidden />
                {company.contact.phone[0]}
              </a>
              <p className="text-xs text-white/60">
                {company.contact.hours}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
