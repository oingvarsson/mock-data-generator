const date = require('.');

test('should be a date object', () => {
  const d = date();
  expect(typeof d).toBe('object');
  expect(d instanceof Date).toBeTruthy();
});

test('should be after 1970', () => {
  const d = date();
  expect(d.getTime()).toBeGreaterThan(0);
});

test('should be before now', () => {
  const d = date();
  expect(d.getTime()).toBeLessThanOrEqual(Date.now());
});

test('should be february 2024', () => {
  const d = date('2024-02-01', '2024-03-01');
  expect(d.getFullYear()).toBe(2024);
  expect(d.getMonth()).toBe(1);
});
