import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { HeroSection } from "@/components/HeroSection";

const quickSections = [
  {
    title: "Recruiting-Ready Goalkeeper Profile",
    copy: "Primary GK framing with forward experience as a tactical edge for anticipation and distribution.",
    href: "/soccer",
  },
  {
    title: "Academic Upward Trajectory",
    copy: "GPA progression from 2.6 to 3.6 with strong STEM and business performance.",
    href: "/academics",
  },
  {
    title: "Builder Portfolio",
    copy: "Shipped AI tools, school platforms, and simulations with entrepreneurial focus.",
    href: "/projects",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <section className="grid gap-4 md:grid-cols-3">
        {quickSections.map((section) => (
          <article key={section.title} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h2 className="text-lg font-semibold text-white">{section.title}</h2>
            <p className="mt-2 text-sm text-zinc-300">{section.copy}</p>
            <Link
              href={section.href}
              className="mt-4 inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200"
            >
              Explore <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
