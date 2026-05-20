import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/constants';

const SOCIAL_LINKS = [
  { icon: Github, href: SITE_CONFIG.github, label: 'GitHub' },
  { icon: Linkedin, href: SITE_CONFIG.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: SITE_CONFIG.twitter, label: 'Twitter' },
  { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                AD
              </div>
              <span className="font-semibold text-white">
                Ashish<span className="text-blue-400">.</span>dev
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Senior Full Stack MERN Developer building enterprise-grade platforms, streaming solutions, and AI-powered products.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Pages</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Get in Touch</h3>
            <p className="text-zinc-500 text-sm mb-4">
              Open to full-time roles, freelance projects, and consulting engagements.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-blue-400 text-sm hover:text-blue-300 transition-colors"
            >
              <Mail size={14} />
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/8">
          <p className="text-zinc-600 text-sm flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 mx-1" /> by Ashish Diwedi &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/8 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
