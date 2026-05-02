"use client";
import React, { useState, useEffect } from "react";
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
  { name: "node.js", icon: "/Node.js.png" },
  { name: "atom", icon: "/atom.png" },
  { name: "C", icon: "/C.png" },
  { name: "C++", icon: "/C++.png" },
];

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const Skills = () => {
  const [scatter, setScatter] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Circular cluster positions
  const radius = windowWidth < 600 ? 100 : 120;
  const scatterRangeX = windowWidth < 600 ? 140 : 300;
  const scatterRangeY = windowWidth < 600 ? 180 : 250;

  return (
    <section id="skills"
      className="relative h-screen bg-[#05070d] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setScatter(true)}
      onMouseLeave={() => setScatter(false)}
    >
      {/* Heading */}
      <h2 className="absolute top-10 text-3xl font-bold text-white">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="relative w-full max-w-[500px] h-[400px] sm:h-[500px] flex items-center justify-center">

        {skills.map((skill, i) => {
          const angle = (i / skills.length) * 2 * Math.PI;

          const clusterX = Math.cos(angle) * radius;
          const clusterY = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center justify-center 
                         w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-md 
                         border border-white/20 cursor-pointer"
              
              animate={
                scatter
                  ? {
                      x: random(-scatterRangeX, scatterRangeX),
                      y: random(-scatterRangeY, scatterRangeY),
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
                height={40}
                className="w-8 h-auto sm:w-10 object-contain"
              />
              <span className="text-xs sm:text-sm text-white mt-1">
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