const number = require("../number");

/**
 * True or false
 *
 * @returns {boolean}
 */
const boolean = () => number(0, 1) === 1;

module.exports = boolean;
