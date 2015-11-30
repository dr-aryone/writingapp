(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('DashboardCtrl', ['userInfo', DashboardCtrl]);

  function DashboardCtrl (userInfo) {
    // Method Declarations
    this.editBook = editBook;
    this.deleteBook = deleteBook;


    // Variable Declaratoins
    this.oneAtATime = true;
    this.userInfo = userInfo.data;


    // Method Definitions
    function editBook (bookId) {
      console.log('Edit book ID ' + bookId);
    }

    function deleteBook (bookId) {
      console.log('Delete book ID ' + bookId);
    }
  }
}());
