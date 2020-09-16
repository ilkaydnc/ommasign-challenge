import { animateParticles, animate } from "./animation.js";

const plateDurations = {
  starting: 2000,
  start: 5000,
  ending: 1000,
};

const appDurations = {
  starting: 2000,
  start: 5000,
  ending: 1000,
};

const infoDurations = {
  starting: 1500,
  start: 300,
  ending: 5000,
};

export const startAnimations = () => {
  animateParticles();
  animate("plate", "plate", plateDurations);
  animate("app", "app", appDurations);
  animate("info", "info", infoDurations);
};

/**
 *
 * @param {{ title: string, img: string, price: string }} food
 */
export const changeFood = (food) => {
  const plate = document.querySelector("#food");
  const title = document.querySelector("#title");
  const price = document.querySelector("#price");

  plate.src = food.img;
  title.innerHTML = food.title;
  price.innerHTML = "PRICE: " + food.price;
};

/**
 *
 * @param {[{ title: string, img: string, price: string }]} menu Array of food objects
 * @param {{ title: string, img: string, price: string }} current Current food object
 */
export const getNextFood = (menu, current) => {
  if (!current) return menu[0];

  const index = menu.indexOf(current);

  if (index === menu.length - 1) return menu[0];

  return menu[index + 1];
};
