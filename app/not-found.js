import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
        404
      </div>
      <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
      <p className="text-zinc-400 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm hover:from-blue-600 hover:to-purple-700 transition-all shadow-glow-blue"
      >
        Back to Home
      </Link>
    </div>
  );
}
