'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight, MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { SITE_CONFIG } from '@/constants';
import Button from '@/components/ui/Button';

const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false });

const TYPED_WORDS = [
  'Full Stack Developer',
  'MERN Stack Expert',
  'OTT Platform Engineer',
  'AI Platform Builder',
  'Performance Optimizer',
];

const SOCIAL_LINKS = [
  { icon: Github, href: SITE_CONFIG.github, label: 'GitHub' },
  { icon: Linkedin, href: SITE_CONFIG.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: SITE_CONFIG.twitter, label: 'Twitter' },
  { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: 'Email' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const typedText = useTypingEffect(TYPED_WORDS);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Particles */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
              <span className="flex items-center gap-1 text-zinc-500 text-xs">
                <MapPin size={11} /> India
              </span>
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-4 tracking-tight">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ashish
              </span>
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
              Diwedi
            </h1>
          </motion.div>

          {/* Typed role */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-300">
              Senior{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 min-w-[280px] inline-block">
                {typedText}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-10 max-w-2xl"
          >
            5+ years building enterprise-grade platforms — from DRM streaming and AI-powered recruitment systems
            to high-performance news media applications for{' '}
            <span className="text-zinc-200 font-medium">News18, Hindustan Times & Times of India</span>.
            Currently at{' '}
            <span className="text-blue-400 font-medium">Wrocus Technologies</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
            <Button size="lg" as="a" href="/projects">
              View My Work
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" as="a" href="/contact">
              Let&apos;s Talk
            </Button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-zinc-300 text-base font-medium hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="text-zinc-700 text-sm ml-2">
              5+ yrs · MERN · DRM · AI Platforms
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-zinc-600 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
