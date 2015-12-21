'use strict'

describe('book', function () {
  var bookService,
      httpBackend,
      bookId = 1234,
      respondGetBook,
      sceneObj,
      scenes,
      sceneId = 123,
      bookObj,
      bookId = 1234;

  respondGetBook = {
    "_id": "1234",
    "title": "Some Cool Book",
    "scenes": [
      { "sceneId": 123, "title": "Schmoe Goes to School", "wordCount": 200 },
      { "sceneId": 124, "title": "Cool Action Scene", "wordCount": 800 },
      { "sceneId": 125, "title": "Flashback", "wordCount": 250 }
    ]
  };

  sceneObj = { "sceneId": 123, "title": "Schmoe Goes to School", "wordCount": 200 };

  scenes = respondGetBook.scenes;

  bookObj = {
    "bookId": 1234,
    "title": "Some Cool Book",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  beforeEach(module('writeAway'));

  beforeEach(function () {
    inject(function ($httpBackend, _bookService_) {
      bookService = _bookService_;
      httpBackend = $httpBackend;
      httpBackend.when('GET', '/api/v1/books/' + bookId).respond(respondGetBook);
      httpBackend.when('DELETE', '/api/v1/scenes').respond(sceneObj);
      httpBackend.when('POST', '/api/v1/books/' + bookId).respond(respondGetBook);
    });
  });

  afterEach(function () {
    httpBackend.flush();
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('getBookInfo method', function () {
    it('should return data for the book', function () {
      bookService.getBookInfo(bookId).then(function (res) {
        expect(res.data).toBeDefined();
        expect(typeof res.data).toBe('object');
        expect(res.data).toEqual(respondGetBook);
      });
    });

    it('should contain an array of scenes for that book', function () {
      bookService.getBookInfo(bookId).then(function (res) {
        expect(res.data.scenes).toBeDefined();
        expect(Array.isArray(res.data.scenes)).toBeTruthy();
      })
    });
  });

  describe('deleteScene method', function () {
    it('should respond that the scene was deleted', function () {
      bookService.deleteScene(scenes, sceneObj).then(function (res) {
        expect(res.sceneId).toEqual(sceneObj.sceneId);
      });
    });
  });

  describe('saveChanges method', function () {
    it('should respond with the saved book', function () {
      bookService.saveBook(bookObj, bookId).then(function (res) {
        expect(res.data).toBeDefined();
      });
    });
  });
});
