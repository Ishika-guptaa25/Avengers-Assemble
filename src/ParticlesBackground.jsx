import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="galaxy-bg"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: { value: "#05010a" }
        },
        particles: {
          number: {
            value: 140,
            density: { enable: true, area: 800 }
          },
          color: {
            value: ["#ffffff", "#9aa4ff", "#ff77ff"]
          },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true
          },
          size: {
            value: { min: 0.8, max: 2.2 }
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: { default: "out" }
          }
        },
        detectRetina: true
      }}
    />
  );
}
