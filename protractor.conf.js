exports.config = {
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['tests/spec/**/*.js']
};
