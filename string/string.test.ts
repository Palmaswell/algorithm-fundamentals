import * as String from './';

test('returns the greatest common divisor between two Strings', () => {
  expect(String.inScramble('coodrebtqqkye','coderbyte')).toBe(true);
  expect(String.inScramble('thsisifasl3', 'thisisfalse')).toBe(false);
  expect(String.inScramble('lettrrkakaeaaaqq', 'letter')).toBe(true);
  expect(String.inScramble('aqwe', 'qa')).toBe(true);
  expect(String.inScramble('yelowrqwedlk', 'yellowred')).toBe(true);
  expect(String.inScramble('abcgggdfe', 'abcdef')).toBe(true);
  expect(String.inScramble('win33er', 'winner')).toBe(false);
})

test('Find the word with the most characters repetitions', () => {
  expect(String.letterCount('Hello apple pie')).toBe('Hello');
  expect(String.letterCount('Today, is the greatest day ever!')).toBe('greatest');
  expect(String.letterCount('No words')).toBe(-1);
  expect(String.letterCount('None yellow')).toBe('None');
});

test('Caesar cipher shift the words of a string according to the given number parameter', () => {
  expect(String.ceasarsCipher('world!', 1)).toBe('xpsme!');
  expect(String.ceasarsCipher('coderBYTE', 2)).toBe('eqfgtDAVG');
  expect(String.ceasarsCipher('what', 2)).toBe('yjcv');
  expect(String.ceasarsCipher('dogs', 8)).toBe('lwoa');
  expect(String.ceasarsCipher('byte', 13)).toBe('olgr');
});
