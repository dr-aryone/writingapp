(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('SceneNewCtrl', ['$location', '$timeout', 'sceneService', SceneNewCtrl]);

  function SceneNewCtrl ($location, $timeout, sceneService) {
    this.save = save;

    this.tinymceOptions = { plugins: 'wordcount' };
    this.pageId = 'new_scene';
    this.content = {};
    this.content.wordCount = 0;
    this.content.bookId = $location.search().bookId;

    function save (scene) {
      $timeout(function () {
        sceneService.createScene(scene).then(function (res) {
          console.log(res);
        });
      }, 100);
    }
  }
}());
