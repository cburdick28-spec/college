import { ContactForm } from "@/components/ContactForm";
import { RecruitingProfileSection } from "@/components/RecruitingProfileSection";
import { contactInfo } from "@/lib/site-data";

export default function RecruitingPage() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold text-white">Recruiting</h1>

      <RecruitingProfileSection />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-200 shadow-[0_25px_70px_rgba(15,23,42,0.45)] backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Interested in recruiting Connor Burdick?</h3>
          <p className="mt-4">
            Email: <span className="text-zinc-100">{contactInfo.email}</span>
          </p>
          <p>
            Instagram: <span className="text-zinc-100">{contactInfo.instagram}</span>
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-blue-200">
            Response time: typically within 24–48 hours
          </p>
        </article>

        <ContactForm cta="Send to Recruiting Inbox" />
      </div>
    </section>
  );
}
