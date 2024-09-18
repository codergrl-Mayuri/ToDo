import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";

// eslint-disable-next-line react/prop-types
const ParticlesComponent = ({ id }) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      //console.log("loaded");
    });
  }, []);

  const particleOptions = {
    fpsLimit: 60,
    particles: {
      color: {
        value: "#1E90FF", 
      },
      number: {
        value: 100, // Number of stars
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "polygon", // Star shape
      },
      opacity: {
        value: 0.8, // Transparency for twinkle effect
        random: true,
        anim: {
          enable: true,
          speed: 1, // Speed of twinkle
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2, // Size of the stars
        random: true,
      },
      move: {
        enable: true,
        speed: 0.2, // Slow movement to simulate twinkling
      },
    },
    detectRetina: true,
  };
  

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return <Particles id={id} init={particlesLoaded} options={particleOptions} />;
};

export default ParticlesComponent;
