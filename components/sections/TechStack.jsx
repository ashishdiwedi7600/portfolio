'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const STACK_ITEMS = [
  { name: 'React.js', emoji: '⚛️', color: 'hover:border-cyan-500/40 hover:bg-cyan-500/5' },
  { name: 'Next.js', emoji: '▲', color: 'hover:border-white/30 hover:bg-white/5' },
  { name: 'Node.js', emoji: '🟢', color: 'hover:border-green-500/40 hover:bg-green-500/5' },
  { name: 'MongoDB', emoji: '🍃', color: 'hover:border-green-400/40 hover:bg-green-400/5' },
  { name: 'Redis', emoji: '🔴', color: 'hover:border-red-500/40 hover:bg-red-500/5' },
  { name: 'Express.js', emoji: '🚂', color: 'hover:border-zinc-400/40 hover:bg-zinc-400/5' },
  { name: 'JavaScript', emoji: '🟡', color: 'hover:border-yellow-500/40 hover:bg-yellow-500/5' },
  { name: 'Tailwind CSS', emoji: '💨', color: 'hover:border-cyan-400/40 hover:bg-cyan-400/5' },
  { name: 'Redux', emoji: '🔮', color: 'hover:border-purple-500/40 hover:bg-purple-500/5' },
  { name: 'Docker', emoji: '🐳', color: 'hover:border-blue-400/40 hover:bg-blue-400/5' },
  { name: 'Shaka Player', emoji: '🎬', color: 'hover:border-orange-500/40 hover:bg-orange-500/5' },
  { name: 'Mux Analytics', emoji: '📊', color: 'hover:border-pink-500/40 hover:bg-pink-500/5' },
  { name: 'Git / GitHub', emoji: '🐙', color: 'hover:border-white/30 hover:bg-white/5' },
  { name: 'REST APIs', emoji: '🔗', color: 'hover:border-blue-300/40 hover:bg-blue-300/5' },
  { name: 'JWT Auth', emoji: '🔐', color: 'hover:border-yellow-400/40 hover:bg-yellow-400/5' },
  { name: 'Web Vitals', emoji: '⚡', color: 'hover:border-yellow-300/40 hover:bg-yellow-300/5' },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Technologies I Work With"
          description="A battle-tested toolkit for building performant, scalable, production-ready applications."
          center
          className="mb-14"
        />

        <div className="flex flex-wrap justify-center gap-3">
          {STACK_ITEMS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.06, y: -2 }}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-white/8 bg-surface cursor-default select-none transition-all duration-200 ${item.color}`}
            >
              <span className="text-lg">{item.emoji}</span>
              <span className="text-sm font-medium text-zinc-300">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
