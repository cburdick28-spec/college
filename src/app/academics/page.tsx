import { AcademicsChartSection } from "@/components/AcademicsChartSection";

const subjects = [
  ["Math", "A range"],
  ["Science", "B+/A-"],
  ["Business", "A/A+"],
  ["Computer Science", "A-/B+/A"],
  ["English", "B range (improving)"],
  ["Spanish", "B1 level"],
] as const;

export default function AcademicsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Academic Profile</h1>
      <AcademicsChartSection />

      <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
        <h2 className="text-xl font-semibold text-white">Subject Breakdown</h2>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {subjects.map(([subject, grade]) => (
            <div key={subject}>
              <dt className="text-sm text-zinc-400">{subject}</dt>
              <dd className="font-medium text-zinc-100">{grade}</dd>
            </div>
          ))}
        </dl>
      </article>

      <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
        <h2 className="text-xl font-semibold text-white">Academic Growth Narrative</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Connor&apos;s academic path reflects a strong upward trajectory, with major progress in consistency,
          structured execution, and long-form writing depth while maintaining high performance in STEM.
        </p>
      </article>

      <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
        <h2 className="text-xl font-semibold text-white">Core Strengths</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
          <li>Analytical reasoning</li>
          <li>Systems thinking</li>
          <li>Problem solving</li>
        </ul>
      </article>
    </section>
  );
}
