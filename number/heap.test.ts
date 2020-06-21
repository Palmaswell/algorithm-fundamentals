import * as Number from './';

test('return the factorial of a positive integer n', () => {
  expect(Number.factorial(3)).toBe(6);
  expect(Number.factorial(4)).toBe(24);
  expect(Number.factorial(5)).toBe(120);
});

test.skip('Find all possible permutations of a number', () => {
  expect(Number.generate([3, 7, 2])).toEqual(3);
});
