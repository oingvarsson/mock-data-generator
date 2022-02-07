const numberGroup = require("./number-group")

test('should return string with three digits', () => {
  expect(/\d{3}/.test(numberGroup())).toBeTruthy();
});

test('should return string with five digits', () => {
  expect(/\d{5}/.test(numberGroup(5))).toBeTruthy();
});
