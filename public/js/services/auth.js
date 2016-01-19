(function () {
  'use strict';

  angular
    .module('writeAway')
    .factory('authService', ['$q', '$timeout', '$http', authService]);

  function authService ($q, $timeout, $http) {
    var user = null;

    function isLoggedIn () {
      if (user) {
        return user;
      } else {
        return false;
      }
    }

    function getUserStatus () {
      return user;
    }

    function getUserId () {
      return user._id;
    }

    function login (username, password) {
      var deferred = $q.defer();

      $http
        .post('/login', { username: username, password: password })
        .success(function (data) {
          if (data.status) {
            user = data.user;
            deferred.resolve();
          } else {
            user = false;
            deferred.reject();
          }
        })
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      return deferred.promise;
    }

    function logout () {
      var deferred = $q.defer();

      $http
        .get('/logout')
        .then(function (data) {
          user = false;
          deferred.resolve();
        }, function (data) {
          user = false;
          deferred.reject();
        });

      return deferred.promise;
    }

    function register (newUser) {
      var deferred = $q.defer();

      $http
        .post('/api/v1/users', newUser)
        .then(function (data, status) {
          if (data.status === 200) {
            deferred.resolve();
          } else {
            deferred.reject();
          }
        }, function (data) {
          deferred.reject();
        });

      return deferred.promise;
    }

    return ({
      isLoggedIn: isLoggedIn,
      getUserId: getUserId,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      register: register
    });
  }
})();
