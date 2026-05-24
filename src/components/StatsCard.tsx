interface StatsCardProps {
  label: string;
  value: string;
}

export function StatsCard({ label, value }: StatsCardProps) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-center shadow-sm">
      <p className="text-xs uppercase tracking-wide text-zinc-400">{label}</p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
    </article>
  );
}
