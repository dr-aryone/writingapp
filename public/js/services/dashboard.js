(function () {
  'use strict';

  angular
    .module('writeAway')
    .factory('dashboardService', ['$http', dashboardService]);

  function dashboardService ($http) {
    var methods = {
      createBook: createBook,
      deleteBook: deleteBook,
      getUser: getUser
    };

    function createBook (bookObj) {
      return $http.post('/api/v1/books', bookObj);
    }

    function deleteBook (userBooks, bookObj) {
      console.log(bookObj.bookId);
      return $http.delete('/api/v1/books/' + bookObj.bookId).then(function (res) {
        console.log(res);
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
