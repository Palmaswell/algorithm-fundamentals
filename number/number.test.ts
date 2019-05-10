import * as Number from './';

test('Check if an array has an Arithmetic or Geometric sequence', () => {
  expect(Number.isArithOrGeo([10, 110, 210, 310, 410])).toBe('Arithmetic');
  expect(Number.isArithOrGeo([-3, -4, -5, -6, -7])).toBe('Arithmetic');
  expect(Number.isArithOrGeo([1, 5, 9])).toBe('Arithmetic');
  expect(Number.isArithOrGeo([2, 6, 18, 54])).toBe('Geometric');
  expect(Number.isArithOrGeo([2, 5, 7, 10])).toBe(-1);
  expect(Number.isArithOrGeo([100, 200, 400, 800, 1600])).toBe('Geometric');
});

test('Check if the sum of some array elemets equal the largest number', () => {
  expect(Number.maxElSum([3, 5, -1, 8, 12])).toBe(true);
  expect(Number.maxElSum([5, 7, 16, 1, 2])).toBe(false);
  expect(Number.maxElSum([4, 6, 23, 10, 1, 3])).toBe(true);
});

test('Return the most frequent number occurrance', () => {
  expect(Number.mostFrequent([100, 200, 100, 45, 3])).toBe(100);
  expect(Number.mostFrequent([4, 5, 1, 6, 7, 8, 100, 200, 1000, 5])).toBe(5);
  expect(Number.mostFrequent([4, 4, 5, 6, 7, 8, 8, 8, 8, 8])).toBe(8);
  expect(Number.mostFrequent([4, 5, 6, 1, 2, 4])).toBe(4);
  expect(Number.mostFrequent([5, 5, 2, 2, 1])).toBe(5);
  expect(Number.mostFrequent([3, 4, 1, 6, 10])).toBe(-1);
});

test('Return the missing number of integers for an consequitive array', () => {
  expect(Number.consecutive([5, 10, 15])).toBe(8);
  expect(Number.consecutive([-2, 10, 4])).toBe(10);
});

test('Return the formated division result', () => {
  expect(Number.formattedDiv(9112, 2)).toBe('4,556.0000');
  expect(Number.formattedDiv(101077282, 21123)).toBe('4,785.1764');
  expect(Number.formattedDiv(2, 3)).toBe('0.6667');
  expect(Number.formattedDiv(10, 10)).toBe('1.0000');
});
