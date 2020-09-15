/**
 *
 * @param {number} max
 * @param {number} min
 */
export const getRandomMultipleOf10 = (max, min = 0) => {
  return getRandom(max, min) * 10;
};

/**
 *
 * @param {number} max
 * @param {number} min
 */
export const getRandom = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const createParticles = (count) => {
  for (let i = 0; i < count; i++) {
    const newImg = document.createElement("img");

    newImg.src = `./assets/particles/${getRandom(7)}.png`;

    // Add random width
    newImg.style.width = `${getRandomMutlipleOf10()}px`;

    // Add random animation with class name
    newImg.classList = `rotate-${getRandom(2) ? "left" : "right"}`;

    PARTICLES.push(newImg);
    console.log(getRandomMutlipleOf10());
  }
};

const appendParticles = () => {
  createParticles(200);

  const parent = document.querySelector(".particles");

  PARTICLES.forEach((item) => {
    parent.appendChild(item);
  });
const generateLocation = (topLeft, bottomRight) => {
  if (topLeft && bottomRight) {
    const x = getRandom(bottomRight[0], topLeft[0]);
    const y = getRandom(bottomRight[1], topLeft[1]);
    return { x, y };
  } else {
    const x = getRandom(window.innerWidth);
    const y = getRandom(window.innerHeight);
    return { x, y };
  }
};

appendParticles();
