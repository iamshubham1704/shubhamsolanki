"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  const [featured, ...moreProjects] = projects;
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 text-white md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_45%,rgba(14,165,233,.1),transparent_28rem)]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Selected work" title="Proof, not just" highlight="promises." description="A few products where I owned the hard parts—from the first idea to real users." />
        <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-[1.75rem] border border-sky-300/20 bg-linear-to-br from-sky-400/12 via-[#101725] to-[#0d111b] p-7 md:p-10">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl transition group-hover:bg-sky-400/15" />
          <div className="relative grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-end">
            <div><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-200"><Sparkles size={12} /> Featured product</div><p className="text-sm text-sky-200/80">01 / Product engineering</p><h3 className="mt-3 text-4xl font-semibold tracking-[-.055em] md:text-5xl">{featured.name}</h3><p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">{featured.desc}</p><div className="mt-7 flex flex-wrap gap-2">{featured.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-xs text-slate-300">{tag}</span>)}</div></div>
            <div className="rounded-2xl border border-white/10 bg-black/15 p-5 md:p-6"><p className="text-xs uppercase tracking-[.16em] text-slate-500">Outcome</p><p className="mt-3 text-3xl font-semibold tracking-tight text-white">1500+ students onboarded</p><p className="mt-2 text-sm leading-relaxed text-slate-400">A unified campus platform that brings commerce, orders, and community services into one app.</p><a href={featured.link} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-100">View on Google Play <ArrowUpRight size={16} /></a></div>
          </div>
        </motion.article>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {moreProjects.map((project, index) => <motion.article key={project.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group flex min-h-80 flex-col rounded-2xl border border-white/9 bg-white/2.5 p-6 transition hover:-translate-y-1 hover:border-sky-300/25 hover:bg-white/4.5"><div className="flex items-start justify-between"><span className="text-sm font-mono text-slate-600">0{index + 2}</span>{project.featured && <span className="text-[10px] font-medium uppercase tracking-wider text-sky-300">Featured</span>}</div><h3 className="mt-10 text-xl font-semibold tracking-tight text-white">{project.name}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.desc}</p><div className="mt-6 flex flex-wrap gap-1.5">{project.tags.slice(0, 3).map((tag) => <span key={tag} className="text-[11px] text-slate-500">{tag}</span>)}</div><div className="mt-5 flex gap-4 border-t border-white/8 pt-4"><a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-sky-300 hover:text-sky-100">View <ArrowUpRight size={14} /></a>{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-sm text-slate-500 hover:text-white">Source</a>}</div></motion.article>)}
        </div>
        <div className="mt-10 text-center">
          <a href="https://github.com/iamshubham1704" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/4 px-5 py-3 text-sm font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-white/8 hover:text-white">
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
