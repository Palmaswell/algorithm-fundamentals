import * as Number from './';

test('Check if integer between 2 and 2^16 is a prime number', () => {
  expect(Number.isPrime(2)).toBe(true);
  expect(Number.isPrime(9)).toBe(false);
  expect(Number.isPrime(19)).toBe(true);
  expect(Number.isPrime(110)).toBe(false);
  expect(Number.isPrime(367)).toBe(true);
  expect(Number.isPrime(2381)).toBe(true);
  expect(Number.isPrime(1290)).toBe(false);
  expect(Number.isPrime(35090)).toBe(false);
});


test('Find the th prime number', () => {
  expect(Number.findPrime(9)).toBe(23);
  expect(Number.findPrime(100)).toBe(541);
  expect(Number.findPrime(1000)).toBe(7919);
  // expect(Number.findPrime(10000)).toBe(7919);
});
