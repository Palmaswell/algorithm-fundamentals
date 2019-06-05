/**
 * @name isPrime
 * @description Have the function isPrime(num) take the num parameter
 * being passed and return true if the parameter is a prime number,
 * otherwise return false. The range will be between 1 and 2^16.
*/

export const isPrime = (n: number): boolean => {
  if (n < 2 ** 16) {
    for (let counter = n - 1; counter > 2; counter-- ) {
      if (n % counter === 0) {
        return false;
      }
    }
    return true;
  }
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
  for(let counter = 2; primes.length <= n; counter++) {
    if (isPrime(counter)) {
      primes.push(counter);
    }
  }
  return primes[n];
}

/**
 * @name primeChecker
 * @description Have the function primeChecker(num) take num and return 1
 * if any arrangement of num comes out to be a prime number,
 * otherwise return 0.
 * For example: if num is 910, the output should be 1 because 910 can be
 * arranged into 109 or 019, both of which are primes.
*/
