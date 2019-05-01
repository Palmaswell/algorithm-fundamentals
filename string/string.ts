/**
 *
 * @name inScramble
 * @description Have the function inScramble(str1,str2) take
 *  both parameters being passed and return true if
 * a portion of str1 characters can be rearranged to match
 * str2, otherwise return the string false. For example: if
 * str1 is "rkqodlw" and str2 is "world" the output should
 * return true. Punctuation and symbols will not be entered
 * with the parameters.
 */

export const inScramble = (str1: string, str2: string): boolean => {
  let stringBase = str1.split('');
  for(let i = 0; i < str2.length; i++) {
    if (stringBase.indexOf(str2[i]) === -1) {
      return false;
    }
    stringBase.splice(stringBase.indexOf(str2[i]), 1);
  }
  return true;
}


