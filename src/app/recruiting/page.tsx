import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { athleteProfile } from "@/lib/site-data";

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

      <div className="flex flex-wrap gap-3">
        <Link href="#" aria-disabled>
          <Button>Download Resume (PDF)</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Connect with Coaching Staff</Button>
        </Link>
      </div>

      <ContactForm cta="Send to Recruiting Inbox" />
    </section>
  );
}
