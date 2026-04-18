"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div className='fixed top-5 w-full z-50 flex justify-center px-4'>
            {/* Desktop Navbar */}
            <ul className="hidden md:flex gap-8 items-center bg-white/10 border border-white/20 px-8 py-3 rounded-full backdrop-blur-md shadow-2xl text-white text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name} className="cursor-pointer hover:text-blue-400 transition-colors">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>

            {/* Mobile Navbar Button placed at top right */}
            <div className="md:hidden flex w-full justify-end">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white/10 border border-white/20 p-3 rounded-full backdrop-blur-md text-white hover:text-blue-400 transition-colors shadow-2xl"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 left-4 right-4 z-40 md:hidden bg-[#05070d]/95 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl p-6"
            >
              <ul className="flex flex-col gap-6 text-white text-base font-medium">
                {navLinks.map((link) => (
                  <li key={link.name} className="cursor-pointer hover:text-blue-400 transition-colors border-b border-white/5 pb-2">
                    <a href={link.href} onClick={() => setIsOpen(false)} className="block w-full">{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
};

export default Navbar