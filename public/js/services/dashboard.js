(function () {
  'use strict';

  angular
    .module('writeAway')
    .factory('dashboardService', ['$http', dashboardService]);

  function dashboardService ($http) {
    var methods = {
      getUser: getUser
    };

    function getUser (userId) {
      return $http.get('/api/v1/users/' + userId);
    }

    return methods;
  }
}());
