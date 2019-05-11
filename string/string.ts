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
  for (let i = 0; i < str2.length; i++) {
    if (stringBase.indexOf(str2[i]) === -1) {
      return false;
    }
    stringBase.splice(stringBase.indexOf(str2[i]), 1);
  }
  return true;
};

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
  const result = sentence
    .map(
      (word: string): number =>
        word
          .split('')
          .map(
            (char: string): number => {
              const test = new RegExp(char, 'gi');
              const score = word.match(test).length;
              if (score === 1) {
                return 0;
              }
              return score;
            }
          )
          .reduce((acc, curr) => acc + curr)
    )
    .map((score: number, index: number) => ({ score, index }))
    .sort((el1, el2) => el2.score - el1.score);

  if (result[0].score === 0) {
    return -1;
  }
  return sentence[result[0].index];
};

/**
 * @name ceasarsCipher
 * @description
 */

export const ceasarsCipher = (str: string, n: number): string => {
  const lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const upperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  return str
    .split('')
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
    })
    .join('');
};

/**
 * @name countMinutes
 * @description Have the function countMinutes(str) take the str parameter
 * being passed which will be two times (each properly formatted with a colon
 * and am or pm) separated by a hyphen and return the total number of minutes
 * between the two times.
 * The time will be in a 12 hour clock format. For example: if str is
 * 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am
 * the output should be 1320.
 */
enum Period {
  am = 'am',
  pm = 'pm',
}
interface Time {
  hours: number;
  period: Period;
}

const formatTime = (time: string): string =>
  time
    .replace(/[ampm]/g, '')
    .split(':')
    .reduce(
      (acc: string, curr: string): string => {
        const minutes = (parseInt(curr, 10) / 60).toString().slice(2);
        return `${acc}.${minutes}`;
      }
    );

const createTime = (time: string): Time => ({
  hours: parseFloat(formatTime(time)),
  period: /am/g.test(time) ? Period.am : Period.pm,
});

export const countMinutes = (str: string): number => {
  const timeArr = str.split('-');
  const time1 = createTime(timeArr[0]);
  const time2 = createTime(timeArr[1]);
  const diff = time2.hours - time1.hours;
  if (time1.period === time2.period) {
    return time2.hours > time1.hours
      ? Math.round(diff * 60)
      : Math.round((24 + diff) * 60);
  }
  return Math.round((diff + 12) * 60);
};
