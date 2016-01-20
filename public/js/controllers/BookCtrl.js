(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('BookCtrl', ['bookInfo', '$uibModal', 'bookService', BookCtrl]);

  function BookCtrl (bookInfo, $uibModal, bookService) {
    /*jshint validthis:true */

    // method declarations
    this.closeMsg = closeMsg;
    this.confirmDelete = confirmDelete;
    this.deleteScene = deleteScene;
    this.pushMsg = pushMsg;
    this.saveChanges = saveChanges;


    // variable declarations
    this.bookId = bookInfo.data._id;
    this.info = bookInfo.data;
    this.isSaving = false;
    this.messages = [];


    // method Definitions
    function closeMsg (index) {
      this.messages.splice(index, 1);
    }

    function confirmDelete (bookId, scene, scenesList) {
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
                  itemName: scene.title
                };
              }
            }
          });

      modalInstance.result.then(function (confirmed) {
        if (confirmed) {
          deleteScene(bookId, scene, scenesList, messages);
        }
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    }

    function deleteScene (bookId, scene, scenesList, messages) {
      var newMessage = null;

      bookService.deleteScene(bookId, scenesList, scene).then(function (res) {
        pushMsg(messages, 'success', 'The scene "' + res.title + '" was successfully deleted.');
      }, function () {
        pushMsg(messages, 'danger', 'Sorry, there was an error deleting "' + res.title + '".');
      });
    }

    function pushMsg (msgList, type, msg) {
      var newMessage = {
        text: msg,
        type: type
      };

      msgList.push(newMessage);
    }

    function saveChanges (book, bookId) {
      var self = this;

      bookService.saveBook(book, bookId).then(function (res) {
        self.pushMsg(messages, 'success', 'Your book\'s changes were successfully saved.');
        isSaving = false;
      }, function (res) {
        self.pushMsg(messages, 'danger', 'There was a problem saving the changes to your book.');
        isSaving = false;
      });
    }
  }
}());
