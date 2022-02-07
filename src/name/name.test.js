const { name } = require('.');
const { firstNames, lastNames } = require('./data');

const cases = Array(10).fill('x');

describe('name should be lastName firstName', () => {
  test.each(cases)(
    'should always be first and last name',
    () => {
      const n = name();
      const [ first, last ] = n.split(' ');
      expect(n.split(' ').length).toBe(2);
      expect(firstNames.includes(first)).toBeTruthy();
      expect(lastNames.includes(last)).toBeTruthy();
    }
  );
});
