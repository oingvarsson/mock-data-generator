/** @module date */
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
  const d = new Date(
    number(dateToMilliseconds(start), dateToMilliseconds(end))
  );

  d.setHours(number(0, 23), number(0, 59), number(0, 59), 0);
  return d;
};

module.exports = randomDate;
