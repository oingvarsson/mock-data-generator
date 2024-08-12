/** @module date */
const numberGroup = require('../common/number-group');
const randomFromArray = require('../common/random-from-array');
const number = require('../number');

const dateToMilliseconds = (date) => {
  if (date instanceof Date) {
    return date.getTime();
  }
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

/**
 * Random date
 * @param {Date|String|Number} [start=0] - Start date
 * @param {Date|String|Number} [end=Date.now()] - End date
 * @returns {Date}
 */
const randomDate = (start = 0, end = Date.now()) => {
  const d = number(dateToMilliseconds(start), dateToMilliseconds(end));
  return new Date(d);
};

module.exports = randomDate;
