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
      width: getRandomMultipleOf10(4, 15) + "px",
      top: generateLocation([800, 400], [1000, 600]).y + "px",
      left: generateLocation([800, 400], [1000, 600]).x + "px",
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
