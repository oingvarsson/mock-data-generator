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

test('should remove invalid characters', () => {
  expect(email({ prefix: 'räksmörgås', domain: 'test.se' })).toBe('raksmorgas@test.se');
  expect(email({ prefix: 'réksmörgås', domain: 'test.se' })).toBe('reksmorgas@test.se');
  expect(email({ prefix: 'räk$mörgå$', domain: 'test.se' })).toBe('rak_morga_@test.se');
})
