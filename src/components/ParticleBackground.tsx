import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from '../contexts/ThemeContext';

export const ParticleBackground = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container) => {
    // Animation callback
  }, []);

  const particleColor = theme === 'dark' ? '#d4af37' : '#b8860b';
  const backgroundColor = theme === 'dark' ? '#0f172a' : '#f8f7f3';

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true, value_area: 800 } },
          color: { value: particleColor },
          opacity: { value: 0.5, animation: { enable: true, speed: 1, minimumValue: 0.1 } },
          size: { value: 3, random: { enable: true, minimumValue: 1 } },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
          links: {
            enable: true,
            distance: 150,
            color: particleColor,
            opacity: 0.2,
            width: 1,
          },
        },
        background: { color: backgroundColor },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 200, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
      }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  );
};
