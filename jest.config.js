module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  testRegex: '/src/.*\\.test?\\.tsx?$',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "__tests__",
    "!coverage/**",
    "!build/**",
    "!example/**",
    "!example-react-native/**"
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
};
