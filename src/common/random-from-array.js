const number = require("../number");

const randomFromArray = arr => arr[number(0, arr.length-1)];

module.exports = randomFromArray;
