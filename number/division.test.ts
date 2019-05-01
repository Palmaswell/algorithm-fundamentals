import * as Number from './';

test('returns the greatest common divisor between two numbers', () => {
  expect(Number.findCommonDivisor(36, 54)).toBe(18);
  expect(Number.findCommonDivisor(4, 3)).toBe(1);
  expect(Number.findCommonDivisor(8, 2)).toBe(2);
  expect(Number.findCommonDivisor(100, 50)).toBe(50);
  expect(Number.findCommonDivisor(12, 30)).toBe(6);
  expect(Number.findCommonDivisor(15, 60)).toBe(15);
})
