(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('DashboardCtrl', ['userInfo', 'dashboardService', '$location', DashboardCtrl]);

  function DashboardCtrl (userInfo, dashboardService, $location) {
    // Method Declarations
    this.editBook = editBook;
    this.deleteBook = deleteBook;


    // Variable Declaratoins
    this.oneAtATime = true;
    this.userInfo = userInfo.data;


    // Method Definitions
    function editBook (book) {
      $location.path('/books/' + book.bookId);
    }

    function deleteBook (book, booksList) {
      dashboardService.deleteBook(booksList, book).then(function (res) {
        console.log(res);
      }, function () {
        console.log('there was an error deleting book ' + book.bookId);
      });
    }
  }
}());
