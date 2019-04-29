/**
 * @name isPrime
 * @description Have the function isPrime(num) take the num parameter
 * being passed and return true if the parameter is a prime number,
 * otherwise return false. The range will be between 1 and 2^16.
*/

export const isPrime = (n: number): boolean => {
  if (n < 2 || n > 2 ** 16) {
    return false;
  }

  if (n === 2) {
    return true
  }
  for (let counter = 2; counter < n; counter++ ) {
    if (n % counter === 0) {
      return false;
    }
  }
  return true
};

/**
 * @name findPrime
 * @description Have the findPrime(num) return the numth prime number.
 * The range will be from 1 to 10^4.
 * For example: if num is 16 the output should be
 * 53 as 53 is the 16th prime number.
 */
export const findPrime = (n: number): number => {

  const primes = [];
  for(let counter = 2; primes.length < n; counter++) {
    if (isPrime(counter)) {
      primes.push(counter);
    }
  }
  return primes[n - 1];
}
