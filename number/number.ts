/**
 * @name isArithOrGeo
 * @description Have the function isArithOrGeo(arr) take the
 * array of numbers stored in arr and return the string
 * "Arithmetic" if the sequence follows an arithmetic pattern
 * or return "Geometric" if it follows a geometric pattern. If
 * the sequence doesn't follow either pattern return -1. An
 * arithmetic sequence is one where the difference between
 * each of the numbers is consistent, where as in a geometric
 * sequence, each term after the first is multiplied by some
 * constant or common ratio. Arithmetic example: [2, 4, 6, 8]
 * and Geometric example: [2, 6, 18, 54]. Negative numbers may
 * be entered as parameters, 0 will not be entered, and no
 * array will contain all the same elements.
 */

export enum NumSequence {
  arithmetic = 'Arithmetic',
  geometric = 'Geometric',
  none = -1
}

 export const isArithOrGeo = (arr: number[]): NumSequence => {
  if (arr.length >= 2) {
    const arithDiff = arr[1] - arr[0];
    const isArith = arr.every((n: number, i: number): boolean => {
      if (i + 1 < arr.length) {
        return n + arithDiff === arr[i + 1];
      }
      return n === arr[i];
    });

    if (isArith) {
      return NumSequence.arithmetic;
    }

    const isGeo = arr.every((n: number, i: number) => {
      if (i + 1 < arr.length) {
        return arr[i + 1] % n === 0;
      }
      return arr[i] % n === 0;
    });

    if (isGeo) {
      return NumSequence.geometric;
    }
  }
  return NumSequence.none;
 }


/**
 * @name maxElSum
 * @description Have the function maxElSum(arr)
 * take the array of numbers stored in arr and return true
 * if any combination of numbers in the array (excluding the
 * largest number) can be added up to equal the largest number
 * in the array, otherwise return false.
 *
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output
 * should return true because 4 + 6 + 10 + 3 = 23.
 * The array will not be empty, will not contain all the same
 * elements, and may contain negative numbers.
 */

export const maxElSum = (arr: number[]): boolean => {
  const max = Math.max(...arr);
  const arr2 = [...arr];
  arr2.splice(arr2.indexOf(max), 1);
  arr2.sort((n1: number, n2: number): number => n1 - n2);
  const sum = arr2.reduce((acc: number, curr: number): number => acc + curr);
  if (max === sum) {
    return true;
  }
  const diff = arr2.find((n: number) => sum - n === max);
  if (sum - diff === max) {
    return true;
  }
  return false;
}
