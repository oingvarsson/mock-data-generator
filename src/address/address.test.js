const { streetAddress, zipCode, city } = require(".");
const { cities } = require("./data");

test('should be valid street address', () => {
  const a = streetAddress();
  const parts = a.split(' ');
  expect(typeof parts[0]).toBe('string');
  expect(Number.isInteger(parseInt(parts[parts.length-1]))).toBeTruthy();
});

test('should be five digit zip code', () => {
  const z = zipCode();
  expect(/\d{3}\s\d{2}/.test(z)).toBeTruthy();
  expect(z).toHaveLength(6);
});

test('should be a city', () => {
  const c = city();
  expect(cities.includes(c)).toBeTruthy();
})
