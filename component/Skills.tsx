"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "/react.png" },
      { name: "Next.js", icon: "/nextjs.png" },
      { name: "React Native", icon: "/atom.png" },
      { name: "HTML5", icon: "/html.png" },
      { name: "CSS3", icon: "/css.png" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: "/Node.js.png" },
      { name: "MongoDB", icon: "/mongo.png" },
      { name: "SQL", icon: "/sql.png" },

    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "C++", icon: "/C++.png" },
      { name: "C", icon: "/C.png" },
      { name: "GitHub", icon: "/github.png" },

      { name: "Python", icon: "/python.png" },
      { name: "TypeScript", icon: "/typescript.png" },
      { name: "JavaScript", icon: "/js.png" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-[#05070d] py-24 px-6 text-white min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full -z-10"></div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto w-full mb-16 text-center md:text-left">
        <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Expertise</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Technical <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg text-lg">
          The languages, frameworks, and tools I use to bring ideas to life.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-blue-500/20 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400 border-b border-white/5 pb-3">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;