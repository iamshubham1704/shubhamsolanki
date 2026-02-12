'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './home.css';
import BootLoader from '@/components/BootLoader/BootLoader';
import HackerBackground from '@/components/HackerBackground/HackerBackground';
import Terminal from '@/components/Terminal/Terminal';

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <HackerBackground />

      <AnimatePresence mode="wait">
        {!booted ? (
          <BootLoader key="bootloader" onComplete={() => setBooted(true)} />
        ) : (
          <Terminal key="terminal" />
        )}
      </AnimatePresence>
    </>
  );
}
