(function () {
  'use strict';

  angular
    .module('writeAway', [
      'ngRoute',
      'ngCookies',
      'ui.bootstrap',
      'ui.sortable',
      'ui.tinymce'
    ])
    //.run(appRuntime)
    .config(appRouter);

  function appRuntime ($rootScope, $location, $route, authService) {
    $rootScope
      .$on('$routeChangeStart', function (event, next, current) {
        if (authService.isLoggedIn() === false) {
          $location.path('/login');
        }
      });
  }

  function appRouter ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl:  'views/lander.html',
        controller:   'LanderCtrl',
        controllerAs: 'lander'
      })
      .when('/login', {
        templateUrl:  'views/login.html',
        controller:   'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl:  'views/register.html',
        controller:   'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/dashboard', {
        templateUrl:  'views/dashboard.html',
        controller:   'DashboardCtrl',
        controllerAs: 'dash',
        resolve: {
          userInfo: function (dashboardService, authService) {
            return dashboardService.getUser(authService.getUserId());
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
