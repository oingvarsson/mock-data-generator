const number = ( min, max ) => {
  min = min || 0;
  max = max || min+10;
  return Math.round(Math.random()*(max-min))+min;
};

module.exports = number;
