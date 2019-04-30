export const isPalindrome = (str: string): boolean => {
  const alphaChar = str
    .toLowerCase()
    .match(/[a-z]/g);
  return alphaChar.join('') === alphaChar.reverse().join('') ;
}
