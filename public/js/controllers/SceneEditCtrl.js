(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('SceneEditCtrl', ['sceneContent', 'sceneService', '$timeout', '$location', '$window', SceneEditCtrl]);

  function SceneEditCtrl (sceneContent, sceneService, $timeout, $location, $window) {
    /*jshint validthis:true */

    // method declarations
    this.cancel = cancel;
    this.closeMsg = closeMsg;
    this.pushMsg = pushMsg;
    this.save = save;


    // variable declarations
    this.content = sceneContent.data;
    this.content.bookId = $location.search().bookId;
    this.pageId = 'scene_edit';
    this.isSaving = false;
    this.messages = [];
    this.tinymceOptions = { plugins: 'wordcount' };


    // method definitions
    function cancel () {
      $window.history.back();
    }

    function closeMsg (index) {
      this.messages.splice(index, 1);
    }

    function pushMsg (msgList, type, msg) {
      var newMessage = {
        text: msg,
        type: type
      };

      msgList.push(newMessage);
    }

    function save (sceneObj) {
      var self = this;
      self.isSaving = true;

      $timeout(function () {
        sceneService.saveScene(sceneObj.content).then(function (res) {
          pushMsg(self.messages, 'success', 'Your scene\'s changes were successfully saved.');
          self.isSaving = false;
        }, function (res) {
          pushMsg(messages, 'danger', 'There was a problem saving the changes to your book.');
          self.isSaving = false;
        });
      }, 100);
    }
  }
}());
