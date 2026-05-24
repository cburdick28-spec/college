import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { athleteProfile, contactInfo } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Contact</h1>
      <ContactForm />

      <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 text-sm text-zinc-300">
        <h2 className="text-lg font-semibold text-white">Contact Information</h2>
        <ul className="mt-3 space-y-2">
          <li>
            <span className="font-medium text-white">Email:</span> {contactInfo.email}
          </li>
          <li>
            <span className="font-medium text-white">Instagram:</span> {contactInfo.instagram}
          </li>
        </ul>
        <div className="mt-4">
          <h3 className="font-medium text-white">Primary use:</h3>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>College soccer recruiting contact</li>
            <li>Highlight submissions</li>
            <li>Academic / portfolio inquiries</li>
          </ul>
        </div>
      </article>

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
