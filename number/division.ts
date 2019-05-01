export const findCommonDivisor = (n1: number, n2: number): number => {
  let num = 1;
  for(let i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      num = i;
    }
  }
  return num;
}
