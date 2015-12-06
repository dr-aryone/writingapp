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
    element.all(by.repeater('book in dash.userInfo.books')).count().then(function (count) {
      expect(count).toBeGreaterThan(0);
    });
  });

  it('should have a button that deletes a book', function () {
    element.all(by.repeater('book in dash.userInfo.books')).count().then(function (count) {
      var btn = element.all(by.css('.delete-book')).get(0);
      btn.click();

      element.all(by.repeater('book in dash.userInfo.books')).count().then(function (newCount) {
        expect(newCount).toEqual(count - 1);
      });
    });
  });
});
