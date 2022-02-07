const address = require(".")

test('should be valid address', () => {
  const a = address();
  const parts = a.split(' ');
  expect(typeof parts[0]).toBe('string');
  expect(Number.isInteger(parseInt(parts[parts.length-1]))).toBeTruthy();
});
