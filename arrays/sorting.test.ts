import { swap, insertionSort } from './sorting';
describe('Sorting', () => {
  describe('swap()', () => {
    it('should return the same reference of the input array', () => {
      const input = [6, 5, 3, 1, 8, 7, 2, 4];
      const output = swap(input, 4, 7);
      const result = [6, 5, 3, 1, 4, 7, 2, 8];
      expect(input === output).toBeTruthy();
      expect(input).toEqual(result);
      expect(output).toEqual(result);
    });
    it('should manipulate the input array in place', () => {
      const input = [6, 5, 3, 1, 8, 7, 2, 4];
      swap(input, 0, 1);
      swap(input, 0, 6);

      expect(input).toEqual([2, 6, 3, 1, 8, 7, 5, 4]);
    });
    it('should swap the second index with the fouth index', () => {
      const input = [6, 5, 3, 1, 8, 7, 2, 4];
      const result = [6, 5, 8, 1, 3, 7, 2, 4];
      expect(swap(input, 2, 4)).toEqual(result);
    });
  });

  describe('insertionSort', () => {
    it('should return a different array reference. (Immutable Function) ', () => {
      const input = [6, 5, 3, 1, 8, 7, 2, 4];
      const output = insertionSort(input);
      const result = [1, 2, 3, 4, 5, 6, 7, 8];
      expect(input === output).toBeFalsy();
      expect(insertionSort(input)).toEqual(result);
      expect(output).toEqual(result);
    });
    it('should return a sorted version of the array', () => {
      const input = [6, 5, 3, 1, 8, 7, 2, 4];
      const result = [1, 2, 3, 4, 5, 6, 7, 8];
      expect(insertionSort(input)).toEqual(result);
    });
    it('should return a sorted version of the array', () => {
      const input = [50, 35, 70, 10, 8, 3, 90, 1];
      const result = [1, 3, 8, 10, 35, 50, 70, 90];
      expect(insertionSort(input)).toEqual(result);
    });
  });
});
