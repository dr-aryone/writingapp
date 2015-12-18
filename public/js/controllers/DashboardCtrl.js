(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('DashboardCtrl', ['userInfo', 'dashboardService', '$location', '$uibModal', DashboardCtrl]);

  function DashboardCtrl (userInfo, dashboardService, $location, $uibModal) {
    // Method Declarations
    this.addBook = addBook;
    this.closeMsg = closeMsg;
    this.confirmDelete = confirmDelete;
    this.deleteBook = deleteBook;
    this.editBook = editBook;
    this.pushMsg = pushMsg;


    // Variable Declaratoins
    this.messages = [];
    this.oneAtATime = true;
    this.userInfo = userInfo.data;


    // Method Definitions
    function addBook (booksList) {
      var messages = this.messages,
          modalInstance = $uibModal.open({
            animation:    true,
            templateUrl:  'views/partials/new-book.html',
            controller:   'NewBookCtrl',
            controllerAs: 'newBook'
          });

      modalInstance.result.then(function (newBook) {
        if (newBook) {
          dashboardService.createBook(newBook).then(function (res) {
            booksList.push(res.data);
            pushMsg(messages, 'success', 'Hooray! Your new book, "' + res.data.title + '" was successfully created.');
          }, function () {
            pushMsg(messages, 'danger', 'What a downer, but we failed to create your book. Try again?');
          });
        }
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    }

    function closeMsg (index) {
      this.messages.splice(index, 1);
    }

    function confirmDelete (book, booksList) {
      var messages = this.messages,
          modalInstance = $uibModal.open({
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
          deleteBook(book, booksList, messages);
        }
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    }

    function deleteBook (book, booksList, messages) {
      var newMessage = null;

      dashboardService.deleteBook(booksList, book).then(function (res) {
        pushMsg(messages, 'success', 'The book "' + res.title + '" was successfully deleted.');
      }, function () {
        pushMsg(messages, 'danger', 'Sorry, there was an error deleting "' + res.title + '".');
      });
    }

    function editBook (book) {
      $location.path('/books/' + book.bookId);
    }

    function pushMsg (msgList, type, msg) {
      var newMessage = {
        text: msg,
        type: type
      };

      msgList.push(newMessage);
    }
  }
}());
