/** @module address */
const numberGroup = require("../common/number-group");
const randomFromArray = require("../common/random-from-array");
const number = require("../number");
const { streets, cities } = require("./data");


/**
 * The name of a random city
 * @returns {string}
 */
exports.city = () => randomFromArray(cities);

/**
 * A random street address
 * @returns {string}
 */
exports.streetAddress = () => `${randomFromArray(streets)} ${number(1, 102)}`;

/**
 * A random five digit zip code
 * @returns {string}
 */
exports.zipCode = () => `${numberGroup(3)} ${numberGroup(2)}`;
