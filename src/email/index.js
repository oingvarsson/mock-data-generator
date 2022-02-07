const randomFromArray = require('../common/random-from-array');
const { firstName, lastName } = require('../name');
const { domains } = require('./data');

/**
 * A random lower case email address
 *
 * @param {Object} custom - Your prefered email details
 * @param {string} [custom.prefix=undefined] Customize the left side of the @-sign
 * @param {string} [custom.domain=undefined] Customize the right side of the @-sign
 * @returns {string}
 */
const email = ( args={} ) => `${args.prefix || `${firstName()}.${lastName()}`}@${args.domain || randomFromArray(domains)}`.toLowerCase();

module.exports = email;
