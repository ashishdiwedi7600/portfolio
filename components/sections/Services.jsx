'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '@/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What I Do"
          title="Services & Expertise"
          description="From solo freelance projects to enterprise teams — here's how I add value."
          center
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.Code2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="p-6 h-full flex flex-col group" hover>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/15 border border-white/8 w-fit mb-5 group-hover:from-blue-500/25 group-hover:to-purple-500/25 transition-all">
                    <Icon size={22} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} color="blue">{tag}</Badge>
                    ))}
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
