module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '^src$': '<rootDir>/src/$',
  },
}
