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
    snapshotSerializers: ["enzyme-to-json/serializer"],
    moduleNameMapper: {
        "^utils$": "<rootDir>/src/utils/utils.ts",
        "^register$": "<rootDir>/src/utils/register.ts",
        "\\.(css|less)$": "identity-obj-proxy",
    },
};
