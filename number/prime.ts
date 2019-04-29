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
  for (let counter = 2; counter < n; counter +=1 ) {
    return n % counter === 0 ? false : true;
  }
};
