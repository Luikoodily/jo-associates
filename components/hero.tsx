"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/animated-counter";
import { statistics } from "@/data/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-radial-brand"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-soft opacity-20"
      />

      <Container className="relative pt-16 pb-24 md:pt-24 md:pb-36">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="space-y-8 text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.32em] text-white/90 backdrop-blur"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-accent-300" aria-hidden />
              Licensed HT &amp; LT electrical contractor
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              Powering Kerala’s next generation of{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-brand-300 bg-clip-text text-transparent">
                  buildings &amp; industry
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute -bottom-3 left-0 w-full text-accent-400/80"
                >
                  <path
                    d="M2 8c60-6 240-6 296 0"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              .
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              From high tension substations to intricate low power cabling, Jo
              Associates delivers turnkey electrical solutions engineered for
              safety, longevity and design excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">
                  Start your project
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white/10 dark:border-white/30 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                <Link href="/services">
                  <PlayCircle className="h-5 w-5" aria-hidden />
                  Explore our services
                </Link>
              </Button>
            </motion.div>
            <motion.dl
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="grid max-w-lg grid-cols-3 gap-6 pt-4"
            >
              {statistics.slice(0, 3).map((stat) => (
                <div key={stat.id} className="border-l border-white/15 pl-4">
                  <dt className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 flex items-baseline gap-1 text-2xl font-semibold text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div
                aria-hidden
                className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-accent-400/40 via-brand-300/30 to-brand-600/40 blur-3xl"
              />
              <div className="relative flex h-full flex-col justify-between rounded-[3rem] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl shadow-2xl shadow-brand-900/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500/90 text-white shadow-lg shadow-accent-500/40">
                      <Zap className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                        Live worksite
                      </p>
                      <p className="text-sm text-white">Kinfra Industrial Shed</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                    HT 11 kV
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Load", value: "1000 kVA" },
                    { label: "Progress", value: "72%" },
                    { label: "Phase", value: "Testing" },
                    { label: "Safety score", value: "AAA" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/60">
                        {item.label}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/60">
                      Real time voltage
                    </p>
                    <p className="text-xs font-semibold text-accent-300">
                      Stable
                    </p>
                  </div>
                  <div className="mt-4 flex items-end gap-1">
                    {[8, 12, 9, 14, 11, 15, 10, 13, 12, 16, 12, 14].map(
                      (h, index) => (
                        <span
                          key={index}
                          className="w-2 rounded-full bg-gradient-to-t from-accent-500 to-brand-300"
                          style={{ height: `${h * 4}px` }}
                          aria-hidden
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="absolute -left-6 top-16 hidden rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-xl md:flex md:items-center md:gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-accent-300">
                <ShieldCheck className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
                  ISO ready
                </p>
                <p className="text-sm font-medium">Safety audited crews</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
