const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$'

module.exports = {
  testRegex: TEST_REGEX,
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^string/(.*)$': '<rootDir>/string/$1'
  }
}
