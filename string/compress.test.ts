import * as String from './';

test('simple string compression', () => {
  expect(String.compress('aaabbbcdd')).toMatch('3a3b1c2d');
  expect(String.compress('fccceeeeaazzz')).toMatch('1f3c4e2a3z');
});
