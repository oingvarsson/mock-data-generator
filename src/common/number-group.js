const number = require("../number");

const numberGroup = (n=3) => Array.from(Array(n), () => number(0,9)).join('');

module.exports = numberGroup;
