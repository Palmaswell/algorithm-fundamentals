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
