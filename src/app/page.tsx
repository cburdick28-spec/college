import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AcademicsChartSection } from "@/components/AcademicsChartSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { athleteProfile, contactInfo, projects } from "@/lib/site-data";

const snapshotItems = [
  {
    title: "Position",
    copy: "Goalkeeper (primary) with forward/striker experience that strengthens game reading.",
  },
  {
    title: "Play Style",
    copy: "Modern goalkeeper focused on distribution, proactive positioning, and calm decision-making.",
  },
  {
    title: "Academics",
    copy: (
      <>
        GPA trend{" "}
        <span aria-label={athleteProfile.gpaTrendLabel}>{athleteProfile.gpaTrend}</span> with strong STEM and
        business performance.
      </>
    ),
  },
  {
    title: "Builder Profile",
    copy: "AI tools, apps, simulations, and websites with an entrepreneurial mindset.",
  },
];

const scoutingReport = [
  {
    title: "Shot Stopping",
    description: "Explosive first step with confident handling, staying composed in tight reaction saves.",
  },
  {
    title: "1v1 Ability",
    description: "Holds ground and reads attacker cues well, forcing decisions and closing angles quickly.",
  },
  {
    title: "Distribution",
    description: "Comfortable playing out under pressure with accurate short releases and driven long balls.",
  },
  {
    title: "Positioning",
    description: "Active off the line, adjusts early to limit space and keeps defenders organized.",
  },
  {
    title: "Aerial Control",
    description: "Commands crosses with strong timing and decisive claims in traffic.",
  },
  {
    title: "Communication",
    description: "Clear, consistent organizer who sets the line and provides early cues.",
  },
  {
    title: "Tactical Awareness",
    description:
      "Forward experience adds attacking movement insight, improving transition reads and anticipation.",
  },
];

const filmLibraryItems = [
  "Shot stopping clips",
  "1v1s",
  "Crosses & aerial control",
  "Distribution (short + long)",
  "Full match footage",
  "Training clips",
];

const builderProjects = projects.filter((project) => project.recruitingFeatured);

export default function Home() {
  return (
    <div className="space-y-16 pb-10">
      <HeroSection />

      <section id="snapshot" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Quick Player Snapshot</p>
          <h2 className="text-3xl font-semibold text-white">Recruiting-ready at a glance</h2>
          <p className="max-w-2xl text-sm text-zinc-300">
            Immediate context for coaches — position, play style, academics, and builder identity.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {snapshotItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="showcase" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Showcase Evaluation Footage</p>
          <h2 className="text-3xl font-semibold text-white">Live match goalkeeper evaluation</h2>
          <p className="max-w-3xl text-sm text-zinc-300">
            Live competitive showcase footage highlighting goalkeeper shot stopping, positioning, distribution,
            aerial control, and decision-making under pressure.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-2xl">
          <iframe
            className="aspect-video w-full"
            src={athleteProfile.showcaseEmbedUrl}
            title="Showcase Evaluation Footage"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
          <p className="text-sm text-zinc-300">
            Additional full match footage available in the complete film library.
          </p>
          <a
            href={athleteProfile.filmLibraryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-blue-100"
          >
            View Full Film Library <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="film-library" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Complete Goalkeeper Film Library</p>
          <h2 className="text-3xl font-semibold text-white">Recruiter-first organized footage</h2>
          <p className="max-w-3xl text-sm text-zinc-300">
            Full library of match and training clips organized for rapid evaluation and deeper scouting.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Library includes</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              {filmLibraryItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Recruiting focus</h3>
            <p className="mt-3 text-sm text-zinc-300">
              Prioritizes real-game decision making, command of the box, and distribution choices under
              pressure with clear labeling for quick coach evaluation.
            </p>
          </article>
        </div>
        <a
          href={athleteProfile.filmLibraryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-blue-100"
        >
          Open Film Library <ArrowUpRight className="h-4 w-4" />
        </a>
      </section>

      <section id="scouting" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Goalkeeper Scouting Report</p>
          <h2 className="text-3xl font-semibold text-white">Coach-ready evaluation language</h2>
          <p className="max-w-3xl text-sm text-zinc-300">
            Descriptive scouting notes focused on match impact and decision-making under pressure.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {scoutingReport.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="international" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200">International Development</p>
          <h2 className="text-3xl font-semibold text-white">Madrid training advantage</h2>
          <p className="max-w-3xl text-sm text-zinc-300">
            Daily training in Madrid exposes Connor to multiple playing styles, higher tactical demands, and
            accelerated adaptation to elite environments.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Exposure to European tactical frameworks and faster decision cycles.",
            "Comfort facing diverse attacking profiles and shot selections.",
            "Proven adaptability to high-pressure, high-expectation training settings.",
          ].map((point) => (
            <article
              key={point}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-300 shadow-lg backdrop-blur"
            >
              {point}
            </article>
          ))}
        </div>
      </section>

      <section id="academics" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Academics + Builder Profile</p>
          <h2 className="text-3xl font-semibold text-white">Built beyond soccer</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Academic trajectory</h3>
            <p className="text-sm text-zinc-300">
              GPA progression{" "}
              <span className="font-semibold text-white" aria-label={athleteProfile.gpaTrendLabel}>
                {athleteProfile.gpaTrend}
              </span>{" "}
              with strong STEM performance and business + computer science strengths.
            </p>
            <AcademicsChartSection />
            <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
              <li>Discipline-driven upward academic arc</li>
              <li>Analytical systems thinking and problem solving</li>
              <li>Consistent improvement in structure and execution</li>
            </ul>
          </article>
          <article className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
            <div>
              <h3 className="text-xl font-semibold text-white">Builder portfolio</h3>
              <p className="mt-2 text-sm text-zinc-300">
                AI tools, apps, simulations, and web systems demonstrating entrepreneurial mindset.
              </p>
            </div>
            <div className="grid gap-4">
              {builderProjects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Open to Recruiting Opportunities</p>
              <h2 className="text-3xl font-semibold text-white">Recruiting contact</h2>
              <p className="text-sm text-zinc-300">
                GK | Class of 2028 | {athleteProfile.height} | {athleteProfile.weight} | Madrid, Spain | GPA{" "}
                {athleteProfile.gpa}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${contactInfo.email}`}>
                <Button size="lg">Contact</Button>
              </a>
              <Link href="/#showcase">
                <Button size="lg" variant="outline">
                  Watch Footage
                </Button>
              </Link>
              <a href={athleteProfile.filmLibraryUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  Film Library
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-6 grid gap-4 text-sm text-zinc-300 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Email</p>
              <p className="mt-1 text-base text-white">{contactInfo.email}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Instagram</p>
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex text-base text-white hover:text-blue-200"
              >
                {contactInfo.instagram}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
