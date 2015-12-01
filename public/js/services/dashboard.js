(function () {
  'use strict';

  angular
    .module('writeAway')
    .factory('dashboardService', ['$http', dashboardService]);

  function dashboardService ($http) {
    var methods = {
      deleteBook: deleteBook,
      getUser: getUser
    };

    function deleteBook (userBooks, bookObj) {
      return $http.delete('/api/v1/books', bookObj.bookId).then(function (res) {
        var book = _.findWhere(userBooks, { bookId: bookObj.bookId });
        return userBooks.splice(userBooks.indexOf(book), 1)[0];
      });
    }

    function getUser (userId) {
      return $http.get('/api/v1/users/' + userId);
    }

    return methods;
  }
}());
