"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { athleteProfile } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

const chips = [
  athleteProfile.height,
  athleteProfile.weight,
  `${athleteProfile.foot} Foot`,
  `GPA ${athleteProfile.gpa}`,
  "Brewster Madrid",
  "USA",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 px-6 py-16 shadow-2xl backdrop-blur sm:px-10"
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.22),transparent_60%)]" />
        <div className="absolute inset-0 opacity-60 blur-3xl bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.45),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.9),rgba(3,7,18,0.45)_45%,rgba(2,6,23,0.92))]" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(0deg,rgba(148,163,184,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.6)_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-blue-200">NCAA Division I Recruiting Profile</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Connor Burdick
        </h1>
        <p className="mt-4 text-lg text-zinc-200">Goalkeeper | Class of 2028 | Madrid, Spain</p>
        <p className="mt-4 max-w-2xl text-base text-zinc-300">
          International student-athlete combining elite soccer development with strong academics and technical
          building skills.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/#showcase">
            <Button size="lg">Watch Footage</Button>
          </Link>
          <Link href="/#contact">
            <Button size="lg" variant="outline">
              Recruiting Profile
            </Button>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 shadow-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
