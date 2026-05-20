'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { getInitials } from '@/utils';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Colleagues Say"
          description="Feedback from clients and colleagues I've had the pleasure of working with."
          center
          className="mb-14"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Card className="p-6 h-full flex flex-col group" hover>
                <Quote size={28} className="text-blue-500/30 mb-4 group-hover:text-blue-500/50 transition-colors" />

                <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                    {getInitials(t.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{t.name}</p>
                    <p className="text-zinc-500 text-xs truncate">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
