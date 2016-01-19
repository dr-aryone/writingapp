(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('LogoutCtrl', ['$scope', '$location', 'authService', LogoutCtrl]);

  function LogoutCtrl ($scope, $location, authService) {
    $scope.logUserOut = logUserOut;

    function logUserOut () {
      console.log(authService.getUserStatus());

      authService
        .logout()
        .then(function () {
          $location.path('/login');
        });
    }
  }
})();
