const PARTICLES = [];

// Get numbers from 50 to 100 that are multiples of 10
const getRandomMutlipleOf10 = () => {
  return Math.max(50, Math.min(100, getRandom(10, 5) * 10));
};

// Get random numbers
const getRandom = (last, first = 0) => {
  return Math.floor(Math.random() * last) + first;
};

