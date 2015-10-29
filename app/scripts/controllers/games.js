'use strict';

/**
 * @ngdoc function
 * @name allFavesApp.controller:GamesCrtl
 * @description
 * # GamesCtrl
 * Controller of the allFavesApp
 */
angular.module('allFavesApp')
  .controller('GamesCtrl', function ($scope) {

    $scope.gamesToPlay = [
      {title: 'Kalimba', url: '#/games', description: 'For its co-op shared screen puzzle levels'},
      {title: 'Resident Evil', url: '#/games', description: 'Because it’s a classic survival horror game'},
      {title: 'Tomb Raider', url: '#/games', description: 'Seems like an interesting reboot of the original series'},
      {title: 'Braid', url: '#/games', description: 'For its time based game mechanic'},
      {title: 'Fez', url: '#/games', description: 'So zen to explore around a 2 1/2-D world'},
      {title: 'Minecraft', url: '#/games', description: 'To see why kids are obsessed with it'}
    ];

  });
