import * as String from './';

test('returns the greatest common divisor between two Strings', () => {
  expect(String.inScramble('coodrebtqqkye', 'coderbyte')).toBe(true);
  expect(String.inScramble('thsisifasl3', 'thisisfalse')).toBe(false);
  expect(String.inScramble('lettrrkakaeaaaqq', 'letter')).toBe(true);
  expect(String.inScramble('aqwe', 'qa')).toBe(true);
  expect(String.inScramble('yelowrqwedlk', 'yellowred')).toBe(true);
  expect(String.inScramble('abcgggdfe', 'abcdef')).toBe(true);
  expect(String.inScramble('win33er', 'winner')).toBe(false);
});

test('Find the word with the most characters repetitions', () => {
  expect(String.letterCount('Hello apple pie')).toBe('Hello');
  expect(String.letterCount('Today, is the greatest day ever!')).toBe(
    'greatest'
  );
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

test('Returns the difference in minutes of two time periods in 12hr format', () => {
  expect(String.countMinutes('12:30pm-12:00am')).toBe(690);
  expect(String.countMinutes('1:23am-1:08am')).toBe(1425);
  expect(String.countMinutes('11:00am-2:10pm')).toBe(190);
  expect(String.countMinutes('12:31pm-12:34pm')).toBe(3);
  expect(String.countMinutes('5:00pm-5:11pm')).toBe(11);
});
