(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('RegisterCtrl', ['$location', 'authService', RegisterCtrl]);

  function RegisterCtrl ($location, authService) {
    /*jshint validthis:true */

    console.log(authService.getUserStatus());

    this.regUser = regUser;

    function regUser () {
      var self = this,
          newUser = self.form;

      authService
        .register(newUser)
        .then(function () {
          self.form = {};
          $location.path('/dashboard');
        }, function () {
          self.form = {};
        });
    }
  }
})();
