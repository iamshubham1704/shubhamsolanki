"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#05070d] text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/4 blur-3xl rounded-full -z-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Work history"
          title="Professional"
          highlight="Experience"
          description="Building scalable products for teams, audiences, and clients."
        />

        <div className="relative border-l border-white/8 pl-8 md:pl-10 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[40px] md:-left-[48px] top-6 w-4 h-4 rounded-full border border-blue-400/60 bg-[#05070d] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-cyan-400 transition-colors" />
              </div>

              {/* Card */}
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/5 hover:border-blue-500/20 transition-all duration-300 hover:scale-[1.01]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {exp.role}{" "}
                    <span className="text-blue-400">@ {exp.company}</span>
                  </h3>
                  <span className="shrink-0 text-xs font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 self-start">
                    {exp.duration}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="relative pl-4 text-sm leading-relaxed text-gray-400 before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-400">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
