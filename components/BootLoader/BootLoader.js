'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BootLoader.css';

const bootSequence = [
  { text: "BIOS DATE 01/01/2077 14:22:56 VER 1.0.2", delay: 100 },
  { text: "CPU: QUANTUM CORE i9-9900X @ 12.5 GHZ", delay: 200 },
  { text: "MEMORY TEST: 65536K OK", delay: 400 },
  { text: "DETECTING PRIMARY MASTER ... SK-NETT 20TB", delay: 300 },
  { text: "DETECTING SECONDARY MASTER ... NONE", delay: 100 },
  { text: "", delay: 500 },
  { text: "LOADING KERNEL...", delay: 600 },
  { text: "MOUNTING FILESYSTEMS...", delay: 400 },
  { text: "SCANNING FOR VULNERABILITIES...", delay: 800 },
  { text: "0 THREATS FOUND.", delay: 300 },
  { text: "STARTING SYSTEM SERVICES...", delay: 500 },
  { text: "ESTABLISHING SECURE CONNECTION...", delay: 700 },
  { text: "ACCESS GRANTED.", delay: 500 },
  { text: "WELCOME, USER.", delay: 1000 }
];

export default function BootLoader({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < bootSequence.length) {
      const { text, delay } = bootSequence[currentLineIndex];
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, text]);
        setCurrentLineIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(onComplete, 1200);
    }
  }, [currentLineIndex, onComplete]);

  return (
    <div className="boot-loader">
      <div className="boot-content">
        {lines.map((line, i) => (
          <div key={i} className="boot-line">{line}</div>
        ))}
        <div className="boot-cursor">_</div>
      </div>
    </div>
  );
}
