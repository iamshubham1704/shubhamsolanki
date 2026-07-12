"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const stats = [
  { value: "₹10L+", label: "client value delivered" },
  { value: "10+", label: "clients served" },
];

const milestoneImages = [
  "/milestones/1.jpg",
  "/milestones/2.png",
  "/milestones/3.png",
  "/milestones/4.png",
  "/milestones/5.png",
  "/milestones/featured.png",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setCurrentSlide((slide) => (slide + 1) % milestoneImages.length),
      3500,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative isolate overflow-hidden px-6 pb-16 pt-32 text-white md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_25%,rgba(14,165,233,.16),transparent_22rem),radial-gradient(circle_at_12%_80%,rgba(99,102,241,.1),transparent_24rem)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30 mask-linear-[gradient(to_bottom,black,transparent_85%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" /></span>
            Available for ambitious product work
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mb-5 flex items-center gap-2 text-sm text-slate-400"><MapPin size={14} className="text-sky-300" /> Delhi, India · Product Engineer & AI Builder</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.55 }} className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.065em] sm:text-6xl lg:text-7xl">
            I build digital products people <span className="bg-linear-to-r from-sky-200 via-sky-300 to-blue-400 bg-clip-text text-transparent">come back to.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            I&apos;m Shubham Solanki—an engineer who turns uncertain ideas into fast, useful, and scalable experiences.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-100">Explore selected work <ArrowUpRight size={16} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/4 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/8">Start a conversation</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
            {stats.map((stat, index) => <div key={stat.label} className={`px-3 first:pl-0 ${index < 2 ? "border-r border-white/10" : ""}`}><strong className="block text-2xl font-semibold tracking-tight text-white">{stat.value}</strong><span className="mt-1 block text-[11px] leading-snug text-slate-500">{stat.label}</span></div>)}
          </motion.div>
          <div className="mt-6 flex items-center gap-3"><span className="text-xs text-slate-500">Find me on</span><a aria-label="GitHub" href="https://github.com/iamshubham1704" target="_blank" rel="noreferrer" className="text-xs font-semibold text-slate-400 transition hover:text-white">GitHub</a><span className="text-slate-700">/</span><a aria-label="LinkedIn" href="https://www.linkedin.com/in/iamshubhamsolanki" target="_blank" rel="noreferrer" className="text-xs font-semibold text-slate-400 transition hover:text-white">LinkedIn</a></div>
        </div>

        <motion.aside initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.65 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 -z-10 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d111b] p-3 shadow-2xl shadow-black/40">
            <div className="group relative aspect-4/3 overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950">
              <Image src={milestoneImages[currentSlide]} alt={`Career milestone ${currentSlide + 1}`} fill priority className="object-contain p-4 transition-opacity duration-500" />
              <button onClick={() => setCurrentSlide((slide) => (slide - 1 + milestoneImages.length) % milestoneImages.length)} aria-label="Previous milestone" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 px-2.5 py-1.5 text-sm text-white opacity-0 transition hover:bg-black/80 group-hover:opacity-100">←</button>
              <button onClick={() => setCurrentSlide((slide) => (slide + 1) % milestoneImages.length)} aria-label="Next milestone" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 px-2.5 py-1.5 text-sm text-white opacity-0 transition hover:bg-black/80 group-hover:opacity-100">→</button>
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5">
                {milestoneImages.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} aria-label={`Show milestone ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === currentSlide ? "w-5 bg-sky-300" : "w-1.5 bg-white/35 hover:bg-white/70"}`} />)}
              </div>
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-4"><span className="text-xs text-slate-500">Selected work · 2024—2026</span><a href="#projects" className="inline-flex items-center gap-1 text-xs font-medium text-sky-300 hover:text-sky-200">View case studies <ArrowUpRight size={13} /></a></div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
