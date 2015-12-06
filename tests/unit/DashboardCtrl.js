(function () {
  'use strict';

  describe('DashboardCtrl', function() {
    beforeEach(angular.mock.module('writeAway'));

    var $controller;
    var userInfo = {
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

    beforeEach(angular.mock.inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    it('should have a method to delete a book', function () {
      var $scope = {};
      var controller = $controller('DashboardCtrl', {
        $scope: $scope,
        userInfo: userInfo
      });

      expect(controller.deleteBook).toBeDefined();
    });

    it('should have a method to edit a book', function () {
      var $scope = {};
      var controller = $controller('DashboardCtrl', {
        $scope: $scope,
        userInfo: userInfo
      });

      expect(controller.editBook).toBeDefined();
    });
  });
}());
