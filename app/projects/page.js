import Projects from '@/components/sections/Projects';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Projects',
  description:
    'Portfolio of projects by Ashish Diwedi — AI recruitment platforms, DRM video streaming, interview assessment systems, and news media performance optimization.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <PageHero
        eyebrow="Portfolio"
        title="Projects & Case Studies"
        description="Enterprise-scale systems built for real users — each project is a case study in architecture, performance, and product thinking."
      />
      <Projects showAll={true} />
    </div>
  );
}
