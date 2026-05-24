import { ContactForm } from "@/components/ContactForm";
import { athleteProfile, contactInfo } from "@/lib/site-data";

const summaryStats = [
  ["Name", athleteProfile.name],
  ["Class", athleteProfile.classYear],
  ["Position", "GK"],
  ["Secondary", "Forward experience"],
  ["Height", athleteProfile.height],
  ["Weight", athleteProfile.weight],
  ["GPA", athleteProfile.gpa],
  ["Location", athleteProfile.location],
] as const;

export default function RecruitingPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Recruiting</h1>

      <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
        <h2 className="text-xl font-semibold text-white">Recruiting Summary Card</h2>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {summaryStats.map(([label, value]) => (
            <div key={label}>
              <dt className="text-sm text-zinc-400">{label}</dt>
              <dd className="font-medium text-zinc-100">{value}</dd>
            </div>
          ))}
        </dl>
      </article>

      <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
        <h2 className="text-xl font-semibold text-white">Scouting Summary</h2>
        <p className="mt-2 text-sm text-zinc-300">
          International goalkeeper with strong academic trajectory, high upside potential, and multi-role
          tactical experience.
        </p>
      </article>

      <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 text-sm text-zinc-300">
        <h2 className="text-xl font-semibold text-white">Interested in recruiting Connor Burdick?</h2>
        <p className="mt-3">
          Email: <span className="text-zinc-100">{contactInfo.email}</span>
        </p>
        <p>
          Instagram: <span className="text-zinc-100">{contactInfo.instagram}</span>
        </p>
        <p className="mt-3">Response time: typically within 24–48 hours</p>
      </article>

      <ContactForm cta="Send to Recruiting Inbox" />
    </section>
  );
}
