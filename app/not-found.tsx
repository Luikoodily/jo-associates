import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          This page is not energised yet.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          The page you are looking for may have moved or no longer exists. Let us
          guide you back to a live circuit.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="primary">
            <Link href="/">
              <Home className="h-4 w-4" aria-hidden />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Contact us
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
