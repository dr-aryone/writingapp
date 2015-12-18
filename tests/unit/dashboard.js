'use strict';

describe('Dashboard service', function () {
  var dashboardService,
      httpBackend,
      userId = '1234',
      userBooks,
      bookObj,
      respondGetUser;

  respondGetUser = {
    "_id": "1234",
    "userName": "JoeSchmoe123",
    "firstName": "Joe",
    "lastName": "Schmoe",
    "books": [
      {
        "bookId": 1234,
        "title": "Some Cool Book",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "bookId": 1235,
        "title": "New American Novel",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "bookId": 1237,
        "title": "Some Cool Book II - Electric Bugaboo",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  };

  userBooks = [
    {
      "bookId": 1234,
      "title": "Some Cool Book",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "bookId": 1235,
      "title": "New American Novel",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "bookId": 1237,
      "title": "Some Cool Book II - Electric Bugaboo",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  bookObj = {
    "bookId": 1234,
    "title": "Some Cool Book",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  beforeEach(module('writeAway'));

  beforeEach(function () {
    inject(function ($httpBackend, _dashboardService_) {
      dashboardService = _dashboardService_;
      httpBackend = $httpBackend;
      httpBackend.when('GET', '/api/v1/users/' + userId).respond(respondGetUser);
      httpBackend.when('DELETE', '/api/v1/books').respond(bookObj);
      httpBackend.when('POST', '/api/v1/books').respond(bookObj);
    });
  });

  afterEach(function () {
    httpBackend.flush();
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('getUser method', function () {
    it('should return the user data', function () {
      dashboardService.getUser(userId).then(function (res) {
        expect(res.data).toBeDefined();
        expect(typeof res.data).toBe('object');
        expect(res.data).toEqual(respondGetUser);
      });
    });

    it('should contain an array of books for that user', function () {
      dashboardService.getUser(userId).then(function (res) {
        expect(res.data.books).toBeDefined();
        expect(Array.isArray(res.data.books)).toBeTruthy();
      })
    });
  });

  describe('deleteBook method', function () {
    it('should respond that the book was deleted', function () {
      dashboardService.deleteBook(userBooks, bookObj).then(function (res) {
        expect(res.bookId).toEqual(bookObj.bookId);
      });
    });
  });

  describe('createBook method', function () {
    it('should respond with the new book', function () {
      dashboardService.createBook(bookObj).then(function (res) {
        expect(res.data.bookId).toEqual(bookObj.bookId);
      });
    });
  });
});
