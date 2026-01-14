import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      // High-quality Nebula Image to remove the "boring" look
      image: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2048&q=80')",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: ["#ffffff", "#f00", "#00d4ff"] }, // Mix of white, red, and blue stars
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.6 },
        animation: { enable: true, speed: 0.5, minimumValue: 0, sync: false }
      },
      size: { value: { min: 1, max: 2 } },
      move: {
        enable: true,
        speed: 0.4, // Very slow drift for "Space Beauty"
        direction: "none",
        random: true,
        outModes: { default: "out" }
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" },
      },
      modes: {
        bubble: { distance: 200, size: 4, duration: 2, opacity: 0.8, speed: 3 }
      }
    }
  }), []);

  return init ? <Particles id="tsparticles" options={options} /> : null;
};

export default ParticlesBackground;