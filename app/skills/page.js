import Skills from '@/components/sections/Skills';
import TechStack from '@/components/sections/TechStack';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Skills',
  description:
    'Technical skills and expertise of Ashish Diwedi — React, Next.js, Node.js, MongoDB, Redis, DRM, Shaka Player, performance optimization, and more.',
};

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <PageHero
        eyebrow="Expertise"
        title="Skills & Technologies"
        description="A battle-tested toolkit built over 5+ years of professional development — from UI to infrastructure."
      />
      <Skills />
      <TechStack />
    </div>
  );
}
