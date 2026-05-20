'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils';

export default function SectionHeader({ eyebrow, title, description, center = false, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('max-w-2xl', center && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
          <span className="w-8 h-px bg-blue-400 inline-block" />
          {eyebrow}
          <span className="w-8 h-px bg-blue-400 inline-block" />
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
