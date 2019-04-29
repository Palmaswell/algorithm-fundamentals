import * as Number from './';

test('Test if an integer is a prime number', () => {
  expect(Number.isPrime(19)).toBe(true);
  expect(Number.isPrime(110)).toBe(false);
  expect(Number.isPrime(367)).toBe(true);
  expect(Number.isPrime(2381)).toBe(true);
  expect(Number.isPrime(1290)).toBe(false);
  expect(Number.isPrime(35090)).toBe(false);
});
