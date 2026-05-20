'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Layers, CheckCircle2, Zap } from 'lucide-react';
import { PROJECTS } from '@/constants/projects';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import { cn } from '@/utils';

const CATEGORIES = ['All', 'AI / Enterprise SaaS', 'OTT / Streaming', 'EdTech / HR Tech', 'Media / Performance', 'HR Tech / SaaS'];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className={cn('overflow-hidden border', project.borderColor)} hover>
        {/* Header gradient strip */}
        <div className={`h-1 bg-gradient-to-r ${project.color.replace('/20', '/60')}`} />

        <div className="p-6 lg:p-8">
          {/* Top row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge color="blue">{project.category}</Badge>
                <Badge color={project.status === 'Production' ? 'green' : 'purple'}>
                  {project.status}
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-zinc-500 text-sm">{project.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                title="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Impact highlight */}
          <div className="flex items-start gap-2 mb-5 p-3 rounded-xl bg-blue-500/8 border border-blue-500/15">
            <Zap size={14} className="text-blue-400 shrink-0 mt-0.5" />
            <p className="text-blue-300/80 text-xs leading-relaxed">{project.impact}</p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <Badge key={t} color="default">{t}</Badge>
            ))}
          </div>

          {/* Expand/collapse */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-400 transition-colors"
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {expanded ? 'Show less' : 'View details'}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-white/8 space-y-6">
                  {/* Problem */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-red-500/20 text-red-400 flex items-center justify-center text-xs">!</span>
                      Problem
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</span>
                      Solution
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Layers size={14} className="text-purple-400" /> Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                          <CheckCircle2 size={13} className="text-purple-400 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">⛁</span>
                      Architecture
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{project.architecture}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Projects({ showAll = false }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered =
    activeCategory === 'All'
      ? showAll
        ? PROJECTS
        : PROJECTS.filter((p) => p.featured)
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Enterprise-scale systems built for real users — covering streaming, AI, HR-tech, and media performance."
          className="mb-12"
        />

        {showAll && (
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-1.5 rounded-xl text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
                    : 'bg-white/5 border border-white/8 text-zinc-400 hover:text-white hover:bg-white/8'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-zinc-300 text-sm font-medium hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
            >
              View All Projects
              <ExternalLink size={14} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
