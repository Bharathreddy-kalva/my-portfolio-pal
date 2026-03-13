import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "@/hooks/use-theme";

const ParticleBackground = () => {
  const { theme } = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particleColor = theme === "dark" ? "#4f6ef7" : "#3b5de7";
  const particleOpacity = theme === "dark" ? 0.3 : 0.4;
  const linkOpacity = theme === "dark" ? 0.15 : 0.2;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: particleColor },
          links: {
            enable: true,
            color: particleColor,
            distance: 150,
            opacity: linkOpacity,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
          opacity: { value: particleOpacity },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
