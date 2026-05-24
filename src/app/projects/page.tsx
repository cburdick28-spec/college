import { ProjectCard } from "@/components/ProjectCard";
import { projects, timeline } from "@/lib/site-data";

const categories = ["AI Systems", "School Platforms", "Games / Simulations", "Web Apps"] as const;

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Builder Portfolio — AI, Apps & Systems</h1>
      <p className="text-sm text-zinc-300">
        Frequent shipping across AI systems, school platforms, simulations, and web apps.
      </p>

      {categories.map((category) => (
        <div key={category} className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{category}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {projects
              .filter((project) => project.category === category)
              .map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
          </div>
        </div>
      ))}

      <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
        <h2 className="text-xl font-semibold text-white">Builder Activity Timeline</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
          {timeline.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </article>
    </section>
  );
}
