import * as Number from './';

test('Check if an array has an Arithmetic or Geometric sequence', () => {
  expect(Number.isArithOrGeo([10,110,210,310,410])).toBe('Arithmetic');
  expect(Number.isArithOrGeo([-3,-4,-5,-6,-7])).toBe('Arithmetic');
  expect(Number.isArithOrGeo([1,5,9])).toBe('Arithmetic');
  expect(Number.isArithOrGeo([2, 6, 18, 54])).toBe('Geometric');
  expect(Number.isArithOrGeo([2, 5, 7, 10])).toBe(-1);
  expect(Number.isArithOrGeo([100, 200, 400, 800,1600])).toBe('Geometric');
})
