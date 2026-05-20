'use client';

import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative py-20 md:py-28 bg-[#060606] overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-blue-400" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-zinc-400 leading-relaxed">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
