'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setVisible(true);

    const onMove = (e) => {
      setDot({ x: e.clientX, y: e.clientY });
    };

    let raf;
    const smoothMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor="pointer"]')) setHovered(true);
    };
    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-cursor="pointer"]')) setHovered(false);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousemove', smoothMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousemove', smoothMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot (instant) */}
      <div
        className="fixed pointer-events-none z-[200] w-1.5 h-1.5 rounded-full bg-white/90 -translate-x-1/2 -translate-y-1/2"
        style={{ left: dot.x, top: dot.y }}
      />
      {/* Ring (smooth / lagging) */}
      <motion.div
        className="fixed pointer-events-none z-[199] rounded-full border border-blue-400/60 -translate-x-1/2 -translate-y-1/2"
        animate={{
          left: pos.x,
          top: pos.y,
          width: hovered ? 44 : 24,
          height: hovered ? 44 : 24,
          borderColor: hovered ? 'rgba(139,92,246,0.8)' : 'rgba(96,165,250,0.6)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
      />
    </>
  );
}
