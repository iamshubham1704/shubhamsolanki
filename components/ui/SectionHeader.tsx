"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <span className="eyebrow text-sky-300 font-semibold text-xs uppercase">
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.045em] mt-3 text-white">
        {title}{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      {description && (
        <p className={`text-slate-400 mt-5 text-base md:text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-lg"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
