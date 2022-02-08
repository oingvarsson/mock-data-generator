const lorem = require(".")

test('should be string', () => {
  expect(typeof lorem()).toBe('string');
});

test('should be one sentence', () => {
  const dots = lorem().split('').filter(l => l==='.').length;
  expect(dots).toBe(1);
});

test('should be five sentences', () => {
  const dots = lorem(5).split('').filter(l => l==='.').length;
  expect(dots).toBe(5);
});
