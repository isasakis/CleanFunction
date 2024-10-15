export default {
    testEnvironment: 'node',
    moduleFileExtensions: ['js'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testMatch: ['**/?(*.)+(spec|test).js'],
  };