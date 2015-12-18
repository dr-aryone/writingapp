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

      var confirmBtn = element(by.id('confirm_yes'));
      confirmBtn.click();

      element.all(by.repeater('book in dash.userInfo.books')).count().then(function (newCount) {
        expect(newCount).toEqual(count - 1);
      });
    });
  });

  describe('there should be a way to add a new book', function () {
    var addBtn = element(by.id('add_book'));

    it('should have a button to trigger a modal', function () {
      expect(addBtn.isPresent()).toBeTruthy();
    });

    describe('when the user is adding a new book', function () {
      var currentBooksNum = null;

      beforeEach(function () {
        addBtn.click();
        currentBooksNum = element.all(by.repeater('book in dash.userInfo.books')).count();
        element(by.id('new_title')).sendKeys('My New Book');
        element(by.id('new_description')).sendKeys('Description');
      });

      it('should add a book when the form is filled out and submitted', function () {
        element(by.id('new_submit')).click();

        var newBooksNum = element.all(by.repeater('book in dash.userInfo.books')).count();
        expect(newBooksNum).toBeGreaterThan(currentBooksNum);
      });

      it('should not add a book when the user cancels', function () {
        element(by.id('new_cancel')).click();

        var newBooksNum = element.all(by.repeater('book in dash.userInfo.books')).count();
        expect(newBooksNum).toBe(currentBooksNum);
      });
    });
  });
});
