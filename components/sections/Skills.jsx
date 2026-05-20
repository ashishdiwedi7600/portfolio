'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { SKILL_CATEGORIES } from '@/constants/skills';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { cn } from '@/utils';

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-zinc-300 font-medium">{skill.name}</span>
        <span className="text-xs text-zinc-500 tabular-nums">
          {skill.level}% · {skill.years}y
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.06 + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(SKILL_CATEGORIES[0].id);
  const current = SKILL_CATEGORIES.find((c) => c.id === active);

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Expertise"
          title="Skills & Proficiency"
          description="A deep and wide skill set built through years of shipping real products in production environments."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = LucideIcons[cat.icon] || LucideIcons.Code2;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left whitespace-nowrap shrink-0 lg:shrink',
                    active === cat.id
                      ? 'bg-surface-2 border border-white/12 text-white'
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                  )}
                >
                  <div
                    className={cn(
                      'p-1.5 rounded-lg bg-gradient-to-br',
                      active === cat.id ? cat.color : 'from-zinc-700 to-zinc-600'
                    )}
                  >
                    <Icon size={14} className="text-white" />
                  </div>
                  {cat.label}
                  <span className="ml-auto text-xs text-zinc-600 hidden lg:inline">
                    {cat.skills.length} skills
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skill bars */}
          <div className="lg:col-span-2">
            <Card className="p-6 lg:p-8" hover={false}>
              <div className="flex items-center gap-3 mb-8">
                {(() => {
                  const Icon = LucideIcons[current.icon] || LucideIcons.Code2;
                  return (
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${current.color}`}>
                      <Icon size={18} className="text-white" />
                    </div>
                  );
                })()}
                <div>
                  <h3 className="text-white font-semibold">{current.label}</h3>
                  <p className="text-zinc-500 text-xs">{current.skills.length} skills tracked</p>
                </div>
              </div>
              <div className="space-y-5">
                {current.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
