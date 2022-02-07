const randomFromArray = require("../common/random-from-array")
const { firstNames, lastNames } = require("./data")

const firstName = () => randomFromArray(firstNames);

const lastName = () => randomFromArray(lastNames);

const name = () => `${firstName()} ${lastName()}`;

module.exports = {
  firstName,
  lastName,
  name
}
