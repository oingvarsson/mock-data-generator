const boolean = require("../boolean");
const number = require("../number");

const areaCode = () => `0${number(1, 9)}${boolean() ? number(1, 9) : ''}`;

const numberGroup = (n=3) => Array.from(Array(n), () => number(0,9)).join('');

const phone = () => `${areaCode()}-${numberGroup()} ${numberGroup(2)} ${numberGroup(2)}`;

module.exports = phone;
