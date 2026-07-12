"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillCategories } from "@/lib/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#05070d] py-24 px-6 text-white overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/4 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Expertise"
          title="Technical"
          highlight="Skills"
          description="The languages, frameworks, and tools I use to bring ideas to life."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="group bg-white/3 border border-white/8 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/20 hover:bg-white/5 transition-all duration-300"
            >
              {/* Category title */}
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider pb-4 border-b border-white/5 mb-5">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.04, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-3 bg-white/3 border border-white/5 rounded-xl px-3 py-2.5 hover:bg-white/8 hover:border-blue-500/20 transition-all duration-200 cursor-default"
                  >
                    <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-300 leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-600 text-sm">
            Always learning · Currently exploring{" "}
            <span className="text-blue-400">LLM fine-tuning & distributed systems</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
