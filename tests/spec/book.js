describe('book editor', function () {
  beforeEach(function () {
    browser.get('http://localhost:3000/#/books/1234');
  });

  it('should load the page', function () {
    expect(element(by.id('book_editor')).isPresent()).toBe(true);
  });

  it('should display the book\'s title', function () {
    expect(element(by.id('book_title')).isPresent()).toBe(true);
  });

  it('should have a field to edit the description', function () {
    expect(element(by.id('book_description')).isPresent()).toBe(true);
  });

  it('should display the book\'s scenes', function () {
    element.all(by.repeater('scene in book.info.scenes')).count().then(function (count) {
      expect(count).toBeGreaterThan(0);
    });
  });

  it('should have the ability to delete a scene', function () {
    var currentScenesNum = element.all(by.repeater('scene in book.info.scenes')).count();

    var deleteBtn = element.all(by.css('.delete-scene')).first();
    deleteBtn.click();

    var confirmBtn = element(by.id('confirm_yes'));
    confirmBtn.click();

    var newScenesNum = element.all(by.repeater('scene in book.info.scenes')).count();
    expect(newScenesNum).toBeLessThan(currentScenesNum);
  });

  describe('when adding a new scene', function () {
    var addBtn = element(by.id('add_scene'));

    it('should have the ability to start a new scene', function () {
      expect(addBtn.isPresent()).toBeTruthy();
    });

    it('should take the user to the new scene editor', function () {
      addBtn.click();
      expect(element(by.id('new_scene')).isPresent()).toBeTruthy();
    });
  });

  it('should have a save button to save any edits to the book', function () {
    expect(element(by.id('save_book')).isPresent()).toBeTruthy();
  });
});
