module.exports ={
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        // tell Jest to handle *.vue files
        'vue'
    ],
    transform: {
        // process *.vue files with vue-jest
        '^.+\\.vue$': require.resolve('vue-jest'),
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
            require.resolve('jest-transform-stub'),
        '^.+\\.jsx?$': require.resolve('babel-jest'),
        '^.+\\.tsx?$': require.resolve('ts-jest'),
    },
    transformIgnorePatterns: ['/node_modules/'],
    // support the same @ -> src alias mapping in source code
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testEnvironment: 'jest-environment-jsdom-fifteen',
    // serializer for snapshots
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
    // https://github.com/facebook/jest/issues/6766
    testURL: 'http://localhost:8080/',
    watchPlugins: [
        require.resolve('jest-watch-typeahead/filename'),
        require.resolve('jest-watch-typeahead/testname')
    ],
    testMatch: ["<rootDir>/tests/integration/*"],
    globals: {
        'ts-jest': {
            babelConfig: true
        }
    }
}
