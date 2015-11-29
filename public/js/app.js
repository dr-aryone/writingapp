(function () {
  'use strict';

  angular
    .module('writeAway', [
      'ngRoute'
    ])
    .config(appRouter);

  function appRouter ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl:  'views/lander.html',
        controller:   'LanderCtrl',
        controllerAs: 'lander'
      })
      .when('/dashboard', {
        templateUrl:  'views/dashboard.html',
        controller:   'DashboardCtrl',
        controllerAs: 'dash'
      })
      .when('/scenes', {
        templateUrl:  'views/scenes.html',
        controller:   'ScenesCtrl',
        controllerAs: 'scenes'
      })
      .when('/scenes/:sceneId', {
        templateUrl:  'views/scene-edit.html',
        controller:   'SceneEditCtrl',
        controllerAs: 'scene'
      })
      .otherwise({ redirectTo: '/' });
  }
}());
