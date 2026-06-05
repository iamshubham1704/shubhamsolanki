"use client";
import React from "react";
import { motion } from "framer-motion";
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
    title: "The Spark of Coding",
    subtitle: "Age 14, 9th Grade",
    desc: "Began my journey into technology by learning fundamentals of programming and building hands-on hardware projects with Arduino Uno, blending code with physical computing.",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    color: "emerald",
    badge: "9th Grade",
  },
  {
    date: "2023",
    title: "Mentoring Next Gen Techies",
    subtitle: "ATAL Tinkering Lab",
    desc: "Served as a student mentor in the school's ATAL Tinkering Lab, guiding juniors through engineering projects, robotics, and coding logic, discovering a passion for sharing knowledge.",
    icon: <Users className="w-5 h-5 text-indigo-400" />,
    color: "indigo",
    badge: "Mentorship",
  },
  {
    date: "2024",
    title: "Starting College",
    subtitle: "B.Tech Journey Begins",
    desc: "Transitioned into college life, diving deeper into core computer science concepts, advanced algorithms, and connecting with a wider developer community.",
    icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
    color: "blue",
  },
  {
    date: "Oct 2024",
    title: "Won HackwithMAIT Hackathon",
    subtitle: "1st Semester Win",
    desc: "Collaborated with a stellar team to build a working prototype under pressure, winning my very first college hackathon during my first semester.",
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    color: "yellow",
    badge: "Winner",
  },
  {
    date: "Feb 2025",
    title: "Won Google Developer Challenge",
    subtitle: "2nd Semester Recognition",
    desc: "Won the Google Developer Challenge by designing and engineering an impactful solution, demonstrating rapid execution and technical depth early in my studies.",
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
    color: "amber",
    badge: "Winner",
  },
  {
    date: "March 2025",
    title: "Coencers (First Startup)",
    subtitle: "Learned & Failed",
    desc: "Took the entrepreneurial leap by co-founding Coencers. Although the startup eventually folded, it was an intensive crash course in product-market fit, team dynamics, and MVP design.",
    icon: <Rocket className="w-5 h-5 text-red-400" />,
    color: "red",
    badge: "Startup #1",
  },
  {
    date: "June 2025",
    title: "PyIce (Second Startup)",
    subtitle: "AI Venture & Valuation Milestone",
    desc: "Co-founded PyIce, an AI startup. We secured a valuation of several Crores. However, scaling challenges led to its closure, teaching me brutal but priceless lessons about scalability and market timing.",
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    color: "purple",
    badge: "Startup #2",
  },
  {
    date: "Sept 2025",
    title: "CampusMart.store",
    subtitle: "Peer-to-Peer Campus Marketplace",
    desc: "Identified a campus-wide gap and built a marketplace to let students buy/sell textbooks, materials, and electronics. It scaled to 1,000+ active users and generated 40k+ in revenue, proving my builder chops.",
    icon: <ShoppingBag className="w-5 h-5 text-cyan-400" />,
    color: "cyan",
    badge: "Product Success",
  },
  {
    date: "Dec 2025",
    title: "Joined Micro Kahani",
    subtitle: "Founding Engineer",
    desc: "Brought on board as the founding engineer for Micro Kahani, building a next-gen short-form drama video platform from scratch and architecting full-stack scalable services.",
    icon: <Code className="w-5 h-5 text-pink-400" />,
    color: "pink",
    badge: "Founding Role",
  },
  {
    date: "May 2026",
    title: "Launched CollegePaglu",
    subtitle: "Live on Google Play Store",
    desc: "Rebranded, completely overhauled, and packed CampusMart with advanced features. Launched the result, CollegePaglu, directly onto the Google Play Store for students to download and use.",
    icon: <Smartphone className="w-5 h-5 text-violet-400" />,
    color: "violet",
    badge: "App Store",
  },
  {
    date: "Present",
    title: "Always Building",
    subtitle: "Creating Real Value",
    desc: "Continuing to design, develop, and scale applications and utility tools that solve actual problems for real people, staying active in the developer ecosystem.",
    icon: <Sparkles className="w-5 h-5 text-teal-400" />,
    color: "teal",
    badge: "Active",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="relative bg-[#05070d] text-white py-24 px-6 overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full -z-10"></div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-20 text-center md:text-left">
        <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">My Path</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Coding <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl text-lg">
          A timeline of learning, building, launching startups, failing forward, and shipping real-world apps.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="max-w-5xl mx-auto relative">
        
        {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500/40 via-purple-500/30 to-teal-500/20 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="space-y-16">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;

            // Color variant helper for border/shadow glows
            const glowStyles: Record<string, string> = {
              emerald: "group-hover:border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]",
              indigo: "group-hover:border-indigo-500/30 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]",
              blue: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
              yellow: "group-hover:border-yellow-500/30 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.1)]",
              amber: "group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]",
              red: "group-hover:border-red-500/30 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]",
              purple: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]",
              cyan: "group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]",
              pink: "group-hover:border-pink-500/30 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.1)]",
              violet: "group-hover:border-violet-500/30 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]",
              teal: "group-hover:border-teal-500/30 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]",
            };

            const pointGlowStyles: Record<string, string> = {
              emerald: "bg-emerald-500/10 border-emerald-500/50 group-hover:bg-emerald-500/30 group-hover:border-emerald-400",
              indigo: "bg-indigo-500/10 border-indigo-500/50 group-hover:bg-indigo-500/30 group-hover:border-indigo-400",
              blue: "bg-blue-500/10 border-blue-500/50 group-hover:bg-blue-500/30 group-hover:border-blue-400",
              yellow: "bg-yellow-500/10 border-yellow-500/50 group-hover:bg-yellow-500/30 group-hover:border-yellow-400",
              amber: "bg-amber-500/10 border-amber-500/50 group-hover:bg-amber-500/30 group-hover:border-amber-400",
              red: "bg-red-500/10 border-red-500/50 group-hover:bg-red-500/30 group-hover:border-red-400",
              purple: "bg-purple-500/10 border-purple-500/50 group-hover:bg-purple-500/30 group-hover:border-purple-400",
              cyan: "bg-cyan-500/10 border-cyan-500/50 group-hover:bg-cyan-500/30 group-hover:border-cyan-400",
              pink: "bg-pink-500/10 border-pink-500/50 group-hover:bg-pink-500/30 group-hover:border-pink-400",
              violet: "bg-violet-500/10 border-violet-500/50 group-hover:bg-violet-500/30 group-hover:border-violet-400",
              teal: "bg-teal-500/10 border-teal-500/50 group-hover:bg-teal-500/30 group-hover:border-teal-400",
            };

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

            const selectedGlow = glowStyles[event.color] || "group-hover:border-blue-500/30";
            const selectedPointGlow = pointGlowStyles[event.color] || "bg-blue-500/10 border-blue-500/50";
            const selectedBadgeGlow = badgeStyles[event.color] || "bg-blue-500/10 text-blue-400 border-blue-500/20";

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start md:items-center group"
              >
                {/* Timeline Icon / Node Point */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center backdrop-blur-md transition-all duration-300 ${selectedPointGlow}`}
                  >
                    {event.icon}
                  </motion.div>
                </div>

                {/* Left Side Spacer or content card */}
                <div className={`w-full md:w-1/2 flex pl-12 md:pl-0 ${isEven ? "md:pr-12 md:justify-end" : "md:pl-12 md:order-2"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`relative w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 ${selectedGlow} hover:scale-[1.02]`}
                  >
                    {/* Header line with date & badge */}
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-blue-400 font-bold tracking-wide text-lg">
                        {event.date}
                      </span>
                      {event.badge && (
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${selectedBadgeGlow}`}>
                          {event.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {event.title}
                    </h3>
                    
                    {event.subtitle && (
                      <p className="text-sm text-gray-400 mt-0.5 font-medium">
                        {event.subtitle}
                      </p>
                    )}

                    <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Right Side Spacer for desktop view layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
