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
    "!rollup.config.js",
    "!coverage/**",
    "!build/**",
    "!example/**",
    "!example-react-native/**"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
};
