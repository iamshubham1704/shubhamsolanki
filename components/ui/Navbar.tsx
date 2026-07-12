"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Journey", href: "#timeline" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const sections = ["#hero", "#timeline", "#projects", "#experience", "#skills", "#contact"]
      .map((id) => document.querySelector(id))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`)),
      { rootMargin: "-42% 0px -48% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4 md:pt-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#090c14]/75 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-xl md:rounded-full md:px-4">
        <a href="#hero" aria-label="Shubham Solanki, home" className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-300 to-blue-500 text-sm font-black text-slate-950">
          SS
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`rounded-full px-3 py-2 text-xs font-medium transition-colors ${active === link.href ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"}`}>
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition-transform hover:scale-105 md:inline-flex">
          Let&apos;s talk
        </a>
        <button onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} className="grid h-9 w-9 place-items-center rounded-xl text-white md:hidden">
          {isOpen ? <X size={18} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#090c14]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
            {[...navLinks, { name: "Contact", href: "#contact" }].map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
