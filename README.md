# Ashish Diwedi — Developer Portfolio

A modern, premium, recruiter-focused developer portfolio built with **Next.js 15 App Router**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript (no TypeScript)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Particles**: @tsparticles/react
- **Toast**: Sonner
- **Counter**: react-countup
- **Theme**: next-themes (dark by default)

## Features

- Dark mode by default with light mode toggle
- Custom cursor (desktop)
- Scroll progress indicator
- Command palette (`Ctrl+K` / `Cmd+K`)
- Typing animation in hero
- Particle background (hero)
- Animated stat counters
- Expandable project case studies
- Interactive skill bars with category tabs
- Fully responsive + mobile-first
- SEO optimized with OpenGraph metadata
- Page transition animations
- Loading screen

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your email service credentials (Resend or EmailJS) in `.env.local`.

### 3. Add your resume PDF

Place your resume as `public/resume.pdf`.

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
app/                    # Next.js App Router pages
  layout.js             # Root layout with metadata
  page.js               # Home page
  about/page.js
  experience/page.js
  skills/page.js
  projects/page.js
  contact/page.js
  not-found.js

components/
  layout/               # Navbar, Footer
  sections/             # Page sections (Hero, About, etc.)
  ui/                   # Reusable UI primitives
  ClientShell.jsx        # Client wrapper (cursor, loader, etc.)
  CommandPalette.jsx
  CustomCursor.jsx
  LoadingScreen.jsx
  PageHero.jsx
  ParticleBackground.jsx
  ScrollProgress.jsx
  ThemeToggle.jsx

constants/              # Static data (projects, experience, skills)
hooks/                  # Custom React hooks
utils/                  # Utility functions
public/                 # Static assets
```

## Customization

All personal data lives in the `constants/` directory:

| File | Contents |
|---|---|
| `constants/index.js` | Site config, stats, services, achievements, testimonials |
| `constants/projects.js` | Project case studies |
| `constants/experience.js` | Work history |
| `constants/skills.js` | Skill categories and proficiency |

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys.

### Netlify

```bash
npm run build
```

Deploy the `.next` folder via [netlify.com](https://netlify.com) or use `netlify deploy`.

### Environment Variables

Set these in your deployment platform's environment settings (same keys as `.env.example`).

## Contact Form

The contact form is ready for integration. Connect it to:

- **Resend** (recommended): Set `RESEND_API_KEY` and create an API route at `app/api/contact/route.js`
- **EmailJS**: Set the three `NEXT_PUBLIC_EMAILJS_*` variables

## Performance Targets

| Metric | Target |
|---|---|
| Performance | > 90 |
| SEO | > 95 |
| Accessibility | > 90 |
| Best Practices | > 90 |
