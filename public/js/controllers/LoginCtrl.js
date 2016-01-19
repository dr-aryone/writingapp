(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('LoginCtrl', ['$location', 'authService', LoginCtrl]);

  function LoginCtrl ($location, authService) {
    /*jshint validthis:true */

    console.log(authService.getUserStatus());

    this.logUserIn = logUserIn;

    function logUserIn () {
      var self = this,
          username = this.form.username,
          password = this.form.password;

      authService
        .login(username, password)
        .then(function () {
          console.log('Login successful');
          self.form = {};
          $location.path('/dashboard');
        }, function (res) {
          console.log('Problem logging in');
        });
    }
  }
})();
