import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Services from '@/components/sections/Services';
import Achievements from '@/components/sections/Achievements';

export const metadata = {
  title: 'About',
  description:
    'Learn more about Ashish Diwedi — Senior Full Stack MERN Developer with expertise in React, Next.js, Node.js, MongoDB, DRM streaming, and AI platform development.',
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-16">
        <About />
        <TechStack />
        <Achievements />
        <Services />
      </div>
    </>
  );
}
