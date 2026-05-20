'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2, Calendar, GraduationCap, Coffee, Code2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const QUICK_FACTS = [
  { icon: Building2, label: 'Current Company', value: 'Wrocus Technologies' },
  { icon: MapPin, label: 'Location', value: 'India' },
  { icon: Calendar, label: 'Experience', value: '5+ Years' },
  { icon: GraduationCap, label: 'Specialization', value: 'Full Stack MERN' },
  { icon: Coffee, label: 'Fueled By', value: 'Coffee & Clean Code' },
  { icon: Code2, label: 'Lines Written', value: '500,000+' },
];

const CLIENTS = [
  { name: 'News18', color: 'text-red-400' },
  { name: 'Hindustan Times', color: 'text-orange-400' },
  { name: 'Times of India', color: 'text-yellow-400' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              eyebrow="About Me"
              title="Building Products That Scale"
              description=""
            />
            <div className="space-y-5 text-zinc-400 text-base leading-relaxed mt-6">
              <p>
                I&apos;m a <span className="text-white font-medium">Senior Full Stack MERN Developer</span> with
                over 5 years of experience designing and shipping production systems that handle
                millions of users — from DRM-protected video streaming platforms to AI-powered
                recruitment tools and high-performance news media applications.
              </p>
              <p>
                At <span className="text-blue-400 font-medium">Wrocus Technologies</span>, I lead
                full stack development across multiple enterprise products. I take ownership from
                architecture to deployment — making technology decisions that balance speed,
                scalability, and developer experience.
              </p>
              <p>
                I&apos;ve had the privilege of working on projects for industry leaders like{' '}
                {CLIENTS.map((c, i) => (
                  <span key={c.name}>
                    <span className={`font-semibold ${c.color}`}>{c.name}</span>
                    {i < CLIENTS.length - 1 ? ', ' : ''}
                  </span>
                ))}
                {' '}— optimizing their web platforms for performance, scale, and SEO.
              </p>
              <p>
                I obsess over clean architecture, performance budgets, and developer experience. My
                code ships features, but my systems are built to last.
              </p>
            </div>
          </motion.div>

          {/* Right: Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {QUICK_FACTS.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="p-5 group" hover>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-zinc-600 mb-0.5 truncate">{label}</p>
                        <p className="text-sm font-medium text-white truncate">{value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4"
            >
              <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Open to Opportunities</p>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      Full-time roles · Freelance projects · Technical consulting
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
