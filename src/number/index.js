/**
 * Generates a random number
 * @param {number} [min=0]
 * @param {number} [max=min+10]
 * @returns {number}
 */
const number = ( min, max ) => {
  min = min || 0;
  max = max || min+10;
  return Math.round(Math.random()*(max-min))+min;
};

module.exports = number;
