(function () {
  'use strict';

  angular
    .module('writeAway')
    .factory('sceneService', ['$http', sceneService]);

  function sceneService ($http) {
    var methods = {
      createScene: createScene,
      getSceneContent: getSceneContent,
      saveScene: saveScene
    };

    function getSceneContent (sceneId) {
      return $http.get('/api/v1/scenes/' + sceneId);
    }

    function createScene (scene) {
      return $http.post('/api/v1/scenes', scene);
    }

    function saveScene (scene) {
      return $http.put('/api/v1/scenes', scene);
    }

    return methods;
  }
}());
