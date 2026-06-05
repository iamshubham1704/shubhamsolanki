"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Users,
  GraduationCap,
  Trophy,
  Rocket,
  ShoppingBag,
  Code,
  Smartphone,
  Sparkles,
} from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  subtitle?: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  badge?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "2019",
    title: "Spark of Coding",
    subtitle: "Age 14, 9th Grade",
    desc: "Began my coding journey by learning programming fundamentals and building hardware projects with Arduino Uno, merging code with real-world electronics.",
    icon: <Cpu className="w-4 h-4 text-emerald-400" />,
    color: "emerald",
    badge: "Arduino",
  },
  {
    date: "2023",
    title: "ATAL Lab Mentor",
    subtitle: "School Mentorship Role",
    desc: "Served as a student mentor in the school's ATAL Tinkering Lab, guiding juniors in robotics, circuits, and programming logic.",
    icon: <Users className="w-4 h-4 text-indigo-400" />,
    color: "indigo",
    badge: "Leadership",
  },
  {
    date: "2024",
    title: "Joined College",
    subtitle: "B.Tech CSE Journey Starts",
    desc: "Transitioned into college life, diving into advanced algorithms, computer systems, and starting to build community networks.",
    icon: <GraduationCap className="w-4 h-4 text-blue-400" />,
    color: "blue",
  },
  {
    date: "Oct 2024",
    title: "Won HackwithMAIT",
    subtitle: "First Semester Hackathon",
    desc: "Collaborated in a fast-paced environment to build and pitch a working prototype under pressure, securing the first-place prize.",
    icon: <Trophy className="w-4 h-4 text-yellow-400" />,
    color: "yellow",
    badge: "1st Place",
  },
  {
    date: "Feb 2025",
    title: "Google Developer Challenge",
    subtitle: "Won 2nd Semester Project",
    desc: "Engineered and shipped a technical application that won the Google Developer Challenge, validating my execution and speed.",
    icon: <Trophy className="w-4 h-4 text-amber-400" />,
    color: "amber",
    badge: "Winner",
  },
  {
    date: "March 2025",
    title: "Coencers Startup",
    subtitle: "First Startup Venture",
    desc: "Launched my first startup. Though it did not succeed, it provided a crash course in operations, market dynamics, and building MVPs.",
    icon: <Rocket className="w-4 h-4 text-red-400" />,
    color: "red",
    badge: "Startup #1",
  },
  {
    date: "June 2025",
    title: "PyIce AI Startup",
    subtitle: "Second Startup Venture",
    desc: "Co-founded an AI startup (PyIce), securing a valuation of a few Crores. Faced scaling challenges that taught me lessons on market timing.",
    icon: <Rocket className="w-4 h-4 text-purple-400" />,
    color: "purple",
    badge: "Startup #2",
  },
  {
    date: "Sept 2025",
    title: "CampusMart.store",
    subtitle: "P2P Marketplace Launch",
    desc: "Built a peer-to-peer campus platform for buying and selling. Successfully scaled to 1,000+ active users and generated 40k+ in revenue.",
    icon: <ShoppingBag className="w-4 h-4 text-cyan-400" />,
    color: "cyan",
    badge: "Success",
  },
  {
    date: "Dec 2025",
    title: "Founding Engineer",
    subtitle: "Joined Micro Kahani",
    desc: "Brought on as the founding engineer for Micro Kahani, architecting a full-stack, scalable short-form drama video platform from scratch.",
    icon: <Code className="w-4 h-4 text-pink-400" />,
    color: "pink",
    badge: "Founding",
  },
  {
    date: "May 2026",
    title: "CollegePaglu App",
    subtitle: "Live on Play Store",
    desc: "Upgraded CampusMart with new features, rebranded it as CollegePaglu, and successfully published it to the Google Play Store.",
    icon: <Smartphone className="w-4 h-4 text-violet-400" />,
    color: "violet",
    badge: "Google Play",
  },
  {
    date: "Present",
    title: "Always Building",
    subtitle: "Deploying Real-World Apps",
    desc: "Actively developing and scaling applications and open-source systems that deliver utility and value to users.",
    icon: <Sparkles className="w-4 h-4 text-teal-400" />,
    color: "teal",
    badge: "Active",
  },
];

