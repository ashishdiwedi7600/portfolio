'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          repulse: { distance: 80, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#3b82f6' },
        links: {
          color: '#3b82f6',
          distance: 140,
          enable: true,
          opacity: 0.12,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: false,
          speed: 0.4,
          straight: false,
        },
        number: { density: { enable: true, area: 900 }, value: 60 },
        opacity: { value: 0.3 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="hero-particles"
      options={options}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
