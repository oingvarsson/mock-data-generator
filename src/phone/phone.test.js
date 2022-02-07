const phone = require(".")
const re = /\d{2,3}-\d{2,3}\s\d{2}\s\d{2}/

test('is phone number', () => {
  expect(re.test(phone())).toBeTruthy();
});
