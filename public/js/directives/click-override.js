(function () {
  'use strict';

  angular
    .module('writeAway')
    .directive('clickOverride', [clickOverride]);

  function clickOverride () {
    function link (scope, el, attrs) {
      el.bind('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
    }

    return {
      restrict: 'A',
      link: link
    };
  }
}());
