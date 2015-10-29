'use strict';

/**
 * @ngdoc overview
 * @name allFavesApp
 * @description
 * # allFavesApp
 *
 * Main module of the application.
 */
angular
  .module('allFavesApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/games',{
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl',
        controllerAs: 'games'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
