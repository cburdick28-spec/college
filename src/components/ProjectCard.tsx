import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

type ProjectCardProps = {
  name: string;
  description: string;
  tech: string[];
  url: string;
  featured?: boolean;
};

export function ProjectCard({ name, description, tech, url, featured }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        {featured ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-200">
            <Star className="h-3.5 w-3.5" /> Flagship
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-sm text-zinc-300">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-200">
            {item}
          </span>
        ))}
      </div>
      <Link
        className="mt-4 inline-flex items-center gap-1 text-sm text-blue-300 transition-colors hover:text-blue-200"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
