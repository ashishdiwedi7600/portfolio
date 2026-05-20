'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { EXPERIENCES } from '@/constants/experience';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Work History"
          title="Professional Experience"
          description="5+ years of hands-on experience building enterprise products across media, HR-tech, and streaming domains."
          className="mb-16"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-7 -translate-y-1/2 hidden md:flex">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-[#060606]`} />
                </div>

                <Card className="p-6 lg:p-8 group" hover>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left: Logo + Meta */}
                    <div className="shrink-0">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} p-0.5`}>
                        <div className="w-full h-full rounded-[10px] bg-surface flex items-center justify-center">
                          <Briefcase size={22} className="text-zinc-300" />
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-zinc-500">
                        <span className="text-blue-400 font-medium">{exp.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {exp.location}
                        </span>
                        <span>{exp.period}</span>
                        <Badge color="blue">{exp.duration}</Badge>
                      </div>

                      <p className="text-zinc-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-5">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-zinc-400">
                            <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <Badge key={t} color="default">{t}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
