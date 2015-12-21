(function () {
  'use strict';

  angular
    .module('writeAway', [
      'ngRoute',
      'ui.bootstrap',
      'ui.sortable',
      'ui.tinymce'
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
        controllerAs: 'book',
        resolve: {
          bookInfo: function ($route, bookService) {
            return bookService.getBookInfo($route.current.params.bookId);
          }
        }
      })
      .when('/scenes/new', {
        templateUrl:  'views/scene-edit.html',
        controller:   'SceneNewCtrl',
        controllerAs: 'scene'
      })
      .when('/scenes/:sceneId', {
        templateUrl:  'views/scene-edit.html',
        controller:   'SceneEditCtrl',
        controllerAs: 'scene',
        resolve: {
          sceneContent: function ($route, sceneService) {
            return sceneService.getSceneContent($route.current.params.sceneId);
          }
        }
      })
      .otherwise({ redirectTo: '/' });
  }
}());
