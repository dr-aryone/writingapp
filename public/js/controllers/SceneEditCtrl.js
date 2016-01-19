(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('SceneEditCtrl', ['sceneContent', 'sceneService', '$window', SceneEditCtrl]);

  function SceneEditCtrl (sceneContent, sceneService, $window) {
    /*jshint validthis:true */
    
    // method declarations
    this.cancel = cancel;
    this.closeMsg = closeMsg;
    this.pushMsg = pushMsg;
    this.save = save;


    // variable declarations
    this.content = sceneContent.data;
    this.pageId = 'scene_edit';
    this.isSaving = false;
    this.messages = [];


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

      sceneService.saveScene(sceneObj._id).then(function (res) {
        pushMsg(self.messages, 'success', 'Your scene\'s changes were successfully saved.');
        self.isSaving = false;
      }, function (res) {
        pushMsg(messages, 'danger', 'There was a problem saving the changes to your book.');
        self.isSaving = false;
      });
    }
  }
}());
