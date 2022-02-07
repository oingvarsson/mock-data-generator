const boolean = require("../boolean");
const numberGroup = require("../common/number-group");
const number = require("../number");

const areaCode = () => `0${number(1, 9)}${boolean() ? number(1, 9) : ''}`;

const phone = () => `${areaCode()}-${numberGroup()} ${numberGroup(2)} ${numberGroup(2)}`;

module.exports = phone;
