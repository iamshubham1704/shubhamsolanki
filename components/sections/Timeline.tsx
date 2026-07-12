"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu, Users, GraduationCap, Trophy, Rocket,
  ShoppingBag, Code, Smartphone, Sparkles,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { timelineEvents } from "@/lib/data/timeline";
import type { TimelineEvent } from "@/lib/data/timeline";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />,
  GraduationCap: <GraduationCap className="w-4 h-4" />,
  Trophy: <Trophy className="w-4 h-4" />,
  Rocket: <Rocket className="w-4 h-4" />,
  ShoppingBag: <ShoppingBag className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
};

const colorMap = {
  emerald: { text: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-emerald-500/10", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]", cardGlow: "group-hover:border-emerald-500/30" },
  indigo: { text: "text-indigo-400", border: "border-indigo-500/40", bg: "bg-indigo-500/10", badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", glow: "shadow-[0_0_15px_rgba(99,102,241,0.15)]", cardGlow: "group-hover:border-indigo-500/30" },
  blue: { text: "text-blue-400", border: "border-blue-500/40", bg: "bg-blue-500/10", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]", cardGlow: "group-hover:border-blue-500/30" },
  yellow: { text: "text-yellow-400", border: "border-yellow-500/40", bg: "bg-yellow-500/10", badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", glow: "shadow-[0_0_15px_rgba(234,179,8,0.15)]", cardGlow: "group-hover:border-yellow-500/30" },
  amber: { text: "text-amber-400", border: "border-amber-500/40", bg: "bg-amber-500/10", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20", glow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]", cardGlow: "group-hover:border-amber-500/30" },
  red: { text: "text-red-400", border: "border-red-500/40", bg: "bg-red-500/10", badge: "bg-red-500/10 text-red-400 border-red-500/20", glow: "shadow-[0_0_15px_rgba(239,68,68,0.15)]", cardGlow: "group-hover:border-red-500/30" },
  purple: { text: "text-purple-400", border: "border-purple-500/40", bg: "bg-purple-500/10", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", glow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]", cardGlow: "group-hover:border-purple-500/30" },
  cyan: { text: "text-cyan-400", border: "border-cyan-500/40", bg: "bg-cyan-500/10", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]", cardGlow: "group-hover:border-cyan-500/30" },
  pink: { text: "text-pink-400", border: "border-pink-500/40", bg: "bg-pink-500/10", badge: "bg-pink-500/10 text-pink-400 border-pink-500/20", glow: "shadow-[0_0_15px_rgba(236,72,153,0.15)]", cardGlow: "group-hover:border-pink-500/30" },
  violet: { text: "text-violet-400", border: "border-violet-500/40", bg: "bg-violet-500/10", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]", cardGlow: "group-hover:border-violet-500/30" },
  teal: { text: "text-teal-400", border: "border-teal-500/40", bg: "bg-teal-500/10", badge: "bg-teal-500/10 text-teal-400 border-teal-500/20", glow: "shadow-[0_0_15px_rgba(20,184,166,0.15)]", cardGlow: "group-hover:border-teal-500/30" },
};

const desktopCoordinates = [
  { x: 125, y: 100 },
  { x: 375, y: 100 },
  { x: 625, y: 100 },
  { x: 875, y: 100 },
  { x: 875, y: 230 },
  { x: 625, y: 230 },
  { x: 375, y: 230 },
  { x: 125, y: 230 },
  { x: 125, y: 360 },
  { x: 375, y: 360 },
  { x: 625, y: 360 },
];

function getColor(color: string) {
  return colorMap[color as keyof typeof colorMap] ?? colorMap.blue;
}

function getIcon(event: TimelineEvent) {
  const Icon = iconMap[event.iconName];
  const c = getColor(event.color);
  return <span className={c.text}>{Icon}</span>;
}

export default function Timeline() {
  const [activeIdx, setActiveIdx] = useState(10);
  const [mobileIdx, setMobileIdx] = useState(0);

  const activeEvent = timelineEvents[activeIdx];
  const activeC = getColor(activeEvent.color);

  return (
    <section id="timeline" className="relative bg-[#05070d] text-white py-24 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="My Path"
          title="Coding"
          highlight="Journey"
          description="Hover the nodes to explore each milestone."
        />
      </div>

      {/* Desktop snake map */}
      <div className="hidden md:block w-full max-w-4xl mx-auto relative aspect-[1000/420] select-none mb-12">
        <svg viewBox="0 0 1000 420" className="absolute inset-0 w-full h-full fill-none z-0">
          <defs>
            <linearGradient id="tl-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          <path
            d="M 125 100 L 875 100 C 960 100, 960 230, 875 230 L 125 230 C 40 230, 40 360, 125 360 L 875 360"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M 125 100 L 875 100 C 960 100, 960 230, 875 230 L 125 230 C 40 230, 40 360, 125 360 L 875 360"
            stroke="url(#tl-grad)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {timelineEvents.map((event, index) => {
          const coords = desktopCoordinates[index];
          const isActive = index === activeIdx;
          const c = getColor(event.color);
          return (
            <div
              key={index}
              className="absolute cursor-pointer group z-10"
              style={{ left: `${coords.x / 10}%`, top: `${coords.y / 4.2}%` }}
              onMouseEnter={() => setActiveIdx(index)}
            >
              <div className={`absolute w-px h-5 -translate-x-1/2 -top-5 transition-all duration-300 ${isActive ? "bg-blue-500/40" : "bg-white/8 group-hover:bg-white/20"}`} />

              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 120, delay: index * 0.05 }}
                  className={`w-9 h-9 rounded-full border-2 flex items-center justify-center bg-[#05070d] transition-all duration-300 ${c.bg} ${c.border} ${c.glow} ${isActive ? "scale-125 ring-4 ring-blue-500/10" : ""}`}
                >
                  {getIcon(event)}
                </motion.div>
              </div>

              <div className={`absolute -translate-x-1/2 w-[140px] text-center -top-14 transition-all duration-300`}>
                <span className={`text-[11px] font-bold block leading-none mb-1 transition-colors ${isActive ? "text-blue-400" : "text-gray-500 group-hover:text-gray-300"}`}>
                  {event.date}
                </span>
                <span className="text-[12px] font-semibold text-white block truncate px-1 leading-tight">
                  {event.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Details card (desktop) */}
      <div className="hidden md:block max-w-2xl mx-auto px-4 relative z-10">
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6 backdrop-blur-md shadow-2xl overflow-hidden relative">
          <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-30 ${activeC.bg}`} />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-5"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border bg-[#05070d] ${activeC.border} ${activeC.bg} ${activeC.glow}`}>
                <div className="scale-125">{getIcon(activeEvent)}</div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-blue-400 font-bold text-lg">{activeEvent.date}</span>
                  {activeEvent.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${activeC.badge}`}>
                      {activeEvent.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">{activeEvent.title}</h3>
                {activeEvent.subtitle && (
                  <p className="text-sm text-gray-400 mt-0.5">{activeEvent.subtitle}</p>
                )}
                <p className="text-gray-300 mt-4 text-sm leading-relaxed">{activeEvent.desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile swipable cards */}
      <div className="md:hidden flex flex-col items-center w-full mt-4">
        <div
          className="w-full flex overflow-x-auto gap-4 px-4 pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const idx = Math.round(el.scrollLeft / (el.scrollWidth / timelineEvents.length));
            if (idx >= 0 && idx < timelineEvents.length) setMobileIdx(idx);
          }}
        >
          {timelineEvents.map((event, index) => {
            const c = getColor(event.color);
            return (
              <div
                key={index}
                className={`w-[85vw] shrink-0 snap-center bg-white/3 border border-white/8 rounded-2xl p-5 relative overflow-hidden flex flex-col min-h-[200px] transition-all duration-300 ${c.cardGlow}`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl rounded-full opacity-30 ${c.bg}`} />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-bold text-lg">{event.date}</span>
                    {event.badge && (
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium border ${c.badge}`}>
                        {event.badge}
                      </span>
                    )}
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border bg-[#05070d] ${c.border} ${c.bg}`}>
                    {getIcon(event)}
                  </div>
                </div>
                <h3 className="text-base font-bold text-white">{event.title}</h3>
                {event.subtitle && <p className="text-[11px] text-gray-400 mt-0.5">{event.subtitle}</p>}
                <p className="text-xs text-gray-300 mt-3 leading-relaxed">{event.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="w-1/2 max-w-[180px] h-1 bg-white/10 rounded-full overflow-hidden mt-4">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
            animate={{ width: `${((mobileIdx + 1) / timelineEvents.length) * 100}%` }}
            transition={{ duration: 0.15 }}
          />
        </div>
        <span className="text-[10px] text-gray-500 mt-2">
          Swipe to navigate ({mobileIdx + 1}/{timelineEvents.length})
        </span>
      </div>
    </section>
  );
}
