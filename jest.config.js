module.exports = {
  moduleFileExtensions: ['js'],
  transform: {
    '^.*\\js$': '<rootDir>/node_modules/babel-jest'
  },
  collectCoverageFrom: ['src/js/components/*.{js,jsx}'],
  coverageReporters: ['json', 'html'],
  coverageDirectory: '<rootDir>/test/coverageReport',
  collectCoverage: true,
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Unit test report',
        outputPath: 'test/unitTestReport.html',
        includeFailureMsg: true,
        includeConsoleLog: true,
        theme: 'darkTheme',
        logo: '../beer.png',
        dateFormat: 'dd-mmm-yy HH:MM:ss'
      }
    ]
  ]
};
