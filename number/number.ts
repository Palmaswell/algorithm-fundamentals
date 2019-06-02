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
  none = -1,
}

export const isArithOrGeo = (arr: number[]): NumSequence => {
  if (arr.length >= 2) {
    const arithDiff = arr[1] - arr[0];
    const isArith = arr.every(
      (n: number, i: number): boolean => {
        if (i + 1 < arr.length) {
          return n + arithDiff === arr[i + 1];
        }
        return n === arr[i];
      }
    );

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
};

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
};

/**
 * @name mostFrequent
 * @description Have the function mostFrequent(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.
 */

export interface FrequentNum {
  readonly value: number;
  readonly index: number;
  count: number;
}

export const mostFrequent = (arr: number[]) => {
  const result: FrequentNum[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== i + j) {
        if (arr[i] === arr[i + j]) {
          const currStoredVal = result.find(
            (el: FrequentNum) => el.value === arr[i]
          );
          if (currStoredVal) {
            currStoredVal.count += 1;
          } else {
            result.push({
              value: arr[i],
              index: i,
              count: 1,
            });
          }
        }
      }
    }
  }

  if (result.length === 0) {
    return -1;
  }
  result.sort((el1, el2) => el2.count - el1.count);
  return result[0].value;
};

/**
 * @name consecutive
 * @description Have the function consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.
 */
export const consecutive = (arr: number[]): number => {
  arr.sort((n1: number, n2: number) => n1 - n2);
  return arr[arr.length - 1] - arr[0] - (arr.length - 1);
};

/**
 * @name formattedDiv
 * @description Have the function formattedDiv(num1,num2) take both
 * parameters being passed, divide num1 by num2, and return the result
 * as a string with properly formatted commas and 4 significant digits
 * after the decimal place. For example: if num1 is 123456789 and num2
 * is 10000 the output should be "12,345.6789". The output must contain
 * a number in the one's place even if it is a zero.
 */

export const formattedDiv = (n1: number, n2: number): any => {
  const decimal = (n1 / n2).toFixed(4).split('');
  const whole = decimal.splice(0, decimal.length - 5);
  const result = [];
  for (let i = 1; i < whole.length + 1; i++) {
    i % 3 === 0
      ? result.unshift(`,${whole[whole.length - i]}`)
      : result.unshift(`${whole[whole.length - i]}`);
  }
  return result.concat(decimal).join('');
};
/**
 * @name permutationStep
 * @description Have the function permutationStep(num) take the num
 * parameter being passed and return the next number greater than num
 * using the same digits. For example: if num is 123 return 132,
 * if it's 12453 return 12534.
 * If a number has no greater permutations, return -1 (ie. 999).
 */

export const permutationStep = (num: number): number => {
  const numbers = Array.from(num.toString().split(''));
  const aux = (digits: string[], idx: number): string[] => {
    if (idx >= 1) {
      if (digits[idx] > digits[idx - 1]) {
        [digits[idx - 1], digits[idx]] = [digits[idx], digits[idx - 1]];
        digits.splice(idx, digits.length, ...digits.slice(idx).sort((a, b) => parseInt(a) - parseInt(b)))
      } else {
        return aux(digits, idx -= 1);
      }
    }
    return digits;
  }
  const result = parseInt(aux(numbers, numbers.length).join(''));

  return result === num
    ? -1
    : result;
};
