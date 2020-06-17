import { swap } from './sorting';
describe('Insertion Sort', () => {
  it('should not manipulate the input array', () => {
    const input = [6, 5, 3, 1, 8, 7, 2, 4];
    swap(input, 0, 1);
    swap(input, 0, 6);

    expect(input).toEqual([6, 5, 3, 1, 8, 7, 2, 4]);
  });
  it('should swap the second index with the fouth index', () => {
    const input = [6, 5, 3, 1, 8, 7, 2, 4];
    const result = [6, 5, 8, 1, 3, 7, 2, 4];
    expect(swap(input, 2, 4)).toEqual(result);
  });
});
