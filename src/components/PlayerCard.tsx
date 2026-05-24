import { athleteProfile } from "@/lib/site-data";

const playerStats = [
  ["Height", athleteProfile.height],
  ["Weight", athleteProfile.weight],
  ["Position", "Goalkeeper (Primary)"],
  ["Secondary", athleteProfile.secondaryPosition],
  ["Foot", athleteProfile.foot],
  ["Grad Year", athleteProfile.classYear],
] as const;

export function PlayerCard() {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6">
      <h2 className="text-xl font-semibold text-white">Player Stats</h2>
      <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {playerStats.map(([label, value]) => (
          <div key={label}>
            <dt className="text-xs uppercase tracking-wide text-zinc-400">{label}</dt>
            <dd className="text-sm font-medium text-zinc-100">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
