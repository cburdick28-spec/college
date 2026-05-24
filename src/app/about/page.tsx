const sections = [
  {
    title: "Athletic Profile",
    points: [
      "Modern goalkeeper profile with shot-stopping and distribution focus.",
      "International training environment in Spain with varsity and JV exposure.",
      "Forward/striker experience supports game reading and tactical flexibility.",
    ],
  },
  {
    title: "Academic Profile",
    points: [
      "GPA growth from 2.6 to 3.6 demonstrates sustained improvement.",
      "Strong STEM, business, and computer science outcomes.",
      "Clear trajectory toward NCAA-eligible academic consistency.",
    ],
  },
  {
    title: "Personal Traits",
    points: [
      "Analytical thinker with systems-oriented decision making.",
      "Builder mindset across AI tools, apps, and software systems.",
      "Competitive, team-first approach with leadership potential.",
    ],
  },
  {
    title: "Development Areas",
    points: [
      "Focus consistency",
      "Execution precision",
      "Writing structure and depth",
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold text-white">About Connor Burdick</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
