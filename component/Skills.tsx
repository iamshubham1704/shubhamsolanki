"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "CSS", icon: "/css.png" },
  { name: "github", icon: "/github.png" },
  { name: "html", icon: "/html.png" },
  { name: "js", icon: "/js.png" },
  { name: "mongo", icon: "/mongo.png" },
  { name: "nextjs", icon: "/nextjs.png" },
  { name: "react", icon: "/react.png" },
  { name: "typescript", icon: "/typescript.png" },
  { name: "python", icon: "/python.png" },
  { name: "sql", icon: "/sql.png" },
  { name: "node.js", icon: "/node.js.png" },
  { name: "atom", icon: "/atom.png" },
  { name: "C", icon: "/C.png" },
  { name: "C++", icon: "/C++.png" },
];

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const Skills = () => {
  const [scatter, setScatter] = useState(false);

  // Circular cluster positions
  const radius = 120;

  return (
    <section
      className="relative h-screen bg-[#05070d] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setScatter(true)}
      onMouseLeave={() => setScatter(false)}
    >
      {/* Heading */}
      <h2 className="absolute top-10 text-3xl font-bold text-white">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="relative w-125 h-125 flex items-center justify-center">

        {skills.map((skill, i) => {
          const angle = (i / skills.length) * 2 * Math.PI;

          const clusterX = Math.cos(angle) * radius;
          const clusterY = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center justify-center 
                         w-28 h-28 rounded-full bg-white/10 backdrop-blur-md 
                         border border-white/20 cursor-pointer"
              
              animate={
                scatter
                  ? {
                      x: random(-300, 300),
                      y: random(-250, 250),
                    }
                  : {
                      x: clusterX,
                      y: clusterY,
                    }
              }

              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
              }}

              whileHover={{
                scale: 1.2,
                y: -20,
              }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                heigh                className="w-10 h-10 object-contain"
              />
              <span className="text-sm text-white mt-1">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;