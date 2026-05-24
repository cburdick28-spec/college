"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { athleteProfile } from "@/lib/site-data";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";

const stats = [
  ["Height", athleteProfile.height],
  ["Weight", athleteProfile.weight],
  ["Position", "GK (Forward experience)"],
  ["Foot", athleteProfile.foot],
  ["GPA", athleteProfile.gpa],
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,.28),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Student-Athlete | Builder | AI Developer</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">Connor Burdick</h1>
        <p className="mt-3 text-lg text-zinc-300">Goalkeeper | Class of 2028 | Madrid, Spain</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/soccer">
            <Button size="lg">View Highlights</Button>
          </Link>
          <Link href="/recruiting">
            <Button size="lg" variant="outline">
              Recruiting Profile
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact
            </Button>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {stats.map(([label, value]) => (
            <StatsCard key={label} label={label} value={value} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
