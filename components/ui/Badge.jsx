import { cn } from '@/utils';

const colorMap = {
  default: 'bg-white/8 text-zinc-300 border-white/10',
  blue: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  purple: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
  cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
  green: 'bg-green-500/15 text-green-300 border-green-500/25',
  orange: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  red: 'bg-red-500/15 text-red-300 border-red-500/25',
  pink: 'bg-pink-500/15 text-pink-300 border-pink-500/25',
};

export default function Badge({ children, color = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        colorMap[color] || colorMap.default,
        className
      )}
    >
      {children}
    </span>
  );
}
