'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ACHIEVEMENTS } from '@/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Impact"
          title="Key Achievements"
          description="Measurable results from real projects — numbers that matter to business and engineering alike."
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.Star;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className="p-6 flex gap-5 group border-l-2 border-l-blue-500/40 hover:border-l-blue-400"
                  hover
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/8 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                      <Icon size={22} className="text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <div className="inline-block px-3 py-0.5 rounded-full bg-green-500/15 border border-green-500/20 text-green-400 text-xs font-semibold mb-2">
                      {item.metric}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
