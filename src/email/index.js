const randomFromArray = require('../common/random-from-array');
const { firstName, lastName } = require('../name');
const { domains } = require('./data');

/**
 * A random lower case email address
 * @param {Object} custom - Your prefered email details
 * @param {string} [custom.prefix=undefined] Customize the left side of the @-sign
 * @param {string} [custom.domain=undefined] Customize the right side of the @-sign
 * @returns {string}
 */
const email = ( args={} ) => `${args.prefix || `${firstName()}.${lastName()}`}@${args.domain || randomFromArray(domains)}`
.toLowerCase()
.replace(/[åä]/g, 'a')
.replace(/ö/g, 'o')
.replace(/é/g, 'e')
.replace(/[^a-z0-9.@]/g, '_');

module.exports = email;
