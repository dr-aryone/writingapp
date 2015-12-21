(function () {
  'use strict';

  angular
    .module('writeAway')
    .factory('sceneService', ['$http', sceneService]);

  function sceneService ($http) {
    var methods = {
      getSceneContent: getSceneContent,
      saveScene: saveScene
    };

    function getSceneContent (sceneId) {
      return $http.get('/api/v1/scenes/' + sceneId);
    }

    function saveScene (sceneId) {
      return $http.post('/api/v1/scenes/' + sceneId);
    }

    return methods;
  }
}());
