import Link from "next/link";

import { PlayerCard } from "@/components/PlayerCard";
import { Button } from "@/components/ui/button";
import { athleteProfile } from "@/lib/site-data";

export default function SoccerPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Soccer Recruiting Profile</h1>
      <p className="text-sm text-zinc-300">
        Showcase Evaluation Footage highlighting goalkeeper decision-making, positioning, and distribution under
        pressure.
      </p>
      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
        <iframe
          className="aspect-video w-full"
          src={athleteProfile.showcaseEmbedUrl}
          title="Showcase Evaluation Footage"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <PlayerCard />

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
          <h2 className="text-xl font-semibold text-white">Goalkeeper Skills</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>Shot stopping</li>
            <li>1v1 situations</li>
            <li>Crosses and aerial control</li>
            <li>Distribution (short + long)</li>
            <li>Command of box</li>
          </ul>
        </article>
        <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
          <h2 className="text-xl font-semibold text-white">Tactical Intelligence</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>Understands attacking movement from striker experience</li>
            <li>Improved anticipation and positioning</li>
            <li>Transition awareness and quick decision making</li>
          </ul>
        </article>
      </div>

      <article className="rounded-xl border border-blue-500/40 bg-zinc-900/60 p-5">
        <h2 className="text-xl font-semibold text-white">Player Summary</h2>
        <p className="mt-2 text-sm text-zinc-200">
          Modern goalkeeper with international training experience and attacking background, combining
          strong academic trajectory with high development potential.
        </p>
        <Link href="/contact" className="mt-4 inline-block">
          <Button>Contact for Recruiting Opportunities</Button>
        </Link>
      </article>
      <p className="text-xs text-zinc-400">
        Showcase Evaluation Footage: {athleteProfile.showcaseUrl}
      </p>
    </section>
  );
}
