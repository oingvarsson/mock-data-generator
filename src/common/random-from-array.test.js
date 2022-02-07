const randomFromArray = require("./random-from-array")

test('should return one item from array', () => {
  const arr = [ 'one', 'two', 'three', 'four' ];
  expect(arr.includes(randomFromArray(arr))).toBeTruthy();
});
