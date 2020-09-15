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

/**
 *
 * @param {number} count
 */
export const createParticles = (count) => {
  const parent = document.querySelector(".particles");

  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");

    img.src = `./assets/particles/${getRandom(7)}.png`;

    const styles = {
      width: getRandomMultipleOf10(20, 4) + "px",
      top: generateLocation([900, 400], [950, 450]).y + "px",
      left: generateLocation([900, 400], [950, 450]).x + "px",
      transition: `all ${getRandom(8, 3) * 1000}ms`,
    };

    // Add styles to element
    Object.assign(img.style, styles);

    // Add random animation with class name
    img.classList = `particle rotate-${getRandom(2) ? "left" : "right"}`;

    parent.appendChild(img);
  }
};

/**
 *
 * @param {[x: number, y: number]} topLeft
 * @param {[x: number, y: number]} bottomRight
 */

export const generateLocation = (topLeft, bottomRight) => {
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
