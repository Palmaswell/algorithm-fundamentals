/**
 * @name
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
