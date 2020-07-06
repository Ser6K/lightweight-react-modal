module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,css}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx', 'css'],
    setupFiles: ['<rootDir>/enzyme.config.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: false,
    snapshotSerializers: ["enzyme-to-json/serializer"],
    moduleNameMapper: {
        "^utils$": "<rootDir>/src/utils/utils.js",
        "^register$": "<rootDir>/src/utils/register.js",
        "\\.(css|less)$": "identity-obj-proxy",
    },
};
