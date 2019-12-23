const {defaults} = require('jest-config')

module.exports = {
  browser: true,
  collectCoverage: false,
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  notify: true,
  testMatch: [
    '**/__tests__/**/?(*.)+(spec|test).js?(x)',
    '**/?(*.)+(spec|test).js?(x)'
  ],
  testPathIgnorePatterns: [
    '/dist/',
    '/node_modules/',
    '/src/'
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  verbose: true
}