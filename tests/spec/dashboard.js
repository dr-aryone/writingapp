describe('dashboard', function () {
  beforeEach(function () {
    browser.get('http://localhost:3000/#/dashboard');
  });

  it('should load the page', function () {
    expect(element(by.id('dashboard')).isPresent()).toBe(true);
  });

  it('should display the user\'s name', function () {
    expect(element(by.id('user_name')).isPresent()).toBe(true);
  });

  it('should display the user\'s books', function () {
    element.all(by.repeater('book in dash.userInfo.books')).count().then(function(count) {
      expect(count).toBeGreaterThan(0);
    });
  });
});
