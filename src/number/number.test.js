const number = require('.');

test('random number should be integer', () => {
  expect(Number.isInteger(number())).toBeTruthy();
});

test('random number between 0 and 10', () => {
  const n = number();
  expect(n).toBeGreaterThanOrEqual(0);
  expect(n).toBeLessThanOrEqual(10);
});

test('random negative number', () => {
  const n = number(-20)
  expect(n).toBeGreaterThanOrEqual(-20);
  expect(n).toBeLessThanOrEqual(-10);
});

test('random high number', () => {
  const n = number(12000, 18000);
  expect(n).toBeGreaterThanOrEqual(12000);
  expect(n).toBeLessThanOrEqual(18000);
});
