(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('SceneEditCtrl', ['sceneContent', SceneEditCtrl]);

  function SceneEditCtrl (sceneContent) {
    this.content = sceneContent.data;
    this.pageId = 'scene_edit';
  }
}());
