const email = require(".")

test('should have @ sign', () => {
  expect(email().includes('@')).toBeTruthy();
});

test('should have custom prefix', () => {
  const e = email({ prefix: 'tester' });
  expect(e.startsWith('tester@')).toBeTruthy();
});

test('should have custom domain', () => {
  const e = email({ domain: 'test.se' });
  expect(e.endsWith('@test.se')).toBeTruthy();
});
