const {
  address,
  boolean,
  date,
  email,
  lorem,
  name,
  number,
  phone
} = require('.');

test('address integration', () => {
  expect(address).toHaveProperty('streetAddress');
  expect(address).toHaveProperty('city');
  expect(address).toHaveProperty('zipCode');
  expect(typeof address.streetAddress).toBe('function');
  expect(typeof address.city).toBe('function');
  expect(typeof address.zipCode).toBe('function');
});

test('boolean integration', () => {
  expect(typeof boolean).toBe('function');
});

test('email integration', () => {
  expect(typeof email).toBe('function');
});

test('name integration', () => {
  expect(name).toHaveProperty('name');
  expect(name).toHaveProperty('firstName');
  expect(name).toHaveProperty('lastName');
  expect(typeof name.name).toBe('function');
  expect(typeof name.firstName).toBe('function');
  expect(typeof name.lastName).toBe('function');
});

test('number integration', () => {
  expect(typeof number).toBe('function');
});

test('phone integration', () => {
  expect(typeof phone).toBe('function');
});

test('lorem integration', () => {
  expect(typeof lorem).toBe('function');
  expect(typeof lorem()).toBe('string');
});

test('date integration', () => {
  expect(typeof date).toBe('function');
  expect(typeof date()).toBe('object');
  expect(date() instanceof Date).toBeTruthy();
});
