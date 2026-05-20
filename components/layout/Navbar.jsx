'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/constants';
import { cn } from '@/utils';

export default function Navbar({ onCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-glow-blue group-hover:scale-110 transition-transform">
                AD
              </div>
              <span className="font-semibold text-white hidden sm:block">
                Ashish<span className="text-blue-400">.</span>dev
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'text-white bg-white/8'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-xl bg-white/8 -z-10"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Command Palette Trigger */}
              <button
                onClick={onCommandPalette}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all text-xs"
                title="Open command palette (Ctrl+K)"
              >
                <Terminal size={13} />
                <span>⌘K</span>
              </button>

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-glow-blue active:scale-95"
              >
                <Download size={14} />
                Resume
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/8 transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0d0d0d] border-l border-white/8 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/8">
                <span className="font-semibold text-white">Navigation</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/8 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all',
                        pathname === link.href
                          ? 'text-white bg-blue-500/15 border border-blue-500/25'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-4 border-t border-white/8">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
