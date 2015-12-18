exports.config = {
  chromeOnly: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['tests/spec/**/*.js'],
  baseUrl: 'http://localhost:3000'
};
