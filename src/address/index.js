const numberGroup = require("../common/number-group");
const randomFromArray = require("../common/random-from-array");
const number = require("../number");
const { streets, cities } = require("./data");

const city = () => randomFromArray(cities);

const streetAddress = () => `${randomFromArray(streets)} ${number(1, 102)}`;

const zipCode = () => `${numberGroup(3)} ${numberGroup(2)}`;

module.exports = {
  city,
  streetAddress,
  zipCode
};
