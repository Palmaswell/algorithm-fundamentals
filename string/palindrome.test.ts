import * as String from './';
test('Word, phrase, or sentance is palindrome', () => {
  expect(String.isPalindrome('A man, a plan, a canal, Panama!')).toBe(true);
  expect(String.isPalindrome('Was it a car or a cat I saw?')).toBe(true);
  expect(String.isPalindrome('No x in Nixon')).toBe(true);
});
