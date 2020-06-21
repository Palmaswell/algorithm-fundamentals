/**
 * @name:
 * @description: inplementation of Heap's algorithm
*/

export const factorial = (num: number): number => {
  const aux = (n: number, acc: number): number => {
    if (n > 2) {
      return aux(n -= 1, acc *= (n - 1));
    }
    return acc;
  }
  return aux(num, num * (num - 1));
} ;


export const heapsPermutation = (numbers: number[], k: number): number[] => {
  if (k === 1) {
    return numbers;
  }

  heapsPermutation(numbers, k - 1);
  for(let i = 0; i < k - 1; i++) {
    k % 2 === 0
      ? [numbers[i], numbers[k - 1]] = [numbers[k - 1], numbers[i]]
      : [numbers[0], numbers[k - 1]] = [numbers[k - 1], numbers[0]];
      heapsPermutation(numbers, k - 1);
  }
}

export const generate = (arr: number[]): number[] => heapsPermutation(arr, arr.length);


