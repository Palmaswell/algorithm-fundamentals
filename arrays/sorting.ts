/**
 * @name swap
 * @description swaps two elements of an array in an return a new array.
 */

export function swap<T>(arr: T[], a: number, b: number): T[] {
  [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
}

/**
 * @name insertionSort
 * @description The insertion sort is an sorting algorithm that returns
 * a sorted array.
 * @timecomplexity Worst and average O(n^) / Best case O(n)
 * @spacecomplexity O(1)
 *
 * It keeps a sorted array segment and an unsorted segment and it only looks
 * at the first number of the unsorted segment. If the unsorted element is
 * smaller than the sorted element you will swap the elements and continue swapping
 * them until you find the first element or an element that is smaller than the element.
 */
export function insertionSort<T>(arr: T[]): T[] {
  const result = Array.from(arr);
  result.forEach((el, idx) => {
    if (!!!idx || el > result[idx - 1]) {
      return;
    }
    for (let i = idx - 1; i >= 0; i--) {
      if (el < result[i]) {
        swap(result, i, i + 1);
      } else {
        break;
      }
    }
  });
  return result;
}
