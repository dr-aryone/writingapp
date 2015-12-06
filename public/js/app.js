(function () {
  'use strict';

  angular
    .module('writeAway', [
      'ngRoute',
      'ui.bootstrap'
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
        controllerAs: 'dash',
        resolve: {
          userInfo: function (dashboardService) {
            return dashboardService.getUser('1234');
          }
        }
      })
      .when('/books/:bookId', {
        templateUrl:  'views/book.html',
        controller:   'BookCtrl',
        controllerAs: 'book'
      })
      .when('/scenes/:sceneId', {
        templateUrl:  'views/scene-edit.html',
        controller:   'SceneEditCtrl',
        controllerAs: 'scene'
      })
      .otherwise({ redirectTo: '/' });
  }
}());
