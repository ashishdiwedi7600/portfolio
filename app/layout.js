import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { SITE_CONFIG } from '@/constants';
import ClientShell from '@/components/ClientShell';

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Full Stack Developer',
    'MERN Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Senior Software Engineer',
    'DRM Streaming',
    'OTT Platform',
    'AI Recruitment Platform',
    'Web Performance Optimization',
    'Ashish Diwedi',
    'Wrocus Technologies',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: `${SITE_CONFIG.name} Portfolio`,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@ashishdiwedi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ClientShell>{children}</ClientShell>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#f5f5f5',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
