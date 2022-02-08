const randomFromArray = require("../common/random-from-array");
const sentences = require("./data");

/**
 * Lorem ipsum sentences
 * @param {number} [n=1] Number of sentences
 * @returns {String}
 */
const lorem = (n=1) => Array.from(Array(n), () => randomFromArray(sentences)).join(' ');

module.exports = lorem;
