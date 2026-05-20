'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { SITE_CONFIG } from '@/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { cn } from '@/utils';

const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: MapPin, label: 'Location', value: 'India (Remote OK)', href: null },
  { icon: MessageCircle, label: 'Response Time', value: 'Within 24 hours', href: null },
];

const SOCIAL_LINKS = [
  { icon: Github, href: SITE_CONFIG.github, label: 'GitHub' },
  { icon: Linkedin, href: SITE_CONFIG.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: SITE_CONFIG.twitter, label: 'Twitter' },
];

const SUBJECTS = [
  'Full-time Role',
  'Freelance Project',
  'Technical Consulting',
  'Just saying hi',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);
    // Simulated submission — wire up to Resend / EmailJS
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    toast.success('Message sent! I\'ll get back to you within 24 hours.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work Together"
          description="Whether you have a project in mind or just want to connect — my inbox is always open."
          className="mb-14"
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <Card key={label} className="p-5 flex items-center gap-4 group" hover>
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white text-sm font-medium hover:text-blue-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{value}</p>
                  )}
                </div>
              </Card>
            ))}

            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-white/5 border border-white/8 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <p className="text-zinc-300 text-sm leading-relaxed">
                <span className="font-semibold text-white">Pro tip:</span> If you&apos;re hiring for a senior MERN/full-stack role, mention it in the subject line — those emails get read first.
              </p>
            </Card>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="p-6 lg:p-8" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-zinc-500 mb-1.5 block">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-500 mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Subject chips */}
                <div>
                  <label className="text-xs text-zinc-500 mb-2 block">Regarding</label>
                  <div className="flex flex-wrap gap-2">
                    {SUBJECTS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, subject: s }))}
                        className={cn(
                          'px-3 py-1.5 rounded-lg text-xs font-medium border transition-all',
                          form.subject === s
                            ? 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                            : 'bg-white/5 border-white/8 text-zinc-400 hover:border-white/20 hover:text-white'
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-500 mb-1.5 block">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, role, or idea..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all resize-none"
                    required
                  />
                </div>

                <Button type="submit" size="lg" isLoading={loading} className="w-full">
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
