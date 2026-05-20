import Contact from '@/components/sections/Contact';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ashish Diwedi for full-time roles, freelance projects, or technical consulting. Based in India, open to remote opportunities worldwide.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Together"
        description="Have a project, an opportunity, or just want to say hello? I'd love to hear from you."
      />
      <Contact />
    </div>
  );
}
