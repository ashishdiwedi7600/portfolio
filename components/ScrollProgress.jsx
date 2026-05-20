'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 origin-left"
      style={{ scaleX: progress / 100 }}
    />
  );
}
