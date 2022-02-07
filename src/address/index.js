const randomFromArray = require("../common/random-from-array");
const number = require("../number");
const { streets } = require("./data");

const address = () => `${randomFromArray(streets)} ${number(1, 102)}`;

module.exports = address;
