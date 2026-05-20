'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import { COMMAND_PALETTE_ITEMS } from '@/constants';
import { cn } from '@/utils';

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(0);

  const filtered = query.trim()
    ? COMMAND_PALETTE_ITEMS.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : COMMAND_PALETTE_ITEMS;

  const handleKeyDown = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === 'Escape') { onClose(); setQuery(''); }
      if (e.key === 'ArrowDown') setFocused((v) => (v + 1) % filtered.length);
      if (e.key === 'ArrowUp') setFocused((v) => (v - 1 + filtered.length) % filtered.length);
      if (e.key === 'Enter' && filtered[focused]) {
        window.location.href = filtered[focused].href;
        onClose();
        setQuery('');
      }
    },
    [open, filtered, focused, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!open) { setQuery(''); setFocused(0); }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { onClose(); setQuery(''); }}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed top-[20vh] left-1/2 -translate-x-1/2 z-[90] w-full max-w-lg"
          >
            <div className="bg-[#111] border border-white/12 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/8">
                <Search size={16} className="text-zinc-500 shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setFocused(0); }}
                  placeholder="Search pages, actions..."
                  className="flex-1 bg-transparent text-white placeholder-zinc-600 text-sm outline-none"
                />
                <button onClick={() => { onClose(); setQuery(''); }} className="text-zinc-600 hover:text-white transition-colors">
                  <X size={14} />
                </button>
              </div>

              {/* Results */}
              <div className="py-2 max-h-80 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="text-center text-zinc-600 text-sm py-8">No results found</p>
                ) : (
                  filtered.map((item, i) => {
                    const Icon = LucideIcons[item.icon] || ArrowRight;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => { onClose(); setQuery(''); }}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        className={cn(
                          'flex items-center gap-3 px-4 py-2.5 text-sm transition-all',
                          focused === i ? 'bg-white/8 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                        )}
                        onMouseEnter={() => setFocused(i)}
                      >
                        <Icon size={15} className="shrink-0" />
                        <span>{item.label}</span>
                        {focused === i && (
                          <ArrowRight size={13} className="ml-auto text-zinc-600" />
                        )}
                      </Link>
                    );
                  })
                )}
              </div>

              <div className="px-4 py-2.5 border-t border-white/8 flex items-center gap-4 text-zinc-600 text-xs">
                <span className="flex items-center gap-1"><kbd className="bg-white/8 px-1.5 py-0.5 rounded text-[10px]">↑↓</kbd> Navigate</span>
                <span className="flex items-center gap-1"><kbd className="bg-white/8 px-1.5 py-0.5 rounded text-[10px]">↵</kbd> Select</span>
                <span className="flex items-center gap-1"><kbd className="bg-white/8 px-1.5 py-0.5 rounded text-[10px]">Esc</kbd> Close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
