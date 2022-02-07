const email = require(".")

test('should have @ sign', () => {
  expect(email().includes('@')).toBeTruthy();
})
