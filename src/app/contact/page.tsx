import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { athleteProfile } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Contact</h1>
      <ContactForm />

      <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 text-sm text-zinc-300">
        <h2 className="text-lg font-semibold text-white">Links</h2>
        <ul className="mt-3 space-y-2">
          <li>
            YouTube Highlights: <Link className="text-blue-300" href={athleteProfile.highlightsUrl}>{athleteProfile.highlightsUrl}</Link>
          </li>
          <li>
            GitHub: <Link className="text-blue-300" href={athleteProfile.githubUrl}>{athleteProfile.githubUrl}</Link>
          </li>
          <li>
            Instagram (optional): <Link className="text-blue-300" href={athleteProfile.instagramUrl}>{athleteProfile.instagramUrl}</Link>
          </li>
        </ul>
      </article>
    </section>
  );
}
