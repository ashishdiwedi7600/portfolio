import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import Testimonials from '@/components/sections/Testimonials';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Experience',
  description:
    'Professional experience of Ashish Diwedi — 5+ years at Wrocus Technologies and beyond, delivering enterprise streaming, AI, and media platforms.',
};

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      <PageHero
        eyebrow="Career"
        title="Work Experience"
        description="5+ years of building real products for real users — from startups to enterprise clients in media, streaming, and HR-tech."
      />
      <Experience />
      <Achievements />
      <Testimonials />
    </div>
  );
}
