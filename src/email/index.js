const randomFromArray = require('../common/random-from-array');
const { firstName, lastName } = require('../name');
const { domains } = require('./data');

const email = ( args={} ) => `${args.prefix || `${firstName()}.${lastName()}`}@${args.domain || randomFromArray(domains)}`.toLowerCase();

module.exports = email;
