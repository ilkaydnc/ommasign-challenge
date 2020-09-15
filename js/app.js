import {
  createParticles,
  getRandomMultipleOf10,
  generateLocation,
} from "./particles.js";

createParticles(50);

setTimeout(() => {
  const particles = document.querySelectorAll(".particle");

  particles.forEach((item) => {
    const styles = {
      width: getRandomMultipleOf10(15, 6) + "px",
      top: generateLocation().y + "px",
      left: generateLocation().x + "px",
    };

    Object.assign(item.style, styles);

    setTimeout(() => {
      const styles = {
        top: generateLocation([900, 400], [950, 450]).y + "px",
        left: generateLocation([900, 400], [950, 450]).x + "px",
        transition: `all ${1000}ms`,
      };
      Object.assign(item.style, styles);
    }, 7000);
  });
}, 10);

