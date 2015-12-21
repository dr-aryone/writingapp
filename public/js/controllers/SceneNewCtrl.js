(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('SceneNewCtrl', [SceneNewCtrl]);

  function SceneNewCtrl () {
    this.pageId = 'new_scene';
  }
}());
