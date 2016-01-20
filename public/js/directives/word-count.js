(function () {
  'use strict';

  angular
    .module('writeAway')
    .directive('wordCount', [wordCount]);

  function wordCount () {
    function link (scope, el, attrs) {
      el.bind('click', function () {
        scope.wordCount = parseInt($('.mce-wordcount').text().split(' ')[1], 10);
      });
    }

    return {
      restrict: 'A',
      scope: {
        wordCount: '='
      },
      link: link
    };
  }
}());
