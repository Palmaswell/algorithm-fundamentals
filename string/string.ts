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

/**
 * @name letterCount
 * @descrition Have the function letterCount(str) take the str parameter being
 * passed and return the first word with the greatest number of repeated letters.
 * For example: "Today, is the greatest day ever!" should return greatest because it
 * has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are
 * no words with repeating letters return -1. Words will be separated by spaces
 */
export type LetterCountType = string | -1;
export interface ResultProps {
  index: number;
  score: number;
}

 export const letterCount = (str: string): LetterCountType => {
   const sentence = str.split(' ');
   const result = sentence.map((word: string): number => (
     word.split('')
      .map((char: string): number => {
        const test = new RegExp(char, 'gi');
        const score = word.match(test).length;
        if (score === 1) {
          return 0;
        }
        return score;
      }).reduce((acc, curr) => acc + curr)
   ))
   .map((score: number, index: number) => ({score, index}))
   .sort((el1, el2) => el2.score - el1.score);

   if (result[0].score === 0) {
     return -1;
   }
   return sentence[result[0].index];
 }

 /**
  * @name ceasarsCipher
  * @description
  */

export const ceasarsCipher = (str: string, n: number): string => {
  const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  return str.split('')
    .map((char: string) => {
      if (!/[A-Za-z]/g.test(char)) {
        return char;
      }
      let shiftPosition = lowerCase.indexOf(char.toLowerCase()) + n;
      if (shiftPosition > lowerCase.length - 1) {
        shiftPosition -= lowerCase.length;
      }
      return /[A-Z]/g.test(char)
       ? upperCase[shiftPosition]
       : lowerCase[shiftPosition];
    }).join('');
}
