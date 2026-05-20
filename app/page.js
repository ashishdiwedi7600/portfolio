import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Achievements from '@/components/sections/Achievements';
import Testimonials from '@/components/sections/Testimonials';

// Lazy load heavier sections
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: true });
const Services = dynamic(() => import('@/components/sections/Services'), { ssr: true });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: true });

export const metadata = {
  title: 'Ashish Diwedi — Senior Full Stack MERN Developer',
  description:
    'Senior Full Stack MERN Developer with 5+ years building enterprise-grade web platforms, DRM streaming solutions, AI recruitment systems, and performance-optimized news media applications.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <TechStack />
      <Projects showAll={false} />
      <Services />
      <Achievements />
      <Testimonials />
      <Contact />
    </>
  );
}
