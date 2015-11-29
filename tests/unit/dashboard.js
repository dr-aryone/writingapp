'use strict';

describe('Dashboard service', function () {
  var dashboardService,
      httpBackend,
      userId = '1234',
      respondUser;

  respondUser = {
    "_id": "1234",
    "userName": "JoeSchmoe123",
    "firstName": "Joe",
    "lastName": "Schmoe",
    "penName": "J. Schmoe",
    "books": [
      { "bookId": 1234, "title": "Some Cool Book" },
      { "bookId": 1235, "title": "New American Novel" },
      { "bookId": 1237, "title": "Some Cool Book II - Electric Bugaboo" }
    ]
  };

  beforeEach(module('writeAway'));

  describe('getUser method', function () {
    beforeEach(function () {
      inject(function ($httpBackend, _dashboardService_) {
        dashboardService = _dashboardService_;
        httpBackend = $httpBackend;
        httpBackend.when('GET', '/api/v1/users/' + userId).respond(respondUser);
      });
    });

    afterEach(function () {
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should return the user data', function () {
      dashboardService.getUser(userId).then(function (res) {
        expect(res.data).toBeDefined();
        expect(typeof res.data).toBe('object');
        expect(res.data).toEqual(respondUser);
      });
    });

    it('should contain an array of books for that user', function () {
      dashboardService.getUser(userId).then(function (res) {
        expect(res.data.books).toBeDefined();
        expect(Array.isArray(res.data.books)).toBeTruthy();
      })
    });
  });
});
