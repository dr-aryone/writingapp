(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('DashboardCtrl', ['userInfo', 'dashboardService', '$location', '$uibModal', DashboardCtrl]);

  function DashboardCtrl (userInfo, dashboardService, $location, $uibModal) {
    // Method Declarations
    this.addBook = addBook;
    this.confirmDelete = confirmDelete;
    this.deleteBook = deleteBook;
    this.editBook = editBook;


    // Variable Declaratoins
    this.oneAtATime = true;
    this.userInfo = userInfo.data;


    // Method Definitions
    function addBook (booksList) {
      var modalInstance = $uibModal.open({
        animation:    true,
        templateUrl:  'views/partials/new-book.html',
        controller:   'NewBookCtrl',
        controllerAs: 'newBook'
      });

      modalInstance.result.then(function (newBook) {
        if (newBook) {
          dashboardService.createBook(newBook).then(function (res) {
            booksList.push(res.data);
          }, function () {
            console.log('There was an error adding the book');
          });
        }
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    }

    function confirmDelete (book, booksList) {
      var modalInstance = $uibModal.open({
        animation:    true,
        templateUrl:  'views/partials/confirm-box.html',
        controller:   'ConfirmCtrl',
        controllerAs: 'confirm',
        size:         'sm',
        resolve: {
          settings: function () {
            return {
              action: 'delete',
              itemName: book.title
            };
          }
        }
      });

      modalInstance.result.then(function (confirmed) {
        if (confirmed) {
          deleteBook(book, booksList);
        }
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    }

    function deleteBook (book, booksList) {
      dashboardService.deleteBook(booksList, book).then(function (res) {
        console.log(res);
      }, function () {
        console.log('there was an error deleting book ' + book.bookId);
      });
    }

    function editBook (book) {
      $location.path('/books/' + book.bookId);
    }
  }
}());
