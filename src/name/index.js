/** @module name */
const randomFromArray = require("../common/random-from-array");
const { firstNames, lastNames } = require("./data");

/**
 * A random first name
 * @returns {string}
 */
const firstName = () => randomFromArray(firstNames);

/**
 * A random last name
 * @returns {string}
 */
const lastName = () => randomFromArray(lastNames);

/**
 * A first name and a last name
 * @returns {string}
 */
const name = () => `${firstName()} ${lastName()}`;

module.exports = {
  firstName,
  lastName,
  name
};
