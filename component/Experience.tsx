"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founding Engineer",
    company: "Micro Kahani",
    duration: "Dec 2025 - Present",
    desc: "Building a micro drama platform, working on full-stack systems and scalable features.",
  },
  {
    role: "AI Mentor",
    company: "Google Developer Groups MAIT",
    duration: "Sep 2025 - Present",
    desc: "Mentoring students in AI/ML, guiding projects and real-world implementations.",
  },
  {
    role: "Co-Head Venture Lab",
    company: "Startup Sphere",
    duration: "Sep 2025 - Present",
    desc: "Leading innovation initiatives and helping students build startups.",
  },
  {
    role: "Contributor",
    company: "Social (Script Foundation)",
    duration: "Jun 2025 - Present",
    desc: "Contributing to community-driven tech initiatives.",
  },
  {
    role: "Head of Finance",
    company: "AnalytixLabs",
    duration: "Mar 2025 - May 2025",
    desc: "Managed financial planning and operations during internship.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#05070d] text-white py-24 px-6 relative overflow-hidden">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-16">
        <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">History</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          My <span className="text-blue-400">Experience</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Professional roles and leadership positions I've held
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto relative border-l border-white/10 pl-8 md:pl-10 space-y-12">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot (Perfectled centered on border-l line: -left-10 on mobile, md:-left-12 on desktop) */}
            <div className="absolute -left-10 md:-left-12 top-6 w-4 h-4 rounded-full border border-blue-400 bg-[#05070d] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-cyan-400 transition-colors"></div>
            </div>

            {/* Experience Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300 hover:scale-[1.01]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role} <span className="text-blue-400">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 self-start sm:self-auto">
                  {exp.duration}
                </span>
              </div>

              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;