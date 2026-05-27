"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Handshake, Sparkles, Target, User } from "lucide-react";

const profileSections = [
  {
    title: "About Me",
    icon: User,
    body: "Dedicated and hardworking student-athlete with a strong passion for soccer and continuous improvement both on and off the field.",
  },
  {
    title: "What Makes Me Unique",
    icon: Sparkles,
    body: "Brings a competitive mindset, strong work ethic, and team-first attitude to every environment.",
  },
  {
    title: "Goals",
    icon: Target,
    body: "Enjoys challenging situations that push growth as both a player and person, while also balancing interests in technology, problem-solving, and leadership.",
  },
  {
    title: "What I’m Looking For in a College",
    icon: GraduationCap,
    body: "Looking for a college with a competitive and supportive culture where strong relationships between players and coaches are valued, along with opportunities to grow academically and athletically.",
  },
  {
    title: "How I Can Help the Program",
    icon: Handshake,
    body: "Able to contribute to a program through consistency, coachability, communication, leadership, and a willingness to always put the team first while helping create a positive and driven team environment.",
  },
];

const statBadges = ["Student Athlete", "Team First", "Competitive", "Coachable", "Leadership"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function RecruitingProfileSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/70 px-6 py-12 shadow-[0_35px_120px_rgba(3,7,18,0.7)] backdrop-blur-xl sm:px-10">
      <motion.div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(148,163,184,0.25),transparent_45%),radial-gradient(circle_at_30%_80%,rgba(14,165,233,0.3),transparent_55%),radial-gradient(circle_at_90%_85%,rgba(59,130,246,0.25),transparent_55%)",
            backgroundSize: "180% 180%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.9),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.92),rgba(15,23,42,0.65)_45%,rgba(2,6,23,0.95))]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(0deg,rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.35)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-blue-500/25 via-transparent to-slate-900/40 blur-2xl" />
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/5 shadow-[0_25px_70px_rgba(15,23,42,0.65)]"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/recruiting-profile.jpg"
                alt="Connor Burdick holding a trophy and soccer ball"
                fill
                className="object-cover object-[center_top] contrast-110"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={itemVariants}>
            <p className="text-xs uppercase tracking-[0.25em] text-blue-200">NCAA Division I Recruiting Profile</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              About Me / Recruiting Profile
            </h2>
          </motion.div>

          <div className="grid gap-4">
            {profileSections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.article
                  key={section.title}
                  variants={itemVariants}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.4)] backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-blue-200 shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-200">{section.body}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {statBadges.map((badge) => (
              <motion.span
                key={badge}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59,130,246,0.35)" }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="rounded-full border border-blue-200/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-100 shadow-[0_12px_30px_rgba(15,23,42,0.5)]"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
