const randomFromArray = require('../common/random-from-array');
const { firstName, lastName } = require('../name');
const { domains } = require('./data');

/**
 * A random lower case email address
 * @param {Object} options - Your prefered email details
 * @param {string} [options.prefix=undefined] Customize the left side of the @-sign
 * @param {string} [options.domain=undefined] Customize the right side of the @-sign
 * @returns {string}
 */
const email = ( options={} ) => `${options.prefix || `${firstName()}.${lastName()}`}@${options.domain || randomFromArray(domains)}`
  .toLowerCase()
  .replace(/[åä]/g, 'a')
  .replace(/ö/g, 'o')
  .replace(/é/g, 'e')
  .replace(/[^a-z0-9.@]/g, '_');

module.exports = email;
