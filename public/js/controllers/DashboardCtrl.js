(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('DashboardCtrl', ['userInfo', 'dashboardService', DashboardCtrl]);

  function DashboardCtrl (userInfo, dashboardService) {
    // Method Declarations
    this.editBook = editBook;
    this.deleteBook = deleteBook;


    // Variable Declaratoins
    this.oneAtATime = true;
    this.userInfo = userInfo.data;


    // Method Definitions
    function editBook (book) {
      console.log('Edit book ID ' + book.bookId);
    }

    function deleteBook (book) {
      dashboardService.deleteBook(this.userInfo.books, book).then(function (res) {
        console.log(res);
      }, function () {
        console.log('there was an error deleting book ' + book.bookId);
      });
    }
  }
}());
