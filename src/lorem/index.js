const randomFromArray = require("../common/random-from-array");
const sentences = require("./data");

const lorem = (n=1) => Array.from(Array(n), () => randomFromArray(sentences)).join(' ');

module.exports = lorem;