// SVG grid coordinates for winding horizontal snake layout
const desktopCoordinates = [
  // Row 1 (L -> R)
  { x: 125, y: 100, labelY: 45 },
  { x: 375, y: 100, labelY: 45 },
  { x: 625, y: 100, labelY: 45 },
  { x: 875, y: 100, labelY: 45 },
  // Row 2 (R -> L)
  { x: 875, y: 230, labelY: 175 },
  { x: 625, y: 230, labelY: 175 },
  { x: 375, y: 230, labelY: 175 },
  { x: 125, y: 230, labelY: 175 },
  // Row 3 (L -> R)
  { x: 125, y: 360, labelY: 305 },
  { x: 375, y: 360, labelY: 305 },
  { x: 625, y: 360, labelY: 305 },
];

const Timeline = () => {
  const [activeIdx, setActiveIdx] = useState(10); // Default to the latest event (Always Building)

  // Whitelisted Tailwind classes for static compilation
  const badgeStyles: Record<string, string> = {
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  };

  const glowStyles: Record<string, string> = {
    emerald: "group-hover:border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]",
    indigo: "group-hover:border-indigo-500/30 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.1)]",
    blue: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]",
    yellow: "group-hover:border-yellow-500/30 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.1)]",
    amber: "group-hover:border-amber-500/30 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    red: "group-hover:border-red-500/30 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.1)]",
    purple: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]",
    cyan: "group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]",
    pink: "group-hover:border-pink-500/30 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.1)]",
    violet: "group-hover:border-violet-500/30 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]",
    teal: "group-hover:border-teal-500/30 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.1)]",
  };

  const pointGlowStyles: Record<string, string> = {
    emerald: "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    indigo: "bg-indigo-500/10 border-indigo-500/40 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]",
    blue: "bg-blue-500/10 border-blue-500/40 text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
    yellow: "bg-yellow-500/10 border-yellow-500/40 text-yellow-400 group-hover:bg-yellow-500/20 group-hover:border-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.15)]",
    amber: "bg-amber-500/10 border-amber-500/40 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
    red: "bg-red-500/10 border-red-500/40 text-red-400 group-hover:bg-red-500/20 group-hover:border-red-300 shadow-[0_0_15px_rgba(239,68,68,0.15)]",
    purple: "bg-purple-500/10 border-purple-500/40 text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    cyan: "bg-cyan-500/10 border-cyan-500/40 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
    pink: "bg-pink-500/10 border-pink-500/40 text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.15)]",
    violet: "bg-violet-500/10 border-violet-500/40 text-violet-400 group-hover:bg-violet-500/20 group-hover:border-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.15)]",
    teal: "bg-teal-500/10 border-teal-500/40 text-teal-400 group-hover:bg-teal-500/20 group-hover:border-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.15)]",
  };

  const detailsGlowStyles: Record<string, string> = {
    emerald: "bg-emerald-500/10 border-emerald-500/20",
    indigo: "bg-indigo-500/10 border-indigo-500/20",
    blue: "bg-blue-500/10 border-blue-500/20",
    yellow: "bg-yellow-500/10 border-yellow-500/20",
    amber: "bg-amber-500/10 border-amber-500/20",
    red: "bg-red-500/10 border-red-500/20",
    purple: "bg-purple-500/10 border-purple-500/20",
    cyan: "bg-cyan-500/10 border-cyan-500/20",
    pink: "bg-pink-500/10 border-pink-500/20",
    violet: "bg-violet-500/10 border-violet-500/20",
    teal: "bg-teal-500/10 border-teal-500/20",
  };

  const activeEvent = timelineEvents[activeIdx];

  return (
    <section id="timeline" className="relative bg-[#05070d] text-white py-24 px-6 overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full -z-10"></div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-16 text-center md:text-left">
        <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">My Path</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Coding <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl text-lg">
          Hover over the path nodes to explore details of each milestone.
        </p>
      </div>

      {/* 1. DESKTOP Winding Winding Horizontal Snake Timeline */}
      <div className="hidden md:block w-full max-w-4xl mx-auto relative aspect-[1000/420] select-none mb-12">
        
        {/* SVG Path Background and Colored Animated Path */}
        <svg viewBox="0 0 1000 420" className="absolute inset-0 w-full h-full text-white/5 fill-none z-0">
          <defs>
            <linearGradient id="timeline-grad-horizontal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>

          {/* Dim background connector line */}
          <path
            d="M 125 100 L 875 100 C 960 100, 960 230, 875 230 L 125 230 C 40 230, 40 360, 125 360 L 875 360"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Animated active gradient line on scroll */}
          <motion.path
            d="M 125 100 L 875 100 C 960 100, 960 230, 875 230 L 125 230 C 40 230, 40 360, 125 360 L 875 360"
            stroke="url(#timeline-grad-horizontal)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>

        {/* Timeline Events overlay */}
        {timelineEvents.map((event, index) => {
          const coords = desktopCoordinates[index];
          const isActive = index === activeIdx;
          const selectedPointGlow = pointGlowStyles[event.color] || "bg-blue-500/10 border-blue-500/50";
          const selectedTextGlow = isActive ? "text-blue-400 scale-105" : "text-gray-400 group-hover:text-gray-200";

          return (
            <div
              key={index}
              className="absolute cursor-pointer group z-10"
              style={{
                left: `${coords.x / 10}%`,
                top: `${coords.y / 4.2}%`,
              }}
              onMouseEnter={() => setActiveIdx(index)}
            >
              
              {/* Vertical connector line (node to label) */}
              <div
                className={`absolute w-px h-5 -translate-x-1/2 -top-5 transition-all duration-300 ${
                  isActive ? "bg-blue-500/40 h-6 -top-6" : "bg-white/10 group-hover:bg-white/20"
                }`}
              />

              {/* Node Point on path */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 120, delay: index * 0.05 }}
                  className={`w-9 h-9 rounded-full border-2 flex items-center justify-center bg-[#05070d] transition-all duration-300 ${selectedPointGlow} ${
                    isActive ? "scale-125 ring-4 ring-blue-500/10" : ""
                  }`}
                >
                  {event.icon}
                </motion.div>
              </div>

              {/* Compact text label above the node */}
              <div
                className={`absolute -translate-x-1/2 w-[140px] text-center transition-all duration-300 ${
                  isActive ? "-top-15" : "-top-14"
                }`}
              >
                <span className={`text-[11px] font-bold block transition-colors leading-none mb-1 ${selectedTextGlow}`}>
                  {event.date}
                </span>
                <span className="text-[12px] font-semibold text-white block truncate leading-tight px-1">
                  {event.title}
                </span>
              </div>

            </div>
          );
        })}

      </div>

      {/* Unified Master Details Display Card (Desktop Only) */}
      <div className="hidden md:block max-w-2xl mx-auto px-4 z-10 relative">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden shadow-2xl shadow-black/30">
          
          {/* Subtle colored glow corner indicator */}
          <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-30 transition-all duration-500 ${detailsGlowStyles[activeEvent.color]}`} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex items-start gap-6"
            >
              {/* Glowing Icon Circle */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border bg-[#05070d] transition-all duration-300 ${pointGlowStyles[activeEvent.color]}`}>
                <div className="scale-125">
                  {activeEvent.icon}
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-grow">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 font-bold text-lg">{activeEvent.date}</span>
                    {activeEvent.badge && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${badgeStyles[activeEvent.color]}`}>
                        {activeEvent.badge}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {activeEvent.title}
                </h3>
                
                {activeEvent.subtitle && (
                  <p className="text-sm text-gray-400 font-medium mt-0.5">
                    {activeEvent.subtitle}
                  </p>
                )}

                <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                  {activeEvent.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 2. MOBILE Compact Vertical Fallback Timeline */}
      <div className="md:hidden max-w-lg mx-auto relative border-l border-white/10 pl-8 space-y-12">
        {timelineEvents.map((event, index) => {
          const selectedBadgeGlow = badgeStyles[event.color] || "bg-blue-500/10 text-blue-400 border-blue-500/20";
          const selectedGlow = glowStyles[event.color] || "group-hover:border-blue-500/30";
          const selectedPointGlow = pointGlowStyles[event.color] || "bg-blue-500/10 border-blue-500/50";

          return (
            <div key={index} className="relative group">
              
              {/* Timeline Dot centered on vertical line */}
              <div className="absolute -left-[40px] top-4 w-6 h-6 rounded-full border border-blue-400/50 bg-[#05070d] flex items-center justify-center -translate-y-1/2 z-10 transition-all duration-300 group-hover:scale-110">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-300 ${selectedPointGlow}`}>
                  {event.icon}
                </div>
              </div>

              {/* Vertical Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className={`bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] ${selectedGlow}`}
              >
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-blue-400 font-bold tracking-wide text-base">
                    {event.date}
                  </span>
                  {event.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${selectedBadgeGlow}`}>
                      {event.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {event.title}
                </h3>
                
                {event.subtitle && (
                  <p className="text-xs text-gray-400 mt-0.5 font-medium">
                    {event.subtitle}
                  </p>
                )}

                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  {event.desc}
                </p>
              </motion.div>

            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Timeline;
