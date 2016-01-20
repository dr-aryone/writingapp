(function () {
  'use strict';

  angular
    .module('writeAway')
    .factory('bookService', ['$http', bookService]);

  function bookService ($http) {
    var methods = {
      createScene: createScene,
      deleteScene: deleteScene,
      getBookInfo: getBookInfo,
      saveBook: saveBook
    };

    function createScene (sceneObj) {
      return $http.post('/api/v1/scenes', sceneObj);
    }

    function deleteScene (bookId, scenes, sceneObj) {
      return $http.delete('/api/v1/scenes/' + sceneObj._id, {params: {bookId: bookId}}).then(function (res) {
        var scene = _.findWhere(scenes, { _id: sceneObj._id });
        return scenes.splice(scenes.indexOf(scene), 1)[0];
      });
    }

    function getBookInfo (bookId) {
      return $http.get('/api/v1/books/' + bookId);
    }

    function saveBook (bookObj, bookId) {
      return $http.post('/api/v1/books/' + bookId, bookObj);
    }

    return methods;
  }
}());
